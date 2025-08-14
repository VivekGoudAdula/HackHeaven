import React from 'react';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const Leaderboard = () => {
  return (
    <section id="leaderboard" className="py-12 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 gradient-text">
            Leaderboard
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            <span className="text-emerald-400 font-medium sm:font-semibold">Competitions | Rankings | Achievements</span>
          </p>  
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
            <div className="p-8 md:p-10 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-yellow-400 to-amber-500 p-4 rounded-full shadow-lg">
                  <Trophy className="w-12 h-12 text-white" strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Upcoming Events</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Get ready to showcase your coding skills in our upcoming events! 
                Compete with peers, solve challenging problems, and earn your spot at the top of the leaderboard.
              </p>
              
              <div className="mt-12 pt-8 border-t border-gray-700">
                <p className="text-gray-400 text-sm md:text-base">
                  Stay tuned for more details about these events. Follow us on social media for updates!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
