import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Seayeen Group - Investment Opportunities in Cambodia",
  description: "Pioneering investment opportunities in real estate, agriculture, and beyond. Your trusted partner for sustainable investments in Cambodia.",
  keywords: ["Seayeen Group", "Cambodia Investment", "Real Estate", "Agriculture", "Medical Repatriation", "Debt Recovery"],
  authors: [{ name: "Seayeen Group" }],
  creator: "Seayeen Group",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seayeengroup.com",
    title: "Seayeen Group - Investment Opportunities in Cambodia",
    description: "Pioneering investment opportunities in real estate, agriculture, and beyond. Your trusted partner for sustainable investments in Cambodia.",
    siteName: "Seayeen Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seayeen Group - Investment Opportunities in Cambodia",
    description: "Pioneering investment opportunities in real estate, agriculture, and beyond.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
