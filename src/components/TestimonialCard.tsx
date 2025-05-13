
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  className,
}: TestimonialCardProps) => {
  return (
    <Card className={cn(
      "bg-xtech-dark-purple/50 border-white/5 hover:border-white/10",
      "transition-all duration-500 transform-gpu hover:-translate-y-2",
      "hover:shadow-lg hover:shadow-xtech-purple/10",
      className
    )}>
      <CardContent className="p-8">
        <div className="mb-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="36" 
            height="36" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-xtech-purple/50"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
          </svg>
        </div>
        <p className="text-xtech-light italic text-lg mb-6">{quote}</p>
        <div className="mt-4">
          <p className="font-bold text-white">{author}</p>
          {(role || company) && (
            <p className="text-xtech-light-gray text-sm mt-1">
              {role && role}
              {role && company && " · "}
              {company && company}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
