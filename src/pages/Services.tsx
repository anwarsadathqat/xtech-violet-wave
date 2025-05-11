
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import CTAButton from "@/components/CTAButton";
import { Code, Settings, Users } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title="Our Services" 
              subtitle="Comprehensive service portfolio to address all your IT needs."
              align="center"
            />
          </div>
        </div>
      </section>
      
      {/* High-Value Consultancy */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 gradient-text">High-Value Consultancy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="AI Implementation"
              description="Integrate AI/ML solutions to improve decision-making and efficiency."
              icon={<Code size={48} className="text-xtech-purple" />}
            />
            
            <FeatureCard
              title="Project Optimization"
              description="Analyze and streamline processes to deliver projects faster and on budget."
              icon={<Settings size={48} className="text-xtech-blue" />}
            />
            
            <FeatureCard
              title="Digital Transformation"
              description="Comprehensive strategies to modernize your business operations."
              icon={<Code size={48} className="text-xtech-purple" />}
            />
          </div>
        </div>
      </section>
      
      {/* Sustaining Support */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 gradient-text">Sustaining Support</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="24/7 System Monitoring"
              description="Continuous monitoring to prevent downtime and ensure reliability."
              icon={<Settings size={48} className="text-xtech-blue" />}
            />
            
            <FeatureCard
              title="Network Support"
              description="Comprehensive network maintenance and troubleshooting services."
              icon={<Settings size={48} className="text-xtech-purple" />}
            />
            
            <FeatureCard
              title="Security Management"
              description="Advanced threat protection and security policy implementation."
              icon={<Settings size={48} className="text-xtech-blue" />}
            />
          </div>
        </div>
      </section>
      
      {/* IT Resource Outsourcing */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 gradient-text">IT Resource Outsourcing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Staffing Solutions"
              description="Provide skilled IT professionals to augment your team on demand."
              icon={<Users size={48} className="text-xtech-purple" />}
            />
            
            <FeatureCard
              title="Full IT Management"
              description="End-to-end management of your IT infrastructure and projects."
              icon={<Users size={48} className="text-xtech-blue" />}
            />
            
            <FeatureCard
              title="Specialized Teams"
              description="Access to specialized development and operations teams."
              icon={<Users size={48} className="text-xtech-purple" />}
            />
          </div>
        </div>
      </section>
      
      {/* Integrated Solutions Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Integrated Solutions Approach" 
            align="center"
          />
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-xtech-dark-purple p-4 text-left border border-white/10">
                    Solution
                  </th>
                  <th className="bg-xtech-dark-purple p-4 text-left border border-white/10">
                    Key Services
                  </th>
                  <th className="bg-xtech-dark-purple p-4 text-left border border-white/10">
                    Outcomes
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-white/10">Digital Transformation</td>
                  <td className="p-4 border border-white/10">
                    <ul className="list-disc list-inside text-xtech-light-gray">
                      <li>AI & Business Intelligence</li>
                      <li>Workflow Automation</li>
                      <li>IoT & Data Analytics</li>
                    </ul>
                  </td>
                  <td className="p-4 border border-white/10 text-xtech-light-gray">
                    Tailored tech solutions that revolutionize operations.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-white/10">System Maintenance</td>
                  <td className="p-4 border border-white/10">
                    <ul className="list-disc list-inside text-xtech-light-gray">
                      <li>Security Monitoring</li>
                      <li>Cloud Management</li>
                      <li>Backup & Recovery</li>
                    </ul>
                  </td>
                  <td className="p-4 border border-white/10 text-xtech-light-gray">
                    Proactive support keeping systems secure and available.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-white/10">IT Outsourcing</td>
                  <td className="p-4 border border-white/10">
                    <ul className="list-disc list-inside text-xtech-light-gray">
                      <li>Project Management Tools</li>
                      <li>Dedicated Teams</li>
                      <li>Resource Augmentation</li>
                    </ul>
                  </td>
                  <td className="p-4 border border-white/10 text-xtech-light-gray">
                    Skilled, purpose-built teams delivering results at scale.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-xtech-dark-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in a Tailored Solution?</h2>
          <p className="text-xtech-light-gray max-w-xl mx-auto mb-8">
            Our experts are ready to discuss your needs and develop a solution tailored to your business requirements.
          </p>
          <CTAButton to="/contact" className="mx-auto">Schedule a Consultation</CTAButton>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
