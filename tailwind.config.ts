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
        primary:  "#1818B1",
        "primary-dark": "#0000FF",
        accent:   "#AFAFFC",
        "bg-tint": "#F5F6FF",
      },

      /* ── Font Families ────────────────────────────── */
      fontFamily: {
        display: ["var(--font-satoshi)", "ui-sans-serif", "system-ui", "sans-serif"],
        body:    ["var(--font-urbanist)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans:    ["var(--font-urbanist)", "ui-sans-serif", "system-ui", "sans-serif"],
      },

      /* ── Custom gradients ─────────────────────────── */
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #090934 0%, #1515A9 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #1818B1 0%, #0000FF 100%)",
      },

      /* ── Custom animations ────────────────────────── */
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%) skewX(-12deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        "slide-down": {
          "0%":   { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up":    "fade-up 0.6s ease-out both",
        "fade-in":    "fade-in 0.5s ease-out both",
        shimmer:      "shimmer 2s infinite",
        float:        "float 3s ease-in-out infinite",
        "slide-down": "slide-down 0.3s ease-out both",
      },

      /* ── Screen breakpoints (Tailwind defaults kept) ── */
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};

export default config;