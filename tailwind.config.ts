import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ── Brand Colors ─────────────────────────────── */
      colors: {
        primary:        "#0D7EFF",
        "primary-dark": "#0055cc",
        "bg-tint":      "#EEF4FF",
        navy:           "#0a0a2e",
      },

      /* ── Font Families ────────────────────────────── */
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        body:    ["var(--font-body)",    "ui-sans-serif", "system-ui", "sans-serif"],
        sans:    ["var(--font-body)",    "ui-sans-serif", "system-ui", "sans-serif"],
      },

      /* ── Background gradients ─────────────────────── */
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #EEF4FF 0%, #ffffff 100%)",
        "cta-gradient":  "linear-gradient(135deg, #0D7EFF 0%, #0055cc 100%)",
      },

      /* ── Keyframes ────────────────────────────────── */
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-down": {
          "0%":   { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%) skewX(-12deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        "marquee-left": {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(6px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.4" },
        },
      },

      /* ── Animations ───────────────────────────────── */
      animation: {
        "fade-up":       "fade-up 0.6s ease-out both",
        "fade-in":       "fade-in 0.5s ease-out both",
        "slide-down":    "slide-down 0.3s ease-out both",
        shimmer:         "shimmer 2s infinite",
        float:           "float 3s ease-in-out infinite",
        "marquee-left":  "marquee-left 40s linear infinite",
        "marquee-right": "marquee-right 40s linear infinite",
        "bounce-slow":   "bounce-slow 2s ease-in-out infinite",
        pulse:           "pulse 2s ease-in-out infinite",
      },

      /* ── Border radius ────────────────────────────── */
      borderRadius: {
        "4xl": "2rem",
      },

      /* ── Extra screens ────────────────────────────── */
      screens: {
        xs: "375px",
      },

      /* ── Box shadows ──────────────────────────────── */
      boxShadow: {
        "card":    "0 4px 24px rgba(0,0,0,0.06)",
        "card-lg": "0 8px 40px rgba(0,0,0,0.10)",
        "blue":    "0 8px 32px rgba(13,126,255,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;