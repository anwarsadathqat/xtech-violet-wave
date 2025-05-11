
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const CTAButton = ({ to, children, className = "" }: CTAButtonProps) => {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-xtech-purple to-xtech-blue rounded-md text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-xtech-blue/30 focus:ring-2 focus:ring-xtech-blue/50 focus:outline-none ${className}`}
    >
      {children}
      <ArrowRight size={16} className="animate-pulse" />
    </Link>
  );
};

export default CTAButton;
