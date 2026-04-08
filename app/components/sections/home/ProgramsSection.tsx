"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const programs = [
  {
    id: "study",
    title: "Study Abroad Programs",
    description:
      "Pursue your academic goals in Europe. We handle documentation, language requirements, and university application support.",
    icon: <StudyIcon />,
    href: "/programs/study",
  },
  {
    id: "training",
    title: "Work & Training Relocation",
    description:
      "Gain professional experience abroad through recognised training programs across European countries.",
    icon: <TrainingIcon />,
    href: "/programs/training",
  },
  {
    id: "travel",
    title: "Short-Term Travel & Tours",
    description:
      "Explore Europe on curated short-stay tours. We handle visas, itineraries, accommodation, and travel logistics end to end.",
    icon: <TravelIcon />,
    href: "/programs/travel",
  },
  {
    id: "voluntary",
    title: "Voluntary Service Programs",
    description:
      "Join recognised European voluntary service programs. Gain experience, earn a stipend, and build an international profile.",
    icon: <VoluntaryIcon />,
    href: "/programs/voluntary-service",
  },
  {
    id: "family",
    title: "Family Reunification",
    description:
      "Reunite with your loved ones in Europe. We guide families through every stage of the reunification visa process.",
    icon: <FamilyIcon />,
    href: "/programs/family-reunification",
  },
];

export default function ProgramsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingGroupRef = useRef<HTMLDivElement>(null);
  const viewAllRef = useRef<HTMLAnchorElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headingGroup = headingGroupRef.current;
    const viewAll = viewAllRef.current;
    const cards = cardsRef.current?.querySelectorAll<HTMLElement>(".prog-card");

    if (headingGroup) {
      headingGroup.style.opacity = "0";
      headingGroup.style.transform = "translateX(-48px)";
      headingGroup.style.transition =
        "opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)";
    }
    if (viewAll) {
      viewAll.style.opacity = "0";
      viewAll.style.transform = "translateX(48px)";
      viewAll.style.transition =
        "opacity 0.75s cubic-bezier(0.22,1,0.36,1) 0.15s, transform 0.75s cubic-bezier(0.22,1,0.36,1) 0.15s";
    }
    cards?.forEach((card, i) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(40px)";
      card.style.transition = `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${0.28 + i * 0.1}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${0.28 + i * 0.1}s`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (headingGroup) {
          headingGroup.style.opacity = "1";
          headingGroup.style.transform = "translateX(0)";
        }
        if (viewAll) {
          viewAll.style.opacity = "1";
          viewAll.style.transform = "translateX(0)";
        }
        cards?.forEach((card) => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        });
        observer.disconnect();
      },
      { threshold: 0.12 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-12">
          <div ref={headingGroupRef} className="max-w-2xl">
            <p className="flex items-center gap-2 text-[#1818B1] text-xs font-bold uppercase mb-4">
              <span>✦</span>
              Our Programs
              <span>✦</span>
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-gray-900 leading-tight mb-4">
              Multiple Pathways to Europe
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-lg lg:max-w-xl">
              Whether you&apos;re a student, a professional, or looking to
              reunite with family, we have a structured program for you.
            </p>
          </div>

          <Link
            ref={viewAllRef}
            href="/programs"
            className="group flex-shrink-0 lg:flex items-center gap-2 text-[#1818B1] font-semibold text-[15px] self-center hover:gap-3 transition-all duration-200 hidden"
          >
            View All Programs
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Row 1 — 3 cards */}
        <div ref={cardsRef} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ProgramCard key="study" {...programs[0]} />
            <ProgramCard key="training" {...programs[1]} />
            <ProgramCard key="travel" {...programs[2]} />
          </div>

          {/* Row 2 — 2 cards, same width as row 1 cards, centred */}
          {/* <div className="flex justify-center gap-5">
            <div className="w-full max-w-[calc(33.333%-10px)]">
              <ProgramCard key="voluntary" {...programs[3]} />
            </div>
            <div className="w-full max-w-[calc(33.333%-10px)]">
              <ProgramCard key="family" {...programs[4]} />
            </div>
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="hidden lg:block" />
            <ProgramCard key="voluntary" {...programs[3]} />
            <ProgramCard key="family" {...programs[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

function ProgramCard({ title, description, icon, href }: ProgramCardProps) {
  return (
    <Link
      href={href}
      className="prog-card group relative flex flex-col gap-10 p-6 rounded-2xl border border-gray-200 bg-white
        transition-all duration-300 cursor-pointer
        hover:border-[#1818B1] hover:shadow-[0_0_0_1px_#1818B1]"
    >
      <div className="w-12 h-12 rounded-xl bg-[#F5F6FF] flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[#AFAFFC]/30">
        {icon}
      </div>
      <div>
        <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-500 text-base leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}

function StudyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L2 8l10 5 10-5-10-5z" fill="#1818B1" opacity="0.85" />
      <path
        d="M2 8v6M6 10.5v5a6 6 0 0012 0v-5"
        stroke="#1818B1"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrainingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect
        x="2"
        y="7"
        width="20"
        height="14"
        rx="2"
        stroke="#7C3AED"
        strokeWidth="1.8"
      />
      <path
        d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
        stroke="#7C3AED"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 12v3M10.5 13.5h3"
        stroke="#7C3AED"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TravelIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        stroke="#0ea5e9"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="9" r="2.5" stroke="#0ea5e9" strokeWidth="1.8" />
      <path
        d="M6 20c-1.5.5-3 1-3 1h18s-1.5-.5-3-1"
        stroke="#0ea5e9"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function VoluntaryIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#059669" strokeWidth="1.8" />
      <path
        d="M2 12h3M19 12h3M12 2v3M12 19v3"
        stroke="#059669"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="3" fill="#059669" opacity="0.7" />
    </svg>
  );
}

function FamilyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="8" cy="6" r="2.2" fill="#9B2C2C" opacity="0.85" />
      <circle cx="16" cy="6" r="2.2" fill="#9B2C2C" opacity="0.85" />
      <circle cx="12" cy="8" r="1.6" fill="#9B2C2C" opacity="0.6" />
      <path
        d="M3 19c0-3 2-5 5-5h8c3 0 5 2 5 5"
        stroke="#9B2C2C"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
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
