import React from 'react';
import HeroSection from '../components/HeroSection';
import Leaderboard from '../components/Leaderboard';
import Gallery from '../components/Gallery';
import SplashCursor from '../components/SplashCursor';

const HomePage = () => {
  return (
    <main>
      <SplashCursor />
      <HeroSection />
    </main>
  );
};

export default HomePage;