import React, { useState } from 'react';
import { X, Image as ImageIcon, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import InauguralPoster from './inauguralposter.jpg';
import NewImage from './image.png';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  description: string;
  date: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'CodeVerse Poster',
      image: InauguralPoster,
      description: 'Official poster for the club inauguration event',
      date: '2025'
    },
    {
      id: 2,
      title: 'CodeVerse Inaugural',
      image: NewImage,
      description: 'CodeVerse Inaugural by Mrs. Jayasri Mam and Mr. K. Ravikanth Sir',
      date: '31-07-2025'
    }
  ];

  const openModal = (item: GalleryItem, index: number) => {
    setSelectedImage(item);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryItems.length;
    } else {
      newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    }
    
    setCurrentIndex(newIndex);
    setSelectedImage(galleryItems[newIndex]);
  };

  return (
    <section id="gallery" className="py-12 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 gradient-text">
            Gallery
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            <span className="text-emerald-400 font-medium sm:font-semibold">Memories | Events | Highlights</span>
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer card-hover border border-gray-700"
              onClick={() => openModal(item, index)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3">
                <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                <div className="text-xs text-emerald-400 mt-0.5">{item.date}</div>
              </div>
              <div className="absolute top-2 right-2 bg-gray-900/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ImageIcon className="w-3.5 h-3.5 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="relative max-w-5xl w-full max-h-[90vh] bg-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 p-2 rounded-full text-white z-10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
                <div className="max-h-[70vh] overflow-hidden">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full max-h-[70vh] object-contain"
                  />
                </div>
                <div className="p-6 bg-gradient-to-r from-gray-900/95 to-gray-800/95 border-t border-gray-700/50">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-white font-bold text-xl bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                        {selectedImage.title}
                      </h3>
                      <p className="text-gray-300 text-sm mt-1 max-w-2xl">{selectedImage.description}</p>
                    </div>
                    <span className="px-3 py-1 bg-gray-800/80 text-emerald-300 text-xs rounded-full border border-emerald-400/20">
                      {selectedImage.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        <style jsx global>{`
          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .gallery-modal-enter {
            opacity: 0;
            transform: scale(0.9);
          }
          .gallery-modal-enter-active {
            opacity: 1;
            transform: scale(1);
            transition: opacity 300ms, transform 300ms;
          }
          .gallery-modal-exit {
            opacity: 1;
          }
          .gallery-modal-exit-active {
            opacity: 0;
            transform: scale(0.9);
            transition: opacity 300ms, transform 300ms;
          }
        `}</style>

        {/* Empty state in case no items */}
        {galleryItems.length === 0 && (
          <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden p-8 text-center">
            <div className="flex flex-col items-center justify-center py-12">
              <div className="bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full p-4 mb-6">
                <Camera className="h-12 w-12 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Gallery is Empty</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Our gallery is currently empty. Check back after our next event to see photos from our community activities, workshops, and meetups.
              </p>
              <p className="text-sm text-gray-400">
                Follow us on social media to stay updated on upcoming events!
              </p>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
