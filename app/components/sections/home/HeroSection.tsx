// "use client";

// import { useCallback, useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const cityCards = [
//   { src: "/images/germany.png",   city: "Berlin",    country: "Germany",        emoji: "🇩🇪" },
//   { src: "/images/amsterdam.jpg", city: "Amsterdam", country: "Netherlands",    emoji: "🇳🇱" },
//   { src: "/images/lisbon.jpg",    city: "Lisbon",    country: "Portugal",       emoji: "🇵🇹" },
//   { src: "/images/madrid.jpg",    city: "Madrid",    country: "Spain",          emoji: "🇪🇸" },
//   { src: "/images/london.jpg",    city: "London",    country: "United Kingdom", emoji: "🇬🇧" },
//   { src: "/images/prague.jpg",    city: "Prague",    country: "Czech Republic", emoji: "🇨🇿" },
// ];

// export default function HeroSection() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

//   const headingRef = useRef<HTMLHeadingElement>(null);
//   const subRef     = useRef<HTMLParagraphElement>(null);
//   const ctaRef     = useRef<HTMLDivElement>(null);
//   const stackRef   = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     [
//       { el: headingRef.current, delay: 100 },
//       { el: subRef.current,     delay: 260 },
//       { el: ctaRef.current,     delay: 400 },
//       { el: stackRef.current,   delay: 520 },
//     ].forEach(({ el, delay }) => {
//       if (!el) return;
//       el.style.opacity = "0";
//       el.style.transform = "translateY(24px)";
//       el.style.transition = "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)";
//       setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, delay);
//     });
//   }, []);

//   const advance = useCallback(() => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setTimeout(() => {
//       setActiveIndex((p) => (p + 1) % cityCards.length);
//       setIsAnimating(false);
//     }, 500);
//   }, [isAnimating]);

//   useEffect(() => {
//     intervalRef.current = setInterval(advance, 3500);
//     return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
//   }, [advance]);

//   const handleClick = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     advance();
//     intervalRef.current = setInterval(advance, 3500);
//   };

//   const stackIndices = [
//     (activeIndex + 3) % cityCards.length,
//     (activeIndex + 2) % cityCards.length,
//     (activeIndex + 1) % cityCards.length,
//     activeIndex,
//   ];

//   return (
//     <section className="w-full bg-[#EEF4FF] px-4 sm:px-6 lg:px-8 pt-32 pb-0 overflow-hidden">
//       <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

//         <h1
//           ref={headingRef}
//           className="font-display font-bold text-[#0a0a2e] leading-[1.08] mb-5 max-w-3xl"
//           style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
//         >
//           Your pathway to global opportunities
//         </h1>

//         <p
//           ref={subRef}
//           className="font-body text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mb-9"
//         >
//           We guide you through every step of international travel, study, and
//           relocation, making your global ambitions stress-free and achievable.
//         </p>

//         <div ref={ctaRef} className="mb-14">
//           <Link
//             href="/consultation"
//             className="inline-flex items-center px-8 py-3.5 rounded-full font-body font-semibold text-[#0D7EFF] text-[15px] border-2 border-[#0D7EFF] bg-white transition-all duration-300 hover:bg-[#0D7EFF] hover:text-white hover:shadow-xl hover:shadow-[#0D7EFF]/25"
//           >
//             Get Started
//           </Link>
//         </div>

//         <div ref={stackRef} className="w-full relative">
//           <div
//             className="relative w-full mx-auto cursor-pointer"
//             style={{ height: "clamp(300px, 48vw, 560px)" }}
//             onClick={handleClick}
//             role="button"
//             aria-label="Shuffle to next city"
//           >
//             {stackIndices.map((cardIdx, stackPos) => {
//               const isTop = stackPos === 3;
//               const depth = 3 - stackPos;
//               const card  = cityCards[cardIdx];

//               // No opacity changes — all cards full colour
//               // Back cards only differ in rotation, translateY, and scale
//               const rotations  = [6,   4,   2,   0];
//               const translateY = [-16, -10, -5,  0];
//               const scales     = [0.86, 0.90, 0.95, 1];

