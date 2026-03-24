"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "200+", label: "Clients Helped Successfully" },
  { value: "1-on-1", label: "Personalized Support" },
];

export default function AboutStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const groups = [
      { el: labelRef.current, delay: 0 },
      { el: headingRef.current, delay: 100 },
      { el: imageRef.current, delay: 220 },
      { el: textRef.current, delay: 340 },
      { el: statsRef.current, delay: 460 },
    ];

    groups.forEach(({ el }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      el.style.transition =
        "opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        groups.forEach(({ el, delay }) => {
          if (!el) return;
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
        });
        observer.disconnect();
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Counter animation for stats
  useEffect(() => {
    const statsEl = statsRef.current;
    if (!statsEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        // Trigger number count-up on the numeric stats
        const counters = statsEl.querySelectorAll<HTMLElement>("[data-count]");
        counters.forEach((counter) => {
          const target = counter.dataset.count ?? "";
          const isNumeric = /^\d+$/.test(target);
          if (!isNumeric) return;

          const end = parseInt(target, 10);
          const duration = 1400;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.floor(eased * end).toString();
            if (progress < 1) requestAnimationFrame(tick);
            else counter.textContent = target;
          };
          requestAnimationFrame(tick);
        });
        observer.disconnect();
      },
      { threshold: 0.3 }
    );

    observer.observe(statsEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Section label ─────────────────────────────────── */}
        <p
          ref={labelRef}
          className="flex items-center gap-2 text-[#1818B1] text-xs font-bold uppercase mb-5"
        >
          <span>✦</span>
          About Us
          <span>✦</span>
        </p>

        {/* ── Two-tone heading ──────────────────────────────── */}
        {/*
          First line: dark/black
          Remaining lines: fade to lighter grey — matches the design exactly
        */}
        <h2
          ref={headingRef}
          className="font-display font-regular leading-[40px] tracking-tight mb-10"
        >
          <span className="block text-4xl sm:text-5xl md:text-[52px] text-gray-900">
            Dash Languages School was born from a simple
          </span>
          <span className="block text-4xl sm:text-5xl md:text-[52px] text-gray-400">
            belief: that every ambitious Nigerian deserves a clear,
          </span>
          <span className="block text-4xl sm:text-5xl md:text-[52px] text-gray-400">
            honest path to Europe.
          </span>
        </h2>

        {/* ── Full-width image with floating CTA ───────────── */}
        <div
          ref={imageRef}
          className="relative w-full rounded-2xl overflow-hidden mb-12"
          style={{ aspectRatio: "16/6.5" }}
        >
          <Image
            src="/images/alex.png"
            alt="Alexander III Bridge, Paris at dusk"
            fill
            sizes="(max-width: 1280px) 100vw, 1024px"
            className="object-cover object-center"
            loading="lazy"
          />

          {/* Floating "Learn More About Us" pill — centered on image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/90 backdrop-blur-sm text-[#1818B1] font-semibold text-[15px] shadow-lg hover:bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── Two-column body text ──────────────────────────── */}
        <div
          ref={textRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <p className="text-gray-500 text-[15px] leading-relaxed">
            Our Founder navigated the European visa process firsthand, the
            confusion, the paperwork, the uncertainty. That experience became the
            foundation of Dash: a consultancy built on empathy, expertise, and
            results.
          </p>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            Today, we&apos;ve helped over 200 clients successfully relocate to Germany
            and France for study, training, voluntary service, and family
            reunification. We don&apos;t just process visas, we guide dreams into
            reality.
          </p>
        </div>

        {/* ── Stats row ─────────────────────────────────────── */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 gap-6 pt-4"
        >
          {stats.map((stat) => {
            // Extract the numeric part for count-up, keep suffix separate
            const numericMatch = stat.value.match(/^(\d+)/);
            const numericPart = numericMatch ? numericMatch[1] : null;
            const suffix = numericPart
              ? stat.value.slice(numericPart.length)
              : null;

            return (
              <div key={stat.label} className="flex flex-col gap-2 items-center text-center">
                <p className="font-display text-5xl sm:text-6xl font-bold text-gray-900 leading-none">
                  {numericPart ? (
                    <>
                      <span data-count={numericPart}>{numericPart}</span>
                      {suffix}
                    </>
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="text-gray-500 text-base">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}