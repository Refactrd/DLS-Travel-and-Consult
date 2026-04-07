"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function LanguageTraining() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(36px)";
    el.style.transition =
      "opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        observer.disconnect();
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#F5F6FF] py-28 px-4 sm:px-6 lg:px-8">
      <div
        ref={contentRef}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="flex items-center justify-center gap-2 text-[#1818B1] text-xs font-bold uppercase mb-5">
          <span>✦</span>
          Language Training
          <span>✦</span>
        </p>

        <h2 className="font-display text-4xl sm:text-5xl md:text-[56px] font-medium text-gray-900 leading-[1.1] mb-6">
          Every Program Begins with Language
        </h2>

        <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-10">
          No matter which program you choose, language proficiency is the
          foundation. DLS runs a fully certified language school offering
          German, French, Spanish, Italian, Dutch, and more from A1 to C1.
        </p>

        <Link
          href="https://dashlanguageschool.com.ng"
          className="group relative inline-flex items-center px-8 py-4 rounded-full text-white font-semibold text-[15px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#1818B1]/30 hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg, #1818B1 0%, #0000FF 100%)" }}
        >
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <span className="relative z-10">Enquire About Classes</span>
        </Link>
      </div>
    </section>
  );
}