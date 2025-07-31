import React from 'react';
import { Trophy, Award, Star, Medal } from 'lucide-react';

interface LeaderboardEntry {
  id: number;
  name: string;
  rollNumber: string;
  year: string;
  branch: string;
  points: number;
}

const Leaderboard: React.FC = () => {
  const leaderboardData: LeaderboardEntry[] = [
    {
      id: 1,
      name: 'Polla Vishnu Vardhan',
      rollNumber: '231U1R2002',
      year: 'Junior Year',
      branch: 'CSE (AIML)',
      points: 1000
    },
    {
      id: 2,
      name: 'Akshay Sagar',
      rollNumber: '231U1R1023',
      year: 'Junior Year',
      branch: 'CSE',
      points: 930
    },
    {
      id: 3,
      name: 'Sreesha Thummalapalli',
      rollNumber: '241U1R3013',
      year: 'Sophomore Year',
      branch: 'CSE (DS)',
      points: 910
    },
    {
      id: 4,
      name: 'Mandula Nomika',
      rollNumber: '231U1R2008',
      year: 'Junior Year',
      branch: 'CSE (AIML)',
      points: 900
    },
    {
      id: 5,
      name: 'Ganesh Suthoju',
      rollNumber: '231U1R1048',
      year: 'Junior Year',
      branch: 'CSE',
      points: 890
    },
    {
      id: 6,
      name: 'Jai Krishna Penaganti',
      rollNumber: '241U1R1014',
      year: 'Sophomore Year',
      branch: 'CSE (AIML)',
      points: 885
    },
    {
      id: 7,
      name: 'Sai Poojitha',
      rollNumber: '241U1R64',
      year: 'Junior Year',
      branch: 'CSE (AIML)',
      points: 870
    }
  ];

  const getMedal = (position: number) => {
    switch (position) {
      case 1: return <Medal className="h-5 w-5 text-yellow-400" />;
      case 2: return <Medal className="h-5 w-5 text-gray-300" />;
      case 3: return <Medal className="h-5 w-5 text-amber-600" />;
      default: return <span className="text-gray-400">{position}</span>;
    }
  };

  return (
    <section id="leaderboard" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Leaderboard
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-12 bg-gray-700 py-4 px-6 font-semibold text-gray-200">
            <div className="col-span-1">#</div>
            <div className="col-span-5">Name</div>
            <div className="col-span-3">Details</div>
            <div className="col-span-3 text-right">Points</div>
          </div>
          
          {leaderboardData.map((entry, index) => (
            <div 
              key={entry.id}
              className={`grid grid-cols-12 items-center py-4 px-6 border-b border-gray-700 hover:bg-gray-750 transition-colors ${
                index === 0 ? 'bg-gradient-to-r from-yellow-900/30 to-transparent' : ''
              }`}
            >
              <div className="col-span-1 flex items-center justify-center">
                {getMedal(index + 1)}
              </div>
              <div className="col-span-5 font-medium">
                <div className="flex items-center gap-2">
                  {index === 0 && <Award className="h-5 w-5 text-yellow-400" />}
                  {entry.name}
                </div>
                <div className="text-sm text-gray-400">{entry.rollNumber}</div>
              </div>
              <div className="col-span-3 text-sm text-gray-300">
                <div>{entry.year}</div>
                <div className="text-gray-400">{entry.branch}</div>
              </div>
              <div className="col-span-3 text-right">
                <div className="inline-flex items-center bg-gray-700 px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="font-bold">{entry.points}</span>
                  <span className="ml-1 text-sm text-gray-300">PTS</span>
                </div>
              </div>
            </div>
          ))}
          
          <div className="p-6 text-center text-gray-400 text-sm">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
