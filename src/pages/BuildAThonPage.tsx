import React from 'react';
import { motion } from 'framer-motion';
import Waves from '../components/Waves';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/900.css';

const BuildAThonPage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-sans">
      <Waves
        lineColor="#ffffff"
        backgroundColor="rgba(0, 0, 0, 1)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(40px)'
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 30 + 30,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Heading */}
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-black mb-8 sm:mb-12 text-white tracking-tight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}
            >
              BUILD-A-THON
            </motion.h1>
            
            {/* Tagline */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-12 sm:mb-16 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.span 
                className="text-white inline-block whitespace-nowrap"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                DESIGN
              </motion.span>
              <motion.span 
                className="text-white inline-block whitespace-nowrap"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ type: 'spring', stiffness: 500, delay: 0.1 }}
              >
                DEVELOP
              </motion.span>
              <motion.span 
                className="text-white inline-block whitespace-nowrap"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ type: 'spring', stiffness: 500, delay: 0.2 }}
              >
                DEPLOY
              </motion.span>
            </motion.div>
            
            {/* Event Date */}
            <motion.div 
              className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              September 18, 2025 | Aurora University
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BuildAThonPage;
