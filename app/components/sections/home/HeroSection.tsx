"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = [
      { el: badgeRef.current, delay: 100 },
      { el: headingRef.current, delay: 220 },
      { el: subRef.current, delay: 380 },
      { el: ctaRef.current, delay: 500 },
      { el: imageRef.current, delay: 200 },
    ];

    targets.forEach(({ el, delay }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition =
        "opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)";
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, delay);
    });
  }, []);

  return (
    <section className="w-full min-h-screen bg-white flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left — Text content */}
        <div className="flex flex-col gap-7 max-w-xl">
          {/* Badge */}
          <div ref={badgeRef}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-gray-600 text-sm font-medium">
              <span className="text-base">✈️</span>
              <span className="text-[#1818B1] font-semibold">•</span>
              Explore the wonderful Europe!
            </span>
          </div>

          {/* Heading */}
          <h1
            ref={headingRef}
            className="font-body font-bold text-[#181E4B] leading-[50px] lg:leading-[79px] text-[40px] lg:text-[84px]"
            // style={{ fontSize: "clamp(2.8rem, 5vw, 4.2rem)" }}
          >
            Your pathway{" "}
            <span className="relative inline-block">
              <span className="relative z-10">to global</span>
              {/* Blue underline brush stroke */}
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 18"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M4 13 C40 6, 100 4, 196 10"
                  stroke="#1818B1"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <br />
            Opportunities
          </h1>

          {/* Subtext */}
          <p
            ref={subRef}
            className="text-gray-500 text-base sm:text-[17px] leading-relaxed max-w-md font-body"
          >
            We guide you through every step of international travel, study, and
            relocation, making your global ambitions stress-free and achievable.
          </p>

          {/* CTA buttons */}
          <div ref={ctaRef} className="flex items-center gap-4 flex-wrap">
            <Link
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="group relative inline-flex items-center px-7 py-4 rounded-full text-white font-semibold text-[15px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#1818B1]/30 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #1818B1 0%, #0000FF 100%)",
              }}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <span className="relative z-10">Book Consultation</span>
            </Link>
          </div>
        </div>

        {/* Right — Single hero image */}
        <div
          ref={imageRef}
          className="relative w-full flex justify-center lg:justify-end"
        >
          <div
            className="relative w-full max-w-[620px]"
            style={{ aspectRatio: "620/660" }}
          >
            <Image
              src="/images/home-illustration.png"
              alt="Explore Europe with DLS"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
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
