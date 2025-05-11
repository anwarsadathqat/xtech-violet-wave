
import React from "react";

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
    <div className={`bg-xtech-dark-purple p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-xtech-purple/20 ${className}`}>
      {imageUrl && (
        <div className="mb-6">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-40 object-cover rounded-md"
          />
        </div>
      )}
      
      {icon && <div className="mb-6 animate-glow">{icon}</div>}
      
      <h3 className="text-xl font-bold mb-3 text-xtech-blue">{title}</h3>
      <p className="text-xtech-light">{description}</p>
    </div>
  );
};

export default FeatureCard;
