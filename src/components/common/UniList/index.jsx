'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const UniList = () => {
  return (
    <div className='w-ful h-auto relative mt-10'>
      <div className='max-w-full md:max-w-screen-xl h-auto mx-2 p-3 md:p-6 md:mx-auto'>
        <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 uppercase'>
          Colleges/Universities <br /> students have made through
        </h3>
      </div>
      <div className='w-ful h-auto relative mt-10 md:mt-auto p-0'>
        <Marquee>
          {Array(7)
            .fill()
            .map((item, i) => (
              <section
                id={i}
                className='relative flex flex-col items-center justify-center m-10'
              >
                <div className='relative w-[120px] md:w-[150px] h-[120px] md:h-[150px]'>
                  <Image
                    src={`/assets/college/${i + 1}.png`}
                    //   width={150}
                    //   height={150}
                    //   style={{ maxWidth: '100%', height: 'auto' }}
                    alt='University'
                    fill={true}
                    objectFit='containe'
                  />
                </div>
                <p className='text-[20px] text-primary font-semibold mt-3'>
                  University of Oxford
                </p>
              </section>
            ))}
        </Marquee>
      </div>
    </div>
  );
};

export default UniList;
