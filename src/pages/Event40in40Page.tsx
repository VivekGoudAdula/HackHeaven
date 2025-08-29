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
              <span>21st August 2025 – Junior Year Students<br/>29th August 2025 – Sophomore Year Students</span>
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

        <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-xl p-6 mb-8 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-emerald-400 mb-3">Thank You Participants! 🎉</h2>
          <p className="text-gray-300 text-lg">
            The event has concluded successfully! We'll be announcing the winners soon. Stay tuned to the leaderboard for updates!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-8">
            <section className="bg-gray-800/50 rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-emerald-400">Event Overview</h2>
              <p className="text-gray-300 mb-6 text-lg">
                The 40-in-40 is a fast-paced, beginner-friendly coding and logic quiz that encourages students to think quickly, 
                apply their basic programming knowledge, and sharpen problem-solving skills under time pressure. 
                The contest consists of 40 MCQs to be completed in 40 minutes, making it an engaging, 
                no-elimination competition where everyone can participate and score points without the stress of long coding tasks.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 text-emerald-400">Target Audience</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300 mb-8 text-lg">
                <li>Sophomore & Junior Students</li>              </ul>
            </section>


            <section className="bg-gray-800/50 rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-emerald-400">Rules & Guidelines</h2>
              <ul className="space-y-4 text-gray-300 text-lg">
                <li>• Individual participation only</li>
                <li>• No AI tools allowed</li>
                <li className="mt-2">• Question types include:
                  <ul className="ml-8 mt-2 space-y-2">
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

            <section className="bg-gray-800/50 rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-emerald-400">Prizes</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Winner</h4>
                    <p className="text-gray-300 text-lg">Certificate of Achievement</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-gray-300 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Runner-up</h4>
                    <p className="text-gray-300 text-lg">Certificate of Achievement</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">All Participants</h4>
                    <p className="text-gray-300 text-lg">E-certificate of Participation</p>
                  </div>
                </div>
              </div>
            </section>
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
