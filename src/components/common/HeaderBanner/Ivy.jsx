import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import Link from 'next/link';

const HeaderBanner = ({ title, align = 'left', image }) => {
  return (
    <div className='w-full h-[400px] md:h-[537px] relative'>
      <Image
        src={image}
        alt='University Setting'
        fill
        style={{ objectFit: 'cover' }}
        className='-z-1'
      />
      <div className='relative z-8 w-full h-full flex'>
        <div className='absolute top-1/2 right-12 md:right-24 transform -translate-y-1/2 text-right'>
          <div className="text-[40px] md:text-[50px] text-white font-bold leading-tight">Ivy League Schools</div>
          <div className="text-[40px] md:text-[50px] text-white font-bold leading-tight  pr-[200px]">&</div>
          <div className="text-[40px] md:text-[50px] text-white font-bold leading-tight]" >Colleges Consultants</div>
        </div>
        <div className='absolute right-4 md:right-16 bottom-4'>
          <Link href='/contact'>
            <Button size='sm' type='primary' text='Contact Us'></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;