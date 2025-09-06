import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { 
  MessageCircle, 
  MapPin,
  TrendingUp,
  Shield,
  Users,
  Building,
  Trees
} from "lucide-react";

const subdivisionFeatures = [
  {
    id: 1,
    title: "Strategic Location",
    description: "Prime locations selected for maximum growth potential and accessibility to key amenities.",
    icon: MapPin,
  },
  {
    id: 2,
    title: "Gated Communities",
    description: "Secure, well-planned communities with 24/7 security and controlled access.",
    icon: Shield,
  },
  {
    id: 3,
    title: "Modern Infrastructure",
    description: "Complete infrastructure including roads, utilities, and community facilities.",
    icon: Building,
  },
  {
    id: 4,
    title: "Green Spaces",
    description: "Thoughtfully designed with parks, gardens, and recreational areas for quality living.",
    icon: Trees,
  },
  {
    id: 5,
    title: "Investment Growth",
    description: "High appreciation potential in Cambodia's rapidly developing real estate market.",
    icon: TrendingUp,
  },
  {
    id: 6,
    title: "Community Living",
    description: "Foster a sense of community with shared amenities and social spaces.",
    icon: Users,
  },
];

export default function SubDivisionsPage() {
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
                SUB-DIVISIONS
              </h2>
              <h2 className="text-4xl lg:text-5xl font-karnchang uppercase font-bold text-brand-dark mb-8">
                DEVELOPMENT
              </h2>
              <p className="text-xl font-barlow text-brand-gray mb-8 font-semibold">
                CREATING COMMUNITIES OF TOMORROW
              </p>
              <Button size="lg" variant="primary">
                EXPLORE PROJECTS
              </Button>
              <div className="w-1 h-20 bg-brand-primary mt-8"></div>
            </div>
          </div>

          {/* Right Image */}
          <div 
            className="relative bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/subdivision-aerial.jpg')`,
              backgroundColor: '#687D83'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-brand-primary font-barlow font-semibold text-sm uppercase tracking-wider">
              Land Development
            </span>
            <h2 className="mt-4 text-4xl font-karnchang uppercase font-bold text-brand-dark">
              Subdivision Projects
            </h2>
            <p className="mt-6 text-lg font-barlow text-brand-gray">
              Seayeen Group specializes in developing premium residential subdivisions across Cambodia. 
              Our projects combine strategic location selection, modern infrastructure, and sustainable 
              design to create thriving communities that offer exceptional value for homeowners and investors alike.
            </p>
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-karnchang uppercase font-bold text-brand-dark">
                Why Choose Our Subdivisions
              </h2>
              <p className="mt-4 text-lg font-barlow text-brand-gray max-w-3xl mx-auto">
                Our subdivisions are carefully planned to provide the perfect balance of comfort, 
                convenience, and investment potential.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subdivisionFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-seayeen-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-brand-primary" />
                    </div>
                    <h3 className="text-xl font-karnchang uppercase font-bold text-brand-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-brand-gray font-barlow">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-karnchang uppercase font-bold text-brand-dark">
                Our Development Process
              </h2>
              <p className="mt-4 text-lg font-barlow text-brand-gray max-w-3xl mx-auto">
                From land acquisition to final handover, we manage every aspect of subdivision development
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-karnchang uppercase font-bold text-brand-dark mb-2">Land Selection</h3>
                <p className="text-sm font-barlow text-brand-gray">
                  Strategic location analysis and due diligence
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-karnchang uppercase font-bold text-brand-dark mb-2">Master Planning</h3>
                <p className="text-sm font-barlow text-brand-gray">
                  Comprehensive design and infrastructure planning
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-karnchang uppercase font-bold text-brand-dark mb-2">Development</h3>
                <p className="text-sm font-barlow text-brand-gray">
                  Quality construction and utility installation
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-karnchang uppercase font-bold text-brand-dark mb-2">Sales & Handover</h3>
                <p className="text-sm font-barlow text-brand-gray">
                  Marketing, sales, and property transfer
                </p>
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
              Invest in Cambodia&apos;s Future
            </h2>
            <p className="text-xl font-barlow text-seayeen-100 mb-8 max-w-2xl mx-auto">
              Join us in developing premium residential communities that shape the future of Cambodia&apos;s real estate landscape.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-brand-primary hover:bg-gray-100">
                View Current Projects
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
        className="fixed bottom-6 right-6 w-14 h-14 bg-brand-primary hover:bg-seayeen-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-50"
        aria-label="Contact us"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </>
  );
}