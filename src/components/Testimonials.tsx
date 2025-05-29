import React from 'react';
import { Star, Quote } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
};

const Testimonials: React.FC = () => {
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

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={18} 
        className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-light-wood rounded-lg p-6 shadow-md relative"
            >
              <div className="absolute -top-4 -left-4 text-accent opacity-20">
                <Quote size={48} />
              </div>
              <div className="mb-4 flex">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-6 relative z-10">"{testimonial.comment}"</p>
              <div className="border-t border-gray-300 pt-4">
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;