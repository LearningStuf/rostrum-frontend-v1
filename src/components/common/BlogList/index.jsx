import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimationProvider from '../AnimationProvider';

const BlogList = () => {
  return (
    <div className='w-ful h-full relative mt-10 mb-10'>
      <div className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-12'>
        {Array(12)
          .fill()
          .map((item, i) => (
            <AnimationProvider key={i} animationType='slide-up' duration={0.4} >
            <div
              
              class='max-w-sm h-autooverflow-hidden shadow-lg rounded-3xl pb-4'
            >
              <div className='w-full h-[300px] relative'>
                <Image
                  src='/assets/blog.jpeg'
                  alt='Sunset in the mountains'
                  fill={true}
                  style={{ objectFit: 'cover' }}
                  className='rounded-tr-3xl rounded-tl-3xl'
                />
              </div>
              <div class='px-6 py-4'>
                <h6 className='text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-none mt-4'>
                  We Work
                </h6>
                <p className='text-[20px] text-primary font-normal text-center md:text-left mt-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
                <Link
                  href='/'
                  className='text-secondary mt-2 block text-center md:text-left'
                >
                  Read more
                </Link>
              </div>
            </div>

            </AnimationProvider>
          ))}
      </div>
    </div>
  );
};

export default BlogList;
