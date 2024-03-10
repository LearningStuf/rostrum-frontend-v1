import React from 'react';
import Image from 'next/image';
import HeaderBanner from '@/components/common/HeaderBanner';
import CallToAction from '@/components/common/CallToAction';
import AnimationProvider from '@/components/common/AnimationProvider';

const IB = () => {
  const data = [
    {
      title: 'Convenient Learning:',
      description: `You learn at your own pace and at your own convenience with IB Coaching at Rostrum. With online coaching, you make effective use of technology by recording your sessions and reviewing them when you need help with internal assignments or reviewing courses. Students who want to learn at their own pace find that recording an online lesson is beneficial because they return to it later in the day and slow down or pause it while taking notes. Tutors provide students a variety of evaluations based on their learning styles and use rubrics to prompt self-evaluation to give them the flexibility they need to reach their learning goals.`,
      image: '/assets/ib/images/1.png',
    },
    {
      title: 'Strategic Learning::',
      description: `One-on-one online IB tutoring is without a doubt the most effective online tutoring platform. One of the most significant advantages is the temporal flexibility provided by specialised study strategies. A tutor have to use commonplace tactics to educate a group of pupils, but in a one-on-one setting, the class can be adjusted to the student’s individual needs and talents. This will also help the tutor build a study plan ahead of time and complete the course much more quickly. With 1-on-1 e-learning, all of the capabilities that simplify and make the teaching and learning process easier are combined.`,
      description_2: `Customised sessions are held with the understanding that each student is different in terms of grasping and learning abilities. We offer IB tutoring services for all the course subjects such as IB Maths, IB Chemistry, IB Physics, IB Economics, IB Biology, IB English, IB Hindi and many more. Our tutors help you outline your areas of strengths and improvement in a subject. They devise ways and utilise various tools to make learning easy. We also provide resources for deeper understanding of a topic.`,
      image: '/assets/ib/images/2.png',
    },
    {
      title: 'Personal Attention::',
      description: `We commonly hear parents complain about their children’s lack of attention in school and even at tuition. It’s unrealistic to demand the teacher’s full attention when there are almost 25 to 40 people in the room, and there’s only so much your teacher can accomplish. The student receives the tutor’s complete attention during one-on-one sessions, resulting in a productive session with unlimited doubt clearing sessions. You can also enjoy a distraction-free environment with a competent online academic instructor, which is crucial to the learning process. It’s not uncommon for a student in a large classroom to feel overwhelmed or frustrated by the constant chatter of a classroom. Our personalised care will ensure that you overcome your difficulties and get a perfect IB score. We provide tutoring services all over the world including on-site services in India and UAE.`,
      image: '/assets/ib/images/3.png',
    },
    {
      title: 'Achieve Targets::',
      description: `The perfect IB score is 45. Our tutors make certain that you achieve the ‘target score’ by channelizing your efforts in the right way. We have an innovative approach which involves interactive whiteboards and customised resources to develop exam skills and ensure that no stone is left unturned to maximise your marks.`,
      image: '/assets/ib/images/4.png',
    },
  ];
  return (
    <main className='relative w-full h-auto'>
      <HeaderBanner align='center' title={'INTERNATIONAL BACCALAUREATE'} 
            image={'/assets/header-banner/ib.png'}

      />
      <div className='w-ful h-full relative mt-10 mb-10'>
        <div className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto'>
          <div className='relative w-full md:w-11/12  mx-auto flex items-start'>
            <span className='text-secondary text-[128px] font-semibold -translate-y-20 absolute'>
              “
            </span>
            <h6 className=' text-[22px] md:text-[28px] text-primary text-center font-semibold leading-tight mt-4'>
              Over 90% of the students from all over the world including India
              and UAE tutored by Rostrum score a 6/7 in their IB subjects.
              Here’s how you can be a part of our success ratio!
              <span className='text-secondary text-[128px] -translate-y-8 md:-translate-y-12 -translate-x-4 md:translate-x-6 self-end leading-none absolute rotate-180'>
                “
              </span>
            </h6>
          </div>
          <br/>
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
            <section className='mt-auto md:mt-18'>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4'>
                What exactly is IB?
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                The International Baccalaureate (IB) programme delivers a
                challenging, uniform high school curriculum for students from
                internationally mobile households. Because it is utilised by the
                majority of schools around the world, it is considered an
                international curriculum in India.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                The International Baccalaureate was founded in 1968 by the
                International Baccalaureate Organisation (IBO), a non-profit
                organisation, in Geneva with a mission – “to develop inquiring,
                knowledgeable and caring young people who help to create a
                better and more peaceful world through intercultural
                understanding and respect.”
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Currently, the IB is recognized as one of the premier global
                curriculums by universities and educational institutions around
                the world. The best part about IB Board is that it does not
                restrict the student to just academics but helps them to develop
                themselves in every sphere of life. Their qualitative reasoning
                as well their rationality is sharpened. This, in the long haul,
                proves to be very beneficial.
              </p>
            </section>
            <section className='flex flex-col items-start'>
              <Image
                src='/assets/ib/banner-1.png'
                width={350}
                height={350}
                alt='What exactly is IB?'
                className='mx-auto mb-4 md:mb-auto'
              />
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-4'>
                The IB consists of four Programs: The IB consists of four
                Programs:
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-4'>
                Primary Years Programme (PYP; ages 3-12)
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-4'>
                Middle Years Programme (MYP; ages 11-16)
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-4'>
                Diploma Programme (DP; ages 16-19)
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-left mt-4'>
                Career-related Programme (CP; ages 16-19)
              </p>
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
            <section className='mt-auto md:mt-18'>
              <h4 className='uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight'>
                Why is the International Baccalaureate (IB) curriculum being
                adopted by an increasing number of Indian schools?
              </h4>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                In India, schools are no longer limited to curricula such as
                CBSE, ICSE, or the state board. With the world obsessed with the
                concept of ‘globalisation,’ international schools are springing
                up at a steady rate in India.
              </p>
              <h4 className='uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight'>
                What makes the IB programme so successful?
              </h4>
              <section className='w-full relative mt-4'>
                <span className='absolute top-1 w-4 h-4 rounded-full bg-secondary block'></span>
                <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6'>
                  The IB curriculum emphasises creativity, hands-on learning,
                  and a comprehensive approach to education.
                </p>
              </section>
              <section className='w-full relative mt-4'>
                <span className='absolute top-1 w-4 h-4 rounded-full bg-secondary block'></span>
                <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6'>
                  The IB prepares students to be global citizens. The curriculum
                  is created in such a way that a student develops a worldwide
                  perspective and becomes globally competent—confident,
                  self-reliant, and cognizant of global events.{' '}
                </p>
              </section>
              <section className='w-full relative mt-4'>
                <span className='absolute top-1 w-4 h-4 rounded-full bg-secondary block'></span>
                <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6'>
                  The IB fosters critical thinking in students. In today’s
                  environment, critical thinking is critical since it allows a
                  person to assess and evaluate topics and views while also
                  generating ideas.
                </p>
              </section>
              <section className='w-full relative mt-4'>
                <span className='absolute top-1 w-4 h-4 rounded-full bg-secondary block'></span>
                <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6'>
                  The International Baccalaureate emphasises equilibrium. An IB
                  student is seen as having a well-balanced study routine,
                  effective time management abilities, and a personality that is
                  not solely focused on academics. The curriculum promotes
                  creativity, action, and service (CAS) as well as learning
                  outside of the classroom. This equilibrium aids a student’s
                  emotional, physical, intellectual, and ethical well-being
                </p>
              </section>
            </section>
            <section className='w-full h-full flex flex-col items-start justify-end'>
              <Image
                src='/assets/ib/banner-2.png'
                width={400}
                height={400}
                alt='What exactly is IB?'
                className='mx-auto mb-4'
              />
              <section className='w-full relative mt-4'>
                <span className='absolute top-1 w-4 h-4 rounded-full bg-secondary block'></span>
                <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6'>
                  The IB supports in-depth learning. The IB curriculum and exams
                  do not encourage students to learn a subject just for the sake
                  of getting good scores. Subject groups allow students to
                  choose a subject of their choice, which encourages in-depth
                  understanding of a subject. The International Baccalaureate’s
                  motto is “Learn to Understand.”
                </p>
              </section>
              <section className='w-full relative mt-4'>
                <span className='absolute top-1 w-4 h-4 rounded-full bg-secondary block'></span>
                <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6'>
                  The Theory of Knowledge (TOK) and Extended Essay (EA) are
                  aspects of the IB curriculum that urge students to ‘apply’
                  what they learn in school. The TOK, for example, pushes
                  students to make connections across disciplines and to back up
                  their knowledge. This method of instruction greatly aids the
                  learner in developing a modern and global perspective, hence
                  assisting in their overall development.
                </p>
              </section>
            </section>
          </div>
          <br />
          <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6'>
            As a result, the IB curriculum is the way of the future for schools
            all around the world.
            <br className='hidden md:block' />
            Rostrum specialises in assisting and mentoring students of IB MYP
            and IB DP.
          </p>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto mt-14'>
            <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4'>
              THE ROSTRUM EDGE
            </h3>
            <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
              <section>
                <section className='w-full flex mt-4'>
                  <p className='text-[40px] md:text-[55px] text-primary font-bold leading-tight'>
                    1
                  </p>
                  <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6'>
                    Our team of subject experienced IB tutors assist students in
                    the successful completion of their Portfolios, Personal
                    project, EE, TOK essay and Internal Assessments.
                  </p>
                </section>
                <section className='w-full flex mt-4'>
                  <p className='text-[40px] md:text-[55px] text-primary font-bold leading-tight'>
                    2
                  </p>
                  <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6'>
                    All our IB tutors are IB graduates themselves and scored
                    perfect marks in the subject they teach. All Rostrum tutors
                    have all completed the IB programme and received excellent
                    grades. In fact, our IB Tutors’ most common score is the
                    full 45 points.
                  </p>
                </section>
                <section className='w-full flex mt-4'>
                  <p className='text-[40px] md:text-[55px] text-primary font-bold leading-tight'>
                    3
                  </p>
                  <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6'>
                    Specifically, your instructor will have scored a 7 in your
                    topic or on the assignment you’re having trouble with. All
                    of our IB tutors go through a rigorous selection and
                    training process to guarantee that they are not only
                    outstanding at leading you to achieve success in the IB, but
                    also exceptional at guiding you to achieve success in the
                    IB. Their mission is to guide you and provide you with the
                    tools you need to accomplish the same. We will select a
                    tutor from our large network of over 300 tutors to meet your
                    specific needs and desires.
                  </p>
                </section>
              </section>
              <section>
                <section className='w-full flex mt-4'>
                  <p className='text-[40px] md:text-[55px] text-primary font-bold leading-tight'>
                    4
                  </p>
                  <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6'>
                    Our IB tutors are well-trained professionals who closely
                    adhere to the International Baccalaureate’s philosophy and
                    learning objectives. Our tutors encourage students to be
                    bold and forthright inquirers, and they patiently develop
                    the curiosity of young students.
                  </p>
                </section>
                <section className='w-full flex mt-4'>
                  <p className='text-[40px] md:text-[55px] text-primary font-bold leading-tight'>
                    5
                  </p>
                  <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6'>
                    We always encourage students to develop concepts through a
                    knowing and application-based approach that can be applied
                    to real-world problems. The IB instructors at Rostrum firmly
                    believe that if we can convert our young students into
                    global thinkers, we can change the world. While learning
                    inside or outside the class, we teach our students to be
                    open-minded observers.
                  </p>
                </section>
                <section className='w-full flex mt-4'>
                  <p className='text-[40px] md:text-[55px] text-primary font-bold leading-tight'>
                    6
                  </p>
                  <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6'>
                    We tutor students in IB Maths, IB Physics, IB Chemistry, IB
                    Biology, IB Economics, IB Business, IB Computers, IB
                    Psychology, IB Environmental Science, IB French and IB
                    Spanish. Each instructor is an expert in their subject and
                    has extensive knowledge of the IB Curriculum.
                  </p>
                </section>
              </section>
            </div>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-14'>
            {data.map((item, i) => (
              <section key={i} className='w-full'>
                <div className='w-full flex items-end justify-end'>
                  <Image
                    src={item.image}
                    width={250}
                    height={250}
                    alt={item.title}
                  />
                </div>
                <h6 className='text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight'>
                  {item.title}
                </h6>
                <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left'>
                  {item.description}
                </p>
                {item.description_2 && (
                  <p className='text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left'>
                    {item.description_2}
                  </p>
                )}
              </section>
            ))}
          </div>
          {/* SECTION END */}
        </div>
      </div>
    </main>
  );
};

export default IB;
