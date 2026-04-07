"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Personalized Consultation and Assessment",
    description:
      "Connect with our experts to map your unique goals, study, work, or relocation, and receive a tailored plan crafted just for you.",
  },
  {
    number: "02",
    title: "Expert Processing",
    description:
      "We meticulously handle every detail of your application, visa, and documentation, ensuring a seamless process from start to approval.",
  },
  {
    number: "03",
    title: "Travel & Ongoing Support",
    description:
      "Step into your destination confidently, backed by our continuous guidance and support for a smooth, international experience",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingGroupRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headingGroup = headingGroupRef.current;
    const stepEls = stepsRef.current?.querySelectorAll<HTMLElement>(".step-item");

    if (headingGroup) {
      headingGroup.style.opacity = "0";
      headingGroup.style.transform = "translateY(36px)";
      headingGroup.style.transition =
        "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)";
    }

    stepEls?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(44px)";
      el.style.transition = `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${0.25 + i * 0.15}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${0.25 + i * 0.15}s`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        if (headingGroup) {
          headingGroup.style.opacity = "1";
          headingGroup.style.transform = "translateY(0)";
        }
        stepEls?.forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        });

        observer.disconnect();
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(135deg, #090934 0%, #1515A9 60%, #1818B1 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Header ──────────────────────────────────────────── */}
        <div ref={headingGroupRef} className="mb-16 max-w-2xl">
          <p className="flex items-center gap-2 text-white/60 text-xs font-bold tracking-[0.2em] uppercase mb-5">
            <span className="text-white/60">✦</span>
            The Process
            <span className="text-white/60">✦</span>
          </p>

          <h2 className="font-display text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-tight mb-5">
            Three simple steps
          </h2>

          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            We&apos;ve simplified what used to feel overwhelming into a clear, guided
            process with our team beside you at every stage.
          </p>
        </div>

        {/* ── Steps row ───────────────────────────────────────── */}
        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-0 items-start">
          {steps.map((step, i) => (
            <>
              {/* Step */}
              <div key={step.number} className="step-item flex flex-col">
                {/* Large muted step number */}
                <p className="font-display text-[72px] sm:text-[88px] font-bold leading-none mb-4"
                  style={{ color: "rgba(255,255,255,0.18)" }}
                >
                  {step.number}
                </p>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-white/60 text-[15px] leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>

              {/* Arrow between steps — only between, not after last */}
              {i < steps.length - 1 && (
                <div
                  key={`arrow-${i}`}
                  className="step-item hidden md:flex items-start justify-center pt-10 px-6"
                >
                  <ArrowRight className="w-8 h-8 text-white/35" />
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}