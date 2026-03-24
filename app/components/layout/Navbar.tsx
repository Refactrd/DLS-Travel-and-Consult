"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Countries", href: "/countries" },
    { label: "Programs", href: "/programs" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3">
      {/* Floating pill/card navbar */}
      <div
        className={`w-full max-w-[1100px] flex items-center justify-between px-5 h-[68px] rounded-2xl border border-gray-200 bg-white transition-all duration-500 ${
          scrolled ? "shadow-xl shadow-black/8" : "shadow-md shadow-black/5"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 group">
          <span className="text-[28px] font-black tracking-tight text-[#1818B1] transition-transform duration-200 group-hover:scale-105 inline-block">
            DLS
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[15px] font-medium transition-colors duration-200 group ${
                    isActive ? "text-[#1818B1]" : "text-gray-700 hover:text-[#1818B1]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#1818B1] rounded-full transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3">
          {/* Search */}
          <div className="flex items-center w-44 border border-gray-200 rounded-full px-4 py-2 bg-gray-50 focus-within:border-[#1818B1]/40 focus-within:bg-white focus-within:shadow-sm transition-all duration-200">
            <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search countries"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="ml-2 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none w-full"
            />
          </div>

          {/* WhatsApp Icon — real green brand colors */}
          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#25D366]/40 bg-[#25D366]/8 hover:border-[#25D366] hover:bg-[#25D366]/15 hover:scale-110 transition-all duration-200"
          >
            <WhatsAppIcon className="w-[22px] h-[22px]" />
          </a>

          {/* CTA */}
          <Link
            href="/consultation"
            className="relative inline-flex items-center px-5 py-2.5 rounded-full bg-[#1818B1] text-white text-sm font-semibold overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-[#1818B1]/30 hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 bg-[#0000FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">Book Consultation</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-5 h-5 text-gray-700" />
          ) : (
            <Menu className="w-5 h-5 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu — drops below the floating card */}
      <div
        className={`absolute top-[78px] left-4 right-4 max-w-[1100px] mx-auto rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-4 pb-5 pt-4 space-y-1">
          {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-medium transition-colors duration-150 ${
                    isActive
                      ? "bg-[#F5F6FF] text-[#1818B1]"
                      : "text-gray-700 hover:bg-[#F5F6FF] hover:text-[#1818B1]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          <div className="pt-3 flex flex-col gap-3">
            <div className="flex items-center gap-3 border border-gray-200 rounded-full px-4 py-2.5 bg-gray-50">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search countries"
                className="text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none flex-1"
              />
            </div>
            <Link
              href="/consultation"
              onClick={() => setMenuOpen(false)}
              className="block text-center px-5 py-3 rounded-full bg-[#1818B1] text-white text-sm font-semibold hover:bg-[#0000FF] transition-colors"
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
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      {/* Phone icon path — official WhatsApp logo shape */}
      <path
        d="M22.94 19.71c-.31-.16-1.83-.9-2.12-1.01-.28-.1-.49-.15-.7.16-.2.31-.8 1.01-.98 1.22-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.53-.91-.82-1.53-1.83-1.71-2.14-.18-.31-.02-.48.13-.63.14-.14.31-.36.47-.54.16-.18.2-.31.31-.52.1-.2.05-.38-.03-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53-.18-.01-.38-.01-.59-.01-.2 0-.54.08-.82.38-.28.31-1.08 1.06-1.08 2.57 0 1.52 1.1 2.99 1.26 3.2.16.2 2.17 3.32 5.27 4.66.73.32 1.31.51 1.75.65.74.23 1.41.2 1.94.12.59-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36z"
        fill="white"
      />
      <path
        d="M16.01 6C10.48 6 6 10.48 6 16.01c0 1.97.55 3.81 1.5 5.38L6 26l4.73-1.24a9.97 9.97 0 005.28 1.49C21.54 26.25 26 21.77 26 16.24 26 10.72 21.54 6 16.01 6zm0 18.14a8.09 8.09 0 01-4.34-1.25l-.31-.19-3.23.85.86-3.15-.2-.32a8.13 8.13 0 01-1.25-4.32c0-4.5 3.66-8.16 8.17-8.16 4.5 0 8.17 3.66 8.17 8.16 0 4.51-3.67 8.38-8.17 8.38z"
        fill="white"
      />
    </svg>
  );
}