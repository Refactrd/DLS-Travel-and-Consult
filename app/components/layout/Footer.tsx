import Link from "next/link";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Countries", href: "/countries" },
  { label: "Programs", href: "/programs" },
];

const contactItems = [
  { label: "hello@dashlanguageschool.com", href: "mailto:hello@dashlanguageschool.com" },
  { label: "WhatsApp", href: "https://wa.me/yourphonenumber" },
  { label: "Check countries", href: "/countries" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: <FacebookIcon /> },
  { label: "LinkedIn", href: "https://linkedin.com", icon: <LinkedInIcon /> },
  { label: "Instagram", href: "https://instagram.com", icon: <InstagramIcon /> },
  { label: "Twitter / X", href: "https://twitter.com", icon: <TwitterIcon /> },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(160deg, #090934 0%, #1515A9 60%, #1818B1 100%)",
      }}
    >
      {/* ── Main footer body ──────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-black text-white tracking-tight">
                DLS
              </span>
            </Link>

            <p className="text-white/55 text-[15px] leading-relaxed max-w-[220px]">
              Helping Nigerians navigate European visa processes with confidence
              and clarity.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-white hover:border-white transition-all duration-200 group"
                >
                  <span className="text-white group-hover:text-[#1818B1] transition-colors duration-200">
                    {s.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Pages */}
          <div>
            <h3 className="text-white font-semibold text-[15px] mb-5">
              Pages
            </h3>
            <ul className="flex flex-col gap-3.5">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/55 text-[15px] hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h3 className="text-white font-semibold text-[15px] mb-5">
              Contact
            </h3>
            <ul className="flex flex-col gap-3.5">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/55 text-[15px] hover:text-white transition-colors duration-150 break-all"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} {" "}Dash Language School – Travel &amp; Consult. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-white/40 text-sm hover:text-white/70 transition-colors duration-150"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/40 text-sm hover:text-white/70 transition-colors duration-150"
            >
              Terms of Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Social Icons ─────────────────────────────────────────────────
function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}