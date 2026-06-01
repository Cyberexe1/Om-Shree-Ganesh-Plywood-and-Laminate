import React from 'react';

type Feature = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const WhyChooseUs: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: 'verified',
      title: 'Premium Materials',
      description: 'We only stock materials that meet rigorous quality standards for durability and finish.',
    },
    {
      id: 2,
      icon: 'inventory_2',
      title: 'Wide Product Range',
      description: 'From basic plywood to designer laminates, find everything under one roof.',
    },
    {
      id: 3,
      icon: 'local_shipping',
      title: 'Timely Delivery',
      description: 'Reliable delivery service across Mumbai to keep your project on schedule.',
    },
    {
      id: 4,
      icon: 'payments',
      title: 'Unbeatable Prices',
      description: 'Direct sourcing allows us to offer the most competitive rates in Kandivali.',
    },
    {
      id: 5,
      icon: 'psychology',
      title: 'Expert Advice',
      description: 'Confused about materials? Our team provides free consultation for your needs.',
    },
    {
      id: 6,
      icon: 'eco',
      title: 'Sustainable Sourcing',
      description: 'We prioritize eco-friendly boards and sustainable timber practices.',
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-[80px] bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-headline-md text-primary mb-4">
            Why Architects & Homeowners Choose Us
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-3xl card-shadow border border-outline-variant/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">
                {feature.icon}
              </span>
              <h4 className="font-headline text-headline-sm text-primary mb-2">{feature.title}</h4>
              <p className="text-on-surface-variant font-body text-body-md">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
