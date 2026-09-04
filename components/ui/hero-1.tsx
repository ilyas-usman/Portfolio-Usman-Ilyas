"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Code2, CheckCircle2, Star, Download } from "lucide-react";

export interface Hero1Props {
  badgeText?: string;
  name?: string;
  urduName?: string;
  subscript?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
}

export function Hero1({
  badgeText = "SOFTWARE & MOTION DEVELOPER",
  name = "MUHAMMAD USMAN ILYAS",
  urduName = "محمد عثمان الیاس",
  subscript = "SOFTWARE ENGINEER",
  description = "Software Engineer | AI/ML & Generative AI Specialist | Building Intelligent, Scalable & Production-Ready Solutions",
  ctaText = "Download Resume",
  ctaHref = "/RESUME.pdf",
  onCtaClick,
  imageSrc = "/usman_profile.png",
  imageAlt = "Muhammad Usman Ilyas",
}: Hero1Props) {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onCtaClick) {
      onCtaClick();
    }
    if (ctaHref && ctaHref.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(ctaHref);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/15 dark:bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-red-500/10 dark:bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        {/* Left Column: Name, Subscript & CTA */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-white/5 border border-red-200 dark:border-white/10 text-xs font-mono tracking-wider text-red-600 dark:text-red-400">
            <Sparkles className="w-3.5 h-3.5 text-red-600 dark:text-red-500 animate-pulse" />
            <span>{badgeText}</span>
          </div>

          {/* Main Title / Name */}
          <div className="space-y-1.5">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-[2.05rem] xl:text-[2.65rem] 2xl:text-[3.1rem] font-black tracking-tight text-slate-900 dark:text-white uppercase leading-tight sm:whitespace-nowrap">
              {name}
            </h1>
            {urduName && (
              <div className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-500 tracking-wide font-sans">
                {urduName}
              </div>
            )}
            <p className="text-base sm:text-lg font-bold tracking-widest text-slate-600 dark:text-zinc-400 uppercase pt-1">
              {subscript}
            </p>
          </div>

          {/* Short Bio / Description */}
          <p className="max-w-xl mx-auto lg:mx-0 text-slate-700 dark:text-zinc-300 text-base sm:text-lg font-medium leading-relaxed">
            {description}
          </p>

          {/* CTA Action Button & Secondary Proof */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href={ctaHref}
              target={ctaHref.startsWith("#") ? undefined : "_blank"}
              rel={ctaHref.startsWith("#") ? undefined : "noopener noreferrer"}
              download={ctaHref.endsWith(".pdf") ? true : undefined}
              onClick={handleCtaClick}
              className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-base transition-all duration-300 shadow-[0_0_25px_rgba(239,68,68,0.4)] hover:shadow-[0_0_35px_rgba(239,68,68,0.7)] hover:scale-[1.02]"
            >
              <span>{ctaText}</span>
              <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-200/80 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-800 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white border border-slate-300 dark:border-white/10 font-medium text-base transition-all duration-200"
            >
              <Code2 className="w-4 h-4 text-slate-600 dark:text-zinc-400" />
              <span>View Projects</span>
            </a>
          </div>

          {/* Social Proof / Metrics */}
          <div className="pt-6 border-t border-slate-200 dark:border-white/10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
            <div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">5+</div>
              <div className="text-xs text-slate-500 dark:text-zinc-400">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">30+</div>
              <div className="text-xs text-slate-500 dark:text-zinc-400">Projects Delivered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-1">
                4.9 <Star className="w-4 h-4 text-amber-500 fill-amber-500 inline" />
              </div>
              <div className="text-xs text-slate-500 dark:text-zinc-400">Client Rating</div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Profile Picture Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-full max-w-sm sm:max-w-md">
            {/* Glowing Border Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-800 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500" />
            
            {/* Image Container */}
            <div className="relative rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/15 p-2 overflow-hidden shadow-2xl">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-zinc-950">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  unoptimized
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Subtle Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                {/* Floating Tag over image */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-zinc-200">Available for innovative projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
