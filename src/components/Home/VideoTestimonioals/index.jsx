import React from 'react';
import Image from 'next/image';

const videoTestimonials = [];
const VideoTestimonials = () => {
  return (
    <div className='w-ful h-auto relative mt-10'>
      <div className='max-w-full md:max-w-screen-xl h-auto mx-2 md:mx-auto mb-6 p-4 md:p-6  grid grid-cols-1 md:grid-cols-2 gap-4'>
        <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2'>
          WHAT STUDENTS SAY ABOUT US
        </h3>
        <p className='text-[20px] text-primary font-semibold text-center md:text-left'>
          Our results in the past have been unrivalled, scoring the highest
          number of Oxbridge selections in India.
          <br />
          We strive to develop a desire and hope within our students that
          Oxford, Cambridge, Stanford, Harvard, Columbia….. can happen for
          them!!
        </p>
      </div>
      <div className='w-ful h-full md:h-[467px] relative mt-10 md:mt-auto bg-bg-dark p-0'>
        <div className='max-w-full h-full md:max-w-screen-xl mx-2 md:mx-auto p-0 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4'>
          {Array(4)
            .fill()
            .map((item, i) => (
              <section
                key={i}
                role='button'
                className={`relative w-full h-[467px] md:h-full flex flex-col items-start justify-end ps-6 pb-4`}
              >
                <Image
                  src={`/assets/testimonials/video/${i + 1}.png`}
                  alt='Testimonial'
                  fill
                  style={{ objectFit: 'cover' }}
                  className='-z-1'
                />
                <button className='relative z-10 transition-all  duration-300 hover:scale-105'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='58'
                    height='58'
                    viewBox='0 0 58 58'
                  >
                    <g
                      id='Group_357'
                      data-name='Group 357'
                      transform='translate(-1347 -2429)'
                    >
                      <path
                        id='Polygon_8'
                        data-name='Polygon 8'
                        d='M15.325,4.484a3,3,0,0,1,5.192,0L33.235,26.448a3,3,0,0,1-2.6,4.5H5.2a3,3,0,0,1-2.6-4.5Z'
                        transform='translate(1394.951 2440) rotate(90)'
                        fill='#fff'
                      />
                      <g
                        id='Ellipse_76'
                        data-name='Ellipse 76'
                        transform='translate(1347 2429)'
                        fill='none'
                        stroke='#fff'
                        strokeWidth='3'
                      >
                        <circle cx='29' cy='29' r='29' stroke='none' />
                        <circle cx='29' cy='29' r='27.5' fill='none' />
                      </g>
                    </g>
                  </svg>
                </button>
                <p className='relative z-10  text-[20px] text-white font-bold mt-4'>
                  Yukti Arora
                </p>
                <p className='relative z-10 text-[20px] text-white font-normal'>
                  Columbia university
                </p>
              </section>
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonials;
