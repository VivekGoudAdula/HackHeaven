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
              <span>A306 Block A, Aurora University</span>
            </div>
          </div>
        </div>

        <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-xl p-6 mb-8 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-emerald-400 mb-3">Event Completed! 🎉</h2>
          <p className="text-gray-300 text-lg">
            Thank you to all participants for making 40-in-40 a great success!
          </p>
        </div>

        {/* Winners Section */}
        <section className="bg-gray-800/50 rounded-xl p-6 md:p-8 max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-bold mb-6 text-emerald-400 text-center">🏆 40-in-40 Winners</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-emerald-500/30">
              <h3 className="text-xl font-bold text-emerald-400 mb-4">40-IN-40: CAN YOU BEAT THE CLOCK? - JUNIOR YEAR</h3>
              <p className="text-gray-300 text-lg font-medium">Date: 21-08-2025</p>
              
              <div className="mt-6 space-y-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="text-yellow-400 text-lg font-semibold">WINNER 🥇</h4>
                  <p className="text-white text-lg">P. Pranay Kumar Reddy</p>
                  <p className="text-gray-300">Roll No: 231U1R1012 | Dept: CSE</p>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="text-gray-300 text-lg font-semibold">RUNNER 🥈</h4>
                  <p className="text-white text-lg">Patabandula Ramesh</p>
                  <p className="text-gray-300">Roll No: 231U1R2001 | Dept: AIML</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-emerald-500/30">
              <h3 className="text-xl font-bold text-emerald-400 mb-4">40-IN-40: CAN YOU BEAT THE CLOCK? - SOPHOMORE YEAR</h3>
              <p className="text-gray-300 text-lg font-medium">Date: 29-08-2025</p>
              
              <div className="mt-6 space-y-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="text-yellow-400 text-lg font-semibold">WINNER 🥇</h4>
                  <p className="text-white text-lg">Arakala Sruthi</p>
                  <p className="text-gray-300">Roll No: 241U1R2011 | Dept: AIML</p>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="text-gray-300 text-lg font-semibold">RUNNER 🥈</h4>
                  <p className="text-white text-lg">Bayasani Shashank Reddy</p>
                  <p className="text-gray-300">Roll No: 241U1R1025 | Dept: CSE</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-8">
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
