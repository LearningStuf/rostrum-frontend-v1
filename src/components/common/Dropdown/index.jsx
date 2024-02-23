'use client';
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const DropDown = ({ name, items , isLeft}) => {
  const pathname = usePathname();
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOutsideClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.document &&
      document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(()=>{
    setOpen(false)
  },[pathname])
  
  return (
    <div className='relative' ref={ref}>
      <p
        className='py-2 px-3 text-[20px] font-semibold text-primary-dark uppercase flex items-center'
        role='button'
        onClick={() => setOpen(!open)} // Toggle the dropdown
      >
        {name}
        <svg
          id='drop_arrow'
          data-name='drop arrow'
          xmlns='http://www.w3.org/2000/svg'
          width='13'
          height='9'
          viewBox='0 0 13 9'
          className={`ms-2 ${open ? 'rotate-180' : ''}`} // Rotate arrow icon when open
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
      <div
        className={`absolute ${isLeft ? 'right-0':'left-0'} z-10  origin-top-right  bg-white shadow-sm transition-all duration-300 ${
          open ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='menu-button'
        tabIndex='-1'
      >
        <div className='py-1 min-w-[400px] max-h-[300px] overflow-y-scroll bg-light-yellow rounded-md' role='none'>
          {items.map((item, i) => (
            <Link
              key={i}
              href={item?.link ? item.link : '/'}
              className='block py-2 ps-5 pe-3 text-[16px] font-semibold text-primary-light transition-all delay-100 hover:text-secondary'
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
