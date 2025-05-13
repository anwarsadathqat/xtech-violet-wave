
import React from "react";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import { Code, Star, Triangle } from "lucide-react";

const SolutionsSection = () => {
  return (
    <section className="py-24 bg-xtech-dark-purple/50 relative fade-in-section opacity-0">
      <div className="absolute -z-10 top-0 left-0 w-full h-32 bg-gradient-to-b from-xtech-dark to-transparent"></div>
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Innovative Problem-Solving for Your Business Needs" 
          tag="SOLUTIONS" 
          align="left"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <FeatureCard 
            title="Focusing on Your Business"
            description="We start by gaining a deep understanding of your business goals and challenges."
            icon={<Code size={48} className="text-xtech-purple" />}
            className="transform hover:-translate-y-3 transition-all duration-500"
          />
          
          <FeatureCard 
            title="Developing Tailored Solutions"
            description="Our team of experts develops customized solutions that address your specific needs."
            icon={<Star size={48} className="text-xtech-blue" />}
            className="transform hover:-translate-y-3 transition-all duration-500"
          />
          
          <FeatureCard 
            title="Scalability and Innovation"
            description="We leverage cutting-edge technology to implement solutions that grow with your business."
            icon={<Triangle size={48} className="text-xtech-purple" />}
            className="transform hover:-translate-y-3 transition-all duration-500"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm uppercase tracking-wider text-xtech-blue mb-2 block">
              INNOVATE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Transforming Businesses with{" "}
              <span className="text-xtech-blue">Cutting-Edge Solutions</span>
            </h2>
            <p className="text-xtech-light text-lg">
              At XTech, we specialize in providing innovative software solutions that empower 
              businesses to streamline operations, enhance productivity, and achieve their goals 
              efficiently. Discover how our solutions can transform your business today.
            </p>
          </div>
          
          <div className="relative transform transition-all duration-700 hover:scale-105">
            <div className="absolute -inset-1 bg-gradient-to-r from-xtech-purple/50 to-xtech-blue/50 rounded-lg blur-md opacity-30"></div>
            <div className="relative bg-xtech-dark-purple rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                alt="Modern Building" 
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -z-10 bottom-0 left-0 w-full h-32 bg-gradient-to-t from-xtech-dark to-transparent"></div>
    </section>
  );
};

export default SolutionsSection;
