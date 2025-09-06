import type { Metadata } from "next";
import { 
  Plane, 
  Heart, 
  Users, 
  Globe, 
  MessageCircle,
  CheckCircle,
  Activity,
  Stethoscope,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { brandColors } from "@/config/branding";

export const metadata: Metadata = {
  title: "Medical Repatriation Services | Seayeen Group",
  description:
    "Professional medical repatriation services in Cambodia. Our expertise in handling logistical challenges ensures patients receive the highest quality service in their time of need.",
  openGraph: {
    title: "Medical Repatriation - Seayeen Group",
    description: "Trust us to manage your medical repatriation with professionalism and empathy",
  },
};

export default function MedicalRepatriationPage() {
  const certifications = [
    "Critical Care Transport (AAMS AACU-Aus)",
    "Critical Care Flight Medicine Japan",
    "Advanced Aeromedical UK",
    "Emergency Transport Africa Helicopter",
    "Helicopter Underwater Escape Training",
    "Fundamental Critical Care Support - USA",
    "Pediatric Fundamental Critical Care Support USA",
    "ATLS USA Instructor, American Heart Association",
    "Advanced Trauma Life Support",
    "Pre-Hospital Trauma Life Support",
    "Advanced Paratrooper Life Support",
    "Pediatric Advanced Life Support",
    "Neonatal Resuscitation",
    "ETRAU Specialist Training Hong Kong",
    "Underwater Medicine Operations Maritime Royal Thai Navy",
    "Disaster Medicine",
    "Fire Crew and Standby Life Support",
    "Advanced South Flight Mission",
    "Advanced Water Rescue Aus Canada",
    "Advanced Fire Rescue Certificate",
    "Jungle Survival and Life Survival",
    "Advanced Parachutist Life Support",
    "Flight Medicine Certificate",
    "Aviation & Rescue Diving JPAC",
    "People Control Capability (Non-Violence)",
    "Completing EMR Reach Thai Team",
    "Plague Peru",
    "Fire Full Trafficking Support",
    "HPA Extreme Medicine Game",
    "Strong Medicine Medical Examiner Royal Thai Navy",
    "VBR Services and National Plan (USA)"
  ];

  const services = [
    {
      icon: Activity,
      title: "Emergency Medical Transport",
      description: "24/7 emergency medical transportation with fully equipped air and ground ambulances"
    },
    {
      icon: Stethoscope,
      title: "Medical Escort Services",
      description: "Qualified medical escorts for commercial flights with continuous medical monitoring"
    },
    {
      icon: Globe,
      title: "Ground Ambulance Services",
      description: "Professional ground ambulance services across Cambodia and neighboring countries"
    }
  ];

  const processSteps = [
    {
      title: "Initial Consultation",
      description: "The first step in our medical repatriation process involves a detailed assessment of the patient&apos;s condition and requirements. Our team works closely with families and healthcare providers to plan the safest and most efficient repatriation strategy."
    },
    {
      title: "Coordination with Medical Facilities",
      description: "We liaise with medical facilities both at the departure point and the destination to ensure a seamless care transition. Our team handles all communications and arrangements, focusing on the patient&apos;s health and safety."
    },
    {
      title: "Handling Logistics",
      description: "Navigating the logistics of medical repatriation can be complex. Seayeen Group manages all aspects, including flight bookings, ground transportation, and necessary documentation, to streamline the repatriation process."
    },
    {
      title: "Continuous Support",
      description: "Our commitment to patients and their families extends beyond transportation. We provide ongoing communication and support throughout the repatriation process, ensuring peace of mind during a stressful time."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Map Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Map Background */}
        <div 
          className="absolute inset-0 opacity-90"
          style={{
            background: `linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.darkBlue} 100%)`,
          }}
        />
        
        {/* Map Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 50h100M50 0v100' stroke='%23fff' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />

        {/* Medical Cross Pattern */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <Heart className="h-96 w-96 text-white/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Plane className="h-32 w-32 text-white/10 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-karnchang uppercase font-bold text-white mb-4">
              Medical<br />
              Repatriation<br />
              Services
            </h1>
            <h2 className="text-3xl font-karnchang uppercase text-white/90 mb-6">
              by Seayeen Group
            </h2>
            <p className="text-lg font-barlow text-white/80 mb-8 leading-relaxed">
              Our experience and global network make us a leader in medical repatriation services. 
              Our team&apos;s expertise in handling logistical challenges combined with our commitment 
              to compassionate care ensures patients receive the highest quality service in their 
              time of need. Trust us to manage your medical repatriation with professionalism and empathy.
            </p>
            <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
              Make An Enquiry
            </Button>
          </div>
        </div>

        {/* Contact Badge */}
        <div className="absolute bottom-8 right-8 bg-white rounded-lg shadow-lg px-4 py-2 flex items-center gap-2">
          <span className="text-sm text-gray-700">Contact us</span>
          <MessageCircle className="h-4 w-4 text-brand-primary" />
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-[60vh] py-28 bg-gray-50 flex items-center">
        <Container>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Medical Repatriation
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-seayeen-100">
                  <service.icon className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <button className="mt-6 text-brand-primary text-sm font-medium hover:text-seayeen-700">
                  Read to More →
                </button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Doctor Image and Certifications */}
      <section className="min-h-[50vh] py-24 flex items-center">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            {/* Doctor Info */}
            <div>
              <div className="bg-gradient-to-br from-seayeen-50 to-white rounded-2xl p-8 shadow-lg">
                <div className="aspect-[3/4] bg-gradient-to-br from-seayeen-100 to-seayeen-50 rounded-xl mb-6 flex items-end justify-center overflow-hidden">
                  {/* Placeholder for doctor image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <Stethoscope className="h-32 w-32 text-seayeen-200" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Dr. Sura Jaidewatee
                  </h3>
                  <p className="text-gray-600">Flight Medical Director</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Certifications
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="min-h-[60vh] py-28 bg-gradient-to-br from-seayeen-50 to-white flex items-center">
        <Container>
          <div className="max-w-6xl mx-auto">
            <p className="text-brand-primary text-center mb-4 font-barlow">Emergency Medical Transport services</p>
            <h2 className="text-4xl font-karnchang uppercase font-bold text-center text-brand-dark mb-16">
              The Process
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Medical Team Image */}
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-brand-primary to-brand-dark rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="h-32 w-32 text-white/30" />
                  </div>
                </div>
              </div>

              {/* Process Steps */}
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-seayeen-100 flex items-center justify-center">
                        {index === 0 && <Briefcase className="h-6 w-6 text-brand-primary" />}
                        {index === 1 && <Heart className="h-6 w-6 text-brand-primary" />}
                        {index === 2 && <Globe className="h-6 w-6 text-brand-primary" />}
                        {index === 3 && <Users className="h-6 w-6 text-brand-primary" />}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
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

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-seayeen-700 to-brand-dark" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <Container className="relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-seayeen-200 font-barlow mb-4">Why Choose Seayeen Group</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Our experience and global network make us a leader in medical repatriation services. 
              Our team&apos;s expertise in handling logistical challenges combined with our commitment 
              to compassionate care ensures patients receive the highest quality service in their 
              time of need. Trust us to manage your medical repatriation with professionalism and empathy.
            </h2>
            
            <Button 
              size="lg" 
              className="bg-white text-brand-primary hover:bg-gray-100 font-semibold px-8 shadow-lg"
            >
              CONTACT US
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}