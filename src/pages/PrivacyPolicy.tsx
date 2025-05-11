
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xtech-light-gray">
              Last Updated: May 11, 2025
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
            <p className="text-xtech-light-gray mb-4">
              XTech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
            <p className="text-xtech-light-gray mb-4">
              We collect information that you provide directly to us, such as when you create an account, request a consultation, or communicate with us. This may include your name, email address, phone number, and other contact or identifying information.
            </p>
            <p className="text-xtech-light-gray mb-4">
              We also automatically collect certain information about your device and how you interact with our website, including your IP address, browser type, operating system, referring URLs, and information about your usage of our site.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-xtech-light-gray mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-xtech-light-gray mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Personalize your experience and provide content or features that match your profile and interests</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Sharing Your Information</h2>
            <p className="text-xtech-light-gray mb-4">
              We may share the information we collect as follows:
            </p>
            <ul className="list-disc list-inside text-xtech-light-gray mb-4">
              <li>With vendors, service providers, and other third parties who need access to such information to carry out work on our behalf</li>
              <li>In response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law or regulation</li>
              <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of XTech or others</li>
              <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company</li>
              <li>With your consent or at your direction</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p className="text-xtech-light-gray mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-xtech-light-gray">
              Email: privacy@xtech.qa<br />
              Phone: +974 1234 5678<br />
              Address: XTech HQ, Doha, Qatar
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
