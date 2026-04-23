// "use client";

// import { useEffect, useRef } from "react";

// const steps = [
//   {
//     number: "01",
//     title: "Personalized Consultation and Assessment",
//     description:
//       "Connect with our experts to map your unique goals, study, work, or relocation, and receive a tailored plan crafted just for you.",
//   },
//   {
//     number: "02",
//     title: "Expert Processing",
//     description:
//       "We meticulously handle every detail of your application, visa, and documentation, ensuring a seamless process from start to approval.",
//   },
//   {
//     number: "03",
//     title: "Travel & Ongoing Support",
//     description:
//       "Step into your destination confidently, backed by our continuous guidance and support for a smooth, international experience",
//   },
// ];

// export default function ProcessSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const headingGroupRef = useRef<HTMLDivElement>(null);
//   const stepsRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const headingGroup = headingGroupRef.current;
//     const stepEls = stepsRef.current?.querySelectorAll<HTMLElement>(".step-item");

//     if (headingGroup) {
//       headingGroup.style.opacity = "0";
//       headingGroup.style.transform = "translateY(36px)";
//       headingGroup.style.transition =
//         "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)";
//     }

//     stepEls?.forEach((el, i) => {
//       el.style.opacity = "0";
//       el.style.transform = "translateY(44px)";
//       el.style.transition = `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${0.25 + i * 0.15}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${0.25 + i * 0.15}s`;
//     });

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (!entry.isIntersecting) return;

//         if (headingGroup) {
//           headingGroup.style.opacity = "1";
//           headingGroup.style.transform = "translateY(0)";
//         }
//         stepEls?.forEach((el) => {
//           el.style.opacity = "1";
//           el.style.transform = "translateY(0)";
//         });

//         observer.disconnect();
//       },
//       { threshold: 0.12 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full py-24 px-4 sm:px-6 lg:px-8"
//       style={{
//         background: "linear-gradient(135deg, #090934 0%, #1515A9 60%, #1818B1 100%)",
//       }}
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* ── Header ──────────────────────────────────────────── */}
//         <div ref={headingGroupRef} className="mb-16 max-w-2xl">
//           <p className="flex items-center gap-2 text-white/60 text-xs font-bold tracking-[0.2em] uppercase mb-5">
//             <span className="text-white/60">✦</span>
//             The Process
//             <span className="text-white/60">✦</span>
//           </p>

//           <h2 className="font-display text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-tight mb-5">
//             Three simple steps
//           </h2>

//           <p className="text-white/60 text-base sm:text-lg leading-relaxed">
//             We&apos;ve simplified what used to feel overwhelming into a clear, guided
//             process with our team beside you at every stage.
//           </p>
//         </div>

//         {/* ── Steps row ───────────────────────────────────────── */}
//         <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-0 items-start">
//           {steps.map((step, i) => (
//             <>
//               {/* Step */}
//               <div key={step.number} className="step-item flex flex-col">
//                 {/* Large muted step number */}
//                 <p className="font-display text-[72px] sm:text-[88px] font-bold leading-none mb-4"
//                   style={{ color: "rgba(255,255,255,0.18)" }}
//                 >
//                   {step.number}
//                 </p>

//                 <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
//                   {step.title}
//                 </h3>

//                 <p className="text-white/60 text-[15px] leading-relaxed max-w-xs">
//                   {step.description}
//                 </p>
//               </div>

//               {/* Arrow between steps — only between, not after last */}
//               {i < steps.length - 1 && (
//                 <div
//                   key={`arrow-${i}`}
//                   className="step-item hidden md:flex items-start justify-center pt-10 px-6"
//                 >
//                   <ArrowRight className="w-8 h-8 text-white/35" />
//                 </div>
//               )}
//             </>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ArrowRight({ className }: { className?: string }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none">
//       <path
//         d="M5 12h14M13 6l6 6-6 6"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }


