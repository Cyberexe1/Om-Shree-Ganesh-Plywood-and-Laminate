import React from 'react';
import { Phone, MessageSquare, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-16" 
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("images/Front_view_of_Shop.webp")',
        backgroundAttachment: 'fixed'
      }}>
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn">
            <span className="block">Om Shree Ganesh Plywood</span>
            <span className="block mt-2 text-amber">Plywood And Laminate</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 animate-fadeInUp">
            Your Trusted Partner for Plywood, Laminates, Adhesives & More
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">Best Prices</span>
            <span className="hidden sm:block text-white">•</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">Superior Quality</span>
            <span className="hidden sm:block text-white">•</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">Trusted Service</span>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a href="tel:+918087475826" className="btn-primary flex items-center justify-center gap-2">
              <Phone size={18} />
              <span>Call Now</span>
            </a>
            <a href="#contact" className="btn-secondary flex items-center justify-center gap-2">
              <MessageSquare size={18} />
              <span>Get a Quote</span>
            </a>
            <a href="#products" className="btn-tertiary flex items-center justify-center gap-2">
              <span>View Products</span>
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="hidden md:block absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#products" className="text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;