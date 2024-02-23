import React from 'react';
import Image from 'next/image';
import CountUp from '@/components/common/CountUp';

const statsData = [
  {
    icon: '/assets/icons/square.svg',
    score: 800,
    title: 'UNIVERSITIES GLOBALLY',
  },
  {
    icon: '/assets/icons/circle.svg',
    score: 165,
    title: 'IVY LEAGUE',
  },
  {
    icon: '/assets/icons/oval.svg',
    score: 110,
    title: 'OXBRIDGE UNIVERSITIES',
  },
  {
    icon: '/assets/icons/triangle.svg',
    score: 50,
    title: 'MENTORS AND TUTORS',
  },
];
const Stats = () => {
  return (
    <div className='w-ful h-auto relative mt-10 md:mt-auto'>
      <div className='max-w-full md:max-w-screen-xl h-auto mx-2 p-4 md:p-6 md:mx-auto grid grid-cols-1 md:grid-cols-4 gap-4'>
        {statsData.map((item, i) => (
          <section
            id={i}
            className='w-full h-auto flex flex-col items-center md:items-start justify-start mb-6 md:mb-auto'
          >
            <Image src={item.icon} width={50} height={50} alt='Stats Icon...' />
            {/* <h3 className='text-[40px] md:text-[55px] text-primary font-bold leading-none mt-5 md:mt-2'> */}
            <CountUp start={0} end={item.score} />
            {/* </h3> */}

            <h6 className='text-[22px] md:text-[28px] text-primary font-semibold leading-none mt-2'>
              {item.title}
            </h6>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Stats;
