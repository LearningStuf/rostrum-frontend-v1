import React from 'react';
import Image from 'next/image';
import HeaderBanner from '@/components/common/HeaderBanner';
import CallToAction from '@/components/common/CallToAction';
import AnimationProvider from '@/components/common/AnimationProvider';

const AP = () => {
  const characteristics = [
    `Eligibility Criteria: Students should complete the corresponding AP courses before applying for AP exams. These exams must be registered through the students' respective high schools. The registration process includes payment of fees.`,
    `Exam Format: AP exams include a multiple choice portion that makes up the first half of the exam. This portion requires students to choose the correct option from four or five answers. The second half of the exam comprises free-response questions. This portion consists of open-ended questions and essays. It allows students to display their expertise in a given subject. `,
    `Exam duration: Most exams have a time limit of 2 to 3 hours.`,
    `Policy on negative marking: There is no negative marking on a student's score in AP exams. You will be awarded points for your correct answers. Incorrect answers will not result in points being deducted from your total score.`,
    `Scoring: As mentioned before, exams are scored on a scale of 1 to 5, with 5 being the highest score.`
  ];
  const data = [
    {
      title: 'Factor # 1: Time Allocation and Planning',
      description: `Knowing your strengths and weaknesses is important for achieving your desired scores. Assess your abilities and skills in the subjects you are taking and proceed accordingly. It is recommended that you invest more time and energy into gaining a grip on your weaker subjects rather than subjects you find easier to handle. AP exam preparation requires strategic focus and planning.`,
      image: '/assets/ap/images/1.png',
    },
    {
      title: 'Factor # 2: Know Your Target Score',
      description: `Consult the colleges you want to apply to and gather detailed information on the required scores to be eligible for college credit. As mentioned before, AP exams are scored on a 5-point scale. Once you have a target score in mind, plan your timetable accordingly.`,
      image: '/assets/ap/images/2.png',
    },
    {
      title: 'Factor # 3: Identify Your Problem Areas',
      description: `Before you start studying, identify the areas in which you fall short. Go through your old test scores, assignments, homework, and projects. Have in-depth discussions with your respective subject teachers and your assigned tutors to help you in the process. Doing so will help ensure that you know which parts of the curriculum you need to spend extra time on. `,
      image: '/assets/ap/images/3.png',
    },
    {
      title: 'Comprehensive Resources and Study Materials',
      description: `Our comprehensive question paper bank has been collected and curated by some of the most expert teachers worldwide. Practice questions are handed out daily to students to ensure they achieve top-notch practice. Choosing Rostrumedu means unlocking a wealth of practice resources to help you excel in your AP exams.`,
      image: '/assets/ap/images/4.png',
    },
    {
      title: 'Flexible Learning Plans According to Your Requirements',
      description: `Each student is different in the subjects they choose to study and the time required for each subject. Some students excel in mathematics, while others find it easier to concentrate on the arts. Not only this, but by this stage in a student’s academic career, they are juggling extra-curricular and various other things. Our tutors have the expertise to customize an academic schedule that accommodates all your needs so you can maximize your study hours.`,
      image: '/assets/ap/images/5.png',
    },
    {
      title: 'Expert Tutors Dedicated To Your Success',
      description: `Rostrumedu is best known for its team of experienced subject specialists who specialize in AP exam preparation. Our educators strive to make the course material easier to understand and instill the best possible guidelines in our students. Our tutors are dedicated to equipping you with the knowledge and skills you need to pass your AP exams with flying colors.`,
      image: '/assets/ap/images/6.png',
    },
  ];
  return (
    <main className='relative w-full h-auto'>
      <HeaderBanner
        align='left'
        title={'ADVANCED PLACEMENT EXAMS 2022 (AP EXAMS)'}
        image={'/assets/header-banner/ap.png'}

      />
      <div className='w-ful h-full relative mt-10 mb-10'>
        <div className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto'>
          <div className='relative w-full md:w-10/12  mx-auto flex items-start'>
            <span className='text-secondary text-[128px] font-semibold -translate-y-20 absolute'>
              “
            </span>
            <h6 className='text-[22px] md:text-[28px] text-primary text-center font-semibold leading-tight mt-4 md:mt-auto'>
            “75% of our students, based in the UAE and India, score a perfect 5/5 on their AP exams.”

              <span className='text-secondary text-[128px] -translate-y-10 md:-translate-y-16 translate-x-0 md:translate-x-6 self-end leading-none absolute rotate-180'>
                “
              </span>
            </h6>
          </div>
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
            <section className='mt-auto md:mt-18'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4'>
              What Are AP Tests?
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              Advanced Placement Exams (AP Exams) are standardized tests conducted by the College Board. They are common in the USA, Australia, Canada, the United Kingdom, and more. The AP courses are much more challenging and rigorous than regular high-school courses. We know that the corresponding exams are just as tough.

              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Students seeking to pursue undergraduate education in Australia,
                Canada, Singapore, the United Kingdom, the United States, and
                other countries are eligible to get university credit or have
                their AP Exam scores reviewed during the admissions process.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              The College Board administers AP exams once a year in May. The exam consists of a multiple-choice section and a free-response section. Depending on the subject, the duration varies between 2 and 3 hours. AP exams are scored on a scale of 1 to 5. Different universities and colleges have various standards for AP scores for placement awards. However, to demonstrate one’s expertise, one must at least score a 3/5. 
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              Most of our students (75%) score a perfect 5 in their AP exams. The scoring system is as follows:
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
                <li>Politics and Comparative Government</li>
                <li>United States Government and Politics</li>
                <li>Human Geography                </li>
                <li>World History                </li>
                <li>European History                </li>
                <li>Macroeconomics                </li>
                <li>Microeconomics                </li>
                <li>Psychology</li>
                <li>United States History                </li>
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
                <li>Computer Science A</li>
                <li>Statistics</li>
                <li>Calculus AB</li>
                <li>Calculus BC</li>
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
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-1 gap-6 mt-2'>
            <section>
            <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight flex items-start'>
            Why Apply for AP Exams?
            </h6>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              The key aspects of AP exams include:
              </p>
              <ul>
                <li className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4' >
                - Eligibility for college credit or advanced placement in the adjacent/corresponding college courses. Some AP courses also help make students eligible to skip certain introductory courses. You may jump straight to advanced courses in that subject.
                </li>
                <li className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4' >
                - Remarkable grades in AP courses provide an edge on a student’s college application. They are evidence that a student understands concepts at the university level and can handle the required workload.
                </li>
                <li className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4' >
                 -  AP courses and exams also help students develop critical thinking and time management skills. These help tremendously in university and higher education.
                </li>
              </ul>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
            <section className='mt-auto'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4'>
              Exam Formats for AP Exams (2024)
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              Advanced Placement exams for 2024 are conducted in schools via pen-and-paper. Apart from Chinese and Japanese, all exams will be handwritten and submitted as such. As usual, AP Chinese and Japanese Language and Culture exams are held on computers. Of course, students granted special accommodations are exempt from this restriction.
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
          Requirements for AP Exams (2024)

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
            Preparation Strategies for AP Exams
            </h3>
            <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-center md:text-left mt-2'>
            At Rostrum Education, we employ the most qualified, informed, and credible tutors. They provide our students with the most effective one-on-one tutoring experience. Our exclusive and expertly designed curriculum and course material help our students. They can achieve their personal best scores in their AP exams. Last but not least, our digitized education system has smart classes and interactive whiteboards. It helps keep our students engaged in the course materials. Exam preparation, even for AP exams, need not be dull.  

            </p>

            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
              {data.slice(0, 3).map((item, i) => {
                return (
                  <div key={i} className='flex flex-col items-center justify-center'>
                    <Image
                      src={item.image}
                      width={300}
                      height={300}
                      alt={item.title}
                    />
                    <h6 className='text-[22px] md:text-[28px] text-primary text-center font-bold leading-tight mt-4'>
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
            Why You Should Pick Rostum Education
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
                    <h6 className='text-[22px] md:text-[28px] text-primary text-center font-bold leading-tight mt-4'>
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
