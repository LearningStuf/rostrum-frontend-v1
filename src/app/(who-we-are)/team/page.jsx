import React from 'react';
import HeaderBanner from '@/components/common/HeaderBanner';
import TeamList from '@/components/common/TeamList';
import CallToAction from '@/components/common/CallToAction';


const Team = () => {
  return (
    <main className='relative w-full h-auto'>
      <HeaderBanner 
      align='center'
      title={'OUR TEAM'} />
      <TeamList />
	  <CallToAction />
      <br />
      <br />
      <br />
    </main>
  );
};

export default Team;
