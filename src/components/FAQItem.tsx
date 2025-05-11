
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 py-4">
      <button
        className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-medium text-xtech-light">{question}</h3>
        <span className="text-xtech-blue ml-2">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 text-xtech-light-gray animate-accordion-down">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
