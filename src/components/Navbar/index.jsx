import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DropDown from '@/components/common/Dropdown';
import MobileNav from './MobileNav';

const services = [
  {
    title: 'Service 1',
  },
];

const Navbar = () => {
  return (
    <nav className='bg-white w-ful h-[80px] md:h-auto relative shadow-md md:shadow-none'>
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
                <DropDown name='Who we are' items={services} />
              </li>
              <li>
                <DropDown name='Resources' items={services} />
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

          <MobileNav />
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
