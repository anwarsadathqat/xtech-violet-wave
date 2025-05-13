
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
      isScrolled ? "bg-xtech-dark/95 shadow-lg shadow-black/30" : "bg-xtech-dark/80"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center transition-transform hover:scale-105 duration-300 group"
            aria-label="Home"
          >
            <span className="text-2xl font-bold gradient-text group-hover:animate-glow">XTech</span>
            <sup className="text-xs ml-1 opacity-70">®</sup>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/services", label: "Services" },
              { path: "/contact", label: "Contact" }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xtech-light hover:text-xtech-blue transition-colors relative overflow-hidden group ${
                  location.pathname === item.path ? "text-xtech-blue" : ""
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-xtech-purple to-xtech-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-xtech-purple to-xtech-blue"></span>
                )}
              </Link>
            ))}
            
            <Link 
              to="/contact" 
              className="px-4 py-2 bg-gradient-to-r from-xtech-purple to-xtech-blue text-white rounded-md hover:shadow-lg hover:shadow-xtech-purple/30 transition-all transform hover:-translate-y-1 duration-300"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xtech-light focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-xtech-dark-purple border-b border-white/10 py-4 animate-fade-in shadow-lg">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/services", label: "Services" },
                { path: "/contact", label: "Contact" }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-xtech-light hover:text-xtech-blue transition-colors ${
                    location.pathname === item.path ? "text-xtech-blue" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
              
              <Link
                to="/contact" 
                className="px-4 py-2 bg-gradient-to-r from-xtech-purple to-xtech-blue text-white rounded-md text-center"
                onClick={toggleMenu}
              >
                Book a Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
