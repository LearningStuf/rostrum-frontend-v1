"use client"
import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const CountUp = ({ start, end }) => {
  const [count, setCount] = useState(start);
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start({ 
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 } // Faster transition duration
          });
          startCounting();
        }
      });
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [controls]);

  const startCounting = () => {
    if (count < end) {
      const interval = setInterval(() => {
        setCount(prevCount => {
          const newCount = prevCount + 1;
          return newCount <= end ? newCount : end;
        });
      }, 20); // Interval speed remains the same

      return () => clearInterval(interval);
    }
  };

  return (
    <motion.h3
      ref={ref}
      animate={controls}
      className='text-[40px] md:text-[55px] text-primary font-bold leading-none mt-5 md:mt-2'
    >
      {count}+
    </motion.h3>
  );
};

export default CountUp;
