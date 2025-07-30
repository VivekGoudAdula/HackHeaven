import React from 'react';
import { Camera } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 md:py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">
          <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Gallery
          </span>
        </h2>
        
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden p-5 sm:p-6 md:p-8 text-center">
          <div className="flex flex-col items-center justify-center py-8 sm:py-10 md:py-12">
            <div className="bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full p-3 sm:p-4 mb-4 sm:mb-6">
              <Camera className="h-10 w-10 sm:h-12 sm:w-12 text-gray-900" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Gallery is Empty</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-md">
              Our gallery is currently empty. Check back after our next event to see photos from our community activities, workshops, and meetups.
            </p>
            <p className="text-xs sm:text-sm text-gray-400">
              Follow us on social media to stay updated on upcoming events!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
