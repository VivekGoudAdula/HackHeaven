import { useState, useEffect, useRef } from 'react';
import { X, Image as ImageIcon, Calendar, ChevronLeft, ChevronRight, Upload, Loader2 } from 'lucide-react';
import InauguralPoster from './inauguralposter.jpg';
import NewImage from './image.png';
import JuniorsImage from './JUNIORS.png';
import SophomoresImage from './SOPHOMORES.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

interface GalleryItem {
  id: number | string;
  title: string;
  image: string;
  description: string;
  date: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 0.5; // pixels per frame
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([
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
    },
    {
      id: 3,
      title: '40-in-40: Can You Beat The Clock? (Juniors)',
      image: JuniorsImage,
      description: '40-in-40 coding challenge for Junior Year Students',
      date: '21-08-2025'
    },
    {
      id: 4,
      title: '40-in-40: Can You Beat The Clock? (Sophomores)',
      image: SophomoresImage,
      description: '40-in-40 coding challenge for Sophomore Year Students',
      date: '29-08-2025'
    }
  ]);
  
  let animationFrameId = useRef<number>();
  let lastTimestamp = useRef<number>();


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

  const startAutoScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const scrollStep = () => {
      if (!scrollContainerRef.current) return;
      
      const now = performance.now();
      const deltaTime = lastTimestamp.current ? now - lastTimestamp.current : 16; // 60fps as fallback
      lastTimestamp.current = now;
      
      scrollContainerRef.current.scrollLeft += scrollSpeed * (deltaTime / 16);
      
      // Reset scroll position when reaching the end
      if (scrollContainerRef.current.scrollLeft >= scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth) {
        scrollContainerRef.current.scrollLeft = 0;
      }
      
      animationFrameId.current = requestAnimationFrame(scrollStep);
    };
    
    animationFrameId.current = requestAnimationFrame(scrollStep);
  };
  
  // Start auto-scroll on mount
  useEffect(() => {
    startAutoScroll();
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // Handle file upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    
    // Process each file
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      
      try {
        // In a real app, you would upload to a server here
        // For now, we'll create a local URL for the image
        const imageUrl = URL.createObjectURL(file);
        
        // Add new image to gallery
        const newItem: GalleryItem = {
          id: uuidv4(), // Generate unique ID
          title: `Uploaded Image ${galleryItems.length + i + 1}`,
          image: imageUrl,
          description: `Uploaded on ${new Date().toLocaleDateString()}`,
          date: new Date().toLocaleDateString('en-GB')
        };
        
        setGalleryItems(prev => [...prev, newItem]);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
    
    setIsUploading(false);
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current?.click();
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
          <div className="mt-6">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              multiple
              className="hidden"
            />
            <button
              onClick={triggerFileInput}
              disabled={isUploading}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUploading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="-ml-1 mr-3 h-5 w-5" />
                  Upload Images
                </>
              )}
            </button>
          </div>
        </div>
        
        <div 
          className="relative overflow-hidden pb-4 -mx-4"
          // Removed hover pause functionality
        >
          <div 
            ref={scrollContainerRef}
            className="flex space-x-6 md:space-x-10 px-4 w-max scrolling-container"
          >
            {[...galleryItems, ...galleryItems, ...galleryItems].map((item, index) => (
              <motion.div 
                key={`${item.id}-${index}`}
                className="group relative overflow-hidden rounded-lg cursor-pointer card-hover border border-gray-700 flex-shrink-0 w-96"
                onClick={() => openModal(item, index % galleryItems.length)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: (index % galleryItems.length) * 0.05 }}
              >
                <div className="aspect-[4/3] overflow-hidden w-full">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3">
                  <h3 className="text-white font-semibold text-sm line-clamp-2">{item.title}</h3>
                  <div className="text-xs text-emerald-400 mt-0.5">{item.date}</div>
                </div>
                <div className="absolute top-2 right-2 bg-gray-900/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ImageIcon className="w-3.5 h-3.5 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Gradient fade effect on the right side */}
          <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-gray-800 to-transparent pointer-events-none"></div>
          
          {/* Gradient fade effect on the left side */}
          <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-gray-800 to-transparent pointer-events-none"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-250px * ${galleryItems.length})); }
        }
        
        .scrolling-container {
          animation: scroll ${galleryItems.length * 8}s linear infinite;
        }
        
        .paused {
          animation-play-state: paused;
        }
        
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .gradient-text {
          background: linear-gradient(90deg, #10B981, #3B82F6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
      `}</style>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && selectedImage.image && selectedImage.title && (
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
                    src={selectedImage?.image} 
                    alt={selectedImage?.title}
                    className="w-full h-full object-contain max-h-[60vh]"
                  />
                </div>
                <div className="p-6 bg-gradient-to-r from-gray-900/95 to-gray-800/95 border-t border-gray-700/50">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-white font-bold text-xl bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-2">
                        {selectedImage.title}
                      </h3>
                      <p className="text-gray-300">{selectedImage?.description}</p>
                      <div className="flex items-center text-gray-400 mt-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{selectedImage?.date}</span>
                      </div>
                    </div>
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
