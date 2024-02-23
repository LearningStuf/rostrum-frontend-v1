'use client';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';



const CallToAction = () => {
  return (
    <div className='w-ful h-full md:h-[467px] relative mt-10 md:mt-auto py-8  md:p-0'>
      <Image
        src={'/assets/call-action.png'}
        alt='Univerity Sitting'
        fill
        style={{ objectFit: 'cover' }}
        className='-z-1'
      />
      <div className='relative z-10  max-w-full md:max-w-screen-xl h-full mx-2 md:mx-auto p-3 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
        <section className='w-full h-full flex flex-col items-start justify-center'>
          <h2 className='text-[45px] md:text-[70px] text-white font-bold uppercase leading-none'>
            Join <br /> the Rostrum Community
          </h2>
          <h4 className='text-[30px] md:text-[45px] text-white font-bold'>
            contact us today
          </h4>
        </section>
        <section className='w-full h-full flex flex-col items-center justify-center'>
          <Button
            // onClick={() => alert('hello')}
            size='lg'
            type='secondary'
            text='Speak with an advisor'
          />
        </section>
      </div>
    </div>
  );
};

export default CallToAction;
