import React from 'react';
import HeaderBanner from '@/components/common/HeaderBanner';
import BlogList from '@/components/common/BlogList';
import CallToAction from '@/components/common/CallToAction';

const Blogs = () => {
  return (
    <main className='relative w-full h-auto'>
      <HeaderBanner title={'BLOGS'} />
	  <BlogList/>
      <CallToAction />
      <br />
      <br />
      <br />
    </main>
  );
};

export default Blogs;
