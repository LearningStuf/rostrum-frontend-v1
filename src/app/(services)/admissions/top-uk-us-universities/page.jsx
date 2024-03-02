import React from 'react';
import Image from 'next/image';
import HeaderBanner from '@/components/common/HeaderBanner';
import CallToAction from '@/components/common/CallToAction';
import AnimationProvider from '@/components/common/AnimationProvider';

const TopUni = () => {
  const data = [
    {
      title: `STARTER REVIEW`,
      description: `Recognizing your remarkable qualities and interests, and evaluating how to best feature those through your Extracurriculars, High School Portfolio, and Final Essays and Application`,
      image: '',
    },
    {
      title: `SHORTLIST STRATEGY`,
      description: `Proceeding to pass on your advantage and accomplishments if there should be an occurrence of position on the shortlist`,
      image: '',
    },
    {
      title: `PERSONALIZED PLANNER 
		  AND TIMELINE`,
      description: `Customized organizer dependent on your spaces of interest, and sensible courses of events for undertakings, testing, and applications to assist you with amplifying your time and equilibrium the numerous parts of the application interaction`,
      image: '',
    },
    {
      title: `ADVANCED PORTFOLIO 
		  PREPARATION`,
      description: `Featuring your exceptional advantages and accomplishments through an online stage to exhibit extra letters of proposal, project reports, music and workmanship tests, and so forth.`,
      image: '',
    },
    {
      title: `UNIVERSITY
		  SHORTLISTING`,
      description: `Exploring, Shortlisting, and Finalizing your university list and imminent scholarly major dependent on your inclinations and profile`,
      image: '/assets/top-uk-uni/images/1.png',
    },
    {
      title: `ESSAY 
			PLANNING`,
      description: `Planning and reviewing required essays, helping with various edits, and drafting of multiple essays required`,
      image: '/assets/top-uk-uni/images/2.png',
    },
    {
      title: `SCHOLARSHIP 
			PREPARATION `,
      description: `Identifying available scholarships, both private public and crafting a strong application for available scholarships`,
      image: '/assets/top-uk-uni/images/3.png',
    },
    {
      title: `CV 
			CRAFTING`,
      description: `Developing a perfectly crafted professional Curriculum Vitae, including work experience, skills, and all qualifications`,
      image: '/assets/top-uk-uni/images/4.png',
    },
    {
      title: `APPLICATION 
			REVIEW `,
      description: `An intensive survey of all components before accommodation of each school application`,
      image: '',
    },
    {
      title: `LETTER OF RECOMMENDATION 
			GUIDANCE`,
      description: `Assistance on whom and how to request solid Letters of Recommendation, alongside formatting and writing style`,
      image: '',
    },
    {
      title: `EXTRACURRICULAR 
			ENHANCEMENT`,
      description: `Direction on which extracurricular exercises to seek after to assist you with investigating your inclinations and construct abilities to assist you with succeeding the University level, just as guidance on the best way to best present your Extracurricular exercises in your application`,
      image: '',
    },
    {
      title: `CONSTANT SUPPORT 
			AND MONITORING`,
      description: `Consistently booked registration, criticism on all archives, and continuous help to offer direction or response questions, regardless of whether face to face, over Skype or the phone, or on email`,
      image: '',
    },
  ];
  return (
    <main className='relative w-full h-auto'>
      <HeaderBanner align='center' title={'TOP UK & USA UNIVERSITIES'} />
      <div className='w-ful h-full relative mt-10 mb-10'>
        <div className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto'>
          <div className='relative w-full md:w-2/3 mx-auto flex items-start'>
            <span className='text-secondary text-[128px]  -translate-y-12'>
              “
            </span>
            <h6 className=' text-[22px] md:text-[28px] text-primary text-center font-bold leading-tight'>
              Our aim is to prepare you so well for after high school that all
              you need to worry about is packing for your Dream Uni. Our
              presence at every step of your application and research will help
              you with the best and desired results.
            </h6>
            <span className='text-secondary text-[128px] translate-y-16 translate-x-4 self-end'>
              “
            </span>
          </div>
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
            <section className='mt-auto md:mt-18'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 mb-8 md:mb-4'>
                UNDERGRADUATE
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Top tier universities are now a global battlefield with
                applications per place skyrocketing in recent years. While
                students’ academic grades can be significantly improved by most
                established educational advisory services, few have the in-depth
                expertise of breaking each individual step of the selection
                process down to identify how to gain maximum leverage.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                The serious applicant will not just be a ‘memory machine’ they
                will, through intensive or extensive Rostrum training, have
                learnt to think holistically and deal with ambiguity. With
                universities such as Oxford, Cambridge and other top UK and US
                universities placing such emphasis on students’ ability to
                engage with ‘unseen material’ i.e. that not covered in any
                school syllabus, it is only exposure to books, podcasts,
                lectures, articles and then discussing these on a weekly basis
                that creates original and agile minds.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Those minds can then generate a truly engaging Statement of
                Purpose because they know how to think, not just repeat. Being
                comfortable enough to Speak with an Advisor engaging in
                world-class academics, be it in live or solo interviews, through
                dealing with admission tests is an amalgamation of skills
                nurtured from
              </p>
            </section>
            <section className='flex flex-col items-center'>
              <Image
                src='/assets/top-uk-uni/banner-1.png'
                width={771}
                height={771}
                alt='UNDERGRADUATE'
                // objectFit='containe'
                className='my-auto md:my-12'
              />
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                extensive preparation. A few true geniuses will freestyle their
                way to top offers but for most it is the result of hard work and
                targeted preparation. Intense one on one mentoring with our
                subject experts, gears students whether sitting in India, the
                UAE or any other country to tackle anything that may come their
                way.
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
            <section className='mt-auto md:mt-18'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 mb-8 md:mb-4'>
                MASTERS
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                The research required to uniquely position a candidate for a
                successful top tier Masters application is massively
                underestimated by most educational advisory services. While
                addressing the three core questions remains at the heart of an
                application…
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4'>
                How does this programme build on what you have done to date?
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left'>
                Why is this programme a good fit for you?
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mb-4'>
                How will this programme help you in your future goals?
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                …a superficial answer is not enough. Understanding faculty
                research and career partnerships, deep combing of relevant
                social media, knowledge of relevant research papers, reaching
                out to the appropriate university societies are just a few of
                the steps that show Rostrum candidates have “gone beyond”.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Knowing the above is not enough. The details from the research
                need to be woven into a coherent narrative that, like the facets
                on a diamond, allow the brilliance to be enhanced. Candidates
                from India, UAE and other countries bring their achievements and
                abilities and we help show these in the best possible condition.
              </p>
            </section>
            <section className='flex flex-col items-center'>
              <Image
                src='/assets/top-uk-uni/banner-2.png'
                width={771}
                height={771}
                alt='MASTERS'
                // objectFit='containe'
                className='my-auto md:my-12'
              />
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                The final element is judicious and apposite phrasing. In the
                words of Gwyn Day, one of our Senior Consultants, “ Indian
                candidates whilst often of the highest potential and calibre
                often let themselves down by being long winded, repetitive and
                unfocused” Most of Rostrum’s candidates applications will go
                through 10 - 12 iterations ensuring that coherency and impact is
                maximised, better their chances at top universities abroad.
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-14'>
            {data.map((item, i) => (
              <section className='w-full relative'>
                <div className='flex items-center justify-start'>
                  <h6 className='relative w-full text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight flex self-end'>
                    {item.title}
                    {/* <Image
                    src={item.image}
					          width={440}
					          height={440}
                    alt='Process'
                  /> */}
                  </h6>
                  <img src={item.image} className='w-[220px]' />
                </div>
                <p className='text-[20px] text-primary font-normal mt-3 text-left'>
                  {item.description}
                </p>
              </section>
            ))}
          </div>
          {/* SECTION END */}
        </div>
      </div>
    </main>
  );
};

export default TopUni;
