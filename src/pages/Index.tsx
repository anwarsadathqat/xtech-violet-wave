
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import FeatureCard from "@/components/FeatureCard";
import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Code, Star, Triangle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Welcome to the future 
              <span className="block gradient-text animate-glow">technology solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-xtech-light mb-8">
              Transforming Businesses with Cutting-Edge Solutions
            </p>
            <CTAButton to="/services">Learn more</CTAButton>
          </div>
        </div>
        
        {/* Background gradient/glow effect with animation */}
        <div className="absolute -z-10 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-xtech-purple/30 blur-[120px] opacity-40 animate-pulse"></div>
      </section>
      
      {/* Client Logos */}
      <section className="py-12 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
            <div className="h-8 w-32 bg-gradient-to-r from-white/20 to-white/10 rounded-md flex items-center justify-center text-xs text-white/50">Client 1</div>
            <div className="h-8 w-32 bg-gradient-to-r from-white/20 to-white/10 rounded-md flex items-center justify-center text-xs text-white/50">Client 2</div>
            <div className="h-8 w-32 bg-gradient-to-r from-white/20 to-white/10 rounded-md flex items-center justify-center text-xs text-white/50">Client 3</div>
            <div className="h-8 w-32 bg-gradient-to-r from-white/20 to-white/10 rounded-md flex items-center justify-center text-xs text-white/50">Client 4</div>
            <div className="h-8 w-32 bg-gradient-to-r from-white/20 to-white/10 rounded-md flex items-center justify-center text-xs text-white/50">Client 5</div>
            <div className="h-8 w-32 bg-gradient-to-r from-white/20 to-white/10 rounded-md flex items-center justify-center text-xs text-white/50">Client 6</div>
          </div>
        </div>
      </section>
      
      {/* Transforming Businesses Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-4">
                  Transforming Businesses with{" "}
                  <span className="gradient-text">Cutting-Edge Solutions</span>
                </h2>
                <p className="text-xtech-light mb-4">
                  At XTech, we specialize in providing innovative software solutions that empower 
                  businesses to streamline operations, enhance productivity, and achieve their goals 
                  efficiently. Discover how our solutions can transform your business today.
                </p>
              </div>
              <p className="mb-6 text-xtech-light">
                Cyntch®, a pioneer in the tech industry, excels in delivering groundbreaking 
                IT services and software solutions
              </p>
              <CTAButton to="/services">Explore Our Solutions</CTAButton>
            </div>
            
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-bl from-xtech-purple to-xtech-blue rounded-3xl hover:scale-105 transition-transform duration-300 shadow-lg shadow-xtech-purple/20"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-xtech-dark-purple">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-sm uppercase tracking-wider text-xtech-blue mb-2 block">
              IN NUMBERS
            </span>
            <h2 className="text-3xl font-bold max-w-3xl mx-auto">
              At XTech, we are dedicated to providing innovative software solutions and IT services that empower businesses
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard value="10" label="Years of Experience" />
            <StatCard value="50+" label="Countries in Services" />
            <StatCard value="30%" label="Increase in Productivity" />
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Why Choose Us" 
            tag="WHY US"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-xtech-dark-purple p-8 rounded-lg hover:shadow-lg hover:shadow-xtech-purple/20 transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">
                Transforming with Cutting-Edge Solutions
              </h3>
              <p className="text-xtech-light mb-4">
                We blend technology with strategies for actionable insights and increase in Productivity.
              </p>
              
              <div className="bg-xtech-purple/20 p-8 rounded-lg flex justify-center items-center">
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex justify-center">
                    <div className="h-20 w-20 rounded-full bg-xtech-purple/40 flex items-center justify-center animate-glow">
                      <div className="h-10 w-10 bg-xtech-purple/60 rounded-md"></div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="h-20 w-20 rounded-full bg-xtech-purple/40 flex items-center justify-center animate-glow">
                      <div className="h-10 w-10 bg-xtech-purple/60 rounded-md"></div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="h-20 w-20 rounded-full bg-xtech-purple/40 flex items-center justify-center animate-glow">
                      <div className="h-10 w-10 bg-xtech-purple/60 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-xtech-dark-purple p-8 rounded-lg hover:shadow-lg hover:shadow-blue-900/20 transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">
                Trusted By Industry Leaders Across Sectors
              </h3>
              <p className="text-xtech-light mb-4">
                At XTech, our expertise and customer focus set us apart. XTech means accessing cutting-edge AI expertise.
              </p>
              
              <div className="bg-blue-900/20 p-8 rounded-lg flex justify-center items-center">
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex justify-center">
                    <div className="h-20 w-20 rounded-full bg-blue-900/40 flex items-center justify-center animate-glow">
                      <div className="h-10 w-10 bg-blue-800/60 rounded-md"></div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="h-20 w-20 rounded-full bg-blue-900/40 flex items-center justify-center animate-glow">
                      <div className="h-10 w-10 bg-blue-800/60 rounded-md"></div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="h-20 w-20 rounded-full bg-blue-900/40 flex items-center justify-center animate-glow">
                      <div className="h-10 w-10 bg-blue-800/60 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Services - Reduced spacing */}
      <section className="py-8 relative"> {/* Reduced from py-16 to py-8 */}
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-xtech-blue/20 blur-[150px] opacity-30"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 opacity-10">Our Services</h2> {/* Reduced mb-16 to mb-8 */}
          </div>
          
          <div className="flex justify-center mb-8"> {/* Reduced mb-16 to mb-8 */}
            <div className="bg-gradient-to-br from-blue-600/30 to-indigo-800/30 p-8 rounded-xl w-full max-w-md border border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/20 transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">Software Solution</h3>
              <p className="text-blue-200">
                We develop custom software solutions tailored to your specific business needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Innovative Problem-Solving for Your Business Needs" 
            tag="SOLUTIONS" 
            align="left"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Focusing on Your Business"
              description="We start by gaining a deep understanding of your business goals."
              icon={<Code size={48} className="text-xtech-purple" />}
            />
            
            <FeatureCard 
              title="Developing Tailored Solutions"
              description="Next, our team of experts develops tailored solutions."
              icon={<Star size={48} className="text-xtech-blue" />}
            />
            
            <FeatureCard 
              title="Scalability and Innovation"
              description="We leverage cutting-edge technology to implement seamlessly."
              icon={<Triangle size={48} className="text-xtech-purple" />}
            />
          </div>
          
          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm uppercase tracking-wider text-xtech-blue mb-2 block">
                INNOVATE
              </span>
              <h2 className="text-3xl font-bold mb-4">
                Transforming Businesses with{" "}
                <span className="text-xtech-blue">Cutting-Edge Solutions</span>
              </h2>
              <p className="text-xtech-light">
                At XTech, we specialize in providing innovative software solutions that empower 
                businesses to streamline operations, enhance productivity, and achieve their goals 
                efficiently. Discover how our solutions can transform your business today.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                alt="Modern Building" 
                className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-xtech-dark-purple">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Customers Reviews" 
            tag="REVIEWS" 
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard 
              quote="Cyntch has been an amazing investment partner for me. Their investment management services are easy to use."
              author="Yury"
              role=""
              company=""
            />
            
            <TestimonialCard 
              quote="I never realized how much money I was wasting on unnecessary expenses until I started using Cyntch."
              author="Aryan"
              role=""
              company=""
            />
            
            <TestimonialCard 
              quote="Such a clean, beautiful template and so easy to customise. Would highly recommend."
              author="Arim"
              role=""
              company=""
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xtech-light max-w-xl mx-auto mb-8">
            Contact us today to learn how XTech can help your business achieve its goals with our cutting-edge technology solutions.
          </p>
          <CTAButton to="/contact" className="mx-auto">Schedule a Consultation</CTAButton>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