"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Personalized Consultation and Assessment",
    description:
      "Connect with our experts to map your unique goals, study, work, or relocation, and receive a tailored plan crafted just for you.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3C8.477 3 4 7.477 4 13c0 2.136.67 4.114 1.81 5.738L4 24l5.262-1.81A9.953 9.953 0 0014 23c5.523 0 10-4.477 10-10S19.523 3 14 3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 12h8M10 16h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Expert Processing",
    description:
      "We meticulously handle every detail of your application, visa, and documentation, ensuring a seamless process from start to approval.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 4h12l6 6v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 4v6h6M9 17l3 3 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Travel & Ongoing Support",
    description:
      "Step into your destination confidently, backed by our continuous guidance and support for a smooth, international experience.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M22 4L4 13l7 3 3 7 8-19z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 16l3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function ProcessSection() {
  const sectionRef   = useRef<HTMLElement>(null);
  const headerRef    = useRef<HTMLDivElement>(null);
  const cardsRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const cards  = cardsRef.current?.querySelectorAll<HTMLElement>(".process-card");

    if (header) {
      header.style.opacity = "0";
      header.style.transform = "translateY(32px)";
      header.style.transition = "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)";
    }

    cards?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(48px)";
      el.style.transition = `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${0.2 + i * 0.15}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${0.2 + i * 0.15}s`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (header) { header.style.opacity = "1"; header.style.transform = "translateY(0)"; }
        cards?.forEach((el) => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; });
        observer.disconnect();
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #060620 0%, #0D1B6E 55%, #0D7EFF 100%)" }}
    >
      {/* ── Decorative background orbs ──────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large blue glow top-right */}
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #0D7EFF 0%, transparent 70%)" }}
        />
        {/* Subtle glow bottom-left */}
        <div
          className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #0D7EFF 0%, transparent 70%)" }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Header ────────────────────────────────────────── */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/8 text-white/60 text-xs font-body font-semibold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D7EFF]" />
            The Process
          </div>

          <h2
            className="font-display font-bold text-white leading-tight mb-5"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}
          >
            Three simple steps to your
            <br />
            <span
              className="font-display"
              style={{
                background: "linear-gradient(90deg, #60a5fa, #4361ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              global journey
            </span>
          </h2>

          <p className="font-body text-white text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            We&apos;ve simplified what used to feel overwhelming into a clear,
            guided process, with our team beside you at every stage.
          </p>
        </div>

        {/* ── Step cards ────────────────────────────────────── */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="process-card group relative flex flex-col p-7 rounded-3xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/25 hover:-translate-y-1"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Card inner glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{ background: "radial-gradient(circle at 30% 20%, rgba(13,126,255,0.12) 0%, transparent 70%)" }}
              />

              {/* Step number — large ghost */}
              <div
                className="absolute top-5 right-6 font-display font-bold text-[64px] leading-none select-none"
                style={{ color: "rgba(255,255,255,0.06)" }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white"
                style={{ background: "rgba(13,126,255,0.15)", border: "1px solid rgba(13,126,255,0.25)" }}
              >
                {step.icon}
              </div>

              {/* Step badge */}
              <div className="relative z-10 inline-flex items-center gap-1.5 mb-4">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-body font-bold text-white"
                  style={{ background: "rgba(13,126,255,0.6)" }}
                >
                  {i + 1}
                </span>
                <span className="font-body text-[#60a5fa] text-xs font-semibold uppercase tracking-wider">
                  Step {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="relative z-10 font-display font-bold text-white text-xl leading-snug mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 font-body text-white text-[15px] leading-relaxed flex-1">
                {step.description}
              </p>

              {/* Bottom connector line (not on last card) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(13,126,255,0.3)", border: "1px solid rgba(13,126,255,0.4)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ────────────────────────────────────── */}
        <div className="text-center mt-14">
          <a
            href="/consultation"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-white text-[15px] transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #0D7EFF 0%, #3b82f6 100%)", boxShadow: "0 8px 32px rgba(13,126,255,0.35)" }}
          >
            Start Your Journey Today
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}