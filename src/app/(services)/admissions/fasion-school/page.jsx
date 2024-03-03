import React from 'react';
import Image from 'next/image';
import HeaderBanner from '@/components/common/HeaderBanner';
import CallToAction from '@/components/common/CallToAction';
import AnimationProvider from '@/components/common/AnimationProvider';

const FasionSchool = () => {
  const data = [
    {
      logo: '/assets/fashion-schools-logo/1.svg',
      description: `One of the best fashion schools in 
			the world is the London School of Fashion. It offers a four-year curriculum that includes everything from sketching and draping to pattern making and garment production in 
			the field of fashion design.`,
      width: 427,
      height: 178,
    },
    {
      logo: '/assets/fashion-schools-logo/2.svg',
      description: `Students interested in a career 
			in fashion design or merchandising can choose Savannah College 
			of Art & Design. 
			It offers a four-year BFA in Fashion Design and a two-year MFA in 
			Fashion Design.`,
      width: 212,
      height: 211,
    },
    {
      logo: '/assets/fashion-schools-logo/3.svg',
      description: `Students interested in a career in fashion design or merchandising might choose the Fashion Institute 
			of Design & Merchandising. 
			It offers a two-year Fashion Design curriculum as well as a four-year Fashion Merchandising program`,
      width: 236,
      height: 106,
    },
    {
      logo: '/assets/fashion-schools-logo/4.svg',
      description: `Central Saint Martins is a famous 
			arts institution with a thriving 
			fashion program. It offers both 
			a three-year BA and a one-year MA program in Fashion Design.`,
      width: 383,
      height: 95,
    },
    {
      logo: '/assets/fashion-schools-logo/5.svg',
      description: `Students interested in a career in fashion design or retail might choose Pratt Institute. It offers a four-year 
			BFA in Fashion Design and 
			a two-year MFA in Fashion Design.`,
      width: 221,
      height: 117,
    },
    {
      logo: '/assets/fashion-schools-logo/6.svg',
      description: `For ambitious fashion designers, 
			the Rhode Island School of Design 
			is a great option. It offers a four-year BFA in Fashion Design and 
			a two-year MFA in Fashion Design.`,
      width: 197,
      height: 197,
    },
    {
      logo: '/assets/fashion-schools-logo/7.svg',
      description: `Students interested in a career 
			in fashion design or marketing 
			might choose the Academy of Art University. It offers a four-year BFA 
			in Fashion Design and a two-year 
			MFA in Fashion Design.`,
      width: 440,
      height: 302,
    },
    {
      logo: '/assets/fashion-schools-logo/8.svg',
      description: `Students interested in a career in fashion design or merchandising might choose the School of the Art Institute of Chicago. It offers a four-year BFA 
			in Fashion Design and a two-year 
			MFA in Fashion Design.`,
      width: 197,
      height: 238,
    },
    {
      logo: '/assets/fashion-schools-logo/9.svg',
      description: `Parsons School of Design is another excellent choice for those looking to pursue a career in fashion. It offers a four-year BFA program in Fashion Design, as well as a two-year MFA program. `,
      width: 384,
      height: 82,
    },
    {
      logo: '/assets/fashion-schools-logo/10.svg',
      description: `Another wonderful option for budding fashion designers is the 
			Fashion Institute of Technology. 
			It offers both a two-year and 
			a four-year Fashion Design and 
			Fashion Merchandising curriculum.`,
      width: 415,
      height: 141,
    },
  ];

  const process = [
    {
      title: `We’ll help you pick 
		the right program-`,
      description: `First, we’ll help you decide where you want to study 
		abroad and what level of design or fashion you’re interested in, as well as whether or not you have the academic background to qualify for the program, you’re interested in. A specialty is chosen after considering your future job potential and goals.`,
      image: '/assets/fashion-schools-logo/process/1.png',
    },
    {
      title: `Assisting with the writing 
		of your motivation letter`,
      description: `You would be required to submit a motivation letter when applying to specific fields of study or colleges. You should demonstrate in your motivation letter or statement of purpose that you have the capacity to do well at the school, and provide an appraisal of your talents, as well as a list of your accomplishments.`,
      image: '/assets/fashion-schools-logo/process/2.png',
    },
    {
      title: `SAT, ACT, TOEFL, IELTS 
		test preparation`,
      description: `An English proficiency exam will be required, especially if you come from a non-native English speaking country (such as India and the UAE). Book your test with us and our specialists will prepare you for it. You’ll need time to study and prepare for the exam, depending on your competence as well as the score that the university demands. For all of these topics, we offer the greatest team of tutors to help you succeed.`,
      image: '/assets/fashion-schools-logo/process/3.png',
    },
    {
      title: `Building your profile 
		and portfolio-`,
      description: `Now that you have a basic understanding of the different types of design courses and program, we help you build up your profile to best showcase your artistic flair and creativity. This includes expanding your knowledge through various topics, books, documentaries, and also practical work. The best way to showcase your design potential is through a portfolio, a requirement by most top design schools. Our art and design expert shall guide you through the crucial steps in building a stellar portfolio that is sure to stand out.`,
      image: '/assets/fashion-schools-logo/process/4.png',
    },
    {
      title: `Applying before 
		the deadlines`,
      description: `When applying to a school overseas, the first step is to verify 
		the criteria, and we’re here to help you stay on top of everything and make sure your paperwork and applications are submitted promptly. When it comes to the deadlines, we’ll make sure you meet them.`,
      image: '/assets/fashion-schools-logo/process/5.png',
    },
  ];
  return (
    <main className='relative w-full h-auto'>
      <HeaderBanner
        align='left'
        title={'BEST FASHION & DESIGN SCHOOLS IN THE WORLD'}
      />
      <div className='w-ful h-full relative mt-10 mb-10'>
        <div className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto'>
          {/* Section Start */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-4'>
            <section className='mt-auto md:mt-18'>
              <h3 className='text-center md:text-left text-[40px] md:text-[50px] text-primary font-bold leading-tight mt-2 mb-8 md:mb-auto uppercase'>
                ABOUT FASHION & DESIGN SCHOOLS IN THE WORLD
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-6'>
                The curriculum and methodology of fashion and design schools
                differ, but most provide instruction in design concepts and
                fashion history. Many fashion and design colleges also offer
                merchandising, marketing, and business courses to equip students
                with the necessary business skills to thrive in the industry.
                Applicants must have a good portfolio and a passion for fashion
                in order to get accepted into the finest fashion and design
                schools in the world.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-6'>
                Many institutions additionally demand that students take an
                admission exam like the SAT or ACT. Admission to the world’s
                leading fashion and design colleges is extremely difficult, and
                students’ portfolios and test results are frequently used to
                determine acceptance. Students must also have a good foundation
                in art and design to get admitted to the most competitive
                colleges.
              </p>
            </section>
            <section>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-6'>
                The world’s greatest fashion and design schools are found in
                major cities such as New York, London, Paris, and Milan. Many
                fashion and design colleges have locations in various countries,
                including China and India.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-6'>
                Bachelor’s and master’s degrees are available at the world’s
                leading fashion and design colleges. Degrees normally take four
                years, while some colleges offer two-year expedited programs.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-6'>
                The National Association of Colleges of Art and Design accredits
                the greatest fashion and design schools in the world (NASAD).
                Accreditation guarantees that a school’s curriculum fulfils the
                most stringent requirements. These institutions’ graduates
                frequently go on to work as fashion designers, merchandisers, or
                buyers. Many of them also work in the industries of advertising
                and public relations.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-6'>
                The greatest fashion and design schools in the world provide
                financial help in the form of scholarships and grants. Students
                should research the financial aid options accessible at each
                college they are considering attending. Major cities throughout
                the world, such as New York, London, Paris, and Milan, are home
                to the greatest fashion and design schools in the world. Several
                fashion and design colleges have campuses in various countries,
                including China and India.
              </p>
            </section>
          </div>
          {/* Section End */}
          {/* Section Start */}
          <div className='w-full h-auto'>
            <h3 className='text-center text-[40px] md:text-[50px] text-primary font-bold leading-tight mt-8 md:mt-14 mb-2 uppercase'>
              TOP 10 FASHION/DESIGN SCHOOLS <br className='hidden md:block' />{' '}
              AROUND THE WORLD
            </h3>
            <h6 className='w-full md:w-[60%] mx-auto text-[22px] md:text-[28px] text-primary text-center font-bold leading-tight'>
              All of these institutions have outstanding programs that help you
              start a successful fashion career:
            </h6>
            <div className='w-full h-auto flex flex-wrap items-center justify-center'>
              {data.map((item, i) => (
                <div key={i} className='w-full md:w-1/4 flex flex-col items-center justify-center mx-4 my-4'>
                  <Image
                    src={item.logo}
                    width={item.width}
                    height={item.height}
                    alt={item.description}
                  />
                  <p className='text-[20px] text-primary font-normal mt-3 text-center'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Section End */}
          {/* Section Start */}
          <div className='w-full h-auto mt-20'>
            <h3 className='text-center md:text-left text-[40px] md:text-[50px] text-primary font-bold leading-tight mt-2 mb-8 md:mb-auto uppercase'>
              HOW WILL WE HELP YOU WITH <br className='hidden md:block' />
              THE APPLICATION PROCESS?
            </h3>
            <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
              {process.map((item, i) => (
                <section key={i} className='w-full relative'>
                  <div className='flex items-center justify-start'>
                    <h6 className='relative w-full text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight flex self-end'>
                      {item.title}
                    </h6>
                    <Image src={item.image} width={200} height={200} alt={item.title} />
                  </div>
                  <p className='text-[20px] text-primary font-normal mt-3 text-left'>
                    {item.description}
                  </p>
                </section>
              ))}
            </div>
          </div>
          {/* Section End */}
          {/* Section Start */}
          <div className='w-full h-auto mt-20'>
            <h3 className='text-center md:text-left text-[40px] md:text-[50px] text-primary font-bold leading-tight mt-2 mb-8 md:mb-auto uppercase'>
              HOW to make your portfolio stand out
            </h3>
            <p className='w-full md:w-[80%] text-[16px] md:text-[20px] text-primary font-normal mt-3 text-center md:text-left'>
              The most important aspect of the art program application is the
              portfolio. This is where you will be able to display a variety of
              media and techniques you use in your art. We guide you with:
            </p>
            <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
              {Array(6)
                .fill()
                .map((item, i) => {
                  return (
                    <div
                      className='flex items-start justify-start my-2'
                      key={i}
                    >
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
                      <p className='text-[16px] md:text-[20px] text-primary font-normal text-left ms-4'>
                        Examine and analyse your academic background and
                        extracurricular engagement
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
          {/* Section End */}
        </div>
      </div>
      <CallToAction />

      <br />
      <br />
      <br />
    </main>
  );
};

export default FasionSchool;