//               return (
//                 <div
//                   key={`${cardIdx}-${stackPos}`}
//                   className="absolute inset-0 rounded-3xl overflow-hidden"
//                   style={{
//                     zIndex: stackPos + 1,
//                     transform: `translateY(${translateY[depth]}px) rotate(${rotations[depth]}deg) scale(${scales[depth]})`,
//                     transformOrigin: "bottom center",
//                     transition: isAnimating && isTop
//                       ? "transform 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.45s ease"
//                       : "transform 0.55s cubic-bezier(0.34,1.56,0.64,1), opacity 0.45s ease",
//                     ...(isAnimating && isTop
//                       ? { transform: "translateX(120%) rotate(20deg) scale(0.9)", opacity: 0 }
//                       : {}),
//                     boxShadow: isTop
//                       ? "0 32px 64px rgba(0,0,0,0.20), 0 12px 28px rgba(13,126,255,0.14)"
//                       : "0 8px 24px rgba(0,0,0,0.12)",
//                   }}
//                 >
//                   <Image
//                     src={card.src}
//                     alt={`${card.city}, ${card.country}`}
//                     fill
//                     priority={isTop}
//                     loading={isTop ? "eager" : "lazy"}
//                     sizes="(max-width: 1024px) 100vw, 1024px"
//                     className="object-cover object-center"
//                   />

//                   {/* Location badge — top card only */}
//                   {isTop && (
//                     <div className="absolute bottom-5 left-5">
//                       <div
//                         className="flex items-center gap-3 px-4 py-3 rounded-2xl"
//                         style={{
//                           background: "rgba(255,255,255,0.15)",
//                           backdropFilter: "blur(16px)",
//                           WebkitBackdropFilter: "blur(16px)",
//                           border: "1px solid rgba(255,255,255,0.35)",
//                           boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
//                         }}
//                       >
//                         <span className="text-2xl leading-none">{card.emoji}</span>
//                         <div className="text-left">
//                           <p className="font-display font-bold text-white text-sm leading-tight tracking-wide">
//                             {card.city}
//                           </p>
//                           <p className="font-body text-white/75 text-xs mt-0.5">
//                             {card.country}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>

//           {/* Dot indicators */}
//           <div className="flex justify-center items-center gap-2 mt-5 pb-6">
//             {cityCards.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => {
//                   if (intervalRef.current) clearInterval(intervalRef.current);
//                   setActiveIndex(i);
//                   intervalRef.current = setInterval(advance, 3500);
//                 }}
//                 className={`rounded-full transition-all duration-300 ${
//                   i === activeIndex
//                     ? "w-6 h-2 bg-[#0D7EFF]"
//                     : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
//                 }`}
//                 aria-label={`Go to ${cityCards[i].city}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/*
  VIDEO: public/videos/europe-hero.mp4 + europe-hero.webm
  Same file as CountriesHero — reuse it or use a different one.
  The card stack sits on top so even a subtle/blurred video looks great.
*/

const cityCards = [
  { src: "/images/germany.png",   city: "Berlin",    country: "Germany",        emoji: "🇩🇪" },
  { src: "/images/amsterdam.jpg", city: "Amsterdam", country: "Netherlands",    emoji: "🇳🇱" },
  { src: "/images/lisbon.jpg",    city: "Lisbon",    country: "Portugal",       emoji: "🇵🇹" },
  { src: "/images/madrid.jpg",    city: "Madrid",    country: "Spain",          emoji: "🇪🇸" },
  { src: "/images/london.jpg",    city: "London",    country: "United Kingdom", emoji: "🇬🇧" },
  { src: "/images/prague.jpg",    city: "Prague",    country: "Czech Republic", emoji: "🇨🇿" },
];

const typingWords = ["Opportunities", "Possibilities", "Future", "Freedom"];

