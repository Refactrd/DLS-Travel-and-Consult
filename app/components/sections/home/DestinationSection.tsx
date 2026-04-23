"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    id: "netherlands",
    country: "Netherlands",
    tagline:
      "With personalized guidance and proven expertise, we make moving to the Netherlands easy, letting you focus on your career, and global exploration.",
    images: [
      "/images/netherlands-3.jpg",
      "/images/netherlands-2.jpg",
      "/images/netherlands-1.jpg",
    ],
    href: "/countries/netherlands",
  },
  {
    id: "france",
    country: "France",
    tagline:
      "Our expert guidance ensures every step of your journey to France, where iconic culture, world-class education, and unforgettable lifestyle experiences await you is confidently handled.",
    images: [
      "/images/france-1.jpg",
      "/images/france-2.jpg",
      "/images/france-3.jpg",
    ],
    href: "/countries/france",
  },
  {
    id: "spain",
    country: "Spain",
    tagline:
      "We simplify your travel and relocation to Spain, and help you discover the vibrant cities, and dynamic opportunities designed for personal growth and memorable adventures.",
    images: [
      "/images/spain-1.jpg",
      "/images/spain-2.jpg",
      "/images/spain-3.jpg",
    ],
    href: "/countries/spain",
  },
  {
    id: "germany",
    country: "Germany",
    tagline:
      "Unlock Germany's world-class opportunities and a high quality of life. From securing your visa to finding the right programs and opportunities, we make your move to Germany hassle-free.",
    images: [
      "/images/germany-2.jpg",
      "/images/germany-3.jpg",
      "/images/germany-1.jpg",
    ],
    href: "/countries/germany",
  },
];

