import React from 'react';
import Image from 'next/image';

const HowWeWork = () => {
  const data = [
    {
      title: 'We Identify',
      description: `Our academic councillors assist you in preparing SWOT Analysis. This exercise will help you in analyzing your short term and long term goals and what you need to do to achieve them.
			Be it completing your assessments or scoring high grades in subjects or securing a seat in your dream university, setting a clear goal is the first step towards success!`,
      image: '/assets/about/1.png',
    },
    {
      title: 'WE STRATEGIZE',
      description: `Our academic councillors assist you in preparing SWOT Analysis. This exercise will help you in analyzing your short term and long term goals and what you need to do to achieve them.
			Be it completing your assessments or scoring high grades in subjects or securing a seat in your dream university, setting a clear goal is the first step towards success!`,
      image: '/assets/about/2.png',
    },
    {
      title: 'We Work',
      description: `Our academic councillors assist you in preparing SWOT Analysis. This exercise will help you in analyzing your short term and long term goals and what you need to do to achieve them.
			Be it completing your assessments or scoring high grades in subjects or securing a seat in your dream university, setting a clear goal is the first step towards success!`,
      image: '/assets/about/3.png',
    },
    {
      title: 'Our Success',
      description: `Our academic councillors assist you in preparing SWOT Analysis. This exercise will help you in analyzing your short term and long term goals and what you need to do to achieve them.
			Be it completing your assessments or scoring high grades in subjects or securing a seat in your dream university, setting a clear goal is the first step towards success!`,
      image: '/assets/about/4.png',
    },
  ];
  return (
    <div className='w-ful h-full relative mt-10 mb-10'>
      <div className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto'>
        <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 mb-8 md:mb-auto uppercase'>
          HERE’S HOW WE WORK
        </h3>
        {data.map((item, i) => (
          <div
            key={i}
            className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto grid grid-cols-1 md:grid-cols-2  gap-8'
          >
            <section
              className={`w-full h-full flex flex-col items-center md:items-start justify-center
			${i % 2 === 0 ? 'order-2 md:order-1' : 'order-2 md:order-2'}
			`}
            >
              <h4 className='text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-none mt-2 uppercase'>
                {item.title}
              </h4>
              <p className='text-[20px] text-primary font-normal text-center md:text-left mt-8'>
                {item.description}
              </p>
            </section>
            <section
              className={`w-full h-auto relative p-2 order-1
			${i % 2 === 0 ? 'order-1 md:order-2' : 'order-1 md:order-1'}
			`}
            >
              <div className='relative w-full h-[300px] md:h-[500px] '>
                <Image
                  src={item.image}
                  alt='Mission'
                  fill
                  style={{ objectFit: 'cover' }}
                  className='-z-1'
                />
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
