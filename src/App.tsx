
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';

function App() {
  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <div className="w-full overflow-hidden">
        <Navbar />
        <Hero />
        <ProductShowcase />
        <WhyChooseUs />
        <AboutUs />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
        <FloatingActionButton />
      </div>
    </div>
  );
}

export default App;