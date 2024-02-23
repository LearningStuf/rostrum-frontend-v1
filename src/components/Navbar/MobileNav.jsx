'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import DropDown from '@/components/common/Dropdown';

const MobileNav = ({resources, services,whoWeAre}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='block md:hidden relative'>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleDrawer}
          className='fixed inset-0 z-10 bg-black bg-opacity-60'
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-20 w-full bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header Section */}
        <div className='w-full flex items-center justify-between p-4'>
          <p className='block py-2 px-3 text-[24px] font-bold text-primary-dark uppercase'>
            ROSTUM
          </p>
          <button onClick={toggleDrawer} className=''>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='3' // Increase the stroke width for boldness
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M6 18L18 6M6 6l12 12' stroke='' />
            </svg>
          </button>
        </div>
        {/* Menu Items Render */}
        <ul className='bg-white w-full h-full flex flex-col items-start justify-start py-10 px-3'>
          <li className='mb-3'>
            <DropDown name='Services' items={services} />
          </li>
          <li className='mb-3'>
            <DropDown name='Who we are' items={whoWeAre} />
          </li>
          <li className='mb-3'>
            <DropDown name='Resources' items={resources} />
          </li>
          <li className='mb-3'>
            <Link
              href='/'
              className='block py-2 px-3 text-[20px] font-semibold text-primary-dark uppercase'
            >
              Contact us
            </Link>
          </li>
          <li className='mb-3'>
            <Link
              href='/'
              className='block py-2 px-3 text-[20px] font-semibold text-primary-dark uppercase'
            >
              +91 98654 98654
            </Link>
          </li>
          <li className='mb-3'>
            <DropDown name='Ind' items={services} />
          </li>
        </ul>
      </div>

      <button onClick={toggleDrawer} className=''>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='#17234F' d='M4 6h16M4 12h16M4 18h16' />
        </svg>
      </button>
    </div>
  );
};

export default MobileNav;
