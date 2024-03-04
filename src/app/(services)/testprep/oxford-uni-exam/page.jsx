import React from 'react';
import Image from 'next/image';
import HeaderBanner from '@/components/common/HeaderBanner';
import CallToAction from '@/components/common/CallToAction';
import AnimationProvider from '@/components/common/AnimationProvider';

const OxfordUniExam = () => {
  const data = [
    {
      title: `Perfect Concepts`,
      description: `We offer undivided attention from an expert tutor who will offer personalised tutoring for you, according to your progress and needs. We help clarify and teach you basic concepts that the test is based on. Rostrum’s expert tutors will help you navigate different sections of the test to understand what content it entails, help you break down reasoning and logic required for different question types and offer you tips on how these can be approached.`,
    },
    {
      title: `Intensive Training`,
      description: `Our experts offer a host of resources to help you such as previous years’ exam papers, which are updated regularly. They familiarise students with the exact style of admissions test required and help write model answers in timed conditions.`,
      description_2: `They will offer you timed mock exams and help you understand the marking criteria, to ensure you score up to your full potential. They will also acquaint you with the syllabus of the test and look over a range of past papers.`,
    },
    {
      title: `Expert Faculty`,
      description: `All our tutors are current or graduate students of the University of Cambridge and University of Oxford. This ensures that students get first hand advice from peers who have experienced the entire process. Our expert tutors will offer you a personalised approach to preparing for the test, no matter from where you belong, Rostrum helps students all around the world including India and UAE.`,
    },
    {
      title: `Personalised Programmes`,
      description: `Our preparatory services are available to all students, regardless of their level. We’ll assist you in determining what works best for you and then take it from there. Every student can get the most out of what they learn with Rostrum thanks to the customizable programme.`,
    },
  ];
  return (
    <main className='relative w-full h-auto'>
      <HeaderBanner align='left' title={'OXFORD UNIVERSITY ENTRANCE EXAM'} />
      <div className='w-ful h-full relative mt-10 mb-10'>
        <div className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto'>
          <div className='relative w-full md:w-11/12  mx-auto flex items-start'>
            <span className='text-secondary text-[128px] font-semibold -translate-y-12 '>
              “
            </span>
            <h6 className=' text-[22px] md:text-[28px] text-primary text-center font-semibold leading-tight'>
              All our tutors are current students or graduates of University of
              Oxford and University of Cambridge and provide the best tutoring
              services for students all over the world including India and UAE.
              <span className='text-secondary text-[128px] -translate-y-2 translate-x-6 self-end leading-none absolute'>
                “
              </span>
            </h6>
          </div>
          {/* SECTION START */}
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8'>
            <section>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left'>
                Many of the courses at Oxford require applicants to take an
                admissions test, which are employed by them to choose among the
                many exceptional prospects who apply to study there. It is
                critical that you register for and take any admissions tests
                required for your programme in order to make your application as
                competitive as possible. Candidates are highly urged to devote
                some time to studying for the exam, examining test materials,
                and practising with previous years’ exams.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Cambridge Assessment Admissions Testing administers the
                admissions tests for Oxford University (CAAT). Because
              </p>
            </section>
            <section>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left'>
                registration is not automated and you will not be registered for
                the test just by completing your UCAS application, please make
                sure you properly complete the registration process.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Before moving forward with your application, Oxford University
                checks your expertise in the topic of interest. As a result,
                it’s critical to understand the admission exam that you’ll be
                needed to take for the course you’re applying for. Written tests
                will be administered to assess your knowledge of the subject of
                interest. As a result, understanding these requirements is
                critical for kicking off your preparation.
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto relative mt-10'>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8'>
              <section className='flex flex-col items-center justify-center'>
                <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4'>
                  WE IDENTIFY TESTS YOU MIGHT NEED TO TAKE
                </h3>
              </section>
              <Image
                src='/assets/oxford-uni/banner-1.png'
                width={680}
                height={680}
                alt='What exactly is IB?'
                className='mx-auto mb-4 md:mb-auto'
              />
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8'>
              <section className='w-full h-auto'>
                <div>
                  <h4 className='uppercase text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight mb-2'>
                    ENGAA
                  </h4>
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    What is ENGAA?
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    Engineering Admissions Assessment (ENGAA) is a test used by
                    the University of Cambridge for undergraduate admissions.
                  </p>
                  <br />
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    Duration:
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    The test lasts for 120 minutes and is split into two
                    sections which consist of multiple-choice questions.
                  </p>
                  <br />
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    Structure:
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    Section one consists of Mathematics and Physics, and section
                    two consists of Advanced Physics questions. The exam is
                    holistically taken alongside other elements of the
                    application, and is not considered in isolation.
                    <br />
                    <a className='text-danger' href='#'>
                      Find more details here.
                    </a>
                  </p>
                  <br />
                </div>
                <div>
                  <h4 className='uppercase text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight mb-2'>
                    MAT
                  </h4>
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    What is MAT?
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    The Mathematics Admission Test (MAT) is specifically taken
                    for students applying for Mathematics, Computer Science and
                    joint degrees at the University of Oxford.
                  </p>
                  <br />
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    Duration:
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    It is a 2 hour 30-minute paper-based test.
                  </p>
                  <br />
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    Structure:
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    The test is designed with the aim of being approachable by
                    all students, including those who have not studied further
                    Mathematics A-Level (or equivalent). The MAT syllabus is
                    based on the first year of A level Maths and includes topics
                    from the fourth term of A level Maths.
                    <br />
                    <a className='text-danger' href='#'>
                      Find more details on Oxbridge Entrance tests here.
                    </a>
                  </p>
                  <br />
                </div>
                <div>
                  <h4 className='uppercase text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight mb-2'>
                    UCAT
                  </h4>
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    What is MAT?{' '}
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    The university technical aptitude test formerly known as the
                    UKCAT is used for Medicine and Dentistry applications by a
                    variety of institutions in the UK.
                  </p>
                  <br />
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    Duration:
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    It is a 2 hour long multiple-choice admissions test.
                  </p>
                  <br />
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    Structure:
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    The UCAT is an online test and is done at designated test
                    centres across the world. The testing session usually runs
                    from July to September and the test cannot be taken more
                    than once in an admissions cycle. The test is divided into 5
                    sections: Verbal Reasoning, Decision Making, Quantitative
                    Reasoning, Abstract Reasoning and Situational Judgement.
                  </p>
                  <br />
                </div>
                <div>
                  <h4 className='uppercase text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight mb-2'>
                    TSA
                  </h4>
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    What is TSA?
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    The Thinking Skills Assessment (TSA) is for applicants to
                    undergraduate courses at the University of Oxford. It is
                    designed to assess whether candidates have the skills needed
                    to study courses like Experimental Psychology, Geography,
                    Human Sciences, Philosophy and Linguistics, PPE, Psychology
                    and Linguistics, Psychology and Philosophy. If applying for
                    a joint course, one may need to take a separate test.
                  </p>
                  <br />
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    Duration:
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    TSA is a 2-hour pre-interview test.
                  </p>
                  <br />
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    Structure:
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    The test consists of two sections, the first being the
                    Thinking Skills Assessment and the second being a written
                    task. The first section consists of problem-solving skills,
                    critical thinking and understanding argument and reasoning.
                    It consists of 50 multiple choice sections for a total of 90
                    minutes. The second section requires the ability to organise
                    ideas in a clear and concise manner and communicate them
                    effectively in writing. Candidates must answer one essay
                    question in a total of 30 minutes.{' '}
                    <a className='text-danger' href='#'>
                      {' '}
                      Find more details here.
                    </a>
                  </p>
                  <br />
                </div>
              </section>
              <section className='w-full h-auto'>
                <div>
                  <h4 className='uppercase text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight mb-2'>
                    PAT
                  </h4>
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    What is PAT?
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    Physics Aptitude Test (PAT) is an Oxford admissions test
                    that must be taken by students applying to study physics or
                    physics and philosophy.
                  </p>
                  <br />
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    Duration:
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    2 hours.
                  </p>
                  <br />
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    Structure:
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    It evaluates a student’s ability in physics and mathematics.
                    <a className='text-danger' href='#'>
                      {' '}
                      Find more details here.{' '}
                    </a>
                  </p>
                  <br />
                </div>
                <div>
                  <h4 className='uppercase text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight mb-2'>
                    BMAT
                  </h4>
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    What is BMAT?
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    The BioMedical Admissions Test (BMAT) is a test designed to
                    measure skills and potential for medical and health-related
                    courses. It tests a candidate’s ability to apply scientific
                    and mathematical knowledge as well as problem-solving,
                    critical thinking and written communication skills essential
                    to university-level learning.
                  </p>
                  <br />
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    Duration:
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    BMAT is a 2-hour computer-based test which you will take on
                    your own computer at home or at another suitable location.{' '}
                  </p>
                  <br />
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    Structure:
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    The test consists of three sections and is taken in English.
                    Sections 1 and 2 are multiple-choice, and Section 3 is a
                    writing task.
                    <a className='text-danger' href='#'>
                      {' '}
                      Find more details here.
                    </a>
                  </p>
                  <br />
                </div>
                <div>
                  <h4 className='uppercase text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight mb-2'>
                    ELAT
                  </h4>
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    What is ELAT?
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    You must take the ELAT if you are applying for one of the
                    following courses: English Language and Literature, Classics
                    and English, or English and Modern Languages.
                  </p>
                  <br />
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    Duration:
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    The English Literature Admissions Test (ELAT) is a 90-minute
                    paper-based exam.
                  </p>
                  <br />
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    Structure:
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    The ELAT is a test that assesses a candidate’s ability to
                    read closely and formulate and communicate an intelligent
                    response to unfamiliar literary content. You will be
                    required to produce a single essay contrasting two passages
                    out of the six given to you. The essay should be focused on
                    language, imagery, grammar, form, and structure.
                    <a className='text-danger' href='#'>
                      {' '}
                      Find more details here
                    </a>
                  </p>
                  <br />
                </div>
                <div>
                  <h4 className='uppercase text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight mb-2'>
                    HAT
                  </h4>
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    What is HAT?
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    The History Aptitude Test (HAT) is required by all
                    candidates applying for degrees involving history at Oxford
                    University. It aims to examine skills and potential required
                    to study a degree in history. It does not test substantive
                    historical knowledge and prior subject study is not
                    required. It tests an ability to read carefully and
                    critically, the adoption of an analytical approach, the
                    ability to answer a question relevantly, precision in
                    handling concepts, historical imagination, originality and
                    clarity in writing.
                  </p>
                  <br />
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    Duration:
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    1 hour
                  </p>
                  <br />
                  <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                    Structure:
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-2'>
                    The test contains one question based on an excerpt from a
                    primary source.
                    <a className='text-danger' href='#'>
                      {' '}
                      Find more details here.
                    </a>
                  </p>
                  <br />
                </div>
              </section>
            </div>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto relative mt-10'>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8'>
              <section className='flex flex-col items-center justify-center'>
                <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4'>
                  How does ROSTRUM help you?
                </h3>
              </section>
              <Image
                src='/assets/oxford-uni/banner-2.png'
                width={680}
                height={680}
                alt='How does ROSTRUM help you?  ?'
                className='mx-auto mb-4 md:mb-auto'
              />
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8'>
              {data.map((item, i) => (
                <section>
                  <h6 className='text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight'>
                    {item.title}
                  </h6>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-2'>
                    {item.description}
                  </p>
                  {item.description_2 && (
                    <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-2'>
                      {item.description_2}
                    </p>
                  )}
                </section>
              ))}
            </div>
          </div>
          {/* SECTION END */}
        </div>
      </div>
	  <CallToAction/>
    </main>
  );
};

export default OxfordUniExam;
