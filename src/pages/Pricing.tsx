
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import PricingCard from "@/components/PricingCard";

const Pricing = () => {
  const basicFeatures = [
    "Standard Support",
    "Up to 5 users",
    "Basic analytics",
    "Email support"
  ];
  
  const proFeatures = [
    "Priority Support",
    "Up to 20 users",
    "Advanced analytics",
    "Custom integrations",
    "24/7 monitoring"
  ];
  
  const enterpriseFeatures = [
    "Dedicated Support",
    "Unlimited users",
    "All features",
    "On-site consultation",
    "Custom development",
    "Priority SLA"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title="Pricing Plans" 
              subtitle="Choose a plan that fits your needs or contact us for a custom enterprise solution."
              align="center"
            />
          </div>
        </div>
      </section>
      
      {/* Pricing Plans */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <PricingCard
              name="Basic"
              price="$500"
              features={basicFeatures}
            />
            
            <PricingCard
              name="Pro"
              price="$1,500"
              features={proFeatures}
              isFeatured={true}
            />
            
            <PricingCard
              name="Enterprise"
              price="Custom"
              features={enterpriseFeatures}
            />
          </div>
          
          <div className="text-center mt-8 text-xtech-light-gray">
            <p>*Not sure which plan? <a href="/contact" className="text-xtech-blue hover:underline">Contact us</a> for a custom quote.</p>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-xtech-dark-purple">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Frequently Asked Questions" 
            align="center"
          />
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">What payment methods do you accept?</h3>
              <p className="text-xtech-light-gray">
                We accept all major credit cards, bank transfers, and PayPal. For enterprise clients, we also offer invoicing with net-30 payment terms.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Can I upgrade my plan later?</h3>
              <p className="text-xtech-light-gray">
                Yes, you can upgrade your plan at any time. The price difference will be prorated for the remainder of your billing period.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Do you offer discounts for annual commitments?</h3>
              <p className="text-xtech-light-gray">
                Yes, we offer a 10% discount for annual billing on all our plans. This option is available during checkout.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">What kind of support is included?</h3>
              <p className="text-xtech-light-gray">
                Basic plans include email support with 24-hour response time. Pro plans include priority email and chat support with 4-hour response time. Enterprise plans include dedicated support with 1-hour response time and a dedicated account manager.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Guarantee */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Satisfaction Guarantee</h2>
            <p className="text-xtech-light-gray mb-8">
              We're confident in the quality of our services. If you're not completely satisfied within the first 30 days, contact us and we'll make it right.
            </p>
            
            <div className="flex justify-center">
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-md text-white font-medium transition-transform hover:bg-white/20">
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
