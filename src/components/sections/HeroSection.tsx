
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
          
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 px-8 py-4 text-lg rounded-full bg-gradient-to-r from-xtech-purple to-xtech-blue text-white font-medium hover:shadow-lg hover:shadow-xtech-purple/30 hover:scale-105 transition-all duration-300 group"
          >
            Explore Our Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      
      {/* Hero Animated Tech Background */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden">
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-xtech-purple/20 to-xtech-blue/20 blur-[100px] opacity-50 animate-pulse"></div>
        
        {/* Tech circuit lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-xtech-purple/30 to-transparent animate-[pulse_4s_ease-in-out_infinite]"></div>
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-xtech-blue/30 to-transparent animate-[pulse_4s_ease-in-out_infinite_0.5s]"></div>
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-xtech-purple/30 to-transparent animate-[pulse_4s_ease-in-out_infinite_1s]"></div>
          <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-xtech-blue/30 to-transparent animate-[pulse_4s_ease-in-out_infinite_1.5s]"></div>
        </div>
        
        {/* Digital particles */}
        <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-xtech-purple/70 animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-2/3 left-2/3 w-2 h-2 rounded-full bg-xtech-blue/70 animate-[float_7s_ease-in-out_infinite_0.5s]"></div>
        <div className="absolute top-1/2 left-3/4 w-4 h-4 rounded-full bg-xtech-purple/60 animate-[float_5s_ease-in-out_infinite_1s]"></div>
        <div className="absolute top-1/4 left-2/3 w-2 h-2 rounded-full bg-xtech-blue/60 animate-[float_8s_ease-in-out_infinite_1.5s]"></div>
        <div className="absolute top-3/4 left-1/3 w-3 h-3 rounded-full bg-xtech-purple/50 animate-[float_7s_ease-in-out_infinite_2s]"></div>
        
        {/* Digital code visualization */}
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 flex space-x-1 animate-[float_4s_ease-in-out_infinite]">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i}
              className={`h-${Math.floor(Math.random() * 4) + 2} w-1 bg-${i % 2 ? 'xtech-purple' : 'xtech-blue'}/60 rounded-full`}
              style={{
                height: `${Math.floor(Math.random() * 16) + 8}px`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute -z-10 bottom-0 left-0 w-full h-32 bg-gradient-to-t from-xtech-dark to-transparent"></div>
    </section>
  );
};

export default HeroSection;
