
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-xtech-dark-purple mt-16 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  to="/pricing" 
                  className="text-xtech-light-gray hover:text-xtech-blue transition-colors"
                >
                  Pricing
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

          {/* Middle Column - Resources */}
          <div>
            <h3 className="text-xl font-bold text-xtech-light mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://framer.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xtech-light-gray hover:text-xtech-blue transition-colors"
                >
                  Framer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xtech-light-gray hover:text-xtech-blue transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xtech-light-gray hover:text-xtech-blue transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xtech-light-gray hover:text-xtech-blue transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://www.dribbble.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xtech-light-gray hover:text-xtech-blue transition-colors"
                >
                  Dribbble
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column - Sign Up */}
          <div className="md:text-right">
            <h3 className="text-xl font-bold text-xtech-light mb-4">Sign up</h3>
            <div className="inline-block bg-xtech-purple text-white text-xs py-1 px-3 rounded-full">
              New
            </div>
            <p className="mt-4 text-xtech-light-gray mb-6">
              Join our newsletter to stay up to date with features and releases.
            </p>
            <p className="text-sm text-xtech-light-gray">
              &copy; 2025 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
