
import React from "react";

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="text-center p-8 bg-xtech-dark-purple/50 rounded-xl border border-white/5 hover:border-white/10 transform-gpu hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-xtech-purple/10">
      <div className="text-5xl md:text-6xl font-bold gradient-text mb-4 animate-pulse" style={{animationDuration: '4s'}}>
        {value}
      </div>
      <div className="text-xtech-light-gray text-lg">{label}</div>
    </div>
  );
};

export default StatCard;
