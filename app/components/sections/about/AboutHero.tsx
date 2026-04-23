"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  { src: "/images/lyon.jpg",     label: "Lyon, France"     },
  { src: "/images/madrid.jpg",        label: "Madrid, Spain"       },
  { src: "/images/amsterdam.jpg",   label: "Amsterdam, Netherlands" },
  { src: "/images/lisbon.jpg",      label: "Lisbon, Portugal"    },
  { src: "/images/lyon.jpg",     label: "Berlin, Germany"     },
];

// Words that cycle through the typing animation
const typingWords = [
  "Excellence",
  "Clarity",
  "Confidence",
  "Purpose",
  "Freedom",
];

export default function AboutHero() {
  const [slideIndex, setSlideIndex]   = useState(0);
  const [wordIndex, setWordIndex]     = useState(0);
  const [displayed, setDisplayed]     = useState("");
  const [isDeleting, setIsDeleting]   = useState(false);
  const [isPaused, setIsPaused]       = useState(false);

  // Entrance refs
  const labelRef   = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef     = useRef<HTMLParagraphElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);

  // ── Entrance animations ──────────────────────────────────────
  useEffect(() => {
    const targets = [
      { el: labelRef.current,   delay: 200  },
      { el: headingRef.current, delay: 380  },
      { el: subRef.current,     delay: 560  },
      { el: ctaRef.current,     delay: 720  },
    ];
    targets.forEach(({ el }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition = "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)";
    });
    const t = setTimeout(() => {
      targets.forEach(({ el, delay }) => {
        if (!el) return;
        setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, delay);
      });
    }, 100);
    return () => clearTimeout(t);
  }, []);

  // ── Slide auto-advance every 5s ──────────────────────────────
  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // ── Typing effect ────────────────────────────────────────────
  useEffect(() => {
    if (isPaused) return;

    const currentWord = typingWords[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayed.length < currentWord.length) {
        // Type next character
        timeout = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length + 1));
        }, 90);
      } else {
        // Fully typed — pause then start deleting
        timeout = setTimeout(() => setIsDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        // Delete last character
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 45);
      } else {
        // Fully deleted — move to next word
        setIsDeleting(false);
        setWordIndex((p) => (p + 1) % typingWords.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, isPaused]);

  const currentSlide = slides[slideIndex];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Sliding background images ──────────────────────── */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === slideIndex ? 1 : 0, zIndex: 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.label}
            fill
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
            sizes="100vw"
            className="object-cover object-center"
            style={{
              transform: i === slideIndex ? "scale(1.04)" : "scale(1)",
              transition: "transform 5s ease-in-out",
            }}
          />
        </div>
      ))}

      {/* ── Overlay gradient — dark bottom for text legibility ─ */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,5,30,0.55) 0%, rgba(5,5,30,0.4) 40%, rgba(5,5,30,0.72) 100%)",
        }}
      />

      {/* ── Slide counter + location — bottom left ─────────── */}
      <div className="absolute bottom-10 left-6 sm:left-10 z-20 flex items-center gap-3">
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full text-white/80 text-xs font-body font-medium"
          style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0D7EFF] animate-pulse" />
          {currentSlide.label}
        </div>

        {/* Slide dots */}
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlideIndex(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === slideIndex ? "20px" : "6px",
                height: "6px",
                background: i === slideIndex ? "#0D7EFF" : "rgba(255,255,255,0.4)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Scroll hint — bottom right ──────────────────────── */}
      <div className="absolute bottom-10 right-6 sm:right-10 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-white/30 relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 right-0 bg-white/80 rounded-full"
            style={{ height: "40%", animation: "scrollDrop 1.8s ease-in-out infinite" }}
          />
        </div>
        <span className="text-white/40 text-[10px] font-body uppercase tracking-widest" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
      </div>

      {/* ── Main content ────────────────────────────────────── */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">

        {/* Label */}
        <p
          ref={labelRef}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white/80 text-xs font-body font-semibold uppercase tracking-widest mb-8"
          style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0D7EFF]" />
          Our Story
          <span className="w-1.5 h-1.5 rounded-full bg-[#0D7EFF]" />
        </p>

        {/* Heading with typing effect */}
        <h1
          ref={headingRef}
          className="font-display font-bold text-white leading-[1.06] tracking-tight mb-7"
          style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
        >
          Driven by{" "}
          <span className="relative inline-block">
            {/* Typing text */}
            <span
              className="font-display"
              style={{
                background: "linear-gradient(90deg, #60a5fa, #0D7EFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {displayed}
            </span>
            {/* Blinking cursor */}
            <span
              className="inline-block w-[3px] ml-0.5 rounded-full align-middle"
              style={{
                height: "0.85em",
                background: "#0D7EFF",
                animation: "blink 1s step-end infinite",
                verticalAlign: "middle",
              }}
            />
          </span>
          <br />
          We Take You Global
        </h1>

        {/* Subtext */}
        <p
          ref={subRef}
          className="font-body text-white/65 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          At DLS Travel and Consult, we simplify global opportunities through
          expert guidance, personalized support, and a commitment to excellence
          — turning your international ambitions into reality.
        </p>

        {/* CTA buttons */}
        <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/consultation"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-white text-[15px] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#0D7EFF]/30 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #0D7EFF 0%, #0055cc 100%)" }}
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <span className="relative z-10">Book a Consultation</span>
            <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-white text-[15px] transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            Explore Programs
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes scrollDrop {
          0%   { transform: translateY(-100%); opacity: 0; }
          30%  { opacity: 1; }
          100% { transform: translateY(250%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}