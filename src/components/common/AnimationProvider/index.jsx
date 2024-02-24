'use client';
import React from 'react';
import { motion } from 'framer-motion';

const AnimationProvider = ({
  children,
  animationType,
  duration,
  className,
  style,
}) => {
  let animationProps = {};

  switch (animationType) {
    case 'slide-up':
      animationProps = {
        initial: { y: 100, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
      };
      break;
    case 'slide-left':
      animationProps = {
        initial: { x: -50, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
      };
      break;
    case 'slide-right':
      animationProps = {
        initial: { x: 50, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
      };
      break;
    default:
      animationProps = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
      };
  }

  return (
    <motion.main
      {...animationProps}
      transition={{ duration: duration }}
      viewport={{ once: true }}
      className={className}
      style={style}
    >
      {children}
    </motion.main>
  );
};

export default AnimationProvider;
