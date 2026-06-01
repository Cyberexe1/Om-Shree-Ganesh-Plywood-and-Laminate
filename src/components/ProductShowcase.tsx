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
      name: 'Waterproof Plywood',
      description: 'IS 710 certified, BWR-grade waterproof plywood ideal for kitchen cabinets, wardrobes, and bathroom furniture.',
      image: '/images/2024-12-15.webp',
    },
    {
      id: 2,
      name: 'Decorative Laminates',
      description: 'Over 500 designs — wood grain, marble, solid colors. High-pressure laminates for modular furniture and wall panels.',
      image: '/images/2025-05-23.webp',
    },
    {
      id: 3,
      name: 'PVC Laminates',
      description: 'Water-resistant, termite-proof PVC laminate sheets perfect for kitchen shutters and bathroom vanities.',
      image: '/images/pvc-laminate.jpeg',
    },
    {
      id: 4,
      name: 'Fevicol Heatx Adhesive',
      description: 'Heat-resistant wood adhesive for laminate bonding. Ideal for kitchen countertops exposed to high temperatures.',
      image: '/images/Heatx.jpg',
    },
    {
      id: 5,
      name: 'Tikwood & Salwood',
      description: 'Seasoned natural timber for door frames, window frames, and premium solid-wood furniture construction.',
      image: '/images/salwood.jpeg',
    },
    {
      id: 6,
      name: 'MDF Boards',
      description: 'Plain and pre-laminated MDF boards for CNC routing, wall paneling, and modular furniture manufacturing.',
      image: '/images/Mdf_boards.jpeg',
    },
    {
      id: 7,
      name: 'Fevicol Marine',
      description: 'Marine-grade waterproof adhesive for plywood bonding in high-moisture areas like bathrooms and exteriors.',
      image: '/images/fevicool-marine.jpg',
    },
    {
      id: 8,
      name: 'Abro Tape',
      description: 'Industrial-strength double-sided mounting tape for mirrors, panels, and heavy-duty interior fixtures.',
      image: '/images/abro-tape.jpg',
    },
    {
      id: 9,
      name: 'Super Grip Bond',
      description: 'Multi-surface contact adhesive for bonding laminates to plywood, metal, and plastic substrates.',
      image: '/images/super-grip-bond.jpg',
    },
  ];

  return (
    <section id="products" className="py-20 md:py-[80px] px-6 max-w-[1280px] mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-headline text-headline-md text-primary mb-4">Plywood, Laminates & Interior Materials</h2>
        <p className="text-on-surface-variant font-body max-w-xl mx-auto">
          Browse our complete range of certified plywood, designer laminates, and construction-grade adhesives — sourced directly from top manufacturers.
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
