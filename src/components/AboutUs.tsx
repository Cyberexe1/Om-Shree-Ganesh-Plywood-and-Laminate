import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-[80px] px-6 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image Side */}
        <div className="relative">
          {/* Decorative border */}
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary rounded-3xl -z-10 hidden md:block" />

          {/* Main Image */}
          <img
            src="/images/Front_view_of_Shop.webp"
            alt="Om Shree Ganesh Plywood Shop"
            className="rounded-3xl card-shadow w-full h-[400px] md:h-[500px] object-cover"
          />

          {/* Floating Card */}
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-white p-4 md:p-6 rounded-2xl shadow-xl max-w-xs">
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-secondary/10 p-2 rounded-full">
                <span className="material-symbols-outlined text-secondary">handshake</span>
              </div>
              <span className="font-bold text-primary font-body">Reliable Quality</span>
            </div>
            <p className="text-label-sm text-on-surface-variant font-body">
              Certified IS 710 and IS 303 quality materials.
            </p>
          </div>
        </div>

        {/* Content Side */}
        <div>
          {/* Label */}
          <span className="text-secondary font-body text-label-md uppercase tracking-widest block mb-4">
            Our Story
          </span>

          {/* Heading */}
          <h2 className="font-headline text-headline-md text-primary mb-6">
            Kandivali West's Most Trusted Plywood & Laminate Dealer Since 2020
          </h2>

          {/* Description */}
          <p className="font-body text-body-lg text-on-surface-variant mb-8 leading-relaxed">
            Om Shree Ganesh Plywood & Laminate was founded with one goal: to give Kandivali's homeowners, carpenters, and interior designers access to certified, premium-grade building materials at fair prices. Today, we serve over 500 satisfied customers across Mumbai — from individual home renovations to large-scale commercial fit-outs. Every product in our showroom is hand-selected for quality, and our team provides honest, no-pressure guidance on material selection.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10 text-center">
              <div className="font-headline text-headline-sm text-secondary">100%</div>
              <div className="text-label-sm uppercase font-bold text-on-surface/60 font-body mt-1">
                Authentic
              </div>
            </div>
            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10 text-center">
              <div className="font-headline text-headline-sm text-secondary">5k+</div>
              <div className="text-label-sm uppercase font-bold text-on-surface/60 font-body mt-1">
                Sheets Sold
              </div>
            </div>
            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10 text-center">
              <div className="font-headline text-headline-sm text-secondary">24h</div>
              <div className="text-label-sm uppercase font-bold text-on-surface/60 font-body mt-1">
                Quotes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
