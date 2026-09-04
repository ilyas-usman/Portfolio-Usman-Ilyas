"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-10 h-10 rounded-full bg-white/80 border border-slate-300 ${className}`} />
    );
  }

  const isDark = (theme || resolvedTheme) === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-zinc-900/80 hover:bg-slate-100 dark:hover:bg-zinc-800 border border-slate-300 dark:border-white/10 shadow-md backdrop-blur-md transition-all duration-300 active:scale-95 ${className}`}
      aria-label="Toggle Light and Dark theme"
      title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
    >
      <Sun className={`w-5 h-5 text-amber-500 transition-all duration-500 ${isDark ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
      <Moon className={`absolute w-5 h-5 text-sky-400 transition-all duration-500 ${isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'}`} />
    </button>
  );
}
