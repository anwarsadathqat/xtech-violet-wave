
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title="Contact & Schedule Service" 
              subtitle="Get in touch with our team to discuss your project or schedule a consultation"
              align="center"
            />
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-xtech-dark-purple p-6 rounded-lg flex flex-col items-center text-center">
              <Phone size={32} className="text-xtech-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-xtech-light-gray">+974 1234 5678</p>
            </div>
            
            <div className="bg-xtech-dark-purple p-6 rounded-lg flex flex-col items-center text-center">
              <Mail size={32} className="text-xtech-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:info@xtech.qa" className="text-xtech-light-gray hover:text-xtech-blue">
                info@xtech.qa
              </a>
            </div>
            
            <div className="bg-xtech-dark-purple p-6 rounded-lg flex flex-col items-center text-center">
              <MapPin size={32} className="text-xtech-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-xtech-light-gray">XTech HQ, Doha, Qatar</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Location</h2>
              <div className="rounded-lg overflow-hidden h-[400px]">
                <iframe
                  src="https://maps.google.com/maps?q=Doha,+Qatar&z=13&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="XTech Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Office Hours */}
      <section className="py-8 bg-xtech-dark-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Office Hours</h2>
          <p className="text-xtech-light-gray mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p className="text-xtech-light-gray">Saturday: 10:00 AM - 2:00 PM</p>
        </div>
      </section>
      
      {/* Chatbot Widget (Placeholder) */}
      <div className="fixed bottom-6 right-6 h-14 w-14 bg-gradient-to-r from-xtech-purple to-xtech-blue rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
