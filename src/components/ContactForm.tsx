
import React from "react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Form submitted!",
      description: "We'll get back to you soon.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-3 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-xtech-blue"
          placeholder="Your name"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-3 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-xtech-blue"
          placeholder="your@email.com"
          required
        />
      </div>
      
      <div>
        <label htmlFor="service" className="block mb-2 text-sm font-medium">
          Service Needed
        </label>
        <select
          id="service"
          className="w-full p-3 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-xtech-blue"
        >
          <option>Consultancy</option>
          <option>Support</option>
          <option>Outsourcing</option>
          <option>Other</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full p-3 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-xtech-blue"
          placeholder="How can we help you?"
          required
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-xtech-purple to-xtech-blue text-white rounded-md hover:from-xtech-blue hover:to-xtech-purple transition-all"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
