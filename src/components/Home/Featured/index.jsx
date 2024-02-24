import React from 'react';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className='w-ful h-auto relative mt-10'>
      <div className='max-w-full md:max-w-screen-xl h-auto mx-2 p-3 md:p-6 md:mx-auto'>
        <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 uppercase'>
          We have been featured at
        </h3>
      </div>
	  <div className='max-w-full md:max-w-screen-xl h-auto mx-2 md:mx-auto p-3 md:p-6 flex flex-row flex-nowrap md:flex-wrap items-center justify-between overflow-x-auto'>

        {Array(6)
          .fill()
          .map((item, i) => (
            <div key={i} role='button' className='min-w-[260px] md:min-w-auto w-auto md:w-[373px] h-[154px] flex items-center justify-center bg-white shadow-md rounded-lg mb-14 me-8 md:me-auto p-3 md:p-auto' >
              <Image
                src={'/assets/featured/featured.png'}
                width={251}
                height={139}
                alt='Stats Icon...'
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Featured;
