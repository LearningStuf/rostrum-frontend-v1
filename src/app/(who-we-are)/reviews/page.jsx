import React from 'react';
import HeaderBanner from '@/components/common/HeaderBanner';
import ReviewsList from '@/components/common/ReviewsList';
import CallToAction from '@/components/common/CallToAction';

const Reviews = () => {
  return (
    <main className='relative w-full h-auto'>
      <HeaderBanner title={'REVIEWS'} />
      <ReviewsList />
      <CallToAction />
      <br />
      <br />
      <br />
    </main>
  );
};

export default Reviews;
