'use client';
import React from 'react';
import { motion } from 'framer-motion';

const AnimationProvider = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    //   viewport={{ once: true }}
    >
      {children}
    </motion.main>
  );
};

export default AnimationProvider;
