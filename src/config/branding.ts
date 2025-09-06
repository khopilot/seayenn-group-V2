// Seayeen Group Official Branding Standards
// Based on official branding board specifications

export const brandColors = {
  // Primary Colors
  primary: "#1E6D8F", // Teal blue - main brand color
  darkBlue: "#03364F", // Navy - secondary dark accent
  grayBlue: "#687D83", // Muted gray-blue
  lightGray: "#9FA9AE", // Soft gray for text/borders
  white: "#FFFFFF",
  
  // Semantic colors (derived from brand palette)
  text: {
    primary: "#03364F", // Dark blue for main text
    secondary: "#687D83", // Gray-blue for secondary text
    light: "#9FA9AE", // Light gray for muted text
    inverse: "#FFFFFF", // White for dark backgrounds
  },
  
  background: {
    primary: "#FFFFFF",
    secondary: "#F8FAFB", // Very light gray derived from palette
    accent: "#1E6D8F",
    dark: "#03364F",
  },
  
  border: {
    light: "#E5E7EB", // Light border
    default: "#9FA9AE", // Default border
    dark: "#687D83", // Dark border
  },
} as const;

export const brandFonts = {
  logo: "Armstrong", // For logo text
  heading: "Karnchang", // For main headings (uppercase)
  subheading: "'Karnchang Condensed'", // For sub-headings
  body: "Barlow", // For body text
  
  // Fallback stacks
  logoStack: "Armstrong, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  headingStack: "Karnchang, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", 
  subheadingStack: "'Karnchang Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  bodyStack: "Barlow, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
} as const;

export const brandTypography = {
  // Font sizes following brand hierarchy
  sizes: {
    hero: "clamp(2.5rem, 5vw, 4rem)", // Dynamic hero text
    h1: "2.5rem", // 40px
    h2: "2rem", // 32px
    h3: "1.5rem", // 24px
    h4: "1.25rem", // 20px
    h5: "1.125rem", // 18px
    body: "1rem", // 16px
    small: "0.875rem", // 14px
    xs: "0.75rem", // 12px
  },
  
  // Font weights
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  // Line heights
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

// Logo component colors based on brand spec
export const logoColors = {
  topLeft: "#1E6D8F",
  topRight: "#03364F",
  bottomLeft: "#687D83",
  bottomRight: "#9FA9AE",
} as const;

// Export type definitions
export type BrandColors = typeof brandColors;
export type BrandFonts = typeof brandFonts;
export type BrandTypography = typeof brandTypography;