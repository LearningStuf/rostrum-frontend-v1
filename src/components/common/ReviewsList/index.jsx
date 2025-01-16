import React from 'react';
import Image from 'next/image';
import AnimationProvider from '../AnimationProvider';
import { getAssetUrl } from '@/utils/getAssetUrl';

const ReviewsList = ({data}) => {
  return (
    <div className='w-ful h-full relative mt-10 mb-10'>
      <div className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto flex flex-col items-start justify-start'>
        {data?.map((item, i) => (
            <AnimationProvider
              className={`w-full md:w-[75%] h-auto py-8 md:py-10 px-4 md:px-16 flex flex-col  items-center justify-center md:justify-start rounded-3xl mb-10
              ${
                i % 2 === 0
                  ? 'self-start md:flex-row'
                  : 'self-end md:flex-row-reverse'
              }
              `}
              key={i}
              animationType='slide-up'
              duration={0.4}
              style={{ boxShadow: '0px 3px 10px #00000029' }}
            >

              <Image
                src={getAssetUrl(item?.image)}
                alt='Team'
                width={170}
                height={240}
                className={`rounded-full transition-all duration-500 hover:scale-105 bg-primary
                ${i % 2 === 0 ? 'md:-translate-x-28' : 'md:translate-x-28'}`}
                role='button'
              />
              
              <section>
                <h6 className='text-[22px] md:text-[28px] text-primary text-center md:text-left font-semibold leading-none mt-6 md:mt-2'>
                {item?.name}
                </h6>
                <p className='text-[20px] text-primary font-bold text-center md:text-left mt-2'>
                {item?.designation}
                </p>
                <p className='text-[20px] text-primary font-normal text-center md:text-left mt-2'>
                {item?.description}
                </p>
              </section>
              {/* </div> */}
            </AnimationProvider>
          ))}
      </div>
    </div>
  );
};

export default ReviewsList;
