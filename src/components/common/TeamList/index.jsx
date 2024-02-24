import React from 'react';
import Image from 'next/image';
import AnimationProvider from '../AnimationProvider';
const TeamList = () => {
  return (
    <div className='w-ful h-full relative mt-36 mb-10'>
      <div className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        {Array(12)
          .fill()
          .map((item, i) => (
            <AnimationProvider key={i} animationType='slide-up' duration={0.4}>
              <div
                className='w-full h-auto px-6 py-12 flex flex-col items-center justify-center shadow-lg rounded-2xl mb-36'
              >
                <Image
                  src={'/assets/team.jpg'}
                  alt='Team'
                  width={170}
                  height={240}
                  className='rounded-full -mt-36 mb-4  transition-all duration-500 hover:scale-105'
                  role='button'
                />
                <h6 className='text-[22px] md:text-[28px] text-primary font-semibold leading-none mt-2'>
                  Gwen
                </h6>
                <p className='text-[20px] text-primary font-bold text-center mt-2'>
                  Ivy League Specialist
                </p>
                <p className='text-[20px] text-primary font-normal text-center mt-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea
                </p>
              </div>
            </AnimationProvider>
          ))}
      </div>
    </div>
  );
};

export default TeamList;
