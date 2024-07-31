import React from 'react';
import Image from 'next/image';
import AnimatedText from '@/components/common/AnimatedText'
import { getAssetUrl } from "@/utils/getAssetUrl";

const HeroHeader = ({data}) => {
  return (
    <div className='w-ful h-auto md:h-[calc(100vh_-_80px)] relative'>
      <div className='max-w-full md:max-w-screen-xl h-auto md:h-full mx-2 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
        <section className='max-w-full p-4 md:p-6 flex items-center justify-center order-2 md:order-none'>
          {/* <h1 className='transition-all text-[45px] md:text-[90px] text-primary text-center md:text-left font-bold leading-none'>
            ONE STEP CLOSER TO YOUR DREAM UNIVERSITY
          </h1> */}
          <AnimatedText sentence={data?.text} />
        </section>
        <section className='relative max-w-full h-auto md:h-full p-8 md:p-6 order-1 md:order-none'>
          <Image
            src={getAssetUrl(data?.image)}
            width={800}
            height={800}
            quality={100}
            alt={data?.text}
            className='transition-all duration-500 hover:scale-110'
            role='button'
          />
        </section>
      </div>
    </div>
  );
};

export default HeroHeader;
