"use client";

import React, { useEffect, useMemo, useRef, useCallback, useState } from "react";
import { useGesture } from "@use-gesture/react";
import { SkillIcon } from "@/components/ui/skill-icons";
import "./dome-gallery.css";

export interface SkillItem {
  id?: number | string;
  name: string;
  category: string;
  color: string;
}

const DEFAULTS = {
  maxVerticalRotationDeg: 5,
  dragSensitivity: 20,
  enlargeTransitionMs: 300,
  segments: 35,
};

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);
const normalizeAngle = (d: number) => ((d % 360) + 360) % 360;
const wrapAngleSigned = (deg: number) => {
  const a = (((deg + 180) % 360) + 360) % 360;
  return a - 180;
};
const getDataNumber = (el: HTMLElement, name: string, fallback: number) => {
  const attr = el.dataset[name] ?? el.getAttribute(`data-${name}`);
  const n = attr == null ? NaN : parseFloat(attr);
  return Number.isFinite(n) ? n : fallback;
};

function buildItems(pool: SkillItem[], seg: number) {
  const xCols = Array.from({ length: seg }, (_, i) => -37 + i * 2);
  const evenYs = [-4, -2, 0, 2, 4];
  const oddYs = [-3, -1, 1, 3, 5];

  const coords = xCols.flatMap((x, c) => {
    const ys = c % 2 === 0 ? evenYs : oddYs;
    return ys.map((y) => ({ x, y, sizeX: 2, sizeY: 2 }));
  });

  if (pool.length === 0) {
    return coords.map((c) => ({ ...c, name: "Skill", category: "Core", color: "#3b82f6" }));
  }

  // Deduplicate pool by skill name
  const uniquePool: SkillItem[] = [];
  const seenNames = new Set<string>();
  for (const item of pool) {
    if (!seenNames.has(item.name)) {
      seenNames.add(item.name);
      uniquePool.push(item);
    }
  }

  // Identify core programming languages & main frameworks
  const isPriority = (item: SkillItem) => {
    const name = item.name.toLowerCase();
    const cat = item.category.toLowerCase();
    return (
      name.includes("python") ||
      name.includes("c++") ||
      name.includes("flutter") ||
      name.includes("c#") ||
      name.includes("java") ||
      name.includes("react") ||
      name.includes("next.js") ||
      name.includes("node.js") ||
      name.includes("typescript") ||
      name.includes("dart") ||
      name.includes("sql") ||
      cat.includes("language") ||
      cat.includes("mobile")
    );
  };

  const priorityPool = uniquePool.filter(isPriority);
  const otherPool = uniquePool.filter((item) => !isPriority(item));

  // Order priority languages first so they fill the front-center focal slots
  const orderedSkills = [...priorityPool, ...otherPool];

  // Sort available slot coordinates by distance from front center (x = 0, y = 0)
  const sortedCoords = [...coords].sort((a, b) => {
    const distA = Math.abs(a.x) + Math.abs(a.y) * 0.8;
    const distB = Math.abs(b.x) + Math.abs(b.y) * 0.8;
    return distA - distB;
  });

  // Render exactly 1 tile per skill (no repeats)
  const count = orderedSkills.length;
  const selectedSlots = sortedCoords.slice(0, count);

  return selectedSlots.map((c, i) => ({
    ...c,
    name: orderedSkills[i].name,
    category: orderedSkills[i].category,
    color: orderedSkills[i].color,
  }));
}

function computeItemBaseRotation(offsetX: number, offsetY: number, sizeX: number, sizeY: number, segments: number) {
  const unit = 360 / segments / 2;
  const rotateY = unit * (offsetX + (sizeX - 1) / 2);
  const rotateX = unit * (offsetY - (sizeY - 1) / 2);
  return { rotateX, rotateY };
}

export interface DomeGalleryProps {
  skills: SkillItem[];
  fit?: number;
  fitBasis?: "auto" | "min" | "max" | "width" | "height";
  minRadius?: number;
  maxRadius?: number;
  padFactor?: number;
  overlayBlurColor?: string;
  maxVerticalRotationDeg?: number;
  dragSensitivity?: number;
  enlargeTransitionMs?: number;
  segments?: number;
  dragDampening?: number;
  openedImageWidth?: string;
  openedImageHeight?: string;
  imageBorderRadius?: string;
  openedImageBorderRadius?: string;
}

