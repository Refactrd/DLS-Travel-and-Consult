"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const typingPhrases = [
  "Study in Europe",
  "Work Abroad",
  "Reunite Your Family",
  "Volunteer Globally",
  "Build Your Future",
];

const floatingBadges = [
  { flag: "🇩🇪", name: "Germany",     delay: 0,    x: "8%",  y: "22%" },
  { flag: "🇫🇷", name: "France",      delay: 400,  x: "80%", y: "18%" },
  { flag: "🇳🇱", name: "Netherlands", delay: 800,  x: "12%", y: "68%" },
  { flag: "🇪🇸", name: "Spain",       delay: 1200, x: "75%", y: "72%" },
  { flag: "🇦🇹", name: "Austria",     delay: 600,  x: "88%", y: "44%" },
  { flag: "🇵🇹", name: "Portugal",    delay: 1000, x: "4%",  y: "46%" },
];

export default function CountriesHero() {
  const videoRef      = useRef<HTMLVideoElement>(null);
  const [phrase, setPhrase]         = useState(0);
  const [displayed, setDisplayed]   = useState("");
  const [deleting, setDeleting]     = useState(false);
  const [badgesIn, setBadgesIn]     = useState(false);
  const [contentIn, setContentIn]   = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  // Entrance sequence
  useEffect(() => {
    const t1 = setTimeout(() => setContentIn(true), 200);
    const t2 = setTimeout(() => setBadgesIn(true), 600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);


  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = () => {
      video.play().then(() => {
        setVideoReady(true);
      }).catch((err) => {
        
        console.warn("[CountriesHero] Video autoplay failed:", err.name, err.message);
       
      });
    };

    // Try immediately in case video is cached
    attemptPlay();

    // Also fire on canplay in case video takes time to load
    video.addEventListener("canplay", attemptPlay, { once: true });

    return () => {
      video.removeEventListener("canplay", attemptPlay);
    };
  }, []);

  // Typing effect
  useEffect(() => {
    const current = typingPhrases[phrase];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setPhrase((p) => (p + 1) % typingPhrases.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, phrase]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(145deg, #060620 0%, #0D1B6E 55%, #0D7EFF 100%)",
        }}
      />
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-center z-[1]"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        style={{
          opacity: videoReady ? 1 : 0,
          transition: "opacity 1s ease",
        }}
        onCanPlay={() => {
          videoRef.current?.play().then(() => setVideoReady(true)).catch(console.warn);
        }}
        onError={(e) => {
          // Check browser console for specific error
          console.warn("[CountriesHero] Video element error:", e);
        }}
      >
       
        <source src="/videos/europe-hero.webm" type="video/webm" />
        <source src="/videos/europe-hero.mp4"  type="video/mp4"  />
      </video>

      {/* ── Gradient overlay ─────────────────────────────── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,5,30,0.6) 0%, rgba(5,5,30,0.4) 40%, rgba(5,5,30,0.75) 100%)",
        }}
      />

      {/* ── Floating country badges ──────────────────────── */}
      {floatingBadges.map((badge) => (
        <div
          key={badge.name}
          className="absolute z-20 hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-2xl"
          style={{
            left: badge.x,
            top: badge.y,
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            opacity: badgesIn ? 1 : 0,
            transform: badgesIn ? "translateY(0) scale(1)" : "translateY(12px) scale(0.94)",
            transition: `opacity 0.7s ease ${badge.delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${badge.delay}ms`,
            animation: badgesIn
              ? `floatBadge ${3.5 + (badge.delay % 3) * 0.5}s ease-in-out ${badge.delay * 0.3}ms infinite alternate`
              : "none",
          }}
        >
          <span className="text-xl leading-none">{badge.flag}</span>
          <span className="font-body font-semibold text-white text-sm">{badge.name}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0D7EFF]" />
        </div>
      ))}

      {/* ── Orb ─────────────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full z-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(13,126,255,0.18) 0%, transparent 65%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      {/* ── Main content ─────────────────────────────────── */}
      <div
        className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20"
        style={{
          opacity: contentIn ? 1 : 0,
          transform: contentIn ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Label */}
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 font-body font-semibold text-white/80 text-xs uppercase tracking-widest"
          style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0D7EFF]" style={{ animation: "pulse 2s ease-in-out infinite" }} />
          Destinations
          <span className="w-1.5 h-1.5 rounded-full bg-[#0D7EFF]" style={{ animation: "pulse 2s ease-in-out infinite 1s" }} />
        </div>

        {/* Heading */}
        <h1
          className="font-display font-bold text-white leading-[1.06] tracking-tight mb-4"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
        >
          Explore Your Options
        </h1>

        {/* Typing */}
        <div className="mb-7 font-display font-bold" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.6rem)" }}>
          <span
            style={{
              background: "linear-gradient(90deg, #60a5fa, #0D7EFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {displayed}
          </span>
          <span
            className="inline-block rounded-full ml-1 align-middle"
            style={{
              width: "3px", height: "0.8em",
              background: "#0D7EFF",
              verticalAlign: "middle",
              animation: "cursorBlink 1s step-end infinite",
            }}
          />
        </div>

        {/* Subtext */}
        <p className="font-body text-white text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Every country on our list is one we&apos;ve successfully placed clients in.
          Explore available programs, requirements, and the application process.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#countries-grid"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-white text-[15px] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #0D7EFF 0%, #0055cc 100%)",
              boxShadow: "0 8px 32px rgba(13,126,255,0.4)",
            }}
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <span className="relative z-10">Browse All Countries</span>
            <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link
            href="/consultation"
            className="inline-flex items-center px-8 py-4 rounded-full font-body font-semibold text-white text-[15px] transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            Book a Consultation
          </Link>
        </div>

        {/* Country count */}
        <div
          className="inline-flex items-center gap-3 mt-10 px-5 py-3 rounded-2xl font-body"
          style={{
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div className="flex -space-x-2">
            {["🇩🇪","🇫🇷","🇳🇱","🇪🇸","🇦🇹"].map((flag, i) => (
              <span
                key={i}
                className="text-xl w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "2px solid rgba(255,255,255,0.2)",
                  zIndex: 5 - i,
                }}
              >
                {flag}
              </span>
            ))}
          </div>
          <div className="w-px h-5 bg-white/20" />
          <span className="text-white/60 text-sm">
            <span className="text-white font-semibold">12 countries</span> ready to explore
          </span>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
        <div
          className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
          style={{ border: "1.5px solid rgba(255,255,255,0.3)" }}
        >
          <div
            className="w-1 h-2.5 rounded-full bg-white/60"
            style={{ animation: "scrollBounce 2s ease-in-out infinite" }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes floatBadge {
          from { transform: translateY(0px);  }
          to   { transform: translateY(-8px); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0);    opacity: 0.6; }
          50%       { transform: translateY(10px); opacity: 1;   }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1;   }
          50%       { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}