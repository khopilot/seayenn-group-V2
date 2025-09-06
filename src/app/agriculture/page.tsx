import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { 
  MessageCircle,
  Sprout,
  TrendingUp,
  Shield,
  Users,
  TreePine,
  Apple,
  Wheat
} from "lucide-react";

const agriculturalProjects = [
  {
    id: 1,
    name: "Mango Plantations",
    description: "Premium mango orchards with M23 and endemic species",
    image: "/images/mango-plantation.jpg",
    icon: Apple,
  },
  {
    id: 2,
    name: "Coconut Farms",
    description: "Extensive coconut plantations across strategic locations",
    image: "/images/coconut-farm.jpg",
    icon: TreePine,
  },
  {
    id: 3,
    name: "Rambutan Orchards",
    description: "High-yield rambutan cultivation with modern techniques",
    image: "/images/rambutan-orchard.jpg",
    icon: Sprout,
  },
];

export default function AgriculturePage() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(3,54,79,0.95), rgba(30,109,143,0.85)), url('/images/cambodia-map-agriculture.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container>
          <div className="max-w-3xl">
            <span className="text-seayeen-200 font-barlow text-sm uppercase tracking-wider mb-4 block">
              Embrace Sustainable Investment Opportunities
            </span>
            <h1 className="text-5xl lg:text-6xl font-karnchang uppercase font-bold text-white mb-6">
              Welcome to Seayeen Group&apos;s Agriculture Ventures
            </h1>
            <p className="text-lg font-barlow text-seayeen-100 mb-8 leading-relaxed">
              At Seayeen Group, we&apos;ve pioneered a unique integration of real estate management with agriculture, creating a 
              harmonious balance between profitability and sustainability. Our dedicated agricultural department is tailored to 
              meet the diverse needs of our investors, providing a robust investment partnership equipped with advanced agricultural 
              equipment, expert staff, and comprehensive expertise.
            </p>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary">
              About Us
            </Button>
          </div>
        </Container>
        
        {/* Decorative agricultural icons */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
          <div className="relative w-96 h-96">
            <Wheat className="absolute top-0 right-0 w-32 h-32 text-white" />
            <Sprout className="absolute bottom-20 right-20 w-24 h-24 text-white" />
            <TreePine className="absolute top-32 right-32 w-28 h-28 text-white" />
          </div>
        </div>
      </section>

      {/* Our Diverse Agricultural Projects */}
      <section className="min-h-[60vh] py-28 bg-white flex items-center">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-karnchang uppercase font-bold text-brand-dark mb-6">
              Our Diverse Agricultural Projects
            </h2>
            <p className="text-lg font-barlow text-brand-gray max-w-4xl mx-auto leading-relaxed">
              Venture into our varied agricultural endeavors, where innovation meets tradition. 
              From vast rubber plantations and rich cashew farms featuring both M23 and endemic species 
              to bountiful orchards of mangoes, coconuts, and dragon fruit, every project is designed to flourish. 
              We also cultivate essential crops like cassava, melon, and exotic fruits such as pineapples, rambutans, 
              avocados, and jackfruit, ensuring a wide spectrum of investment opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {agriculturalProjects.map((project) => {
              const Icon = project.icon;
              return (
                <div key={project.id} className="group">
                  <div className="relative h-80 rounded-xl overflow-hidden mb-4">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{
                        backgroundImage: `url('${project.image}')`,
                        backgroundColor: '#687D83'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-6 h-6 text-white" />
                        <h3 className="text-xl font-karnchang uppercase text-white">
                          {project.name}
                        </h3>
                      </div>
                      <p className="text-sm font-barlow text-white/90">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Legally Compliant Section */}
      <section className="min-h-[60vh] py-28 bg-gray-50 flex items-center">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-karnchang uppercase font-bold text-brand-dark mb-8">
                Legally Compliant and Profitable Land Use
              </h2>
              <p className="text-lg font-barlow text-brand-gray mb-8 leading-relaxed">
                In Cambodia, land laws often mandate the utilization of the land by its owners. 
                Seayeen Group strategically uses agriculture as an adjunct component of real estate management. 
                This approach not only adheres to legal requirements but also allows us to hold the land until 
                it qualifies for a hard title upgrade, ensuring your investment is both secure and compliant.
              </p>
              <Button variant="primary" size="lg">
                Learn More
              </Button>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/yT2E5egq2R0?controls=1&modestbranding=1&rel=0"
                title="Legally Compliant and Profitable Land Use"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Earn Income Section */}
      <section className="min-h-[60vh] py-28 bg-white flex items-center">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-5xl font-karnchang uppercase font-bold text-brand-dark mb-8 leading-tight">
                Earn Income While Awaiting Capital Gains
              </h2>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-lg font-barlow text-brand-gray mb-6 leading-relaxed">
                Our innovative projects offer investors the opportunity to generate income from their land holdings, 
                in addition to enjoying long-term capital appreciation. With Seayeen Group, your investment does more 
                than grow—it thrives, providing sustainable income streams while awaiting significant capital gains.
              </p>
              <p className="text-lg font-barlow text-brand-gray mb-8 leading-relaxed">
                Join us at Seayeen Group, where your investment in Cambodia&apos;s fertile lands promises a future of 
                prosperity, sustainability, and growth. Explore how you can become part of this rewarding journey 
                towards a greener, more profitable tomorrow.
              </p>
              <Button variant="primary" size="lg">
                Contact us
              </Button>
            </div>
          </div>
        </Container>
      </section>


      {/* CTA Section */}
      <section className="min-h-[60vh] py-28 bg-gray-50 flex items-center">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-karnchang uppercase font-bold text-brand-dark mb-6">
              Start Your Agricultural Investment Journey
            </h2>
            <p className="text-xl font-barlow text-brand-gray mb-8 max-w-2xl mx-auto">
              Discover how our integrated approach to real estate and agriculture can work for you.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="primary">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
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