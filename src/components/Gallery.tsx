import React, { useState } from 'react';
import { X } from 'lucide-react';

type GalleryItem = {
  id: number;
  image: string;
  title: string;
  category: string;
};

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: '/images/Front_view_of_Shop.webp',
      title: 'Front View of Our Shop',
      category: 'Shop'
    },
    {
      id: 2,
      image: '/images/2024-12-15.webp',
      title: 'Shop Interior',
      category: 'Interior'
    },
    {
      id: 3,
      image: '/images/2024-12-15 (1).webp',
      title: 'Product Display',
      category: 'Products'
    },
    {
      id: 4,
      image: '/images/2025-05-23.webp',
      title: 'Laminate Collection',
      category: 'Laminates'
    },
    {
      id: 5,
      image: '/images/2025-05-23 (1).webp',
      title: 'Laminate Showcase',
      category: 'Laminates'
    },
    {
      id: 6,
      image: '/images/unnamed.webp',
      title: 'Custom Designs',
      category: 'Custom'
    },
    {
      id: 7,
      image: 'https://lh3.googleusercontent.com/p/AF1QipMtb0X6JQdqGFOB2Xx5QfHEQyOWh5BS3Glo3us=s680-w680-h510-rw',
      title: 'Fevicol Heatx Adhesive',
      category: 'Adhesives'
    },
    {
      id: 8,
      image: 'https://lh3.googleusercontent.com/p/AF1QipNERYeKMjLcaORxAd9TmReTf1K9Tlll9b3IOz4=s680-w680-h510-rw',
      title: 'Paintable Wall Moulds',
      category: 'Wall Moulds'
    },
    {
      id: 9,
      image: 'https://lh3.googleusercontent.com/p/AF1QipNhv4ZykxCp7JdZ_UWNfbtAPefUkGVFau8_fcE=s680-w680-h510-rw',
      title: 'Abro Double-Sided Tape',
      category: 'Tapes'
    },
    {
      id: 10,
      image: 'https://lh3.googleusercontent.com/p/AF1QipNiT5jONHHasoxu3GEBuUDzHgt34Xlu2qMO41w=s680-w680-h510-rw',
      title: 'Fevicool Marine Adhesive',
      category: 'Adhesives'
    },
    {
      id: 11,
      image: 'https://homewoodindia.in/wp-content/uploads/2022/09/pvc-laminated-sheet-new.png',
      title: 'PVC Laminates',
      category: 'Laminates'
    },
    {
      id: 12,
      image: 'https://lh3.googleusercontent.com/p/AF1QipMZPvGlQgxZItHqj3LrrPoQAn_DHRXA-Ir4AF8=s680-w680-h510-rw',
      title: 'Super Grip Bond Adhesive',
      category: 'Adhesives'
    },
  ];

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-16 bg-light-wood">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our portfolio of installations and projects showcasing our products in action.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
              onClick={() => openLightbox(item)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white text-sm">{item.category}</p>
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            <div className="max-w-4xl w-full">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
