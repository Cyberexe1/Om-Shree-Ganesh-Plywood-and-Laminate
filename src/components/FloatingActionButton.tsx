import React from 'react';

const FloatingActionButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
      {/* WhatsApp */}
      <a
        href="https://wa.me/918087475826"
        className="bg-green-500 rounded-full hover:scale-110 transition-transform overflow-hidden p-1 shadow-lg"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/410199-PD37U2-851-removebg-preview.png"
          alt="WhatsApp"
          className="w-12 h-12 object-cover"
        />
      </a>

      {/* Call */}
      <a
        href="tel:+918087475826"
        className="bg-secondary text-white p-4 rounded-full shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
        aria-label="Call Us"
      >
        <span className="material-symbols-outlined text-[24px]">call</span>
      </a>
    </div>
  );
};

export default FloatingActionButton;
