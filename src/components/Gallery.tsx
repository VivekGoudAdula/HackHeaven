import React from 'react';
import { Camera } from 'lucide-react';
import InauguralPoster from './inauguralposter.jpg';

const Gallery: React.FC = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'Inaugural Poster',
      image: InauguralPoster,
      description: 'Official poster for the club inauguration event',
      date: '2024'
    },
    // Add more gallery items here as needed
  ];

  return (
    <section id="gallery" className="py-8 sm:py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Gallery
          </span>
        </h2>
        
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {galleryItems.map((item) => (
              <div 
                key={item.id} 
                className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="w-full">
                      <h3 className="text-white font-semibold text-base">{item.title}</h3>
                      <p className="text-gray-200 text-sm">{item.description}</p>
                      <span className="inline-block mt-1 text-xs text-gray-300">{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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
      </div>
    </section>
  );
};

export default Gallery;
