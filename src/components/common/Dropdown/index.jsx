'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const DropDown = ({ name, items }) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOutsideClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.document && document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className='relative' ref={ref}>
      <p
        className='py-2 px-3 text-[20px] font-semibold text-primary-dark uppercase flex items-center'
        role='button'
        onClick={() => setOpen(true)}
      >
        {name}
        <svg
          id='drop_arrow'
          data-name='drop arrow'
          xmlns='http://www.w3.org/2000/svg'
          width='13'
          height='9'
          viewBox='0 0 13 9'
          className='ms-2'
        >
          <path
            id='Polygon_1'
            data-name='Polygon 1'
            d='M5.689,1.122a1,1,0,0,1,1.621,0l4.544,6.292A1,1,0,0,1,11.044,9H1.956a1,1,0,0,1-.811-1.585Z'
            transform='translate(13 9) rotate(180)'
            fill='#17234F'
          />
        </svg>
      </p>
      {open && (
        <div
          className='absolute left-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
          tabindex='-1'
        >
          <div className='py-1 bg-white' role='none'>
            {items.map((item, i) => (
              <Link
                id={i}
                href='/'
                className='block py-2 ps-5 pe-3 text-[16px] font-semibold text-primary-light hover:bg-stone-light'
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
