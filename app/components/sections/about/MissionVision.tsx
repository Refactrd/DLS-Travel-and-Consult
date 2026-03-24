"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function MissionVision() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = [
      { el: leftRef.current, delay: 0 },
      { el: dividerRef.current, delay: 150 },
      { el: rightRef.current, delay: 200 },
    ];

    targets.forEach(({ el }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(32px)";
      el.style.transition =
        "opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        targets.forEach(({ el, delay }) => {
          if (!el) return;
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
        });
        observer.disconnect();
      },
      { threshold: 0.15 }
    );

    const section = leftRef.current?.closest("section");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-28 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/talent.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
          loading="lazy"
        />
        {/* Subtle white wash to keep text crisp */}
        <div className="absolute inset-0 bg-white/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-0 items-center">

          {/* ── Left — Mission ─────────────────────────────── */}
          <div ref={leftRef} className="flex flex-col items-center text-center px-6 md:px-12 py-8">
            <p className="flex items-center gap-2 text-[#1818B1] text-xs font-bold  uppercase mb-6">
              <span>✦</span>
              Our Mission
              <span>✦</span>
            </p>
            <blockquote className="font-display text-2xl sm:text-3xl md:text-[32px] font-bold text-gray-900 leading-[1.25]">
              &ldquo;To make international education and migration accessible to
              every ambitious African, regardless of background.&rdquo;
            </blockquote>
          </div>

          {/* ── Vertical Divider ───────────────────────────── */}
          <div
            ref={dividerRef}
            className="hidden md:block w-px self-stretch bg-gray-300/60 my-8"
          />

          {/* ── Right — Vision ─────────────────────────────── */}
          <div ref={rightRef} className="flex flex-col items-center text-center px-6 md:px-12 py-8">
            <p className="flex items-center gap-2 text-[#1818B1] text-xs font-bold uppercase mb-6">
              <span>✦</span>
              Our Vision
              <span>✦</span>
            </p>
            <p className="font-display text-2xl sm:text-3xl md:text-[32px] font-bold text-gray-900 leading-[1.25]">
              A future where African talent moves freely across the world,
              equipped, confident, and well-represented.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}