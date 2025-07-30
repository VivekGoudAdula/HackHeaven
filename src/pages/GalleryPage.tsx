import React from 'react';
import Gallery from '../components/Gallery';
import { motion } from 'framer-motion';

const GalleryPage: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24"
    >
      <Gallery />
    </motion.main>
  );
};

export default GalleryPage;
