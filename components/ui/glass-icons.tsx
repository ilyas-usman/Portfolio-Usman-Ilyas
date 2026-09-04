"use client";

import React from "react";
import "./glass-icons.css";

export interface GlassIconsItem {
  icon: React.ReactElement;
  color: string;
  label: string;
  customClass?: string;
  href?: string;
  onClick?: () => void;
}

const gradientMapping: Record<string, string> = {
  blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
};

export interface GlassIconsProps {
  items: GlassIconsItem[];
  className?: string;
}

export function GlassIcons({ items, className = "" }: GlassIconsProps) {
  const getBackgroundStyle = (color: string) => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <div className={`icon-btns ${className}`}>
      {items.map((item, index) => {
        const content = (
          <>
            <span className="icon-btn__back" style={getBackgroundStyle(item.color)} />
            <span className="icon-btn__front">
              <span className="icon-btn__icon text-white" aria-hidden="true">
                {item.icon}
              </span>
            </span>
            <span className="icon-btn__label text-slate-900 dark:text-white font-semibold">{item.label}</span>
          </>
        );

        if (item.href) {
          return (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`icon-btn ${item.customClass || ""}`}
              aria-label={item.label}
              onClick={item.onClick}
            >
              {content}
            </a>
          );
        }

        return (
          <button
            key={index}
            className={`icon-btn ${item.customClass || ""}`}
            aria-label={item.label}
            type="button"
            onClick={item.onClick}
          >
            {content}
          </button>
        );
      })}
    </div>
  );
}

export default GlassIcons;
