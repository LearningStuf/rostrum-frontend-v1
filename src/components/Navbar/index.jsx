import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DropDown from '@/components/common/Dropdown';
import MobileNav from './MobileNav';

const services = [
  {
    title: 'Services - admissions - boarding school',
  },
  {
    title: 'Services - admissions -Business school prep',
  },
  {
    title: 'Services - admissions -fashion & design school',
  },
  {
    title: 'Services - admissions -IVY school',
  },
  {
    title: 'Services - admissions -Med School',
  },
  {
    title: 'Services - admissions -OX bridge prep',
  },
  {
    title: 'Services - admissions -Psychometric test',
  },
  {
    title: 'Services - admissions _ Universities',
  },
  {
    title: 'Services -  tutoring - A level',
  },
  {
    title: 'Services -  tutoring - AP',
  },
  {
    title: 'Services -  tutoring - IB',
  },
  {
    title: 'Services -  tutoring - IGCSE',
  },
];

const whoWeAre = [
  {
    title: 'About Us',
  },
  {
    title: 'Our Team',
  },
  {
    title: 'Reviews',
  },
];

const resources = [
  {
    title: 'Blogs',
  },
  {
    title: 'Tutorials',
  },
  {
    title: 'Videos',
  },
];

const Navbar = () => {
  return (
    <nav className='bg-white w-ful h-[80px] md:h-auto relative shadow-md md:shadow-none transition-all'>
      <div className='max-w-full md:max-w-screen-xl h-full md:h-auto flex flex-wrap items-center justify-between mx-2 md:mx-auto p-3 md:p-6'>
        <section className='w-full md:w-auto h-full md:h-auto flex items-center justify-between md:justify-start'>
          <div className='translate-y-5 md:translate-y-0'>
            <Image
              src='/assets/logo.svg'
              width={70}
              height={70}
              alt='Logo...'
            />
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
                  href='/'
                  className='block py-2 px-3 text-[20px] font-semibold text-primary-dark uppercase'
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
              <DropDown name='Ind' items={services} />
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
