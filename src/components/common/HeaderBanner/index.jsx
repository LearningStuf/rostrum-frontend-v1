import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import Link from 'next/link';

const HeaderBanner = ({ title, align = 'left', image }) => {
  // Create text alignment class based on the prop
  const textAlignClass = align === 'right' 
    ? 'text-right' 
    : align === 'center' 
      ? 'text-center' 
      : 'text-left';
      
  // Split the title by newlines if it's a string
  const titleLines = typeof title === 'string' ? title.split('\n') : null;

  return (
    <div className='w-full h-[400px] md:h-[537px] relative'>
      <Image
        src={image}
        alt='University Setting'
        fill
        style={{ objectFit: 'cover' }}
        className='-z-1'
      />
      <div className='relative z-8 md:max-w-screen-xl mx-auto h-full flex items-center justify-center md:justify-start'>
        {titleLines ? (
          <div className={`w-full ${textAlignClass}`}>
            {titleLines.map((line, index) => (
              <h1 
                key={index}
                className={`p-2 md:p-auto transition-all text-[40px] md:text-[90px] text-white font-bold leading-tight`}
              >
                {line}
              </h1>
            ))}
          </div>
        ) : (
          <h1
            className={`p-2 md:p-auto transition-all text-[40px] md:text-[90px] text-white ${textAlignClass} font-bold leading-tight w-full`}
          >
            {title}
          </h1>
        )}
        <div className='absolute right-4 md:right-16 -bottom-4'>
          <Link href='/contact'>
            <Button size='sm' type='primary' text='Contact Us'></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;