import React from 'react';
import Image from 'next/image';
import HeaderBanner from '@/components/common/HeaderBanner';
import CallToAction from '@/components/common/CallToAction';
import AnimationProvider from '@/components/common/AnimationProvider';

const UCAT = () => {
  const universities = [
    'University of Aberdeen',
    'Anglia Ruskin University',
    'Aston University',
    'University of Birmingham',
    'University of Bristol',
    'Cardiff University',
    'University of East Anglia',
    'Edge Hill University',
    'University of Edinburgh',
    'University of Exeter',
    'University of Glasgow',
    'Hull York Medical School',
    'Keele University',
    'Kent and Medway Medical School',
    'King’s College London',
    'University of Leicester',
    'University of Liverpool',
    'University of Manchester',
    'University of Newcastle',
    'University of Nottingham',
    'Plymouth University',
    'Queen Mary University of London',
    'Queen’s University Belfast',
    'University of Sheffield',
    'University of Southampton',
    'University of St Andrews',
    'St George’s, University of London',
    'University of Sunderland',
    'University of Warwick',
    'University of Auckland (Medicine)',
    'University of Otago (Medicine, Dental Surgery)',
    'Monash University (Medicine)',
    'University of Adelaide (Medicine, Dental Surgery)',
    'University of Newcastle/University of New England (Medicine)',
    'University of New South Wales (Medicine)',
    'University of Western Sydney (Medicine)',
    'University of Queensland (Medicine-conditional entry, Dental Science)',
    'Griffith University (Dentistry)',
    'University of Tasmania (Medicine)',
    'University of Western Australia (Medicine, Dentistry)',
    'Curtin University (Medicine)',
    'Charles Sturt University (Medicine, Dental Science)',
    'Flinders University (Clinical Science/Medicine)',
    'Charles Darwin University (Clinical Science)',
  ];

  const data = [
    {
      title: '1) Tackle each section on its own',
      description: `Making sure you’ve prepared well for each section is an important aspect of good UCAT preparation and, as a result, a strong performance. This begins with studying which skills are tested in each segment and then structuring your preparation to focus on these skills. As you revise, you’ll notice that your approach to Quantitative Reasoning, for example, differs dramatically from your approach to Decision Making.		`,
      description_2: `Each part assesses a distinct set of abilities. Our one-on-one tutoring sessions may be beneficial to you because they may be personalised to your specific needs.`,
    },
    {
      title: '2) Recognize how timing works',
      description: `One of the most prevalent issues students have with the UCAT is the infamously strict time constraints. Some of the parts, for example, have only about 15 seconds per question. This means that getting a head start on time management is crucial. It’s not enough to know how to answer the questions to receive a decent grade. You must be able to respond to them quickly.		`,
      description_2: `Unlike the majority of tests you’ve taken at school, the UCAT is structured in such a way that you’re unlikely to be able to answer all of the questions within the time limit.`,
    },
    {
      title: '3) Ensure efficiency in preparation',
      description: `It’s easy to become overwhelmed during your UCAT preparation and end up doing question after question for hours without improving. This is why thorough planning with specific objectives is critical.		`,
      description_2: `Set modest goals for yourself each day, and make sure to go over all of the questions you get wrong to ensure you learn from your mistakes. Make sure to spread out your revisions and give yourself enough time to prepare so that you don’t have to rush through everything.`,
    },
    {
      title: '4) Allow yourself plenty of time to prepare',
      description: `Because the UCAT is unlike any other exam you’ve taken before, you’ll want to give yourself plenty of time to study and become familiar with the structure. While some people just require a month, you may require two months depending on your other obligations, such as exams. 		`,
      description_2: `Each student’s preparation period for the UCAT will be different. It’s critical not to procrastinate your preparation because you won’t have enough time to master the necessary skills. We recommend that students revise consistently for 2-3 months prior to the UCAT, with more intense practice for the final two weeks.`,
    },
    {
      title: '5) Become acquainted with medical ethics',
      description: `The ‘Situational judgement’ element of the exam, which assesses the ability to comprehend real-world situations, recognise crucial factors, and respond appropriately, is often the most difficult part for students. However, because the scenarios and cases in this section of the UCAT frequently refer to medical ethics, you should aim to be well-versed in this subject. Knowing medical ethics will also assist you deal with ethical difficulties you’ll encounter throughout MMI interviews.`,
      description_2: ``,
    },
    {
      title: '6) Perfectionism should be avoided',
      description: `To do well on the UCAT, you must understand that you will almost certainly have to guess certain questions in order to get marks for the easier and less time-consuming difficulties. In the end, easy and difficult questions are worth the same number of points, and you want to get as many points as possible in the time you have.		`,
      description_2: ``,
    },
  ];

  return (
    <main className='relative w-full h-auto'>
      <HeaderBanner align='left' title={'UCAT'} />
      <div className='w-ful h-full relative mt-10 mb-10'>
        <div className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto'>
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-12 gap-8 mt-14'>
            <section className='col-span-12 md:col-span-5'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4'>
                What exactly is the UCAT?
              </h3>
            </section>
            <section className='col-span-12 md:col-span-7'>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                UCAT is an acronym for University Clinical Aptitude Test. Most
                institutions in the UK, Australia and New Zealand utilise UCAT
                as one of three key criteria to choose students for high-demand
                health-related professions such as medicine and dentistry (the
                other two criteria being performance in final high school exams
                and interviews).
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                The UCAT is a two-hour computer-based test that evaluates a
                variety of mental talents that institutions consider vital for
                practising medicine and dentistry. It is divided into five timed
                subtests, each of which has a set of multiple-choice questions.
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-12  gap-6 mt-14'>
            <section className='col-span-12 md:col-span-5'>
              <Image
                src='/assets/ucat/banner-1.png'
                width={571}
                height={571}
                alt='Why should you take the UCAT?'
              />
            </section>

            <section className='col-span-12 md:col-span-7'>
              <h4 className='text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase'>
                Why should you take the UCAT?
              </h4>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Because of the strong demand for medicine, dentistry, and other
                health science courses, the Year 12 score required to get into
                these programmes has risen dramatically. As a result,
                universities required a new approach for selecting students for
                medical school.
                <br />
                UCAT was created with the objective of evaluating desired
                attributes in the health professions, such as problem-solving,
                empathy, and abstract reasoning abilities. An interview is also
                used by several colleges to select students for medicine and
                dental programmes.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Whether or not you believe UCAT accurately analyses the traits
                needed to be a successful medical student and doctor, the fact
                remains that UCAT is necessary for admission to many health
                science courses.
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto relative mt-14'>
            <div className='w-full h-auto grid grid-cols-12 gap-8'>
              <section className='col-span-12 md:col-span-5'>
                <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase '>
                  What courses require UCAT?
                </h3>
              </section>
              <section className='col-span-12 md:col-span-7'>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                  You will need to take the UCAT if you are interested in any of
                  the following universities
                </p>
              </section>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-4'>
              {universities.map((item, i) => (
                <p
                  key={i}
                  className='text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-1'
                >
                  • {item}
                </p>
              ))}
            </div>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
            <section className='mt-auto md:mt-16'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4'>
                What is the UCAT format like?
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                The computer-based test is divided into five portions, each with
                a point value ranging from 300 to 900. The sections of the UCAT
                exam must be completed in the following order:
              </p>
              <div className='flex items-start justify-start my-6'>
                <span className='block w-[25px] h-[38px] bg-secondary rounded-full'></span>
                <section className='ms-4'>
                  <p className='text-[16px] md:text-[20px] text-primary font-bold text-left'>
                    Verbal Reasoning
                  </p>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left'>
                    (44 questions; 21 minutes + 1 minute of reading)
                  </p>
                </section>
              </div>
              <div className='flex items-start justify-start my-6'>
                <span className='block w-[25px] h-[38px] bg-secondary rounded-full'></span>
                <section className='ms-4'>
                  <p className='text-[16px] md:text-[20px] text-primary font-bold text-left'>
                    Decision Making
                  </p>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left'>
                    (29 questions; 31 minutes + 1 minute of reading)
                  </p>
                </section>
              </div>
              <div className='flex items-start justify-start my-6'>
                <span className='block w-[25px] h-[38px] bg-secondary rounded-full'></span>
                <section className='ms-4'>
                  <p className='text-[16px] md:text-[20px] text-primary font-bold text-left'>
                    Quantitative Reasoning
                  </p>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left'>
                    (36 questions; 24 minutes + 1 minute of reading)
                  </p>
                </section>
              </div>
              <div className='flex items-start justify-start my-4'>
                <span className='block w-[25px] h-[38px] bg-secondary rounded-full'></span>
                <section className='ms-4'>
                  <p className='text-[16px] md:text-[20px] text-primary font-bold text-left'>
                    Abstract Reasoning
                  </p>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left'>
                    (55 questions; 13 minutes + 1 minute of reading)
                  </p>
                </section>
              </div>
              <div className='flex items-start justify-start my-4'>
                <span className='block w-[25px] h-[38px] bg-secondary rounded-full'></span>
                <section className='ms-4'>
                  <p className='text-[16px] md:text-[20px] text-primary font-bold text-left'>
                    Situational Judgement
                  </p>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left'>
                    (69 questions; 26 minutes + 1 minute of reading)
                  </p>
                </section>
              </div>
            </section>
            <section className=''>
              <Image
                src='/assets/ucat/banner-2.png'
                width={471}
                height={471}
                alt='What is the UCAT format like?'
                className='mx-auto'
              />
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                There are no negative marks for incorrect responses because all
                of the questions are multiple choice. Integrity, teamwork,
                problem solving, communication, spatial awareness, and empathy
                are among the characteristics that doctors must possess.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                The UCAT is graded on a scale of 3,600 points. Your performance
                in four areas - verbal reasoning, decision making, quantitative
                reasoning, and abstract reasoning - is scaled to a number
                between 300 and 900 and then totaled up to reach your overall
                UCAT score. Scores for situational judgement are assigned to one
                to four bands.
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:mt-auto'>
            <section className='mt-auto md:mt-18'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4'>
                Why did UCAT take the position of UMAT?
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                According to the UCAT consortium, UCAT superseded UMAT for a
                variety of reasons, including:
              </p>
              <br />
              <div className='flex items-start justify-start mb-4'>
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
                <div>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left'>
                    The insertion of new concepts is significant to the
                    admissions process
                  </p>
                </div>
              </div>
              <div className='flex items-start justify-start mb-4'>
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
                <div>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left'>
                    Because the test is computer-based, immediate results are
                    generated
                  </p>
                </div>
              </div>
              <div className='flex items-start justify-start mb-4'>
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
                <div>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left'>
                    Greater flexibility in terms of where and when the test is
                    conducted, as well as the possibility of several test dates
                  </p>
                </div>
              </div>
            </section>
            <section className='flex flex-col items-center'>
              <Image
                src='/assets/ucat/banner-3.png'
                width={441}
                height={441}
                alt='Why did UCAT take the position of UMAT?'
              />
              <div className='flex items-start justify-start'>
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
                <div>
                  <p className='text-[16px] md:text-[20px] text-primary font-normal text-left'>
                    The Consortium of Australian School Leaver Entry
                    Universities eventually agreed that UCAT was a better test
                    for evaluating prospects for medical and dental school
                    admissions. UCAT was introduced on September 24, 2018, and
                    the first UCAT session was held in July 2019.
                  </p>
                </div>
              </div>
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
            <section className='mt-auto md:mt-14'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4'>
                What constitutes a high UCAT score?
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                You will receive an email from Pearson VUE within a few hours of
                taking UCAT advising you that your UCAT score report is ready to
                view via your Pearson VUE online account. To view your UCAT
                score report, you must first log into your Pearson VUE account.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Each subtest will have a scaled score ranging from 300 to 900,
                as well as a total score for the cognitive subtests ranging from
                1200 to 3600 on your Score Report. Subtest scores are calculated
                (scaled) from your raw score (the number of questions you
                answered correctly) using proprietary statistical algorithms.
              </p>
            </section>
            <section className=''>
              <Image
                src='/assets/ucat/banner-4.png'
                width={571}
                height={571}
                alt='What constitutes a high UCAT score?'
                className='mx-auto'
              />
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                The data reveals that, with the exception of a few graduate
                entry programs, a UCAT score of more than 2800 (700) is
                considered an excellent UCAT score. A score of more than 700 has
                proven to be sufficient to meet the cut-offs of the vast
                majority of programs each year, regardless of the UCAT
                distribution curve or percentiles. This has worked well for
                undergraduate candidates, graduate candidates, and international
                candidates.
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto mt-14'>
            <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4'>
              UCAT Preparation Tips
            </h3>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
              <section>
                {data.slice(0,3).map((item, i) => (
                  <div key={i} className='mb-6'>
                    <h6 className='text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight '>
                      {item.title}
                    </h6>
                    <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                      {item.description}
                    </p>
                    <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                      {item.description_2}
                    </p>
                  </div>
                ))}
              </section>
              <section>
                {data.slice(3,).map((item, i) => (
                  <div key={i} className='mb-6'>
                    <h6 className='text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight '>
                      {item.title}
                    </h6>
                    <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                      {item.description}
                    </p>
                    <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                      {item.description_2}
                    </p>
                  </div>
                ))}
              </section>
            </div>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
            <section className='mt-auto md:mt-14'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4'>
                Why rostrum?
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Rostrum offers a comprehensive UCAT educational course. Our
                instructors have graduated from top medical schools in the UK.
                Our top UCAT topic specialists have effectively created the
                broad course curriculum. The course is designed to thoroughly
                prepare and instil the confidence required to pass the UCAT
                exam, with small batch sizes and one-on-one classes for
                personalised coaching.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                You get complete control over the format of your sessions. Our
                individual course will allow you to create your own fully
                personalised study schedule with your assigned UCAT tutors. If
                you want flexibility without compromising your UCAT performance,
                our one-on-one sessions are for you.
              </p>
              <section className='my-6'>
                <p className='text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left '>
                  Brilliant Mentors
                </p>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left '>
                  Our mentors are excellent educators who run each session
                  efficiently to ensure productivity.
                </p>
              </section>
              <section className='my-6'>
                <p className='text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left '>
                  One-on-one Classes
                </p>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left '>
                  We offer one-on-one classes in order to focus on individual
                  preparation.
                </p>
              </section>
              <section className='my-6'>
                <p className='text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left '>
                  Reliable Curriculum
                </p>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left '>
                  Our training content is based on official exam prep resources
                  to ensure excellent results.
                </p>
              </section>
            </section>
            <section className='flex flex-col items-start justify-end'>
              <Image
                src='/assets/ucat/banner-5.png'
                width={571}
                height={571}
                alt='Why rostrum?'
                className='mx-auto'
              />
              <section className='my-6'>
                <p className='text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left '>
                  Collaborative Classes
                </p>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left '>
                  With their highly interactive seminars, our trainers turn dry
                  topics into engaging modules.
                </p>
              </section>
              <section className='my-6'>
                <p className='text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left '>
                  Mock Tests
                </p>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left '>
                  We conduct mock tests to familiarise students with sitting
                  full-length practice exams under timed conditions.
                </p>
              </section>
            </section>
          </div>
          {/* SECTION END */}
        </div>
      </div>
      <CallToAction />
    </main>
  );
};

export default UCAT;
