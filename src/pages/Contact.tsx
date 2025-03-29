import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 md:px-6 pt-32 pb-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-medium mb-8 text-white">Contact</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <p className="text-lg leading-relaxed mb-8 text-gray-300">
                Let's work together! I'm open to freelance opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to get in touch.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail size={20} className="mr-3 text-gray-400" />
                  <a href="mailto:hello@example.com" className="text-white hover:text-gray-300 transition-colors">
                    hello@example.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone size={20} className="mr-3 text-gray-400" />
                  <span className="text-white">+91 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={20} className="mr-3 text-gray-400" />
                  <span className="text-white">Bengaluru, India</span>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full p-2 bg-black border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full p-2 bg-black border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full p-2 bg-black border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-[#FF4D00] text-white border border-[#FF4D00] rounded-md hover:bg-[#e04500] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF4D00] focus:ring-offset-2 focus:ring-offset-black"
              >
                Send Message
                <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
