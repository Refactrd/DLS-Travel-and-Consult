"use client";

import { useEffect, useRef } from "react";

const rowOne = [
  {
    id: 1,
    name: "Robert Lewis",
    visa: "Study Visa · Germany",
    quote:
      "My study visa for Germany was approved first try — I couldn't believe how smooth the process was.",
    stars: 4,
  },
  {
    id: 2,
    name: "Emily Davis",
    visa: "Student Visa · Italy",
    quote:
      "Dash explained everything clearly and the training application went through without a hitch.",
    stars: 5,
  },
  {
    id: 3,
    name: "Michael Brown",
    visa: "Student Visa · Spain",
    quote:
      "My family is together in Spain now. Forever grateful to the Dash team.",
    stars: 5,
  },
  {
    id: 4,
    name: "Sophia Wilson",
    visa: "Student Visa · Netherlands",
    quote:
      "I was thrilled to receive my student visa for the Netherlands on my first try!",
    stars: 5,
  },
  {
    id: 5,
    name: "James Carter",
    visa: "Work Visa · France",
    quote:
      "From the first call to landing in Paris, DLS held my hand through everything.",
    stars: 5,
  },
  {
    id: 6,
    name: "Amara Osei",
    visa: "Study Visa · Austria",
    quote:
      "I never thought studying in Vienna was possible. DLS made it real for me.",
    stars: 5,
  },
];

const rowTwo = [
  {
    id: 7,
    name: "Johnson",
    visa: "Study Visa · Belgium",
    quote:
      "When my student visa for Belgium was approved I cried tears of joy. Thank you DLS!",
    stars: 5,
  },
  {
    id: 8,
    name: "Noah Garcia",
    visa: "Student Visa · Switzerland",
    quote:
      "I was thrilled when my student visa for Switzerland was approved on my first try!",
    stars: 5,
  },
  {
    id: 9,
    name: "Olivia Martinez",
    visa: "Student Visa · Austria",
    quote:
      "I was over the moon when my student visa for Austria was granted on the first attempt!",
    stars: 5,
  },
  {
    id: 10,
    name: "Ethan White",
    visa: "Student Visa · Denmark",
    quote:
      "I was ecstatic when my student visa for Denmark was granted on my first attempt!",
    stars: 5,
  },
  {
    id: 11,
    name: "Ava Lee",
    visa: "Student Visa · Portugal",
    quote:
      "I was so excited when my student visa for Portugal got approved. DLS is the best!",
    stars: 5,
  },
  {
    id: 12,
    name: "Chioma Adeyemi",
    visa: "Family Visa · Germany",
    quote:
      "The team guided us patiently through every document. We're finally reunited in Germany.",
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