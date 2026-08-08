import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

type NavbarProps = {
  /** Standalone pages have no dark hero, so the bar must stay in its solid state. */
  alwaysSolid?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ alwaysSolid = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const isScrolled = alwaysSolid || hasScrolled;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (alwaysSolid) return;
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [alwaysSolid]);

  // Router paths, so navigating between pages never reloads the document.
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/#products', label: 'Materials' },
    { to: '/about', label: 'About' },
    { to: '/faq', label: 'FAQ' },
    { to: '/#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-card mx-4 mt-3 rounded-full border border-outline-variant/10'
          : 'bg-transparent mx-4 mt-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" aria-label="Om Shree Ganesh Plywood and Laminate — home">
          <span
            className={`font-headline text-headline-sm font-bold transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            Om Shree Ganesh
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-body-md transition-colors duration-300 hover:text-secondary ${
                isScrolled ? 'text-on-surface-variant' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          to="/#contact"
          className={`hidden md:block px-6 py-2 rounded-full font-body text-label-md transition-all duration-300 ${
            isScrolled
              ? 'bg-primary-container text-on-primary-container hover:bg-secondary hover:text-white'
              : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-primary'
          }`}
        >
          Inquire Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden focus:outline-none transition-colors ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white rounded-2xl mx-4 mt-2 shadow-card border border-outline-variant/10 animate-fadeIn">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-6 py-3 text-on-surface-variant hover:text-secondary hover:bg-surface-container-low transition-colors font-body"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-6 pt-3">
              <Link
                to="/#contact"
                className="block text-center bg-primary-container text-on-primary-container px-6 py-3 rounded-full font-body text-label-md hover:bg-secondary hover:text-white transition-all"
                onClick={toggleMenu}
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
