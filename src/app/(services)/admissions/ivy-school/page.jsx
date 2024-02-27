import React from 'react';
import Image from 'next/image';
import HeaderBanner from '@/components/common/HeaderBanner';
import CallToAction from '@/components/common/CallToAction';

const IVY = () => {
  const ivySchools = [
    {
      name: `Penn`,
      logo: '/assets/ivy-schools/1.png',
      width: 231,
      height: 200,
    },
    {
      name: `Columbia`,
      logo: '/assets/ivy-schools/2.png',
      width: 200,
      height: 200,
    },
    {
      name: `Harvard`,
      logo: '/assets/ivy-schools/3.png',
      width: 182.13,
      height: 176.97,
    },
    {
      name: `Dartmouth`,
      logo: '/assets/ivy-schools/4.png',
      width: 203,
      height: 217,
    },
    {
      name: `Yale`,
      logo: '/assets/ivy-schools/5.png',
      width: 168.57,
      height: 177,
    },
    {
      name: `Cornell`,
      logo: '/assets/ivy-schools/6.png',
      width: 181,
      height: 181,
    },
    {
      name: `Brown`,
      logo: '/assets/ivy-schools/7.png',
      width: 169.13,
      height: 238.63,
    },
    {
      name: `Princeton`,
      logo: '/assets/ivy-schools/8.png',
      width: 169.87,
      height: 216.44,
    },
  ];
  return (
    <main className='relative w-full h-auto'>
      <HeaderBanner
        align='left'
        title={'PREPARE FOR IVY LEAGUE SCHOOLS & COLLEGES'}
      />
      <div className='w-ful h-full relative mt-10 mb-10'>
        <div className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto'>
          {/* SECTION START */}
          <div className='w-full h-auto relative'>
            <h3 className='text-center text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 mb-8 md:mb-auto uppercase'>
              Top IVY League Schools
            </h3>
            <div className='w-full h-auto grid grid-cols-2 md:grid-cols-4 gap-8 mt-14'>
              {ivySchools.map((item, i) => (
                <div key={i} className='w-full h-[250px] md:h-auto'>
                  <div className='w-full h-auto md:h-[240px] flex items-center justify-end mx-auto'>
                    <Image
                      src={item.logo}
                      width={item.width - 40}
                      height={item.height}
                      alt='University'
                      // objectFit='containe'
                      className='mx-auto self-end'
                    />
                  </div>
                  <h6 className='text-[22px] md:text-[28px] text-primary text-center font-bold leading-tight mt-4 md:mt-2'>
                    {item.name}
                  </h6>
                  <h6 className='text-[22px] md:text-[28px] text-primary text-center font-bold leading-tight'>
                    University
                  </h6>
                </div>
              ))}
            </div>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div class='w-full h-auto grid grid-cols-12 gap-4 mt-14'>
            <section class='col-span-12 md:col-span-5'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 mb-8 md:mb-auto'>
                What is the Ivy League?
              </h3>
            </section>
            <section class='col-span-12 md:col-span-7'>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left'>
                Ivy Leagues are amongst the most prestigious universities in the
                United States and across the world. These eight elite
                Northeastern private schools are noted for their highly
                selective admissions procedure, academic brilliance, and
                promising job prospects for enrolled students.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left'>
                Ivy League schools, which were first grouped together as a
                sports conference, have a history of nurturing the world’s best
                athletic talent, future presidents, Nobel laureates, and other
                high-achieving graduates. Some of the oldest educational
                institutions with well-respected academics, significant research
                funds, and extensive financial assistance resources make up the
                Ivy League. Prospective students’ applications must be
                exceptional in order to get admitted.
              </p>
            </section>
          </div>
          <div class='w-full h-auto grid grid-cols-12 gap-4 mt-14'>
            <section class='col-span-12 md:col-span-5'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 mb-8 md:mb-auto'>
                How to get into an Ivy League school?
              </h3>
            </section>
            <section class='col-span-12 md:col-span-7'>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left'>
                It doesn’t come as a surprise that Ivy League colleges are on
                the lookout for individuals who can contribute to their rich and
                diverse student communities. While there is no one-size-fits-all
                formula for getting into your dream Ivy League school, there are
                specific actions you take during your high school experience, to
                improve your chances. Ivy Leagues want to know about your
                ability to make a difference through the admissions process.
                Examining your past achievements and involvements is a common
                approach for admission officers to forecast your future
                achievements. In order to prepare for admissions for such
                prestigious universities, there are four primary areas to
                concentrate on in high school:
              </p>
            </section>
          </div>
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
            <section>
              <h4 className='text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight'>
                Make sensible course selections in high school:
              </h4>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Ivy league universities seek out students that have the
                potential to specialise in their careers. Choosing
                intellectually challenging classes that align with your
                interests is a great way to showcase your dedication. Plan your
                curriculum for academic possibilities early on in your high
                school experience. Admissions to Ivy League colleges is not
                based on a set of specified courses. Most experts believe that
                students who thrive in advanced placement courses and tough
                curricula across a wide range of subjects and disciplines are
                best prepared for the rigorous demands of an Ivy League
                education.
              </p>
            </section>
            <section>
              <h4 className='text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight'>
                Make meaningful connections.
              </h4>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                No two Ivy League students are the same. Ivy Leagues want to see
                your passion, devotion, and interest in your future efforts
                based on all of the options you have access to. It’s critical
                that you take initiative and seek out possibilities that broaden
                your horizons. Ivy league universities need students that are
                energetic and enthusiastic. High school is an excellent
                opportunity to learn about new things and get active in fields
                that interest you. What piques your interest? What distinguishes
                you from others? What will you do to make yourself stand out in
                a significant way?
              </p>
            </section>
          </div>
          {/* SECTION END */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
            <section className='relative w-full md:w-[90%] h-[300px] md:h-full mx-auto'>
              <Image
                src='/assets/ivy-schools/left.png'
                // width={item.width}
                // height={item.height}
                alt='Goals and Character Qualities'
                fill={true}
                objectFit='containe'
              />
            </section>
            <section>
              <h4 className='text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight'>
                Goals and Character Qualities
              </h4>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                No two Ivy League students are the same. Ivy Leagues want to see
                your passion, devotion, and interest in your future efforts
                based on all of the options you have access to. It’s critical
                that you take initiative and seek out possibilities that broaden
                your horizons. Ivy league universities need students that are
                energetic and enthusiastic. High school is an excellent
                opportunity to learn about new things and get active in fields
                that interest you. What piques your interest? What distinguishes
                you from others? What will you do to make yourself stand out in
                a significant way?
              </p>
            </section>
          </div>
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
            <section className='order-2 md:order-1'>
              <h4 className='text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight'>
                Extracurricular activities and interests
              </h4>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Ivy league institutions are as curious about your work and
                interests outside of the classroom. They want to see commitment
                to a cause and leadership responsibilities you’ve held, your
                successes and failures. Most importantly, they want to know how
                you’ve grown from those experiences. That isn’t to imply you
                should participate in every sport or volunteer for every
                charity. Maintaining a focus on topics that provide significant
                value to your life or you are genuinely passionate about is
                crucial. The importance of quality above quantity cannot be
                overstated. Ivy Leagues are interested in learning about your
                effect on a cause, team, or community, as well as how the
                experience affected your life.
              </p>
            </section>
            <section className='order-1 md:order-2 relative w-full h-[300px] md:h-full mx-auto'>
              <Image
                src='/assets/ivy-schools/right.png'
                // width={item.width}
                // height={item.height}
                alt='Goals and Character Qualities'
                fill={true}
                objectFit='containe'
              />
            </section>
          </div>
          {/* SECTION END */}
        </div>
      </div>
      <CallToAction />
      <div className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto'>
        {/* SECTION START */}
        <div className='w-full h-auto relative mt-14'>
          <h4 className='text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight'>
            How will Rostrum Education help you?
          </h4>
          <p className='w-full md:w-[85%] text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-2'>
            Rostrum Students work closely with ex-admission officers and mentors
            from the most exclusive US universities, such as Harvard, Stanford,
            Tufts et cetera. Our organizational structure with centers in India
            and the UAE is highly effective at cracking the admissions process.
            Here’s everything Rostrum helps students with during their
            application process:
          </p>
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
            {Array(8)
              .fill()
              .map((item, i) => (
                <section key={i}>
                  <h6 className='text-[20px] md:text-[24px] text-primary text-left font-bold leading-tight mt-4 md:mt-2 flex items-start'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='27.538'
                      height='26.358'
                      viewBox='0 0 27.538 26.358'
                      className='me-2'
                    >
                      <g
                        id='Group_110'
                        data-name='Group 110'
                        transform='translate(-26.404 -138.505)'
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
                    Goal Alignment
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    If you’re applying to an Ivy it is imperative to be target
                    oriented. Our team at Rostrum helps you align your work to
                    application deadlines, and helps you set goals. You never
                    have to worry about deadlines again.
                  </p>
                </section>
              ))}
          </div>
        </div>
        {/* SECTION END */}
        <br />
        <br />
        <br />
      </div>
    </main>
  );
};

export default IVY;
