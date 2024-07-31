import React from 'react';
import Image from 'next/image';
import AnimationProvider from '@/components/common/AnimationProvider';
import { getAssetUrl } from '@/utils/getAssetUrl';


const servicesData = [
  {
    image: '/assets/services/service-1.png',
    title: 'Admissions',
  },
  {
    image: '/assets/services/service-2.png',
    title: 'tutoring',
  },
  {
    image: '/assets/services/service-3.png',
    title: 'Test prep',
  },
];

const Services = ({data , services}) => {
  return (
    <div className='w-ful h-auto relative mt-10'>
      <div className='max-w-full md:max-w-screen-xl h-auto mx-2 p-3 md:p-6 md:mx-auto'>
        <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2'>
          Our Services
        </h3>
        <div className='relative max-w-full h-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-4'>
          {services?.map((item, i) => (
            <AnimationProvider key={i} animationType='slide-up' >
            <section

              className='w-full h-auto flex flex-col items-center md:items-start justify-start mb-6 md:mb-auto'
            >
              <Image
                src={getAssetUrl(item?.image)}
                width={300}
                height={300}
                alt='Stats Icon...'
                className='transition delay-100 duration-500 hover:grayscale hover:scale-110'
              />
              <h4 className='text-[28px] md:text-[40px] text-primary font-bold leading-none mt-2 uppercase'>
                {item?.title}
              </h4>
            </section>
            </AnimationProvider>
          ))}
        </div>
      </div>
      <div className='max-w-full md:max-w-screen-xl h-auto mx-2 md:mx-auto mb-6 p-4 md:p-6  grid grid-cols-1 md:grid-cols-2 gap-4'>
        <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2'>
          {data?.title}
        </h3>
        <p className='text-[20px] text-primary font-semibold text-center md:text-left'>
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default Services;
