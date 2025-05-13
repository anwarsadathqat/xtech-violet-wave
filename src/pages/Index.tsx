
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";
import HeroSection from "@/components/sections/HeroSection";
import TransformBusinessSection from "@/components/sections/TransformBusinessSection";
import StatsSection from "@/components/sections/StatsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

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
      
      <HeroSection />
      
      {/* Client Logos */}
      <ClientLogos />
      
      <TransformBusinessSection />
      
      <StatsSection />
      
      <WhyChooseUsSection />
      
      <ServicesSection />
      
      <SolutionsSection />
      
      <TestimonialsSection />
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default Index;
