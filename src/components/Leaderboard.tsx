import { Trophy } from 'lucide-react';

// Leaderboard component for displaying competition winners
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
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-2xl font-bold text-white mb-4 md:mb-0">
                  <div className="flex items-center">
                    <Trophy className="w-6 h-6 text-yellow-400 mr-2" />
                    Current Rankings
                  </div>
                </h3>
              </div>
              
              <div className="space-y-12">
                {/* Sophomore Year Winners */}
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-2 text-center">
                    40-IN-40: CAN YOU BEAT THE CLOCK? - SOPHOMORE YEAR
                  </h3>
                  <p className="text-center text-emerald-400 mb-4">Date: 29-08-2025</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Winner */}
                    <div className="bg-gradient-to-br from-yellow-900/50 to-yellow-800/30 p-6 rounded-lg border border-yellow-500/30">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-yellow-500 text-yellow-900 text-xs font-bold px-2.5 py-0.5 rounded-full">WINNER</span>
                        <span className="text-yellow-400">🥇</span>
                      </div>
                      <h4 className="text-xl font-bold text-white">SRUTHI ARAKALA</h4>
                      <p className="text-gray-300 text-sm mt-1">DEPT. CSE(AIML)</p>
                    </div>
                    
                    {/* Runner */}
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 p-6 rounded-lg border border-gray-600/30">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-gray-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">RUNNER</span>
                        <span className="text-gray-400">🥈</span>
                      </div>
                      <h4 className="text-xl font-bold text-white">BAYASANI SHASHANK REDDY</h4>
                      <p className="text-gray-300 text-sm mt-1">DEPT. CSE</p>
                    </div>
                  </div>
                </div>

                {/* Junior Year Winners */}
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-2 text-center">
                    40-IN-40: CAN YOU BEAT THE CLOCK? - JUNIOR YEAR
                  </h3>
                  <p className="text-center text-emerald-400 mb-4">Date: 21-08-2025</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Winner */}
                    <div className="bg-gradient-to-br from-yellow-900/50 to-yellow-800/30 p-6 rounded-lg border border-yellow-500/30">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-yellow-500 text-yellow-900 text-xs font-bold px-2.5 py-0.5 rounded-full">WINNER</span>
                        <span className="text-yellow-400">🥇</span>
                      </div>
                      <h4 className="text-xl font-bold text-white">PRANAY KUMAR</h4>
                      <p className="text-gray-300 text-sm mt-1">DEPT. CSE</p>
                    </div>
                    
                    {/* Runner */}
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 p-6 rounded-lg border border-gray-600/30">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-gray-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">RUNNER</span>
                        <span className="text-gray-400">🥈</span>
                      </div>
                      <h4 className="text-xl font-bold text-white">PATUBANDLA REMAESH</h4>
                      <p className="text-gray-300 text-sm mt-1">DEPT. CSE(AIML)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
