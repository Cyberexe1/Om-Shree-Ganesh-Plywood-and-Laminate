import React from 'react';
import { Award, Package, Truck, ThumbsUp, Tags, Clock } from 'lucide-react';

type Feature = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const WhyChooseUs: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: <Award size={40} className="text-accent" />,
      title: 'Premium Materials Guaranteed',
      description: 'We source and sell only the highest quality plywood, laminates, and hardware that meet industry standards.'
    },
    {
      id: 2,
      icon: <Package size={40} className="text-accent" />,
      title: 'Wide Product Range',
      description: 'Find everything you need under one roof, from plywood and laminates to adhesives and fixtures.'
    },
    {
      id: 3,
      icon: <Tags size={40} className="text-accent" />,
      title: 'Competitive Pricing',
      description: 'Get the best value for your money with our transparent and competitive pricing structure.'
    },
    {
      id: 4,
      icon: <Truck size={40} className="text-accent" />,
      title: 'Fast Delivery Available',
      description: 'We offer prompt delivery services to ensure your projects stay on schedule.'
    },
    {
      id: 5,
      icon: <ThumbsUp size={40} className="text-accent" />,
      title: 'Expert Advice',
      description: 'Our knowledgeable team provides expert guidance to help you make informed decisions.'
    },
    {
      id: 6,
      icon: <Clock size={40} className="text-accent" />,
      title: 'Bulk Order Discounts',
      description: 'Special pricing available for bulk orders, perfect for contractors and large projects.'
    },
  ];

  return (
    <section className="py-16 bg-light-wood">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've built our reputation on quality, reliability, and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;