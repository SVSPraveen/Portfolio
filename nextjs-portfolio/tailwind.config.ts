import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAFC",
        bgAlt: "#F3F1FA",
        cardBorder: "#E9E7F5",
        textPrimary: "#1E1B2E",
        textSecondary: "#5B5770",
        accent: "#6366F1",
        accentHover: "#4F46E5",
        accentViolet: "#8B5CF6",
        accentPurple: "#A855F7",
        successGreen: "#10B981",
      },
    },
  },
  plugins: [],
};

export default config;
