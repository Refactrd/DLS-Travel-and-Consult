// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { Search, Menu, X } from "lucide-react";
// import { usePathname } from "next/navigation";
// import { countries } from "@/app/components/sections/countries/CountriesGrid";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchValue, setSearchValue] = useState("");
//   const [searchOpen, setSearchOpen] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();
//   const searchRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
//         setSearchOpen(false);
//         setSearchValue("");
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const navLinks = [
//     { label: "Home", href: "/" },
//     { label: "About Us", href: "/about" },
//     { label: "Countries", href: "/countries" },
//     { label: "Programs", href: "/programs" },
//   ];

//   // Filter countries based on search value
//   const filteredCountries = searchValue.trim().length > 0
//     ? countries.filter((c) =>
//         c.name.toLowerCase().includes(searchValue.toLowerCase()) ||
//         c.tagline.toLowerCase().includes(searchValue.toLowerCase())
//       )
//     : [];

//   const handleCountrySelect = (slug: string) => {
//     setSearchValue("");
//     setSearchOpen(false);
//     router.push(`/countries/${slug}`);
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3">
//       {/* Floating pill/card navbar */}
//       <div
//         className={`w-full max-w-[1100px] flex items-center justify-between px-5 h-[68px] rounded-2xl border border-gray-200 bg-white transition-all duration-500 ${
//           scrolled ? "shadow-xl shadow-black/8" : "shadow-md shadow-black/5"
//         }`}
//       >
//         {/* Logo — image */}
//         <Link href="/" className="flex-shrink-0 group">
//           <div className="relative h-9 w-24">
//             <Image
//               src="/images/logo.png"
//               alt="DLS Logo"
//               fill
//               sizes="96px"
//               className="object-contain object-left"
//               priority
//               /*
//                 LOGO SETUP:
//                 Place your logo image at: public/images/logo.png
//                 Recommended: PNG with transparent background, ~300×100px
//                 If your logo is wider or narrower, adjust the w-24 class above.
//                 For SVG logos, change the src to "/images/logo.svg"
//               */
//             />
//           </div>
//         </Link>

//         {/* Desktop Nav Links */}
//         <div className="hidden md:flex items-center gap-7">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href;
//             return (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`relative text-[15px] font-medium transition-colors duration-200 group ${
//                   isActive ? "text-[#1818B1]" : "text-gray-700 hover:text-[#1818B1]"
//                 }`}
//               >
//                 {link.label}
//                 <span
//                   className={`absolute -bottom-1 left-0 h-0.5 bg-[#1818B1] rounded-full transition-all duration-300 ${
//                     isActive ? "w-full" : "w-0 group-hover:w-full"
//                   }`}
//                 />
//               </Link>
//             );
//           })}
//         </div>

//         {/* Right Side */}
//         <div className="hidden md:flex items-center gap-3">

//           {/* Search with dropdown */}
//           <div ref={searchRef} className="relative">
//             <div className="flex items-center w-48 border border-gray-200 rounded-full px-4 py-2 bg-gray-50 focus-within:border-[#1818B1]/40 focus-within:bg-white focus-within:shadow-sm transition-all duration-200">
//               <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
//               <input
//                 type="text"
//                 placeholder="Search countries"
//                 value={searchValue}
//                 onChange={(e) => {
//                   setSearchValue(e.target.value);
//                   setSearchOpen(true);
//                 }}
//                 onFocus={() => setSearchOpen(true)}
//                 className="ml-2 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none w-full"
//               />
//               {searchValue && (
//                 <button
//                   onClick={() => { setSearchValue(""); setSearchOpen(false); }}
//                   className="ml-1 text-gray-400 hover:text-gray-600"
//                 >
//                   <X className="w-3 h-3" />
//                 </button>
//               )}
//             </div>

//             {/* Dropdown results */}
//             {searchOpen && filteredCountries.length > 0 && (
//               <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden z-50 min-w-[260px]">
//                 <p className="px-4 pt-3 pb-1 text-xs text-gray-400 font-medium uppercase tracking-wide">
//                   {filteredCountries.length} {filteredCountries.length === 1 ? "country" : "countries"} found
//                 </p>
//                 {filteredCountries.map((country) => (
//                   <button
//                     key={country.slug}
//                     onClick={() => handleCountrySelect(country.slug)}
//                     className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#F5F6FF] transition-colors duration-150 text-left"
//                   >
//                     <span className="text-xl">{country.flag}</span>
//                     <div>
//                       <p className="text-sm font-semibold text-gray-800">{country.name}</p>
//                       <p className="text-xs text-gray-400 line-clamp-1">{country.tagline}</p>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             )}

//             {/* No results state */}
//             {searchOpen && searchValue.trim().length > 0 && filteredCountries.length === 0 && (
//               <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden z-50 min-w-[260px]">
//                 <div className="px-4 py-5 text-center">
//                   <p className="text-2xl mb-1">🔍</p>
//                   <p className="text-sm text-gray-500">No countries found for &ldquo;{searchValue}&rdquo;</p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* WhatsApp Icon */}
//           <a
//             href="https://wa.me/yourphonenumber"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Chat on WhatsApp"
//             className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#25D366]/40 bg-[#25D366]/8 hover:border-[#25D366] hover:bg-[#25D366]/15 hover:scale-110 transition-all duration-200"
//           >
//             <WhatsAppIcon className="w-[22px] h-[22px]" />
//           </a>

//           {/* CTA */}
//           <Link
//             href="/"
//             className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body font-semibold text-white text-[15px] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
//             style={{
//               background: "linear-gradient(135deg, #0D7EFF 0%, #0055cc 100%)",
//               boxShadow: "0 8px 32px rgba(13,126,255,0.4)",
//             }}
//           >
//             <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
//             <span className="relative z-10">Book Consultation</span>
//           </Link>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? (
//             <X className="w-5 h-5 text-gray-700" />
//           ) : (
//             <Menu className="w-5 h-5 text-gray-700" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`absolute top-[78px] left-4 right-4 max-w-[1100px] mx-auto rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden transition-all duration-300 ${
//           menuOpen
//             ? "opacity-100 translate-y-0 pointer-events-auto"
//             : "opacity-0 -translate-y-2 pointer-events-none"
//         }`}
//       >
//         <div className="px-4 pb-5 pt-4 space-y-1">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href;
//             return (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setMenuOpen(false)}
//                 className={`block px-4 py-3 rounded-xl font-medium transition-colors duration-150 ${
//                   isActive
//                     ? "bg-[#F5F6FF] text-[#1818B1]"
//                     : "text-gray-700 hover:bg-[#F5F6FF] hover:text-[#1818B1]"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             );
//           })}

//           <div className="pt-3 flex flex-col gap-3">
//             {/* Mobile search */}
//             <div className="relative">
//               <div className="flex items-center gap-3 border border-gray-200 rounded-full px-4 py-2.5 bg-gray-50 focus-within:border-[#1818B1]/40 focus-within:bg-white">
//                 <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
//                 <input
//                   type="text"
//                   placeholder="Search countries"
//                   value={searchValue}
//                   onChange={(e) => setSearchValue(e.target.value)}
//                   className="text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none flex-1"
//                 />
//                 {searchValue && (
//                   <button onClick={() => setSearchValue("")} className="text-gray-400">
//                     <X className="w-3 h-3" />
//                   </button>
//                 )}
//               </div>

//               {/* Mobile dropdown */}
//               {searchValue.trim().length > 0 && (
//                 <div className="mt-2 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
//                   {filteredCountries.length > 0 ? (
//                     filteredCountries.map((country) => (
//                       <button
//                         key={country.slug}
//                         onClick={() => {
//                           handleCountrySelect(country.slug);
//                           setMenuOpen(false);
//                         }}
//                         className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#F5F6FF] transition-colors text-left border-b border-gray-100 last:border-0"
//                       >
//                         <span className="text-xl">{country.flag}</span>
//                         <p className="text-sm font-semibold text-gray-800">{country.name}</p>
//                       </button>
//                     ))
//                   ) : (
//                     <div className="px-4 py-4 text-center text-sm text-gray-500">
//                       No countries found
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>

//             <Link
//               href="/consultation"
//               onClick={() => setMenuOpen(false)}
//               className="block text-center px-5 py-3 rounded-full bg-[#1818B1] text-white text-sm font-semibold hover:bg-[#0000FF] transition-colors"
//             >
//               Book Consultation
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// function WhatsAppIcon({ className }: { className?: string }) {
//   return (
//     <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
//       <circle cx="16" cy="16" r="16" fill="#25D366" />
//       <path
//         d="M22.94 19.71c-.31-.16-1.83-.9-2.12-1.01-.28-.1-.49-.15-.7.16-.2.31-.8 1.01-.98 1.22-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.53-.91-.82-1.53-1.83-1.71-2.14-.18-.31-.02-.48.13-.63.14-.14.31-.36.47-.54.16-.18.2-.31.31-.52.1-.2.05-.38-.03-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53-.18-.01-.38-.01-.59-.01-.2 0-.54.08-.82.38-.28.31-1.08 1.06-1.08 2.57 0 1.52 1.1 2.99 1.26 3.2.16.2 2.17 3.32 5.27 4.66.73.32 1.31.51 1.75.65.74.23 1.41.2 1.94.12.59-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36z"
//         fill="white"
//       />
//       <path
//         d="M16.01 6C10.48 6 6 10.48 6 16.01c0 1.97.55 3.81 1.5 5.38L6 26l4.73-1.24a9.97 9.97 0 005.28 1.49C21.54 26.25 26 21.77 26 16.24 26 10.72 21.54 6 16.01 6zm0 18.14a8.09 8.09 0 01-4.34-1.25l-.31-.19-3.23.85.86-3.15-.2-.32a8.13 8.13 0 01-1.25-4.32c0-4.5 3.66-8.16 8.17-8.16 4.5 0 8.17 3.66 8.17 8.16 0 4.51-3.67 8.38-8.17 8.38z"
//         fill="white"
//       />
//     </svg>
//   );
// }


"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { countries } from "@/app/components/sections/countries/CountriesGrid";

// ── Language data ────────────────────────────────────────────────
const languageGroups = [
  {
    region: "European",
    languages: [
      { code: "en", native: "English",    english: "English"    },
      { code: "es", native: "Español",    english: "Spanish"    },
      { code: "de", native: "Deutsch",    english: "German"     },
      { code: "fr", native: "Français",   english: "French"     },
      { code: "it", native: "Italiano",   english: "Italian"    },
      { code: "pt", native: "Português",  english: "Portuguese" },
      { code: "nl", native: "Nederlands", english: "Dutch"      },
      { code: "pl", native: "Polski",     english: "Polish"     },
      { code: "sv", native: "Svenska",    english: "Swedish"    },
      { code: "ro", native: "Română",     english: "Romanian"   },
      { code: "hu", native: "Magyar",     english: "Hungarian"  },
      { code: "cs", native: "Čeština",    english: "Czech"      },
      { code: "el", native: "Ελληνικά",   english: "Greek"      },
    ],
  },
  {
    region: "Africa",
    languages: [
      { code: "ha", native: "Hausa",      english: "Hausa"      },
      { code: "yo", native: "Yorùbá",     english: "Yoruba"     },
      { code: "ig", native: "Igbo",       english: "Igbo"       },
      { code: "sw", native: "Kiswahili",  english: "Swahili"    },
      { code: "am", native: "አማርኛ",       english: "Amharic"    },
      { code: "zu", native: "isiZulu",    english: "Zulu"       },
    ],
  },
];

const allLanguages = languageGroups.flatMap((g) => g.languages);

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchOpen, setSearchOpen]   = useState(false);
  const [langOpen, setLangOpen]       = useState(false);
  const [activeLang, setActiveLang]   = useState(allLanguages[0]);

  const pathname  = usePathname();
  const router    = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);
  const langRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setSearchValue("");
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = [
    { label: "Home",      href: "/" },
    { label: "About Us",  href: "/about" },
    { label: "Countries", href: "/countries" },
    { label: "Programs",  href: "/programs" },
  ];

  const filteredCountries = searchValue.trim().length > 0
    ? countries.filter((c) =>
        c.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        c.tagline.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [];

  const handleCountrySelect = (slug: string) => {
    setSearchValue(""); setSearchOpen(false);
    router.push(`/countries/${slug}`);
  };

  const handleLangSelect = (lang: typeof allLanguages[0]) => {
    setActiveLang(lang);
    setLangOpen(false);

    // Update the html lang attribute for accessibility
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang.code;
    }

    // ── Google Translate integration ──────────────────────────────
    // Google Translate works via a hidden <select> it injects into the DOM.
    // We find that select, set its value to our chosen language code,
    // and fire a change event — exactly what the widget does internally.
    //
    // The language codes Google Translate uses are standard BCP-47 codes,
    // same ones we use in our languageGroups array (en, fr, de, es etc.)
    // The only exception: "en" resets the page to the original language.

    const attemptTranslate = (attemptsLeft: number) => {
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;

      if (select) {
        if (lang.code === "en") {
          // Reset to original — Google Translate uses a special restore method
          const restoreEl = document.querySelector(".goog-te-menu-value") as HTMLElement | null;
          if (restoreEl) restoreEl.click();

          // Fallback: set cookie directly and reload
          document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname;
          window.location.reload();
          return;
        }

        // Set the language and trigger the change event
        select.value = lang.code;
        select.dispatchEvent(new Event("change"));
      } else if (attemptsLeft > 0) {
        // Google Translate loads asynchronously — retry up to 10 times
        setTimeout(() => attemptTranslate(attemptsLeft - 1), 300);
      } else {
        console.warn("Google Translate widget not found. Make sure the script is loaded in layout.tsx.");
      }
    };

    attemptTranslate(10);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3">

      {/* ── Floating navbar ───────────────────────────────── */}
      <div className={`w-full max-w-[1100px] flex items-center justify-between px-5 h-[68px] rounded-2xl border border-gray-200 bg-white transition-all duration-500 ${
        scrolled ? "shadow-xl shadow-black/8" : "shadow-md shadow-black/5"
      }`}>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="relative h-9 w-24">
            <Image src="/images/logo.png" alt="DLS Logo" fill sizes="96px"
              className="object-contain object-left" priority />
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href}
                className={`relative text-[15px] font-medium transition-colors duration-200 group ${
                  isActive ? "text-[#0D7EFF]" : "text-gray-700 hover:text-[#0D7EFF]"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#0D7EFF] rounded-full transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-2.5">

          {/* Search */}
          <div ref={searchRef} className="relative">
            <div className="flex items-center w-44 border border-gray-200 rounded-full px-4 py-2 bg-gray-50 focus-within:border-[#0D7EFF]/40 focus-within:bg-white focus-within:shadow-sm transition-all duration-200">
              <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <input type="text" placeholder="Search countries" value={searchValue}
                onChange={(e) => { setSearchValue(e.target.value); setSearchOpen(true); }}
                onFocus={() => setSearchOpen(true)}
                className="ml-2 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none w-full"
              />
              {searchValue && (
                <button onClick={() => { setSearchValue(""); setSearchOpen(false); }} className="ml-1 text-gray-400 hover:text-gray-600">
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
            {searchOpen && filteredCountries.length > 0 && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden z-50 min-w-[260px]">
                <p className="px-4 pt-3 pb-1 text-xs text-gray-400 font-medium uppercase tracking-wide">
                  {filteredCountries.length} {filteredCountries.length === 1 ? "country" : "countries"} found
                </p>
                {filteredCountries.map((country) => (
                  <button key={country.slug} onClick={() => handleCountrySelect(country.slug)}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#EEF4FF] transition-colors duration-150 text-left"
                  >
                    <span className="text-xl">{country.flag}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{country.name}</p>
                      <p className="text-xs text-gray-400 line-clamp-1">{country.tagline}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
            {searchOpen && searchValue.trim().length > 0 && filteredCountries.length === 0 && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden z-50 min-w-[240px]">
                <div className="px-4 py-5 text-center">
                  <p className="text-2xl mb-1">🔍</p>
                  <p className="text-sm text-gray-500">No countries found for &ldquo;{searchValue}&rdquo;</p>
                </div>
              </div>
            )}
          </div>

          {/* ── Language selector ──────────────────────────── */}
          <div ref={langRef} className="relative">
            {/* Trigger button — globe + language name + chevron */}
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-500">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
                <path d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9M3 12h18"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              <span className="text-[13px] font-medium text-gray-700">{activeLang.english}</span>
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                className={`text-gray-400 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dropdown — matches design exactly */}
            {langOpen && (
              <div
                className="absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-2xl shadow-black/12 z-50 overflow-hidden"
                style={{
                  width: "300px",
                  maxHeight: "420px",
                  overflowY: "auto",
                  border: "1px solid rgba(0,0,0,0.08)",
                  scrollbarWidth: "thin",
                }}
              >
                {languageGroups.map((group, gi) => (
                  <div key={group.region}>
                    {/* Region label — sticky, small caps, muted */}
                    <div className="px-4 pt-4 pb-2 sticky top-0 bg-white z-10">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.14em]">
                        {group.region}
                      </p>
                    </div>

                    {/* Language rows */}
                    {group.languages.map((lang) => {
                      const isActive = activeLang.code === lang.code;
                      return (
                        <button
                          key={lang.code}
                          onClick={() => handleLangSelect(lang)}
                          className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors duration-100"
                          style={{
                            background: isActive ? "#FFF8F0" : "transparent",
                          }}
                          onMouseEnter={(e) => {
                            if (!isActive) (e.currentTarget as HTMLElement).style.background = "#F5F5F5";
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive) (e.currentTarget as HTMLElement).style.background = "transparent";
                          }}
                        >
                          {/* Native name — left, bold, active = orange (matching design) */}
                          <span
                            className="text-[15px] font-medium"
                            style={{ color: isActive ? "#D97706" : "#111827" }}
                          >
                            {lang.native}
                          </span>

                          {/* English name + checkmark — right */}
                          <div className="flex items-center gap-2">
                            <span className="text-[15px] text-gray-400">{lang.english}</span>
                            {isActive && (
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M2.5 8.5l3.5 3.5 7-7" stroke="#D97706" strokeWidth="1.8"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </div>
                        </button>
                      );
                    })}

                    {/* Divider between groups */}
                    {gi < languageGroups.length - 1 && (
                      <div className="h-px bg-gray-100 mx-4 my-1" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* WhatsApp */}
          <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#25D366]/40 hover:border-[#25D366] hover:scale-110 transition-all duration-200"
          >
            <WhatsAppIcon className="w-[22px] h-[22px]" />
          </a>

          {/* CTA */}
          <Link href="/consultation"
            className="relative inline-flex items-center px-5 py-2.5 rounded-full bg-[#0D7EFF] text-white text-sm font-semibold overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-[#0D7EFF]/30 hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 bg-[#0055cc] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">Book Consultation</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
        </button>
      </div>

      {/* ── Mobile menu ───────────────────────────────────── */}
      <div className={`absolute top-[78px] left-4 right-4 max-w-[1100px] mx-auto rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden transition-all duration-300 ${
        menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}>
        <div className="px-4 pb-5 pt-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-medium transition-colors duration-150 ${
                  isActive ? "bg-[#EEF4FF] text-[#0D7EFF]" : "text-gray-700 hover:bg-[#EEF4FF] hover:text-[#0D7EFF]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-3 flex flex-col gap-3">
            {/* Mobile search */}
            <div className="relative">
              <div className="flex items-center gap-3 border border-gray-200 rounded-full px-4 py-2.5 bg-gray-50">
                <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <input type="text" placeholder="Search countries" value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none flex-1"
                />
                {searchValue && (
                  <button onClick={() => setSearchValue("")} className="text-gray-400"><X className="w-3 h-3" /></button>
                )}
              </div>
              {searchValue.trim().length > 0 && (
                <div className="mt-2 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                  {filteredCountries.length > 0 ? (
                    filteredCountries.map((country) => (
                      <button key={country.slug}
                        onClick={() => { handleCountrySelect(country.slug); setMenuOpen(false); }}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#EEF4FF] transition-colors text-left border-b border-gray-100 last:border-0"
                      >
                        <span className="text-xl">{country.flag}</span>
                        <p className="text-sm font-semibold text-gray-800">{country.name}</p>
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-4 text-center text-sm text-gray-500">No countries found</div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile language — native select with optgroups */}
            <div className="flex items-center gap-2.5 border border-gray-200 rounded-full px-4 py-2.5 bg-gray-50">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-gray-400 flex-shrink-0">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
                <path d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9M3 12h18"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              <select
                value={activeLang.code}
                onChange={(e) => {
                  const found = allLanguages.find((l) => l.code === e.target.value);
                  if (found) handleLangSelect(found);
                }}
                className="flex-1 text-sm text-gray-700 bg-transparent outline-none"
              >
                {languageGroups.map((group) => (
                  <optgroup key={group.region} label={group.region}>
                    {group.languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.native} — {lang.english}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            <Link href="/consultation" onClick={() => setMenuOpen(false)}
              className="block text-center px-5 py-3 rounded-full bg-[#0D7EFF] text-white text-sm font-semibold hover:bg-[#0055cc] transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="16" cy="16" r="16" fill="#25D366"/>
      <path d="M22.94 19.71c-.31-.16-1.83-.9-2.12-1.01-.28-.1-.49-.15-.7.16-.2.31-.8 1.01-.98 1.22-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.53-.91-.82-1.53-1.83-1.71-2.14-.18-.31-.02-.48.13-.63.14-.14.31-.36.47-.54.16-.18.2-.31.31-.52.1-.2.05-.38-.03-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53-.18-.01-.38-.01-.59-.01-.2 0-.54.08-.82.38-.28.31-1.08 1.06-1.08 2.57 0 1.52 1.1 2.99 1.26 3.2.16.2 2.17 3.32 5.27 4.66.73.32 1.31.51 1.75.65.74.23 1.41.2 1.94.12.59-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36z" fill="white"/>
      <path d="M16.01 6C10.48 6 6 10.48 6 16.01c0 1.97.55 3.81 1.5 5.38L6 26l4.73-1.24a9.97 9.97 0 005.28 1.49C21.54 26.25 26 21.77 26 16.24 26 10.72 21.54 6 16.01 6zm0 18.14a8.09 8.09 0 01-4.34-1.25l-.31-.19-3.23.85.86-3.15-.2-.32a8.13 8.13 0 01-1.25-4.32c0-4.5 3.66-8.16 8.17-8.16 4.5 0 8.17 3.66 8.17 8.16 0 4.51-3.67 8.38-8.17 8.38z" fill="white"/>
    </svg>
  );
}