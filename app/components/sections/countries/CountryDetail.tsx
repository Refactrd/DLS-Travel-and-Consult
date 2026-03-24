"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CountryData } from "@/app/lib/countriesData";

export default function CountryDetail({ country }: { country: CountryData }) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = "opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)";
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 120);
  }, []);

  return (
    <>
      {/* Full-width hero with background image */}
      <section className="relative w-full min-h-[620px] flex items-center justify-center overflow-hidden">
        <Image
          src={country.heroImage}
          alt={`${country.name} landmark`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(5,5,40,0.45) 0%, rgba(5,5,40,0.58) 100%)" }}
        />
        <div ref={heroRef} className="relative z-10 text-center px-4 mt-16">
          <p className="flex items-center justify-center gap-2 text-white/70 text-xs font-bold uppercase mb-5">
            <span>✦</span> Country <span>✦</span>
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Study, Work &amp; Thrive<br />in {country.name}
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-8">
            {country.heroTagline}
          </p>
          <Link
            href="/consultation"
            className="group relative inline-flex items-center px-8 py-4 rounded-full text-white font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#1818B1]/40 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #1818B1 0%, #0000FF 100%)" }}
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <span className="relative z-10">Book Now</span>
          </Link>
        </div>
      </section>

      {/* Main content + sticky sidebar */}
      <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-12">
            <Link href="/countries" className="hover:text-[#1818B1] transition-colors duration-150">Countries</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">{country.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">

            {/* Left column */}
            <div className="space-y-16">

              {/* Why section */}
              <FadeBlock>
                <SectionLabel>{`Why ${country.name}`}</SectionLabel>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{country.whyTitle}</h2>
                <div className="space-y-4">
                  {country.whyBody.map((para, i) => (
                    <p key={i} className="text-gray-500 text-[15px] leading-relaxed">{para}</p>
                  ))}
                </div>
              </FadeBlock>

              {/* Programs */}
              <FadeBlock>
                <SectionLabel>Available Programs</SectionLabel>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">What You Can Pursue</h2>
                <div className="space-y-3">
                  {country.programs.map((prog) => (
                    <div key={prog.title} className="flex items-center gap-4 px-5 py-4 rounded-2xl border border-gray-200 bg-white hover:border-[#1818B1]/30 hover:bg-[#F5F6FF] transition-all duration-200">
                      <div className="w-10 h-10 rounded-xl bg-[#F5F6FF] flex items-center justify-center text-xl flex-shrink-0">{prog.emoji}</div>
                      <span className="font-display font-semibold text-gray-800 text-[15px]">{prog.title}</span>
                    </div>
                  ))}
                </div>
              </FadeBlock>

              {/* Requirements */}
              <FadeBlock>
                <SectionLabel>Requirements</SectionLabel>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">What You'll Typically Need</h2>
                <div className="space-y-3">
                  {country.requirements.map((req) => (
                    <div key={req} className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#F5F6FF] border border-gray-100">
                      <CheckIcon className="w-5 h-5 text-[#1818B1] flex-shrink-0" />
                      <span className="text-gray-700 text-[15px]">{req}</span>
                    </div>
                  ))}
                </div>
              </FadeBlock>

              {/* Language */}
              <FadeBlock>
                <SectionLabel>Language</SectionLabel>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{country.language.heading}</h2>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-6">{country.language.body}</p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {country.language.levels.map((level) => (
                    <span key={level} className="px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-600 text-sm font-medium">{level}</span>
                  ))}
                </div>
                <Link
                  href="/consultation"
                  className="group relative inline-flex items-center px-7 py-4 rounded-full text-white font-semibold text-[15px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#1818B1]/30 hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #1818B1 0%, #0000FF 100%)" }}
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                  <span className="relative z-10">{country.language.ctaLabel}</span>
                </Link>
              </FadeBlock>

              {/* Roadmap */}
              <FadeBlock>
                <SectionLabel>Step by Step</SectionLabel>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Your Road to {country.name}</h2>
                <div className="relative">
                  <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gray-200" />
                  <div className="space-y-8">
                    {country.roadmap.map((item) => (
                      <div key={item.step} className="flex gap-5 items-start">
                        <div className="w-10 h-10 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center flex-shrink-0 z-10 text-sm font-semibold text-gray-500">
                          {item.step}
                        </div>
                        <div className="pt-1.5">
                          <p className="font-display font-semibold text-gray-900 text-[16px] mb-1">{item.title}</p>
                          <p className="text-gray-500 text-[14px] leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeBlock>

              {/* Gallery */}
              <FadeBlock>
                <SectionLabel>Gallery</SectionLabel>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Beautiful Places in {country.name}</h2>
                <p className="text-gray-400 text-[15px] mb-7">From first contact to your new life starting, we handle everything in between</p>
                <div className="space-y-3">
                  <div className="grid grid-cols-[1fr_1fr_1fr_2fr] gap-3">
                    {country.gallery.slice(0, 3).map((src, i) => (
                      <div key={i} className="relative rounded-2xl overflow-hidden bg-gray-100" style={{ aspectRatio: "1/1.1" }}>
                        <Image src={src} alt={`${country.name} ${i + 1}`} fill sizes="20vw" className="object-cover" loading="lazy" />
                      </div>
                    ))}
                    <div className="relative rounded-2xl overflow-hidden bg-gray-100" style={{ aspectRatio: "16/9" }}>
                      <Image src={country.gallery[3]} alt={`${country.name} 4`} fill sizes="40vw" className="object-cover" loading="lazy" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {country.gallery.slice(4, 7).map((src, i) => (
                      <div key={i} className="relative rounded-2xl overflow-hidden bg-gray-100" style={{ aspectRatio: "4/3" }}>
                        <Image src={src} alt={`${country.name} ${i + 5}`} fill sizes="30vw" className="object-cover" loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              </FadeBlock>
            </div>

            {/* Sticky right sidebar */}
            <div className="sticky top-28 space-y-5">
              <div className="rounded-2xl border border-gray-200 bg-[#F5F6FF] p-6">
                <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{country.sidebar.heading}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  Book a free 30-minute discovery call. We'll review your situation and give you a clear plan, no pressure.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/consultation"
                    className="w-full flex items-center justify-center px-5 py-3.5 rounded-full bg-[#1818B1] text-white font-semibold text-[15px] hover:bg-[#0000FF] transition-colors duration-200"
                  >
                    Book Consultation
                  </Link>
                  <a
                    href="https://wa.me/yourphonenumber"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-5 py-3.5 rounded-full bg-[#25D366] text-white font-semibold text-[15px] hover:bg-[#1fba59] transition-colors duration-200"
                  >
                    Message Us on WhatsApp
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-[#F5F6FF] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-semibold">
                      {country.sidebar.testimonial.name.split(" ").map((w: string) => w[0]).join("").slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-gray-900 text-[14px]">{country.sidebar.testimonial.name}</p>
                    <p className="text-gray-400 text-xs">{country.sidebar.testimonial.visa}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{country.sidebar.testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

function FadeBlock({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    el.style.transition = "opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)";
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      obs.disconnect();
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref}>{children}</div>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-[#1818B1] text-xs font-bold uppercase mb-3">
      <span>✦</span>{children}<span>✦</span>
    </p>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon() {
  return <svg width="16" height="16" viewBox="0 0 20 20" fill="#F59E0B"><path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78L10 1z" /></svg>;
}