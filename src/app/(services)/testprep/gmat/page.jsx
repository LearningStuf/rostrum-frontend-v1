import React from 'react';
import Image from 'next/image';
import HeaderBanner from '@/components/common/HeaderBanner';
import CallToAction from '@/components/common/CallToAction';
import AnimationProvider from '@/components/common/AnimationProvider';

const GMAT = () => {
  const features = [
    {
      icon: '/assets/gmat/icons/1.svg',
      title: '700/800',
      description: `85% + students score over 700 on their GMAT!`,
    },
    {
      icon: '/assets/gmat/icons/2.svg',
      title: 'ONE 2 ONE',
      description: `Personal tutoring for personalised care`,
    },
    {
      icon: '/assets/gmat/icons/3.svg',
      title: 'DIGITALISED EDUCATION',
      description: `Smart classes | interactive whiteboards`,
    },
    {
      icon: '/assets/gmat/icons/4.svg',
      title: 'EXCLUSIVE COURSE MATERIAL',
      description: `Access to exclusive study material specially curated 
      to achieve personal best in GMAT`,
    },
  ];
  const qualities = [
    {
      title: 'Perfect Foundation:',
      description: `We help you construct a good foundation of concepts by equipping you with the right resources and tutoring systematically for GMAT. We also undertake classroom exercises and employ various techniques to aid you in formulating a unique test taking strategy by taking GMAT practice test.`,
    },
    {
      title: 'IR Skills:',
      description: `Integrated Reasoning in GMAT is quite challenging due to the various types 
      of questions and data presented. 
      It requires a unique and dynamic approach to solve them in the given time. You need to know the parameters from the given information and draw conclusions. We provide assorted IR questions to ensure practice and cultivate problem solving skills to perform well in the final GMAT test.`,
    },
    {
      title: 'Analytical Writing Skills:',
      description: `If you are taking the GMAT then you need to develop necessary language, writing, critical thinking and analytical skills to attempt the Analytical Writing Assessment. We understand that you can’t develop them overnight. Our tutors help you improve your analytical and writing skills using comprehensive methods for the students all over the world including India and UAE.`,
    },
  ];
  const data = [
    {
      title: 'Excellent Educators-',
      description: `Each of Rostrum’s educators is the greatest in his field. And each of them has received training in presenting a simplified teaching technique that achieves maximum outcomes with the least amount of work.`,
    },
    {
      title: 'Proven results—',
      description: `we’ll let our former students and the internet speak for themselves on this one. Take a look at some of the feedback we’ve received. (https://rostrumedu.com/reviews/)`,
    },
    {
      title: 'GMAT Practice Test Series-',
      description: ` Ever wished you could obtain a complete drill-down analysis, from a histogram displaying your marks, time taken, and attempts vs. the top scorers to a line graph showing marks vs. percentile? Not only that, but we also take a lot of GMAT practice exams to help you improve your abilities with each try so you can give it your all on the big day.`,
    },
    {
      title: '',
      description: `You may study for your examinations in a relaxed and comfortable setting from the convenience of your own home or office with online tutoring. There are no distractions, which allows you to concentrate better. The Rostrum team has the top teachers who will not only help you achieve high grades but also assist you build some fantastic abilities. Rostrum’s online GMAT preparation will help you achieve the marks you desire to get into your dream business school.`,
    },
  ];
  return (
    <main className='relative w-full h-auto'>
      <HeaderBanner align='left' title={'GMAT EXAM PREPARATION'} />
      <div className='w-ful h-full relative mt-10 mb-10'>
        <div className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto'>
          <div className='relative w-full md:w-11/12  mx-auto flex items-start'>
            <span className='text-secondary text-[128px] font-semibold -translate-y-12 '>
              “
            </span>
            <h6 className=' text-[22px] md:text-[28px] text-primary text-center font-semibold leading-tight'>
              Out of the 200,000 annual test takers, you’ll be amongst those
              scoring over 700. We have a very organised structure of tutoring
              which brings us our students their desired results. We offer
              tutoring services all over the world including India and UAE.
              <span className='text-secondary text-[128px] -translate-y-2 translate-x-6 self-end leading-none absolute'>
                “
              </span>
            </h6>
          </div>
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
            <section className='mt-auto md:mt-18'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4'>
                What is the GMAT?
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                The GMAT exam is a computer-adaptive test which assesses the
                candidates’ analytical writing, quantitative, verbal and reading
                skills in standard written English. This test is taken to be
                offered admission into a graduate management program, such as
                MBA and Masters in Finance related courses in top business
                schools around the world. It is the most widely accepted exam
                for MBA admissions. No other exam has as wide acceptance as
                GMAT, 9 out of 10 MBA admissions are made based on GMAT Score.
                Over 2,500 schools accept GMAT Scores to complete admission
                processes.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                There is no such eligibility criteria given by GMAC, which is
                the body conducting GMAT for appearing for the GMAT exam. Though
                one should meet the eligibility criteria set by the
                university/college you plan on getting into. The candidate must
                have completed 18 years of age. The Graduate Management
                Admission Test is a standardised test for graduate admissions,
                such as MBA schools.
              </p>
            </section>
            <section className='flex flex-col items-center'>
              <Image
                src='/assets/gmat/banner-1.png'
                width={471}
                height={471}
                alt='What is the GMAT?'
              />
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                The purpose of the test is to examine the candidate’s knowledge
                and thinking capacity in areas that are prerequisites and
                critical for management and business success.
                <br />
                You can take the test up to five times in a year at a 16-day
                interval, but your total number of tries should not exceed
                eight. Every year, about 200,000 hopeful applicants take the
                test. Some people do well, while others do not. Proper strategy
                and preparation make all the difference.
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-8 mt-10'>
            {features.map((item, i) => (
              <section
                key={i}
                className='w-full shadow-md rounded-md flex flex-col items-start justify-between py-6 px-4'
              >
                <Image
                  src={item.icon}
                  width={84.45}
                  height={99.67}
                  alt={item.title}
                />
                <div className='mt-4'>
                  <h6 className='text-[22px] md:text-[28px] text-primary  md:text-left font-bold leading-tight '>
                    {item.title}
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    {item.description}
                  </p>
                </div>
              </section>
            ))}
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
            <section className='mt-auto md:mt-14'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4'>
                Significance of the GMAT exam
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                The importance of the GMAT goes far beyond MBA admissions. The
                GMAT exam is the finest way to get started on your path to a
                successful career. Over 7000 business and management
                institutions across the world recognize the GMAT Exam Score. For
                world-class business executives seeking admission to top
                business schools, this is the exam of choice. Because the GMAT
                Exam allows you to exhibit the talents that will be most useful
                in business school and throughout your career, it is a good idea
                to take it. Business schools trust GMAT examinations and utilize
                them to make admission choices.
              </p>
            </section>
            <section className='flex flex-col items-center'>
              <Image
                src='/assets/gmat/banner-2.png'
                width={471}
                height={471}
                alt='Significance of the GMAT exam'
              />
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                The GMAT exam will help you stand out during the admissions
                process. It is the most widely used and reliable metric for
                evaluating academic achievement in MBA and other graduate
                programs. Indeed, a GMAT score is used in nine out of 10 MBA
                admissions decisions.
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
            <section className='mt-auto md:mt-14'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4'>
                Syllabus of GMAT Exam
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                If you intend to take the GMAT exam, you must first familiarize
                yourself with the exam’s syllabus and structure. Before you can
                learn how to study, you must first know what to study. Because
                the GMAT is a standardized exam, the structure and design of the
                exam have stayed very constant over time.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                The GMAT (Graduate Management Admission Test) is a roughly
                three-and-a-half-hour business school entrance test that
                contains the following four components:
              </p>
            </section>
            <section className='flex flex-col items-center'>
              <Image
                src='/assets/gmat/banner-3.png'
                width={571}
                height={571}
                alt='Significance of the GMAT exam'
              />
            </section>
          </div>
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='flex items-start justify-start'>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='27.538'
                  height='26.358'
                  viewBox='0 0 27.538 26.358'
                >
                  <g
                    id='Group_110'
                    data-name='Group 110'
                    transform='translate(-26.404 -138.506)'
                  >
                    <g id='Group_109' data-name='Group 109'>
                      <path
                        id='Path_276'
                        data-name='Path 276'
                        d='M41.793,139.683l2.082,6.408a1.705,1.705,0,0,0,1.621,1.178h6.738a1.7,1.7,0,0,1,1,3.082l-5.451,3.961a1.7,1.7,0,0,0-.619,1.9l2.082,6.408a1.7,1.7,0,0,1-2.622,1.9l-5.451-3.96a1.7,1.7,0,0,0-2,0l-5.451,3.96a1.7,1.7,0,0,1-2.623-1.9l2.082-6.408a1.7,1.7,0,0,0-.619-1.9l-5.451-3.961a1.7,1.7,0,0,1,1-3.082h6.738a1.706,1.706,0,0,0,1.621-1.178l2.082-6.408a1.7,1.7,0,0,1,3.241,0'
                        fill='#ff335a'
                      />
                    </g>
                  </g>
                </svg>
              </span>
              <div>
                <p className='text-[16px] md:text-[20px] text-primary font-bold text-left ms-4'>
                  Analytical Writing Assessment
                </p>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-left'>
                  An analytical writing test that assesses critical thinking and
                  communication abilities.
                </p>
              </div>
            </div>
            <div className='flex items-start justify-start '>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='27.538'
                  height='26.358'
                  viewBox='0 0 27.538 26.358'
                >
                  <g
                    id='Group_110'
                    data-name='Group 110'
                    transform='translate(-26.404 -138.506)'
                  >
                    <g id='Group_109' data-name='Group 109'>
                      <path
                        id='Path_276'
                        data-name='Path 276'
                        d='M41.793,139.683l2.082,6.408a1.705,1.705,0,0,0,1.621,1.178h6.738a1.7,1.7,0,0,1,1,3.082l-5.451,3.961a1.7,1.7,0,0,0-.619,1.9l2.082,6.408a1.7,1.7,0,0,1-2.622,1.9l-5.451-3.96a1.7,1.7,0,0,0-2,0l-5.451,3.96a1.7,1.7,0,0,1-2.623-1.9l2.082-6.408a1.7,1.7,0,0,0-.619-1.9l-5.451-3.961a1.7,1.7,0,0,1,1-3.082h6.738a1.706,1.706,0,0,0,1.621-1.178l2.082-6.408a1.7,1.7,0,0,1,3.241,0'
                        fill='#ff335a'
                      />
                    </g>
                  </g>
                </svg>
              </span>
              <div>
                <p className='text-[16px] md:text-[20px] text-primary font-bold text-left ms-4'>
                  Quantitative Reasoning
                </p>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-left'>
                  A part on quantitative reasoning, which assesses students’
                  mathematical aptitude and numerical literacy.
                </p>
              </div>
            </div>
            <div className='flex items-start justify-start'>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='27.538'
                  height='26.358'
                  viewBox='0 0 27.538 26.358'
                >
                  <g
                    id='Group_110'
                    data-name='Group 110'
                    transform='translate(-26.404 -138.506)'
                  >
                    <g id='Group_109' data-name='Group 109'>
                      <path
                        id='Path_276'
                        data-name='Path 276'
                        d='M41.793,139.683l2.082,6.408a1.705,1.705,0,0,0,1.621,1.178h6.738a1.7,1.7,0,0,1,1,3.082l-5.451,3.961a1.7,1.7,0,0,0-.619,1.9l2.082,6.408a1.7,1.7,0,0,1-2.622,1.9l-5.451-3.96a1.7,1.7,0,0,0-2,0l-5.451,3.96a1.7,1.7,0,0,1-2.623-1.9l2.082-6.408a1.7,1.7,0,0,0-.619-1.9l-5.451-3.961a1.7,1.7,0,0,1,1-3.082h6.738a1.706,1.706,0,0,0,1.621-1.178l2.082-6.408a1.7,1.7,0,0,1,3.241,0'
                        fill='#ff335a'
                      />
                    </g>
                  </g>
                </svg>
              </span>
              <div>
                <p className='text-[16px] md:text-[20px] text-primary font-bold text-left ms-4'>
                  Integrated reasoning{' '}
                </p>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-left'>
                  An integrated reasoning portion that assesses students’
                  ability to analyse data and understand information presented
                  in a variety of formats.
                </p>
              </div>
            </div>
            <div className='flex items-start justify-start'>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='27.538'
                  height='26.358'
                  viewBox='0 0 27.538 26.358'
                >
                  <g
                    id='Group_110'
                    data-name='Group 110'
                    transform='translate(-26.404 -138.506)'
                  >
                    <g id='Group_109' data-name='Group 109'>
                      <path
                        id='Path_276'
                        data-name='Path 276'
                        d='M41.793,139.683l2.082,6.408a1.705,1.705,0,0,0,1.621,1.178h6.738a1.7,1.7,0,0,1,1,3.082l-5.451,3.961a1.7,1.7,0,0,0-.619,1.9l2.082,6.408a1.7,1.7,0,0,1-2.622,1.9l-5.451-3.96a1.7,1.7,0,0,0-2,0l-5.451,3.96a1.7,1.7,0,0,1-2.623-1.9l2.082-6.408a1.7,1.7,0,0,0-.619-1.9l-5.451-3.961a1.7,1.7,0,0,1,1-3.082h6.738a1.706,1.706,0,0,0,1.621-1.178l2.082-6.408a1.7,1.7,0,0,1,3.241,0'
                        fill='#ff335a'
                      />
                    </g>
                  </g>
                </svg>
              </span>
              <div>
                <p className='text-[16px] md:text-[20px] text-primary font-bold text-left ms-4'>
                  Verbal Reasoning
                </p>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-left'>
                  A part on verbal reasoning, which assesses reading
                  comprehension, editing skills, and the ability to comprehend
                  written arguments.
                </p>
              </div>
            </div>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
            <section className=''>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4'>
                GMAT Official Guide 2022
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                The GMAT Official Guide (OG) 2022 is now out, and it includes a
                few new features. The Official Guide for GMAT is the most
                extensively utilized GMAT study resource, and it contains
                retired questions that have previously appeared on the GMAT
                test. The OG for GMAT is a question bank including over 1000
                questions from past GMAT examinations. They are the most similar
                to the GMAT’s actual questions.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                It is, nevertheless, insufficient for the entire preparation.
                Aside from the GMAT Official Guide, we recommend that you use
                other GMAT Prep resources. The GMAC also recommends not to
                depend upon the Official guide completely, you can refer to GMAT
                practice tests and GMAT online coaching.
              </p>
            </section>
            <section className='flex flex-col items-center'>
              <Image
                src='/assets/gmat/banner-4.png'
                width={883}
                height={883}
                alt='GMAT Official Guide 2022 '
              />
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-12 gap-8 mt-14'>
            <section className='col-span-12 md:col-span-8'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4'>
                GMAT online coaching and how is it beneficial
              </h3>
            </section>
            <section className='col-span-12 md:col-span-4'>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Don’t feel like driving large distances after a hard day at work
                or at college?
                <br />
                If that’s the case, then this is the one for you. Let’s look at
                some of the benefits of GMAT online tutoring:
              </p>
            </section>
          </div>
          <div className='w-full h-auto grid grid-cols-12 gap-8 mt-4'>
            <section className='col-span-12 md:col-span-4'>
              <Image
                src='/assets/gmat/banner-5.png'
                width={451}
                height={451}
                alt='GMAT online coaching and how is it beneficial'
              />
            </section>
            <section className='col-span-12 md:col-span-8'>
              <div className='flex items-start mb-4'>
                <span className='me-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='27.538'
                    height='26.358'
                    viewBox='0 0 27.538 26.358'
                  >
                    <g
                      id='Group_110'
                      data-name='Group 110'
                      transform='translate(-26.404 -138.506)'
                    >
                      <g id='Group_109' data-name='Group 109'>
                        <path
                          id='Path_276'
                          data-name='Path 276'
                          d='M41.793,139.683l2.082,6.408a1.705,1.705,0,0,0,1.621,1.178h6.738a1.7,1.7,0,0,1,1,3.082l-5.451,3.961a1.7,1.7,0,0,0-.619,1.9l2.082,6.408a1.7,1.7,0,0,1-2.622,1.9l-5.451-3.96a1.7,1.7,0,0,0-2,0l-5.451,3.96a1.7,1.7,0,0,1-2.623-1.9l2.082-6.408a1.7,1.7,0,0,0-.619-1.9l-5.451-3.961a1.7,1.7,0,0,1,1-3.082h6.738a1.706,1.706,0,0,0,1.621-1.178l2.082-6.408a1.7,1.7,0,0,1,3.241,0'
                          fill='#ff335a'
                        />
                      </g>
                    </g>
                  </svg>
                </span>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left'>
                  You can take classes from the convenience of your own home.
                </p>
              </div>
              <div className='flex items-start mb-4'>
                <span className='me-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='27.538'
                    height='26.358'
                    viewBox='0 0 27.538 26.358'
                  >
                    <g
                      id='Group_110'
                      data-name='Group 110'
                      transform='translate(-26.404 -138.506)'
                    >
                      <g id='Group_109' data-name='Group 109'>
                        <path
                          id='Path_276'
                          data-name='Path 276'
                          d='M41.793,139.683l2.082,6.408a1.705,1.705,0,0,0,1.621,1.178h6.738a1.7,1.7,0,0,1,1,3.082l-5.451,3.961a1.7,1.7,0,0,0-.619,1.9l2.082,6.408a1.7,1.7,0,0,1-2.622,1.9l-5.451-3.96a1.7,1.7,0,0,0-2,0l-5.451,3.96a1.7,1.7,0,0,1-2.623-1.9l2.082-6.408a1.7,1.7,0,0,0-.619-1.9l-5.451-3.961a1.7,1.7,0,0,1,1-3.082h6.738a1.706,1.706,0,0,0,1.621-1.178l2.082-6.408a1.7,1.7,0,0,1,3.241,0'
                          fill='#ff335a'
                        />
                      </g>
                    </g>
                  </svg>
                </span>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left'>
                  Use the time spent travelling to accomplish something more
                  productive.
                </p>
              </div>
              <div className='flex items-start mb-4'>
                <span className='me-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='27.538'
                    height='26.358'
                    viewBox='0 0 27.538 26.358'
                  >
                    <g
                      id='Group_110'
                      data-name='Group 110'
                      transform='translate(-26.404 -138.506)'
                    >
                      <g id='Group_109' data-name='Group 109'>
                        <path
                          id='Path_276'
                          data-name='Path 276'
                          d='M41.793,139.683l2.082,6.408a1.705,1.705,0,0,0,1.621,1.178h6.738a1.7,1.7,0,0,1,1,3.082l-5.451,3.961a1.7,1.7,0,0,0-.619,1.9l2.082,6.408a1.7,1.7,0,0,1-2.622,1.9l-5.451-3.96a1.7,1.7,0,0,0-2,0l-5.451,3.96a1.7,1.7,0,0,1-2.623-1.9l2.082-6.408a1.7,1.7,0,0,0-.619-1.9l-5.451-3.961a1.7,1.7,0,0,1,1-3.082h6.738a1.706,1.706,0,0,0,1.621-1.178l2.082-6.408a1.7,1.7,0,0,1,3.241,0'
                          fill='#ff335a'
                        />
                      </g>
                    </g>
                  </svg>
                </span>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left'>
                  More time for self-study and the freedom to view the classes
                  at your leisure.
                </p>
              </div>
              <div className='flex items-start mb-4'>
                <span className='me-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='27.538'
                    height='26.358'
                    viewBox='0 0 27.538 26.358'
                  >
                    <g
                      id='Group_110'
                      data-name='Group 110'
                      transform='translate(-26.404 -138.506)'
                    >
                      <g id='Group_109' data-name='Group 109'>
                        <path
                          id='Path_276'
                          data-name='Path 276'
                          d='M41.793,139.683l2.082,6.408a1.705,1.705,0,0,0,1.621,1.178h6.738a1.7,1.7,0,0,1,1,3.082l-5.451,3.961a1.7,1.7,0,0,0-.619,1.9l2.082,6.408a1.7,1.7,0,0,1-2.622,1.9l-5.451-3.96a1.7,1.7,0,0,0-2,0l-5.451,3.96a1.7,1.7,0,0,1-2.623-1.9l2.082-6.408a1.7,1.7,0,0,0-.619-1.9l-5.451-3.961a1.7,1.7,0,0,1,1-3.082h6.738a1.706,1.706,0,0,0,1.621-1.178l2.082-6.408a1.7,1.7,0,0,1,3.241,0'
                          fill='#ff335a'
                        />
                      </g>
                    </g>
                  </svg>
                </span>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left'>
                  There will be different sessions for doubt clearance, so you
                  won’t miss out.
                </p>
              </div>
              <div className='flex items-start mb-4'>
                <span className='me-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='27.538'
                    height='26.358'
                    viewBox='0 0 27.538 26.358'
                  >
                    <g
                      id='Group_110'
                      data-name='Group 110'
                      transform='translate(-26.404 -138.506)'
                    >
                      <g id='Group_109' data-name='Group 109'>
                        <path
                          id='Path_276'
                          data-name='Path 276'
                          d='M41.793,139.683l2.082,6.408a1.705,1.705,0,0,0,1.621,1.178h6.738a1.7,1.7,0,0,1,1,3.082l-5.451,3.961a1.7,1.7,0,0,0-.619,1.9l2.082,6.408a1.7,1.7,0,0,1-2.622,1.9l-5.451-3.96a1.7,1.7,0,0,0-2,0l-5.451,3.96a1.7,1.7,0,0,1-2.623-1.9l2.082-6.408a1.7,1.7,0,0,0-.619-1.9l-5.451-3.961a1.7,1.7,0,0,1,1-3.082h6.738a1.706,1.706,0,0,0,1.621-1.178l2.082-6.408a1.7,1.7,0,0,1,3.241,0'
                          fill='#ff335a'
                        />
                      </g>
                    </g>
                  </svg>
                </span>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left'>
                  Teachers are the same, and the experience is the same, but
                  there is less hustling.
                </p>
              </div>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-12 gap-8 mt-14'>
            <section className='col-span-12 md:col-span-8'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4'>
                What makes Rostrum’s instructors unique?
              </h3>
            </section>
            <section className='col-span-12 md:col-span-4'>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                We at Rostrum, are dedicated to produce toppers every year.
              </p>
            </section>
          </div>
          <h6 className='text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight '>
            Here’s how you’d find us to be different:
          </h6>
          <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
            {qualities.map((item, i) => (
              <div key={i} className='w-full h-auto'>
                <div className='flex items-start justify-start'>
                  <span className='block w-[25px] h-[38px] bg-secondary rounded-full'></span>
                  <h6 className='text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ms-4 '>
                    {item.title}
                  </h6>
                </div>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-12 gap-8 mt-14'>
            <section className='w-full col-span-12 md:col-span-4'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4'>
                Here are few things we are proud of
              </h3>
            </section>
            <section className='w-full col-span-12 md:col-span-8'>
              {data.map((item, i) => (
                <section key={i} className='border-b-2 border-[#F5B646] pb-4 mb-4'>
                  <p
                    key={i}
                    className='text-[16px] md:text-[20px] text-primary font-normal text-left'
                  >
                    {item.title && <b>{item.title}</b>} {item.description}
                  </p>
                </section>
              ))}
            </section>
          </div>
          {/* SECTION END */}
        </div>
      </div>
      <CallToAction />
    </main>
  );
};

export default GMAT;
