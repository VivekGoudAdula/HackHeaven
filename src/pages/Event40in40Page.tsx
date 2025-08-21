import React from 'react';
import { Calendar, Clock, MapPin, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Event40in40Page = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 md:pt-32 pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            40-IN-40: CAN YOU BEAT THE CLOCK?
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm md:text-base">
            <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-lg">
              <Calendar className="w-4 h-4 mr-2 text-emerald-400" />
              <span>August 22, 2025</span>
            </div>
            <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-lg">
              <Clock className="w-4 h-4 mr-2 text-emerald-400" />
              <span>40 Minutes</span>
            </div>
            <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-lg">
              <MapPin className="w-4 h-4 mr-2 text-emerald-400" />
              <span>TBA</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-8">
            <section className="bg-gray-800/50 rounded-xl p-5 md:p-6 max-w-3xl">
              <h2 className="text-2xl font-bold mb-4 text-emerald-400">Event Overview</h2>
              <p className="text-gray-300 mb-6">
                The 40-in-40 is a fast-paced, beginner-friendly coding and logic quiz that encourages students to think quickly, 
                apply their basic programming knowledge, and sharpen problem-solving skills under time pressure. 
                The contest consists of 40 MCQs to be completed in 40 minutes, making it an engaging, 
                no-elimination competition where everyone can participate and score points without the stress of long coding tasks.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 text-emerald-400">Target Audience</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                <li>Sophomore & Junior Students</li>              </ul>
            </section>


            <section className="bg-gray-800/50 rounded-xl p-5 md:p-6 max-w-3xl">
              <h2 className="text-2xl font-bold mb-6 text-emerald-400">Rules & Guidelines</h2>
              <ul className="space-y-3 text-gray-300">
                <li>• Individual participation only</li>
                <li>• No AI tools allowed</li>
                <li>• Question types include:
                  <ul className="ml-6 mt-1 space-y-1">
                    <li>• Output prediction</li>
                    <li>• Short coding snippets</li>
                    <li>• MCQs</li>
                    <li>• Logic</li>
                  </ul>
                </li>
                <li>• Scoring: 1 point per correct answer, no negative marking</li>
                <li>• Tie-breaker: Earliest submission with highest score wins</li>
              </ul>
            </section>

            <section className="bg-gray-800/50 rounded-xl p-5 md:p-6 max-w-3xl">
              <h2 className="text-2xl font-bold mb-4 text-emerald-400">Prizes</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Winner</h4>
                    <p className="text-gray-300">Certificate of Achievement</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-gray-300 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Runner-up</h4>
                    <p className="text-gray-300">Certificate of Achievement</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">All Participants</h4>
                    <p className="text-gray-300">E-certificate of Participation</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 w-full max-w-md text-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-emerald-400 mb-2">Ready to Test Your Skills?</h3>
                  <p className="text-gray-300 mb-6">
                    Take the 40-in-40 challenge now! You'll have 40 minutes to answer 40 questions. 
                    The quiz will automatically submit when you exit fullscreen mode.
                  </p>
                </div>
                <Link 
                  to="/quiz"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-md text-white bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
                >
                  Take Quiz Now
                </Link>
                <p className="text-sm text-gray-400 mt-4">
                  Note: The quiz will open in fullscreen mode. Please allow fullscreen when prompted.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/events" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-200"
          >
            ← Back to Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Event40in40Page;
