'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { getAssetUrl } from '@/utils/getAssetUrl';

const TestimonialCarousel = ({ testimonials }) => {

  
  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState(0);

  const handleSlideClick = (index) => {
    setSelectedTestimonialIndex(index);
  };

  const handleDotClick = (index) => {
    setSelectedTestimonialIndex(index);
  };

  return (
    <div className='w-ful h-auto relative my-16'>
      <div className='max-w-full md:max-w-screen-xl h-auto mx-2 p-3 md:p-6 md:mx-auto'>
        {/* Testimonial Images */}
        <div className='w-full flex justify-between items-center'>
          {/* FIRST PART */}
          <div className='hidden w-full relative mr-4 md:flex flex-col items-center'>
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                role='button'
                className={`relative rounded-full w-24 h-24 overflow-hidden mb-16 transition-all duration-500 hover:scale-125 border-4 border-white shadow-md ${
                  testimonial.id == 2 ? 'translate-x-36' : ''
                }`}
                onClick={() => handleSlideClick(index)}
              >
                <Image
                  src={getAssetUrl(testimonial?.attributes?.image)}
                  alt='Testimonial'
                  className='w-full h-full object-cover'
                  fill={true}
                  placeholder='blur'
                  blurDataURL={getAssetUrl(testimonial?.attributes?.image)}
                />
              </div>
            ))}
          </div>
          {/* SECOND PART */}
          <AnimatePresence>
            <div className='w-full relative flex flex-col items-center justify-start'>
              {testimonials.length > 0 && (
                <motion.div
                  key={selectedTestimonialIndex}
                  className='relative rounded-full w-48 h-48 overflow-hidden mb-4 border-4 border-white shadow-md'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0 }}
                >
                  <Image
                    src={getAssetUrl(testimonials[selectedTestimonialIndex]?.attributes?.image)}
                    alt='Testimonial'
                    className='w-full h-full object-cover'
                    fill={true}
                    placeholder='blur'
                    blurDataURL={getAssetUrl(testimonials[selectedTestimonialIndex]?.attributes?.image)}
                  />
                </motion.div>
              )}
              <p className='text-[14px] text-primary font-normal text-center px-4'>
                {testimonials[selectedTestimonialIndex]?.attributes?.description}
              </p>
              <p className='text-[18px] text-primary font-bold text-center mt-4'>
              {testimonials[selectedTestimonialIndex]?.attributes?.name}
              </p>
              <p className='text-[14px] text-primary font-normal text-center'>
              {testimonials[selectedTestimonialIndex]?.attributes?.university}
              </p>
              {/* Pagination Dots */}
              <div className='flex justify-center mt-6'>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 mx-2 rounded-full focus:outline-none ${
                      index === selectedTestimonialIndex
                        ? 'bg-primary'
                        : 'bg-semi-gray'
                    }`}
                  />
                ))}
              </div>
            </div>
          </AnimatePresence>
          {/* THIRD PART */}
          <div className='hidden w-full relative  md:flex flex-col items-center'>
            {testimonials.slice(3, 6).map((testimonial, index) => (
              <div
                key={index}
                role='button'
                className={`relative rounded-full w-24 h-24 overflow-hidden mb-16 transition-all duration-500 hover:scale-125 border-4 border-white shadow-md ${
                  testimonial.id == 5 ? '-translate-x-36' : ''
                }`}
                onClick={() => handleSlideClick(index + 3)}
              >
                <Image
                  src={getAssetUrl(testimonial?.attributes?.image)}
                  alt='Testimonial'
                  className='w-full h-full object-cover'
                  fill={true}
                  placeholder='blur'
                  blurDataURL={getAssetUrl(testimonial?.attributes?.image)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
