import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { 
  MessageCircle, 
  DollarSign, 
  Shield, 
  MapPin, 
  Database,
  Scale,
  Handshake,
  Briefcase,
  Tractor,
  FileCheck,
  TrendingUp,
  Users
} from "lucide-react";

const programSteps = [
  {
    id: 1,
    title: "Land Acquisition",
    description: "We strategically acquire land at significantly discounted rates, focusing on areas with high profitability potential to maximize investor returns.",
    icon: DollarSign,
  },
  {
    id: 2,
    title: "Boundary Security",
    description: "Our team ensures the protection of your investment by securing the physical boundaries of the property, safeguarding against encroachments.",
    icon: Shield,
  },
  {
    id: 3,
    title: "Land Measurement",
    description: "Utilizing precise GPS measurement techniques, we accurately define and verify the dimensions of the land, ensuring clarity and precision in documentation.",
    icon: MapPin,
  },
  {
    id: 4,
    title: "Data Storage",
    description: "Our advanced land data store management system securely maintains all crucial land information, providing a reliable and accessible data repository.",
    icon: Database,
  },
  {
    id: 5,
    title: "Legal Documentation",
    description: "We guarantee a thorough documentation process to legally establish clear ownership, offering peace of mind to our investors.",
    icon: Scale,
  },
  {
    id: 6,
    title: "Investment Partnership Contracts",
    description: "Our legal experts draft detailed contracts that clearly define the terms and conditions of investment partnerships, ensuring transparency and mutual understanding.",
    icon: Handshake,
  },
  {
    id: 7,
    title: "Portfolio Management",
    description: "Professional management of your property portfolio includes regular, detailed reports, keeping you informed and engaged with your investment's performance.",
    icon: Briefcase,
  },
  {
    id: 8,
    title: "Agricultural Projects",
    description: "We enhance land value through managed agricultural projects, maintaining the land's condition while generating additional revenue, showcasing the dual benefits of our investment strategy.",
    icon: Tractor,
  },
  {
    id: 9,
    title: "Governmental Compliance",
    description: "Our team handles all governmental compliance and regulatory requirements, ensuring your investment adheres to legal standards throughout the investment term.",
    icon: FileCheck,
  },
  {
    id: 10,
    title: "Sales and Marketing",
    description: "Upon your instruction, we market the land for sale through our extensive real estate agency platforms, maximizing exposure and potential returns.",
    icon: TrendingUp,
  },
  {
    id: 11,
    title: "Sales Process and Payouts",
    description: "We manage the entire sales process, from notifying you of offers to processing sales, ensuring you receive your investment payout efficiently.",
    icon: Users,
  },
];

export default function JointEquityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left Content */}
          <div className="bg-gray-50 flex items-center px-8 lg:px-16 py-16">
            <div>
              <div className="w-1 h-20 bg-brand-primary mb-8"></div>
              <h1 className="text-4xl lg:text-5xl font-karnchang uppercase font-bold text-brand-dark mb-4">
                SEAYEEN GROUP&apos;S
              </h1>
              <h2 className="text-4xl lg:text-5xl font-karnchang uppercase font-bold text-brand-dark mb-4">
                JOINT EQUITY
              </h2>
              <h2 className="text-4xl lg:text-5xl font-karnchang uppercase font-bold text-brand-dark mb-8">
                INVESTING
              </h2>
              <p className="text-xl font-barlow text-brand-gray mb-8 font-semibold">
                UNLOCK YOUR INVESTMENT POTENTIAL
              </p>
              <Button size="lg" variant="primary">
                CONSULTATION
              </Button>
              <div className="w-1 h-20 bg-brand-primary mt-8"></div>
            </div>
          </div>

          {/* Right Image */}
          <div 
            className="relative bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/cambodia-temple-view.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Program Steps Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-brand-primary font-barlow font-semibold text-sm uppercase tracking-wider">
                Equity
              </span>
              <h2 className="mt-4 text-4xl font-karnchang uppercase font-bold text-brand-dark">Program Steps</h2>
              <p className="mt-6 text-lg font-barlow text-brand-gray max-w-3xl mx-auto">
                Dive into Seayeen Group&apos;s Joint equity investing, a streamlined path 
                to real estate investment in Cambodia&apos;s dynamic markets. From securing 
                land at exceptional rates to managing on-site agricultural projects, we offer 
                a complete investment solution that ensures both profitability and sustainability. 
                Start your journey towards successful real estate investment with us today.
              </p>
            </div>

            {/* Steps Grid with Images */}
            <div className="space-y-20">
              {/* First Image and Steps */}
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="order-2 lg:order-1">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/land-signing.jpg"
                      alt="Land acquisition signing"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-8">
                  {programSteps.slice(0, 3).map((step) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.id} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-seayeen-100 rounded-lg flex items-center justify-center">
                            <Icon className="w-7 h-7 text-brand-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-karnchang uppercase font-bold text-brand-dark mb-2">
                            {step.title}
                          </h3>
                          <p className="font-barlow text-brand-gray">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Second Image and Steps */}
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                  {programSteps.slice(3, 7).map((step) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.id} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-seayeen-100 rounded-lg flex items-center justify-center">
                            <Icon className="w-7 h-7 text-brand-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-karnchang uppercase font-bold text-brand-dark mb-2">
                            {step.title}
                          </h3>
                          <p className="font-barlow text-brand-gray">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/legal-documents.jpg"
                      alt="Legal documentation"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Third Image and Steps */}
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="order-2 lg:order-1">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/agricultural-land.jpg"
                      alt="Agricultural projects"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-8">
                  {programSteps.slice(7).map((step) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.id} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-seayeen-100 rounded-lg flex items-center justify-center">
                            <Icon className="w-7 h-7 text-brand-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-karnchang uppercase font-bold text-brand-dark mb-2">
                            {step.title}
                          </h3>
                          <p className="font-barlow text-brand-gray">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-dark">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-karnchang uppercase font-bold text-white mb-6">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-xl font-barlow text-seayeen-100 mb-8 max-w-2xl mx-auto">
              Join successful investors who trust Seayeen Group for strategic 
              opportunities in Cambodia&apos;s growing markets.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-brand-primary hover:bg-gray-100">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Download Brochure
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Floating Contact Button */}
      <button
        className="fixed bottom-6 right-6 w-14 h-14 bg-brand-primary hover:bg-seayeen-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-50"
        aria-label="Contact us"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </>
  );
}