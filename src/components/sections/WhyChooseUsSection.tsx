
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Triangle, Star, ExternalLink, Lightbulb, Layers, Brain, LineChart, Database } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

// Modern animated tech icon component
const AnimatedTechIcon = ({ children, delay = 0, color = "purple" }) => {
  const baseColor = color === "purple" ? "xtech-purple" : "blue-600";
  
  return (
    <div className="flex justify-center">
      <div 
        className={`relative h-24 w-24 rounded-full bg-${baseColor}/20 flex items-center justify-center animate-glow`}
        style={{ animationDelay: `${delay}s` }}
      >
        <div className={`h-16 w-16 bg-${baseColor}/10 rounded-xl flex items-center justify-center relative overflow-hidden group transition-all duration-500 hover:scale-110`}>
          {/* Animated circuit lines */}
          <div className="absolute inset-0 opacity-30">
            {/* Horizontal lines */}
            <div className={`absolute top-1/4 left-0 w-full h-[1px] bg-${baseColor}/50`}></div>
            <div className={`absolute top-3/4 left-0 w-full h-[1px] bg-${baseColor}/50`}></div>
            {/* Vertical lines */}
            <div className={`absolute left-1/4 top-0 h-full w-[1px] bg-${baseColor}/50`}></div>
            <div className={`absolute left-3/4 top-0 h-full w-[1px] bg-${baseColor}/50`}></div>
          </div>
          
          {/* Digital dots */}
          <div className={`absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-${baseColor}/80 group-hover:opacity-100 opacity-0 transition-opacity duration-300 delay-100`}></div>
          <div className={`absolute top-1/4 left-3/4 w-1 h-1 rounded-full bg-${baseColor}/80 group-hover:opacity-100 opacity-0 transition-opacity duration-300 delay-200`}></div>
          <div className={`absolute top-3/4 left-1/4 w-1 h-1 rounded-full bg-${baseColor}/80 group-hover:opacity-100 opacity-0 transition-opacity duration-300 delay-300`}></div>
          <div className={`absolute top-3/4 left-3/4 w-1 h-1 rounded-full bg-${baseColor}/80 group-hover:opacity-100 opacity-0 transition-opacity duration-300 delay-400`}></div>
          
          {/* Icon */}
          <div className="relative z-10 text-white group-hover:scale-110 transform transition-transform duration-300">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

// Data flow animation component
const DataFlowAnimation = ({ color = "purple" }) => {
  const baseColor = color === "purple" ? "xtech-purple" : "blue-600";
  
  return (
    <div className="h-32 flex items-center justify-center">
      <div className={`relative w-full max-w-xs h-16 rounded-lg border border-${baseColor}/30 bg-${baseColor}/5 overflow-hidden`}>
        {/* Data packets */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className={`absolute h-3 w-3 rounded-full bg-${baseColor}/90`}
            style={{
              left: `-10px`,
              top: `${12 + (i * 12)}px`,
              animation: `dataFlow 4s linear ${i * 1.2}s infinite`
            }}
          ></div>
        ))}
        
        {/* Connection nodes */}
        <div className={`absolute h-2 w-2 rounded-full bg-${baseColor}/70 top-1/4 left-1/4`}></div>
        <div className={`absolute h-2 w-2 rounded-full bg-${baseColor}/70 top-2/3 left-2/3`}></div>
        <div className={`absolute h-2 w-2 rounded-full bg-${baseColor}/70 top-3/4 left-1/3`}></div>
        
        <style>
          {`
          @keyframes dataFlow {
            0% { transform: translateX(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateX(calc(300px)); opacity: 0; }
          }
          `}
        </style>
      </div>
    </div>
  );
};

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 fade-in-section opacity-0">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Why Choose Us" 
          tag="WHY US"
          subtitle="Discover the XTech difference and see how we can transform your business"
        />
        
        <div className="grid md:grid-cols-2 gap-10">
          <Card className="bg-gradient-to-br from-xtech-dark-purple/95 to-xtech-dark-purple border-white/5 shadow-lg shadow-xtech-purple/10 hover:shadow-xl hover:shadow-xtech-purple/20 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <CardContent className="p-8 relative">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Transforming with Cutting-Edge Solutions
              </h3>
              <p className="text-xtech-light mb-8 text-lg">
                We blend technology with strategies for actionable insights and increase in Productivity.
              </p>
              
              <div className="bg-gradient-to-br from-xtech-purple/10 to-xtech-purple/5 p-8 rounded-lg">
                <div className="grid grid-cols-3 gap-6">
                  <AnimatedTechIcon delay={0}>
                    <Layers size={28} className="text-white/90" />
                  </AnimatedTechIcon>
                  <AnimatedTechIcon delay={0.5}>
                    <Brain size={28} className="text-white/90" />
                  </AnimatedTechIcon>
                  <AnimatedTechIcon delay={1}>
                    <Database size={28} className="text-white/90" />
                  </AnimatedTechIcon>
                </div>
                
                <DataFlowAnimation color="purple" />
              </div>
              
              {/* Background animation */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-xtech-purple/10 blur-3xl animate-pulse"></div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-xtech-dark-purple/95 to-xtech-dark-purple border-white/5 shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <CardContent className="p-8 relative">
              <h3 className="text-2xl font-bold mb-6 text-xtech-blue">
                Trusted By Industry Leaders Across Sectors
              </h3>
              <p className="text-xtech-light mb-8 text-lg">
                At XTech, our expertise and customer focus set us apart. XTech means accessing cutting-edge AI expertise.
              </p>
              
              <div className="bg-gradient-to-br from-blue-900/10 to-blue-900/5 p-8 rounded-lg">
                <div className="grid grid-cols-3 gap-6">
                  <AnimatedTechIcon delay={0} color="blue">
                    <Lightbulb size={28} className="text-white/90" />
                  </AnimatedTechIcon>
                  <AnimatedTechIcon delay={0.5} color="blue">
                    <LineChart size={28} className="text-white/90" />
                  </AnimatedTechIcon>
                  <AnimatedTechIcon delay={1} color="blue">
                    <Star size={28} className="text-white/90" />
                  </AnimatedTechIcon>
                </div>
                
                <DataFlowAnimation color="blue" />
              </div>
              
              {/* Background animation */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-blue-600/10 blur-3xl animate-pulse"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
