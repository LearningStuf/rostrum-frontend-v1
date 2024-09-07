import React from 'react';
import Image from 'next/image';
import HeaderBanner from '@/components/common/HeaderBanner';
import CallToAction from '@/components/common/CallToAction';
import AnimationProvider from '@/components/common/AnimationProvider';

const TopUni = () => {
  const data = [
    {
      title: `STARTER REVIEW`,
      description: `The first consultation! Send over your academic and extracurricular profile and any related materials. We will review where you stand and how best to proceed.`,
      image: '',
    },
    {
      title: `SHORTLIST STRATEGY`,
      description: `Time for us to devise a strategy to augment your application best! We will design a way forward that will strengthen all aspects of your application. From essays and approaches to extracurricular activities or internships, we are here to help you. `,
      image: '',
    },
    {
      title: `PERSONALIZED PLANNER AND TIMELINE`,
      description: `Keeping a timeline is key to staying on track for all your applications! We’ll devise a timeline to ensure we meet all your deadlines and stay on track for the entire process.`,
      image: '',
    },
    {
      title: `ADVANCED PORTFOLIO 
		  PREPARATION`,
      description: `We help prepare portfolios for students who are applying to specialized programs like Fine Arts. If you want to go above and beyond, we are here to help! Whether you wish to showcase project proposals or workmanship tests, we can help you present it to its full potential!`,
      image: ''
    },
    {
      title: `UNIVERSITY
		  SHORTLISTING`,
      description: `Are you overwhelmed by the sheer volume of options when choosing a degree and university? Let us know your preferences, and we'll narrow them down based on your profile and choices! Rest assured, we extensively research our university lists before giving you suggestions.`,
      image: '/assets/top-uk-uni/images/1.png',
    },
    {
      title: `ESSAY 
			PLANNING`,
      description: `One of the most challenging tasks during university applications is the number of essays students must write. At Rostrum Education, we understand this. Our services include helping plan, write, and edit multiple drafts of essays to ensure they meet a high standard.`,
      image: '/assets/top-uk-uni/images/2.png',
    },
    {
      title: `SCHOLARSHIP 
			PREPARATION `,
      description: `We help you seek out scholarships to meet your needs. Rostrum Education counselors will also help you craft strong scholarship applications. It gives you the best shot at a university career, free from financial stress.
`,
      image: '/assets/top-uk-uni/images/3.png',
    },
    {
      title: `CV 
			CRAFTING`,
      description: `A well-designed Curriculum Vitae is a must for anyone seeking postgraduate education. Develop a well-crafted CV with us to showcase your experience.`,
      image: '/assets/top-uk-uni/images/4.png',
    },
    {
      title: `APPLICATION 
			REVIEW `,
      description: `The final check is a thorough review of each component of your application. It identifies any areas that need modification before submission!`,
      image: '',
    },
    {
      title: `LETTER OF RECOMMENDATION 
			GUIDANCE`,
      description: `We offer guidance on choosing and approaching the people you will ask for recommendation letters. We also help with general formatting and typesetting advice for the best presentation possible. We’ve thought of everything.`,
      image: '',
    },
    {
      title: `EXTRACURRICULAR 
			ENHANCEMENT`,
      description: `Universities look at much more than academic records. We understand students want non-academic activities to boost their chances of acceptance. We offer direction on extracurriculars, internships, and work experience. It helps to boost your profile according to your interests and the program you want to get into.`,
      image: '',
    },
    {
      title: `CONSTANT SUPPORT 
			AND MONITORING`,
      description: `Throughout the application process, Rostrum Education counselors will schedule regular calls. Students and mentors can check the progress. Whether you meet with your counselor face-to-face or virtually, advice will come throughout. 
`,
      image: '',
    },
  ];
  return (
    <main className='relative w-full h-auto'>
      <HeaderBanner align='center' title={'TOP UK & USA UNIVERSITIES'} 
            image={'/assets/header-banner/top-uk.png'}

      />
      <div className='w-ful h-full relative mt-10 mb-10'>
        <div className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto'>
          <div className='relative w-full md:w-2/3 mx-auto flex items-start'>
            <span className='text-secondary text-[128px]  -translate-y-12'>
              “
            </span>
            <h6 className=' text-[22px] md:text-[28px] text-primary text-center font-bold leading-tight'>
            Searching for a consultancy to help with university admissions? No need to look further! Rostrum is here to guide you through every step of the admission process - all you need to do is pack your bags and leave the rest to us!
            </h6>
            <span className='text-secondary text-[128px] translate-y-16 translate-x-0 md:translate-x-4 self-end rotate-180'>
              “
            </span>
          </div>
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
            <section className='mt-auto md:mt-18'>
              <h3 className='text-center md:text-left text-[35px] md:text-[55px] text-primary font-bold leading-none mt-2 mb-8 md:mb-4'>
              UNDERGRADUATE ADMISSIONS
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              It's no secret that getting into university is becoming increasingly difficult. Every year, more and more students apply to foreign universities, and acceptance rates decrease. Rostrum Education is aware of this and has custom-made strategies. It helps students deal with university applications from around the globe.

              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              Whether you're applying for a degree in the US or the UK, we have unique tips and insider advice on whichever university you wish to apply to. Other consulting firms may improve a student's grades and academic profile. We at Rostrum review your entire application and proceed with a tailor-made plan curated just for you. Your applications are in trusted hands!

              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              From letters of intent to interviews to essays, Rostrum is with you every step of the way. Get in touch with us to make the most of your university career!
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
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
            <section className='mt-auto md:mt-18'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 mb-4'>
              MASTERS ADMISSIONS 

              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              Postgraduate admissions can be a lot more competitive compared to undergraduate admissions. Even if the applicant pool is much smaller, universities often look for specific qualities beyond just grades. This might include:

              </p>
              <ul className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4 list-disc' >
                <li>
                Relevant work experience
                </li>
                <li>
                Strong research skills
                </li>
                <li>
                A focus on a particular area within the field
                </li>
                <li>
                Whether your aspirations and goals are a good fit for the program
                </li>

              </ul>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              At Rostrum, we can help streamline this process and allow you to focus on the key aspects of the research you wish to conduct. We conduct in-depth reviews of a student's profile. It helps us create custom plans based on your work experience and interview process. Making this process hassle-free is no easy task, but our testimonials can confirm that we manage to pull it off every time!

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
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-14'>
            {data.map((item, i) => (
              <section key={i} className='w-full relative'>
                <div className='flex items-center justify-start'>
                  <h6 className='relative w-full text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight flex self-end'>
                    {item.title}
                  </h6>
                  {item.image && (
                    <Image
                      src={item.image}
                      width={220}
                      height={220}
                      alt={item.title}
                    />
                  )}
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
