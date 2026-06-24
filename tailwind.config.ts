import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "#09090B",
        card: "#111113",
        border: "rgba(255,255,255,0.08)",
        foreground: "#FAFAFA",
        muted: "#A1A1AA",
        accent: "#FFFFFF",
      },
      maxWidth: {
        container: "1280px",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        hero: ["clamp(2.75rem, 5vw, 4.5rem)", { lineHeight: "1.04", letterSpacing: "-0.03em" }],
        section: ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
        marquee: "marquee var(--marquee-duration, 50s) linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
