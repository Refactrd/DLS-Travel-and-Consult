"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/*
  VIDEO SETUP — same as CountriesHero:
  public/videos/programs-hero.mp4  (or reuse europe-hero.mp4)
  public/videos/programs-hero.webm

  Suggested search terms for this page:
  "university campus aerial", "students studying abroad",
  "european university", "graduation ceremony", "professionals working"

  Same free sources: Coverr.co, Pexels.com/videos, Mixkit.co
*/

const programs = [
  { emoji: "🎓", label: "Study Abroad",    color: "#0D7EFF", delay: 0    },
  { emoji: "💼", label: "Work & Training", color: "#7C3AED", delay: 300  },
  { emoji: "🌍", label: "Volunteering",    color: "#059669", delay: 600  },
  { emoji: "👨‍👩‍👧", label: "Family Reunion",  color: "#dc2626", delay: 900  },
  { emoji: "✈️", label: "Short-Stay Tours", color: "#0ea5e9", delay: 1200 },
];

const typingPhrases = [
  "Every Pathway, Covered",
  "Study. Work. Thrive.",
  "Your Route to Europe",
  "We Handle Every Step",
];

export default function ProgramsHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [contentIn, setContentIn]   = useState(false);
  const [badgesIn, setBadgesIn]     = useState(false);
  const [phrase, setPhrase]         = useState(0);
  const [displayed, setDisplayed]   = useState("");
  const [deleting, setDeleting]     = useState(false);
  const [lineIn, setLineIn]         = useState(false);
  const [videoReady, setVideoReady]   = useState(false);

  // Entrance sequence
  useEffect(() => {
    const t1 = setTimeout(() => setContentIn(true), 150);
    const t2 = setTimeout(() => setBadgesIn(true), 700);
    const t3 = setTimeout(() => setLineIn(true), 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  // Autoplay video — robust approach matching CountriesHero
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const attempt = () => {
      video.play()
        .then(() => setVideoReady(true))
        .catch((e) => console.warn("[ProgramsHero] video:", e.name, e.message));
    };
    attempt();
    video.addEventListener("canplay", attempt, { once: true });
    return () => video.removeEventListener("canplay", attempt);
  }, []);

  // Typing effect
  useEffect(() => {
    const current = typingPhrases[phrase];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
      } else {
        setDeleting(false);
        setPhrase((p) => (p + 1) % typingPhrases.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, phrase]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Video background ──────────────────────────────── */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-center z-[1]"
        autoPlay muted loop playsInline preload="auto"
        poster="/images/programs-poster.jpg"
        aria-hidden="true"
        style={{ opacity: videoReady ? 1 : 0, transition: "opacity 1.2s ease" }}
        onCanPlay={() => {
          videoRef.current?.play().then(() => setVideoReady(true)).catch(console.warn);
        }}
        onError={(e) => console.warn("[ProgramsHero] video error:", e)}
      >
        <source src="/videos/paris.webm" type="video/webm" />
        <source src="/videos/paris.mp4"  type="video/mp4"  />
      </video>

      {/* Fallback gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(145deg, #060620 0%, #12125e 50%, #1a1a8c 100%)", zIndex: 0 }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: [
            "linear-gradient(to bottom,",
            "rgba(5,5,30,0.7) 0%,",
            "rgba(5,5,30,0.45) 45%,",
            "rgba(5,5,30,0.8) 100%)",
          ].join(" "),
        }}
      />

      {/* ── Animated grid lines — decorative ─────────────── */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0"
            style={{
              left: `${(i + 1) * 20}%`,
              width: "1px",
              background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.04) 70%, transparent)",
              opacity: lineIn ? 1 : 0,
              transition: `opacity 1.2s ease ${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* ── Program pill badges — left and right sides ────── */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
        {/* Left column */}
        {programs.slice(0, 3).map((prog, i) => (
          <div
            key={prog.label}
            className="absolute left-8 flex items-center gap-3 px-4 py-3 rounded-2xl"
            style={{
              top: `${28 + i * 18}%`,
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(16px)",
              border: `1px solid ${prog.color}30`,
              boxShadow: `0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)`,
              opacity: badgesIn ? 1 : 0,
              transform: badgesIn ? "translateX(0)" : "translateX(-20px)",
              transition: `opacity 0.7s ease ${prog.delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${prog.delay}ms`,
              animation: badgesIn ? `floatLeft 4s ease-in-out ${prog.delay}ms infinite alternate` : "none",
            }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
              style={{ background: `${prog.color}25` }}
            >
              {prog.emoji}
            </div>
            <div>
              <p className="font-body font-semibold text-white text-sm leading-tight">{prog.label}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="w-1 h-1 rounded-full" style={{ background: prog.color }} />
                <span className="font-body text-white/40 text-[10px]">Available</span>
              </div>
            </div>
          </div>
        ))}

        {/* Right column */}
        {programs.slice(3).map((prog, i) => (
          <div
            key={prog.label}
            className="absolute right-8 flex items-center gap-3 px-4 py-3 rounded-2xl"
            style={{
              top: `${34 + i * 18}%`,
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(16px)",
              border: `1px solid ${prog.color}30`,
              boxShadow: `0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)`,
              opacity: badgesIn ? 1 : 0,
              transform: badgesIn ? "translateX(0)" : "translateX(20px)",
              transition: `opacity 0.7s ease ${prog.delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${prog.delay}ms`,
              animation: badgesIn ? `floatRight 4.5s ease-in-out ${prog.delay}ms infinite alternate` : "none",
            }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
              style={{ background: `${prog.color}25` }}
            >
              {prog.emoji}
            </div>
            <div>
              <p className="font-body font-semibold text-white text-sm leading-tight">{prog.label}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="w-1 h-1 rounded-full" style={{ background: prog.color }} />
                <span className="font-body text-white/40 text-[10px]">Available</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Main content ──────────────────────────────────── */}
      <div
        className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20"
        style={{
          opacity: contentIn ? 1 : 0,
          transform: contentIn ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Label */}
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 font-body font-semibold text-white/75 text-xs uppercase tracking-widest"
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0D7EFF]" style={{ animation: "pulse 2s ease-in-out infinite" }} />
          Our Programs
          <span className="w-1.5 h-1.5 rounded-full bg-[#0D7EFF]" style={{ animation: "pulse 2s ease-in-out infinite 1s" }} />
        </div>

        {/* Static heading */}
        <h1
          className="font-display font-bold text-white leading-[1.05] tracking-tight mb-3"
          style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}
        >
          Every Pathway,
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #60a5fa 0%, #0D7EFF 50%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Covered
          </span>
        </h1>

        {/* Typing subheading */}
        <div
          className="mb-7 h-10 flex items-center justify-center"
        >
          <span className="font-body text-white/50 text-xl sm:text-2xl">
            {displayed}
            <span
              className="inline-block w-0.5 h-5 bg-[#0D7EFF] ml-0.5 align-middle rounded-full"
              style={{ animation: "cursorBlink 1s step-end infinite" }}
            />
          </span>
        </div>

        {/* Sub paragraph */}
        <p
          className="font-body text-white text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          style={{
            opacity: contentIn ? 1 : 0,
            transition: "opacity 1s ease 0.25s",
          }}
        >
          From full degree programs to vocational training and voluntary service,
          we specialize in every legitimate route to Europe — tailored to your
          goals and your country of destination.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          style={{ opacity: contentIn ? 1 : 0, transition: "opacity 1s ease 0.4s" }}
        >
          <Link
            href="#programs-list"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-white text-[15px] overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #0D7EFF 0%, #0055cc 100%)",
              boxShadow: "0 8px 32px rgba(13,126,255,0.45)",
            }}
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <span className="relative z-10">Explore Programs</span>
            <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <Link
            href="/consultation"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-white text-[15px] transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.22)",
            }}
          >
            Book a Consultation
          </Link>
        </div>

        {/* Program count pills */}
        <div
          className="flex flex-wrap items-center justify-center gap-3"
          style={{ opacity: contentIn ? 1 : 0, transition: "opacity 1s ease 0.55s" }}
        >
          {programs.map((prog) => (
            <div
              key={prog.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm"
              style={{
                background: `${prog.color}18`,
                border: `1px solid ${prog.color}35`,
                color: "rgba(255,255,255,0.75)",
              }}
            >
              <span className="text-base">{prog.emoji}</span>
              {prog.label}
            </div>
          ))}
        </div>
      </div>

   

      <style jsx>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes floatLeft {
          from { transform: translateX(0) translateY(0);  }
          to   { transform: translateX(4px) translateY(-6px); }
        }
        @keyframes floatRight {
          from { transform: translateX(0) translateY(0); }
          to   { transform: translateX(-4px) translateY(-8px); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0);    opacity: 0.5; }
          50%       { transform: translateY(10px); opacity: 1;   }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1;   transform: scale(1);    }
          50%       { opacity: 0.4; transform: scale(0.85); }
        }
      `}</style>
    </section>
  );
}