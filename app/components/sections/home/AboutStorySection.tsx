"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import StatsSection from "./StatsSection";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#0D7EFF" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="#0D7EFF" strokeWidth="1.8"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#0D7EFF" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    label: "Personalized Guidance",
    description: "Every client gets a tailored plan built around their specific goals and circumstances.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#0D7EFF" strokeWidth="1.8"/>
        <path d="M12 6v6l4 2" stroke="#0D7EFF" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    label: "End-to-End Support",
    description: "From your first consultation to landing abroad, we handle every step alongside you.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="#0D7EFF" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M22 4L12 14.01l-3-3" stroke="#0D7EFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Proven Track Record",
    description: "Over 5 years of successfully relocating students, professionals, and families across Europe.",
  },
];

export default function AboutStorySection() {
  const [activeCard, setActiveCard] = useState(0); // 0 = about, 1 = stats
  const [sliding, setSliding]       = useState<"in" | "out" | null>(null);
  const [direction, setDirection]   = useState<1 | -1>(1); // 1 = forward, -1 = back
  const sectionRef  = useRef<HTMLElement>(null);
  const imageRef    = useRef<HTMLDivElement>(null);
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Entrance animation
  useEffect(() => {
    [imageRef.current, wrapperRef.current].forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = i === 0 ? "translateX(-32px)" : "translateX(32px)";
      el.style.transition = "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)";
    });

    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setTimeout(() => {
        if (imageRef.current)  { imageRef.current.style.opacity = "1";  imageRef.current.style.transform = "translateX(0)"; }
        if (wrapperRef.current){ wrapperRef.current.style.opacity = "1"; wrapperRef.current.style.transform = "translateX(0)"; }
      }, 100);
      obs.disconnect();
    }, { threshold: 0.1 });

    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const goTo = useCallback((index: number, dir: 1 | -1) => {
    if (sliding) return;
    setDirection(dir);
    setSliding("out");

    setTimeout(() => {
      setActiveCard(index);
      setSliding("in");
      setTimeout(() => setSliding(null), 420);
    }, 320);
  }, [sliding]);

  // Auto-swipe every 5s
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      goTo(activeCard === 0 ? 1 : 0, 1);
    }, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [activeCard, goTo]);

  const handleDotClick = (index: number) => {
    if (index === activeCard) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    goTo(index, index > activeCard ? 1 : -1);
    intervalRef.current = setInterval(() => {
      setActiveCard((p) => {
        const next = p === 0 ? 1 : 0;
        goTo(next, 1);
        return p;
      });
    }, 5000);
  };

  // Slide transform for card panel
  const getCardTransform = () => {
    if (sliding === "out") return `translateX(${direction === 1 ? "-6%" : "6%"}) scale(0.97)`;
    if (sliding === "in")  return `translateX(${direction === 1 ? "4%"  : "-4%"}) scale(0.99)`;
    return "translateX(0) scale(1)";
  };

  const getCardOpacity = () => {
    if (sliding === "out") return 0;
    if (sliding === "in")  return 0.6;
    return 1;
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F8F9FF] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <div className="flex items-center gap-2 text-[#0D7EFF] text-xs font-body font-bold uppercase mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0D7EFF]" />
          About Us
          <span className="w-1.5 h-1.5 rounded-full bg-[#0D7EFF]" />
        </div>

        {/* ── Split block ───────────────────────────────────── */}
        <div
          className="relative flex flex-col lg:flex-row items-stretch rounded-3xl overflow-hidden"
          style={{ minHeight: "520px" }}
        >
          {/* Left — fixed image */}
          <div
            ref={imageRef}
            className="relative w-full lg:w-[58%] flex-shrink-0"
            style={{ minHeight: "360px" }}
          >
            <Image
              src="/images/sunset-london-uk.jpg"
              alt="DLS — guiding people to global opportunities"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center"
              loading="lazy"
            />
            {/* Blend edge */}
            <div
              className="absolute inset-y-0 right-0 w-28 hidden lg:block pointer-events-none"
              style={{ background: "linear-gradient(to right, transparent, #F8F9FF)" }}
            />

            {/* Card indicator — bottom left of image */}
            <div className="absolute bottom-5 left-5 flex items-center gap-2 z-10">
              {[0, 1].map((i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  aria-label={i === 0 ? "About card" : "Stats card"}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width:  i === activeCard ? "24px" : "8px",
                    height: "8px",
                    background: i === activeCard
                      ? "#0D7EFF"
                      : "rgba(255,255,255,0.6)",
                  }}
                />
              ))}
              <span className="font-body text-white text-xs ml-1 font-medium"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
              >
                {activeCard + 1} / 2
              </span>
            </div>
          </div>

          {/* Right — sliding card panel */}
          <div
            ref={wrapperRef}
            className="relative z-10 w-full lg:w-auto lg:-ml-16 flex-1"
          >
            <div
              style={{
                transform: getCardTransform(),
                opacity: getCardOpacity(),
                transition: "transform 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.32s ease",
                height: "100%",
              }}
            >
              {activeCard === 0 ? (
                /* ── Card 1: About ─────────────────────────── */
                <div
                  className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/8 flex flex-col justify-center h-full"
                  style={{ border: "1px solid rgba(13,126,255,0.08)" }}
                >
                  <h2
                    className="font-display font-bold text-[#0a0a2e] leading-tight mb-4"
                    style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)" }}
                  >
                    Personalized Guidance for Your Global Journey
                  </h2>
                  <p className="font-body text-gray-500 text-[15px] leading-relaxed mb-7 max-w-md">
                    At DLS Travel and Consult, we simplify global opportunities
                    through expert guidance, personalized support, and an
                    unwavering commitment to excellence.
                  </p>

                  <div className="flex flex-col gap-5 mb-8">
                    {features.map((feat) => (
                      <div key={feat.label} className="flex items-start gap-4">
                        <div
                          className="flex-shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center"
                          style={{ background: "#EEF4FF" }}
                        >
                          {feat.icon}
                        </div>
                        <div>
                          <p className="font-body font-semibold text-[#0a0a2e] text-[15px] mb-0.5">
                            {feat.label}
                          </p>
                          <p className="font-body text-gray-400 text-sm leading-relaxed">
                            {feat.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-body font-semibold text-white text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                      style={{
                        background: "linear-gradient(135deg, #0D7EFF 0%, #0055cc 100%)",
                        boxShadow: "0 8px 24px rgba(13,126,255,0.3)",
                      }}
                    >
                      Learn More
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                    <button
                      onClick={() => handleDotClick(1)}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-body font-semibold text-[#0D7EFF] text-sm border-2 border-[#0D7EFF]/20 hover:border-[#0D7EFF] transition-all duration-200"
                    >
                      Our Numbers
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>

              ) : (
                /* ── Card 2: Stats ─────────────────────────── */
                <div
                  className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/8 flex flex-col justify-center h-full"
                  style={{ border: "1px solid rgba(13,126,255,0.08)" }}
                >
                  <h2
                    className="font-display font-bold text-[#0a0a2e] leading-tight mb-2"
                    style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)" }}
                  >
                    Our Impact in Numbers
                  </h2>
                  <p className="font-body text-gray-400 text-sm leading-relaxed mb-7">
                    Five years of turning global ambitions into reality — one client at a time.
                  </p>

                  <StatsSection />

                  <button
                    onClick={() => handleDotClick(0)}
                    className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-body font-semibold text-[#0D7EFF] text-sm border-2 border-[#0D7EFF]/20 hover:border-[#0D7EFF] transition-all duration-200 self-start"
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Back to Our Story
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}