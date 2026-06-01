import React from 'react';

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const ProductShowcase: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Premium Plywood',
      description: 'High-quality, waterproof plywood for all your furniture and interior needs.',
      image: '/images/2024-12-15.webp',
    },
    {
      id: 2,
      name: 'Decorative Laminates',
      description: 'Elegant designs and patterns to enhance the beauty of your furniture.',
      image: '/images/2025-05-23.webp',
    },
    {
      id: 3,
      name: 'PVC Laminates',
      description: 'Durable and water-resistant laminates for kitchens and bathrooms.',
      image: '/images/pvc-laminate.jpeg',
    },
    {
      id: 4,
      name: 'Fevicol Heatx Adhesive',
      description: 'Fevicol Heatx and other strong adhesives for perfect bonding.',
      image: '/images/Heatx.jpg',
    },
    {
      id: 5,
      name: 'Tikwood & Salwood',
      description: 'Natural wood for beautiful furniture and decorative elements.',
      image: '/images/salwood.jpeg',
    },
    {
      id: 6,
      name: 'MDF Boards',
      description: 'Versatile medium-density fiberboard for various applications.',
      image: '/images/Mdf_boards.jpeg',
    },
    {
      id: 7,
      name: 'Fevicool Marine',
      description: 'Premium marine-grade adhesive for underwater and wet environments.',
      image: '/images/fevicool-marine.jpg',
    },
    {
      id: 8,
      name: 'Abro Tape',
      description: 'High-strength double-sided tape for permanent bonding and mounting.',
      image: '/images/abro-tape.jpg',
    },
    {
      id: 9,
      name: 'Super Grip Bond',
      description: 'Extra strong bonding solution for metal, plastic, and wood surfaces.',
      image: '/images/super-grip-bond.jpg',
    },
  ];

  return (
    <section id="products" className="py-20 md:py-[80px] px-6 max-w-[1280px] mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-headline text-headline-md text-primary mb-4">Our Material Collection</h2>
        <p className="text-on-surface-variant font-body max-w-xl mx-auto">
          Handpicked, durable, and aesthetically superior materials sourced from the best manufacturers.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-3xl overflow-hidden card-shadow border border-outline-variant/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
          >
            {/* Image */}
            <div className="h-64 overflow-hidden relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <h3 className="font-headline text-headline-sm text-primary mb-2">{product.name}</h3>
              <p className="text-on-surface-variant font-body text-body-md mb-4">{product.description}</p>
              <a
                href="#contact"
                className="w-full block text-center py-3 rounded-2xl border-2 border-secondary text-secondary font-body text-label-md hover:bg-secondary hover:text-white transition-all duration-300"
              >
                Enquire Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
