import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue_d: "#26378d",
        orange_d: "#FAAF01",
        gray_d: "#f1f1f1",
        black_d: "#171717",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideInLeft: "slideInLeft 0.5s ease-out",
        slideOutLeft: "slideOutLeft 0.5s ease-out",
        slideInRight: "slideInRight 0.5s ease-out",
        slideOutRight: "slideOutRight 0.5s ease-out",
        bounceIn: "bounceIn 0.75s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOutLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOutRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        bounceIn: {
          "0%, 100%": { transform: "scale(0.8)" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
          "75%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