export default function HeroSection() {
  const videoRef    = useRef<HTMLVideoElement>(null);
  const [activeIndex, setActiveIndex]   = useState(0);
  const [isAnimating, setIsAnimating]   = useState(false);
  const [videoReady, setVideoReady]     = useState(false);
  const [contentIn, setContentIn]       = useState(false);
  const [wordIndex, setWordIndex]       = useState(0);
  const [displayed, setDisplayed]       = useState("");
  const [deleting, setDeleting]         = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Entrance
  useEffect(() => {
    const t = setTimeout(() => setContentIn(true), 150);
    return () => clearTimeout(t);
  }, []);

  // Video autoplay
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const attempt = () => {
      video.play()
        .then(() => setVideoReady(true))
        .catch((e) => console.warn("[HeroSection] video:", e.name));
    };
    attempt();
    video.addEventListener("canplay", attempt, { once: true });
    return () => video.removeEventListener("canplay", attempt);
  }, []);

  // Typing effect for the gradient word
  useEffect(() => {
    const word = typingWords[wordIndex];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (displayed.length < word.length) {
        t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 85);
      } else {
        t = setTimeout(() => setDeleting(true), 2400);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 42);
      } else {
        setDeleting(false);
        setWordIndex((p) => (p + 1) % typingWords.length);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, wordIndex]);

  // Card shuffle
  const advance = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((p) => (p + 1) % cityCards.length);
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  useEffect(() => {
    intervalRef.current = setInterval(advance, 3800);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [advance]);

  const handleStackClick = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    advance();
    intervalRef.current = setInterval(advance, 3800);
  };

  const stackIndices = [
    (activeIndex + 3) % cityCards.length,
    (activeIndex + 2) % cityCards.length,
    (activeIndex + 1) % cityCards.length,
    activeIndex,
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* ── Fallback gradient ─────────────────────────────── */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(145deg, #060620 0%, #0a0a3e 50%, #0D1B6E 100%)" }}
      />

      {/* ── Background video ─────────────────────────────── */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-center z-[1]"
        autoPlay muted loop playsInline preload="auto"
        aria-hidden="true"
        style={{ opacity: videoReady ? 1 : 0, transition: "opacity 1.5s ease" }}
        onCanPlay={() => {
          videoRef.current?.play().then(() => setVideoReady(true)).catch(console.warn);
        }}
      >
        <source src="/videos/home-hero.webm" type="video/webm" />
        <source src="/videos/home-hero.mp4"  type="video/mp4"  />
      </video>

      {/* ── Strong overlay — keeps text and cards readable ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: [
            "linear-gradient(to bottom,",
            "rgba(5,5,30,0.82) 0%,",
            "rgba(5,5,30,0.65) 35%,",
            "rgba(5,5,30,0.55) 58%,",
            "rgba(5,5,30,0.88) 100%)",
          ].join(" "),
        }}
      />

      {/* ── Blue orb top-right ────────────────────────────── */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full z-[2] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(13,126,255,0.15) 0%, transparent 65%)",
          transform: "translate(25%, -25%)",
        }}
      />

      {/* ── Main content ─────────────────────────────────── */}
      <div
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-28 pb-8"
        style={{
          opacity: contentIn ? 1 : 0,
          transform: contentIn ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* ── Trust badge ──────────────────────────────── */}
        <div
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-8 font-body text-white/70 text-xs font-semibold uppercase tracking-widest"
          style={{
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.14)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#0D7EFF]"
            style={{ animation: "heroPulse 2s ease-in-out infinite" }}
          />
          Trusted by 200+ clients across Europe
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#0D7EFF]"
            style={{ animation: "heroPulse 2s ease-in-out infinite 1s" }}
          />
        </div>

        {/* ── Heading ──────────────────────────────────── */}
        <h1
          className="font-display font-bold text-white leading-[1.06] tracking-tight mb-5"
          style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.4rem)" }}
        >
          Your pathway to global
          <br />
          {/* Typing word with gradient */}
          <span className="relative inline-block">
            <span
              style={{
                background: "linear-gradient(90deg, #60a5fa 0%, #0D7EFF 50%, #a78bfa 100%)",
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
                width: "3px",
                height: "0.75em",
                background: "#0D7EFF",
                verticalAlign: "middle",
                animation: "cursorBlink 1s step-end infinite",
              }}
            />
          </span>
        </h1>

        {/* ── Subtext ──────────────────────────────────── */}
        <p
          className="font-body text-white text-base sm:text-lg leading-relaxed max-w-2xl mb-8"
          style={{
            opacity: contentIn ? 1 : 0,
            transition: "opacity 1s ease 0.2s",
          }}
        >
          We guide you through every step of international travel, study, and
          relocation, making your global ambitions stress-free and achievable.
        </p>

        {/* ── CTAs ─────────────────────────────────────── */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          style={{ opacity: contentIn ? 1 : 0, transition: "opacity 1s ease 0.35s" }}
        >
          <Link
            href="/consultation"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-white text-[15px] overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #0D7EFF 0%, #0055cc 100%)",
              boxShadow: "0 8px 32px rgba(13,126,255,0.45)",
            }}
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <span className="relative z-10">Book a Free Consultation</span>
            <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center px-8 py-4 rounded-full font-body font-semibold text-white text-[15px] transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.22)",
            }}
          >
            Explore Programs
          </Link>
        </div>

        {/* ── Card stack ───────────────────────────────── */}
        <div className="w-full relative">
          <div
            className="relative w-full mx-auto cursor-pointer"
            style={{ height: "clamp(280px, 44vw, 520px)" }}
            onClick={handleStackClick}
            role="button"
            aria-label="Shuffle to next city"
          >
            {stackIndices.map((cardIdx, stackPos) => {
              const isTop  = stackPos === 3;
              const depth  = 3 - stackPos;
              const card   = cityCards[cardIdx];
              const rotations  = [6,   4,   2,  0 ];
              const translateY = [-16, -10, -5,  0 ];
              const scales     = [0.86, 0.90, 0.95, 1];

              return (
                <div
                  key={`${cardIdx}-${stackPos}`}
                  className="absolute inset-0 rounded-3xl overflow-hidden"
                  style={{
                    zIndex: stackPos + 1,
                    transform: `translateY(${translateY[depth]}px) rotate(${rotations[depth]}deg) scale(${scales[depth]})`,
                    transformOrigin: "bottom center",
                    transition: isAnimating && isTop
                      ? "transform 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.45s ease"
                      : "transform 0.55s cubic-bezier(0.34,1.56,0.64,1), opacity 0.45s ease",
                    ...(isAnimating && isTop
                      ? { transform: "translateX(120%) rotate(20deg) scale(0.9)", opacity: 0 }
                      : {}),
                    boxShadow: isTop
                      ? "0 32px 80px rgba(0,0,0,0.5), 0 12px 32px rgba(13,126,255,0.2)"
                      : "0 8px 24px rgba(0,0,0,0.3)",
                  }}
                >
                  <Image
                    src={card.src}
                    alt={`${card.city}, ${card.country}`}
                    fill
                    priority={isTop}
                    loading={isTop ? "eager" : "lazy"}
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-cover object-center"
                  />

                  {/* Subtle bottom gradient on top card for badge legibility */}
                  {isTop && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.45) 100%)",
                      }}
                    />
                  )}

                  {/* Location badge */}
                  {isTop && (
                    <div className="absolute bottom-5 left-5">
                      <div
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                        style={{
                          background: "rgba(255,255,255,0.15)",
                          backdropFilter: "blur(16px)",
                          WebkitBackdropFilter: "blur(16px)",
                          border: "1px solid rgba(255,255,255,0.3)",
                          boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
                        }}
                      >
                        <span className="text-2xl leading-none">{card.emoji}</span>
                        <div className="text-left">
                          <p className="font-display font-bold text-white text-sm leading-tight">
                            {card.city}
                          </p>
                          <p className="font-body text-white/70 text-xs mt-0.5">
                            {card.country}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Shuffle hint — top right of top card */}
                  {isTop && (
                    <div className="absolute top-4 right-4">
                      <div
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-body text-white/60 text-[10px] font-medium"
                        style={{
                          background: "rgba(0,0,0,0.3)",
                          backdropFilter: "blur(8px)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                          <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        tap to shuffle
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center items-center gap-2 mt-5 pb-4">
            {cityCards.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (intervalRef.current) clearInterval(intervalRef.current);
                  setActiveIndex(i);
                  intervalRef.current = setInterval(advance, 3800);
                }}
                className="rounded-full transition-all duration-300"
                style={{
                  width:  i === activeIndex ? "24px" : "6px",
                  height: "6px",
                  background: i === activeIndex ? "#0D7EFF" : "rgba(255,255,255,0.3)",
                }}
                aria-label={`Go to ${cityCards[i].city}`}
              />
            ))}
          </div>
        </div>

        {/* ── Trust stats row ───────────────────────────── */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 mt-4 pb-8"
          style={{ opacity: contentIn ? 1 : 0, transition: "opacity 1s ease 0.6s" }}
        >
          {[
            { value: "200+", label: "Clients Helped" },
            { value: "12",   label: "Countries" },
            { value: "5+",   label: "Years Experience" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-3">
              {i > 0 && <div className="w-px h-6 bg-white/15" />}
              <div className="text-center">
                <p className="font-display font-bold text-white text-[22px] leading-tight">{stat.value}</p>
                <p className="font-body text-white text-base">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>     

      <style jsx>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes heroPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.85); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0);    opacity: 0.5; }
          50%       { transform: translateY(10px); opacity: 1;   }
        }
      `}</style>
    </section>
  );
}