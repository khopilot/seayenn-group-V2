import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 scale-125"
          src="https://www.youtube-nocookie.com/embed/2kL0BG3IxSk?autoplay=1&mute=1&loop=1&playlist=2kL0BG3IxSk&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&vq=hd1080"
          title="Seayeen Group Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        {/* Very light overlay for minimal text readability enhancement */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative w-full z-10">
        <Container>
          <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-3xl font-karnchang uppercase font-bold tracking-tight text-white sm:text-4xl md:text-5xl drop-shadow-lg">
                Pioneering{" "}
                <span className="text-brand-primary drop-shadow-lg">Investment</span>
              </h1>
              <h2 className="mt-3 text-2xl font-karnchang uppercase font-bold tracking-tight text-white sm:text-3xl md:text-4xl drop-shadow-lg">
                Opportunities In Real Estate,
              </h2>
              <h2 className="mt-2 text-2xl font-karnchang uppercase font-bold tracking-tight text-white sm:text-3xl md:text-4xl drop-shadow-lg">
                Agriculture, And Beyond
              </h2>
              <p className="mt-6 text-base font-barlow leading-7 text-white max-w-2xl mx-auto drop-shadow-md">
                Seayeen Group is your trusted partner for sustainable investment opportunities
                across Cambodia's most promising sectors.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg" variant="default" className="shadow-xl">
                  Explore Opportunities
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary shadow-xl">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}