"use client";
import { useRef, useEffect, useMemo, useCallback } from 'react';

interface RGB {
  r: number;
  g: number;
  b: number;
}

interface LetterGlitchProps {
  glitchColors?: string[];
  glitchSpeed?: number;
  centerVignette?: boolean;
  outerVignette?: boolean;
  smooth?: boolean;
  characters?: string;
}

const BASE_FONT_SIZE = 16;
const BASE_CHAR_WIDTH = 10;
const BASE_CHAR_HEIGHT = 20;

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
  const letters = useRef<
    {
      char: string;
      color: string;
      colorRgb: RGB;
      fromColor: RGB;
      targetColor: RGB;
      colorProgress: number;
    }[]
  >([]);
  const grid = useRef({ columns: 0, rows: 0 });
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const lastGlitchTime = useRef(
    typeof performance !== 'undefined' ? performance.now() : Date.now()
  );
  const canvasSize = useRef({ width: 0, height: 0 });
  const transitioningIndices = useRef<Set<number>>(new Set());
  const isMobileRef = useRef(false);
  const metrics = useRef({
    fontSize: BASE_FONT_SIZE,
    charWidth: BASE_CHAR_WIDTH,
    charHeight: BASE_CHAR_HEIGHT
  });
  const lastFrameTime = useRef(0);

  const lettersAndSymbols = useMemo(() => Array.from(characters), [characters]);
  const glitchPalette = useMemo(() => glitchColors.slice(), [glitchColors]);

  const getRandomChar = useCallback(() => {
    return lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
  }, [lettersAndSymbols]);

  const hexToRgb = (hex: string): RGB | null => {
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
  const glitchPaletteRgb = useMemo(() => {
    const fallback: RGB = { r: 97, g: 220, b: 163 };
    const parsed = glitchPalette
      .map(color => hexToRgb(color))
      .filter((value): value is RGB => Boolean(value));
    return parsed.length > 0 ? parsed : [fallback];
  }, [glitchPalette]);
  const getRandomColor = useCallback(() => {
    return glitchPaletteRgb[Math.floor(Math.random() * glitchPaletteRgb.length)];
  }, [glitchPaletteRgb]);
  const rgbToCss = ({ r, g, b }: RGB) => `rgb(${r}, ${g}, ${b})`;

  const interpolateColor = (start: RGB, end: RGB, factor: number): RGB => ({
    r: Math.round(start.r + (end.r - start.r) * factor),
    g: Math.round(start.g + (end.g - start.g) * factor),
    b: Math.round(start.b + (end.b - start.b) * factor)
  });

  const calculateGrid = (width: number, height: number) => {
    const { charWidth, charHeight } = metrics.current;
    const columns = Math.ceil(width / charWidth);
    const rows = Math.ceil(height / charHeight);
    return { columns, rows };
  };

  const initializeLetters = useCallback((columns: number, rows: number) => {
    grid.current = { columns, rows };
    const totalLetters = columns * rows;
    letters.current = Array.from({ length: totalLetters }, () => {
      const baseColor = getRandomColor();
      return {
        char: getRandomChar(),
        color: rgbToCss(baseColor),
        colorRgb: baseColor,
        fromColor: baseColor,
        targetColor: baseColor,
        colorProgress: 1
      };
    });
    transitioningIndices.current.clear();
  }, [getRandomChar, getRandomColor]);

  const drawLetters = useCallback(() => {
    const ctx = context.current;

    if (!ctx || letters.current.length === 0) {
      return;
    }

    const { width, height } = canvasSize.current;
    if (width === 0 || height === 0) {
      return;
    }
    const { fontSize, charWidth, charHeight } = metrics.current;

    ctx.clearRect(0, 0, width, height);
    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = 'top';

    letters.current.forEach((letter, index) => {
      const x = (index % grid.current.columns) * charWidth;
      const y = Math.floor(index / grid.current.columns) * charHeight;
      ctx.fillStyle = letter.color;
      ctx.fillText(letter.char, x, y);
    });
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const rect = parent.getBoundingClientRect();
    const isMobile = window.innerWidth <= 768;
    isMobileRef.current = isMobile;

    const dpr = window.devicePixelRatio || 1;
    const maxDpr = isMobile ? 1.5 : 2;
    const effectiveDpr = Math.min(dpr, maxDpr);

    const densityScale = isMobile ? 1.4 : 1;
    const fontSize = Math.max(12, Math.round(BASE_FONT_SIZE * densityScale));
    const charWidth = Math.max(8, Math.round(BASE_CHAR_WIDTH * densityScale));
    const charHeight = Math.max(fontSize + 4, Math.round(BASE_CHAR_HEIGHT * densityScale));
    metrics.current = { fontSize, charWidth, charHeight };

    canvas.width = rect.width * effectiveDpr;
    canvas.height = rect.height * effectiveDpr;
    canvasSize.current = { width: rect.width, height: rect.height };

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    if (context.current) {
      context.current.setTransform(effectiveDpr, 0, 0, effectiveDpr, 0, 0);
    }

    const { columns, rows } = calculateGrid(rect.width, rect.height);
    initializeLetters(columns, rows);
    drawLetters();
  }, [drawLetters, initializeLetters]);

  const updateLetters = useCallback(() => {
    if (!letters.current || letters.current.length === 0) return;

    const updateRatio = isMobileRef.current ? 0.02 : 0.05;
    const updateCount = Math.max(1, Math.floor(letters.current.length * updateRatio));

    for (let i = 0; i < updateCount; i++) {
      const index = Math.floor(Math.random() * letters.current.length);
      if (!letters.current[index]) continue;

      const letter = letters.current[index];
      letter.char = getRandomChar();
      const nextColor = getRandomColor();

      if (!smooth) {
        letter.color = rgbToCss(nextColor);
        letter.colorRgb = nextColor;
        letter.fromColor = nextColor;
        letter.targetColor = nextColor;
        letter.colorProgress = 1;
        transitioningIndices.current.delete(index);
      } else {
        letter.fromColor = letter.colorRgb;
        letter.targetColor = nextColor;
        letter.colorProgress = 0;
        transitioningIndices.current.add(index);
      }
    }
  }, [getRandomChar, getRandomColor, smooth]);

  const handleSmoothTransitions = useCallback(() => {
    if (transitioningIndices.current.size === 0) return;

    let needsRedraw = false;
    const colorStep = isMobileRef.current ? 0.1 : 0.05;
    const completed: number[] = [];

    transitioningIndices.current.forEach(index => {
      const letter = letters.current[index];
      if (!letter) {
        completed.push(index);
        return;
      }

      letter.colorProgress += colorStep;
      if (letter.colorProgress >= 1) {
        letter.colorProgress = 1;
        letter.colorRgb = letter.targetColor;
        letter.fromColor = letter.targetColor;
        letter.color = rgbToCss(letter.targetColor);
        completed.push(index);
        needsRedraw = true;
        return;
      }

      const blended = interpolateColor(letter.fromColor, letter.targetColor, letter.colorProgress);
      letter.color = rgbToCss(blended);
      letter.colorRgb = blended;
      needsRedraw = true;
    });

    completed.forEach(index => transitioningIndices.current.delete(index));

    if (needsRedraw) {
      drawLetters();
    }
  }, [drawLetters]);

  const animate = useCallback(() => {
    const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
    const frameInterval = isMobileRef.current ? 1000 / 45 : 1000 / 60;
    const effectiveGlitchInterval = (isMobileRef.current ? 1.5 : 1) * glitchSpeed;

    if (now - lastFrameTime.current >= frameInterval) {
      if (now - lastGlitchTime.current >= effectiveGlitchInterval) {
        updateLetters();
        drawLetters();
        lastGlitchTime.current = now;
      }

      if (smooth) {
        handleSmoothTransitions();
      }

      lastFrameTime.current = now;
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [drawLetters, glitchSpeed, handleSmoothTransitions, smooth, updateLetters]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    context.current = canvas.getContext('2d');
    const startTime = typeof performance !== 'undefined' ? performance.now() : Date.now();
    lastFrameTime.current = startTime;
    lastGlitchTime.current = startTime;
    resizeCanvas();
    animate();

    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        cancelAnimationFrame(animationRef.current as number);
        resizeCanvas();
        animate();
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [animate, resizeCanvas]);

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
