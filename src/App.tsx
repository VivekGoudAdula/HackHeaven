import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import MembersPage from './pages/MembersPage';
import ContactPage from './pages/ContactPage';
import LeaderboardPage from './pages/LeaderboardPage';
import GalleryPage from './pages/GalleryPage';
import Event40in40Page from './pages/Event40in40Page';
import QuizPinPage from './pages/QuizPinPage';
import QuizPage from './pages/QuizPage';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isQuizPage = location.pathname === '/quiz';
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {!isQuizPage && <Header />}
      <div className={isQuizPage ? 'fixed inset-0' : ''}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/events/40in40" element={<Event40in40Page />} />
          <Route path="/quiz-pin" element={<QuizPinPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;