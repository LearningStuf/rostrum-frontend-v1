import React from 'react';
import Image from 'next/image';

const Mission = () => {
  return (
    <div className='w-ful h-full relative mt-10'>
      <div className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        <section className='w-full h-full flex flex-col items-center md:items-start justify-end'>
          <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 uppercase'>
            OUR MISSION
          </h3>
          <p className='text-[20px] text-primary font-normal text-center md:text-left mt-8'>
            Rostrum Education is a premier tutoring and education consultancy
            founded in London in 2016 with an aim – “to assist students with
            their learning curve and to provide them a global platform, thereby
            enabling them to achieve their academic goals.” With a motto to
            teach beyond boundaries, Rostrum provides a diverse range of
            tutoring and consultancy services to students belonging to different
            curriculums like International Baccalaureate, IGCSE and A- Levels.
            Rostrum is headquartered in London and operates around the world
            with offices in Dubai and New Delhi, creating a global matrix of
            learning. Our team of experienced tutors help students realize their
            full potential, to achieve academic excellence. Furthermore, this
            academic excellence is translated into success by our education
            consultants and counsellors who facilitate students in securing
            admission into the university of their choice.
          </p>
        </section>
        <section className='w-full h-auto relative p-2'>
          <div className='relative w-full h-[500px] -mt-22'>
            <Image
              src={'/assets/about/mission.png'}
              alt='Mission'
              fill
              style={{ objectFit: 'cover' }}
              className='-z-1'
            />
          </div>
          <p className='text-[20px] text-primary font-normal text-center md:text-left mt-8'>
            Apart from our team, we also have the Rostrum Community – a vast
            network consisting of students and alumni from leading universities
            around the world – to guide and motivate students. We welcome you to
            join the Rostrum community to lay the foundation to a successful
            future!
          </p>
        </section>
      </div>
    </div>
  );
};

export default Mission;
