"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

export const countries = [
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    tagline: "Europe's largest economy with world-class universities and unmatched vocational training through the Ausbildung system.",
    image: "/images/german.png",
  },
  {
    slug: "france",
    name: "France",
    flag: "🇫🇷",
    tagline: "Prestigious Grandes Écoles, cutting-edge research institutions, and a vibrant cultural capital of the world.",
    image: "/images/francee.png",
  },
  {
    slug: "austria",
    name: "Austria",
    flag: "🇦🇹",
    tagline: "Prestigious Grandes Écoles, cutting-edge research institutions, and a vibrant cultural capital of the world.",
    image: "/images/austria.png",
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    tagline: "English-speaking, immigrant-friendly, and home to globally ranked universities with clear immigration pathways.",
    image: "/images/canada.png",
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    flag: "🇳🇱",
    tagline: "High-ranked English-taught programs, a strong economy, and a highly international student community.",
    image: "/images/netherlands.png",
  },
  {
    slug: "belgium",
    name: "Belgium",
    flag: "🇧🇪",
    tagline: "Multilingual nation at Europe's heart, home to EU institutions & excellent academic programs in French & Dutch.",
    image: "/images/belgium.png",
  },
  {
    slug: "sweden",
    name: "Sweden",
    flag: "🇸🇪",
    tagline: "Rich history, diverse culture, vibrant cities, and world-renowned cuisine make it a top destination.",
    image: "/images/sweden.png",
  },
  {
    slug: "spain",
    name: "Spain",
    flag: "🇪🇸",
    tagline: "Home of Vikings, with progressive policies, innovative tech sector, and high quality of life.",
    image: "/images/spain.png",
  },
  {
    slug: "finland",
    name: "Finland",
    flag: "🇫🇮",
    tagline: "World-leading education system, high quality of life, and a growing tech ecosystem in Northern Europe.",
    image: "/images/german.png",
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    flag: "🇨🇭",
    tagline: "World-renowned for its quality of education, political stability, and high standard of living.",
    image: "/images/uk.png",
  },
  {
    slug: "denmark",
    name: "Denmark",
    flag: "🇩🇰",
    tagline: "Consistently ranked among the world's happiest nations with top universities and a welcoming culture.",
    image: "/images/france.png",
  },
  {
    slug: "portugal",
    name: "Portugal",
    flag: "🇵🇹",
    tagline: "Affordable living, warm climate, and growing tech scene make Portugal an increasingly popular destination.",
    image: "/images/spain.png",
  },
];

export default function CountriesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return countries;
    return countries.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.tagline.toLowerCase().includes(q)
    );
  }, [query]);

  // Entrance animation
//   useEffect(() => {
//     const header = headerRef.current;
//     if (header) {
//       header.style.opacity = "0";
//       header.style.transform = "translateY(32px)";
//       header.style.transition =
//         "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)";
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (!entry.isIntersecting || hasAnimated) return;
//         setHasAnimated(true);
//         if (header) {
//           header.style.opacity = "1";
//           header.style.transform = "translateY(0)";
//         }
//         observer.disconnect();
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, [hasAnimated]);

// Entrance animation — timer instead of IntersectionObserver
// (observer can miss elements already in viewport on page load)
useEffect(() => {
  const header = headerRef.current;
  if (!header) return;

  header.style.opacity = "0";
  header.style.transform = "translateY(32px)";
  header.style.transition =
    "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)";

  const timer = setTimeout(() => {
    header.style.opacity = "1";
    header.style.transform = "translateY(0)";
  }, 200);

  return () => clearTimeout(timer);
}, []);

  // Animate cards when they enter viewport
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>(".country-card");
    if (!cards) return;
    cards.forEach((card, i) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(36px)";
      card.style.transition = `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${(i % 4) * 0.08}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${(i % 4) * 0.08}s`;

      const cardObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
          cardObserver.disconnect();
        },
        { threshold: 0.1 }
      );
      cardObserver.observe(card);
    });
  }, [filtered]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F5F6FF] py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Header row: label+heading left, search right ── */}
        <div ref={headerRef} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="flex items-center gap-2 text-[#1818B1] text-xs font-bold uppercase mb-3">
              <span>✦</span>
              Country Listing
              <span>✦</span>
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Our Available Countries
            </h2>
          </div>

          {/* Search input */}
          <div className="relative w-full sm:w-80 flex-shrink-0">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <SearchIcon className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search countries"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-gray-200 bg-white text-gray-700 placeholder-gray-400 text-[15px] outline-none focus:border-[#1818B1]/40 focus:shadow-sm transition-all duration-200"
            />
            {/* Live match count badge */}
            {query && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                <span className="text-xs text-gray-400 font-medium">
                  {filtered.length} {filtered.length === 1 ? "result" : "results"}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ── Countries grid ───────────────────────────────── */}
        {filtered.length > 0 ? (
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {filtered.map((country) => (
              <CountryCard key={country.slug} {...country} />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-5xl mb-4">🔍</p>
            <p className="font-display font-semibold text-gray-700 text-xl mb-2">
              No countries found
            </p>
            <p className="text-gray-400 text-sm">
              Try a different search — e.g. &ldquo;Germany&rdquo; or &ldquo;study&rdquo;
            </p>
            <button
              onClick={() => setQuery("")}
              className="mt-5 text-[#1818B1] text-sm font-semibold hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// ── Country Card ─────────────────────────────────────────────────
interface CountryCardProps {
  slug: string;
  name: string;
  flag: string;
  tagline: string;
  image: string;
}

function CountryCard({ slug, name, flag, tagline, image }: CountryCardProps) {
  return (
    <Link
      href={`/countries/${slug}`}
      className="country-card group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#1818B1]/10 hover:-translate-y-1.5 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden bg-gray-100" style={{ aspectRatio: "4/3" }}>
        <Image
          src={image}
          alt={`${name} landmark`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          /*
            IMAGE SETUP — place in /public/images/destinations/:
            germany.jpg, france.jpg, austria.jpg, canada.jpg,
            netherlands.jpg, belgium.jpg, sweden.jpg, spain.jpg,
            finland.jpg, switzerland.jpg, denmark.jpg, portugal.jpg
            Recommended size: 800×600px, ~100–150KB each
          */
        />
        {/* Flag badge — top right corner */}
        <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-xl">
          {flag}
        </div>
      </div>

      {/* Card body */}
      <div className="px-5 pt-5 pb-6">
        <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
          {name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
          {tagline}
        </p>
        <span className="inline-flex items-center gap-2 text-[#1818B1] font-semibold text-[14px] group-hover:gap-3 transition-all duration-200">
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}