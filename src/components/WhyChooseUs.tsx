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
      title: 'ISI-Certified Materials',
      description: 'Every sheet of plywood and laminate we sell meets IS 710 and IS 303 quality standards for guaranteed durability.',
    },
    {
      id: 2,
      icon: 'inventory_2',
      title: '30+ Product Categories',
      description: 'Plywood, laminates, PVC sheets, MDF boards, adhesives, timber, hardware — everything for your interior project.',
    },
    {
      id: 3,
      icon: 'local_shipping',
      title: 'Free Mumbai Delivery',
      description: 'Same-day dispatch for in-stock items. Free delivery on bulk orders anywhere in Mumbai within 24–48 hours.',
    },
    {
      id: 4,
      icon: 'payments',
      title: 'Wholesale Rates for All',
      description: 'Direct manufacturer sourcing means you get wholesale pricing whether you buy 1 sheet or 100.',
    },
    {
      id: 5,
      icon: 'psychology',
      title: 'Free Material Consultation',
      description: 'Not sure which grade of plywood suits your project? Our experts help you pick the right material and thickness.',
    },
    {
      id: 6,
      icon: 'eco',
      title: 'Eco-Friendly Options',
      description: 'We stock E1-grade low-emission boards and FSC-certified timber for environmentally conscious builds.',
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-[80px] bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-headline-md text-primary mb-4">
            Why Mumbai's Top Carpenters & Interior Designers Choose Us
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
