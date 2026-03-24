"use client";

import { useEffect, useRef } from "react";

const programs = [
  {
    id: "study",
    emoji: "🎓",
    emojiColor: "#1818B1",
    title: "Study Abroad",
    subtitle: "Access top-ranked universities across Europe and North America",
    features: [
      "Undergraduate and postgraduate programs available",
      "Public university options with low or zero tuition fees",
      "University selection, application, and admission support",
      "Student visa documentation and embassy preparation",
      "Scholarship research assistance included",
      "Pre-departure and arrival orientation",
    ],
    countries: ["DE GERMANY", "FR FRANCE", "AT AUSTRIA", "CA CANADA", "NL NETHERLANDS"],
  },
  {
    id: "vocational",
    emoji: "🤝",
    emojiColor: "#7C3AED",
    title: "Vocational Training",
    subtitle: "Germany's Ausbildung and European dual-system programs",
    features: [
      "Paid training programs with monthly allowances",
      "Sectors: nursing, IT, hospitality, engineering, logistics",
      "Training company search and contract support",
      "Vocational visa (Berufsausbildung) application",
      "Qualification recognition assistance",
      "Post-training skilled worker visa pathway",
    ],
    countries: ["DE GERMANY", "AT AUSTRIA", "NL NETHERLANDS"],
  },
  {
    id: "voluntary",
    emoji: "🌐",
    emojiColor: "#059669",
    title: "Voluntary Service",
    subtitle: "International voluntary programs with recognized European organizations",
    features: [
      "FSJ, BFD, and European Solidarity Corps placements",
      "6—18 month programs in social, cultural, and environmental sectors",
      "Accommodation and monthly pocket money often provided",
      "Valid legal status with health insurance",
      "Organization matching and application support",
      "Pathway to extended stay or further study/work visas",
    ],
    countries: ["DE GERMANY", "FR FRANCE", "BE BELGIUM"],
  },
  {
    id: "family",
    emoji: "👨‍👩‍👧",
    emojiColor: "#9B2C2C",
    title: "Family Reunification",
    subtitle: "Join your loved ones already settled in Europe",
    features: [
      "Spouse, child, and parent visa categories covered",
      "Eligibility assessment for your specific family situation",
      "Document checklist, translation, and notarization support",
      "Basic language requirement preparation (A1 minimum)",
      "Full embassy application and interview coaching",
      "Post-arrival registration support",
    ],
    countries: ["DE GERMANY", "FR FRANCE", "BE BELGIUM"],
  },
];

export default function ProgramsDetail() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll<HTMLElement>(".prog-detail-card");
    cards?.forEach((card, i) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(44px)";
      card.style.transition = `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.12}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.12}s`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        cards?.forEach((card) => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        });
        observer.disconnect();
      },
      { threshold: 0.08 }
    );

    if (cardsRef.current) observer.observe(cardsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {programs.map((program) => (
            <ProgramCard key={program.id} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProgramCardProps {
  emoji: string;
  title: string;
  subtitle: string;
  features: string[];
  countries: string[];
}

function ProgramCard({ emoji, title, subtitle, features, countries }: ProgramCardProps) {
  return (
    <div className="prog-detail-card flex flex-col rounded-2xl border border-gray-200 bg-[#F5F6FF] overflow-hidden">

      {/* Card header */}
      <div className="px-7 pt-7 pb-5">
        <div className="text-3xl mb-4">{emoji}</div>
        <h3 className="font-display text-xl font-bold text-gray-900 mb-1.5">
          {title}
        </h3>
        <p className="text-gray-500 text-[14px] leading-relaxed">{subtitle}</p>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200 mx-7" />

      {/* Feature list */}
      <div className="px-7 py-5 flex-1">
        <ul className="flex flex-col gap-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 text-[14px] leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200 mx-7" />

      {/* Country tags */}
      <div className="px-7 py-5">
        <p className="text-gray-400 text-xs mb-3">Available in:</p>
        <div className="flex flex-wrap gap-2">
          {countries.map((country) => (
            <span
              key={country}
              className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-600 text-xs font-medium tracking-wide"
            >
              {country}
            </span>
          ))}
        </div>
      </div>
    </div>
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