
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
      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-xtech-purple to-xtech-blue rounded-md text-white font-medium transition-transform hover:scale-105 ${className}`}
    >
      {children}
      <ArrowRight size={16} />
    </Link>
  );
};

export default CTAButton;
