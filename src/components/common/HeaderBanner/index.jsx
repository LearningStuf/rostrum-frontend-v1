import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';

const HeaderBanner = () => {
  return (
    <div className='w-ful h-[350px] md:h-[537px] relative'>
      <Image
        src={'/assets/banner.png'}
        alt='Univerity Sitting'
        fill
        style={{ objectFit: 'cover' }}
        className='-z-1'
      />
      <div className='relative z-8  max-w-full h-full flex items-center justify-center'>
        <h1 className='transition-all text-[45px] md:text-[90px] text-white text-center font-bold leading-none'>
          ABOUT US
        </h1>
        <div className='absolute right-4 md:right-16 -bottom-4'>
          <Button size='sm' type='primary' text='Contact Us'></Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
