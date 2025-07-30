import React from 'react';
import SplashCursor from './SplashCursor';
import { Link } from 'react-router-dom';
import { ChevronDown, Code2 } from 'lucide-react';
import FuzzyText from './FuzzyText';
import GradientText from './GradientText';

const HeroSection = () => {
  return (
    <section className="min-h-screen matrix-bg flex items-center justify-center relative px-4 sm:px-6">
      <SplashCursor />
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto px-2 sm:px-4">
          <div className="flex flex-col items-center justify-center mb-4 sm:mb-6">
            <div className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium mb-2 sm:mb-3">
              <p className="mb-1">Centre for Future Skills</p>
              <p className="text-emerald-400">School of Engineering</p>
            </div>
            <Code2 className="h-12 w-12 sm:h-16 sm:w-16 text-emerald-400 mt-2" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 glitch-text">
            <FuzzyText 
              fontSize="clamp(2.5rem, 12vw, 10rem)" 
              fontWeight={900}
              color="#fff"
            >
              CodeVerse 
            </FuzzyText>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed">
            Welcome to the ultimate coding destination where innovation meets passion. 
            Join our community of developers, creators, and digital pioneers as we shape the future through code.
          </p>
          
          <div className="mb-8 sm:mb-10">
            <GradientText 
              colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
              animationSpeed={8}
              showBorder={false}
              className="text-xl sm:text-2xl md:text-3xl font-bold"
            >
              Code. Create. Conquer.
            </GradientText>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            {/* Buttons removed as requested */}
          </div>
        </div>
      </div>
      
      <Link
        to="/about"
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-emerald-400 hover:text-emerald-300 transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-7 w-7 sm:h-8 sm:w-8" />
      </Link>
    </section>
  );
};

export default HeroSection;