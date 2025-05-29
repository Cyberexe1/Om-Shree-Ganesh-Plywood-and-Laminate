import React from 'react';
import { MessageSquare } from 'lucide-react';

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
      image: 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      name: 'Decorative Laminates',
      description: 'Elegant designs and patterns to enhance the beauty of your furniture.',
      image: 'https://images.pexels.com/photos/6432055/pexels-photo-6432055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      name: 'PVC Laminates',
      description: 'Durable and water-resistant laminates for kitchens and bathrooms.',
      image: '/images/pvc-laminate.jpeg'
    },
    {
      id: 4,
      name: 'Adhesives & Glues',
      description: 'Fevicol Heatx and other strong adhesives for perfect bonding.',
      image: '/images/Heatx.jpg'
    },
    {
      id: 5,
      name: 'Tikwood & Salwood',
      description: 'Natural wood for beautiful furniture and decorative elements.',
      image: '/images/salwood.jpeg'
    },
    {
      id: 6,
      name: 'MDF Boards',
      description: 'Versatile medium-density fiberboard for various applications.',
      image: '/images/Mdf_boards.jpeg'
    },
    {
      id: 7,
      name: 'Fevicool Marine',
      description: 'Premium marine-grade adhesive for underwater applications and wet environments.',
      image: '/images/fevicool-marine.jpg'
    },
    {
      id: 8,
      name: 'Abro tape',
      description: 'High-strength double-sided tape for permanent bonding and mounting.',
      image: '/images/abro-tape.jpg'
    },
    {
      id: 9,
      name: 'Super Grip Bond',
      description: 'Extra strong bonding solution for various surfaces including metal, plastic, and wood.',
      image: '/images/super-grip-bond.jpg'
    }
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Product Range</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive collection of high-quality materials for all your interior and construction needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="flex items-center gap-2 text-accent font-medium hover:underline">
                  <MessageSquare size={16} />
                  <span>Inquire Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-4">Looking for something specific?</p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;