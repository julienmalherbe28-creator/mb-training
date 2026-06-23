"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";
import ProgressBar from "@/components/ui/ProgressBar";
import Badge from "@/components/ui/Badge";
import { revealText, drawUnderline, prefersReducedMotion } from "@/lib/animations";
import { heroContent } from "@/content/home";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (titleRef.current) {
      const words = Array.from(titleRef.current.querySelectorAll("[data-word]"));
      revealText(words);
    }
    drawUnderline(underlineRef.current);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center bg-brand-dark text-white overflow-hidden pt-24 pb-20 px-4"
      aria-label="Présentation MB Training — coach running et trail à Chartres"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 75% 15%, #F36B24 0%, transparent 55%), radial-gradient(ellipse at 25% 85%, #6B8E5A 0%, transparent 55%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-8 max-w-5xl">
          <Badge className="w-fit">{heroContent.eyebrow}</Badge>

          <h1
            ref={titleRef}
            className="font-bebas leading-none"
            aria-label="Chaque course raconte une histoire."
          >
            <span data-word className="inline-block mr-3 text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] opacity-0">
              Chaque
            </span>
            <span data-word className="inline-block mr-3 text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] opacity-0">
              course
            </span>
            <span data-word className="inline-block text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] opacity-0">
              raconte
            </span>
            <br />
            <span className="relative inline-block">
              <span data-word className="font-caveat text-brand-orange italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl opacity-0">
                une histoire.
              </span>
              <svg
                aria-hidden="true"
                className="absolute -bottom-1 left-0 w-full overflow-visible"
                viewBox="0 0 280 10"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  ref={underlineRef}
                  d="M4 7 C 60 3, 120 8, 180 5 S 240 2, 276 6"
                  stroke="#F36B24"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0"
                />
              </svg>
            </span>
          </h1>

          <p className="font-inter text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            {heroContent.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href={heroContent.cta.primary.href} variant="primary" size="lg">
              {heroContent.cta.primary.label}
            </Button>
            <Button href={heroContent.cta.secondary.href} variant="outline" size="lg">
              {heroContent.cta.secondary.label}
            </Button>
          </div>

          <ProgressBar className="max-w-xs" />
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25"
        aria-hidden="true"
      >
        <span className="font-inter text-[10px] tracking-[0.3em] uppercase">Défiler</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  );
}
