import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0B0F17",
        foreground: "#F9FAFB",
        card: {
          DEFAULT: "#111827",
          foreground: "#F3F4F6",
          border: "#1F2937",
        },
        azure: {
          50: "#E6F7FF",
          100: "#BAE7FF",
          400: "#33B5FF",
          500: "#0078D4",
          600: "#005A9E",
          glow: "#00F0FF",
        },
        emerald: {
          glow: "#10B981",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(circle at center, rgba(0, 240, 255, 0.15) 0%, rgba(11, 15, 23, 0) 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(15, 23, 42, 0.6) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
