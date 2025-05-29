import React from 'react';
import { Tag, AlertCircle, PhoneCall } from 'lucide-react';

const SpecialOffers: React.FC = () => {
  return (
    <section className="py-12 bg-accent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:w-2/3 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Tag size={24} className="text-accent" />
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Special Offers</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertCircle size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Flat 10% Off on Fevicol Heatx This Month!</p>
                  <p className="text-gray-600">Stock up on essential adhesives at discounted prices.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <AlertCircle size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Buy 10 Sheets of Plywood, Get 1 Free</p>
                  <p className="text-gray-600">Perfect opportunity for large renovation projects.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <AlertCircle size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Bulk Order Discounts Available</p>
                  <p className="text-gray-600">Special pricing for contractors and large projects.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/3 bg-primary p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">Want to know more?</h3>
            <p className="mb-6">Contact us today to learn about our latest offers and special discounts for your specific needs.</p>
            
            <a href="tel:+919876543210" className="flex items-center gap-2 bg-white text-primary py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition-colors text-center justify-center">
              <PhoneCall size={18} />
              <span>Call for Best Deals</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;