
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-xtech-dark/90 border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">XTech</span>
            <sup className="text-xs ml-1 opacity-70">®</sup>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-xtech-light hover:text-xtech-blue transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-xtech-light hover:text-xtech-blue transition-colors"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-xtech-light hover:text-xtech-blue transition-colors"
            >
              Services
            </Link>


            <!--
            <Link
              to="/pricing"
              className="text-xtech-light hover:text-xtech-blue transition-colors"
            >
              Pricing
            </Link>
            -->

            
            <Link
              to="/contact"
              className="text-xtech-light hover:text-xtech-blue transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xtech-light focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-xtech-dark border-b border-white/10 py-4 animate-fade-in">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <Link
                to="/"
                className="text-xtech-light hover:text-xtech-blue transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-xtech-light hover:text-xtech-blue transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-xtech-light hover:text-xtech-blue transition-colors"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/pricing"
                className="text-xtech-light hover:text-xtech-blue transition-colors"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="text-xtech-light hover:text-xtech-blue transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
