import type { Config } from "tailwindcss";
import { brandColors, brandFonts } from "./src/config/branding";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Seayeen Brand Colors
        brand: {
          primary: brandColors.primary,
          dark: brandColors.darkBlue,
          gray: brandColors.grayBlue,
          light: brandColors.lightGray,
        },
        seayeen: {
          50: "#E8F3F7", // Lightest tint of primary
          100: "#C7E2EC",
          200: "#9ECBDE",
          300: "#75B4D0",
          400: "#4C9DC2",
          500: brandColors.primary, // #1E6D8F
          600: "#1A5E7A",
          700: "#164F65",
          800: "#124050",
          900: brandColors.darkBlue, // #03364F
        },
        // Keep existing color system for gradual migration
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: brandColors.primary,
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: brandColors.grayBlue,
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: brandColors.lightGray,
          foreground: brandColors.darkBlue,
        },
        accent: {
          DEFAULT: brandColors.primary,
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: brandColors.border.default,
        input: "hsl(var(--input))",
        ring: brandColors.primary,
      },
      fontFamily: {
        armstrong: [brandFonts.logoStack],
        karnchang: [brandFonts.headingStack],
        "karnchang-condensed": [brandFonts.subheadingStack],
        barlow: [brandFonts.bodyStack],
        // Default sans to Barlow
        sans: [brandFonts.bodyStack],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;