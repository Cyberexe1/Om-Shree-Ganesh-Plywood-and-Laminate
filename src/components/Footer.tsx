import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-surface-bright">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <h3 className="font-headline text-headline-sm mb-4">Om Shree Ganesh</h3>
              <p className="text-surface-container-highest/80 font-body text-body-md mb-6">
                Your trusted partner for all plywood, laminates, and interior material needs since 2020.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://maps.google.com/?cid=9628421423051136744"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-surface-container-highest/60 hover:text-secondary transition-colors"
                  aria-label="Find us on Google Maps"
                >
                  <span className="material-symbols-outlined">location_on</span>
                </a>
                <a
                  href="tel:+918087475826"
                  className="text-surface-container-highest/60 hover:text-secondary transition-colors"
                  aria-label="Call us"
                >
                  <span className="material-symbols-outlined">call</span>
                </a>
                <a
                  href="https://wa.me/918087475826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-surface-container-highest/60 hover:text-secondary transition-colors"
                  aria-label="WhatsApp"
                >
                  <span className="material-symbols-outlined">chat</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-headline text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/#products', label: 'Materials' },
                  { to: '/about', label: 'About Us' },
                  { to: '/faq', label: 'FAQ' },
                  { to: '/#gallery', label: 'Gallery' },
                  { to: '/#contact', label: 'Contact' },
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-surface-container-highest/80 hover:text-secondary transition-colors font-body text-body-md"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-headline text-lg font-bold mb-4">Our Products</h3>
              <ul className="space-y-3">
                <li><span className="text-surface-container-highest/80 font-body text-body-md">Plywood</span></li>
                <li><span className="text-surface-container-highest/80 font-body text-body-md">Laminates</span></li>
                <li><span className="text-surface-container-highest/80 font-body text-body-md">PVC Laminates</span></li>
                <li><span className="text-surface-container-highest/80 font-body text-body-md">Adhesives</span></li>
                <li><span className="text-surface-container-highest/80 font-body text-body-md">MDF Boards</span></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-headline text-lg font-bold mb-4">Contact Info</h3>
              <address className="not-italic space-y-3">
                <p className="text-surface-container-highest/80 font-body text-body-md">
                  Shri Sevantilal Khandwala Marg, opp. Rajiv Gandhi Commercial Complex,
                  Kandivali West, Mumbai 400067
                </p>
                <p>
                  <a href="tel:+918087475826" className="flex items-center gap-2 text-surface-container-highest/80 hover:text-secondary transition-colors font-body text-body-md">
                    <span className="material-symbols-outlined text-[16px]">call</span>
                    +91 8087475826
                  </a>
                </p>
                <p>
                  <a href="mailto:omshreeganeshplywood@gmail.com" className="text-surface-container-highest/80 hover:text-secondary transition-colors font-body text-body-md break-all">
                    omshreeganeshplywood@gmail.com
                  </a>
                </p>
                <p>
                  <a href="https://wa.me/918087475826" className="flex items-center gap-2 text-surface-container-highest/80 hover:text-secondary transition-colors font-body text-body-md">
                    <span className="material-symbols-outlined text-[16px]">chat</span>
                    WhatsApp: +91 8087475826
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-surface-container-highest/60 font-body text-label-sm">
              &copy; {new Date().getFullYear()} Om Shree Ganesh Plywood & Laminate. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/faq"
                className="text-surface-container-highest/60 hover:text-secondary transition-colors font-body text-label-sm"
              >
                FAQ
              </Link>
              <a
                href="mailto:omshreeganeshplywood@gmail.com"
                className="text-surface-container-highest/60 hover:text-secondary transition-colors font-body text-label-sm"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
