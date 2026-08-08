import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingActionButton from '../components/FloatingActionButton';
import useDocumentMeta from '../hooks/useDocumentMeta';

const HomePage: React.FC = () => {
  useDocumentMeta({
    title: 'Plywood & Laminate Shop in Kandivali West, Mumbai | Om Shree Ganesh Plywood',
    description:
      'Om Shree Ganesh Plywood & Laminate is a plywood, laminate and adhesive dealer on Shri Sevantilal Khandwala Marg, Kandivali West, Mumbai 400067. IS 710 waterproof plywood, 500+ decorative laminates, PVC sheets, MDF boards, Fevicol adhesives and timber. Open Mon–Sat 9 AM–8 PM. Free delivery across Mumbai on bulk orders. Call +91 8087475826.',
    canonical: 'https://www.omshreeganeshplywood.in/',
  });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="w-full overflow-hidden">
        <Navbar />
        <Hero />
        <ProductShowcase />
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
