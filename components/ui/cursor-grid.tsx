"use client";

import React, { useRef, useEffect } from "react";
import "./cursor-grid.css";

export type FalloffType = "linear" | "smooth" | "sharp";

const FALLOFF_CURVES: Record<FalloffType, (t: number) => number> = {
  linear: (t) => t,
  smooth: (t) => t * t * (3 - 2 * t),
  sharp: (t) => t * t * t,
};

const hexToRgb = (hex: string): [number, number, number] => {
  const h = hex.replace("#", "");
  const v = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const num = parseInt(v.slice(0, 6), 16) || 0;
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
};

export interface CursorGridProps {
  cellSize?: number;
  color?: string;
  radius?: number;
  falloff?: FalloffType;
  holdTime?: number;
  fadeDuration?: number;
  lineWidth?: number;
  maxOpacity?: number;
  fillOpacity?: number;
  gridOpacity?: number;
  cellRadius?: number;
  clickPulse?: boolean;
  pulseSpeed?: number;
  className?: string;
}

export function CursorGrid({
  cellSize = 50,
  color = "#ef4444",
  radius = 120,
  falloff = "smooth",
  holdTime = 400,
  fadeDuration = 800,
  lineWidth = 1.2,
  maxOpacity = 1,
  fillOpacity = 0.15,
  gridOpacity = 0.05,
  cellRadius = 4,
  clickPulse = true,
  pulseSpeed = 600,
  className = "",
}: CursorGridProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const propsRef = useRef<CursorGridProps>({});
  const wakeRef = useRef<(() => void) | null>(null);

  propsRef.current = {
    cellSize,
    color,
    radius,
    falloff,
    holdTime,
    fadeDuration,
    lineWidth,
    maxOpacity,
    fillOpacity,
    gridOpacity,
    cellRadius,
    clickPulse,
    pulseSpeed,
  };

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let cols = 0;
    let rows = 0;
    let offX = 0;
    let offY = 0;
    let alphas = new Float32Array(0);
    let touched = new Float64Array(0);
    let w = 0;
    let h = 0;
    const pulses: { x: number; y: number; t0: number }[] = [];
    let raf = 0;
    let running = false;
    let lastFrame = 0;

    const rebuild = () => {
      const p = propsRef.current;
      w = container.offsetWidth;
      h = container.offsetHeight;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cSize = p.cellSize || 50;
      cols = Math.ceil(w / cSize) + 1;
      rows = Math.ceil(h / cSize) + 1;
      offX = (w - cols * cSize) / 2;
      offY = (h - rows * cSize) / 2;
      alphas = new Float32Array(cols * rows);
      touched = new Float64Array(cols * rows);
    };

    const cellCenter = (i: number): [number, number] => {
      const p = propsRef.current;
      const cSize = p.cellSize || 50;
      const cx = offX + (i % cols) * cSize + cSize / 2;
      const cy = offY + Math.floor(i / cols) * cSize + cSize / 2;
      return [cx, cy];
    };

    const energize = (x: number, y: number, boost?: number) => {
      const p = propsRef.current;
      const r = Math.max(p.radius || 120, 1);
      const cSize = p.cellSize || 50;
      const falloffKey = p.falloff || "smooth";
      const ease = FALLOFF_CURVES[falloffKey] ?? FALLOFF_CURVES.linear;
      const now = performance.now();
      const minCol = Math.max(0, Math.floor((x - r - offX) / cSize));
      const maxCol = Math.min(cols - 1, Math.floor((x + r - offX) / cSize));
      const minRow = Math.max(0, Math.floor((y - r - offY) / cSize));
      const maxRow = Math.min(rows - 1, Math.floor((y + r - offY) / cSize));
      const mOpacity = p.maxOpacity ?? 1;

      for (let cRow = minRow; cRow <= maxRow; cRow++) {
        for (let cCol = minCol; cCol <= maxCol; cCol++) {
          const i = cRow * cols + cCol;
          const [cx, cy] = cellCenter(i);
          const dist = Math.hypot(cx - x, cy - y);
          if (dist > r) continue;
          const level = ease(1 - dist / r) * mOpacity * (boost ?? 1);
          if (level > alphas[i]) {
            alphas[i] = level;
            touched[i] = now;
          } else if (level > 0) {
            touched[i] = now;
          }
        }
      }
    };

    const draw = (now: number) => {
      const p = propsRef.current;
      const dt = Math.min(now - lastFrame, 50);
      lastFrame = now;
      ctx.clearRect(0, 0, w, h);
      const [cr, cg, cb] = hexToRgb(p.color || "#ef4444");
      const cSize = p.cellSize || 50;
      const gOpacity = p.gridOpacity ?? 0;
      const fOpacity = p.fillOpacity ?? 0;
      const mOpacity = p.maxOpacity ?? 1;
      const lWidth = p.lineWidth ?? 1.2;
      const cRadius = p.cellRadius ?? 0;

      // Optional faint static lattice
      if (gOpacity > 0) {
        ctx.strokeStyle = `rgba(${cr}, ${cg}, ${cb}, ${gOpacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let cCol = 0; cCol <= cols; cCol++) {
          const x = Math.round(offX + cCol * cSize) + 0.5;
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
        }
        for (let cRow = 0; cRow <= rows; cRow++) {
          const y = Math.round(offY + cRow * cSize) + 0.5;
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
        }
        ctx.stroke();
      }

      // Expanding click pulses
      const pSpeed = p.pulseSpeed || 600;
      for (let pi = pulses.length - 1; pi >= 0; pi--) {
        const pulse = pulses[pi];
        const age = (now - pulse.t0) / 1000;
        const ringR = age * pSpeed;
        if (ringR > Math.hypot(w, h)) {
          pulses.splice(pi, 1);
          continue;
        }
        const band = cSize;
        const minCol = Math.max(0, Math.floor((pulse.x - ringR - band - offX) / cSize));
        const maxCol = Math.min(cols - 1, Math.floor((pulse.x + ringR + band - offX) / cSize));
        const minRow = Math.max(0, Math.floor((pulse.y - ringR - band - offY) / cSize));
        const maxRow = Math.min(rows - 1, Math.floor((pulse.y + ringR + band - offY) / cSize));
        for (let cRow = minRow; cRow <= maxRow; cRow++) {
          for (let cCol = minCol; cCol <= maxCol; cCol++) {
            const i = cRow * cols + cCol;
            const [cx, cy] = cellCenter(i);
            const dist = Math.hypot(cx - pulse.x, cy - pulse.y);
            if (Math.abs(dist - ringR) < band / 2 && mOpacity > alphas[i]) {
              alphas[i] = mOpacity;
              touched[i] = now;
            }
          }
        }
      }

      let anyVisible = pulses.length > 0;
      const fDuration = p.fadeDuration || 800;
      const hTime = p.holdTime || 400;
      const fadeStep = dt / Math.max(fDuration, 16);
      const half = cSize / 2;

      for (let i = 0; i < alphas.length; i++) {
        let a = alphas[i];
        if (a <= 0) continue;
        if (now - touched[i] > hTime) {
          a = Math.max(0, a - fadeStep);
          alphas[i] = a;
          if (a <= 0) continue;
        }
        anyVisible = true;

        const [cx, cy] = cellCenter(i);
        const gradient = ctx.createRadialGradient(cx, cy, half * 0.1, cx, cy, cSize);
        gradient.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, ${a})`);
        gradient.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`);

        const x = cx - half + 0.5;
        const y = cy - half + 0.5;
        const s = cSize - 1;

        ctx.beginPath();
        if (cRadius > 0 && "roundRect" in ctx) {
          ctx.roundRect(x, y, s, s, cRadius);
        } else {
          ctx.rect(x, y, s, s);
        }
        if (fOpacity > 0) {
          ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${a * fOpacity})`;
          ctx.fill();
        }
        ctx.strokeStyle = gradient;
        ctx.lineWidth = lWidth;
        ctx.stroke();
      }

      if (anyVisible) {
        raf = requestAnimationFrame(draw);
      } else {
        running = false;
        if ((propsRef.current.gridOpacity ?? 0) <= 0) ctx.clearRect(0, 0, w, h);
      }
    };

    const wake = () => {
      if (running) return;
      running = true;
      lastFrame = performance.now();
      raf = requestAnimationFrame(draw);
    };
    wakeRef.current = wake;

    const toLocal = (e: MouseEvent | PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      return [e.clientX - rect.left, e.clientY - rect.top];
    };

    const onPointerMove = (e: PointerEvent) => {
      const [x, y] = toLocal(e);
      energize(x, y);
      wake();
    };

    const onPointerDown = (e: PointerEvent) => {
      if (!propsRef.current.clickPulse) return;
      const [x, y] = toLocal(e);
      pulses.push({ x, y, t0: performance.now() });
      wake();
    };

    const ro = new ResizeObserver(() => {
      rebuild();
      wake();
    });
    ro.observe(container);
    rebuild();
    wake();

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerdown", onPointerDown);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerdown", onPointerDown);
    };
  }, [cellSize]);

  useEffect(() => {
    wakeRef.current?.();
  }, [gridOpacity, color, lineWidth, maxOpacity, fillOpacity, cellRadius]);

  return (
    <div ref={containerRef} className={`cursor-grid ${className}`}>
      <canvas ref={canvasRef} className="cursor-grid__canvas" />
    </div>
  );
}

export default CursorGrid;
