
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Consultancy',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto URL with form data
      const subject = `XTech Inquiry: ${formData.service}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Service: ${formData.service}

Message:
${formData.message}
      `;
      
      // Open default mail client with pre-filled data
      window.location.href = `mailto:XtechInfoQat@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      toast({
        title: "Form submitted!",
        description: "Your email client should open with the form details.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        service: 'Consultancy',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error submitting form",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
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
          value={formData.name}
          onChange={handleChange}
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
          value={formData.email}
          onChange={handleChange}
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
          value={formData.service}
          onChange={handleChange}
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
        <Textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full p-3 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-xtech-blue resize-none"
          placeholder="How can we help you?"
          required
        />
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-6 bg-gradient-to-r from-xtech-purple to-xtech-blue text-white rounded-md hover:from-xtech-blue hover:to-xtech-purple transition-all flex items-center justify-center gap-2"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
        <Mail className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default ContactForm;
