"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Do I need to speak German/French before applying?",
    answer:
      "Not at all! That's part of our service. DLS runs a language school specifically to prepare clients before their visa application. Most programs require at least a B1 level, which we can help you achieve within 3—6 months.",
  },
  {
    id: 2,
    question: "How long does the visa process take?",
    answer:
      "The timeline varies by country and program type. On average, the full process — from your first consultation to visa approval — takes between 3 to 9 months. We'll give you a realistic timeline specific to your situation from day one.",
  },
  {
    id: 3,
    question: "What documents do I need?",
    answer:
      "Requirements vary by program and destination country, but typically include a valid passport, proof of finances, language certificates, educational qualifications, and a motivation letter. We provide you with a personalised document checklist after your consultation.",
  },
  {
    id: 4,
    question: "How much does DLS charge for her services?",
    answer:
      "Our fees depend on the program and level of support required. We offer transparent, fixed-fee packages with no hidden charges. Book a free consultation and we'll walk you through our pricing for your specific pathway.",
  },
  {
    id: 5,
    question: "Can you help if my previous visa was rejected?",
    answer:
      "Yes, absolutely. Many of our clients come to us after a rejection. We analyse what went wrong, address the gaps in your application, and build a stronger case before reapplying. A previous rejection does not disqualify you.",
  },
  {
    id: 6,
    question: "Is DLS only for Nigerian clients?",
    answer:
      "While our roots and primary focus are in Nigeria, we work with ambitious Africans across the continent. If you're based in Ghana, Kenya, South Africa, or elsewhere and are looking to move to Europe, we'd love to help.",
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<number>(1); // first item open by default

  useEffect(() => {
    const targets = [
      { el: headerRef.current, delay: 0 },
      { el: listRef.current, delay: 150 },
    ];

    targets.forEach(({ el }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(36px)";
      el.style.transition =
        "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        targets.forEach(({ el, delay }) => {
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

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">

        {/* ── Header — centered ────────────────────────────── */}
        <div ref={headerRef} className="text-center mb-12">
          <p className="flex items-center justify-center gap-2 text-[#1818B1] text-xs font-bold uppercase mb-4">
            <span>✦</span>
            Frequently Asked
            <span>✦</span>
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-[52px] font-medium text-gray-900 leading-tight">
            Got Questions? We Have Answers
          </h2>
        </div>

        {/* ── Accordion list ───────────────────────────────── */}
        <div ref={listRef} className="flex flex-col gap-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? 0 : faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Accordion Item ───────────────────────────────────────────────
interface AccordionItemProps {
  faq: { id: number; question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ faq, isOpen, onToggle }: AccordionItemProps) {
  const answerRef = useRef<HTMLDivElement>(null);

  // Animate height with max-height trick for smooth open/close
  useEffect(() => {
    const el = answerRef.current;
    if (!el) return;
    if (isOpen) {
      el.style.maxHeight = el.scrollHeight + "px";
      el.style.opacity = "1";
    } else {
      el.style.maxHeight = "0px";
      el.style.opacity = "0";
    }
  }, [isOpen]);

  return (
    <div
      className={`rounded-2xl border transition-colors duration-200 ${
        isOpen
          ? "border-gray-200 bg-white shadow-sm"
          : "border-gray-200 bg-white hover:border-gray-300"
      }`}
    >
      {/* Question row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={`font-display font-semibold text-[17px] leading-snug transition-colors duration-200 ${
            isOpen ? "text-gray-900" : "text-gray-800 group-hover:text-gray-900"
          }`}
        >
          {faq.question}
        </span>

        {/* Chevron */}
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-gray-50" : "bg-gray-50 group-hover:bg-gray-100"
          }`}
        >
          <ChevronIcon
            className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </span>
      </button>

      {/* Answer — animated */}
      <div
        ref={answerRef}
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{
          maxHeight: isOpen ? undefined : "0px",
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease",
        }}
      >
        <p className="px-6 pb-6 text-gray-400 text-[16px] leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}