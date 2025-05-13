
import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-xtech-dark-purple mt-16 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - About */}
          <div>
            <h3 className="text-xl font-bold text-xtech-light mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-xtech-light-gray hover:text-xtech-blue transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-xtech-light-gray hover:text-xtech-blue transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-xtech-light-gray hover:text-xtech-blue transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-xtech-light-gray hover:text-xtech-blue transition-colors"
                >
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Social */}
          <div className="md:text-right">
            <h3 className="text-xl font-bold text-xtech-light mb-4">Connect With Us</h3>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xtech-light-gray hover:text-xtech-blue transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xtech-light-gray hover:text-xtech-blue transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xtech-light-gray hover:text-xtech-blue transition-colors"
              >
                Facebook
              </a>
            </div>
            <p className="mt-8 text-sm text-xtech-light">
              &copy; 2025 XTech. All rights reserved
            </p>
          </div>
        </div>
      </div>
      
      {/* Sticky Book a Call button */}
      <Link 
        to="/contact" 
        className="fixed bottom-6 right-6 bg-gradient-to-r from-xtech-purple to-xtech-blue rounded-full p-4 shadow-lg shadow-xtech-purple/30 hover:scale-110 transition-transform z-50 animate-pulse"
        aria-label="Book a Call"
      >
        <MessageCircle className="text-white" size={24} />
      </Link>
    </footer>
  );
};

export default Footer;
