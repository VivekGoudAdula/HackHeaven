import React from 'react';
import { Calendar, Clock, Users, RotateCcw } from 'lucide-react';

const WeeklySchedule = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Weekly Schedule</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join us every week for structured learning sessions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Day */}
              <div className="text-center">
                <div className="bg-emerald-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-2">Every Thursday & Friday</h3>
                <p className="text-gray-300">Weekly Sessions</p>
              </div>

              {/* Duration */}
              <div className="text-center">
                <div className="bg-blue-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">2 Hours</h3>
                <p className="text-gray-300">Duration</p>
              </div>

              {/* Format */}
              <div className="text-center">
                <div className="bg-purple-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <RotateCcw className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Rotating Format</h3>
                <p className="text-gray-300">Beginner → Intermediate → Advanced</p>
              </div>

              {/* Community */}
              <div className="text-center">
                <div className="bg-orange-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-orange-400 mb-2">All Levels</h3>
                <p className="text-gray-300">Everyone Welcome</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklySchedule;