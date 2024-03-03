import React from 'react';
import Image from 'next/image';
import HeaderBanner from '@/components/common/HeaderBanner';
import CallToAction from '@/components/common/CallToAction';
import AnimationProvider from '@/components/common/AnimationProvider';

const IGCSE = () => {
  const subjects = [
    {
      title: 'Economics',
      description: `Students who take IGCSE Economics learn about economic theory, vocabulary, and principles. This course teaches students about the economic strategies of various countries, as well as their interdependence and impact on the global economy. Students also learn how to use economic data analysis tools to process various sorts of economic data.`,
      description_2: `The course contains and develops basic economic numeracy and literacy, which aids in daily decision-making, employs examples from a range of economies, and offers a good foundation for further economics study.`,
    },
    {
      title: 'Business Studies',
      description: `IGCSE Business Studies demonstrates knowledge of business principles and practises in a variety of industries. Students studying IGCSE Business Studies will become aware of the various types of business organisations, as well as the various ways in which these organisations run and how inter-departments such as marketing, operations, and finance interact.`,
      description_2: `IGCSE Business Studies students gain lifelong skills such as the ability to analyse business data, communication skills to support arguments with proper reasoning, and the ability to analyse business situations and make decisions or judgments, in addition to theoretical understanding of concepts and techniques.`,
    },
    {
      title: 'English Language and Literature',
      description: `The IGCSE English course helps students to improve the capacity to communicate clearly, accurately, and effectively 
			in both speaking and writing, using a diverse vocabulary, perfect grammar, spelling, and punctuation. `,
      description_2: `The IGCSE English syllabus aims to assist students gain a better grasp of how writers use English to convey meaning and achieve the desired effect. It is an internationally recognised English GCSE that can be taken anywhere in 
			the world.`,
    },
    {
      title: 'Computer Sciences',
      description: `IGCSE Computer Science emphasises on computational thinking and grasp of principles in order to address real-world problems with computers. It is  fantastic preparation for the Cambridge International AS and A Levels, as well as other areas of study and daily life.			`,
      description_2: `Students learn to programme by writing computer code and obtain a foundational understanding of computer problem-solving methods. Students utilise their knowledge to construct computer-based solutions and comprehend the benefits of using them using algorithms and a high-level programming language.`,
    },
    {
      title: 'Biology',
      description: `The course’s main purpose is to give students a firm foundation in biology’s essential ideas while also piquing their interest in the field. Fundamental ideas and concepts are covered in the IGCSE Biology syllabus, as well as some modern applications of biology and a significant emphasis on practical skills.			`,
      description_2: `Biology is the study of living organisms and plants, and our tutors have ample experience in teaching the topic so that students can thrive in IGCSE biology.`,
    },
    {
      title: 'Physics',
      description: `This course introduces students to the fundamental theories and concepts of physics while also allowing them to conduct a range of practical experiments.`,
      description_2: `The course’s prime purpose is to give students a strong foundation in physics so that they can develop an interest in the topic for further studies. The course also teaches students that physics is the study of natural occurrences that can be comprehended using evidence and facts..`,
    },
    {
      title: 'History',
      description: `The IGCSE History Syllabus looks at some of the most important international concerns of the nineteenth and twentieth centuries, as well as examining the history of specific regions in greater depth. The focus is on both historical knowledge and the skills needed for historical investigation.`,
      description_2: `Students look at history from a social, economic, cultural, and political lens.`,
    },
    {
      title: 'Mathematics',
      description: `IGCSE Maths is an important subject that allows students 
		to develop logic, creativity, critical thinking, and 
		problem-solving skills. The IGCSE Maths topic is critical in 
		the development of mathematical knowledge as a crucial 
		life skill and a solid foundation that allows students to learn and think rationally in any sector, including Science, Technology, and Engineering.`,
      description_2: ``,
    },
  ];

  const data = [
    {
      title: 'Assessment Support:',
      description: `The IGCSE assesses students based on their oral skills, coursework and practical assessments. Our team of expert IGCSE tutors provide extraordinary support in accomplishing the assessment objectives.`,
      image: '/assets/igcse/images/1.png',
    },
    {
      title: 'Maximize Scores:',
      description: `The chances of entering your dream university are determined by the grades that you achieve in both, the pre-university programme and the IGCSE. Our IGCSE tutors prepare you in every way for your boards and help you optimise your potential.`,
      image: '/assets/igcse/images/2.png',
    },
    {
      title: 'Strategic Learning:',
      description: `We offer tutoring services not just at the centres in India and UAE but also online for students worldwide for all  course subjects of the IGCSE (Core and Extended) such as IGCSE Math, IGCSE Economics, IGCSE Physics, IGCSE Chemistry etc.`,
      description_2: `Our IGCSE tutors help you outline your areas of strengths and improvement in a subject. Our personalized care ensures that you overcome your difficulties and achieve an A* in IGCSE exams.`,
      image: '/assets/igcse/images/3.png',
    },
  ];
  return (
    <main className='relative w-full h-auto'>
      <HeaderBanner
        align='left'
        title={
          'INTERNATIONAL GENERAL CERTIFICATE OF SECONDARY EDUCATION (IGCSE)'
        }
      />
      <div className='w-ful h-full relative mt-10 mb-10'>
        <div className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto'>
          <div className='relative w-full md:w-11/12  mx-auto flex items-start'>
            <span className='text-secondary text-[128px] font-semibold -translate-y-12 '>
              “
            </span>
            <h6 className=' text-[22px] md:text-[28px] text-primary text-center font-semibold leading-tight'>
              Each subject under IGCSE is taught by the most experienced tutors,
              and this experience has been generating results with a 90%
              acceptance rate in universities. Our team of experienced tutors
              help students all over the world including India and UAE.
              <span className='text-secondary text-[128px] -translate-y-2 translate-x-6 self-end leading-none absolute'>
                “
              </span>
            </h6>
          </div>
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
            <section className='h-full flex flex-col items-center justify-center'>
              <Image
                src='/assets/igcse/banner-1.png'
                width={400}
                height={400}
                alt='What exactly is IGSCE?'
              />
            </section>
            <section>
              <h4 className='uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight'>
                What exactly is IGSCE?
              </h4>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                IGCSE is an acronym for International General Certificate of
                Secondary Education. It was created by Cambridge International
                Examinations at the University of Cambridge. Any student who
                successfully completes an IGCSE course earns an internationally
                recognised credential. The exam boards Edexcel and Oxford AQA
                both provide their own versions of the International GCSEs.
              </p>
            </section>
          </div>
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
            <section>
              <h4 className='uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight'>
                Who can pursue IGSCE?
              </h4>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Students normally begin studying for the IGCSE course when they
                are ten years old and take the exam when they are eleven years
                old. Some foreign schools, on the other hand, allow pupils to
                begin studying the IGCSE course at the age of nine and take the
                exams as early as the ninth grade. It is a flexible programme
                designed for 14-16 year olds. It aims at “preparing school
                students for life, helping them develop an informed curiosity
                and a lasting passion for learning.”
              </p>
            </section>
            <section className='h-full flex flex-col items-center justify-center'>
              <Image
                src='/assets/igcse/banner-2.png'
                width={400}
                height={400}
                alt='What exactly is IGSCE?'
              />
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-6'>
            <section>
              <h4 className='text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase'>
                IGCSE Subjects
              </h4>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-2'>
                There are over 70 subjects to choose from in Cambridge IGCSE.
                These subjects can be broadly classified into:
              </p>
            </section>
            <section>
              <p className='text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-2'>
                English Language and Literature
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-2'>
                Humanities & Social Sciences
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-2'>
                Creative & Professional
              </p>
            </section>
            <section>
              <p className='text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-2'>
                Mathematics
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-2'>
                Sciences
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-2'>
                Languages
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
            {subjects.map((item, i) => (
              <section key={i}>
                <h4 className='text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase mb-4'>
                  {item.title}
                </h4>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left'>
                  {item.description}
                </p>
                <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left'>
                  {item.description_2}
                </p>
              </section>
            ))}
          </div>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
            <section className='w-full relative mt-4'>
              <span className='absolute top-1 w-4 h-4 rounded-full bg-secondary block'></span>
              <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6'>
                Students are required to take at least 5 subjects, but not more
                than 14. The greater choice in subjects accommodates students’
                interests.
              </p>
            </section>
            <section className='w-full relative mt-4'>
              <span className='absolute top-1 w-4 h-4 rounded-full bg-secondary block'></span>
              <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6'>
                Students of the IGCSE are assessed at the end of the course. The
                assessment can include written, oral, coursework and practical
                assessments.
              </p>
            </section>
            <section className='w-full relative mt-4'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4'>
                THE ROSTRUM EDGE:
              </h3>
            </section>
            <section className='w-full relative mt-4'>
              <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6'>
                Our IGCSE online tutoring classes are personalised to each
                student and fit into any family’s busy schedule. With grades now
                being closely related to life chances and professional
                advancements, it’s more crucial than ever to accommodate each
                student’s learning capacity and flexibility.
              </p>
              <br />
              <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6'>
                For efficient coaching of young kids across geographical
                borders, we use a variety of interactive tools and strategies.
                IGCSE tutoring lessons are held with the understanding that each
                student is different in terms of learning and comprehension
                abilities.
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-4'>
            {data.map((item, i) => {
              return (
                <div className='flex flex-col items-center justify-center'>
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
          {/* SECTION END */}
        </div>
      </div>
	  <CallToAction/>
    </main>
  );
};

export default IGCSE;
