import { Metadata } from "next";
import { 
  Scale,
  FileText,
  Calendar,
  HelpCircle,
  CheckCircle,
  DollarSign,
  Briefcase,
  Users,
  MessageCircle,
  ArrowRight,
  Play,
  Shield,
  Target,
  TrendingUp,
  Gavel
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dispute Resolution & Debt Recovery | Seayeen Group",
  description:
    "Expert debt recovery services in Cambodia. Navigate debt collection with expertise and integrity through our specialized dispute resolution services.",
  openGraph: {
    title: "Dispute Resolution - Seayeen Group",
    description: "Professional debt recovery and dispute resolution services tailored to Cambodia's business environment",
  },
};

export default function DisputeResolutionPage() {
  const consultationSteps = [
    {
      icon: FileText,
      title: "Gather Documentation",
      description: "Start by collecting all pertinent documentation related to your case. This includes contracts, correspondence, invoices, and any evidence of attempted debt recovery. Having your documents organized will expedite the assessment process during your consultation."
    },
    {
      icon: Calendar,
      title: "Schedule a Meeting",
      description: "Use our user-friendly booking system to select a time and date for your consultation. You'll find clear instructions and available slots on our platform, making it easy to find a time that works for you."
    },
    {
      icon: HelpCircle,
      title: "Consultation Preparation",
      description: "Prepare a list of questions or points you wish to discuss. This preparation ensures that your consultation is as productive and informative as possible, allowing us to provide you with a tailored strategy for your debt recovery needs."
    }
  ];

  const expectations = [
    { text: "Comprehensive Documentation Analysis", icon: CheckCircle },
    { text: "Customized Tailored Strategy Design", icon: CheckCircle },
    { text: "Detailed Action Plan Clarity", icon: CheckCircle },
    { text: "Consistent Ongoing Updates", icon: CheckCircle },
    { text: "Focused Success Commitment", icon: CheckCircle },
    { text: "Professional Expert Guidance", icon: CheckCircle }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(3,54,79,0.95), rgba(30,109,143,0.85)), url('/images/cambodia-courthouse.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container>
          <div className="max-w-3xl">
            <span className="text-seayeen-200 font-barlow text-sm uppercase tracking-wider mb-4 block">
              Professional Debt Recovery Services
            </span>
            <h1 className="text-5xl lg:text-6xl font-karnchang uppercase font-bold text-white mb-6">
              Navigating Debt Recovery in Cambodia with Expertise and Integrity
            </h1>
            <p className="text-lg font-barlow text-seayeen-100 mb-8 leading-relaxed">
              At Seayeen Group, we're familiar with the unique challenges of debt recovery within Cambodia's distinct business environment. 
              Our approach, grounded in extensive experience is designed to navigate these complexities effectively. 
              Through our specialized debt recovery services we will implement an effective strategy, which is also tailored to the intricate Cambodian context.
            </p>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary">
              Schedule a Consultation
            </Button>
          </div>
        </Container>
        
        {/* Decorative legal icons */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
          <div className="relative w-96 h-96">
            <Scale className="absolute top-0 right-0 w-32 h-32 text-white" />
            <Gavel className="absolute bottom-20 right-20 w-24 h-24 text-white" />
            <DollarSign className="absolute top-32 right-32 w-28 h-28 text-white" />
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="min-h-[70vh] py-28 bg-gray-50 flex items-center">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            {/* Left: Image */}
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-amber-100 via-amber-50 to-orange-50 rounded-2xl overflow-hidden">
                {/* Temple/Market background placeholder */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                    <Briefcase className="h-12 w-12 text-blue-600 mb-3" />
                    <p className="text-sm text-gray-700 font-medium">
                      Professional Debt Recovery Services
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <span className="text-brand-primary font-barlow text-sm uppercase tracking-wider mb-4 block">
                Professional Service
              </span>
              <h2 className="text-3xl font-karnchang uppercase font-bold text-brand-dark mb-6">
                Personalized Consultation for Tailored Strategies
              </h2>
              <p className="text-brand-gray font-barlow mb-8 leading-relaxed">
                Our commitment is to provide you with a personalized, strategic approach to debt recovery, 
                ensuring solutions that are specifically designed for your unique needs.
              </p>

              <div className="space-y-6">
                {consultationSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-seayeen-100 flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-brand-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-karnchang uppercase font-semibold text-brand-dark mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-brand-gray font-barlow leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What to Expect Section */}
      <section className="min-h-[60vh] py-28 bg-white flex items-center">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div>
                <h2 className="text-4xl font-karnchang uppercase font-bold text-brand-dark mb-6">
                  What to Expect:<br />
                  Consultation to<br />
                  Resolution
                </h2>
                <p className="text-brand-gray font-barlow mb-10 leading-relaxed">
                  After scheduling your consultation, you'll embark on a clear, guided path with Seayeen Group 
                  towards resolving your debt collection needs. During the consultation, we'll delve into the details 
                  of your case, leveraging our expertise to evaluate the best course of action. You'll receive:
                </p>

                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {expectations.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm font-barlow text-brand-gray">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Video/Image Placeholder */}
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden relative group cursor-pointer">
                  {/* Office Interior Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/80 to-seayeen-700/80" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-brand-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-10 w-10 text-white ml-1" fill="white" />
                    </div>
                  </div>

                  {/* Professional Standing Image Overlay */}
                  <div className="absolute bottom-0 right-0 w-1/3 h-full">
                    <div className="relative h-full flex items-end justify-end p-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="min-h-[50vh] py-24 bg-gradient-to-br from-brand-dark to-seayeen-700 flex items-center">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Scale className="h-16 w-16 text-seayeen-300 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-karnchang uppercase font-bold text-white mb-6">
              Ready to Resolve Your Dispute?
            </h2>
            <p className="text-xl font-barlow text-seayeen-100 mb-10 leading-relaxed">
              Take the first step towards successful debt recovery with Cambodia's trusted experts. 
              Our team is ready to provide you with the strategic guidance and support you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-brand-dark hover:bg-gray-100 font-semibold px-8"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center justify-center gap-8 text-seayeen-200">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-barlow">Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                <span className="text-sm font-barlow">Results-Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                <span className="text-sm font-barlow">Proven Success</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}