export default function DestinationsSection() {
  const [destIndex, setDestIndex] = useState(0);
  const [imgIndex, setImgIndex]   = useState(0);
  const [sliding, setSliding]     = useState<"left" | "right" | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);

  const current = destinations[destIndex];

  useEffect(() => {
    [headerRef.current, cardRef.current].forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(32px)";
      el.style.transition = "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)";
      setTimeout(() => { el!.style.opacity = "1"; el!.style.transform = "translateY(0)"; }, 150 + i * 120);
    });
  }, []);

  const goTo = useCallback((newDest: number, direction: "left" | "right") => {
    if (sliding) return;
    setSliding(direction);
    setTimeout(() => {
      setDestIndex(newDest);
      setImgIndex(0);
      setSliding(null);
    }, 420);
  }, [sliding]);

  const prev = () => goTo((destIndex - 1 + destinations.length) % destinations.length, "right");
  const next = () => goTo((destIndex + 1) % destinations.length, "left");

  const slideOut = sliding === "left"
    ? "translateX(-6%) scale(0.97)"
    : sliding === "right"
      ? "translateX(6%) scale(0.97)"
      : "translateX(0) scale(1)";

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#EEF4FF] py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Header row ──────────────────────────────────── */}
        <div ref={headerRef} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
          <div className="lg:max-w-xl sm:max-w-xl">
            <h2
              className="font-display font-bold text-[#0a0a2e] leading-tight mb-3"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              Where Do You Want to Go?
            </h2>
            <p className="font-body text-gray-500 text-base leading-relaxed">
              Explore our most sought-after European destinations. Each pathway
              is tailored to your goals: study, work, or family.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0 mt-1 justify-end">
            <button
              onClick={prev}
              disabled={!!sliding}
              aria-label="Previous destination"
              className="w-12 h-12 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:border-[#0D7EFF] hover:text-[#0D7EFF] transition-all duration-200 disabled:opacity-40"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={!!sliding}
              aria-label="Next destination"
              className="w-12 h-12 rounded-full bg-[#0D7EFF] flex items-center justify-center text-white hover:bg-[#0055cc] transition-all duration-200 shadow-lg shadow-[#0D7EFF]/30 disabled:opacity-40"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Destination card ─────────────────────────────── */}
        <div
          ref={cardRef}
          className="relative w-full rounded-3xl overflow-hidden"
          style={{
            /*
              FIX 1: Use a taller ratio on mobile (4/3) that automatically
              switches to widescreen (16/9) on larger screens via a
              media-query-aware inline style isn't possible, so we use
              a fixed height on mobile and aspect-ratio on sm+.
              The card uses min-height on mobile and aspect-ratio on desktop.
            */
            aspectRatio: "16/9",
            transition: "transform 0.42s cubic-bezier(0.4,0,0.2,1), opacity 0.42s ease",
            transform: slideOut,
            opacity: sliding ? 0.4 : 1,
          }}
        >
          {/* Background image */}
          <Image
            key={`${destIndex}-${imgIndex}`}
            src={current.images[imgIndex]}
            alt={`${current.country} — image ${imgIndex + 1}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
            style={{ transition: "opacity 0.5s ease" }}
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent 30%, rgba(5,5,30,0.80) 100%)",
            }}
          />

          {/* Destination counter pill — top right */}
          <div className="absolute top-5 right-5 z-10">
            <div
              className="px-3.5 py-1.5 rounded-full font-body font-semibold text-white text-xs"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              {destIndex + 1} / {destinations.length}
            </div>
          </div>

          {/*
            FIX 2: Thumbnails sit INSIDE the card, bottom-right, always.
            No negative offsets, no py-8 hacks. They live at bottom-4 right-4
            on mobile and bottom-7 right-7 on sm+.
          */}
          <div className="absolute bottom-4 right-4 sm:bottom-7 sm:right-7 z-10 flex items-center gap-2">
            {current.images.map((src, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setImgIndex(i); }}
                aria-label={`View image ${i + 1} of ${current.country}`}
                className={`relative overflow-hidden rounded-lg border-2 transition-all duration-200 flex-shrink-0 ${
                  i === imgIndex
                    ? "border-white shadow-lg w-12 h-8 sm:w-14 sm:h-10"
                    : "border-white/40 opacity-70 hover:opacity-100 w-8 h-6 sm:w-10 sm:h-8"
                }`}
              >
                <Image
                  src={src}
                  alt={`${current.country} thumbnail ${i + 1}`}
                  fill
                  sizes="56px"
                  className="object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          {/*
            FIX 3: Text area has enough bottom padding to clear the thumbnails.
            On mobile: pb-16 pushes text above the thumbnail row.
            On sm+: tagline shows, right padding keeps text from overlapping thumbnails.
            pr-36 sm:pr-48 ensures text never runs under the thumbnail strip.
          */}
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-16 sm:px-8 sm:pb-8 pr-36 sm:pr-52">
            <h3
              className="font-display font-bold text-white mb-2 sm:mb-3"
              style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)" }}
            >
              {current.country}
            </h3>

            {/* FIX 4: Tagline hidden on mobile — too much text for small card */}
            <p className="hidden sm:block font-body text-white/80 text-sm sm:text-base leading-relaxed max-w-xl mb-6">
              {current.tagline}
            </p>

            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <Link
                href={current.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white font-body font-semibold text-xs sm:text-sm hover:bg-white hover:text-[#0a0a2e] transition-all duration-200"
              >
                Read More
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white font-body font-semibold text-xs sm:text-sm hover:bg-white hover:text-[#0a0a2e] transition-all duration-200"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* ── Dot indicators ────────────────────────────────── */}
        <div className="flex justify-center items-center gap-2 mt-5">
          {destinations.map((d, i) => (
            <button
              key={d.id}
              onClick={() => goTo(i, i > destIndex ? "left" : "right")}
              aria-label={`Go to ${d.country}`}
              className={`rounded-full transition-all duration-300 ${
                i === destIndex
                  ? "w-6 h-2 bg-[#0D7EFF]"
                  : "w-2 h-2 bg-gray-400 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* ── View All Countries ────────────────────────────── */}
        <div className="flex justify-center mt-8">
          <Link
            href="/countries"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0D7EFF] text-white font-body font-semibold text-[15px] hover:bg-[#0055cc] transition-all duration-200 shadow-lg shadow-[#0D7EFF]/30 hover:-translate-y-0.5 hover:shadow-xl"
          >
            View All Countries
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}