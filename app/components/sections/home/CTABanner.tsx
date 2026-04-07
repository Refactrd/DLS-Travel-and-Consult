"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTABanner() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(36px)";
    el.style.transition =
      "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        observer.disconnect();
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "480px" }}>
      <Image
        src="/images/cta.svg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
        priority
      />

      {/* Dark overlay — matches the design's dimmed cinematic look */}
      <div
        className="absolute inset-0"
        // style={{
        //   background:
        //     "linear-gradient(to bottom, rgba(5,5,40,0.48) 0%, rgba(5,5,40,0.38) 50%, rgba(5,5,40,0.55) 100%)",
        // }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-28 sm:py-36"
      >
        <h2 className="font-display text-4xl sm:text-5xl md:text-[48px] font-medium text-white leading-[1.1] max-w-3xl mb-6">
          Take the First Step Toward Abroad
        </h2>

        <p className="text-white/75 text-base sm:text-xl max-w-xl leading-relaxed mb-10 font-body">
          Begin your stress-free move abroad with guidance you can trust completely. 
        </p>

        {/* CTA row — WhatsApp + Book Consultation (same pattern as Hero) */}
        <div className="flex items-center gap-6">
          <Link
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="group relative inline-flex items-center px-7 py-4 text-white font-semibold text-[15px] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#1818B1]/50 hover:-translate-y-0.5 rounded-full"
            style={{
              background: "linear-gradient(135deg, #1818B1 0%, #1515cc 100%)",
             
              paddingLeft: "28px",
            }}
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <span className="relative z-10">Book Consultation</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
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