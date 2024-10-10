import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import Link from 'next/link';

const HeaderBanner = ({ title, align , image}) => {
  return (
    <div className='w-ful h-[400px] md:h-[537px] relative'>
      <Image
        src={image}
        alt='Univerity Sitting'
        fill
        style={{ objectFit: 'cover' }}
        className='-z-1'
      />
      <div className='relative z-8  md:max-w-screen-xl mx-auto h-full flex items-center justify-center md:justify-start'>
        <h1
          className={`p-2 md:p-auto transition-all text-[40px] md:text-[90px] text-white text-center md:text-${align} font-bold leading-tight`}
        >
          {title}
        </h1>
        <div className='absolute right-4 md:right-16 -bottom-4'>
          <Link href='/contact' >
          <Button size='sm' type='primary' text='Contact Us'></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
