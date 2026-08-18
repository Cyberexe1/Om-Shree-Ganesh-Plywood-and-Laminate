import React from 'react';

const stats = [
  { value: '5+ Years', label: 'Experience' },
  { value: '500+', label: 'Happy Customers' },
  { value: '30+', label: 'Products' },
  { value: 'Pan-Mumbai', label: 'Delivery' },
];

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/Front_view_of_Shop.webp")' }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Main content — grows to fill space, top padding clears the fixed navbar */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-24 md:pt-28 pb-8">
        {/* Badge */}
        <div className="bg-secondary/20 border border-secondary/30 backdrop-blur-md px-6 py-2 rounded-full mb-5">
          <span className="text-secondary-fixed-dim font-body text-label-md flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">location_on</span>
            Mumbai's Trusted Plywood Experts
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-headline text-[2rem] leading-tight md:text-display-lg text-surface-bright mb-4 md:mb-6 max-w-2xl">
          Plywood & Sunmica Shop in Kandivali West, Mumbai
        </h1>

        {/* Subtitle */}
        <p className="font-body text-body-md md:text-body-lg text-surface-container-highest/90 mb-8 max-w-2xl">
          Plywood from ₹65 per sq ft and sunmica from ₹900 per sheet — Canon, semi-marine and marine plywood, 500+
          sunmica designs, PVC sheets, MDF boards and Fevicol adhesives, all under one roof with free Mumbai delivery.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          <a
            href="tel:+918087475826"
            className="border-2 border-surface-bright text-surface-bright px-6 md:px-8 py-3 md:py-4 rounded-3xl font-body text-label-md hover:bg-surface-bright hover:text-primary transition-all duration-300"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/918087475826"
            className="bg-[#25D366] text-white px-6 md:px-8 py-3 md:py-4 rounded-3xl font-body text-label-md hover:opacity-90 transition-all duration-300 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            WhatsApp Us
          </a>
          <a
            href="#products"
            className="bg-secondary text-white px-6 md:px-8 py-3 md:py-4 rounded-3xl font-body text-label-md hover:bg-on-secondary-container transition-all duration-300"
          >
            View Products
          </a>
        </div>
      </div>

      {/* Stats Bar — in normal flow below the content, never overlaps */}
      <div className="relative z-10 w-full px-4 pb-6 md:pb-10">
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl py-5 md:py-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-4 ${i < stats.length - 1 ? 'md:border-r border-white/10' : ''} ${i === 0 ? 'border-r border-white/10' : ''}`}
            >
              <div className="font-headline text-headline-sm text-secondary-fixed-dim whitespace-nowrap">{s.value}</div>
              <div className="text-surface-container-highest text-label-sm uppercase tracking-wider mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
