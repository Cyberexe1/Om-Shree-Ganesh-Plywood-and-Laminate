import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605390044035-36f50ff9cfd6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Our Shop" 
                className="rounded-lg shadow-lg w-[800px] h-[600px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="font-bold text-xl">Serving Since 2020</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
            
            <p className="text-gray-700 mb-4">
              Welcome to <span className="font-semibold">Om Shree Ganesh Plywood And Laminate</span>, 
              where quality meets craftsmanship. For over two decades, we've been a trusted name in 
              providing premium plywood, laminates, and interior materials to homeowners, 
              contractors, and businesses.
            </p>
            
            <p className="text-gray-700 mb-4">
              What started as a small family business has grown into a comprehensive 
              destination for all your interior construction needs. Our journey has been 
              built on the foundation of trust, quality, and customer satisfaction.
            </p>
            
            <p className="text-gray-700 mb-6">
              We take pride in offering an extensive range of products, from top-grade 
              plywood and designer laminates to essential hardware and adhesives. Our team is 
              dedicated to helping you find the perfect materials for your projects, 
              whether you're building a new home or renovating an existing space.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-light-wood p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-gray-700">Years Experience</p>
              </div>
              <div className="bg-light-wood p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-gray-700">Happy Customers</p>
              </div>
              <div className="bg-light-wood p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary">30+</p>
                <p className="text-gray-700">Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;