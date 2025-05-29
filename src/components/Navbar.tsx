import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Om Shree Ganesh
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className={`font-medium hover:text-accent transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Home</a>
            <a href="#products" className={`font-medium hover:text-accent transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Products</a>
            <a href="#about" className={`font-medium hover:text-accent transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>About</a>
            <a href="#gallery" className={`font-medium hover:text-accent transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Gallery</a>
            <a href="#contact" className={`font-medium hover:text-accent transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className={`focus:outline-none ${isScrolled ? 'text-primary' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg mt-2 shadow-lg animate-fadeIn">
            <div className="flex flex-col py-2">
              <a href="#home" className="px-4 py-2 hover:bg-gray-100" onClick={toggleMenu}>Home</a>
              <a href="#products" className="px-4 py-2 hover:bg-gray-100" onClick={toggleMenu}>Products</a>
              <a href="#about" className="px-4 py-2 hover:bg-gray-100" onClick={toggleMenu}>About</a>
              <a href="#gallery" className="px-4 py-2 hover:bg-gray-100" onClick={toggleMenu}>Gallery</a>
              <a href="#contact" className="px-4 py-2 hover:bg-gray-100" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;