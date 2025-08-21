import { useEffect, useState } from 'react';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

interface Participant {
  name: string;
  registrationNumber: string;
  department: string;
  year: string;
  section: string;
  score: string;
}

const parseCSV = (csvText: string): Participant[] => {
  const lines = csvText.split('\n').filter(line => line.trim() !== '');
  if (lines.length < 2) return []; // No data rows
  
  const headers = lines[0].split(',').map(header => header.trim());
  
  return lines.slice(1).map(line => {
    // Handle CSV line with commas in values
    const values = line.split(',').map(value => value.trim());
    const entry: any = {};
    
    headers.forEach((header, index) => {
      // Simple mapping for our known headers
      let key = header.toLowerCase();
      if (key.includes('full name')) key = 'name';
      else if (key.includes('registration')) key = 'registrationNumber';
      else key = key.split(' ')[0].toLowerCase();
      
      entry[key] = values[index] || '';
    });
    
    // Ensure score is in format 'X / 40'
    if (entry.score && entry.score.includes('/')) {
      const [score] = entry.score.split('/').map((s: string) => s.trim());
      entry.score = `${score} / 40`;
    } else {
      entry.score = '0 / 40';
    }
    
    return entry as Participant;
  }).sort((a, b) => {
    // Sort by score in descending order
    const scoreA = parseInt(a.score.split('/')[0]);
    const scoreB = parseInt(b.score.split('/')[0]);
    return scoreB - scoreA;
  });
};

const Leaderboard = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCSVData = async () => {
      try {
        const response = await fetch('/quiz%20responses%20-%20Form%20Responses%201.csv');
        const csvText = await response.text();
        console.log('Raw CSV text:', csvText);
        const parsedData = parseCSV(csvText);
        console.log('Parsed data:', JSON.parse(JSON.stringify(parsedData)));
        console.log('First participant:', parsedData[0] ? JSON.parse(JSON.stringify(parsedData[0])) : 'No data');
        console.log('First participant keys:', parsedData[0] ? Object.keys(parsedData[0]) : 'No data');
        setParticipants(parsedData);
      } catch (error) {
        console.error('Error loading CSV data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCSVData();
  }, []);

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
                <div className="text-sm text-gray-400">
                  {new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>
              
              {isLoading ? (
                <div className="flex justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
                </div>
              ) : participants.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold text-white mb-2">No Participants Yet</h3>
                  <p className="text-gray-300 mb-6">Be the first to participate and top the leaderboard!</p>
                  <a 
                    href="/events" 
                    className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    Participate Now
                  </a>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Rank
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Name
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Reg No
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Department & Section
                        </th>
                        <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Points
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-900 divide-y divide-gray-700">
                      {participants.map((participant, index) => (
                        <motion.tr 
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className={index < 3 ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'hover:bg-gray-800'}
                        >
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className={`text-sm font-medium ${
                                index === 0 ? 'text-yellow-400' : 
                                index === 1 ? 'text-gray-300' : 
                                index === 2 ? 'text-amber-600' : 'text-gray-400'
                              }`}>
                                {index + 1}
                              </span>
                              {index < 3 && (
                                <span className="ml-1">
                                  {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-white">
                              {participant.name}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-300">
                              {participant.registrationNumber || 'N/A'}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-300">
                              {[participant.department, participant.year, participant.section]
                                .filter(Boolean)
                                .join(' - ') || 'N/A'}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-right">
                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              parseInt(participant.score) >= 30 ? 'bg-green-900 text-green-200' :
                              parseInt(participant.score) >= 20 ? 'bg-blue-900 text-blue-200' :
                              'bg-yellow-900 text-yellow-200'
                            }`}>
                              {participant.score}
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              
              {!isLoading && participants.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400">No participant data available.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
