"use client";

import { useEffect, useRef } from "react";

export default function CountriesHero() {
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
    <section className="w-full bg-[#F5F6FF] pt-40 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <p
          ref={labelRef}
          className="flex items-center justify-center gap-2 text-[#1818B1] text-xs font-bold tracking-[0.2em] uppercase mb-5"
        >
          <span>✦</span>
          Destinations
          <span>✦</span>
        </p>

        <h1
          ref={headingRef}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-[1.08] tracking-tight mb-7"
        >
          Explore Your Options
        </h1>

        <p
          ref={subRef}
          className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-body"
        >
          Every country on our list is one we&apos;ve successfully placed clients in.
          Click any country to explore available programs, requirements, and the
          application process.
        </p>
      </div>
    </section>
  );
}