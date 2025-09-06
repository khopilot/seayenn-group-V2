import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { 
  TrendingUp, 
  Building2, 
  Sprout, 
  Gavel, 
  HeartPulse,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Investments",
    description: "Strategic investment opportunities across diverse sectors with proven returns",
    icon: TrendingUp,
    link: "/investments",
    color: "blue",
  },
  {
    id: 2,
    title: "Real Estate",
    description: "Premium property development and management in Cambodia's growth markets",
    icon: Building2,
    link: "/investments",
    color: "blue",
  },
  {
    id: 3,
    title: "Agriculture",
    description: "Sustainable agricultural ventures leveraging Cambodia's fertile lands",
    icon: Sprout,
    link: "/agriculture",
    color: "blue",
  },
  {
    id: 4,
    title: "Debt Recovery",
    description: "Professional debt collection and recovery services with legal expertise",
    icon: Gavel,
    link: "/dispute-resolution",
    color: "blue",
  },
  {
    id: 5,
    title: "Medical Repatriation",
    description: "Comprehensive medical evacuation and repatriation services across Asia",
    icon: HeartPulse,
    link: "/medical-repatriation",
    color: "blue",
  },
];

export default function Services() {
  return (
    <section id="services" className="min-h-screen py-32 bg-gradient-to-b from-gray-50 to-white flex items-center">
      <Container>
        <div className="text-center mb-20">
          <span className="text-brand-primary font-barlow font-semibold text-sm uppercase tracking-wider">
            Services Overview
          </span>
          <h2 className="mt-4 text-3xl font-karnchang uppercase font-bold text-brand-dark">Our Main Focus</h2>
          <p className="mt-4 text-base font-barlow text-brand-gray max-w-3xl mx-auto">
            Comprehensive solutions across multiple sectors, delivering excellence in every service we provide
          </p>
        </div>

        {/* Clean grid layout with all 5 services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* First row - 3 core services */}
          {services.slice(0, 3).map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-seayeen-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-karnchang uppercase font-bold text-brand-dark mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm font-barlow text-brand-gray mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-brand-primary font-barlow font-semibold hover:gap-4 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Second row - 2 specialized services centered */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {services.slice(3, 5).map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-seayeen-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-karnchang uppercase font-bold text-brand-dark mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm font-barlow text-brand-gray mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-brand-primary font-barlow font-semibold hover:gap-4 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}