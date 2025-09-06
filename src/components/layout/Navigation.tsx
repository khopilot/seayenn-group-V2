/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { mainNavigation } from "@/config/navigation";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Pages with dark hero sections
  const darkPages = ["/", "/medical-repatriation", "/dispute-resolution", "/faq", "/contact"];
  const isDarkPage = darkPages.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = scrolled ? "text-brand-dark" : (isDarkPage ? "text-white" : "text-brand-dark");
  const textColorHover = scrolled ? "hover:text-brand-primary" : (isDarkPage ? "hover:text-seayeen-200" : "hover:text-brand-primary");
  const logoTextColor = scrolled ? "text-brand-dark" : (isDarkPage ? "text-white" : "text-brand-dark");

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : ""
    )}>
      <Container>
        <nav className="flex items-center justify-between py-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <Logo 
            href="/" 
            textColor={logoTextColor}
            size="md"
            className="-m-1.5 p-1.5"
          />
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className={cn("-m-2.5 inline-flex items-center justify-center rounded-md p-2.5", textColor)}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {mainNavigation.map((item) => {
            // Special handling for Investments dropdown
            if (item.name === "Investments") {
              return (
                <div key={item.name} className="relative group">
                  <Link
                    {...{ href: item.href as any }}
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium font-barlow leading-6 transition-colors",
                      pathname.startsWith('/investments') ? "text-brand-primary" : textColor,
                      textColorHover
                    )}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </Link>
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    <Link
                      href="/investments/joint-equity"
                      className="block px-4 py-2 text-sm font-barlow text-brand-dark hover:bg-seayeen-50 hover:text-brand-primary transition-colors"
                    >
                      Joint Equity Funds
                    </Link>
                    <Link
                      href="/investments/sub-divisions"
                      className="block px-4 py-2 text-sm font-barlow text-brand-dark hover:bg-seayeen-50 hover:text-brand-primary transition-colors"
                    >
                      Sub-Divisions
                    </Link>
                  </div>
                </div>
              );
            }
            
            return (
              <Link
                key={item.name}
                {...{ href: item.href as any }}
                className={cn(
                  "text-sm font-medium font-barlow leading-6 transition-colors",
                  pathname === item.href ? "text-brand-primary" : textColor,
                  textColorHover
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link {...{ href: "/contact" as any }}>
            <Button 
              variant={scrolled || !isDarkPage ? "primary" : "outline"} 
              className={!scrolled && isDarkPage ? "border-white text-white hover:bg-white hover:text-brand-primary" : ""}
            >
              Contact Us
            </Button>
          </Link>
        </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div className={cn("lg:hidden", !mobileMenuOpen && "hidden")}>
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-brand-light/20">
          <div className="flex items-center justify-between">
            <Logo href="/" size="md" />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-brand-dark hover:text-brand-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {mainNavigation.map((item) => {
                  // Special handling for Investments in mobile menu
                  if (item.name === "Investments") {
                    return (
                      <div key={item.name}>
                        <Link
                          {...{ href: item.href as any }}
                          className={cn(
                            "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold font-barlow leading-7 hover:bg-seayeen-50 transition-colors",
                            pathname.startsWith('/investments') ? "text-brand-primary bg-seayeen-50" : "text-brand-dark"
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <div className="ml-4 mt-1 space-y-1">
                          <Link
                            href="/investments/joint-equity"
                            className="-mx-3 block rounded-lg px-3 py-2 text-sm font-barlow text-brand-gray hover:bg-seayeen-50 hover:text-brand-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Joint Equity Funds
                          </Link>
                          <Link
                            href="/investments/sub-divisions"
                            className="-mx-3 block rounded-lg px-3 py-2 text-sm font-barlow text-brand-gray hover:bg-seayeen-50 hover:text-brand-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Sub-Divisions
                          </Link>
                        </div>
                      </div>
                    );
                  }
                  
                  return (
                    <Link
                      key={item.name}
                      {...{ href: item.href as any }}
                      className={cn(
                        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold font-barlow leading-7 hover:bg-seayeen-50 transition-colors",
                        pathname === item.href ? "text-brand-primary bg-seayeen-50" : "text-brand-dark"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              <div className="py-6">
                <Link {...{ href: "/contact" as any }} onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary" className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}