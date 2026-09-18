"use client";
import React, { useRef, useEffect } from 'react';
import { useVisibilityActive } from './useInView';

type CanvasStrokeStyle = string | CanvasGradient | CanvasPattern;

interface GridOffset {
  x: number;
  y: number;
}

interface SquaresProps {
  direction?: 'diagonal' | 'up' | 'right' | 'down' | 'left';
  speed?: number;
  borderColor?: CanvasStrokeStyle;
  squareSize?: number;
  hoverFillColor?: CanvasStrokeStyle;
  vignetteColor?: string;
}

const Squares: React.FC<SquaresProps> = ({
  direction = 'right',
  speed = 1,
  borderColor = '#999',
  squareSize = 40,
  hoverFillColor = '#222',
  vignetteColor = '#050505'
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);
  const gridOffset = useRef<GridOffset>({ x: 0, y: 0 });
  const hoveredSquareRef = useRef<GridOffset | null>(null);
  const startRef = useRef<() => void>(() => {});
  const stopRef = useRef<() => void>(() => {});
  const activeRef = useRef<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let vignette: CanvasGradient | null = null;
    let pattern: CanvasPattern | null = null;
    let dpr = 1;
    let pixelW = 0;
    let pixelH = 0;

    const resizeCanvas = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      pixelW = Math.max(1, Math.round(canvas.offsetWidth * dpr));
      pixelH = Math.max(1, Math.round(canvas.offsetHeight * dpr));
      canvas.width = pixelW;
      canvas.height = pixelH;

      if (!ctx) return;

      const cellSize = Math.max(1, Math.round(squareSize * dpr));
      const tile = document.createElement('canvas');
      tile.width = cellSize;
      tile.height = cellSize;
      const tctx = tile.getContext('2d');
      if (tctx) {
        const lineWidth = Math.max(1, dpr);
        tctx.strokeStyle = borderColor;
        tctx.lineWidth = lineWidth;
        tctx.strokeRect(
          lineWidth / 2,
          lineWidth / 2,
          cellSize - lineWidth,
          cellSize - lineWidth
        );
        pattern = ctx.createPattern(tile, 'repeat');
      }

      vignette = ctx.createRadialGradient(
        pixelW / 2,
        pixelH / 2,
        0,
        pixelW / 2,
        pixelH / 2,
        Math.sqrt(pixelW ** 2 + pixelH ** 2) / 2
      );
      vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vignette.addColorStop(1, vignetteColor);
    };

    const syncCanvasPosition = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const rect = wrapper.getBoundingClientRect();
      const maxTop = Math.max(0, wrapper.offsetHeight - canvas.offsetHeight);
      const top = Math.min(maxTop, Math.max(0, -rect.top));
      canvas.style.transform = `translateY(${top}px)`;
    };

    const drawGrid = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, pixelW, pixelH);

      const cellSize = Math.max(1, Math.round(squareSize * dpr));
      const px = cellSize / squareSize;
      const ox = (gridOffset.current.x % squareSize) * px;
      const oy = (gridOffset.current.y % squareSize) * px;

      if (pattern) {
        ctx.save();
        ctx.translate(-ox, -oy);
        ctx.fillStyle = pattern;
        ctx.fillRect(ox, oy, pixelW + cellSize, pixelH + cellSize);
        ctx.restore();
      }

      if (hoveredSquareRef.current) {
        const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
        const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;
        const squareX =
          (startX + hoveredSquareRef.current.x * squareSize - (gridOffset.current.x % squareSize)) * px;
        const squareY =
          (startY + hoveredSquareRef.current.y * squareSize - (gridOffset.current.y % squareSize)) * px;
        ctx.fillStyle = hoverFillColor;
        ctx.fillRect(squareX, squareY, cellSize, cellSize);

        // Re-stroke the hovered cell so the fill doesn't erase the grid line.
        if (typeof borderColor === 'string') {
          const lineWidth = Math.max(1, dpr);
          ctx.strokeStyle = borderColor;
          ctx.lineWidth = lineWidth;
          ctx.strokeRect(
            squareX + lineWidth / 2,
            squareY + lineWidth / 2,
            cellSize - lineWidth,
            cellSize - lineWidth
          );
        }
      }

      if (vignette) {
        ctx.fillStyle = vignette;
        ctx.fillRect(0, 0, pixelW, pixelH);
      }
    };

    const handleResize = () => {
      resizeCanvas();
      syncCanvasPosition();
      drawGrid();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', syncCanvasPosition, { passive: true });
    resizeCanvas();
    syncCanvasPosition();

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1);
      switch (direction) {
        case 'right':
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          break;
        case 'left':
          gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize;
          break;
        case 'up':
          gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize;
          break;
        case 'down':
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        case 'diagonal':
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        default:
          break;
      }

      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      if (mouseX < 0 || mouseY < 0 || mouseX > rect.width || mouseY > rect.height) {
        hoveredSquareRef.current = null;
        return;
      }

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

      const hoveredSquareX = Math.floor((mouseX + gridOffset.current.x - startX) / squareSize);
      const hoveredSquareY = Math.floor((mouseY + gridOffset.current.y - startY) / squareSize);

      if (
        !hoveredSquareRef.current ||
        hoveredSquareRef.current.x !== hoveredSquareX ||
        hoveredSquareRef.current.y !== hoveredSquareY
      ) {
        hoveredSquareRef.current = { x: hoveredSquareX, y: hoveredSquareY };
      }
    };

    const handleMouseLeave = () => {
      hoveredSquareRef.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const start = () => {
      if (requestRef.current == null) {
        requestRef.current = requestAnimationFrame(updateAnimation);
      }
    };
    const stop = () => {
      if (requestRef.current != null) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
      }
    };
    startRef.current = start;
    stopRef.current = stop;

    // Render one static frame so the grid is present before becoming active.
    drawGrid();
    if (activeRef.current) start();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', syncCanvasPosition);
      stop();
      startRef.current = () => {};
      stopRef.current = () => {};
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize, vignetteColor]);

  useVisibilityActive(wrapperRef, (active) => {
    activeRef.current = active;
    if (active) startRef.current();
    else stopRef.current();
  });

  return (
    <div ref={wrapperRef} className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 block h-svh w-full border-none"></canvas>
    </div>
  );
};

export default Squares;
