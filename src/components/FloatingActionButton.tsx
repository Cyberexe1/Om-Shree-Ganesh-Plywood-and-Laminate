import React from 'react';
import { PhoneCall } from 'lucide-react';

const FloatingActionButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 md:hidden z-30">
      <a 
        href="https://wa.me/918087475826" 
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" 
          alt="WhatsApp" 
          className="w-6 h-6" 
        />
      </a>
      
      <a 
        href="tel:+918087475826" 
        className="bg-accent text-white p-3 rounded-full shadow-lg hover:bg-amber-600 transition-colors"
        aria-label="Call Us"
      >
        <PhoneCall size={24} />
      </a>
    </div>
  );
};

export default FloatingActionButton;
