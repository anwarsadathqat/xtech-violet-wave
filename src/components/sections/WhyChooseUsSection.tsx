
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Triangle, Star, ExternalLink } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

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
          <Card className="bg-gradient-to-br from-xtech-dark-purple/95 to-xtech-dark-purple border-white/5 shadow-lg shadow-xtech-purple/10 hover:shadow-xl hover:shadow-xtech-purple/20 transition-all duration-500 transform hover:-translate-y-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Transforming with Cutting-Edge Solutions
              </h3>
              <p className="text-xtech-light mb-8 text-lg">
                We blend technology with strategies for actionable insights and increase in Productivity.
              </p>
              
              <div className="bg-gradient-to-br from-xtech-purple/10 to-xtech-purple/5 p-8 rounded-lg flex justify-center items-center">
                <div className="grid grid-cols-3 gap-6">
                  <div className="flex justify-center">
                    <div className="h-24 w-24 rounded-full bg-xtech-purple/20 flex items-center justify-center animate-glow">
                      <div className="h-12 w-12 bg-xtech-purple/40 rounded-md flex items-center justify-center">
                        <Code size={24} className="text-white/90" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="h-24 w-24 rounded-full bg-xtech-purple/20 flex items-center justify-center animate-glow" style={{ animationDelay: "0.5s" }}>
                      <div className="h-12 w-12 bg-xtech-purple/40 rounded-md flex items-center justify-center">
                        <Triangle size={24} className="text-white/90" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="h-24 w-24 rounded-full bg-xtech-purple/20 flex items-center justify-center animate-glow" style={{ animationDelay: "1s" }}>
                      <div className="h-12 w-12 bg-xtech-purple/40 rounded-md flex items-center justify-center">
                        <Star size={24} className="text-white/90" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-xtech-dark-purple/95 to-xtech-dark-purple border-white/5 shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-500 transform hover:-translate-y-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-xtech-blue">
                Trusted By Industry Leaders Across Sectors
              </h3>
              <p className="text-xtech-light mb-8 text-lg">
                At XTech, our expertise and customer focus set us apart. XTech means accessing cutting-edge AI expertise.
              </p>
              
              <div className="bg-gradient-to-br from-blue-900/10 to-blue-900/5 p-8 rounded-lg flex justify-center items-center">
                <div className="grid grid-cols-3 gap-6">
                  <div className="flex justify-center">
                    <div className="h-24 w-24 rounded-full bg-blue-900/20 flex items-center justify-center animate-glow">
                      <div className="h-12 w-12 bg-blue-800/40 rounded-md flex items-center justify-center">
                        <ExternalLink size={24} className="text-white/90" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="h-24 w-24 rounded-full bg-blue-900/20 flex items-center justify-center animate-glow" style={{ animationDelay: "0.5s" }}>
                      <div className="h-12 w-12 bg-blue-800/40 rounded-md flex items-center justify-center">
                        <Code size={24} className="text-white/90" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="h-24 w-24 rounded-full bg-blue-900/20 flex items-center justify-center animate-glow" style={{ animationDelay: "1s" }}>
                      <div className="h-12 w-12 bg-blue-800/40 rounded-md flex items-center justify-center">
                        <Star size={24} className="text-white/90" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
