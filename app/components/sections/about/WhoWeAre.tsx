"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function WhoWeAre() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = [
      { el: textRef.current, x: -48 },
      { el: imageRef.current, x: 48 },
    ];

    targets.forEach(({ el, x }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = `translateX(${x}px)`;
      el.style.transition =
        "opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        targets.forEach(({ el }, i) => {
          if (!el) return;
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
          }, i * 120);
        });
        observer.disconnect();
      },
      { threshold: 0.12 }
    );

    const section = textRef.current?.closest("section");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Left — Text ──────────────────────────────────── */}
        <div ref={textRef} className="flex flex-col gap-6">
          <p className="flex items-center gap-2 text-[#1818B1] text-xs font-bold uppercase">
            <span>✦</span>
            Who We Are
            <span>✦</span>
          </p>

          <h2 className="font-display text-5xl sm:text-[56px] font-medium text-gray-900 leading-[1.08]">
            More than a visa
            <br />
            agency
          </h2>

          <div className="flex flex-col gap-4">
            <p className="text-gray-500 text-[15px] leading-relaxed">
              Dash Language School &amp; Travel Consult (DLS) is a full-service
              consultancy that takes clients from language zero to European visa
              approval. We are educators, advisors, and advocates in one.
            </p>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              We combine a language school, visa advisory practice, and
              international education consultancy under one roof — so you never
              have to chase multiple services. One team. One process. One goal:
              getting you there.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/consultation"
              className="group relative inline-flex items-center px-7 py-4 rounded-full text-white font-semibold text-[15px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#1818B1]/30 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #1818B1 0%, #0000FF 100%)" }}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <span className="relative z-10">Book Consultation</span>
            </Link>
          </div>
        </div>

        {/* ── Right — Image ─────────────────────────────────── */}
        <div ref={imageRef} className="relative w-full">
          <div className="relative w-full rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3.2" }}>
            <Image
              src="/images/whoweare.png"
              alt="DLS consultant — confident professional ready to help"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
              loading="lazy"
              /*
                IMAGE SETUP:
                Place your image at: public/images/about/who-we-are.jpg
                The design shows a smiling Black woman in a light blue blazer,
                arms crossed, professional setting with soft bokeh background.
                Recommended: 1200×960px, ~200KB
              */
            />
          </div>
        </div>

      </div>
    </section>
  );
}