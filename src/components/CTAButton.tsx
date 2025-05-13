
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

const CTAButton = ({ to, children, className = "", variant = "primary" }: CTAButtonProps) => {
  const baseStyles = "inline-flex items-center gap-2 px-6 py-3 rounded-md text-white font-medium transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-xtech-dark focus:outline-none";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-xtech-purple to-xtech-blue hover:shadow-lg hover:shadow-xtech-blue/30 hover:scale-105",
    secondary: "bg-white/10 hover:bg-white/20 hover:shadow-lg hover:shadow-white/10 hover:scale-105",
    outline: "border border-xtech-purple/50 hover:border-xtech-purple text-xtech-purple hover:bg-xtech-purple/10 hover:scale-105"
  };
  
  return (
    <Link
      to={to}
      className={cn(
        baseStyles,
        variantStyles[variant],
        "group",
        className
      )}
    >
      {children}
      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
    </Link>
  );
};

export default CTAButton;
