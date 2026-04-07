// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const stats = [
//   { value: "5+", label: "Years of Proven Experience" },
//   {
//     value: "70+",
//     label: "Students successfully relocated, settled and studying",
//   },
//   {
//     value: "50+",
//     label: "Professionals and Trainees Successfully Guided and Relocated",
//   },
//   { value: "20+", label: "Families Reunified" },
//   { value: "20+", label: "Volunteers Successfully Guided Across Borders" },
// ];

// export default function AboutStorySection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const labelRef = useRef<HTMLParagraphElement>(null);
//   const headingRef = useRef<HTMLHeadingElement>(null);
//   const imageRef = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLDivElement>(null);
//   const statsRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const groups = [
//       { el: labelRef.current, delay: 0 },
//       { el: headingRef.current, delay: 100 },
//       { el: imageRef.current, delay: 220 },
//       { el: textRef.current, delay: 340 },
//       { el: statsRef.current, delay: 460 },
//     ];

//     groups.forEach(({ el }) => {
//       if (!el) return;
//       el.style.opacity = "0";
//       el.style.transform = "translateY(40px)";
//       el.style.transition =
//         "opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
//     });

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (!entry.isIntersecting) return;
//         groups.forEach(({ el, delay }) => {
//           if (!el) return;
//           setTimeout(() => {
//             el.style.opacity = "1";
//             el.style.transform = "translateY(0)";
//           }, delay);
//         });
//         observer.disconnect();
//       },
//       { threshold: 0.1 },
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   // Counter animation for stats
//   useEffect(() => {
//     const statsEl = statsRef.current;
//     if (!statsEl) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (!entry.isIntersecting) return;
//         // Trigger number count-up on the numeric stats
//         const counters = statsEl.querySelectorAll<HTMLElement>("[data-count]");
//         counters.forEach((counter) => {
//           const target = counter.dataset.count ?? "";
//           const isNumeric = /^\d+$/.test(target);
//           if (!isNumeric) return;

//           const end = parseInt(target, 10);
//           const duration = 1400;
//           const start = performance.now();

//           const tick = (now: number) => {
//             const elapsed = now - start;
//             const progress = Math.min(elapsed / duration, 1);
//             const eased = 1 - Math.pow(1 - progress, 3);
//             counter.textContent = Math.floor(eased * end).toString();
//             if (progress < 1) requestAnimationFrame(tick);
//             else counter.textContent = target;
//           };
//           requestAnimationFrame(tick);
//         });
//         observer.disconnect();
//       },
//       { threshold: 0.3 },
//     );

//     observer.observe(statsEl);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* ── Section label ─────────────────────────────────── */}
//         <p
//           ref={labelRef}
//           className="flex items-center gap-2 text-[#1818B1] text-xs font-bold uppercase mb-5"
//         >
//           <span>✦</span>
//           About Us
//           <span>✦</span>
//         </p>

//         {/* ── Two-tone heading ──────────────────────────────── */}
//         {/*
//           First line: dark/black
//           Remaining lines: fade to lighter grey — matches the design exactly
//         */}
//         <h2
//           ref={headingRef}
//           className="font-display font-regular leading-[40px] tracking-tight mb-10"
//         >
//           <span className="block text-4xl sm:text-5xl md:text-[52px] text-gray-900">
//             We specialize in guiding individuals and families
//           </span>
//           <span className="block text-4xl sm:text-5xl md:text-[52px] text-gray-400">
//             through travel, study, work and relocation
//           </span>
//           <span className="block text-4xl sm:text-5xl md:text-[52px] text-gray-400">
//             with professionalism, clarity, and commitment.
//           </span>
//         </h2>

//         {/* ── Full-width image with floating CTA ───────────── */}
//         <div
//           ref={imageRef}
//           className="relative w-full rounded-2xl overflow-hidden mb-12"
//           style={{ aspectRatio: "16/6.5" }}
//         >
//           <Image
//             src="/images/alex.png"
//             alt="Alexander III Bridge, Paris at dusk"
//             fill
//             sizes="(max-width: 1280px) 100vw, 1024px"
//             className="object-cover object-center"
//             loading="lazy"
//           />

//           {/* Floating "Learn More About Us" pill — centered on image */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <Link
//               href="/about"
//               className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/90 backdrop-blur-sm text-[#1818B1] font-semibold text-[15px] shadow-lg hover:bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
//             >
//               Learn More About Us
//               <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
//             </Link>
//           </div>
//         </div>

//         {/* ── Two-column body text ──────────────────────────── */}
//         <div
//           ref={textRef}
//           className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
//         >
//           <p className="text-gray-500 text-[15px] leading-relaxed">
//             We are dedicated to helping clients achieve their dreams of
//             studying, working, and living abroad.
//           </p>
//           <p className="text-gray-500 text-[15px] leading-relaxed">
//             At DLS Travel and Consult, our expert team delivers reliable,
//             end-to-end support and care, making international journeys
//             efficient, and tailored to each client’s unique realities and
//             aspirations.
//           </p>
//         </div>

