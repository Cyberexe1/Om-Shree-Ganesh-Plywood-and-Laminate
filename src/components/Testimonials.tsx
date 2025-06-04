import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
};

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Interior Designer',
      comment: 'Om Shree Ganesh has been my go-to supplier for all plywood and laminate needs. Their quality is consistently excellent, and their pricing is very competitive.',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Home Owner',
      comment: 'I renovated my entire kitchen with materials from Om Shree Ganesh. The team was extremely helpful in guiding me through the selection process. Very satisfied!',
      rating: 5
    },
    {
      id: 3,
      name: 'Vikram Singh',
      role: 'Carpenter',
      comment: 'As a professional carpenter, I need reliable materials. Om Shree Ganesh provides excellent quality plywood that is easy to work with and stands the test of time.',
      rating: 4
    },
  ];

  // Check if screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto-slide functionality for mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isMobile, testimonials.length]);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={18} 
        className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
      />
    ));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="bg-orange-50 rounded-lg p-6 shadow-md relative min-h-[280px] flex flex-col">
      <div className="absolute -top-4 -left-4 text-orange-600 opacity-20">
        <Quote size={48} />
      </div>
      <div className="mb-4 flex">
        {renderStars(testimonial.rating)}
      </div>
      <p className="text-gray-700 mb-6 relative z-10 flex-grow">"{testimonial.comment}"</p>
      <div className="border-t border-gray-300 pt-4 mt-auto">
        <p className="font-semibold text-orange-800">{testimonial.name}</p>
        <p className="text-gray-600 text-sm">{testimonial.role}</p>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with us.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile Slider View */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-orange-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="text-orange-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-orange-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
