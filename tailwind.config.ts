import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        ink: {
          950: "#0A0A0A",
          900: "#151515",
          800: "#1C1C1C",
          700: "#2B2B2B",
        },
        bone: {
          50: "#FFFFFF",
          100: "#FAFAFA",
          200: "#EAEAEA",
          300: "#C9C9C9",
        },
        silver: {
          DEFAULT: "#B5BAC1",
          soft: "#D2D6DC",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      borderRadius: {
        xl: "14px",
        "2xl": "20px",
        "3xl": "28px",
      },
      boxShadow: {
        elev: "0 30px 80px -30px rgba(0,0,0,0.55)",
        glow: "0 0 0 1px rgba(181,186,193,0.18), 0 25px 80px -30px rgba(181,186,193,0.25)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "border-beam": {
          "100%": { "offset-distance": "100%" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        shimmer: "shimmer 2.5s linear infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        marquee: "marquee var(--duration) linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
