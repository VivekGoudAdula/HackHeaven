import React from 'react';
import { Trophy } from 'lucide-react';

const Leaderboard: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Leaderboard
          </span>
        </h2>
        
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden p-8 text-center">
          <div className="flex flex-col items-center justify-center py-12">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full p-4 mb-6">
              <Trophy className="h-12 w-12 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Leaderboard is Empty</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Be the first to top the leaderboard! Participate in our upcoming events and challenges to earn your spot here.
            </p>
            <p className="text-sm text-gray-400">
              Check back soon for updates and start climbing the ranks!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
