
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import FeatureCard from "@/components/FeatureCard";
import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";
import TestimonialCard from "@/components/TestimonialCard";
import ClientLogos from "@/components/ClientLogos";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Star, Triangle, ArrowRight, ExternalLink } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Add intersection observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Observe all sections with fade-in-section class
    document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
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
            <CTAButton to="/services" variant="primary" className="text-lg py-4 px-8 animated-button">Explore Our Services</CTAButton>
          </div>
        </div>
        
        {/* Hero background effects */}
        <div className="absolute -z-10 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-xtech-purple/20 blur-[150px] opacity-40 animate-pulse"></div>
        <div className="absolute -z-10 bottom-0 left-0 w-full h-32 bg-gradient-to-t from-xtech-dark to-transparent"></div>
      </section>
      
      {/* Client Logos - Now using the new component */}
      <ClientLogos />
      
      {/* Transforming Businesses Section */}
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
      
      {/* Stats Section */}
      <section className="py-24 bg-xtech-dark-purple relative fade-in-section opacity-0">
        <div className="absolute -z-10 top-0 left-0 w-full h-32 bg-gradient-to-b from-xtech-dark to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider text-xtech-blue mb-4 block">
              IN NUMBERS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto">
              At XTech, we are dedicated to providing innovative software solutions and IT services that empower businesses
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <StatCard value="10" label="Years of Experience" />
            <StatCard value="50+" label="Countries in Services" />
            <StatCard value="30%" label="Increase in Productivity" />
          </div>
        </div>
        <div className="absolute -z-10 bottom-0 left-0 w-full h-32 bg-gradient-to-t from-xtech-dark to-transparent"></div>
      </section>
      
      {/* Why Choose Us */}
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
      
      {/* Our Services - Redesigned with featured service */}
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
                Learn More <ArrowRight className="ml-2" size={16} />
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
              View All Services <ArrowRight size={16} />
            </CTAButton>
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
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
      
      {/* Testimonials */}
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
      
      {/* CTA Section */}
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
      
      <Footer />
    </div>
  );
};

export default Index;
