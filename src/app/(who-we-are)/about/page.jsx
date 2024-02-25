import React from 'react';
import HeaderBanner from '@/components/common/HeaderBanner';
import Mission from '@/components/About/Mission';
import HowWeWork from '@/components/About/HowWeWork';
import CallToAction from '@/components/common/CallToAction';

const About = () => {
  return (
    <main className='relative w-full h-auto'>
      <HeaderBanner 
      align='center'
      title={'About Us'} />
      <Mission />
      <HowWeWork />
      <CallToAction />
      <br />
      <br />
      <br />
    </main>
  );
};

export default About;
