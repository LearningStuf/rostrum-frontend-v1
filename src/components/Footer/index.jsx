import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer class='bg-primary-light'>
      <div class='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-4'>
          <div class='mb-6 md:mb-0'>
            <Link href='/' class='flex items-center'>
              <Image
                src='/assets/logo.svg'
                width={120}
                height={120}
                alt='Logo...'
                className='-translate-y-16'
              />
            </Link>
            <p className='text-[20px] text-stone -mt-6'>
              Rostrum provides unparalleled services towards supporting students
              academically through the course along with assistance for
              admissions into students’ dream universities.
            </p>
          </div>
          <div>
            <h4 class='mb-6 text-[24px] font-semibold text-stone uppercase'>
              Quick links
            </h4>
            <ul class='text-gray-500 dark:text-gray-400 font-medium'>
              <li class='mb-4 text-[20px] text-stone' role='button'>
                Boarding Schools
              </li>
              <li class='mb-4 text-[20px] text-stone ' role='button'>
                Ivy League Prep
              </li>
              <li class='mb-4 text-[20px] text-stone ' role='button'>
                Med School
              </li>
              <li class='mb-4 text-[20px] text-stone ' role='button'>
                Ox-Bridge Prep
              </li>
              <li class='mb-4 text-[20px] text-stone ' role='button'>
                SAT TUTORING
              </li>
              <li class='mb-4 text-[20px] text-stone ' role='button'>
                BUSINESS SCHOOLS
              </li>
              <li class='mb-4 text-[20px] text-stone ' role='button'>
                PSYCHOMETRIC TEST
              </li>
            </ul>
          </div>
          <div>
            <h4 class='mb-6 text-[24px] font-semibold text-stone uppercase'>
              Address
            </h4>
            <h4 class='mb-1 text-[24px] font-semibold text-stone'>Dubai</h4>
            <p className='mb-6 text-[20px] text-stone'>
              902, Citadel Tower, Business Bay, Dubai
            </p>
            <h4 class='mb-1 text-[24px] font-semibold text-stone'>Delhi</h4>
            <p className='text-[20px] text-stone'>
              K-317, Mehrauli - Badarpur Rd, Nai Basti, Lado Sarai, New Delhi,
              Delhi 110030
            </p>
          </div>
          <div>
            <h4 class='mb-6 text-[24px] font-semibold text-stone uppercase'>
              Contact us
            </h4>
            <h4 class='mb-1 text-[24px] font-semibold text-stone'>Phone</h4>
            <ul class='text-gray-500 dark:text-gray-400 font-medium'>
              <li class='mb-1 text-[20px] text-stone' role='button'>
                UAE : +971 50 939 5354
              </li>
              <li class='mb-1 text-[20px] text-stone ' role='button'>
                IND : +91 93100 79937
              </li>
              <li class='mb-1 text-[20px] text-stone ' role='button'>
                IND : +91 124 426 2020
              </li>
              <li class='mb-1 text-[20px] text-stone ' role='button'>
                IND : +91 11 4019 9312
              </li>
            </ul>
            <h4 class='mb-1 mt-6 text-[24px] font-semibold text-stone'>
              Email address
            </h4>
            <p className='mb-6 text-[20px] text-stone'>info@rostrumedu.com</p>
          </div>
        </div>
      </div>
      <hr class='mx-auto w-full max-w-screen-xl my-4 border-primary-dark sm:mx-auto lg:mt-4' />
      <div class='mx-auto w-full max-w-screen-xl p-4 py-6 lg:pb-5'>
        <span class='text-[20px] text-stone sm:text-center'>
          © 2024{' '}
          <a href='https://flowbite.com/' class='hover:underline'>
            Rostum
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
