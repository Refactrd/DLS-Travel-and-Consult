"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const avatars = [
  { id: 1, src: "/images/avatar-1.png", alt: "Traveler 1" },
  { id: 2, src: "/images/avatar-2.png", alt: "Traveler 2" },
  { id: 3, src: "/images/avatar-3.png", alt: "Traveler 3" },
  { id: 4, src: "/images/avatar-4.png", alt: "Traveler 4" },
];

// Floating achievement cards that orbit the section
const floatingCards = [
  {
    id: "students",
    stat: "70+",
    label: "Students Relocated",
    icon: "🎓",
    color: "#7C3AED",
    x: "left-6 lg:left-10",
    y: "top-[22%]",
    delay: 0,
  },
  {
    id: "countries",
    stat: "12",
    label: "Countries Covered",
    icon: "🌍",
    color: "#0D7EFF",
    x: "right-6 lg:right-10",
    y: "top-[18%]",
    delay: 300,
  },
  {
    id: "families",
    stat: "20+",
    label: "Families Reunified",
    icon: "🏡",
    color: "#dc2626",
    x: "left-6 lg:left-10",
    y: "bottom-[22%]",
    delay: 600,
  },
  {
    id: "years",
    stat: "5+",
    label: "Years of Experience",
    icon: "⏱",
    color: "#059669",
    x: "right-6 lg:right-10",
    y: "bottom-[18%]",
    delay: 900,
  },
];

export default function AboutSection() {
  const sectionRef      = useRef<HTMLElement>(null);
  const labelRef        = useRef<HTMLParagraphElement>(null);
  const headingRef      = useRef<HTMLHeadingElement>(null);
  const socialProofRef  = useRef<HTMLDivElement>(null);
  const captionRef      = useRef<HTMLParagraphElement>(null);
  const ctaRef          = useRef<HTMLDivElement>(null);
  const [cardsIn, setCardsIn] = useState(false);

  useEffect(() => {
    const targets = [
      { el: labelRef.current,       delay: 0   },
      { el: headingRef.current,     delay: 140 },
      { el: socialProofRef.current, delay: 300 },
      { el: captionRef.current,     delay: 420 },
      { el: ctaRef.current,         delay: 520 },
    ];

    targets.forEach(({ el }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(36px)";
      el.style.transition =
        "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)";
    });

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      targets.forEach(({ el, delay }) => {
        if (!el) return;
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, delay);
      });
      setTimeout(() => setCardsIn(true), 400);
      observer.disconnect();
    }, { threshold: 0.12 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[92vh] flex flex-col items-center justify-center overflow-hidden py-28 px-4"
    >
      {/* ── Background ──────────────────────────────────────── */}
      <div className="absolute inset-0">
        <Image
          src="/images/talent.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        {/* Multi-layer overlay for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: [
              "radial-gradient(ellipse 80% 60% at 50% 40%,",
              "rgba(255,255,255,0.55) 0%,",
              "rgba(255,255,255,0.18) 60%,",
              "rgba(238,244,255,0.08) 100%)",
            ].join(" "),
          }}
        />
        {/* Subtle vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: [
              "radial-gradient(ellipse 100% 100% at 50% 50%,",
              "transparent 30%,",
              "rgba(10,10,46,0.12) 100%)",
            ].join(" "),
          }}
        />
      </div>

      {/* ── Floating achievement cards ───────────────────────── */}
      {floatingCards.map((card) => (
        <div
          key={card.id}
          className={`absolute ${card.x} ${card.y} hidden lg:flex items-center gap-3 px-4 py-3.5 rounded-2xl`}
          style={{
            background: "rgba(255,255,255,0.72)",
            backdropFilter: "blur(20px)",
            border: `1.5px solid ${card.color}20`,
            boxShadow: `0 8px 32px rgba(0,0,0,0.08), 0 2px 8px ${card.color}15`,
            opacity: cardsIn ? 1 : 0,
            transform: cardsIn ? "translateY(0) scale(1)" : "translateY(16px) scale(0.94)",
            transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${card.delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${card.delay}ms`,
            animation: cardsIn
              ? `floatCard ${4 + (card.delay % 2) * 0.8}s ease-in-out ${card.delay * 0.3}ms infinite alternate`
              : "none",
          }}
        >
          {/* Icon badge */}
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
            style={{ background: `${card.color}14` }}
          >
            {card.icon}
          </div>
          <div>
            <p
              className="font-display font-bold leading-tight"
              style={{ color: card.color, fontSize: "1.2rem" }}
            >
              {card.stat}
            </p>
            <p className="font-body text-gray-500 text-xs leading-tight">{card.label}</p>
          </div>
        </div>
      ))}

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">

        {/* Label */}
        <p
          ref={labelRef}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0D7EFF]/20 bg-white/60 backdrop-blur-sm text-[#0D7EFF] text-xs font-body font-bold uppercase tracking-widest mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0D7EFF]" />
          About Us
          <span className="w-1.5 h-1.5 rounded-full bg-[#0D7EFF]" />
        </p>

        {/* Heading */}
        <h2
          ref={headingRef}
          className="font-display font-bold text-[#0a0a2e] leading-[1.08] tracking-tight mb-10"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}
        >
          We make planning{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #0D7EFF 0%, #4361ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            effortless
          </span>
          {" "}so you can focus on what{" "}
          <span className="relative inline-block">
            truly matters
            {/* Underline accent */}
            <span
              className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
              style={{ background: "linear-gradient(90deg, #0D7EFF, #4361ee)" }}
            />
          </span>
        </h2>

        {/* Social proof */}
        <div ref={socialProofRef} className="flex items-center gap-4 mb-6">
          {/* Stacked avatars */}
          <div className="flex items-center">
            {avatars.map((avatar, i) => (
              <div
                key={avatar.id}
                className="relative w-11 h-11 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                style={{
                  marginLeft: i === 0 ? 0 : "-10px",
                  zIndex: avatars.length - i,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
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

          {/* Divider */}
          <div className="w-px h-8 bg-gray-200" />

          {/* Rating + count */}
          <div className="flex flex-col items-start gap-0.5">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#F59E0B">
                  <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78L10 1z"/>
                </svg>
              ))}
              <span className="font-body font-bold text-[#0a0a2e] text-sm ml-1">5.0</span>
            </div>
            <p className="font-body text-gray-400 text-xs">from 200+ satisfied clients</p>
          </div>
        </div>

        {/* Caption */}
        <p
          ref={captionRef}
          className="font-body text-gray-500 text-base sm:text-[17px] leading-relaxed max-w-lg mb-10"
        >
          Founded by travelers, for travelers, because every journey deserves
          expert guidance, personalized care, and a team that genuinely
          invests in your success.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/about"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-semibold text-white text-[15px] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #0D7EFF 0%, #0055cc 100%)",
              boxShadow: "0 8px 24px rgba(13,126,255,0.32)",
            }}
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <span className="relative z-10">Our Full Story</span>
            <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link
            href="/consultation"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-semibold text-[#0D7EFF] text-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              background: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(12px)",
              border: "1.5px solid rgba(13,126,255,0.25)",
            }}
          >
            Book a Consultation
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatCard {
          from { transform: translateY(0px);  }
          to   { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}