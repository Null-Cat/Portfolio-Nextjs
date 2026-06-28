"use client";
import { useRef, useEffect, useMemo } from 'react';
import { useVisibilityActive } from './useInView';

interface LetterGlitchProps {
  glitchColors?: string[];
  glitchSpeed?: number;
  centerVignette?: boolean;
  outerVignette?: boolean;
  smooth?: boolean;
  characters?: string;
}

type Rgb = { r: number; g: number; b: number };

interface Letter {
  char: string;
  color: Rgb;
  startColor: Rgb;
  targetColor: Rgb;
  colorProgress: number;
  isTransitioning: boolean;
}

const BASE_CHAR_WIDTH = 10;
const BASE_CHAR_HEIGHT = 20;
const BASE_FONT_SIZE = 16;
// Cap on total cells (~1080p density). Larger screens get proportionally
// larger letters instead of an ever-growing grid, which is what caused the
// per-frame cost to explode on 1440p+ displays.
const MAX_CELLS = 12000;

const hexToRgb = (hex: string): Rgb | null => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (_m, r, g, b) => {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
};

const rgbString = (c: Rgb) => `rgb(${c.r}, ${c.g}, ${c.b})`;

const lerpColor = (start: Rgb, end: Rgb, factor: number): Rgb => ({
  r: Math.round(start.r + (end.r - start.r) * factor),
  g: Math.round(start.g + (end.g - start.g) * factor),
  b: Math.round(start.b + (end.b - start.b) * factor)
});

