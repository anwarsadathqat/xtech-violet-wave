
import React from "react";

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="text-center p-6">
      <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
        {value}
      </div>
      <div className="text-xtech-light-gray">{label}</div>
    </div>
  );
};

export default StatCard;
