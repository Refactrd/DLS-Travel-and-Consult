"use client";

import { useEffect, useRef } from "react";

const stats = [
  {
    value: "5+",
    label: "Years of Proven Experience",
    icon: "⏱",
    accent: "#0D7EFF",
    lightBg: "#EEF4FF",
  },
  {
    value: "70+",
    label: "Students Successfully Relocated, Settled and Studying",
    icon: "🎓",
    accent: "#7C3AED",
    lightBg: "#F5F3FF",
    featured: true,
  },
  {
    value: "50+",
    label: "Professionals and Trainees Successfully Guided and Relocated",
    icon: "💼",
    accent: "#0ea5e9",
    lightBg: "#F0F9FF",
  },
  {
    value: "20+",
    label: "Families Reunified",
    icon: "🏡",
    accent: "#dc2626",
    lightBg: "#FEF2F2",
  },
];

function parseStat(value: string) {
  const match = value.match(/^(\d+)/);
  return {
    numericPart: match ? match[1] : null,
    suffix: match ? value.slice(match[1].length) : null,
  };
}

export default function StatsSection() {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        // Count-up animation
        const counters = el.querySelectorAll<HTMLElement>("[data-count]");
        counters.forEach((counter) => {
          const target = counter.dataset.count ?? "";
          if (!/^\d+$/.test(target)) return;
          const end = parseInt(target, 10);
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.floor(eased * end).toString();
            if (progress < 1) requestAnimationFrame(tick);
            else counter.textContent = target;
          };
          requestAnimationFrame(tick);
        });

        // Stagger card entrance
        const cards = el.querySelectorAll<HTMLElement>(".stat-card");
        cards.forEach((card, i) => {
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0) scale(1)";
          }, i * 90);
        });

        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    // Set initial hidden state
    const cards = el.querySelectorAll<HTMLElement>(".stat-card");
    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(24px) scale(0.97)";
      card.style.transition = "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)";
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={innerRef}>

        {/* ── Row 1 — top 3 stats ─────────────────────────── */}
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {stats.map((stat) => {
    const { numericPart, suffix } = parseStat(stat.value);

    return (
      <div
        key={stat.label}
        className="stat-card group relative flex flex-col justify-between p-7 rounded-3xl overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-1"
        style={{
          background: stat.lightBg,
          border: `1.5px solid ${stat.accent}20`,
          minHeight: "180px",
        }}
      >
        {/* Ghost large number */}
        <div
          className="absolute -bottom-3 -right-2 font-display font-bold select-none pointer-events-none leading-none"
          style={{
            fontSize: "96px",
            color: `${stat.accent}0E`,
          }}
        >
          {stat.value}
        </div>

        {/* Icon */}
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl mb-4"
          style={{ background: `${stat.accent}18` }}
        >
          {stat.icon}
        </div>

        {/* Number + label */}
        <div>
          <p
            className="font-display font-bold leading-none mb-2"
            style={{
              fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
              color: stat.accent,
            }}
          >
            {numericPart ? (
              <>
                <span data-count={numericPart}>{numericPart}</span>
                {suffix}
              </>
            ) : (
              stat.value
            )}
          </p>

          <p className="font-body text-gray-500 text-sm leading-snug">
            {stat.label}
          </p>
        </div>

        {/* Hover line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl transition-all duration-300 opacity-0 group-hover:opacity-100"
          style={{ background: stat.accent }}
        />
      </div>
    );
  })}
</div>

    </div>
  );
}