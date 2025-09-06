import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { 
  MessageCircle, 
  TrendingUp,
  Building,
  ArrowRight,
  Shield,
  Users,
  DollarSign
} from "lucide-react";

export default function InvestmentsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-dark via-seayeen-800 to-brand-primary">
        <Container>
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-karnchang uppercase font-bold text-white mb-6">
              Investment Opportunities
            </h1>
            <p className="text-xl font-barlow text-seayeen-100 max-w-3xl mx-auto">
              Discover exceptional investment opportunities in Cambodia&apos;s growing real estate market 
              through our Joint Equity Funds and Sub-Division developments.
            </p>
          </div>
        </Container>
      </section>

      {/* Investment Options */}
      <section className="min-h-[80vh] py-32 bg-white flex items-center">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-brand-primary font-barlow font-semibold text-sm uppercase tracking-wider">
                Choose Your Path
              </span>
              <h2 className="mt-4 text-4xl font-karnchang uppercase font-bold text-brand-dark">
                Investment Programs
              </h2>
              <p className="mt-6 text-lg font-barlow text-brand-gray max-w-3xl mx-auto">
                We offer two distinct investment strategies tailored to different investor profiles and objectives.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Joint Equity Funds */}
              <div className="group">
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <div className="h-64 bg-gradient-to-br from-brand-primary to-seayeen-700 flex items-center justify-center">
                    <div className="text-center">
                      <DollarSign className="w-20 h-20 text-white mx-auto mb-4" />
                      <h3 className="text-2xl font-karnchang uppercase text-white">Joint Equity Funds</h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-xl font-karnchang uppercase font-bold text-brand-dark mb-4">
                      Partnership Investment Model
                    </h4>
                    <p className="font-barlow text-brand-gray mb-6">
                      Join forces with Seayeen Group in strategic land acquisitions and development projects. 
                      Our joint equity model offers shared ownership, reduced risk, and professional management 
                      of high-potential real estate investments.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Shield className="w-5 h-5 text-brand-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="font-barlow text-sm text-brand-gray">Shared risk and reward structure</span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-5 h-5 text-brand-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="font-barlow text-sm text-brand-gray">Professional portfolio management</span>
                      </li>
                      <li className="flex items-start">
                        <Users className="w-5 h-5 text-brand-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="font-barlow text-sm text-brand-gray">Transparent partnership agreements</span>
                      </li>
                    </ul>
                    <Link href="/investments/joint-equity">
                      <Button variant="primary" className="w-full group">
                        Learn More About Joint Equity
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sub-Divisions */}
              <div className="group">
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <div className="h-64 bg-gradient-to-br from-seayeen-600 to-brand-dark flex items-center justify-center">
                    <div className="text-center">
                      <Building className="w-20 h-20 text-white mx-auto mb-4" />
                      <h3 className="text-2xl font-karnchang uppercase text-white">Sub-Divisions</h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-xl font-karnchang uppercase font-bold text-brand-dark mb-4">
                      Residential Development Projects
                    </h4>
                    <p className="font-barlow text-brand-gray mb-6">
                      Invest in premium residential subdivision projects across strategic locations in Cambodia. 
                      Our developments feature modern infrastructure, gated communities, and exceptional growth potential 
                      in emerging markets.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Building className="w-5 h-5 text-brand-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="font-barlow text-sm text-brand-gray">Master-planned communities</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-5 h-5 text-brand-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="font-barlow text-sm text-brand-gray">Secure gated developments</span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-5 h-5 text-brand-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="font-barlow text-sm text-brand-gray">High appreciation potential</span>
                      </li>
                    </ul>
                    <Link href="/investments/sub-divisions">
                      <Button variant="primary" className="w-full group">
                        Explore Sub-Division Projects
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="min-h-[50vh] py-24 bg-brand-primary flex items-center">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-karnchang uppercase font-bold text-white mb-6">
              Start Your Investment Journey Today
            </h2>
            <p className="text-xl font-barlow text-seayeen-100 mb-8 max-w-2xl mx-auto">
              Contact our investment specialists to discuss which program best suits your investment goals.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-brand-primary hover:bg-gray-100">
              Schedule Consultation
            </Button>
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