import React from 'react';
import { Target, Eye, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const objectives = [
    'Foster a collaborative learning environment for coding enthusiasts',
    'Organize hands-on workshops and technical sessions',
    'Prepare students for competitive programming contests',
    'Build real-world projects and portfolios',
    'Connect students with industry professionals and opportunities',
    'Promote open-source contributions and GitHub collaboration'
  ];

  const missionPoints = [
    'Empower students with cutting-edge programming skills',
    'Create a supportive community for technical growth',
    'Bridge the gap between academic learning and industry requirements',
    'Encourage innovation and creative problem-solving'
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 gradient-text">About CodeVerse</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            <span className="text-emerald-400 font-medium sm:font-semibold">Technical | Coding & Programming | Innovation & Development</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Vision */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-xl card-hover border border-gray-700">
            <div className="flex items-center mb-4 md:mb-6">
              <Eye className="h-7 w-7 md:h-8 md:w-8 text-blue-400 mr-3" />
              <h3 className="text-xl md:text-2xl font-bold text-blue-400">Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              To cultivate a thriving ecosystem of passionate programmers and innovators who push the boundaries 
              of technology while building a strong foundation for their future careers in the digital world.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-xl card-hover border border-gray-700 lg:col-span-2">
            <div className="flex items-center mb-4 md:mb-6">
              <Target className="h-7 w-7 md:h-8 md:w-8 text-emerald-400 mr-3" />
              <h3 className="text-xl md:text-2xl font-bold text-emerald-400">Mission</h3>
            </div>
            <ul className="text-gray-300 space-y-2 md:space-y-3">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-emerald-400 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Objectives */}
        <div className="bg-gray-900 p-6 md:p-8 rounded-xl border border-gray-700">
          <h3 className="text-xl md:text-2xl font-bold text-orange-400 mb-4 md:mb-6 flex items-center">
            <Target className="h-6 w-6 md:h-8 md:w-8 mr-2 md:mr-3" />
            Our Objectives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-orange-400 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-300">{objective}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;