export function DomeGallery({
  skills,
  fit = 0.5,
  fitBasis = "auto",
  minRadius = 450,
  maxRadius = 750,
  padFactor = 0.25,
  overlayBlurColor = "transparent",
  maxVerticalRotationDeg = DEFAULTS.maxVerticalRotationDeg,
  dragSensitivity = DEFAULTS.dragSensitivity,
  enlargeTransitionMs = DEFAULTS.enlargeTransitionMs,
  segments = DEFAULTS.segments,
  dragDampening = 2,
  openedImageWidth = "280px",
  openedImageHeight = "220px",
  imageBorderRadius = "16px",
  openedImageBorderRadius = "20px",
}: DomeGalleryProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);
  const sphereRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const scrimRef = useRef<HTMLDivElement | null>(null);
  const focusedElRef = useRef<HTMLElement | null>(null);
  const originalTilePositionRef = useRef<{ left: number; top: number; width: number; height: number } | null>(null);

  const rotationRef = useRef({ x: 0, y: 0 });
  const startRotRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef<{ x: number; y: number } | null>(null);
  const draggingRef = useRef(false);
  const movedRef = useRef(false);
  const inertiaRAF = useRef<number | null>(null);
  const openingRef = useRef(false);
  const openStartedAtRef = useRef(0);
  const lastDragEndAt = useRef(0);
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  const items = useMemo(() => buildItems(skills, segments), [skills, segments]);

  const applyTransform = (xDeg: number, yDeg: number) => {
    const el = sphereRef.current;
    if (el) {
      el.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
    }
  };

  const lockedRadiusRef = useRef<number | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ro = new ResizeObserver((entries) => {
      const cr = entries[0].contentRect;
      const w = Math.max(1, cr.width);
      const h = Math.max(1, cr.height);
      const minDim = Math.min(w, h);
      const maxDim = Math.max(w, h);
      const aspect = w / h;
      let basis: number;
      switch (fitBasis) {
        case "min":
          basis = minDim;
          break;
        case "max":
          basis = maxDim;
          break;
        case "width":
          basis = w;
          break;
        case "height":
          basis = h;
          break;
        default:
          basis = aspect >= 1.3 ? w : minDim;
      }
      let radius = basis * fit;
      const heightGuard = h * 1.35;
      radius = Math.min(radius, heightGuard);
      radius = clamp(radius, minRadius, maxRadius);
      lockedRadiusRef.current = Math.round(radius);

      const viewerPad = Math.max(8, Math.round(minDim * padFactor));
      root.style.setProperty("--radius", `${lockedRadiusRef.current}px`);
      root.style.setProperty("--viewer-pad", `${viewerPad}px`);
      root.style.setProperty("--overlay-blur-color", overlayBlurColor);
      root.style.setProperty("--tile-radius", imageBorderRadius);
      root.style.setProperty("--enlarge-radius", openedImageBorderRadius);
      applyTransform(rotationRef.current.x, rotationRef.current.y);
    });
    ro.observe(root);
    return () => ro.disconnect();
  }, [fit, fitBasis, minRadius, maxRadius, padFactor, overlayBlurColor, imageBorderRadius, openedImageBorderRadius]);

  useEffect(() => {
    applyTransform(rotationRef.current.x, rotationRef.current.y);
  }, []);

  const stopInertia = useCallback(() => {
    if (inertiaRAF.current) {
      cancelAnimationFrame(inertiaRAF.current);
      inertiaRAF.current = null;
    }
  }, []);

  const startInertia = useCallback(
    (vx: number, vy: number) => {
      const MAX_V = 1.4;
      let vX = clamp(vx, -MAX_V, MAX_V) * 80;
      let vY = clamp(vy, -MAX_V, MAX_V) * 80;
      let frames = 0;
      const d = clamp(dragDampening ?? 0.6, 0, 1);
      const frictionMul = 0.94 + 0.055 * d;
      const stopThreshold = 0.015 - 0.01 * d;
      const maxFrames = Math.round(90 + 270 * d);
      const step = () => {
        vX *= frictionMul;
        vY *= frictionMul;
        if (Math.abs(vX) < stopThreshold && Math.abs(vY) < stopThreshold) {
          inertiaRAF.current = null;
          return;
        }
        if (++frames > maxFrames) {
          inertiaRAF.current = null;
          return;
        }
        const nextX = clamp(rotationRef.current.x - vY / 200, -maxVerticalRotationDeg, maxVerticalRotationDeg);
        const nextY = wrapAngleSigned(rotationRef.current.y + vX / 200);
        rotationRef.current = { x: nextX, y: nextY };
        applyTransform(nextX, nextY);
        inertiaRAF.current = requestAnimationFrame(step);
      };
      stopInertia();
      inertiaRAF.current = requestAnimationFrame(step);
    },
    [dragDampening, maxVerticalRotationDeg, stopInertia]
  );

  useGesture(
    {
      onDragStart: ({ event }) => {
        if (focusedElRef.current) return;
        stopInertia();
        const evt = event as PointerEvent;
        draggingRef.current = true;
        movedRef.current = false;
        startRotRef.current = { ...rotationRef.current };
        startPosRef.current = { x: evt.clientX, y: evt.clientY };
      },
      onDrag: ({ event, last, velocity = [0, 0], direction = [0, 0], movement }) => {
        if (focusedElRef.current || !draggingRef.current || !startPosRef.current) return;
        const evt = event as PointerEvent;
        const dxTotal = evt.clientX - startPosRef.current.x;
        const dyTotal = evt.clientY - startPosRef.current.y;
        if (!movedRef.current) {
          const dist2 = dxTotal * dxTotal + dyTotal * dyTotal;
          if (dist2 > 16) movedRef.current = true;
        }
        const nextX = clamp(
          startRotRef.current.x - dyTotal / dragSensitivity,
          -maxVerticalRotationDeg,
          maxVerticalRotationDeg
        );
        const nextY = wrapAngleSigned(startRotRef.current.y + dxTotal / dragSensitivity);
        if (rotationRef.current.x !== nextX || rotationRef.current.y !== nextY) {
          rotationRef.current = { x: nextX, y: nextY };
          applyTransform(nextX, nextY);
        }
        if (last) {
          draggingRef.current = false;
          let [vMagX, vMagY] = velocity;
          const [dirX, dirY] = direction;
          let vx = vMagX * dirX;
          let vy = vMagY * dirY;
          if (Math.abs(vx) < 0.001 && Math.abs(vy) < 0.001 && Array.isArray(movement)) {
            const [mx, my] = movement;
            vx = clamp((mx / dragSensitivity) * 0.02, -1.2, 1.2);
            vy = clamp((my / dragSensitivity) * 0.02, -1.2, 1.2);
          }
          if (Math.abs(vx) > 0.005 || Math.abs(vy) > 0.005) startInertia(vx, vy);
          if (movedRef.current) lastDragEndAt.current = performance.now();
          movedRef.current = false;
        }
      },
    },
    { target: mainRef, eventOptions: { passive: true } }
  );

  const closeModal = useCallback(() => {
    setActiveSkill(null);
    rootRef.current?.removeAttribute("data-enlarging");
    openingRef.current = false;
  }, []);

  const onTileClick = useCallback(
    (item: SkillItem) => {
      if (draggingRef.current || movedRef.current) return;
      if (performance.now() - lastDragEndAt.current < 80) return;
      setActiveSkill(item);
      rootRef.current?.setAttribute("data-enlarging", "true");
    },
    []
  );

  return (
    <div
      ref={rootRef}
      className="sphere-root relative border border-slate-200 dark:border-white/10 shadow-xl backdrop-blur-md"
      style={{
        ["--segments-x" as any]: segments,
        ["--segments-y" as any]: segments,
        ["--overlay-blur-color" as any]: overlayBlurColor,
        ["--tile-radius" as any]: imageBorderRadius,
        ["--enlarge-radius" as any]: openedImageBorderRadius,
      }}
    >
      <main ref={mainRef as any} className="sphere-main">
        <div className="stage">
          <div ref={sphereRef} className="sphere">
            {items.map((it, i) => (
              <div
                key={`${it.x},${it.y},${i}`}
                className="item"
                data-offset-x={it.x}
                data-offset-y={it.y}
                data-size-x={it.sizeX}
                data-size-y={it.sizeY}
                style={{
                  ["--offset-x" as any]: it.x,
                  ["--offset-y" as any]: it.y,
                  ["--item-size-x" as any]: it.sizeX,
                  ["--item-size-y" as any]: it.sizeY,
                }}
              >
                <div
                  className="item__image shadow-md"
                  style={{ borderColor: it.color }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View skill ${it.name}`}
                  onClick={() => onTileClick(it)}
                >
                  <div className="w-full h-full flex flex-col items-center justify-center p-1.5 text-center select-none bg-slate-900/90 text-white">
                    <SkillIcon name={it.name} className="w-6 h-6 mb-1" />
                    <span className="text-[11px] font-extrabold tracking-tight text-white leading-tight line-clamp-1">
                      {it.name}
                    </span>
                    <span className="text-[8.5px] font-mono font-medium text-slate-300 line-clamp-1">
                      {it.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overlay" />
        <div className="overlay overlay--blur" />
        <div className="edge-fade edge-fade--top" />
        <div className="edge-fade edge-fade--bottom" />

        {/* Modal viewer when tile clicked */}
        {activeSkill && (
          <div className="viewer pointer-events-auto" onClick={closeModal}>
            <div ref={scrimRef} className="scrim" onClick={closeModal} />
            <div
              className="relative z-30 p-6 rounded-2xl bg-white/95 dark:bg-zinc-900/95 border-2 shadow-2xl backdrop-blur-md flex flex-col items-center text-center space-y-3 animate-in fade-in zoom-in-95 duration-200"
              style={{ borderColor: activeSkill.color, minWidth: "260px" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="p-3 rounded-xl border flex items-center justify-center bg-slate-100 dark:bg-white/5"
                style={{ borderColor: activeSkill.color }}
              >
                <SkillIcon name={activeSkill.name} className="w-10 h-10" />
              </div>
              <div className="space-y-1">
                <div className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {activeSkill.name}
                </div>
                <div
                  className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono font-bold"
                  style={{ backgroundColor: `${activeSkill.color}20`, color: activeSkill.color }}
                >
                  {activeSkill.category}
                </div>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-1.5 rounded-xl bg-slate-200 dark:bg-zinc-800 text-xs font-bold text-slate-800 dark:text-zinc-200 hover:bg-slate-300 dark:hover:bg-zinc-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default DomeGallery;
