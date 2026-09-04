"use client";

import React from "react";
import {
  Code2,
  Cpu,
  Bot,
  Brain,
  Sparkles,
  ShieldCheck,
  Layers,
  TableProperties,
  Workflow,
  Zap,
  LayoutGrid,
  Network,
  Radio,
  Server,
  Binary,
} from "lucide-react";

export function SkillIcon({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  const normalized = name.toLowerCase().trim();

  // Python
  if (normalized.includes("python")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.898 2C6.88 2 7.199 2.19 7.199 3.235v1.652h4.798v.55H5.405c-1.3 0-2.395.733-2.395 2.505v3.66c0 1.258.948 2.378 2.395 2.378h1.43v-1.683c0-1.745 1.487-2.906 3.12-2.906h4.786c1.332 0 2.395-1.026 2.395-2.38V4.505C17.136 3.118 15.938 2 11.898 2zm-2.4 1.636a.82.82 0 110 1.64.82.82 0 010-1.64z"
          fill="#3776AB"
        />
        <path
          d="M12.102 22c5.018 0 4.699-.19 4.699-1.235v-1.652h-4.798v-.55h6.592c1.3 0 2.395-.733 2.395-2.505v-3.66c0-1.258-.948-2.378-2.395-2.378h-1.43v1.683c0 1.745-1.487 2.906-3.12 2.906H9.259c-1.332 0-2.395 1.026-2.395 2.38v2.464c0 1.387 1.198 2.505 5.238 2.505zm2.4-1.636a.82.82 0 110-1.64.82.82 0 010 1.64z"
          fill="#FFD43B"
        />
      </svg>
    );
  }

  // C#
  if (normalized === "c#" || normalized.includes("csharp")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#512BD4" />
        <text x="4" y="16.5" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
          C#
        </text>
      </svg>
    );
  }

  // Java
  if (normalized === "java") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#007396" />
        <text x="3.5" y="16.5" fill="#ED8B00" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
          JAVA
        </text>
      </svg>
    );
  }

  // C++
  if (normalized.includes("c++") || normalized.includes("cpp")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#00599C" />
        <text x="3" y="16.5" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
          C++
        </text>
      </svg>
    );
  }

  // SQL
  if (normalized === "sql") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#00758F" />
        <text x="3.5" y="16" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
          SQL
        </text>
      </svg>
    );
  }

  // Node.js
  if (normalized.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L3 7.2v9.6l9 5.2 9-5.2V7.2L12 2zm0 2.3l6.7 3.9v7.8L12 19.9l-6.7-3.9V8.2L12 4.3z"
          fill="#339933"
        />
        <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" fill="#339933" />
      </svg>
    );
  }

  // Express.js
  if (normalized.includes("express")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#333333" />
        <text x="2" y="15.5" fill="#F0DB4F" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
          EXPRESS
        </text>
      </svg>
    );
  }

  // REST APIs
  if (normalized.includes("api") || normalized.includes("rest")) {
    return <Network className={`${className} text-orange-500`} />;
  }

  // Next.js
  if (normalized.includes("next")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#000000" stroke="#ffffff" strokeWidth="1" />
        <path d="M15 8v8M9 8v8l6-8" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // React
  if (normalized.includes("react")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    );
  }

  // TypeScript
  if (normalized.includes("typescript")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <text x="6" y="17" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
          TS
        </text>
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
          fill="#06B6D4"
        />
      </svg>
    );
  }

  // Flutter
  if (normalized.includes("flutter")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M14.2 2L4 12.2l3.1 3.1L17.3 5.1H14.2z" fill="#02569B" />
        <path d="M14.2 12.2L9.5 16.9l3.1 3.1 7.8-7.8h-6.2z" fill="#0175C2" />
        <path d="M9.5 16.9l3.1-3.1 3.1 3.1-3.1 3.1z" fill="#39CEFD" />
      </svg>
    );
  }

  // Dart
  if (normalized.includes("dart")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4 14l8-10 8 4-6 12L4 14z" fill="#0175C2" />
        <path d="M12 4l8 4-4 8-4-12z" fill="#02569B" />
      </svg>
    );
  }

  // SQL Server
  if (normalized.includes("sql server")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#CC292B" />
        <text x="2" y="15.5" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
          MSSQL
        </text>
      </svg>
    );
  }

  // MySQL
  if (normalized.includes("mysql")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00758F" />
        <text x="2" y="15.5" fill="#F29111" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
          MySQL
        </text>
      </svg>
    );
  }

  // MongoDB
  if (normalized.includes("mongodb")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2s-5.5 6.2-5.5 11.2c0 3.2 2.5 5.8 5.5 5.8s5.5-2.6 5.5-5.8C17.5 8.2 12 2 12 2zm.7 15.6v-5.2c0-.4-.3-.7-.7-.7s-.7.3-.7.7v5.2c-2.1-.3-3.7-2.1-3.7-4.4 0-3.6 3.7-8.2 4.4-9.1.7.9 4.4 5.5 4.4 9.1 0 2.3-1.6 4.1-3.7 4.4z"
          fill="#47A248"
        />
      </svg>
    );
  }

  // Git
  if (normalized === "git") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M21.7 10.6L13.4 2.3c-.4-.4-1-.4-1.4 0l-2 2 2.5 2.5c.5-.2 1.1-.1 1.5.3.4.4.5 1 .3 1.5l2.4 2.4c.5-.2 1.1-.1 1.5.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.5-.5-.6-1.1-.3-1.6l-2.3-2.3v5.6c.2.1.4.3.5.5.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1.2-.2.4-.4.7-.5v-5.7c-.3-.1-.5-.3-.7-.5-.5-.5-.6-1.1-.3-1.6L9.6 5l-7.3 7.3c-.4.4-.4 1 0 1.4l8.3 8.3c.4.4 1 .4 1.4 0l9.7-9.7c.4-.4.4-1 0-1.7z"
          fill="#F05032"
        />
      </svg>
    );
  }

  // GitHub
  if (normalized.includes("github")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          fill="currentColor"
        />
      </svg>
    );
  }

  // Visual Studio Code
  if (normalized.includes("visual studio code") || normalized.includes("vs code")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M17.5 2.5l3.5 1.8v15.4l-3.5 1.8-10.5-9.5L17.5 2.5z" fill="#0066B8" />
        <path d="M17.5 2.5L7 12l10.5 9.5V2.5z" fill="#007ACC" />
        <path d="M3 7.5L7 12 3 16.5V7.5z" fill="#1F9CF0" />
      </svg>
    );
  }

  // Visual Studio
  if (normalized.includes("visual studio")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M17 2l5 3v14l-5 3-10-9 10-11z" fill="#5C2D91" />
        <path d="M17 2L7 12l10 10V2z" fill="#804998" />
        <path d="M2 8l5 4-5 4V8z" fill="#C19AD2" />
      </svg>
    );
  }

  // Microsoft Excel
  if (normalized.includes("excel")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#217346" />
        <text x="7" y="17" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
          X
        </text>
      </svg>
    );
  }

  // RStudio
  if (normalized.includes("rstudio") || normalized === "r") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#75AADB" />
        <text x="7.5" y="17" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
          R
        </text>
      </svg>
    );
  }

  // Wireshark
  if (normalized.includes("wireshark")) {
    return <Radio className={`${className} text-cyan-500`} />;
  }

  // Cisco Packet Tracer
  if (normalized.includes("cisco") || normalized.includes("packet tracer")) {
    return <Server className={`${className} text-blue-500`} />;
  }

  // Agentic AI Automation
  if (normalized.includes("agentic") || normalized.includes("automation")) {
    return <Sparkles className={`${className} text-red-500 animate-pulse`} />;
  }

  // Artificial Intelligence / AI
  if (normalized.includes("artificial intelligence") || normalized === "ai") {
    return <Bot className={`${className} text-purple-500`} />;
  }

  // Machine Learning
  if (normalized.includes("machine learning") || normalized === "ml") {
    return <Brain className={`${className} text-indigo-500`} />;
  }

  // Authentication
  if (normalized.includes("auth")) {
    return <ShieldCheck className={`${className} text-green-500`} />;
  }

  // CRUD Operations
  if (normalized.includes("crud")) {
    return <Layers className={`${className} text-blue-500`} />;
  }

  // Database Normalization
  if (normalized.includes("normalization")) {
    return <TableProperties className={`${className} text-amber-500`} />;
  }

  // Object-Oriented Programming (OOP)
  if (normalized.includes("oop") || normalized.includes("object-oriented")) {
    return <Code2 className={`${className} text-red-500`} />;
  }

  // Data Structures & Algorithms (DSA)
  if (normalized.includes("dsa") || normalized.includes("data structures")) {
    return <Binary className={`${className} text-cyan-500`} />;
  }

  // SDLC
  if (normalized.includes("sdlc") || normalized.includes("life cycle")) {
    return <Workflow className={`${className} text-teal-500`} />;
  }

  // Agile Methodologies
  if (normalized.includes("agile")) {
    return <Zap className={`${className} text-yellow-500`} />;
  }

  // Database Design & Data Modelling
  if (normalized.includes("modelling") || normalized.includes("database design")) {
    return <LayoutGrid className={`${className} text-emerald-500`} />;
  }

  // Default fallback
  return <Code2 className={`${className} text-red-500`} />;
}
