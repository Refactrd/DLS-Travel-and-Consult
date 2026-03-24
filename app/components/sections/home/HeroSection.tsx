"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Staggered CSS-driven entrance — no GSAP dependency needed for this
    const els = [
      badgeRef.current,
      headingRef.current,
      subRef.current,
      ctaRef.current,
    ];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(32px)";
      el.style.transition = `opacity 0.7s ease, transform 0.7s ease`;
      setTimeout(
        () => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        },
        300 + i * 130,
      );
    });
  }, []);

  // Force video play (some browsers need explicit call after mount)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {
      // Autoplay blocked — gradient fallback already visible
    });
  }, []);

  const words = ["Your", "Journey", "to", "Europe", "Starts", "Here"];

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* ── Video Background ────────────────────────────── */}
      <div className="absolute inset-0 w-full h-full">
        {/* Gradient fallback — always present, sits behind video */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: "linear-gradient(135deg, #090934 0%, #1515A9 100%)",
          }}
        />

        {/* Video — place Eloplane.mp4 in /public/videos/Eloplane.mp4 */}
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center center" }}
          >
            {/*
              VIDEO SETUP INSTRUCTIONS:
              1. Copy Eloplane.mp4 into your project at: public/videos/Eloplane.mp4
              2. Optionally create a WebM version for smaller file size:
                 ffmpeg -i Eloplane.mp4 -vcodec libvpx-vp9 -crf 30 -b:v 0 -an public/videos/Eloplane.webm
              3. The video path below uses a leading slash — Next.js serves from /public automatically
            */}
            <source src="/videos/Eloplane.webm" type="video/webm" />
            <source src="/videos/Eloplane.mp4" type="video/mp4" />
          </video>
        )}

        {/* Dark overlay — matches design's dimmed cinematic look */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,5,40,0.50) 0%, rgba(5,5,40,0.30) 40%, rgba(5,5,40,0.65) 100%)",
          }}
        />
      </div>

      {/* ── Floating particles ───────────────────────────── */}
      <Particles />

      {/* ── Hero Content ─────────────────────────────────── */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto mt-16">
        {/* Heading */}
        <h1
          ref={headingRef}
          className="font-display text-5xl sm:text-6xl md:text-[72px] font-bold text-white leading-[1.07] tracking-tight mb-5"
        >
          {words.map((word, i) => (
            <span key={i} className="inline-block mr-[0.22em]">
              {word}
            </span>
          ))}
        </h1>

        {/* Subtext */}
        <p
          ref={subRef}
          className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10 font-body"
        >
          DLS connects ambitious Africans to study, work, and life opportunities
          across Europe with expert visa guidance, language training, and
          end-to-end support.
        </p>

        {/* CTA Row — WhatsApp circle + Book Consultation pill (joined look from design) */}
        <div ref={ctaRef} className="flex items-center justify-center">
          <div className="flex items-center gap-6">
            {/* WhatsApp circle */}
            <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-[#25D366]/60 bg-[#1a1a4e] hover:bg-[#25D366]/20 hover:border-[#25D366] hover:scale-105 transition-all duration-200 z-10"
              style={{ marginRight: "-1px" }}
            >
              <WhatsAppIconColored className="w-7 h-7" />
            </a>

            {/* Book Consultation pill */}
            <Link
              href="/consultation"
              className="group relative inline-flex items-center px-7 py-4 rounded-full text-white font-semibold text-[15px] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#1818B1]/50 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #1818B1 0%, #1515cc 100%)",
                paddingLeft: "28px",
              }}
            >
              {/* Shimmer sweep on hover */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-600 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <span className="relative z-10">Book Consultation</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
    </section>
  );
}

function Particles() {
  // Fixed seed so no hydration mismatch
  const particles = [
    { id: 0, size: 3, x: 12, y: 20, delay: 0, dur: 7 },
    { id: 1, size: 2, x: 25, y: 65, delay: 1.2, dur: 9 },
    { id: 2, size: 4, x: 38, y: 15, delay: 2.4, dur: 6 },
    { id: 3, size: 2, x: 55, y: 78, delay: 0.8, dur: 8 },
    { id: 4, size: 3, x: 70, y: 30, delay: 3.1, dur: 7 },
    { id: 5, size: 2, x: 82, y: 55, delay: 1.7, dur: 10 },
    { id: 6, size: 3, x: 90, y: 18, delay: 0.4, dur: 8 },
    { id: 7, size: 2, x: 8, y: 80, delay: 2.0, dur: 6 },
    { id: 8, size: 4, x: 48, y: 45, delay: 4.2, dur: 9 },
    { id: 9, size: 2, x: 63, y: 88, delay: 1.5, dur: 7 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-[#AFAFFC]/60"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            animation: `particle-float ${p.dur}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes particle-float {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-18px);
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
}

function WhatsAppIconColored({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22.94 19.71c-.31-.16-1.83-.9-2.12-1.01-.28-.1-.49-.15-.7.16-.2.31-.8 1.01-.98 1.22-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.53-.91-.82-1.53-1.83-1.71-2.14-.18-.31-.02-.48.13-.63.14-.14.31-.36.47-.54.16-.18.2-.31.31-.52.1-.2.05-.38-.03-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53-.18-.01-.38-.01-.59-.01-.2 0-.54.08-.82.38-.28.31-1.08 1.06-1.08 2.57 0 1.52 1.1 2.99 1.26 3.2.16.2 2.17 3.32 5.27 4.66.73.32 1.31.51 1.75.65.74.23 1.41.2 1.94.12.59-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36z"
        fill="#25D366"
      />
      <path
        d="M16.01 4C9.37 4 4 9.37 4 16.01c0 2.13.56 4.13 1.54 5.86L4 28l6.31-1.66a11.94 11.94 0 005.7 1.45C22.65 27.79 28 22.4 28 16.01 28 9.63 22.65 4 16.01 4zm0 21.79a9.74 9.74 0 01-5.22-1.51l-.37-.22-3.88 1.02 1.04-3.79-.24-.38a9.78 9.78 0 01-1.5-5.19c0-5.41 4.4-9.81 9.82-9.81S25.83 10.72 25.83 16.13c0 5.42-4.4 9.66-9.82 9.66z"
        fill="#25D366"
      />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
