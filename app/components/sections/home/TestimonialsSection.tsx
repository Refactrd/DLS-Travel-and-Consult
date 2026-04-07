"use client";

import { useEffect, useRef } from "react";

const rowOne = [
  {
    id: 1,
    name: "Olagunju A. Kola",
    visa: "Study Visa · Germany",
    quote:
      "DLS Travel and Consult made my dream of studying in Germany a reality. Every step, from application to visa, was seamless.",
    stars: 4,
  },
  {
    id: 2,
    name: "Samuel Temitayo",
    visa: "Student Visa · France",
    quote:
      "Thanks to DLS, I got admitted to my top-choice university in France. Their guidance and support were invaluable.",
    stars: 5,
  },
  {
    id: 3,
    name: "Osakwe C. Rita",
    visa: "Student Visa · Germany",
    quote:
      "My dream of getting a scholarship and studying abroad was achieved through the help of God Almighty and DLS Consult. They guided me all through the processes, and their customer representatives made me feel confident in their services",
    stars: 5,
  },
  {
    id: 4,
    name: "Austin Emeka J From Nigeria - Germany (Now in Netherlands)",
    visa: "Student Visa · Netherlands",
    quote:
      "From selecting the right program, language proficiency, appointment booking to every single step, DLS Travel simplified the entire process. Truly professional and caring.",
    stars: 5,
  },
  {
    id: 5,
    name: "Fatima Adegbaju",
    visa: "Study Visa · Germany",
    quote:
      "Studying abroad was always my dream, and DLS  made it a reality, even though studying German language was a little bit demanding. Highly recommend them!",
    stars: 5,
  },
  {
    id: 6,
    name: "Olivia Chidinma",
    visa: "Voluntary Service · Germany",
    quote:
      "I wanted to volunteer in the caregiving sector abroad, but the logistics seemed overwhelming. DLS handled everything and made it an incredible experience",
    stars: 5,
  },
   {
    id: 7,
    name: "Michael B",
    visa: "Voluntary Service · France",
    quote:
      "DLS Travel made my volunteer service abroad seamless. From applications to arrival, their team supported me at every step.",
    stars: 5,
  },
  {
    id: 8,
    name: "Linda A",
    visa: "Voluntary Service · Netherlands",
    quote:
      "The international training program I attended was life-changing, and DLS Travel ensured every detail, from travel to accommodation, was perfect.",
    stars: 5,
  },
   {
    id: 9,
    name: "Daniel O",
    visa: "Voluntary Service · Germany",
    quote:
      "DLS Travel managed all logistics for my professional training abroad, making the experience smooth, enjoyable, and highly productive.",
    stars: 5,
  },
  {
    id: 10,
    name: "Grace F",
    visa: "Voluntary Service · Spain",
    quote:
      "I gained new skills overseas thanks to DLS’s impeccable support. They handled everything and allowed me to focus fully on learning.",
    stars: 5,
  },
];

const rowTwo = [
  {
    id: 11,
    name: "Chinwe Ikemba",
    visa: "Family Reunification · Germany",
    quote:
      "Moving to join my spouse in Germany felt daunting, but DLS Travel guided us seamlessly through the entire family reunification process.",
    stars: 5,
  },
  {
    id: 12,
    name: "Emmanuela Kayode",
    visa: "Family Reunification · Germany",
    quote:
      "DLS Travel made our family reunification in Germany straightforward and stress-free. Their expertise and support were exceptional.",
    stars: 5,
  },
  {
    id: 13,
    name: "Patricia L",
    visa: "Family Reunification · Netherlands",
    quote:
      "Reuniting with my family in the Netherlands was a dream made easy by DLS Travel’s professional guidance and care.",
    stars: 5,
  },
  {
    id: 14,
    name: "Samuel Roy Oyedele",
    visa: "Professional Relocatee · Spain",
    quote:
      "DLS Travel handled my relocation to Spain flawlessly. From visa processing to settling in, their team was dependable and efficient.",
    stars: 5,
  },
  {
    id: 15,
    name: "Celestine. O",
    visa: "Professional Relocatee · Germany",
    quote:
      "I relocated to Germany for work with DLS Travel’s support. Every step was managed professionally, making my move completely stress-free.",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    el.style.transition = "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        observer.disconnect();
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#F5F6FF] py-20 overflow-hidden">

      {/* ── Header — centered ──────────────────────────────── */}
      <div ref={headerRef} className="text-center mb-14 px-4">
        <p className="flex items-center justify-center gap-2 text-[#1818B1] text-xs font-bold uppercase mb-4">
          <span>✦</span>
          Clients Stories
          <span>✦</span>
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-[56px] font-medium text-gray-900 leading-tight">
          What Our Clients Say
        </h2>
      </div>

      {/* ── Row 1 — scrolls LEFT ───────────────────────────── */}
      <MarqueeRow cards={rowOne} direction="left" />

      <div className="h-5" />

      {/* ── Row 2 — scrolls RIGHT ─────────────────────────── */}
      <MarqueeRow cards={rowTwo} direction="right" />
    </section>
  );
}

// ── Marquee Row ──────────────────────────────────────────────────
function MarqueeRow({
  cards,
  direction,
}: {
  cards: typeof rowOne;
  direction: "left" | "right";
}) {
  // Duplicate cards for seamless loop
  const doubled = [...cards, ...cards];

  return (
    <div
      className="relative flex overflow-hidden"
      // Pause on hover
      style={{ ["--pause" as string]: "running" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.setProperty("--pause", "paused");
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.setProperty("--pause", "running");
      }}
    >
      {/* Left fade edge */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #F5F6FF, transparent)" }}
      />
      {/* Right fade edge */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #F5F6FF, transparent)" }}
      />

      <div
        className="flex gap-5 w-max"
        style={{
          animation: `marquee-${direction} 40s linear infinite`,
          animationPlayState: "var(--pause, running)",
        }}
      >
        {doubled.map((card, i) => (
          <TestimonialCard key={`${card.id}-${i}`} {...card} />
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

// ── Individual Card ──────────────────────────────────────────────
interface CardProps {
  name: string;
  visa: string;
  quote: string;
  stars: number;
}

function TestimonialCard({ name, visa, quote, stars }: CardProps) {
  // Generate deterministic initials for avatar
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[360px] bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm border border-gray-100">
      {/* Avatar + name row */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-sm font-semibold">{initials}</span>
        </div>
        <div>
          <p className="font-display font-semibold text-gray-900 text-[15px] leading-tight">
            {name}
          </p>
          <p className="text-gray-400 text-xs mt-0.5">{visa}</p>
        </div>
      </div>

      {/* Quote */}
      <p className="text-gray-600 text-[14px] leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} filled={i < stars} />
        ))}
      </div>
    </div>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78L10 1z"
        fill={filled ? "#F59E0B" : "#E5E7EB"}
        stroke={filled ? "#F59E0B" : "#E5E7EB"}
        strokeWidth="0.5"
      />
    </svg>
  );
}