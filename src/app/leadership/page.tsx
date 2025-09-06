import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Brett Gaulding",
    role: "Founder & CEO",
    image: "/images/brett-gaulding.jpg",
    description: "Leading with vision and expertise in Cambodia's investment landscape for over a decade.",
  },
  {
    id: 2,
    name: "Sinat Hour",
    role: "General Manager",
    image: "/images/sinat-hour.jpg",
    description: "Strategic operations leader driving excellence across all business divisions.",
  },
  {
    id: 3,
    name: "Set Chhale",
    role: "Provincial Manager",
    subRole: "Ratanakiri",
    image: "/images/set-chhale.jpg",
    description: "Managing regional operations and investment opportunities in Ratanakiri province.",
  },
  {
    id: 4,
    name: "Rou Sophath",
    role: "Agro-Business Consultant",
    image: "/images/rou-sophath.jpg",
    description: "Expert in agricultural investments and sustainable farming practices.",
  },
  {
    id: 5,
    name: "Pov Choeung",
    role: "Head of Agriculture",
    image: "/images/pov-choeung.jpg",
    description: "Leading agricultural projects and land development initiatives.",
  },
  {
    id: 6,
    name: "Lim Theavy",
    role: "Property Land Manager",
    image: "/images/lim-theavy.jpg",
    description: "Overseeing land acquisitions and property portfolio management.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/cambodia-landscape-2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-karnchang uppercase font-bold mb-6">Our Leadership</h1>
          <Button variant="secondary" className="bg-brand-primary text-white hover:bg-seayeen-700">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-karnchang uppercase font-bold text-brand-dark mb-8">
                Our Journey
              </h2>
              <p className="text-lg font-barlow text-brand-gray mb-6 leading-relaxed">
                The Seayeen Group story began with Brett Goulding&apos;s vision in the lush 
                landscapes of North-Eastern Cambodia. With a desire to harness the 
                region&apos;s rich agricultural and real estate potential, the company rapidly expanded 
                into diverse sectors.
              </p>
              <p className="text-lg font-barlow text-brand-gray leading-relaxed">
                Today the group stands as a testament to enduring commitment and visionary 
                leadership. Poised to set new benchmarks, we continue to contribute to 
                Cambodia&apos;s growth story and its future of limitless possibilities.
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/yT2E5egq2R0?controls=1&modestbranding=1&rel=0"
                title="Our Journey - Seayeen Group"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="min-h-[80vh] py-32 bg-gray-50 flex items-center">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-karnchang uppercase font-bold text-brand-dark mb-4">Meet Our Team</h2>
            <p className="text-xl font-barlow text-brand-gray max-w-3xl mx-auto">
              Our experienced leadership team brings decades of combined expertise in 
              investment, real estate, and agricultural development across Cambodia.
            </p>
          </div>

          {/* Top Leadership */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
            {teamMembers.slice(0, 2).map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-w-4 aspect-h-5 bg-gray-200">
                  <div className="w-full h-96 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto bg-gray-500 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-karnchang uppercase font-bold text-brand-dark mb-2">{member.name}</h3>
                  <p className="text-brand-primary font-barlow font-semibold mb-4">{member.role}</p>
                  <p className="font-barlow text-brand-gray">{member.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.slice(2).map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="aspect-w-3 aspect-h-4 bg-gray-200">
                  <div className="w-full h-80 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto bg-gray-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-karnchang uppercase font-bold text-brand-dark mb-1">{member.name}</h3>
                  <p className="text-brand-primary font-barlow font-semibold text-sm mb-1">{member.role}</p>
                  {member.subRole && (
                    <p className="text-brand-gray font-barlow text-sm mb-3">{member.subRole}</p>
                  )}
                  <p className="font-barlow text-brand-gray text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="min-h-[40vh] py-20 bg-brand-primary flex items-center">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-karnchang uppercase font-bold text-white mb-4">
              Ready to Partner with Our Team?
            </h2>
            <p className="text-xl font-barlow text-seayeen-100 mb-8 max-w-2xl mx-auto">
              Let our experienced leadership guide your investment journey in Cambodia.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-brand-primary hover:bg-gray-100">
              Get in Touch
            </Button>
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