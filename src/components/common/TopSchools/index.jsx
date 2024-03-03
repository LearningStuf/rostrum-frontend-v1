import React from 'react';
import Image from 'next/image';

const TopSchools = () => {
  return (
    <div className='w-full h-auto'>
      <h3 className='text-center text-[40px] md:text-[50px] text-primary font-bold leading-tight mt-14 mb-8 md:mb-auto uppercase'>
        Top UK Boarding Schools
      </h3>
      <div className='w-full h-auto flex flex-wrap items-center justify-center mt-8'>
        {Array(13)
          .fill()
          .map((item, i) => (
            <div key={i} className='flex flex-col items-center justify-center mx-4 my-8'>
              <div className='relative w-[120px] md:w-[150px] h-[120px] md:h-[150px]'>
                <Image
                  src={`/assets/college/1.png`}
                  alt='University'
                  fill={true}
                  objectFit='containe'
                />
              </div>
              <p className='text-[20px] text-primary font-semibold mt-3'>
                University of Oxford
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopSchools;
