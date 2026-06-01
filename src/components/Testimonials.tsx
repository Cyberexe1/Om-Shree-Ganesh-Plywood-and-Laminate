import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
      name: 'Rajesh Mehta',
      role: 'Homeowner',
      comment:
        'Best place in Kandivali for laminates. They have a huge catalogue and the owner is very helpful in suggesting combinations. Highly recommended!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Interior Designer',
      comment:
        'I renovated my entire kitchen with materials from Om Shree Ganesh. The team was extremely helpful in guiding me through the selection process. Very satisfied!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Vikram Singh',
      role: 'Carpenter',
      comment:
        'As a professional carpenter, I need reliable materials. Om Shree Ganesh provides excellent quality plywood that is easy to work with and stands the test of time.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile, testimonials.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const renderStars = (rating: number) => (
    <div className="flex text-secondary mb-4">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <span
            key={i}
            className="material-symbols-outlined"
            style={{ fontVariationSettings: i < rating ? "'FILL' 1" : "'FILL' 0" }}
          >
            star
          </span>
        ))}
    </div>
  );

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="bg-white p-8 rounded-3xl card-shadow italic relative min-h-[280px] flex flex-col">
      <span className="absolute top-4 right-8 text-secondary/20 text-6xl font-serif not-italic">"</span>
      {renderStars(testimonial.rating)}
      <p className="text-on-surface-variant mb-6 leading-relaxed font-body text-body-md flex-grow not-italic">
        "{testimonial.comment}"
      </p>
      <div className="border-t border-outline-variant/30 pt-4 mt-auto not-italic">
        <p className="font-bold text-primary font-body">— {testimonial.name}</p>
        <p className="text-on-surface-variant text-label-sm font-body">{testimonial.role}</p>
      </div>
    </div>
  );

  return (
    <section className="py-20 md:py-[80px] bg-surface-container-low px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-headline-md text-primary">Trusted by 500+ Homeowners & Contractors in Mumbai</h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-3xl">
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

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-card hover:bg-surface-container-low transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-secondary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-card hover:bg-surface-container-low transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="text-secondary" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-secondary' : 'bg-outline-variant'
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
