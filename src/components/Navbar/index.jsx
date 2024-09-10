import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DropDown from '@/components/common/Dropdown';
import MobileNav from './MobileNav';

const services = [
  {
    title:'Admissions',
    routes:[
      {
        title: 'Services - admissions - boarding school',
        link:'/admissions/bording-school'
      },
      {
        title: 'Services - admissions -Business school prep',
        link:'/admissions/business-school'
      },
      {
        title: 'Services - admissions -fashion & design school',
        link:'/admissions/fasion-school'
      },
      {
        title: 'Services - admissions -IVY school',
        link:'/admissions/ivy-school'
      },
      {
        title: 'Services - admissions -Med School',
        link:'/admissions/medical-school'
      },
      {
        title: 'Services - admissions -OX bridge prep',
        link:'/admissions/oxbridge-prep'
      },
      {
        title: 'Services - admissions -Psychometric test',
        link:'/admissions/psychometric'
      },
      {
        title: 'Services - admissions _ Universities',
        link:'/admissions/top-uk-us-universities'
      },
    ]
  },
  {
    title: 'Tutoring',
    routes:[
      {
        title: 'Services -  tutoring - A level',
        link:'/tutoring/a-level'
      },
      {
        title: 'Services -  tutoring - AP',
        link:'/tutoring/ap'
      },
      {
        title: 'Services -  tutoring - IB',
        link:'/tutoring/ib'
      },
      {
        title: 'Services -  tutoring - IGCSE',
        link:'/tutoring/igcse'
      },
    ]
  },
  {
    title:'Test Prep',
    routes:[
      {
        title: 'Test Prep - LNAT',
        link:'/testprep/lnat'
      },
      {
        title: 'Test Prep - Oxford University Entrance Exam',
        link:'/testprep/oxford-uni-exam'
      },
      {
        title: 'Test Prep - GMAT',
        link:'/testprep/gmat'
      },
      {
        title: 'Test Prep - UCAT',
        link:'/testprep/ucat'
      },
      {
        title: 'Test Prep - GRE',
        link:'/testprep/gre'
      },
      {
        title: 'Test Prep - ACT',
        link:'/testprep/act'
      },
      {
        title: 'Test Prep - SAT',
        link:'/testprep/sat'
      },
      {
        title: 'Test Prep - BMAT',
        link:'/testprep/bmat'
      },
    ]
  }
];

const whoWeAre = [
  {
    title: 'About Us',
    link:'/about'
  },
  {
    title: 'Our Team',
    link:'/team'
  },
  {
    title: 'Reviews',
    link:'/reviews'
  },
];

const resources = [
  {
    title: 'Blogs',
    link:'/blogs'
  },
  {
    title: 'Events',
    link:'/events'
  },
];

const Navbar = () => {
  return (
    <nav className='bg-white w-ful h-[80px] md:h-auto relative shadow-md md:shadow-none transition-all'>
      <div className='max-w-full md:max-w-screen-xl h-full md:h-auto flex flex-wrap items-center justify-between mx-2 md:mx-auto p-3 md:p-6'>
        <section className='w-full md:w-auto h-full md:h-auto flex items-center justify-between md:justify-start'>
          <div className='translate-y-5 md:translate-y-0 z-10 relative'>
            <Link
            href='/'
            >
            <Image
              src='/assets/logo.svg'
              width={70}
              height={70}
              alt='Logo...'
            />
            </Link>
          </div>
          <div className='ms-10 hidden md:block'>
            <ul className='flex flex-row'>
              <li>
                <DropDown name='Services' items={services} />
              </li>
              <li>
                <DropDown name='Who we are' items={whoWeAre} />
              </li>
              <li>
                <DropDown name='Resources' items={resources} />
              </li>
              <li>
                <Link
                  href='/contact'
                  className='block py-2 px-3 text-[20px] font-semibold text-primary-dark uppercase transition-all duration-300 hover:text-secondary'
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <MobileNav 
          resources={resources}
          services={services}
          whoWeAre={whoWeAre}
          />
        </section>
        <section className='hidden md:block'>
          <ul className='flex flex-row'>
            <li>
              <Link
                href='/'
                className='block py-2 px-3 text-[20px] font-semibold text-primary-dark uppercase'
              >
                +91 98654 98654
              </Link>
            </li>
            <li>
              <DropDown isLeft={true} name='Ind' items={services} />
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