//         {/* ── Stats row ─────────────────────────────────────── */}
//         <div
//           ref={statsRef}
//           className="grid lg:grid-cols-3 grid-cols-1 gap-6 pt-4"
//         >
//           {stats.map((stat) => {
//             // Extract the numeric part for count-up, keep suffix separate
//             const numericMatch = stat.value.match(/^(\d+)/);
//             const numericPart = numericMatch ? numericMatch[1] : null;
//             const suffix = numericPart
//               ? stat.value.slice(numericPart.length)
//               : null;

//             return (
//               <div
//                 key={stat.label}
//                 className="flex flex-col gap-2 items-center text-center"
//               >
//                 <p className="font-display text-5xl sm:text-6xl font-bold text-gray-900 leading-none">
//                   {numericPart ? (
//                     <>
//                       <span data-count={numericPart}>{numericPart}</span>
//                       {suffix}
//                     </>
//                   ) : (
//                     stat.value
//                   )}
//                 </p>
//                 <p className="text-gray-500 text-base">{stat.label}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ArrowRight({ className }: { className?: string }) {
//   return (
//     <svg className={className} viewBox="0 0 16 16" fill="none">
//       <path
//         d="M3 8h10M9 4l4 4-4 4"
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
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "5+", label: "Years of Proven Experience" },
  {
    value: "70+",
    label: "Students successfully relocated, settled and studying",
  },
  {
    value: "50+",
    label: "Professionals and Trainees Successfully Guided and Relocated",
  },
  { value: "20+", label: "Families Reunified" },
  { value: "20+", label: "Volunteers Successfully Guided Across Borders" },
];

function parseStat(value: string) {
  const match = value.match(/^(\d+)/);
  const numericPart = match ? match[1] : null;
  const suffix = numericPart ? value.slice(numericPart.length) : null;
  return { numericPart, suffix };
}

function StatCard({ stat }: { stat: { value: string; label: string } }) {
  const { numericPart, suffix } = parseStat(stat.value);
  return (
    <div className="flex flex-col items-center text-center gap-3 px-6 py-8 rounded-2xl bg-[#F5F6FF] border border-gray-100">
      <p className="font-display text-5xl sm:text-6xl font-bold text-[#1818B1] leading-none">
        {numericPart ? (
          <>
            <span data-count={numericPart}>{numericPart}</span>
            {suffix}
          </>
        ) : (
          stat.value
        )}
      </p>
      <p className="text-gray-500 text-sm leading-snug max-w-[180px]">
        {stat.label}
      </p>
    </div>
  );
}

export default function AboutStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const groups = [
      { el: labelRef.current, delay: 0 },
      { el: headingRef.current, delay: 100 },
      { el: imageRef.current, delay: 220 },
      { el: textRef.current, delay: 340 },
      { el: statsRef.current, delay: 460 },
    ];

    groups.forEach(({ el }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      el.style.transition =
        "opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        groups.forEach(({ el, delay }) => {
          if (!el) return;
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
        });
        observer.disconnect();
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const statsEl = statsRef.current;
    if (!statsEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const counters = statsEl.querySelectorAll<HTMLElement>("[data-count]");
        counters.forEach((counter) => {
          const target = counter.dataset.count ?? "";
          if (!/^\d+$/.test(target)) return;
          const end = parseInt(target, 10);
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.floor(eased * end).toString();
            if (progress < 1) requestAnimationFrame(tick);
            else counter.textContent = target;
          };
          requestAnimationFrame(tick);
        });
        observer.disconnect();
      },
      { threshold: 0.3 }
    );

    observer.observe(statsEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <p
          ref={labelRef}
          className="flex items-center gap-2 text-[#1818B1] text-xs font-bold uppercase mb-5"
        >
          <span>✦</span>
          About Us
          <span>✦</span>
        </p>

        {/* Two-tone heading */}
        <h2
          ref={headingRef}
          className="font-display font-bold leading-[1.1] tracking-tight mb-10"
        >
          <span className="block text-4xl sm:text-5xl md:text-[52px] text-gray-900">
            We specialize in guiding individuals and families
          </span>
          <span className="block text-4xl sm:text-5xl md:text-[52px] text-gray-400">
            through travel, study, work and relocation
          </span>
          <span className="block text-4xl sm:text-5xl md:text-[52px] text-gray-400">
            with professionalism, clarity, and commitment.
          </span>
        </h2>

        {/* Full-width image */}
        <div
          ref={imageRef}
          className="relative w-full rounded-2xl overflow-hidden mb-12"
          style={{ aspectRatio: "16/6.5" }}
        >
          <Image
            src="/images/alex.png"
            alt="Alexandre III Bridge, Paris at dusk"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/90 backdrop-blur-sm text-[#1818B1] font-semibold text-[15px] shadow-lg hover:bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Two-column body text */}
        <div
          ref={textRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <p className="text-gray-500 text-[15px] leading-relaxed">
            We are dedicated to helping clients achieve their dreams of
            studying, working, and living abroad.
          </p>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            At DLS Travel and Consult, our expert team delivers reliable,
            end-to-end support and care, making international journeys
            efficient, and tailored to each client's unique realities and
            aspirations.
          </p>
        </div>

        {/* Stats — 3 top + 2 bottom centred */}
        <div ref={statsRef} className="space-y-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.slice(0, 3).map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
          {/* Row 2 — centred */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:max-w-2xl sm:mx-auto w-full">
            {stats.slice(3).map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}