import React from 'react';
import Leaderboard from '../components/Leaderboard';
import { motion } from 'framer-motion';

const LeaderboardPage: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24"
    >
      <Leaderboard />
    </motion.main>
  );
};

export default LeaderboardPage;