const LetterGlitch = ({
  glitchColors = ['#2b4539', '#61dca3', '#61b3dc'],
  glitchSpeed = 50,
  centerVignette = false,
  outerVignette = true,
  smooth = true,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789'
}: LetterGlitchProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const letters = useRef<Letter[]>([]);
  const transitioning = useRef<number[]>([]);
  const grid = useRef({ columns: 0, rows: 0 });
  const cellMetrics = useRef({
    charWidth: BASE_CHAR_WIDTH,
    charHeight: BASE_CHAR_HEIGHT,
    fontSize: BASE_FONT_SIZE
  });
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const lastGlitchTime = useRef(Date.now());
  const dimensions = useRef({ width: 0, height: 0 });
  const activeRef = useRef(false);
  const startRef = useRef<() => void>(() => {});
  const stopRef = useRef<() => void>(() => {});

  const lettersAndSymbols = useMemo(() => Array.from(characters), [characters]);

  // Parse the palette to RGB once so the animation loop never touches a regex.
  const glitchColorsRgb = useMemo(
    () => glitchColors.map(hexToRgb).filter((c): c is Rgb => c !== null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [glitchColors.join(',')]
  );
  const colorsRef = useRef(glitchColorsRgb);
  colorsRef.current = glitchColorsRgb;
  const charsRef = useRef(lettersAndSymbols);
  charsRef.current = lettersAndSymbols;

  const getRandomChar = () => {
    const chars = charsRef.current;
    return chars[Math.floor(Math.random() * chars.length)];
  };

  const getRandomColorRgb = (): Rgb => {
    const colors = colorsRef.current;
    return colors[Math.floor(Math.random() * colors.length)] ?? { r: 0, g: 0, b: 0 };
  };

  const calculateGrid = (width: number, height: number) => {
    const { charWidth, charHeight } = cellMetrics.current;
    const columns = Math.ceil(width / charWidth);
    const rows = Math.ceil(height / charHeight);
    return { columns, rows };
  };

  const initializeLetters = (columns: number, rows: number) => {
    grid.current = { columns, rows };
    const totalLetters = columns * rows;
    transitioning.current = [];
    letters.current = Array.from({ length: totalLetters }, () => {
      const color = getRandomColorRgb();
      return {
        char: getRandomChar(),
        color,
        startColor: color,
        targetColor: color,
        colorProgress: 1,
        isTransitioning: false
      };
    });
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = parent.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    dimensions.current = { width: rect.width, height: rect.height };

    if (context.current) {
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const rawCells = (rect.width / BASE_CHAR_WIDTH) * (rect.height / BASE_CHAR_HEIGHT);
    const scale = rawCells > MAX_CELLS ? Math.sqrt(rawCells / MAX_CELLS) : 1;
    cellMetrics.current = {
      charWidth: BASE_CHAR_WIDTH * scale,
      charHeight: BASE_CHAR_HEIGHT * scale,
      fontSize: BASE_FONT_SIZE * scale
    };

    const { columns, rows } = calculateGrid(rect.width, rect.height);
    initializeLetters(columns, rows);
    drawLetters();
  };

  // Full repaint of every cell. Only used on init and resize.
  const drawLetters = () => {
    if (!context.current || letters.current.length === 0) return;
    const ctx = context.current;
    const { width, height } = dimensions.current;
    const { charWidth, charHeight, fontSize } = cellMetrics.current;
    const cols = grid.current.columns;

    ctx.clearRect(0, 0, width, height);
    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = 'top';

    for (let index = 0; index < letters.current.length; index++) {
      const letter = letters.current[index];
      const x = (index % cols) * charWidth;
      const y = Math.floor(index / cols) * charHeight;
      ctx.fillStyle = rgbString(letter.color);
      ctx.fillText(letter.char, x, y);
    }
  };

  // Repaint only the given cells (clear + redraw), avoiding a full-grid pass.
  const redrawCells = (indices: number[]) => {
    if (!context.current) return;
    const ctx = context.current;
    const { charWidth, charHeight, fontSize } = cellMetrics.current;
    const cols = grid.current.columns;

    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = 'top';

    for (let k = 0; k < indices.length; k++) {
      const index = indices[k];
      const letter = letters.current[index];
      if (!letter) continue;
      const x = (index % cols) * charWidth;
      const y = Math.floor(index / cols) * charHeight;
      ctx.clearRect(x, y, charWidth, charHeight);
      ctx.fillStyle = rgbString(letter.color);
      ctx.fillText(letter.char, x, y);
    }
  };

  const updateLetters = (): number[] => {
    if (!letters.current || letters.current.length === 0) return [];

    const updateCount = Math.max(1, Math.floor(letters.current.length * 0.05));
    const changed: number[] = [];

    for (let i = 0; i < updateCount; i++) {
      const index = Math.floor(Math.random() * letters.current.length);
      const letter = letters.current[index];
      if (!letter) continue;

      letter.char = getRandomChar();
      const target = getRandomColorRgb();

      if (!smooth) {
        letter.color = target;
        letter.startColor = target;
        letter.targetColor = target;
        letter.colorProgress = 1;
      } else {
        letter.startColor = letter.color;
        letter.targetColor = target;
        letter.colorProgress = 0;
        if (!letter.isTransitioning) {
          letter.isTransitioning = true;
          transitioning.current.push(index);
        }
      }

      changed.push(index);
    }

    return changed;
  };

  // Advances only the cells currently fading and repaints just those cells.
  const handleSmoothTransitions = () => {
    const arr = transitioning.current;
    if (arr.length === 0 || !context.current) return;

    const ctx = context.current;
    const { charWidth, charHeight, fontSize } = cellMetrics.current;
    const cols = grid.current.columns;

    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = 'top';

    let write = 0;
    for (let i = 0; i < arr.length; i++) {
      const index = arr[i];
      const letter = letters.current[index];
      if (!letter) continue;

      letter.colorProgress += 0.05;
      let keep = true;
      if (letter.colorProgress >= 1) {
        letter.colorProgress = 1;
        letter.color = letter.targetColor;
        letter.isTransitioning = false;
        keep = false;
      } else {
        letter.color = lerpColor(letter.startColor, letter.targetColor, letter.colorProgress);
      }

      const x = (index % cols) * charWidth;
      const y = Math.floor(index / cols) * charHeight;
      ctx.clearRect(x, y, charWidth, charHeight);
      ctx.fillStyle = rgbString(letter.color);
      ctx.fillText(letter.char, x, y);

      if (keep) arr[write++] = index;
    }
    arr.length = write;
  };

  const animate = () => {
    const now = Date.now();
    if (now - lastGlitchTime.current >= glitchSpeed) {
      const changed = updateLetters();
      // In smooth mode the changed cells are repainted by the transition pass
      // below (they were just queued); non-smooth needs an immediate repaint.
      if (!smooth && changed.length > 0) {
        redrawCells(changed);
      }
      lastGlitchTime.current = now;
    }

    if (smooth) {
      handleSmoothTransitions();
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    context.current = canvas.getContext('2d');
    resizeCanvas();

    const start = () => {
      if (animationRef.current == null) {
        animate();
      }
    };
    const stop = () => {
      if (animationRef.current != null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
    startRef.current = start;
    stopRef.current = stop;

    if (activeRef.current) start();

    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        stop();
        resizeCanvas();
        if (activeRef.current) start();
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      stop();
      startRef.current = () => {};
      stopRef.current = () => {};
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [glitchSpeed, smooth]);

  useVisibilityActive(canvasRef, (active) => {
    activeRef.current = active;
    if (active) startRef.current();
    else stopRef.current();
  });

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
      {outerVignette && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle,_rgba(0,0,0,0)_60%,_rgba(0,0,0,1)_100%)]"></div>
      )}
      {centerVignette && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_60%)]"></div>
      )}
    </div>
  );
};

export default LetterGlitch;
