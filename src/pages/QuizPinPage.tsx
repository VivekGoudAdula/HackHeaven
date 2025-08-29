import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const QuizPinPage = () => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '148259') {
      // Start screen sharing
      navigator.mediaDevices.getDisplayMedia({ video: true })
        .then(stream => {
          // Stop the tracks to end the screen share preview
          stream.getTracks().forEach(track => track.stop());
          navigate('/quiz');
        })
        .catch(err => {
          setError('Screen sharing is required to continue with the quiz.');
          console.error('Error accessing screen share:', err);
        });
    } else {
      setError('Incorrect PIN. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="bg-gray-800/80 rounded-xl p-8 max-w-md w-full">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-gray-400 hover:text-white mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-1" /> Back
        </button>
        
        <h1 className="text-2xl font-bold mb-2">Enter Quiz PIN</h1>
        <p className="text-gray-400 mb-6">Please enter the 6-digit PIN provided by the event organizer</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="text"
              value={pin}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                setPin(value);
                setError('');
              }}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white text-center text-2xl tracking-widest"
              placeholder="Enter 6-digit PIN"
              maxLength={6}
              autoFocus
            />
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
          </div>
          
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            disabled={pin.length !== 6}
          >
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuizPinPage;
