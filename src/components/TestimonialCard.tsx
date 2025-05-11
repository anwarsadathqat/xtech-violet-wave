
import React from "react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const TestimonialCard = ({ quote, author, role, company }: TestimonialCardProps) => {
  return (
    <div className="bg-xtech-dark-purple rounded-lg p-6 shadow-lg">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="#00CFFF"
            className="mr-1"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p className="mb-4 text-xtech-light">{quote}</p>
      <div className="text-xtech-blue font-semibold">@{author}</div>
    </div>
  );
};

export default TestimonialCard;
