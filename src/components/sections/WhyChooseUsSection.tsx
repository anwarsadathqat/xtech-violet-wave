
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Layers, Database, Lightbulb, LineChart, Star } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

// Modern animated tech icon component with improved visibility
const AnimatedTechIcon = ({ children, delay = 0, color = "purple" }) => {
  const baseColor = color === "purple" ? "xtech-purple" : "blue-600";
  
  return (
    <div className="flex justify-center">
      <div 
        className="relative h-24 w-24 rounded-full flex items-center justify-center"
        style={{ 
          animation: `pulse 3s ease-in-out ${delay}s infinite`,
          background: `radial-gradient(circle, ${color === "purple" ? "rgba(111,86,232,0.3)" : "rgba(0,207,255,0.3)"} 0%, ${color === "purple" ? "rgba(111,86,232,0.1)" : "rgba(0,207,255,0.1)"} 70%)`,
        }}
      >
        <div 
          className="h-16 w-16 rounded-xl flex items-center justify-center relative overflow-hidden transition-all duration-500 hover:scale-110"
          style={{
            background: `radial-gradient(circle, ${color === "purple" ? "rgba(111,86,232,0.4)" : "rgba(0,207,255,0.4)"} 0%, ${color === "purple" ? "rgba(26,31,44,0.9)" : "rgba(26,31,44,0.9)"} 70%)`,
            boxShadow: `0 0 20px 0 ${color === "purple" ? "rgba(111,86,232,0.5)" : "rgba(0,207,255,0.5)"}`
          }}
        >
          {/* Circuit lines with enhanced visibility */}
          <div className="absolute inset-0 opacity-60">
            <div className="absolute top-1/4 left-0 w-full h-[1px]" style={{background: color === "purple" ? "rgba(111,86,232,0.8)" : "rgba(0,207,255,0.8)"}}></div>
            <div className="absolute top-3/4 left-0 w-full h-[1px]" style={{background: color === "purple" ? "rgba(111,86,232,0.8)" : "rgba(0,207,255,0.8)"}}></div>
            <div className="absolute left-1/4 top-0 h-full w-[1px]" style={{background: color === "purple" ? "rgba(111,86,232,0.8)" : "rgba(0,207,255,0.8)"}}></div>
            <div className="absolute left-3/4 top-0 h-full w-[1px]" style={{background: color === "purple" ? "rgba(111,86,232,0.8)" : "rgba(0,207,255,0.8)"}}></div>
          </div>
          
          {/* Animated digital dots */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full" 
               style={{
                 background: color === "purple" ? "rgba(111,86,232,1)" : "rgba(0,207,255,1)",
                 animation: `blink 2s infinite ${delay + 0.2}s`
               }}></div>
          <div className="absolute top-1/4 left-3/4 w-2 h-2 rounded-full" 
               style={{
                 background: color === "purple" ? "rgba(111,86,232,1)" : "rgba(0,207,255,1)",
                 animation: `blink 2s infinite ${delay + 0.4}s`
               }}></div>
          <div className="absolute top-3/4 left-1/4 w-2 h-2 rounded-full" 
               style={{
                 background: color === "purple" ? "rgba(111,86,232,1)" : "rgba(0,207,255,1)",
                 animation: `blink 2s infinite ${delay + 0.6}s`
               }}></div>
          <div className="absolute top-3/4 left-3/4 w-2 h-2 rounded-full" 
               style={{
                 background: color === "purple" ? "rgba(111,86,232,1)" : "rgba(0,207,255,1)",
                 animation: `blink 2s infinite ${delay + 0.8}s`
               }}></div>
          
          {/* Icon */}
          <div className="relative z-10 text-white group-hover:scale-110 transform transition-transform duration-300">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced data flow animation component with improved visibility
const DataFlowAnimation = ({ color = "purple" }) => {
  return (
    <div className="h-32 flex items-center justify-center">
      <div 
        className="relative w-full max-w-xs h-16 rounded-lg overflow-hidden"
        style={{
          background: `linear-gradient(90deg, rgba(26,31,44,0.8) 0%, rgba(26,31,44,0.6) 100%)`,
          border: `1px solid ${color === "purple" ? "rgba(111,86,232,0.5)" : "rgba(0,207,255,0.5)"}`,
          boxShadow: `0 0 20px 0 ${color === "purple" ? "rgba(111,86,232,0.3)" : "rgba(0,207,255,0.3)"}`
        }}
      >
        {/* Connection nodes */}
        <div 
          className="absolute h-3 w-3 rounded-full top-1/4 left-1/4" 
          style={{
            background: color === "purple" ? "rgba(111,86,232,0.8)" : "rgba(0,207,255,0.8)",
            boxShadow: `0 0 10px 0 ${color === "purple" ? "rgba(111,86,232,0.8)" : "rgba(0,207,255,0.8)"}`
          }}></div>
        <div 
          className="absolute h-3 w-3 rounded-full top-2/3 left-2/3"
          style={{
            background: color === "purple" ? "rgba(111,86,232,0.8)" : "rgba(0,207,255,0.8)",
            boxShadow: `0 0 10px 0 ${color === "purple" ? "rgba(111,86,232,0.8)" : "rgba(0,207,255,0.8)"}`
          }}></div>
        <div 
          className="absolute h-3 w-3 rounded-full top-3/4 left-1/3"
          style={{
            background: color === "purple" ? "rgba(111,86,232,0.8)" : "rgba(0,207,255,0.8)",
            boxShadow: `0 0 10px 0 ${color === "purple" ? "rgba(111,86,232,0.8)" : "rgba(0,207,255,0.8)"}`
          }}></div>
        
        {/* Enhanced data packets with glow effect */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-4 w-4 rounded-full"
            style={{
              background: color === "purple" ? "rgba(111,86,232,1)" : "rgba(0,207,255,1)",
              boxShadow: `0 0 15px 2px ${color === "purple" ? "rgba(111,86,232,0.8)" : "rgba(0,207,255,0.8)"}`,
              left: `-15px`,
              top: `${8 + (i * 8)}px`,
              animation: `dataFlow 3s linear ${i * 0.6}s infinite`
            }}
          ></div>
        ))}
        
        {/* AI data processing visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="h-0.5 w-4/5"
            style={{
              background: `linear-gradient(90deg, 
                ${color === "purple" ? "rgba(111,86,232,0.1)" : "rgba(0,207,255,0.1)"} 0%, 
                ${color === "purple" ? "rgba(111,86,232,0.8)" : "rgba(0,207,255,0.8)"} 50%, 
                ${color === "purple" ? "rgba(111,86,232,0.1)" : "rgba(0,207,255,0.1)"} 100%)`,
              animation: "pulse 2s infinite"
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

// Neural Network Visualization
const NeuralNetworkAnimation = ({ color = "purple" }) => {
  const baseColor = color === "purple" ? "rgba(111,86,232," : "rgba(0,207,255,";
  
  return (
    <div className="h-24 w-full flex items-center justify-center mt-2">
      <div className="relative w-full max-w-xs">
        {/* Neural networks nodes */}
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className="h-3 w-3 rounded-full mx-auto"
              style={{
                background: `${baseColor}${0.7 + (i % 3) * 0.1})`,
                boxShadow: `0 0 8px 0 ${baseColor}0.6)`,
                animation: `pulse 2s infinite ${i * 0.2}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Neural network connections */}
        <div className="absolute inset-0 -z-10">
          {[...Array(12)].map((_, i) => {
            const startCol = i % 3;
            const startRow = Math.floor(i / 3) % 3;
            const endCol = (startCol + 1 + (i % 2)) % 3;
            const endRow = (startRow + 1) % 3;
            
            return (
              <div
                key={i}
                className="absolute h-px"
                style={{
                  background: `${baseColor}0.6)`,
                  width: '30%',
                  left: `${startCol * 33 + 16}%`,
                  top: `${startRow * 33 + 16}%`,
                  transform: `rotate(${Math.atan2((endRow - startRow) * 33, (endCol - startCol) * 33) * 180 / Math.PI}deg)`,
                  transformOrigin: 'left center',
                  animation: `pulse 3s infinite ${i * 0.15}s`
                }}
              ></div>
            );
          })}
        </div>
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
          tag="WHY XTECH"
          subtitle="Discover the XTech difference and see how we can transform your business with cutting-edge AI solutions"
        />
        
        <div className="grid md:grid-cols-2 gap-10">
          <Card className="bg-gradient-to-br from-xtech-dark-purple/95 to-xtech-dark-purple border-white/5 shadow-lg shadow-xtech-purple/20 hover:shadow-xl hover:shadow-xtech-purple/30 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <CardContent className="p-8 relative">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Transforming with Cutting-Edge Solutions
              </h3>
              <p className="text-xtech-light mb-8 text-lg">
                We blend technology with strategies for actionable insights and increase in Productivity.
              </p>
              
              <div className="bg-gradient-to-br from-xtech-purple/10 to-xtech-purple/5 p-8 rounded-lg border border-xtech-purple/20">
                <div className="grid grid-cols-3 gap-6">
                  <AnimatedTechIcon delay={0}>
                    <Layers size={32} className="text-white" strokeWidth={1.5} />
                  </AnimatedTechIcon>
                  <AnimatedTechIcon delay={0.5}>
                    <Brain size={32} className="text-white" strokeWidth={1.5} />
                  </AnimatedTechIcon>
                  <AnimatedTechIcon delay={1}>
                    <Database size={32} className="text-white" strokeWidth={1.5} />
                  </AnimatedTechIcon>
                </div>
                
                <DataFlowAnimation color="purple" />
                <NeuralNetworkAnimation color="purple" />
              </div>
              
              {/* Background animation */}
              <div 
                className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl"
                style={{
                  background: "radial-gradient(circle, rgba(111,86,232,0.2) 0%, rgba(26,31,44,0) 70%)",
                  animation: "pulse 4s infinite"
                }}
              ></div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-xtech-dark-purple/95 to-xtech-dark-purple border-white/5 shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <CardContent className="p-8 relative">
              <h3 className="text-2xl font-bold mb-6 text-xtech-blue">
                Trusted By Industry Leaders Across Sectors
              </h3>
              <p className="text-xtech-light mb-8 text-lg">
                At XTech, our expertise and customer focus set us apart. XTech means accessing cutting-edge AI expertise.
              </p>
              
              <div className="bg-gradient-to-br from-blue-900/10 to-blue-900/5 p-8 rounded-lg border border-blue-900/20">
                <div className="grid grid-cols-3 gap-6">
                  <AnimatedTechIcon delay={0} color="blue">
                    <Lightbulb size={32} className="text-white" strokeWidth={1.5} />
                  </AnimatedTechIcon>
                  <AnimatedTechIcon delay={0.5} color="blue">
                    <LineChart size={32} className="text-white" strokeWidth={1.5} />
                  </AnimatedTechIcon>
                  <AnimatedTechIcon delay={1} color="blue">
                    <Star size={32} className="text-white" strokeWidth={1.5} />
                  </AnimatedTechIcon>
                </div>
                
                <DataFlowAnimation color="blue" />
                <NeuralNetworkAnimation color="blue" />
              </div>
              
              {/* Background animation */}
              <div 
                className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl"
                style={{
                  background: "radial-gradient(circle, rgba(0,207,255,0.2) 0%, rgba(26,31,44,0) 70%)",
                  animation: "pulse 4s infinite"
                }}
              ></div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style>
      {`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        @keyframes dataFlow {
          0% { transform: translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(calc(100% + 15px)); opacity: 0; }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}
      </style>
    </section>
  );
};

export default WhyChooseUsSection;
