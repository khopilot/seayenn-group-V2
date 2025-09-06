import { Metadata } from "next";
import { HelpCircle, MessageCircle, Phone, ArrowRight } from "lucide-react";
import FAQAccordion from "@/components/faq/FAQAccordion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Seayeen Group",
  description:
    "Find answers to common questions about investment opportunities, services, and doing business in Cambodia with Seayeen Group.",
  openGraph: {
    title: "FAQ - Seayeen Group",
    description: "Get answers to your questions about investing and services in Cambodia",
  },
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-primary via-seayeen-600 to-brand-dark">
        {/* Subtle Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/20" />
        
        <Container>
          <div className="mx-auto max-w-3xl text-center">
              {/* Icon */}
              <div className="mb-6 inline-flex">
                <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-4">
                  <HelpCircle className="h-10 w-10 text-white" />
                </div>
              </div>
              
              {/* Title */}
              <h1 className="mb-6 text-3xl font-karnchang uppercase font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Frequently Asked Questions
              </h1>
              
              {/* Description */}
              <p className="mx-auto max-w-2xl text-lg font-barlow text-seayeen-100 leading-relaxed">
                Everything you need to know about investing and doing business with Seayeen Group in Cambodia
              </p>
          </div>
        </Container>
      </section>

      {/* FAQ Content Section */}
      <section className="relative min-h-[60vh] py-28 flex items-center overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-seayeen-50 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-seayeen-50 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
        
        <Container className="relative">
          <FAQAccordion />
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-[60vh] py-28 overflow-hidden border-t border-gray-100 bg-gradient-to-br from-gray-50 to-white flex items-center">
        <Container>
          <div className="mx-auto max-w-4xl">
              {/* CTA Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-primary to-seayeen-600 p-12 text-center shadow-xl">
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute h-64 w-64 -right-32 -top-32 rounded-full bg-white/20 blur-3xl" />
                  <div className="absolute h-64 w-64 -left-32 -bottom-32 rounded-full bg-seayeen-400/20 blur-3xl" />
                </div>
                
                <div className="relative">
                  <div className="mb-6 inline-flex rounded-full bg-white/10 backdrop-blur-sm p-3">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  
                  <h2 className="mb-4 text-3xl font-karnchang uppercase font-bold text-white">
                    Still have questions?
                  </h2>
                  <p className="mb-8 text-lg font-barlow text-seayeen-100 max-w-2xl mx-auto">
                    Can't find the answer you're looking for? Our expert team is ready to help you with personalized assistance.
                  </p>
                  
                  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button 
                      size="lg" 
                      className="group bg-white text-brand-primary hover:bg-gray-50 font-semibold px-8 shadow-lg"
                      asChild
                    >
                      <Link href="/leadership">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Contact Our Team
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm font-semibold px-8"
                      asChild
                    >
                      <Link href="tel:+85523123456">
                        <Phone className="mr-2 h-5 w-5" />
                        Call Us Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <Link
                  href="/investments"
                  className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:scale-[1.02]"
                >
                  <h3 className="font-karnchang uppercase font-semibold text-brand-dark group-hover:text-brand-primary transition-colors">
                    Investment Guide
                  </h3>
                  <p className="mt-2 text-sm font-barlow text-brand-gray">
                    Explore opportunities in Cambodia
                  </p>
                  <ArrowRight className="mt-3 h-4 w-4 text-brand-primary transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/agriculture"
                  className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:scale-[1.02]"
                >
                  <h3 className="font-karnchang uppercase font-semibold text-brand-dark group-hover:text-brand-primary transition-colors">
                    Agriculture
                  </h3>
                  <p className="mt-2 text-sm font-barlow text-brand-gray">
                    Sustainable farming investments
                  </p>
                  <ArrowRight className="mt-3 h-4 w-4 text-brand-primary transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/leadership"
                  className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:scale-[1.02]"
                >
                  <h3 className="font-karnchang uppercase font-semibold text-brand-dark group-hover:text-brand-primary transition-colors">
                    Leadership
                  </h3>
                  <p className="mt-2 text-sm font-barlow text-brand-gray">
                    Meet our experienced team
                  </p>
                  <ArrowRight className="mt-3 h-4 w-4 text-brand-primary transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
          </div>
        </Container>
      </section>
    </main>
  );
}