import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Om Shree Ganesh</h3>
              <p className="mb-4">Your trusted partner for all plywood, laminates, and interior material needs since 2020.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-accent transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white hover:text-accent transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white hover:text-accent transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-white hover:text-accent transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#products" className="hover:text-accent transition-colors">Products</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Our Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-accent transition-colors">Plywood</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Laminates</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">PVC Laminates</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Adhesives</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">MDF Boards</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <address className="not-italic">
                Shri Sevantilal Khandwala Marg, opp. Rajiv Gandhi Commercial Complex,<br />
                Kandivali West, Mumbai, Maharashtra 400067
              </address>
              <p className="mt-4">
                <a href="tel:+918087475826" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone size={16} />
                  <span>+918087475826</span>
                </a>
              </p>
              <p className="mt-2">
                <a href="mailto:omshreeganeshplywood@gmail.com" className="hover:text-accent transition-colors">
                  omshreeganeshplywood@gmail.com
                </a>
                <p className="mt-2">
                  <a href="https://wa.me/918087475826" className="hover:text-accent transition-colors">
                    WhatsApp: +918087475826
                  </a>
                </p>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Om Shree Ganesh Plywood And Laminate. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-accent transition-colors mr-4">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;