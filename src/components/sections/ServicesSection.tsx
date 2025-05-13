
import React from "react";
import { ArrowRight } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import FeatureCard from "@/components/FeatureCard";
import SectionTitle from "@/components/SectionTitle";
import { Code, Star, Triangle } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-24 relative fade-in-section opacity-0">
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-xtech-blue/10 blur-[150px] opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Services" 
          tag="SERVICES"
          align="center"
        />
        
        <div className="flex flex-col items-center mb-16">
          <div className="bg-gradient-to-br from-blue-600/20 to-indigo-800/20 p-8 rounded-xl w-full max-w-2xl border border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 transform-gpu hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-4 text-white">Software Solutions</h3>
            <p className="text-blue-100 mb-6">
              We develop custom software solutions tailored to your specific business needs, leveraging cutting-edge technologies to deliver exceptional results.
            </p>
            <CTAButton to="/services" variant="secondary" className="inline-flex animated-button">
              Learn More
            </CTAButton>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Digital Transformation"
            description="Comprehensive digital transformation services to revolutionize your business operations."
            icon={<Code size={48} className="text-xtech-purple" />}
            className="transform hover:-translate-y-2 hover:shadow-lg hover:shadow-xtech-purple/30 transition-all duration-500"
          />
          
          <FeatureCard 
            title="Cloud Solutions"
            description="Secure and scalable cloud infrastructure tailored to your business requirements."
            icon={<Star size={48} className="text-xtech-blue" />}
            className="transform hover:-translate-y-2 hover:shadow-lg hover:shadow-xtech-blue/30 transition-all duration-500"
          />
          
          <FeatureCard 
            title="AI Implementation"
            description="Cutting-edge artificial intelligence solutions to drive business innovation."
            icon={<Triangle size={48} className="text-xtech-purple" />}
            className="transform hover:-translate-y-2 hover:shadow-lg hover:shadow-xtech-purple/30 transition-all duration-500"
          />
        </div>
        
        <div className="text-center mt-12">
          <CTAButton to="/services" variant="secondary" className="animated-button">
            View All Services
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
