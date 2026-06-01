import React, { useState } from 'react';
import { X } from 'lucide-react';

type GalleryItem = {
  id: number;
  image: string;
  title: string;
  category: string;
  colSpan?: string;
};

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: '/images/Front_view_of_Shop.webp',
      title: 'Front View of Our Shop',
      category: 'Shop',
    },
    {
      id: 2,
      image: '/images/2024-12-15.webp',
      title: 'Shop Interior',
      category: 'Interior',
      colSpan: 'md:col-span-2',
    },
    {
      id: 3,
      image: '/images/2024-12-15 (1).webp',
      title: 'Product Display',
      category: 'Products',
    },
    {
      id: 4,
      image: '/images/2025-05-23.webp',
      title: 'Laminate Collection',
      category: 'Laminates',
      colSpan: 'md:col-span-2',
    },
    {
      id: 5,
      image: '/images/2025-05-23 (1).webp',
      title: 'Laminate Showcase',
      category: 'Laminates',
    },
    {
      id: 6,
      image: '/images/unnamed.webp',
      title: 'Custom Designs',
      category: 'Custom',
    },
    {
      id: 7,
      image: '/images/Heatx.jpg',
      title: 'Fevicol Heatx Adhesive',
      category: 'Adhesives',
    },
    {
      id: 8,
      image: '/images/pvc-laminate.jpeg',
      title: 'PVC Laminates',
      category: 'Laminates',
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
    <section id="gallery" className="py-20 md:py-[80px] bg-primary">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-headline-md text-surface-bright mb-4">Our Showroom & Product Gallery</h2>
          <p className="text-surface-container-highest/80 font-body max-w-xl mx-auto">
            Take a virtual tour of our Kandivali West showroom — see our plywood stacks, laminate displays, and adhesive collection up close.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl h-64 cursor-pointer ${item.colSpan || ''}`}
              onClick={() => openLightbox(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-white text-4xl mb-2">zoom_in</span>
                <p className="text-white font-body text-label-md">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-headline font-semibold">{selectedImage.title}</h3>
              <p className="text-gray-300 font-body">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
