
import React from "react";
import StatCard from "@/components/StatCard";

const StatsSection = () => {
  return (
    <section className="py-24 bg-xtech-dark-purple relative fade-in-section opacity-0">
      <div className="absolute -z-10 top-0 left-0 w-full h-32 bg-gradient-to-b from-xtech-dark to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-xtech-blue mb-4 block">
            IN NUMBERS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto">
            At XTech, we are dedicated to providing innovative software solutions and IT services that empower businesses
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <StatCard value="10" label="Years of Experience" />
          <StatCard value="3+" label="Countries in Services" />
          <StatCard value="30%" label="Increase in Productivity" />
        </div>
      </div>
      <div className="absolute -z-10 bottom-0 left-0 w-full h-32 bg-gradient-to-t from-xtech-dark to-transparent"></div>
    </section>
  );
};

export default StatsSection;
