import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import Rates from '../components/Rates';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingActionButton from '../components/FloatingActionButton';
import useDocumentMeta from '../hooks/useDocumentMeta';

const HomePage: React.FC = () => {
  useDocumentMeta({
    title: 'Om Shree Ganesh Plywood — Plywood & Sunmica, Kandivali West',
    description:
      'Plywood ₹65–₹120/sq ft, sunmica ₹900–₹3,500 per sheet. Canon, semi-marine and marine plywood at our ply shop in Kandivali West, Mumbai. Call +91 8087475826.',
    canonical: 'https://www.omshreeganeshplywood.in/',
  });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="w-full overflow-hidden">
        <Navbar />
        <Hero />
        <ProductShowcase />
        <Rates />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
        <FloatingActionButton />
      </div>
    </div>
  );
};

export default HomePage;
