import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Globe, TrendingUp, Handshake, Target } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Reach, Local Impact",
    description: "Operating across Cambodia with international standards",
  },
  {
    icon: Target,
    title: "Sustainable Investments",
    description: "Focus on long-term value creation and sustainability",
  },
  {
    icon: TrendingUp,
    title: "A Journey of Growth",
    description: "Continuous expansion and portfolio diversification",
  },
  {
    icon: Handshake,
    title: "Partnerships and Leadership",
    description: "Building strong relationships with stakeholders",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <span className="text-brand-primary font-barlow font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="mt-4 text-3xl font-karnchang uppercase font-bold text-brand-dark">
            Welcome to Seayeen Group
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Image
                src="/images/team-member.jpg"
                alt="Seayeen Group Team Member"
                width={400}
                height={500}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>

          <div>
            <p className="text-lg font-barlow text-brand-dark mb-6 font-medium">
              Your partner for sustainable investment opportunities in Cambodia.
            </p>
            <p className="text-base font-barlow text-brand-gray mb-8 leading-relaxed">
              From Ratanakiri to Mondulkiri, we&apos;re pioneering growth with integrity.
              Seayeen Group has established itself as a leader among Asia&apos;s investment
              firms, leveraging the fast-growing potential of Cambodia&apos;s North-East.
              Our strategic position and innovative programs offer unique investment opportunities.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-brand-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-barlow font-semibold text-brand-dark text-sm mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm font-barlow text-brand-gray">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-seayeen-50 border-l-4 border-brand-primary p-5 rounded-r-lg mb-8">
              <p className="text-brand-gray font-barlow italic text-sm">
                &quot;Real Estate in Cambodia: A Golden Opportunity for Your Next Investment.
                Discover the potential.&quot;
              </p>
            </div>

            <Button variant="primary" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}