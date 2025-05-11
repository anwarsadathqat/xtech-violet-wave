
import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard = ({ name, price, features, isFeatured = false }: PricingCardProps) => {
  return (
    <div 
      className={`
        p-6 rounded-lg shadow-lg
        ${isFeatured 
          ? 'bg-gradient-to-br from-xtech-purple/20 to-xtech-blue/20 border-2 border-xtech-blue' 
          : 'bg-xtech-dark-purple border border-white/10'
        }
      `}
    >
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold gradient-text">{price}</span>
        {price !== "Custom" && <span className="text-xtech-light-gray"> / mo</span>}
      </div>
      
      <ul className="mb-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="text-xtech-blue mt-1 flex-shrink-0" size={16} />
            <span className="text-xtech-light-gray">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link
        to="/contact"
        className={`
          block text-center py-2 px-4 rounded transition-colors
          ${isFeatured 
            ? 'bg-gradient-to-r from-xtech-purple to-xtech-blue text-white hover:from-xtech-blue hover:to-xtech-purple' 
            : 'bg-white/10 text-white hover:bg-white/20'
          }
        `}
      >
        {price === "Custom" ? "Get a Quote" : "Get Started"}
      </Link>
    </div>
  );
};

export default PricingCard;
