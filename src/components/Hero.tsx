import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/Front_view_of_Shop.webp")' }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center px-6">
        {/* Badge */}
        <div className="bg-secondary/20 border border-secondary/30 backdrop-blur-md px-6 py-2 rounded-full mb-6">
          <span className="text-secondary-fixed-dim font-body text-label-md flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">location_on</span>
            Mumbai's Trusted Plywood Experts
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-headline text-display-lg-mobile md:text-display-lg text-surface-bright mb-6 leading-tight">
          Best Plywood & Laminate Shop in Kandivali West, Mumbai
        </h1>

        {/* Subtitle */}
        <p className="font-body text-body-lg text-surface-container-highest/90 mb-10 max-w-2xl">
          Premium waterproof plywood, decorative laminates, PVC sheets, MDF boards & Fevicol adhesives — all under one roof with free Mumbai delivery.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+918087475826"
            className="border-2 border-surface-bright text-surface-bright px-8 py-4 rounded-3xl font-body text-label-md hover:bg-surface-bright hover:text-primary transition-all duration-300"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/918087475826"
            className="bg-[#25D366] text-white px-8 py-4 rounded-3xl font-body text-label-md hover:opacity-90 transition-all duration-300 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            WhatsApp Us
          </a>
          <a
            href="#products"
            className="bg-secondary text-white px-8 py-4 rounded-3xl font-body text-label-md hover:bg-on-secondary-container transition-all duration-300"
          >
            View Products
          </a>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6">
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl py-6 md:py-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="border-r border-white/10 px-4">
            <div className="font-headline text-headline-sm text-secondary-fixed-dim">5+ Years</div>
            <div className="text-surface-container-highest text-label-sm uppercase tracking-wider">Experience</div>
          </div>
          <div className="border-r border-white/10 px-4 hidden md:block">
            <div className="font-headline text-headline-sm text-secondary-fixed-dim">500+</div>
            <div className="text-surface-container-highest text-label-sm uppercase tracking-wider">Happy Customers</div>
          </div>
          <div className="border-r border-white/10 px-4">
            <div className="font-headline text-headline-sm text-secondary-fixed-dim">30+</div>
            <div className="text-surface-container-highest text-label-sm uppercase tracking-wider">Products</div>
          </div>
          <div className="px-4">
            <div className="font-headline text-headline-sm text-secondary-fixed-dim">Pan-Mumbai</div>
            <div className="text-surface-container-highest text-label-sm uppercase tracking-wider">Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
