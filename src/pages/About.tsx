import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import CTAButton from "@/components/CTAButton";
const About = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle title="About XTech" subtitle="Empowering Qatari businesses with innovative, scalable technology solutions to drive digital transformation." align="center" />
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg mb-6">
                XTech is your technology-oriented partner in digital transformation, providing end-to-end IT solutions that align with Qatar's National Vision and business goals. Our team combines deep industry experience with a passion for innovation.
              </p>
              <p className="text-xtech-light-gray mb-6">We understand the unique challenges faced by businesses in Qatar and the wider region. Our solutions are designed to address these specific challenges while leveraging global best practices and cutting-edge technologies.</p>
              <p className="text-xtech-light-gray">
                With a focus on quality, security, and performance, we deliver solutions that not only meet but exceed our clients' expectations, helping them achieve their business objectives efficiently and effectively.
              </p>
            </div>
            
            <div className="bg-xtech-dark-purple p-8 rounded-lg">
              <div className="aspect-w-16 aspect-h-9 mb-8">
                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" alt="Technology" className="rounded-lg object-cover w-full h-64" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-xtech-light-gray">
                To empower businesses in Qatar with innovative technology solutions that drive growth, enhance efficiency, and contribute to the realization of Qatar's National Vision 2030.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Core Values" align="center" />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-xtech-dark-purple p-8 rounded-lg">
              <h3 className="text-xl font-bold text-xtech-purple mb-4">Innovation</h3>
              <p className="text-xtech-light-gray">
                We embrace the latest technologies (AI, cloud, IoT) to deliver cutting-edge solutions that give your business a competitive edge.
              </p>
            </div>
            
            <div className="bg-xtech-dark-purple p-8 rounded-lg">
              <h3 className="text-xl font-bold text-xtech-blue mb-4">Reliability</h3>
              <p className="text-xtech-light-gray">
                Enterprise-grade infrastructure and 24/7 support ensure your systems are secure, stable, and always online—aligning with rigorous Qatar ICT standards.
              </p>
            </div>
            
            <div className="bg-xtech-dark-purple p-8 rounded-lg">
              <h3 className="text-xl font-bold text-xtech-purple mb-4">Regional Expertise</h3>
              <p className="text-xtech-light-gray">
                Based in Doha, we understand local market needs and regulations, bridging global tech best practices with Qatar's National Digital Agenda.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-xtech-dark-purple">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Leadership Team" subtitle="Meet the experts behind XTech's innovative solutions" align="center" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3].map(i => <div key={i} className="text-center">
                <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-4"></div>
                <h3 className="font-medium">Team Member {i}</h3>
                <p className="text-sm text-xtech-light-gray">Position</p>
              </div>)}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to work with us?</h2>
          <p className="text-xtech-light-gray max-w-xl mx-auto mb-8">
            Let's discuss how XTech can help your business achieve its technology goals.
          </p>
          <CTAButton to="/contact" className="mx-auto">Get in Touch</CTAButton>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default About;