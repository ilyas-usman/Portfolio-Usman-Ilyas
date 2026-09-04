"use client";

import React from "react";
import AcidSquares from "./acid-squares";
import { Code2, Terminal, Cpu, SquareCode, Boxes, Braces, Sparkles, Database } from "lucide-react";

export function AiInternAcidVisual() {
  return (
    <div className="relative w-full h-32 rounded-xl overflow-hidden mb-3 border border-red-500/30 bg-slate-950 shadow-inner group">
      {/* WebGL AcidSquares Shader */}
      <div className="absolute inset-0 z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
        <AcidSquares
          color1="#dc2626"
          color2="#7f1d1d"
          color3="#ffffff"
          detail="medium"
          speed={0.6}
          waveDepth={0.8}
          zoom={1.4}
          density={9.0}
          glow={1.2}
          exposure={2500}
          spread={0.28}
          stepSize={0.002}
          colorShift={0.2}
          contrast={1.1}
          brightness={1.1}
          opacity={0.85}
          mouseInteraction={true}
          mouseStrength={0.15}
          mouseRadius={0.4}
          grain={true}
          grainIntensity={0.04}
        />
      </div>

      {/* Overlay gradient mask */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent z-10 pointer-events-none" />

      {/* Floating Code Squares Matrix */}
      <div className="absolute inset-0 z-20 p-3 flex items-center justify-between pointer-events-none">
        <div className="grid grid-cols-4 gap-2 w-full">
          <div className="flex items-center justify-center p-2 rounded-lg bg-black/50 backdrop-blur-md border border-red-500/40 shadow-lg transform transition-transform group-hover:scale-105">
            <Code2 className="w-4 h-4 text-red-400 animate-pulse" />
          </div>
          <div className="flex items-center justify-center p-2 rounded-lg bg-black/50 backdrop-blur-md border border-red-500/40 shadow-lg transform transition-transform group-hover:scale-105 delay-75">
            <Terminal className="w-4 h-4 text-rose-300" />
          </div>
          <div className="flex items-center justify-center p-2 rounded-lg bg-black/50 backdrop-blur-md border border-red-500/40 shadow-lg transform transition-transform group-hover:scale-105 delay-100">
            <Cpu className="w-4 h-4 text-white" />
          </div>
          <div className="flex items-center justify-center p-2 rounded-lg bg-black/50 backdrop-blur-md border border-red-500/40 shadow-lg transform transition-transform group-hover:scale-105 delay-150">
            <SquareCode className="w-4 h-4 text-red-300" />
          </div>
          <div className="flex items-center justify-center p-2 rounded-lg bg-black/50 backdrop-blur-md border border-red-500/40 shadow-lg transform transition-transform group-hover:scale-105">
            <Boxes className="w-4 h-4 text-amber-400" />
          </div>
          <div className="flex items-center justify-center p-2 rounded-lg bg-black/50 backdrop-blur-md border border-red-500/40 shadow-lg transform transition-transform group-hover:scale-105">
            <Braces className="w-4 h-4 text-red-400" />
          </div>
          <div className="flex items-center justify-center p-2 rounded-lg bg-black/50 backdrop-blur-md border border-red-500/40 shadow-lg transform transition-transform group-hover:scale-105">
            <Sparkles className="w-4 h-4 text-rose-200 animate-spin" style={{ animationDuration: "6s" }} />
          </div>
          <div className="flex items-center justify-center p-2 rounded-lg bg-black/50 backdrop-blur-md border border-red-500/40 shadow-lg transform transition-transform group-hover:scale-105">
            <Database className="w-4 h-4 text-red-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiInternAcidVisual;
