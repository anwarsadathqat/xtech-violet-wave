
import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageUrl?: string;
  className?: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  imageUrl,
  className = "",
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "bg-gradient-to-br from-xtech-dark-purple/80 to-xtech-dark-purple p-6 rounded-lg transition-all duration-300",
        "border border-white/5 shadow-lg hover:shadow-xl hover:shadow-xtech-purple/20", 
        "transform-gpu hover:-translate-y-1",
        className
      )}
    >
      {imageUrl && (
        <div className="mb-6 overflow-hidden rounded-md">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-40 object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}
      
      {icon && (
        <div className="mb-6 icon-glow flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-xtech-dark/80 to-xtech-dark-purple/50 border border-white/10">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-xtech-light">{description}</p>
    </div>
  );
};

export default FeatureCard;
