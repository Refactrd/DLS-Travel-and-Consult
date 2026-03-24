"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const avatars = [
  {
    id: 1,
    src: "/images/avatar-1.png",
    alt: "Traveler 1",
  },
  {
    id: 2,
    src: "/images/avatar-2.png",
    alt: "Traveler 2",
  },
  {
    id: 3,
    src: "/images/avatar-3.png",
    alt: "Traveler 3",
  },
  {
    id: 4,
    src: "/images/avatar-4.png",
    alt: "Traveler 4",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const socialProofRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const targets = [
      { el: labelRef.current, delay: 0 },
      { el: headingRef.current, delay: 120 },
      { el: socialProofRef.current, delay: 280 },
      { el: captionRef.current, delay: 380 },
    ];

    // Set initial hidden state
    targets.forEach(({ el }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(36px)";
      el.style.transition =
        "opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1), transform 0.85s cubic-bezier(0.22, 1, 0.36, 1)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        targets.forEach(({ el, delay }) => {
          if (!el) return;
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
        });

        observer.disconnect();
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[88vh] flex flex-col items-center justify-center overflow-hidden py-24 px-4"
    >
      <div className="absolute inset-0 w-full h-full object-cover object-center">
        <Image
          src="/images/talent.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        {/* Very subtle overlay to ensure text stays crisp */}
        <div className="absolute inset-0 bg-white/20" />
      </div>

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Section label */}
        <p
          ref={labelRef}
          className="flex items-center gap-2.5 text-[#1818B1] text-xs font-bold uppercase mb-8"
        >
          <span>✦</span>
          About Us
          <span>✦</span>
        </p>

        {/* Main heading */}
        <h2
          ref={headingRef}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-medium text-gray-900 leading-[1.1] tracking-tight mb-20"
        >
          We make planning effortless so you can focus on what really matter
        </h2>

        {/* Social proof row */}
        <div ref={socialProofRef} className="flex items-center gap-3 mb-5">
          {/* Stacked avatars */}
          <div className="flex items-center">
            {avatars.map((avatar, i) => (
              <div
                key={avatar.id}
                className="relative w-11 h-11 rounded-full border-2 border-white overflow-hidden bg-gray-200 shadow-sm"
                style={{
                  marginLeft: i === 0 ? 0 : "-10px",
                  zIndex: avatars.length - i,
                }}
              >
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  fill
                  sizes="44px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* 100K+ pill */}
          <div className="flex items-center justify-center px-3.5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm">
            <span className="text-gray-700 text-sm font-semibold tracking-wide">
              100K+
            </span>
          </div>
        </div>

        {/* Caption */}
        <p
          ref={captionRef}
          className="text-[#696969] text-base sm:text-[17px] leading-[26px]max-w-md font-body"
          
        >
          Founded by travelers, for travelers, because every
          <br />
          journey deserves a personal touch.
        </p>
      </div>
    </section>
  );
}
