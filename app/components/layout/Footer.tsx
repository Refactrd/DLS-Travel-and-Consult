"use client";
import Link from "next/link";
import Image from "next/image";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Countries", href: "/countries" },
  { label: "Programs", href: "/programs" },
];

const programLinks = [
  { label: "Study Abroad", href: "/programs/study" },
  { label: "Work & Training", href: "/programs/training" },
  { label: "Short-Term Travel", href: "/programs/travel" },
  { label: "Voluntary Service", href: "/programs/voluntary-service" },
  { label: "Family Reunification", href: "/programs/family-reunification" },
];

const contactItems = [
  { label: "hello@dlstravelandconsult.com", href: "mailto:hello@dlstravelandconsult.com", icon: "✉" },
  { label: "Chat on WhatsApp", href: "https://wa.me/yourphonenumber", icon: "💬" },
  { label: "Lagos, Nigeria", href: "#", icon: "📍" },
];

const socialLinks = [
  { label: "Facebook",   href: "https://facebook.com",  icon: <FacebookIcon /> },
  { label: "LinkedIn",   href: "https://linkedin.com",  icon: <LinkedInIcon /> },
  { label: "Instagram",  href: "https://instagram.com", icon: <InstagramIcon /> },
  { label: "Twitter / X",href: "https://twitter.com",   icon: <TwitterIcon /> },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#05051E" }}>

      {/* ── Decorative background elements ───────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-right blue glow */}
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #0D7EFF 0%, transparent 65%)" }}
        />
        {/* Bottom-left subtle glow */}
        <div
          className="absolute -bottom-20 -left-20 w-[320px] h-[320px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #0D7EFF 0%, transparent 65%)" }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* ── CTA Banner ───────────────────────────────────── */}
      {/* <div className="relative z-10 border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="font-display font-bold text-white mb-2"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
            >
              Ready to start your journey?
            </h2>
            <p className="font-body text-white text-base">
              Book a free consultation and let our experts guide you.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-body font-semibold text-white text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, #0D7EFF 0%, #0055cc 100%)",
                boxShadow: "0 8px 24px rgba(13,126,255,0.35)",
              }}
            >
              Book Free Consultation
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-body font-semibold text-white text-sm border border-white/20 hover:border-white/40 hover:bg-white/8 transition-all duration-200"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div> */}

      {/* ── Main footer body ─────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1.2fr_1fr] gap-10 lg:gap-14">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <div className="relative h-9 w-24">
                <Image
                  src="/images/logo.png"
                  alt="DLS Logo"
                  fill
                  sizes="96px"
                  className="object-contain object-left brightness-0 invert"
                  priority
                />
              </div>
            </Link>

            <p className="font-body text-white text-sm leading-relaxed max-w-[220px]">
              Your trusted partner for international travel, study, work, and
              relocation across Europe.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(13,126,255,0.25)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(13,126,255,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  <span className="text-white">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Pages */}
          <div>
            <p className="font-body text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-white text-sm hover:text-white/50 transition-colors duration-150 flex items-center gap-2 group"
                  >
                    <span
                      className="w-0 h-px bg-[#0D7EFF] transition-all duration-200 group-hover:w-3"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Programs */}
          <div>
            <p className="font-body text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Programs
            </p>
            <ul className="flex flex-col gap-3">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-white text-sm hover:text-white/50 transition-colors duration-150 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#0D7EFF] transition-all duration-200 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <p className="font-body text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Contact
            </p>
            <ul className="flex flex-col gap-4">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-body text-white text-sm hover:text-white/50 transition-colors duration-150 flex items-start gap-2.5"
                  >
                    <span className="text-[#0D7EFF] mt-0.5 flex-shrink-0">{item.icon}</span>
                    <span className="break-all leading-snug">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────── */}
      <div
        className="relative z-10"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-white text-xs text-center">
            © {new Date().getFullYear()} {" "}DLS Travel &amp; Consult. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((label) => (
              <Link
                key={label}
                href="/"
                className="font-body text-white text-xs hover:text-white/60 transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.659 1.438 5.168L2 22l4.978-1.306A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182a8.172 8.172 0 01-4.168-1.14l-.299-.177-3.097.812.826-3.02-.195-.31A8.182 8.182 0 1112 20.182z"/>
    </svg>
  );
}

function FacebookIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>;
}

function LinkedInIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;
}

function InstagramIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>;
}

function TwitterIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
}