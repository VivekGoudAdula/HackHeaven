import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export const QuizExitPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Exit fullscreen when component mounts
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(console.error);
    }
  }, []);

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 max-w-md w-full border border-gray-700 shadow-2xl text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-emerald-500/20 p-4 rounded-full">
            <CheckCircle2 className="w-12 h-12 text-emerald-400" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-emerald-400 mb-4">Quiz Submitted</h1>
        <p className="text-gray-300 mb-6">
          Your quiz has been submitted successfully.
        </p>
        <p className="text-gray-400 mb-8">
          Thank you for participating in the 40-in-40 challenge!
        </p>
        <button 
          onClick={handleReturnHome} 
          className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default QuizExitPage;
