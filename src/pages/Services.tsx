
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import CTAButton from "@/components/CTAButton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Settings, Users, Zap, Shield, Cpu, Network, Database, LayoutList } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-xtech-purple/20 blur-[180px] opacity-40"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title="Our Services" 
              subtitle="Comprehensive service portfolio to address all your IT needs with cutting-edge solutions."
              align="center"
            />
          </div>
        </div>
      </section>
      
      {/* High-Value Consultancy */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 gradient-text">High-Value Consultancy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="AI Implementation"
              description="Integrate AI/ML solutions to improve decision-making and efficiency across your organization."
              icon={<Cpu size={48} className="text-xtech-purple" />}
              className="hover-scale"
            />
            
            <FeatureCard
              title="Project Optimization"
              description="Analyze and streamline processes to deliver projects faster and on budget with less resource waste."
              icon={<Settings size={48} className="text-xtech-blue" />}
              className="hover-scale"
            />
            
            <FeatureCard
              title="Digital Transformation"
              description="Comprehensive strategies to modernize your business operations and drive innovation."
              icon={<Zap size={48} className="text-xtech-purple" />}
              className="hover-scale"
            />
          </div>
        </div>
      </section>
      
      {/* Sustaining Support */}
      <section className="py-8 relative">
        <div className="absolute -z-10 top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-xtech-blue/20 blur-[150px] opacity-30"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 gradient-text">Sustaining Support</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="24/7 System Monitoring"
              description="Continuous monitoring to prevent downtime and ensure reliability of your critical systems."
              icon={<Shield size={48} className="text-xtech-blue" />}
              className="hover-scale"
            />
            
            <FeatureCard
              title="Network Support"
              description="Comprehensive network maintenance and troubleshooting services for optimal performance."
              icon={<Network size={48} className="text-xtech-purple" />}
              className="hover-scale"
            />
            
            <FeatureCard
              title="Security Management"
              description="Advanced threat protection and security policy implementation to keep your data safe."
              icon={<Shield size={48} className="text-xtech-blue" />}
              className="hover-scale"
            />
          </div>
        </div>
      </section>
      
      {/* IT Resource Outsourcing */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 gradient-text">IT Resource Outsourcing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Staffing Solutions"
              description="Provide skilled IT professionals to augment your team on demand and meet project deadlines."
              icon={<Users size={48} className="text-xtech-purple" />}
              className="hover-scale"
            />
            
            <FeatureCard
              title="Full IT Management"
              description="End-to-end management of your IT infrastructure and projects with dedicated resources."
              icon={<LayoutList size={48} className="text-xtech-blue" />}
              className="hover-scale"
            />
            
            <FeatureCard
              title="Specialized Teams"
              description="Access to specialized development and operations teams with deep domain expertise."
              icon={<Users size={48} className="text-xtech-purple" />}
              className="hover-scale"
            />
          </div>
        </div>
      </section>
      
      {/* Integrated Solutions Table with Card UI */}
      <section className="py-16 relative">
        <div className="absolute -z-10 top-1/2 right-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-xtech-purple/20 blur-[150px] opacity-30"></div>
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Integrated Solutions Approach" 
            subtitle="Our comprehensive approach combines expertise across multiple domains"
            align="center"
          />
          
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card className="bg-gradient-to-br from-xtech-dark-purple/80 to-xtech-dark-purple border border-white/5 shadow-lg hover:shadow-xl hover:shadow-xtech-purple/10 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Zap size={24} className="text-xtech-purple" />
                  <h3 className="text-xl font-bold">Digital Transformation</h3>
                </div>
                <ul className="space-y-2 text-xtech-light-gray">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-xtech-purple"></span>
                    AI & Business Intelligence
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-xtech-purple"></span>
                    Workflow Automation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-xtech-purple"></span>
                    IoT & Data Analytics
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xtech-light">Tailored tech solutions that revolutionize operations</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-xtech-dark-purple/80 to-xtech-dark-purple border border-white/5 shadow-lg hover:shadow-xl hover:shadow-xtech-blue/10 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Shield size={24} className="text-xtech-blue" />
                  <h3 className="text-xl font-bold">System Maintenance</h3>
                </div>
                <ul className="space-y-2 text-xtech-light-gray">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-xtech-blue"></span>
                    Security Monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-xtech-blue"></span>
                    Cloud Management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-xtech-blue"></span>
                    Backup & Recovery
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xtech-light">Proactive support keeping systems secure and available</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-xtech-dark-purple/80 to-xtech-dark-purple border border-white/5 shadow-lg hover:shadow-xl hover:shadow-xtech-purple/10 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Users size={24} className="text-xtech-purple" />
                  <h3 className="text-xl font-bold">IT Outsourcing</h3>
                </div>
                <ul className="space-y-2 text-xtech-light-gray">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-xtech-purple"></span>
                    Project Management Tools
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-xtech-purple"></span>
                    Dedicated Teams
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-xtech-purple"></span>
                    Resource Augmentation
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xtech-light">Skilled, purpose-built teams delivering results at scale</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-16 bg-xtech-dark-purple">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Client Success Stories" 
            subtitle="See how our services have transformed businesses"
            align="center"
          />
          
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all duration-300">
              <AspectRatio ratio={16/9} className="mb-4 overflow-hidden rounded-md">
                <img 
                  src="https://images.unsplash.com/photo-1460574283810-2aab119d8511" 
                  alt="Modern Building" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <h3 className="text-xl font-bold mb-2">Finance Sector Transformation</h3>
              <p className="text-xtech-light-gray mb-4">Implemented AI-driven analytics platform for a major financial institution, resulting in 40% faster decision making.</p>
              <p className="text-xtech-blue font-medium">Read Case Study →</p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all duration-300">
              <AspectRatio ratio={16/9} className="mb-4 overflow-hidden rounded-md">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Person using laptop" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <h3 className="text-xl font-bold mb-2">Healthcare System Security</h3>
              <p className="text-xtech-light-gray mb-4">Secured critical patient data systems for a healthcare network while improving system response times by 35%.</p>
              <p className="text-xtech-blue font-medium">Read Case Study →</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-xtech-dark-purple to-xtech-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in a Tailored Solution?</h2>
          <p className="text-xtech-light-gray max-w-xl mx-auto mb-8">
            Our experts are ready to discuss your needs and develop a solution tailored to your business requirements.
          </p>
          <CTAButton to="/contact" className="mx-auto">Schedule a Consultation</CTAButton>
        </div>
      </section>
      
      {/* Floating Help Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="h-14 w-14 bg-gradient-to-r from-xtech-purple to-xtech-blue rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
