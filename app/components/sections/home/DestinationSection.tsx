"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    id: "germany",
    country: "Germany",
    tagline: "Europe's economic powerhouse",
    image: "/images/germany.png",
    href: "/countries/germany",
  },
  {
    id: "france",
    country: "France",
    tagline: "Culture, research and innovation",
    image: "/images/france.png",
    href: "/countries/france",
  },
  {
    id: "spain",
    country: "Spain",
    tagline: "Quality of life excellence",
    image: "/images/spain.png",
    href: "/countries/spain",
  },
  {
    id: "uk",
    country: "UK",
    tagline: "Welcoming world-class education",
    image: "/images/uk.png",
    href: "/countries/uk",
  },
];

export default function DestinationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingGroupRef = useRef<HTMLDivElement>(null);
  const seeMoreRef = useRef<HTMLAnchorElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Set initial states
    const headingGroup = headingGroupRef.current;
    const seeMore = seeMoreRef.current;
    const cards = cardsRef.current?.querySelectorAll<HTMLElement>(".dest-card");

    if (headingGroup) {
      headingGroup.style.opacity = "0";
      headingGroup.style.transform = "translateX(-48px)";
      headingGroup.style.transition = "opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)";
    }

    if (seeMore) {
      seeMore.style.opacity = "0";
      seeMore.style.transform = "translateX(48px)";
      seeMore.style.transition = "opacity 0.75s cubic-bezier(0.22,1,0.36,1) 0.15s, transform 0.75s cubic-bezier(0.22,1,0.36,1) 0.15s";
    }

    cards?.forEach((card, i) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(40px)";
      card.style.transition = `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${0.25 + i * 0.1}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${0.25 + i * 0.1}s`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        if (headingGroup) {
          headingGroup.style.opacity = "1";
          headingGroup.style.transform = "translateX(0)";
        }
        if (seeMore) {
          seeMore.style.opacity = "1";
          seeMore.style.transform = "translateX(0)";
        }
        cards?.forEach((card) => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        });

        observer.disconnect();
      },
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F5F6FF] py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Top Row: heading group (left) + See More (right) ── */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-12">

          {/* Left — label + heading + subtext */}
          <div ref={headingGroupRef} className="max-w-2xl">
            {/* Section label */}
            <p className="flex items-center gap-2 text-[#1818B1] text-xs font-bold uppercase mb-3">
              <span className="text-[#1818B1]">✦</span>
              Destination
              <span className="text-[#1818B1]">✦</span>
            </p>

            {/* Main heading */}
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-gray-900 leading-tight mb-4">
              Where Do You Want to Go?
            </h2>

            {/* Subtext */}
            <p className="text-gray-500 text-base leading-relaxed max-w-md lg:max-w-xl">
              Explore our most sought-after European destinations. Each pathway
              is tailored to your goals: study, work, or family.
            </p>
          </div>

          {/* Right — See More Countries */}
          <Link
            ref={seeMoreRef}
            href="/countries"
            className="group flex-shrink-0 lg:flex items-center gap-2 text-[#1818B1] font-semibold text-[15px] mt-2 hover:gap-3 transition-all duration-200 self-center hidden"
          >
            See More Countries
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ── Cards Grid ─────────────────────────────────────── */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} {...dest} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Individual Card ──────────────────────────────────────────────
interface DestinationCardProps {
  country: string;
  tagline: string;
  image: string;
  href: string;
}

function DestinationCard({ country, tagline, image, href }: DestinationCardProps) {
  return (
    <Link
      href={href}
      className="dest-card group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#1818B1]/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
    >
      {/* Image container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={`${country} landmark`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
         
        />
      </div>

      {/* Card body */}
      <div className="px-5 pt-5 pb-6">
        <h3 className="font-display text-xl font-bold text-gray-900 mb-1.5">
          {country}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">
          {tagline}
        </p>

        {/* Learn More link */}
        <span className="inline-flex items-center gap-2 text-[#1818B1] font-semibold text-[14px] group-hover:gap-3 transition-all duration-200">
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
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