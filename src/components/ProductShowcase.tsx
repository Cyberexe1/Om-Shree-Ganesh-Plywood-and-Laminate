import React, { useState } from 'react';

const VISIBLE_COUNT = 6;

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const ProductShowcase: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: 'Waterproof Plywood',
      description:
        'Canon, semi-marine and IS 710 marine plywood from ₹65 to ₹120 per sq ft — for kitchen cabinets, wardrobes and bathroom furniture.',
      image: '/images/2024-12-15.webp',
    },
    {
      id: 2,
      name: 'Sunmica & Decorative Laminates',
      description:
        'Over 500 sunmica designs in 0.8 mm and 1 mm, plus acrylic sunmica. Wood grain, marble and solid colours from ₹900 to ₹3,500 per sheet.',
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
        <h2 className="font-headline text-headline-md text-primary mb-4">Plywood, Sunmica & Interior Materials</h2>
        <p className="text-on-surface-variant font-body max-w-xl mx-auto">
          Browse our complete range of certified plywood, sunmica and decorative laminates, and construction-grade
          adhesives — sourced directly from top manufacturers and stocked at our ply shop in Kandivali West.
        </p>
      </div>

      {/* Product Grid — every card is rendered so crawlers see the full range;
          the extras are only hidden visually until "Show more" is clicked. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            hidden={!showAll && index >= VISIBLE_COUNT}
            className="group bg-white rounded-3xl overflow-hidden card-shadow border border-outline-variant/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
          >
            {/* Image */}
            <div className="h-64 overflow-hidden relative">
              <img
                src={product.image}
                alt={`${product.name} available at Om Shree Ganesh Plywood, Kandivali West, Mumbai`}
                width={640}
                height={480}
                loading={index < 3 ? 'eager' : 'lazy'}
                decoding="async"
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

      {/* Show more / less */}
      {products.length > VISIBLE_COUNT && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
            className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-8 py-4 rounded-2xl font-body text-label-md hover:bg-secondary hover:text-white transition-all duration-300"
          >
            <span>
              {showAll ? 'Show fewer materials' : `Show all ${products.length} materials`}
            </span>
            <span
              className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${
                showAll ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            >
              expand_more
            </span>
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductShowcase;
