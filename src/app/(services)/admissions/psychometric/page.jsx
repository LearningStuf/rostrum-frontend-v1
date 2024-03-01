import React from 'react';
import Image from 'next/image';
import HeaderBanner from '@/components/common/HeaderBanner';
import CallToAction from '@/components/common/CallToAction';
import AnimationProvider from '@/components/common/AnimationProvider';

const Psychometric = () => {
  return (
    <main className='relative w-full h-auto'>
      <HeaderBanner align='left' title={'PSYCHOMETRIC TEST & ASSESSMENT'} />
      <div className='w-ful h-full relative mt-10 mb-10'>
        <div className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto'>
          {/* SECTION START */}
          <h3 className='text-center text-[40px] md:text-[55px] text-primary font-bold leading-tight mt-2 mb-4'>
            WHY DO WE NEED PSYCHOMETRIC TESTS?
          </h3>
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left '>
              Rostrum looks to gain a holistic and nuanced understanding of a
              student’s intellectual potential. Applications to the top U.K.,
              European and American Ivy League universities are equally
              dependent on mindset and memory. The ability to communicate
              effectively both academically and personally is critical in
              extended applications which dissect candidates
            </p>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left'>
              via video and live interview in addition to statements of purpose,
              short and long Essays and of course, academic success. Candidates
              need to demonstrate self-awareness, Self-reflection and the
              ability to generate original thinking in the cross-disciplinary
              world. We assess, evaluate and guide all our students on all the
              parameters mentioned above.
            </p>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
            <section className='mt-auto md:mt-18'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 mb-8 md:mb-4'>
                WHAT IS A PSYCHOMETRIC TEST, AND HOW CAN IT HELP YOU?
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                A psychometric test is any activity or evaluation used to
                evaluate a candidate’s performance, including but not limited to
                skills, knowledge, talents, personality traits, attitudes, and
                job/academic potential.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                There are three basic aspects to psychometric assessment types
                and forms: aptitude exams, behavioural tests, and assessment
                centres.
              </p>
            </section>
            <section className='flex flex-col items-center'>
              <Image
                src='/assets/psycho/banner-1.png'
                width={471}
                height={471}
                alt='WHAT IS A PSYCHOMETRIC TEST, AND HOW CAN IT HELP YOU?'
                // objectFit='containe'
                className='md:self-end'
              />
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                These exams are frequently used to assess cognitive abilities
                such as aptitude, psychological traits such as personality,
                developmental progress such as IQ. People are frequently
                perplexed about what a psychometric exam is and which one is
                appropriate. At Rostrum, students are enabled to quickly explore
                and choose the ideal tool for their needs.
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-ful h-full relative mt-14 mb-10'>
            <h3 className='text-center text-[40px] md:text-[55px] text-primary font-bold leading-tight mt-2 mb-4'>
              3 Types of Psychometric Assessment
            </h3>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center mt-4'>
              Aptitude tests and assessment day activities operate with time
              limits, allowing applicants to be judged on their ability to work
              under pressure. With all of this in mind, it’s no surprise that
              preparing for your evaluations ahead of time is critical to your
              success. The three types of Psychometric assessment are as follows
            </p>
            <section className='w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
              <div className='flex flex-col items-center justify-start'>
                <h6 className='text-[20px] md:text-[24px] text-primary text-center font-bold leading-tight mt-4 md:mt-2'>
                  Aptitude Tests
                </h6>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center mt-2'>
                  These tests are used to evaluate a variety of cognitive
                  talents. There are a variety of aptitude tests available. A
                  comprehensive test would include many of these types.
                </p>
              </div>
              <div className='flex flex-col items-center justify-start'>
                <h6 className='text-[20px] md:text-[24px] text-primary text-center font-bold leading-tight mt-4 md:mt-2'>
                  Numerical
                </h6>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center mt-2'>
                  As the name implies, numerical psychometric exams will examine
                  a candidate’s ability to work with numbers swiftly and easily.
                </p>
              </div>
              <div className='flex flex-col items-center justify-start'>
                <h6 className='text-[20px] md:text-[24px] text-primary text-center font-bold leading-tight mt-4 md:mt-2'>
                  Verbal
                </h6>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center mt-2'>
                  Written excerpts, usually with a multiple-choice answer
                  format, are used in verbal psychometric exams to examine a
                  candidate’s understanding and comprehension skills.
                </p>
              </div>
              <div className='flex flex-col items-center justify-start'>
                <h6 className='text-[20px] md:text-[24px] text-primary text-center font-bold leading-tight mt-4 md:mt-2'>
                  Diagrammatic
                </h6>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center mt-2'>
                  These tests will look into a candidate’s problem-solving
                  abilities. Candidates will typically have a minute to respond
                  to each question.
                </p>
              </div>
              <div className='flex flex-col items-center justify-start'>
                <h6 className='text-[20px] md:text-[24px] text-primary text-center font-bold leading-tight mt-4 md:mt-2'>
                  Error checking
                </h6>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center mt-2'>
                  This assesses a candidate’s ability to spot errors in the
                  information given to them.
                </p>
              </div>
              <div className='flex flex-col items-center justify-start'>
                <h6 className='text-[20px] md:text-[24px] text-primary text-center font-bold leading-tight mt-4 md:mt-2'>
                  Inductive
                </h6>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center mt-2'>
                  This psychometric tool assesses a candidate’s ability to think
                  systematically and logically, usually through the use of
                  visual sequences.
                </p>
              </div>
            </section>
            <section className='w-full md:w-3/5 mx-auto h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
              <div className='flex flex-col items-center justify-start'>
                <h6 className='text-[20px] md:text-[24px] text-primary text-center font-bold leading-tight mt-4 md:mt-2'>
                  Behavioural Tests
                </h6>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center mt-2'>
                  These assessments are used to identify certain personality
                  traits that may suggest fit for different occupations. We may
                  learn about a candidate’s preferred method of communication,
                  how they deal with losses by assessing and understanding their
                  behavioural style.
                </p>
              </div>
              <div className='flex flex-col items-center justify-start'>
                <h6 className='text-[20px] md:text-[24px] text-primary text-center font-bold leading-tight mt-4 md:mt-2'>
                  Logical
                </h6>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center mt-2'>
                  As you might expect, these tests are used to assess a person’s
                  ability to think logically. These tests are comparable to
                  diagrammatic testing, however they do not require the usage of
                  diagrams.
                </p>
              </div>
            </section>
            <section className='w-full md:w-1/2 mx-auto h-auto grid grid-cols-1 gap-8 mt-8'>
              <div className='flex flex-col items-center justify-start'>
                <h6 className='text-[20px] md:text-[24px] text-primary text-center font-bold leading-tight mt-4 md:mt-2'>
                  Assessment Centres
                </h6>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center mt-2'>
                  Psychologists frequently conduct activities that make use of
                  job-specific skills and simulations. The candidate is invited
                  to participate in a range of activities, tests, and exercises
                  with other candidates. The emphasis is on how one reacts to
                  situations, one’s cognitive processes, and how well someone
                  meets the predetermined criteria. Some or all of the following
                  will usually be included in this criteria:
                  <br />
                  Teamwork abilities, leadership abilities, creativity
                  abilities, decision-making abilities Listening abilities,
                  Problem-solving abilities, Negotiation abilities, Organisation
                  abilities Timekeeping, Levels of motivation, written and
                  verbal communication skills
                </p>
              </div>
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className='w-full h-auto relative my-10'>
            <h3 className='text-center text-[40px] md:text-[55px] text-primary font-bold leading-tight mt-2 mb-4'>
              WHY IS IT VITAL FOR STUDENTS
              <br className='hidden md:block' />
              TO TAKE PSYCHOMETRIC TESTS?
            </h3>
            <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
              <section className='mt-auto md:mt-18'>
                <h6 className='text-[20px] md:text-[24px] text-primary text-center md:text-left font-bold leading-tight mt-4 md:mt-2'>
                  WHAT IS A PSYCHOMETRIC TEST, AND HOW CAN IT HELP YOU?
                </h6>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                  They are beneficial for students in grades 8 through 12 to
                  choose their careers wisely. This is the stage when youngsters
                  form their fundamental viewpoints and attitudes about the
                  subjects they are studying.
                </p>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                  Psychometric tests are particularly helpful for students
                  entering grades 11 and 12, unsure of what stream of education
                  they should choose.
                </p>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                  Psychometric assessments play a tremendous role in assisting
                  grade 12 students with selecting their undergrad programs and
                  field of study.
                </p>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                  Psychometric tests provide information on a student’s
                  personality, such as whether they are an introvert or an
                  extrovert, their level of emotional intelligence, and other
                  attributes that cannot be determined from a profile or even an
                  interview.
                </p>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                  Psychometric tests provide useful information about a person’s
                  interests and talents without being biased because they are
                  completed by students who answer questions based on their own
                  judgments.
                </p>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                  There are no right or wrong answers, there is no chance of
                  cheating or copying from others, like there is in other exams.
                  As a result, in the vast majority of cases the results are
                  reliable and accurate.
                </p>
              </section>
              <section className='flex flex-col items-center justify-center'>
                <Image
                  src='/assets/psycho/banner-2.png'
                  width={568}
                  height={568}
                  alt='WHAT IS A PSYCHOMETRIC TEST, AND HOW CAN IT HELP YOU?'
                  // objectFit='containe'
                />
              </section>
            </div>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
            <section className='flex flex-col items-center justify-center'>
              <Image
                src='/assets/psycho/banner-3.png'
                width={568}
                height={568}
                alt='WHAT IS A PSYCHOMETRIC TEST, AND HOW CAN IT HELP YOU?'
                // objectFit='containe'
              />
            </section>
            <section className='mt-auto md:mt-18'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight  mb-2'>
                How can Psychometric tests help you choose a career?
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Academic career advisers will examine the answers submitted by
                the students and recommend the appropriate course for them. As a
                result, parents will be able to choose the best professional
                route for their child. Candidates will gain a better
                understanding of their interests, aptitude, and personality
                after taking the psychometric test for students, allowing them
                to make the best career decision possible.
              </p>
            </section>
          </div>
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
            <section className='mt-auto md:mt-18'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight  mb-2'>
                When is the right time to take a Psychometric test?
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                To make a difference, psychometric exams should be administered
                at critical points in their lives. The tests should ideally be
                completed in the middle of the school year. This would have
                allowed kids to mature to the point where they could have
                developed adult-like behavioural habits.
              </p>
            </section>
            <section className='flex flex-col items-center justify-center'>
              <Image
                src='/assets/psycho/banner-4.png'
                width={468}
                height={468}
                alt='WHAT IS A PSYCHOMETRIC TEST, AND HOW CAN IT HELP YOU?'
                // objectFit='containe'
              />
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto mt-10 mb-10'>
            <h3 className='text-center text-[40px] md:text-[55px] text-primary font-bold leading-tight mt-2 mb-4'>
              HOW ROSTRUM EDUCATION PLAYS A ROLE IN TAKING PSYCHOMETRIC TESTS
              FOR STUDENTS?
            </h3>
            <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
              <section>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                  Intellectual DNA is Rostrum’s proprietary tool, it serves as a
                  psychometric test but it isn’t designed typically like one.
                  Rostrum believes that testing should be holistic and has thus
                  developed a bespoke and customised solution. The Intellectual
                  DNA test is centred around qualitative data analysis to guide
                  students to the areas of their aptitude.
                </p>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                  Our mentors physically analyse each student’s style of writing
                  and way of thinking. The test is followed up with one-on-one
                  meetings and follow-ups where the mentors recommend courses,
                  universities and job prospects to their students. These
                  meetings should be taken within 7 days of submitting the
                  written paper.
                </p>
              </section>
              <section>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                  There are no right or wrong answers, which in itself can be
                  disorienting for students and parents used to black/white
                  learning and testing. This test challenges the students’
                  critical thinking skills and the ability to structure and
                  communicate their thoughts in a persuasive and balanced
                  manner.
                </p>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                  The meetings are conducted by our expert mentor, Mr Gwyn Day,
                  a Member of Mensa (with an IQ in the top 0.05%). A Fellow of
                  the Royal Society of Arts and former banking Head Trader. Gwyn
                  has been involved in the financial and education markets for
                  over 30 years.
                </p>
              </section>
            </div>
            <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
              <section>
                <h6 className='text-[20px] md:text-[24px] text-primary text-center md:text-left uppercase font-bold leading-tight mt-4 md:mt-2'>
                  MORE ABOUT GWYN
                </h6>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                  A specialist in Neurolinguistics for the last 20 years he has
                  been coaching high potential students into top global
                  universities (Oxford, Cambridge, Imperial and LSE, Ivy League,
                  M7 plus Canadian and European schools.) He works with
                  undergraduates and postgraduate students to obtain internships
                  and full-time Graduate positions with the world’s top
                  financial institutions, law firms, consultancies, and global
                  corporates.
                </p>
              </section>
              <section>
                <br />
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                  At Rostrum, we have been making use of education technology
                  right from the inception of our organisation. The Covid-19
                  pandemic has only strengthened our endeavour to digitise
                  through our sophisticated and state of the art software and
                  make education easily accessible to students across the world.
                  Register for the Intellectual DNA test today and discover your
                  true calling.
                </p>
              </section>
            </div>
          </div>
          {/* SECTION END */}
        </div>
      </div>
    </main>
  );
};

export default Psychometric;
