
import React from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

interface ClientLogo {
  name: string;
}

const ClientLogos = () => {
  // Double the logos to create continuous scrolling effect
  const logos: ClientLogo[] = [
    { name: "TechCorp" },
    { name: "InnoSys" },
    { name: "QatarTech" },
    { name: "GulfDigital" },
    { name: "FutureNet" },
    // Duplicate for smooth infinite scrolling
    { name: "TechCorp" },
    { name: "InnoSys" },
    { name: "QatarTech" },
    { name: "GulfDigital" },
    { name: "FutureNet" },
  ];

  return (
    <div className="py-12 border-y border-white/10 bg-xtech-dark-purple/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: false,
          }}
          className="w-full"
        >
          <CarouselContent className="animate-marquee">
            {logos.map((logo, index) => (
              <CarouselItem 
                key={index} 
                className="basis-1/3 md:basis-1/5 pl-6 sm:pl-8 opacity-80 hover:opacity-100 transition-opacity"
              >
                <div className="h-12 bg-gradient-to-r from-white/10 to-white/5 rounded-md flex items-center justify-center text-sm text-white/70 hover:text-white/90 transition-all duration-300 hover:bg-white/10">
                  {logo.name}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default ClientLogos;
