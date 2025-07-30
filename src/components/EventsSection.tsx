import { useState } from 'react';
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const EventsSection = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const events = [
    {
      id: 1,
      title: 'Kickstart: CodeVerse Inauguration',
      date: new Date(2025, 6, 31),
      description: 'Official inauguration of CodeVerse club and introduction to the club\'s vision',
      tag: 'Inaugural',
      time: '3:00 PM - 4:30 PM',
      location: 'Seminar Hall'
    },
    {
      id: 2,
      title: 'Syntax Showdown',
      date: new Date(2025, 7, 14),
      description: 'Test your coding skills in this fast-paced coding competition with various programming challenges',
      tag: 'Contest',
      time: '3:00 PM - 4:30 PM',
      location: 'TBA'
    },
    {
      id: 3,
      title: 'Git, GitHub & You',
      date: new Date(2025, 8, 11),
      description: 'Learn version control with Git and GitHub, from basics to advanced workflows',
      tag: 'Workshop',
      time: '3:00 PM - 4:30 PM',
      location: 'TBA'
    },
    {
      id: 4,
      title: 'Code Golf',
      date: new Date(2025, 9, 9),
      description: 'Solve coding problems using the fewest characters possible in this fun competition',
      tag: 'Contest',
      time: '3:00 PM - 4:30 PM',
      location: 'TBA'
    },
    {
      id: 5,
      title: 'Web Rush 101',
      date: new Date(2025, 10, 13),
      description: 'Build a Stunning Web App using HTML, CSS & a Pinch of JS — Team-Based Challenge!',
      tag: 'Hackathon',
      time: '3:00 PM - 4:30 PM',
      location: 'TBA'
    },
    {
      id: 6,
      title: 'Hack-it-in-2',
      date: new Date(2025, 11, 11),
      description: 'Two-hour hackathon to build something amazing in a short time',
      tag: 'Hackathon',
      time: '3:00 PM - 4:30 PM',
      location: 'TBA'
    },
    {
      id: 7,
      title: 'Algo Combat',
      date: new Date(2026, 0, 8),
      description: 'Competitive programming contest focusing on algorithms and data structures',
      tag: 'Contest',
      time: '3:00 PM - 4:30 PM',
      location: 'TBA'
    },
    {
      id: 8,
      title: 'Logic Over UI',
      date: new Date(2026, 1, 12),
      description: 'Focus on problem-solving and logic building with minimal UI elements',
      tag: 'Workshop',
      time: '3:00 PM - 4:30 PM',
      location: 'TBA'
    },
    {
      id: 9,
      title: 'Design Jam',
      date: new Date(2026, 2, 12),
      description: 'Hands-on session on UI/UX design principles and tools',
      tag: 'Workshop',
      time: '3:00 PM - 4:30 PM',
      location: 'TBA'
    }
  ];

  const tagColors = {
    Workshop: 'bg-blue-500',
    Hackathon: 'bg-purple-500',
    Contest: 'bg-orange-500',
    Inaugural: 'bg-green-400'
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const navigateMonth = (direction: number) => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(currentMonth.getMonth() + direction);
    setCurrentMonth(newDate);
  };

  const currentMonthEvents = events.filter(event => 
    event.date.getMonth() === currentMonth.getMonth() &&
    event.date.getFullYear() === currentMonth.getFullYear()
  );

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gradient-text">Event Calendar</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with our upcoming workshops, hackathons, and coding contests
          </p>
        </div>

        {/* Calendar Header */}
        <div className="bg-gray-800 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-700">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <button
              onClick={() => navigateMonth(-1)}
              className="p-1.5 sm:p-2 rounded-lg bg-gray-700 hover:bg-gray-600 active:bg-gray-500 transition-colors"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <h3 className="text-xl sm:text-2xl font-bold text-center">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h3>
            
            <button
              onClick={() => navigateMonth(1)}
              className="p-1.5 sm:p-2 rounded-lg bg-gray-700 hover:bg-gray-600 active:bg-gray-500 transition-colors"
              aria-label="Next month"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Events List */}
          <div className="space-y-3 sm:space-y-4">
            {currentMonthEvents.length > 0 ? (
              currentMonthEvents.map((event) => (
                <div key={event.id} className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-gray-600 card-hover">
                  <div className="flex flex-wrap items-start justify-between mb-3 sm:mb-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center mb-2 gap-2">
                        <h4 className="text-lg sm:text-xl font-bold text-white break-words">{event.title}</h4>
                        <span className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold text-white ${tagColors[event.tag as keyof typeof tagColors]} whitespace-nowrap`}>
                          {event.tag}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-300 mb-3">{event.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                      <span>{event.date.toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-400">
                <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No events scheduled for this month</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;