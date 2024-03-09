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
      title={'About Us'}
      image={'/assets/header-banner/about.png'}
      
      />
      <Mission />
      <HowWeWork />
      <CallToAction 
        image={'/assets/call-action/about.png'}
      />
      <br />
      <br />
      <br />
    </main>
  );
};

export default About;
