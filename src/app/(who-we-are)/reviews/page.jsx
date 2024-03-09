import React from 'react';
import HeaderBanner from '@/components/common/HeaderBanner';
import ReviewsList from '@/components/common/ReviewsList';
import CallToAction from '@/components/common/CallToAction';

const Reviews = () => {
  return (
    <main className='relative w-full h-auto'>
      <HeaderBanner 
      align='center'
      title={'REVIEWS'} 
      image={"/assets/header-banner/about.png"}
      />
      <ReviewsList />
      <CallToAction image={"/assets/call-action/home.png"} />
      <br />
      <br />
      <br />
    </main>
  );
};

export default Reviews;
