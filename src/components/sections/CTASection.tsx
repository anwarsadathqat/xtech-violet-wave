
import React from "react";
import CTAButton from "@/components/CTAButton";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-xtech-dark-purple/50 to-xtech-dark relative fade-in-section opacity-0">
      <div className="absolute -z-10 top-0 left-0 w-full h-32 bg-gradient-to-b from-xtech-dark to-transparent"></div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text animate-glow">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xtech-light text-xl max-w-2xl mx-auto mb-10">
          Contact us today to learn how XTech can help your business achieve its goals with our cutting-edge technology solutions.
        </p>
        <CTAButton to="/contact" className="mx-auto text-lg py-4 px-8 animated-button">Schedule a Consultation</CTAButton>
      </div>
    </section>
  );
};

export default CTASection;
