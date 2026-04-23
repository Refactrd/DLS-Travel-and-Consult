"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const programs = [
  {
    id: "study",
    title: "Study Abroad Programs",
    description:
      "Pursue your academic goals in Europe. We handle documentation, language requirements, and university application support.",
    href: "/programs",
    accent: "#0D7EFF",
    lightBg: "#EEF4FF",
    tag: "Most Popular",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L2 8l10 5 10-5-10-5z" fill="#0D7EFF" opacity="0.9"/>
        <path d="M2 8v6M6 10.5v5a6 6 0 0012 0v-5" stroke="#0D7EFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "training",
    title: "Work & Training Relocation",
    description:
      "Gain professional experience abroad through recognised training programs across European countries.",
    href: "/programs",
    accent: "#7C3AED",
    lightBg: "#F5F3FF",
    tag: null,
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="#7C3AED" strokeWidth="1.8"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M12 12v3M10.5 13.5h3" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "travel",
    title: "Short-Term Travel & Tours",
    description:
      "Explore Europe on curated short-stay tours. We handle visas, itineraries, accommodation, and travel logistics end to end.",
    href: "/programs",
    accent: "#0ea5e9",
    lightBg: "#F0F9FF",
    tag: null,
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#0ea5e9" strokeWidth="1.8"/>
        <circle cx="12" cy="9" r="2.5" stroke="#0ea5e9" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    id: "voluntary",
    title: "Voluntary Service Programs",
    description:
      "Join recognised European voluntary service programs. Gain experience, earn a stipend, and build an international profile.",
    href: "/programs",
    accent: "#059669",
    lightBg: "#ECFDF5",
    tag: null,
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35z" stroke="#059669" strokeWidth="1.8" fill="none"/>
      </svg>
    ),
  },
  {
    id: "family",
    title: "Family Reunification",
    description:
      "Reunite with your loved ones in Europe. We guide families through every stage of the reunification visa process.",
    href: "/programs",
    accent: "#dc2626",
    lightBg: "#FEF2F2",
    tag: null,
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="6" r="2.2" fill="#dc2626" opacity="0.85"/>
        <circle cx="16" cy="6" r="2.2" fill="#dc2626" opacity="0.85"/>
        <circle cx="12" cy="8" r="1.6" fill="#dc2626" opacity="0.6"/>
        <path d="M3 19c0-3 2-5 5-5h8c3 0 5 2 5 5" stroke="#dc2626" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function ProgramsSection() {
  const [active, setActive] = useState(0);
  const sectionRef     = useRef<HTMLElement>(null);
  const headingRef     = useRef<HTMLDivElement>(null);
  const contentRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial hidden state for heading and content wrapper
    [headingRef.current, contentRef.current].forEach((el) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(36px)";
      el.style.transition = "opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)";
    });

    // Set initial hidden state for each tab button
    const tabButtons = sectionRef.current?.querySelectorAll<HTMLElement>(".prog-tab");
    tabButtons?.forEach((btn, i) => {
      btn.style.opacity = "0";
      btn.style.transform = "translateX(-24px)";
      btn.style.transition = `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${0.3 + i * 0.08}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${0.3 + i * 0.08}s`;
    });

    // Set initial hidden state for detail panel
    const panel = sectionRef.current?.querySelector<HTMLElement>(".prog-panel");
    if (panel) {
      panel.style.opacity = "0";
      panel.style.transform = "translateX(24px)";
      panel.style.transition = "opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.25s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.25s";
    }

    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      // Animate heading first
      if (headingRef.current) {
        headingRef.current.style.opacity = "1";
        headingRef.current.style.transform = "translateY(0)";
      }

      // Animate content wrapper
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.opacity = "1";
          contentRef.current.style.transform = "translateY(0)";
        }
      }, 120);

      // Stagger tabs in from left
      tabButtons?.forEach((btn) => {
        btn.style.opacity = "1";
        btn.style.transform = "translateX(0)";
      });

      // Slide panel in from right
      if (panel) {
        panel.style.opacity = "1";
        panel.style.transform = "translateX(0)";
      }

      obs.disconnect();
    }, { threshold: 0.1 });

    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const current = programs[active];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Header ──────────────────────────────────────── */}
        <div ref={headingRef} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0D7EFF]/20 bg-[#EEF4FF] text-[#0D7EFF] text-xs font-body font-semibold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D7EFF]" />
              Our Programs
            </div>
            <h2
              className="font-display font-bold text-[#0a0a2e] leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              Multiple Pathways to Europe
            </h2>
          </div>
          <Link
            href="/programs"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D7EFF] text-white font-body font-semibold text-sm hover:bg-[#0055cc] transition-all duration-200 shadow-lg shadow-[#0D7EFF]/25 w-fit"
          >
            View All Programs
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* ── Main content: tab list + detail panel ───────── */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-5">

          {/* Left — vertical tab list */}
          <div className="flex flex-col gap-2">
            {programs.map((prog, i) => (
              <button
                key={prog.id}
                onClick={() => setActive(i)}
                className="prog-tab group flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-200"
                style={{
                  background: active === i ? prog.lightBg : "transparent",
                  border: active === i
                    ? `1.5px solid ${prog.accent}30`
                    : "1.5px solid transparent",
                }}
              >
                {/* Accent bar */}
                <div
                  className="flex-shrink-0 w-1 h-8 rounded-full transition-all duration-200"
                  style={{ background: active === i ? prog.accent : "#e5e7eb" }}
                />

                {/* Icon */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{ background: active === i ? `${prog.accent}18` : "#f3f4f6" }}
                >
                  {prog.icon}
                </div>

                {/* Title */}
                <span
                  className="font-body font-semibold text-sm leading-snug transition-colors duration-200"
                  style={{ color: active === i ? prog.accent : "#000" }}
                >
                  {prog.title}
                </span>

                {/* Arrow */}
                <svg
                  className="ml-auto flex-shrink-0 transition-all duration-200"
                  style={{ opacity: active === i ? 1 : 0, transform: active === i ? "translateX(0)" : "translateX(-4px)" }}
                  width="14" height="14" viewBox="0 0 16 16" fill="none"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke={prog.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            ))}
          </div>

          {/* Right — detail panel */}
          <div
            key={active}
            className="prog-panel relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden"
            style={{
              background: current.lightBg,
              border: `1.5px solid ${current.accent}20`,
              minHeight: "360px",
              animation: "panelIn 0.35s cubic-bezier(0.22,1,0.36,1) both",
            }}
          >
            {/* Large ghost number */}
            <div
              className="absolute top-6 right-8 font-display font-bold select-none pointer-events-none"
              style={{
                fontSize: "120px",
                lineHeight: 1,
                color: `${current.accent}0D`,
              }}
            >
              {String(active + 1).padStart(2, "0")}
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Tag */}
              {current.tag && (
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-bold uppercase tracking-wider mb-6"
                  style={{ background: `${current.accent}18`, color: current.accent }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: current.accent }} />
                  {current.tag}
                </div>
              )}

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: `${current.accent}15`, border: `1px solid ${current.accent}20` }}
              >
                {/* Render a larger version of icon */}
                <div style={{ transform: "scale(1.5)", transformOrigin: "center" }}>
                  {current.icon}
                </div>
              </div>

              <h3
                className="font-display font-bold text-[#0a0a2e] mb-4 leading-snug"
                style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}
              >
                {current.title}
              </h3>

              <p className="font-body text-gray-600 text-base leading-relaxed max-w-lg mb-8">
                {current.description}
              </p>
            </div>

            {/* CTA */}
            <div className="relative z-10 flex items-center gap-4 flex-wrap">
              <Link
                href={current.href}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-body font-semibold text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: current.accent,
                  boxShadow: `0 8px 24px ${current.accent}35`,
                }}
              >
                Learn More
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-body font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "white",
                  color: current.accent,
                  border: `1.5px solid ${current.accent}30`,
                }}
              >
                Book Consultation
              </Link>
            </div>

            {/* Step dots */}
            <div className="absolute bottom-8 right-8 flex items-center gap-1.5">
              {programs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? "20px" : "6px",
                    height: "6px",
                    background: i === active ? current.accent : `${current.accent}30`,
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes panelIn {
          from { opacity: 0; transform: translateY(12px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
}