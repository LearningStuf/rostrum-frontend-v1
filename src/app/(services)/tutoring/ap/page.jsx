import React from 'react';
import Image from 'next/image';
import HeaderBanner from '@/components/common/HeaderBanner';
import CallToAction from '@/components/common/CallToAction';
import AnimationProvider from '@/components/common/AnimationProvider';

const AP = () => {
  const characteristics = [
    `The majority of exams last between two and three hours`,
    `Multiple-choice questions typically make up the first half of a test`,
    `For paper and pencil exams, you will select one of four to five response options for each question and use a pencil to bubble in your selection on your AP answer sheet`,
    `For AP Chinese and AP Japanese Language and Culture Exams, you’ll enter your answers in the exam application’’`,
    `Only the number of questions answered correctly determines your total exam score in the multiple-choice part. 
		Incorrect or unanswered questions will not result in points being awarded or deducted.`,
    `Free-response questions, which require you to construct your own responses, usually make up the second section of the exam. Your comments may take the shape of an essay, a problem-solving solution, or a spoken response, 
		depending on the exam.`,
    `In most cases, you’ll be writing your response in pen in the 
		free-response exam booklet for paper and pencil exams.`,
    `You’ll type your responses in the exam application for the AP Chinese and AP Japanese Language and Culture Exams.`,
  ];
  const data = [
    {
      title: 'The first factor is the subject',
      description: `Consider the subject and honestly assess your ability with the material while devising a study approach. You should spend more time on the AP subject(s) that you struggle with and less time on the subjects that you excel at.
      While your strengths and interests may differ, some areas, such as AP Music Theory and AP Psychology, tend to test easier. Exams for AP Physics 1 and AP Chemistry, on the other hand, are more difficult for many students. As a result, these tests may necessitate greater focus and planning.`,
      image: '/assets/ap/images/1.png',
    },
    {
      title: 'Target Score is the second factor to consider',
      description: `AP tests are assessed on a 5-point scale, with students striving for a score of 3 or better – a mark that shows a student’s eligibility for college credit. Learners aiming for a 5 in a topic will usually need to study more than those aiming for a 3.
      Furthermore, not all universities have the same attitude toward test scores. Some schools will give credit for a 3 on an AP exam, while others will require a 4 or 5 depending on the subject. Consult your desired schools to find out what grades you should aim for.`,
      image: '/assets/ap/images/2.png',
    },
    {
      title: 'The third factor is Specialised Interests',
      description: `While some students find it beneficial to simply retrace their steps and review AP course content in the same way they did in class, it is also beneficial to consider areas that may require additional focus. 
      Spend additional time on the areas of the curriculum that you struggle with to ensure you have a well-rounded comprehension of the material. Examining previous homework assignments, quizzes, and tests might help you identify potential problem areas.`,
      image: '/assets/ap/images/3.png',
    },
    {
      title: 'Achieve Targets',
      description: `The first step to gain entry into your dream university is to achieve the ‘target score!’ Our AP tutors make certain that you achieve the ‘target score’ by channelizing your efforts in the right way. They use innovative approaches to develop exam skills and ensure that no stone is left unturned to maximise your marks.
      Our tutors are hand-picked from among our most experienced and in-demand tutors. Each of them has spent thousands of hours tutoring students and, more importantly, has helped them considerably improve their grades.`,
      image: '/assets/ap/images/4.png',
    },
    {
      title: 'Flexible Learning',
      description: `We realise that you are juggling a hundred tasks at a time. Hence, we offer you options to learn at your convenience. Our tutors have worked with a wide range of students from various backgrounds and with varying requirements.
      They tailor every program specifically for you. You may choose a tutor to teach you in-person or online.`,
      image: '/assets/ap/images/5.png',
    },
    {
      title: 'Rostrum Community',
      description: `The Rostrum Community is a global network of successful alumni and students from leading universities across the globe. The members of the community welcome queries and are ready to part with their knowledge to help you achieve success.
      Being a part of the community gives you an opportunity to learn from their experience and plan your future. Join our team of students from all over the world including India and the UAE.`,
      image: '/assets/ap/images/6.png',
    },
  ];
  return (
    <main className='relative w-full h-auto'>
      <HeaderBanner
        align='left'
        title={'ADVANCED PLACEMENT EXAMS 2022 (AP EXAMS)'}
      />
      <div className='w-ful h-full relative mt-10 mb-10'>
        <div className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto'>
          <div className='relative w-full md:w-11/12  mx-auto flex items-start'>
            <span className='text-secondary text-[128px] font-semibold -translate-y-12 '>
              “
            </span>
            <h6 className=' text-[22px] md:text-[28px] text-primary text-center font-semibold leading-tight'>
              75% of our students score a 5/5 on their AP’s. Practise questions
              handed out on a daily basis for thorough readiness.
              <span className='text-secondary text-[128px] -translate-y-2 translate-x-6 self-end leading-none absolute'>
                “
              </span>
            </h6>
          </div>
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
            <section className='mt-auto md:mt-18'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4'>
                WHAT IS THE AP TEST?
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Advanced Placement (AP) is a programme that provides high school
                students with college-level curricula and examinations in order
                to demonstrate their ability in specific areas prior to
                enrolling in college. A student who achieves a high score on
                their AP exam may be granted course credit and placement. Simply
                put, by taking an AP course, you are demonstrating to colleges
                and institutions that you have what it takes to excel in
                specific undergraduate topics.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Students seeking to pursue undergraduate education in Australia,
                Canada, Singapore, the United Kingdom, the United States, and
                other countries are eligible to get university credit or have
                their AP Exam scores reviewed during the admissions process.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Advanced Placement examinations offered by the College Board are
                taken each May by students. These tests are a culmination of
                year-long Advanced Placements courses. AP exams (with few
                exceptions) have a multiple-choice section and a free-response
                section.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                To demonstrate mastery in the chosen courses, a student must
                take the AP exam (a pencil and paper MCQ based exam) and get
              </p>
            </section>
            <section className='flex flex-col items-center'>
              <Image
                src='/assets/ap/banner-1.png'
                width={771}
                height={771}
                alt='WHAT IS THE AP TEST?'
                // objectFit='containe'
              />
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                at least 3/5.A student must be under the age of 21 in order to
                take the AP exam. As a result, taking the exam in grade 11, 12
                or even 10 would be excellent.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                AP tests cover a range of subjects from Biology to European
                History to Music Theory. There are currently over 38 AP test
                options. Following are the subject groups from which a student
                can choose subjects of his/her choice from each subject group:
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Following are the subject groups from which a student can choose
                subjects of his/her choice from each subject group:
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-4'>
            <section>
              <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight flex items-start'>
                <span className='w-6 h-6 rounded-full bg-secondary block mt-1 me-2'></span>
                History and <br className='hidden md:block' /> Social Sciences
              </h6>
              <ul className='text-[16px] md:text-[20px] text-primary font-normal ms-8 mt-2'>
                <li>Comparative Government and Politics</li>
                <li>European History</li>
                <li>Human Geography</li>
                <li>Macroeconomics</li>
                <li>Microeconomics</li>
                <li>Psychology</li>
                <li>United States Government and Politics</li>
                <li>United States History</li>
                <li>World History</li>
              </ul>
            </section>
            <section>
              <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight flex items-start'>
                <span className='w-6 h-6 rounded-full bg-secondary block mt-1 me-2'></span>
                Mathematics and
                <br className='hidden md:block' />
                Computer Science
              </h6>
              <ul className='text-[16px] md:text-[20px] text-primary font-normal ms-8 mt-2'>
                <li>Calculus AB</li>
                <li>Calculus BEHENCHOODH</li>
                <li>Computer Science A</li>
                <li>Statistics</li>
                <li>Computer Science Principles</li>
              </ul>
            </section>
            <section>
              <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight flex items-start'>
                <span className='w-6 h-6 rounded-full bg-secondary block mt-1 me-2'></span>
                Sciences
              </h6>
              <ul className='text-[16px] md:text-[20px] text-primary font-normal ms-8 mt-2'>
                <li>Biology</li>
                <li>Chemistry</li>
                <li>Environmental Science</li>
                <li>Physics1 & 2: Algebra-Based</li>
                <li>Physics C: Electricity and Magnetism</li>
                <li>Physics C: Mechanics</li>
              </ul>
            </section>
            <section>
              <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight flex items-start'>
                <span className='w-6 h-6 rounded-full bg-secondary block mt-1 me-2'></span>
                Arts
              </h6>
              <ul className='text-[16px] md:text-[20px] text-primary font-normal ms-8 mt-2'>
                <li>History</li>
              </ul>
            </section>
            <section>
              <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight flex items-start'>
                <span className='w-6 h-6 rounded-full bg-secondary block mt-1 me-2'></span>
                English
              </h6>
              <ul className='text-[16px] md:text-[20px] text-primary font-normal ms-8 mt-2'>
                <li>English Language and Composition</li>
                <li>English Literature and Composition</li>
              </ul>
            </section>
            <section>
              <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight flex items-start'>
                <span className='w-6 h-6 rounded-full bg-secondary block mt-1 me-2'></span>
                Scoring
              </h6>
              <ul className='text-[16px] md:text-[20px] text-primary font-normal ms-8 mt-2'>
                <li>5 − Extremely well qualified</li>
                <li>4 − Well qualified</li>
                <li>3 − Qualified</li>
                <li>2 − Possibly qualified</li>
                <li>1 − No recommendation within reach</li>
              </ul>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-2'>
            <section>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Clearly AP’s have wide ranging subjects. AP tests are scored on
                a scale of 1–5. While every college is different, most schools
                won’t accept AP scores for credit unless you score at least a 4.
                75% of our students from all over the world , including India
                and the UAE, score a perfect score of 5 in their APs.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Good AP scores help you earn college credit. This allows
                students to avoid some beginners level college courses, allowing
                them to graduate sooner, add a second major, or take more
                advanced courses. Although it varies from college to college and
                university to university. Some may not accept credit unless you
                score a 5. Some may not accept it at all. A student can also
                save money on college expenses such as tuition and textbooks by
                passing an AP Exam.
              </p>
            </section>
            <section>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                While earning college credit is one benefit of taking an AP
                course for a year, it should not be considered the primary
                benefit of taking these challenging programmes.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Students who take AP classes are exposed to a degree of
                intellectual rigour that is more comparable to what they would
                encounter in college. Whether the student’s AP exam result
                reflects their hard work or they had a bad testing day and
                didn’t attain the desired score, the effort put forth in an AP
                class will pay off in college and beyond.
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
            <section className='mt-auto'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4'>
                EXAM FORMATS FOR AP EXAMS IN 2022
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                The College Board dramatically changed its AP testing procedures
                in 2020 and 2021 by delivering digital versions of tests. This
                year, though, most tests will use the classic pen-and-paper
                method once again.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                This implies that all exams must be taken by hand, with the
                exception of the AP Chinese and AP Japanese language and culture
                assessments, which have always been administered on a computer.
                Students who have been granted special testing accommodations
                that allow for the use of technology are exempt from this
                restriction.
              </p>
            </section>
            <section className='flex flex-col items-center'>
              <Image
                src='/assets/ap/banner-2.png'
                width={429.11}
                height={579.57}
                alt='EXAM FORMATS FOR AP EXAMS IN 2022'
              />
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <br />
          <br />
          <h6 className=' text-[22px] md:text-[28px] text-primary text-center md:text-left font-semibold leading-tight'>
            Each of the 38 tests has its own set of requirements,{' '}
            <br className='hidden md:block' /> however they all have the
            following characteristics:
          </h6>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
            {characteristics.map((item, i) => (
              <section key={i} className='w-full relative mt-auto md:mt-4'>
                <span className='absolute top-1 w-4 h-4 rounded-full bg-secondary block'></span>
                <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6'>
                  {item}
                </p>
              </section>
            ))}
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto relative mt-14'>
            <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2'>
              HOW TO PREPARE FOR AP AN EXAM?
            </h3>
            <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left'>
              The three elements listed below can help you figure out how much
              <br className='hidden md:block' />
              studying you’ll need to accomplish before your AP exam (s).
            </p>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-4'>
              {data.slice(0, 3).map((item, i) => {
                return (
                  <div key={i} className='flex flex-col items-center justify-center'>
                    <Image
                      src={item.image}
                      width={300}
                      height={300}
                      alt={item.title}
                    />
                    <h6 className='text-[22px] md:text-[28px] text-primary text-center font-bold leading-tight'>
                      {item.title}
                    </h6>
                    <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-center mt-2'>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='w-full h-auto relative mt-14'>
            <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2'>
              Here’s how you’d find us to be different:
            </h3>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-4'>
              {data.slice(3,).map((item, i) => {
                return (
                  <div  key={i} className='flex flex-col items-center justify-center'>
                    <Image
                      src={item.image}
                      width={300}
                      height={300}
                      alt={item.title}
                    />
                    <h6 className='text-[22px] md:text-[28px] text-primary text-center font-bold leading-tight'>
                      {item.title}
                    </h6>
                    <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-center mt-2'>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* SECTION END */}
        </div>
      </div>
    </main>
  );
};

export default AP;
