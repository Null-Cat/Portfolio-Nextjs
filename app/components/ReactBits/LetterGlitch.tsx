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

interface GlyphAtlas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  cellW: number;
  cellH: number;
  cols: number;
  next: number;
  map: Map<string, number>;
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

const colorKey = (char: string, c: Rgb) => `${char}:${c.r},${c.g},${c.b}`;

const quantizeChannel = (v: number) =>
  Math.min(255, Math.max(0, Math.round(v / 4) * 4));

const atlasColor = (c: Rgb, palette: Rgb[]): Rgb => {
  for (let i = 0; i < palette.length; i++) {
    const p = palette[i];
    if (p.r === c.r && p.g === c.g && p.b === c.b) return p;
  }
  return {
    r: quantizeChannel(c.r),
    g: quantizeChannel(c.g),
    b: quantizeChannel(c.b)
  };
};

const createAtlas = (cellW: number, cellH: number, fontSize: number, slots: number): GlyphAtlas => {
  const cols = Math.max(1, Math.ceil(Math.sqrt(slots)));
  const rows = Math.max(1, Math.ceil(slots / cols));
  const canvas = document.createElement('canvas');
  canvas.width = cols * cellW;
  canvas.height = rows * cellH;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Failed to create glyph atlas context');
  }
  ctx.font = `${fontSize}px monospace`;
  ctx.textBaseline = 'top';
  ctx.textAlign = 'left';
  ctx.imageSmoothingEnabled = false;
  return { canvas, ctx, cellW, cellH, cols, next: 0, map: new Map() };
};

const growAtlas = (atlas: GlyphAtlas, fontSize: number) => {
  const canvas = document.createElement('canvas');
  canvas.width = atlas.canvas.width;
  canvas.height = atlas.canvas.height * 2;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.drawImage(atlas.canvas, 0, 0);
  ctx.font = `${fontSize}px monospace`;
  ctx.textBaseline = 'top';
  ctx.textAlign = 'left';
  ctx.imageSmoothingEnabled = false;
  atlas.canvas = canvas;
  atlas.ctx = ctx;
};

const ensureGlyph = (atlas: GlyphAtlas, char: string, color: Rgb, fontSize: number): number => {
  const key = colorKey(char, color);
  const cached = atlas.map.get(key);
  if (cached !== undefined) return cached;

  const rows = Math.floor(atlas.canvas.height / atlas.cellH);
  if (atlas.next >= atlas.cols * rows) {
    growAtlas(atlas, fontSize);
  }

  const index = atlas.next++;
  const sx = (index % atlas.cols) * atlas.cellW;
  const sy = Math.floor(index / atlas.cols) * atlas.cellH;
  const ctx = atlas.ctx;
  ctx.clearRect(sx, sy, atlas.cellW, atlas.cellH);
  ctx.fillStyle = rgbString(color);
  ctx.fillText(char, sx, sy);
  atlas.map.set(key, index);
  return index;
};

const blitGlyph = (
  ctx: CanvasRenderingContext2D,
  atlas: GlyphAtlas,
  index: number,
  dx: number,
  dy: number
) => {
  const sx = (index % atlas.cols) * atlas.cellW;
  const sy = Math.floor(index / atlas.cols) * atlas.cellH;
  ctx.drawImage(atlas.canvas, sx, sy, atlas.cellW, atlas.cellH, dx, dy, atlas.cellW, atlas.cellH);
};

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
    cellW: BASE_CHAR_WIDTH,
    cellH: BASE_CHAR_HEIGHT,
    fontSize: BASE_FONT_SIZE
  });
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const atlasRef = useRef<GlyphAtlas | null>(null);
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

  const paintCell = (index: number) => {
    const ctx = context.current;
    const atlas = atlasRef.current;
    if (!ctx || !atlas) return;
    const letter = letters.current[index];
    if (!letter) return;

    const { cellW, cellH, fontSize } = cellMetrics.current;
    const cols = grid.current.columns;
    const x = (index % cols) * cellW;
    const y = Math.floor(index / cols) * cellH;
    const color = atlasColor(letter.color, colorsRef.current);
    const glyph = ensureGlyph(atlas, letter.char, color, fontSize);
    ctx.clearRect(x, y, cellW, cellH);
    blitGlyph(ctx, atlas, glyph, x, y);
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
    const width = Math.max(1, Math.round(rect.width * dpr));
    const height = Math.max(1, Math.round(rect.height * dpr));

    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    dimensions.current = { width, height };

    const ctx = context.current;
    if (ctx) {
      ctx.imageSmoothingEnabled = false;
    }

    const rawCells = (rect.width / BASE_CHAR_WIDTH) * (rect.height / BASE_CHAR_HEIGHT);
    const scale = rawCells > MAX_CELLS ? Math.sqrt(rawCells / MAX_CELLS) : 1;
    const cellW = Math.max(1, Math.round(BASE_CHAR_WIDTH * scale * dpr));
    const cellH = Math.max(1, Math.round(BASE_CHAR_HEIGHT * scale * dpr));
    const fontSize = BASE_FONT_SIZE * scale * dpr;
    cellMetrics.current = { cellW, cellH, fontSize };

    const columns = Math.ceil(width / cellW);
    const rows = Math.ceil(height / cellH);
    const chars = charsRef.current;
    const colors = colorsRef.current;
    const atlas = createAtlas(cellW, cellH, fontSize, Math.max(1, chars.length * Math.max(colors.length, 1) * 4));
    for (let i = 0; i < chars.length; i++) {
      for (let j = 0; j < colors.length; j++) {
        ensureGlyph(atlas, chars[i], colors[j], fontSize);
      }
    }
    atlasRef.current = atlas;

    initializeLetters(columns, rows);
    drawLetters();
  };

  // Full repaint of every cell. Only used on init and resize.
  const drawLetters = () => {
    const ctx = context.current;
    const atlas = atlasRef.current;
    if (!ctx || !atlas || letters.current.length === 0) return;
    const { width, height } = dimensions.current;
    const { cellW, cellH, fontSize } = cellMetrics.current;
    const cols = grid.current.columns;
    const palette = colorsRef.current;

    ctx.clearRect(0, 0, width, height);

    for (let index = 0; index < letters.current.length; index++) {
      const letter = letters.current[index];
      const x = (index % cols) * cellW;
      const y = Math.floor(index / cols) * cellH;
      const color = atlasColor(letter.color, palette);
      const glyph = ensureGlyph(atlas, letter.char, color, fontSize);
      blitGlyph(ctx, atlas, glyph, x, y);
    }
  };

  const redrawCells = (indices: number[]) => {
    for (let k = 0; k < indices.length; k++) {
      paintCell(indices[k]);
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

      paintCell(index);

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

    context.current =
      canvas.getContext('2d', { alpha: false }) ??
      canvas.getContext('2d');
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
