"use client";

import { useEffect, useRef } from "react";

export default function AboutHero() {
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const targets = [
      { el: labelRef.current, delay: 0 },
      { el: headingRef.current, delay: 120 },
      { el: subRef.current, delay: 240 },
    ];

    targets.forEach(({ el }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(32px)";
      el.style.transition =
        "opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)";
    });

    // Fire on mount — this is the top of the page, no scroll needed
    const timer = setTimeout(() => {
      targets.forEach(({ el, delay }) => {
        if (!el) return;
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, delay);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-[#F5F6FF] pt-40 pb-24 px-4 sm:px-6 lg:px-8 h-[70vh]">
      <div className="max-w-3xl mx-auto text-center">

        {/* Section label */}
        <p
          ref={labelRef}
          className="flex items-center justify-center gap-2 text-[#1818B1] text-xs font-bold uppercase mb-5"
        >
          <span>✦</span>
          Our Story
          <span>✦</span>
        </p>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-medium text-gray-900 leading-[1.08] tracking-tight mb-7"
        >
          Built to Bridge
          <br />
          Continents
        </h1>

        {/* Subtext */}
        <p
          ref={subRef}
          className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-body"
        >
          DLS was founded with a single conviction: that every African who
          dreams of Europe deserves expert, honest, and affordable guidance.
        </p>
      </div>
    </section>
  );
}