import React from 'react';
import { Calendar, Clock, MapPin, Award, Code, Users, Code2, LayoutTemplate, Smartphone, Database, Cloud, Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BuildAThonPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 md:pt-32 pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            BUILD-A-THON
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm md:text-base">
            <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-lg">
              <Calendar className="w-4 h-4 mr-2 text-purple-400" />
              <span>18th September 2025</span>
            </div>
            <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-lg">
              <Clock className="w-4 h-4 mr-2 text-purple-400" />
              <span>9:30 AM - 5:00 PM</span>
            </div>
            <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-lg">
              <MapPin className="w-4 h-4 mr-2 text-purple-400" />
              <span>Seminar Hall, A202, A203, A210, A212 Block A, Aurora University</span>
            </div>
          </div>
        </div>

        <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 mb-8 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-purple-400 mb-3">Event Completed! 🎉</h2>
          <p className="text-gray-300 text-lg">
            Thank you to all the participants for making Build-a-thon 2025 a great success!
          </p>
        </div>

        {/* Winners Section */}
        <section className="bg-gray-800/50 rounded-xl p-6 md:p-8 max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-bold mb-6 text-purple-400 text-center">🏆 Build-a-thon 2025 Winners</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">🏆 WINNERS</h3>
              <p className="text-gray-300 text-lg">
                Alturi Revanth Reddy, Poduva Dharantej Reddy, and Salvadi Sai Manoj
              </p>
              <p className="text-gray-400 mt-1">Chaitanya Bharathi Institute of Technology</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-gray-300 mb-3">🥈 RUNNERS-UP</h3>
              <p className="text-gray-300 text-lg">
                Rishendra, Jwalin, and M. Natvej
              </p>
              <p className="text-gray-400 mt-1">Aurora Deemed University</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-bold text-blue-400 mb-3">🎨 Best UI/UX Design</h3>
              <p className="text-gray-300 text-lg">
                K. Sai Hasini and Sowmya
              </p>
              <p className="text-gray-400 mt-1">Stanley College of Engineering and Technology for Women</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-bold text-green-400 mb-3">💻 Best Technical Implementation</h3>
              <p className="text-gray-300 text-lg">
                K. Mohan Kumar, P. Anand Kumar and A. Balu Charan
              </p>
              <p className="text-gray-400 mt-1">TRR College of Technology</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-bold text-purple-400 mb-3">💡 Best Innovative Approach</h3>
              <p className="text-gray-300 text-lg">
                Tarun Parvathi, Sai Ram and Kusuma
              </p>
              <p className="text-gray-400 mt-1">Aurora Deemed University</p>
            </div>
          </div>
        </section>


        <div className="mt-12 text-center">
          <Link 
            to="/events" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuildAThonPage;
