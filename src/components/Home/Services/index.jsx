import React from 'react';
import Image from 'next/image';

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

const Services = () => {
  return (
    <div className='w-ful h-auto relative mt-10'>
      <div className='max-w-full md:max-w-screen-xl h-auto mx-2 p-3 md:p-6 md:mx-auto'>
        <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2'>
          Our Services
        </h3>
        <div className='relative max-w-full h-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-4'>
          {servicesData.map((item, i) => (
            <section
              key={i}
              className='w-full h-auto flex flex-col items-center md:items-start justify-start mb-6 md:mb-auto'
            >
              <Image
                src={item.image}
                width={300}
                height={300}
                alt='Stats Icon...'
                className='transition delay-100 duration-500 hover:grayscale hover:scale-110'
              />
              <h4 className='text-[28px] md:text-[40px] text-primary font-bold leading-none mt-2 uppercase'>
                {item.title}
              </h4>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
