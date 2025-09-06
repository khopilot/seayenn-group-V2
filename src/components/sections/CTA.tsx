import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="relative min-h-[60vh] py-32 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('/images/cambodia-sunset.jpg')`,
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      
      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-karnchang uppercase font-bold text-white mb-4">
            Transform Your Investments
          </h2>
          <h3 className="text-2xl md:text-3xl font-karnchang uppercase font-bold text-white mb-6">
            with Expert Guidance
          </h3>
          
          <p className="text-base md:text-lg font-barlow text-gray-300 mb-8 leading-relaxed">
            Join leading investors who trust Seayeen Group for strategic opportunities
            in Cambodia&apos;s most promising sectors. Let our expertise guide your success.
          </p>
          
          <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
            Start Today
          </Button>
        </div>
      </Container>
    </section>
  );
}