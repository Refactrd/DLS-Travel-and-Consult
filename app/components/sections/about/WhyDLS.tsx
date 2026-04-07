"use client";

import { useEffect, useRef } from "react";

const differentiators = [
  {
    id: "honest",
    emoji: "🤝",
    title: "Expertise You Can Trust",
    description:
      "Our seasoned team ensures every travel, study, and relocation journey is seamless and professionally handled.",
  },
  {
    id: "language",
    emoji: "🏛️",
    title: "Tailored Global Solutions",
    description:
      "Personalized plans designed specifically around your goals and aspirations, making your international journey effortless.",
  },
  {
    id: "support",
    emoji: "📋",
    title: "Proven Success",
    description:
      "Hundreds of clients have achieved their dreams abroad with our guidance in Germany, France, Spain, and the Netherlands.",
  },
  {
    id: "compliance",
    emoji: "🔒",
    title: "End-to-End Support",
    description:
      "From visa applications to settling abroad, we manage all details so you can focus on your experience.",
  },
];

export default function WhyDLS() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const cards = cardsRef.current?.querySelectorAll<HTMLElement>(".why-card");

    if (header) {
      header.style.opacity = "0";
      header.style.transform = "translateY(32px)";
      header.style.transition =
        "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)";
    }

    cards?.forEach((card, i) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(40px)";
      card.style.transition = `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${0.2 + i * 0.1}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${0.2 + i * 0.1}s`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (header) {
          header.style.opacity = "1";
          header.style.transform = "translateY(0)";
        }
        cards?.forEach((card) => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        });
        observer.disconnect();
      },
      { threshold: 0.12 }
    );

    const section = headerRef.current?.closest("section");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ── Centred header ───────────────────────────────── */}
        <div ref={headerRef} className="text-center mb-14">
          <p className="flex items-center justify-center gap-2 text-[#1818B1] text-xs font-bold uppercase mb-4">
            <span>✦</span>
            Why DLS
            <span>✦</span>
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-[56px] font-bold text-gray-900 leading-tight">
            What Makes Us Different
          </h2>
        </div>

        {/* ── Cards grid ───────────────────────────────────── */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {differentiators.map((item) => (
            <div
              key={item.id}
              className="why-card flex flex-col gap-10 p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#1818B1] hover:shadow-[0_0_0_1px_#1818B1] transition-all duration-300 cursor-default"
            >
              {/* Emoji icon in tinted square */}
              <div className="w-12 h-12 rounded-xl bg-[#F5F6FF] flex items-center justify-center flex-shrink-0 text-2xl">
                {item.emoji}
              </div>

              {/* Text */}
              <div>
                <h3 className="font-display text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}