import React from 'react';
import { Calendar, Clock, MapPin, Award, Layout, Code, Users, Info, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import SplashCursor from '../components/SplashCursor';

const BuildAThonPage = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white pt-24 md:pt-32 pb-12 px-4 sm:px-6">
      <SplashCursor />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            BUILD-A-THON: DESIGN. DEVELOP. DEPLOY.
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm md:text-base">
            <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-lg">
              <Calendar className="w-4 h-4 mr-2 text-purple-400" />
              <span>18th September 2025</span>
            </div>
            <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-lg">
              <Clock className="w-4 h-4 mr-2 text-purple-400" />
              <span>9:30 - 4:30</span>
            </div>
            <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-lg">
              <MapPin className="w-4 h-4 mr-2 text-purple-400" />
              <span>Block A - A306, Aurora University</span>
            </div>
          </div>
          
          {/* Registration Button - Moved to top */}
          <div className="mt-8 flex justify-center relative group">
            <a
              href="https://forms.gle/NASkvouyDp5M9u1t9" // Replace with actual Google Form link
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-xl font-bold rounded-xl text-white shadow-lg hover:shadow-2xl hover:shadow-purple-500/40 hover:-translate-y-0.5 transform transition-all duration-300 animate-gradient-x bg-[length:200%_auto] hover:bg-[length:100%_auto] group-hover:scale-105"
            >
              <span className="relative z-10">Register Now</span>
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600/30 via-blue-600/30 to-purple-600/30 blur-md group-hover:blur-lg transition-all duration-500"></span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* About Section */}
          <section className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 md:h-full">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-500/10 rounded-xl mr-4">
                <Info className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">About the Event</h2>
            </div>
            <div className="pl-4 border-l-4 border-purple-500/30">
              <p className="text-gray-300 text-lg leading-relaxed">
                The Build-a-thon challenges students to transform ideas into fully functional frontend web applications within a limited time frame. 
                This event emphasizes problem-solving, coding, creativity, and UI/UX design, giving participants a platform to apply their knowledge 
                of modern web technologies while collaborating in teams.
              </p>
            </div>
          </section>

          {/* Rules Section */}
          <section className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 md:h-full">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-500/10 rounded-xl mr-4">
                <Code className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Rules & Guidelines</h2>
            </div>
            <div className="pl-4 border-l-4 border-blue-500/30">
              <ul className="space-y-4 text-gray-300 text-lg">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><span className="font-semibold text-white">Team size:</span> 2-3 members</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Project must be built during the event duration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Use of templates/boilerplates allowed, but main implementation must be original</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Can use AI tools</span>
                </li>
                <li className="pt-4 font-semibold text-white text-lg">All submissions must include:</li>
                <li className="flex items-center ml-6">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                  <span>GitHub Repository link</span>
                </li>
                <li className="flex items-center ml-6">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                  <span>Short project description (in README.md)</span>
                </li>
              </ul>
            </div>
          </section>

        </div>
        
        {/* Prizes Section - Full Width */}
        <div className="max-w-6xl mx-auto mt-6">
          <section className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-amber-500/10 rounded-xl mr-4">
                <Trophy className="w-8 h-8 text-amber-400" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Prizes & Rewards</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-6">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-4 sm:p-5 rounded-xl border border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className="bg-purple-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-center text-white mb-2">Winner Team</h3>
                <p className="text-gray-300 text-center text-sm">Certificate of Excellence</p>
              </div>
              
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-4 sm:p-5 rounded-xl border border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className="bg-blue-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-center text-white mb-2">Runner-Up Team</h3>
                <p className="text-gray-300 text-center text-sm">Certificate of Excellence</p>
              </div>
              
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-4 sm:p-5 rounded-xl border border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className="bg-amber-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Layout className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-center text-white mb-2">Best UI/UX Design</h3>
                <p className="text-gray-300 text-center text-sm">Special Recognition Certificate</p>
              </div>

              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-4 sm:p-5 rounded-xl border border-green-500/30 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className="bg-green-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-center text-white mb-2">Most Innovative Approach</h3>
                <p className="text-gray-300 text-center text-sm">Special Recognition Certificate</p>
              </div>

              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-4 sm:p-5 rounded-xl border border-red-500/30 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className="bg-red-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-center text-white mb-2">Best Technical Implementation</h3>
                <p className="text-gray-300 text-center text-sm">Special Recognition Certificate</p>
              </div>

            </div>
            <div className="mt-8">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 max-w-md mx-auto">
                <div className="flex flex-col items-center">
                  <div className="bg-purple-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Award className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-center text-white mb-2">All Participants</h3>
                  <p className="text-gray-300 text-center text-sm">Will receive a Participation Certificate!</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Back to Events Button */}
        <div className="flex justify-center mt-12">
          <Link 
            to="/events" 
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 hover:border-gray-500 text-lg font-medium rounded-xl text-white bg-gray-800/80 hover:bg-gray-700/50 transition-all duration-200"
          >
            ← Back to Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuildAThonPage;
