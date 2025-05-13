
import React from "react";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative fade-in-section opacity-0">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Customers Reviews" 
          tag="REVIEWS" 
          align="center"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="XTech has been an amazing partner for me. Their solutions are easy to use and have transformed our operations."
            author="Yury"
            role="CTO"
            company="TechFirm"
          />
          
          <TestimonialCard 
            quote="I never realized how much we were wasting on unnecessary IT expenses until we started using XTech's services."
            author="Aryan"
            role="CEO"
            company="InnoSys"
          />
          
          <TestimonialCard 
            quote="Such a professional team and excellent solutions. Would highly recommend XTech to anyone seeking IT services."
            author="Arim"
            role="Operations Director"
            company="GlobalTech"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
