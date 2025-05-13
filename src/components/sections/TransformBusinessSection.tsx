
import React from "react";
import CTAButton from "@/components/CTAButton";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const TransformBusinessSection = () => {
  return (
    <section className="py-24 relative fade-in-section opacity-0">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-8">
              <span className="text-sm uppercase tracking-wider text-xtech-blue mb-2 block">
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Transforming Businesses with{" "}
                <span className="gradient-text">Cutting-Edge Solutions</span>
              </h2>
              <p className="text-xtech-light mb-6 text-lg">
                At XTech, we specialize in providing innovative software solutions that empower 
                businesses to streamline operations, enhance productivity, and achieve their goals 
                efficiently. Discover how our solutions can transform your business today.
              </p>
            </div>
            <p className="mb-8 text-xtech-light">
              XTech, a pioneer in the tech industry, excels in delivering groundbreaking 
              IT services and software solutions tailored to your business needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton to="/services" className="animated-button">Explore Our Solutions</CTAButton>
              <CTAButton to="/about" variant="secondary">Learn More <ArrowRight size={16} /></CTAButton>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative transform transition-all duration-700 hover:scale-105">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-xtech-purple/20 blur-[100px] opacity-60"></div>
            <div className="relative bg-gradient-to-bl from-xtech-purple/20 to-xtech-blue/20 rounded-2xl p-1 hover:from-xtech-purple/30 hover:to-xtech-blue/30 transition-all duration-500 shadow-lg shadow-xtech-purple/10">
              <div className="bg-xtech-dark-purple rounded-xl overflow-hidden">
                <AspectRatio ratio={4/3} className="bg-xtech-dark-purple">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                    alt="Technology Solutions" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 opacity-95"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -z-10 bottom-0 left-0 w-full h-32 bg-gradient-to-t from-xtech-dark-purple/30 to-transparent"></div>
    </section>
  );
};

export default TransformBusinessSection;
