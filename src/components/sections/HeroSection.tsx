
import React from "react";
import CTAButton from "@/components/CTAButton";

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Welcome to the future of
            <span className="block gradient-text animate-glow mt-2">technology solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-xtech-light mb-10 max-w-xl mx-auto tracking-wide">
            Transforming Businesses with Cutting-Edge Solutions
          </p>
          <CTAButton to="/services" variant="primary" className="text-lg py-4 px-8 animated-button">Explore Our Services</CTAButton>
        </div>
      </div>
      
      {/* Hero background effects */}
      <div className="absolute -z-10 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-xtech-purple/20 blur-[150px] opacity-40 animate-pulse"></div>
      <div className="absolute -z-10 bottom-0 left-0 w-full h-32 bg-gradient-to-t from-xtech-dark to-transparent"></div>
    </section>
  );
};

export default HeroSection;
