import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { 
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building,
  Globe,
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Seayeen Group",
  description:
    "Get in touch with Seayeen Group for investment opportunities, real estate, agriculture, and business services in Cambodia.",
  openGraph: {
    title: "Contact - Seayeen Group",
    description: "Connect with our expert team for investment and business solutions in Cambodia",
  },
};

const offices = [
  {
    id: 1,
    name: "Phnom Penh Head Office",
    address: "Street 271, Sangkat Boeung Tumpun II, Khan Mean Chey, Phnom Penh, Cambodia",
    phone: "+855 23 123 456",
    email: "info@seayeengroup.com",
    hours: "Monday - Friday: 8:00 AM - 5:00 PM",
    icon: Building,
  },
  {
    id: 2,
    name: "Ratanakiri Regional Office",
    address: "National Road 78, Banlung, Ratanakiri Province, Cambodia",
    phone: "+855 75 123 456",
    email: "ratanakiri@seayeengroup.com",
    hours: "Monday - Friday: 8:00 AM - 5:00 PM",
    icon: MapPin,
  },
];

const contactReasons = [
  "Investment Opportunities",
  "Real Estate Inquiries",
  "Agricultural Projects",
  "Medical Repatriation Services",
  "Debt Recovery Assistance",
  "Partnership Proposals",
  "General Inquiries",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(3,54,79,0.95), rgba(30,109,143,0.85)), url('/images/cambodia-contact.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container>
          <div className="max-w-3xl">
            <span className="text-seayeen-200 font-barlow text-sm uppercase tracking-wider mb-4 block">
              Get in Touch
            </span>
            <h1 className="text-5xl lg:text-6xl font-karnchang uppercase font-bold text-white mb-6">
              Contact Seayeen Group
            </h1>
            <p className="text-lg font-barlow text-seayeen-100 mb-8 leading-relaxed">
              Whether you&apos;re looking for investment opportunities, need assistance with our services, 
              or want to explore partnership possibilities, our expert team is here to help you navigate 
              Cambodia&apos;s dynamic business landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary">
                Schedule Consultation
              </Button>
              <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
                Call Us Now
              </Button>
            </div>
          </div>
        </Container>
        
        {/* Decorative icons */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
          <div className="relative w-96 h-96">
            <MessageCircle className="absolute top-0 right-0 w-32 h-32 text-white" />
            <Globe className="absolute bottom-20 right-20 w-24 h-24 text-white" />
            <Users className="absolute top-32 right-32 w-28 h-28 text-white" />
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="min-h-[80vh] py-28 bg-white flex items-center">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-karnchang uppercase font-bold text-brand-dark mb-6">
                Send Us a Message
              </h2>
              <p className="text-brand-gray font-barlow mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-barlow font-medium text-brand-dark mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-barlow font-medium text-brand-dark mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-barlow font-medium text-brand-dark mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-barlow font-medium text-brand-dark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                    placeholder="+855 XX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-barlow font-medium text-brand-dark mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                  >
                    <option value="">Select a topic</option>
                    {contactReasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-barlow font-medium text-brand-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-karnchang uppercase font-bold text-brand-dark mb-6">
                Get in Touch
              </h2>
              <p className="text-brand-gray font-barlow mb-8">
                Have questions? We&apos;re here to help and answer any question you might have.
              </p>

              {/* Quick Contact Info */}
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-seayeen-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-karnchang uppercase font-bold text-brand-dark mb-2">Call Us</h3>
                    <p className="text-brand-gray font-barlow">+855 23 123 456</p>
                    <p className="text-brand-gray font-barlow">+855 75 123 456</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-seayeen-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-karnchang uppercase font-bold text-brand-dark mb-2">Email Us</h3>
                    <p className="text-brand-gray font-barlow">info@seayeengroup.com</p>
                    <p className="text-brand-gray font-barlow">support@seayeengroup.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-seayeen-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-karnchang uppercase font-bold text-brand-dark mb-2">Office Hours</h3>
                    <p className="text-brand-gray font-barlow">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-brand-gray font-barlow">Saturday: 8:00 AM - 12:00 PM</p>
                    <p className="text-brand-gray font-barlow">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="font-karnchang uppercase font-bold text-brand-dark mb-4">
                  Why Choose Seayeen Group?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-brand-gray font-barlow">Over 10 years of experience in Cambodia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-brand-gray font-barlow">Trusted by hundreds of investors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-brand-gray font-barlow">Comprehensive business solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-brand-gray font-barlow">Local expertise with global standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-brand-gray font-barlow">24/7 support for urgent matters</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Office Locations Section */}
      <section className="min-h-[60vh] py-28 bg-gray-50 flex items-center">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-karnchang uppercase font-bold text-brand-dark mb-6">
              Our Office Locations
            </h2>
            <p className="text-lg font-barlow text-brand-gray max-w-3xl mx-auto">
              Visit us at our offices in Phnom Penh and Ratanakiri for in-person consultations 
              and meetings with our expert team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {offices.map((office) => {
              const Icon = office.icon;
              return (
                <div key={office.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Map Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-seayeen-100 to-seayeen-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapPin className="w-16 h-16 text-brand-primary opacity-30" />
                    </div>
                  </div>
                  
                  {/* Office Info */}
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-karnchang uppercase font-bold text-brand-dark mb-2">
                          {office.name}
                        </h3>
                        <p className="text-brand-gray font-barlow text-sm">
                          {office.address}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-brand-primary" />
                        <span className="text-brand-gray font-barlow">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-brand-primary" />
                        <span className="text-brand-gray font-barlow">{office.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-brand-primary" />
                        <span className="text-brand-gray font-barlow">{office.hours}</span>
                      </div>
                    </div>

                    <Button className="w-full mt-6" variant="outline">
                      Get Directions
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="min-h-[50vh] py-24 bg-gradient-to-br from-brand-dark to-seayeen-700 flex items-center">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <MessageCircle className="h-16 w-16 text-seayeen-300 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-karnchang uppercase font-bold text-white mb-6">
              Ready to Start a Conversation?
            </h2>
            <p className="text-xl font-barlow text-seayeen-100 mb-10 leading-relaxed">
              Our team is ready to assist you with your investment and business needs in Cambodia. 
              Let&apos;s work together to achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-brand-dark hover:bg-gray-100 font-semibold px-8"
              >
                Schedule a Meeting
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                Download Company Profile
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