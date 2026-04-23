"use client";

import { useEffect, useRef } from "react";

const values = [
  { label: "Integrity",   desc: "Honest, transparent guidance at every step.",         icon: "⚖️" },
  { label: "Excellence",  desc: "We hold ourselves to the highest professional standard.", icon: "✦"  },
  { label: "Dedication",  desc: "Fully committed to each client's unique journey.",     icon: "🎯" },
];

export default function MissionVision() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      el.style.transition = `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.15}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.15}s`;
    });

    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      cardRefs.current.forEach((el) => {
        if (!el) return;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
      obs.disconnect();
    }, { threshold: 0.12 });

    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F8F9FF] py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Section header ────────────────────────────────── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0D7EFF]/20 bg-white text-[#0D7EFF] text-xs font-body font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D7EFF]" />
            What Drives Us
          </div>
          <h2
            className="font-display font-bold text-[#0a0a2e] leading-tight max-w-xl mx-auto"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Purpose and principles behind everything we do
          </h2>
        </div>

        {/* ── Two cards ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ── Mission card — dark ───────────────────────── */}
          <div
            ref={(el) => { cardRefs.current[0] = el; }}
            className="relative rounded-3xl overflow-hidden flex flex-col justify-between p-10 sm:p-12"
            style={{
              background: "linear-gradient(145deg, #060620 0%, #0D1B6E 60%, #0D7EFF 100%)",
              minHeight: "420px",
            }}
          >
            {/* Decorative orb */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(13,126,255,0.35) 0%, transparent 70%)" }}
            />
            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* Top label */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/8 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa]" />
                <span className="font-body text-white/70 text-xs font-semibold uppercase tracking-widest">
                  Our Mission
                </span>
              </div>

              {/* Large quote mark */}
              <div
                className="font-display font-bold text-white/8 select-none leading-none mb-4"
                style={{ fontSize: "120px", lineHeight: 0.8 }}
                aria-hidden="true"
              >
                "
              </div>

              <blockquote
                className="font-display font-bold text-white leading-snug"
                style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)" }}
              >
                We aim to make global opportunities accessible, guiding
                individuals and families through every step of travel,
                study, and relocation.
              </blockquote>
            </div>

            {/* Bottom — decorative line */}
            <div className="relative z-10 mt-10 flex items-center gap-4">
              <div className="flex-1 h-px bg-white/15" />
              <span className="font-body text-white/30 text-xs uppercase tracking-widest">DLS Travel &amp; Consult</span>
              <div className="flex-1 h-px bg-white/15" />
            </div>
          </div>

          {/* ── Values card — light ───────────────────────── */}
          <div
            ref={(el) => { cardRefs.current[1] = el; }}
            className="relative rounded-3xl overflow-hidden bg-white flex flex-col justify-between p-10 sm:p-12"
            style={{
              border: "1.5px solid rgba(13,126,255,0.1)",
              minHeight: "420px",
              boxShadow: "0 4px 40px rgba(13,126,255,0.06)",
            }}
          >
            {/* Subtle top-right tint */}
            <div
              className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, #EEF4FF 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
            />

            {/* Top label */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0D7EFF]/15 bg-[#EEF4FF] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D7EFF]" />
                <span className="font-body text-[#0D7EFF] text-xs font-semibold uppercase tracking-widest">
                  Our Values
                </span>
              </div>

              <p
                className="font-display font-bold text-[#0a0a2e] leading-snug mb-10"
                style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)" }}
              >
                Integrity, excellence, and dedication. The principles behind every decision we make.
              </p>
            </div>

            {/* Value rows */}
            <div className="relative z-10 flex flex-col gap-4">
              {values.map((v, i) => (
                <div
                  key={v.label}
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    background: "#F8F9FF",
                    border: "1.5px solid rgba(13,126,255,0.08)",
                  }}
                >
                  {/* Number + icon */}
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-lg font-display font-bold"
                    style={{ background: "#EEF4FF", color: "#0D7EFF" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p className="font-body font-semibold text-[#0a0a2e] text-[15px] leading-tight">
                      {v.label}
                    </p>
                    <p className="font-body text-gray-400 text-sm leading-snug mt-0.5">
                      {v.desc}
                    </p>
                  </div>
                  {/* Accent dot right */}
                  <div
                    className="ml-auto flex-shrink-0 w-2 h-2 rounded-full"
                    style={{ background: "#0D7EFF", opacity: 0.25 }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}