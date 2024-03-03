'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingTextAnimation = ({ sentence }) => {
  const [text, setText] = useState(sentence[0]);
  const typingSpeed = 100;
  const delayBetweenSentences = 1000;

  useEffect(() => {
    let index = 0;
    let timer;

    const typeNextCharacter = () => {
      index++;
      setText((prevText) => prevText + sentence[index]);

      if (index < sentence.length - 1) {
        timer = setTimeout(typeNextCharacter, typingSpeed);
      }
    };

    // Start typing
    timer = setTimeout(typeNextCharacter, typingSpeed);

    // Clean up on unmount or if the component rerenders
    return () => clearTimeout(timer);
  }, [sentence]);

  return (
    <div>
      <motion.h1
        className='transition-all text-[45px] md:text-[90px] text-primary text-center md:text-left font-bold leading-none'
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default TypingTextAnimation;
