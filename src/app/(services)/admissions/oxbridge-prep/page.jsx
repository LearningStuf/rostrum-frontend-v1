import React from 'react';
import Image from 'next/image';
import HeaderBanner from '@/components/common/HeaderBanner';
import CallToAction from '@/components/common/CallToAction';
import AnimationProvider from '@/components/common/AnimationProvider';

const OxbridgePrep = () => {
  const data = [
    {
      title: 'Re-read your personal statement',
      description: `Your personal statement is the only portion of your application where you can truly demonstrate your enthusiasm for your chosen field. Re-reading it can help you focus on why you want to study your topic – and why you are the ideal candidate for the job. During the Oxbridge interview, you’ll also be asked to discuss everything you mentioned in your statement, so be prepared.`,
      image: '/assets/oxbridge/1.png',
    },
    {
      title: 'Whenever possible, ask questions',
      description: `Obviously, don’t merely ask questions for the purpose of asking them — this may quickly become irritating. However, asking well-chosen questions demonstrates critical thinking and a desire to learn. 
      Present yourself as an open-minded and rational learner who is curious and inquisitive. During your Oxbridge interview, don’t be hesitant to challenge the question’s validity or to take a step back and consider aloud. Admissions officers are more interested in your capacity to learn than you showing off, what you already know.`,
      image: '/assets/oxbridge/2.png',
    },
    {
      title: 'Don’t be worried or stressed',
      description: `It’s pointless to spend time or energy thinking about the outcome. One perk is that Oxford and Cambridge have a ‘pooling system,’ which ensures that the finest candidates are admitted, whether to their first-choice college or to a different one. Worrying is completely useless. `,
      image: '/assets/oxbridge/3.png',
    },
    {
      title: 'Have a nutritious breakfast',
      description: `Before your Oxbridge interview, it’s critical to eat something nutritious and full. This is not the time to go on fad diets or binges. You will most likely become tired if you consume too many carbs. Make sure you receive enough protein and fibre in your diet to be full and alert during the interview.`,
      image: '/assets/oxbridge/4.png',
    },
    {
      title: 'Do not be fooled by urban legends',
      description: `Yes, some Oxbridge professors are ‘eccentric,’ but you’re 
      unlikely to be confronted with anything out of the ordinary.  While hearing about other people’s experiences might be beneficial, keep in mind that each interview is unique, based on the subject and tutor. So, even if your friend’s sister’s cousin’s brother was asked a strange question about aliens conquering the planet during his psychological interview, you’re unlikely to get the same question.`,
      image: '/assets/oxbridge/5.png',
    },
  ];
  return (
    <main className='relative w-full h-auto'>
      <HeaderBanner align='center' title={'OXBRIDGE PREPARATION'} 
            image={'/assets/header-banner/ox.png'}

      />
      <div className='w-ful h-full relative mt-10 mb-10'>
        <div className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto'>
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left '>
              To receive an acceptance to Oxbridge can be nerve wracking, to
              appear in front of the administers and ace the interview
              definitely requires extra help to work through. Rostrum helps its
              students to make sure that they are at ease when they step into
              that interview.
            </p>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left'>
              These sessions that are conducted are bespoke and completely
              customised to each student. The framework of Oxbridge interview
              sessions is tutorials and supervisions at our centers in India and
              UAE or online. Here are some top interview tips for how you can do
              your best in the days before and during your Oxbridge interview.
            </p>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
            <section>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight mt-2 mb-8 md:mb-4'>
                Begin preparing ahead of time
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal  text-center md:text-left mt-4'>
                The more you learn about your subject, the better you’ll be at
                answering unexpected questions and demonstrating your enthusiasm
                and interest. But don’t leave it till the last minute if you
                need to compress a large textbook into a week’s time. This is a
                terrible concept.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal  text-center md:text-left mt-4'>
                Prepare the following items:
                <br />
                The core material for this can never be pre-defined, but it can
                be delivered in the following ways:
              </p>
            </section>
            <section>
              <Image
                src='/assets/oxbridge/banner-1.png'
                width={486}
                height={486}
                alt='Begin preparing ahead of time'
                className='mx-auto'
              />
            
            </section>
          </div>
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
            <section>
            <div className='mt-10'>
                <h6 className='text-[20px] md:text-[24px] text-primary text-left font-bold leading-tight mt-4 md:mt-2 flex items-start'>
                  Dealing with unseen subject specific material
                </h6>
                <p className='text-[16px] md:text-[20px] text-primary font-normal  text-left mt-1'>
                  years of experience that our counsellors’ possess, can help
                  guide and assist students to handle a multiplicity of
                  situations that may or may not occur.
                </p>
              </div>
              <div className='mt-10'>
                <h6 className='text-[20px] md:text-[24px] text-primary text-left font-bold leading-tight mt-4 md:mt-2 flex items-start'>
                  Subject specific examples
                </h6>
                <p className='text-[16px] md:text-[20px] text-primary font-normal  text-left mt-1'>
                  Our councilors have the in depth knowledge about the course
                  lines are very specific in their guidance and are catered to
                  your area of study.
                </p>
              </div>
              <div className='mt-10'>
                <h6 className='text-[20px] md:text-[24px] text-primary text-left font-bold leading-tight mt-4 md:mt-2 flex items-start'>
                  Verbal and nonverbal (body language communication)
                </h6>
                <p className='text-[16px] md:text-[20px] text-primary font-normal  text-left mt-1'>
                  What to say. What not to say. If you’re not saying it out loud
                  how can you communicate with your gestures, everything is
                  minutely taken into consideration and worked upon to come as
                  close to perfection as possible.
                </p>
              </div>
              <div className='mt-10'>
                <h6 className='text-[20px] md:text-[24px] text-primary text-left font-bold leading-tight mt-4 md:mt-2 flex items-start'>
                  Personal statement questions
                </h6>
                <p className='text-[16px] md:text-[20px] text-primary font-normal  text-left mt-1'>
                  We meet with our students to explore ideas for their personal
                  statements (or college essays), and we like diving into the
                  minds of our students and assisting them in determining the
                  ideal way to express their narrative.
                </p>
              </div>
            </section>
            <section>
            <div className='mt-10'>
                <h6 className='text-[20px] md:text-[24px] text-primary text-left font-bold leading-tight mt-4 md:mt-2 flex items-start'>
                  Structuring answers
                </h6>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-1'>
                  You can count on us to help you compose the best possible
                  answers that deliver assured results.
                </p>
              </div>
              <div className='mt-10'>
                <h6 className='text-[20px] md:text-[24px] text-primary text-left font-bold leading-tight mt-4 md:mt-2 flex items-start'>
                  Responding to interviewer’s cues and tips
                </h6>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-1'>
                  we guide you through how to work with indicators that the
                  interviewer might provide. This is helpful so you can navigate
                  through dynamic situations you may be unfamiliar with.
                </p>
              </div>
              <div className='mt-10'>
                <h6 className='text-[20px] md:text-[24px] text-primary text-left font-bold leading-tight mt-4 md:mt-2 flex items-start'>
                  Past questions
                </h6>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-1'>
                  This helps you prepare for general questions that can be
                  asked. Our team is up to date with every interview drive that
                  happens and this provides to be extremely beneficial to
                  students.
                </p>
              </div>
              <div className='mt-10'>
                <h6 className='text-[20px] md:text-[24px] text-primary text-left font-bold leading-tight mt-4 md:mt-2 flex items-start'>
                  Demonstrating confidence, teachability and reflection
                </h6>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-1'>
                  We make sure that you’re not just prepared academically for
                  the interview but develop your personality holistically.
                </p>
              </div>
              <div className='mt-10'>
                <h6 className='text-[20px] md:text-[24px] text-primary text-left font-bold leading-tight mt-4 md:mt-2 flex items-start'>
                  Talking about yourself, interests and achievements
                </h6>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-1'>
                  We help students present themselves with confidence.
                </p>
              </div>
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          {data.map((item, i) => (
            <div
              key={i}
              className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto grid grid-cols-1 md:grid-cols-2  gap-8'
            >
              <AnimationProvider
                className={`w-full h-auto relative p-2 order-1
            ${i % 2 === 1 ? 'order-1 md:order-2' : 'order-1 md:order-1'}
            `}
                animationType='slide-up'
              >
                {/* <section
                className={`w-full h-auto relative p-2 order-1
			${i % 2 === 0 ? 'order-1 md:order-2' : 'order-1 md:order-1'}
			`}
              > */}
                <div className='relative w-full h-[300px] md:h-[500px] '>
                  <Image
                    src={item.image}
                    alt='Mission'
                    fill
                    style={{ objectFit: 'cover' }}
                    className='-z-1'
                  />
                </div>
                {/* </section> */}
              </AnimationProvider>
              <AnimationProvider
                className={`w-full h-full flex flex-col items-center md:items-start justify-center
            ${i % 2 === 1 ? 'order-2 md:order-1' : 'order-2 md:order-2'}
            `}
                animationType='slide-up'
              >
                {/* <section
                className={`w-full h-full flex flex-col items-center md:items-start justify-center
			${i % 2 === 0 ? 'order-2 md:order-1' : 'order-2 md:order-2'}
			`}
              > */}
                <h4 className='text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-none mt-2 uppercase'>
                  {item.title}
                </h4>
                <p className='text-[20px] text-primary font-normal text-center md:text-left mt-8'>
                  {item.description}
                </p>
                {/* </section> */}
              </AnimationProvider>
            </div>
          ))}
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto relative mt-14'>
            <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 mb-8 md:mb-auto uppercase'>
              WHAT MAKES US DIFFERENT
            </h3>

            <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
              {[
                `Our tutors are all current students or graduates at Oxford or Cambridge University`,
                `We familiarize our students with the style of Admissions Test Questions`,
                `With our Oxbridge test expert, students go through multiple mock admission tests`,
                `We ensure that candidates answer in accordance with the mark scheme specification`,
                `We provide services for students all over the world including India and UAE`,
                `We investigate previous years’ exam papers annually`,
                `We teach how to approach questions and write model answers`
              ]
                .map((item, i) => (
                  <section key={i} className='flex items-start justify-start'>
                    <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22.538'
                      height='20.358'
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
                    </span>
                    <p className='text-[16px] md:text-[20px] text-primary font-normal text-left'>
                      {item}
                    </p>
                  </section>
                ))}
            </div>
          </div>
          {/* SECTION END */}
        </div>
      </div>
    </main>
  );
};

export default OxbridgePrep;
