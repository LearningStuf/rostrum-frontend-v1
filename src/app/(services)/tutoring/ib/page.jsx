import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner";
import CallToAction from "@/components/common/CallToAction";
import AnimationProvider from "@/components/common/AnimationProvider";

const IB = () => {
  const data = [
    {
      title: "Convenient Learning:",
      description: `You learn at your own pace and at your own convenience with IB Coaching at Rostrum. With online coaching, you make effective use of technology by recording your sessions and reviewing them when you need help with internal assignments or reviewing courses. Students who want to learn at their own pace find that recording an online lesson is beneficial because they return to it later in the day and slow down or pause it while taking notes. Tutors provide students a variety of evaluations based on their learning styles and use rubrics to prompt self-evaluation to give them the flexibility they need to reach their learning goals.`,
      image: "/assets/ib/images/1.png",
    },
    {
      title: "Strategic Learning::",
      description: `One-on-one online IB tutoring is without a doubt the most effective online tutoring platform. One of the most significant advantages is the temporal flexibility provided by specialised study strategies. A tutor have to use commonplace tactics to educate a group of pupils, but in a one-on-one setting, the class can be adjusted to the student’s individual needs and talents. This will also help the tutor build a study plan ahead of time and complete the course much more quickly. With 1-on-1 e-learning, all of the capabilities that simplify and make the teaching and learning process easier are combined.`,
      description_2: `Customised sessions are held with the understanding that each student is different in terms of grasping and learning abilities. We offer IB tutoring services for all the course subjects such as IB Maths, IB Chemistry, IB Physics, IB Economics, IB Biology, IB English, IB Hindi and many more. Our tutors help you outline your areas of strengths and improvement in a subject. They devise ways and utilise various tools to make learning easy. We also provide resources for deeper understanding of a topic.`,
      image: "/assets/ib/images/2.png",
    },
    {
      title: "Personal Attention::",
      description: `We commonly hear parents complain about their children’s lack of attention in school and even at tuition. It’s unrealistic to demand the teacher’s full attention when there are almost 25 to 40 people in the room, and there’s only so much your teacher can accomplish. The student receives the tutor’s complete attention during one-on-one sessions, resulting in a productive session with unlimited doubt clearing sessions. You can also enjoy a distraction-free environment with a competent online academic instructor, which is crucial to the learning process. It’s not uncommon for a student in a large classroom to feel overwhelmed or frustrated by the constant chatter of a classroom. Our personalised care will ensure that you overcome your difficulties and get a perfect IB score. We provide tutoring services all over the world including on-site services in India and UAE.`,
      image: "/assets/ib/images/3.png",
    },
    {
      title: "Achieve Targets::",
      description: `The perfect IB score is 45. Our tutors make certain that you achieve the ‘target score’ by channelizing your efforts in the right way. We have an innovative approach which involves interactive whiteboards and customised resources to develop exam skills and ensure that no stone is left unturned to maximise your marks.`,
      image: "/assets/ib/images/4.png",
    },
  ];
  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="center"
        title={"The IB Diploma Program "}
        image={"/assets/header-banner/ib.png"}
      />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          <div className="relative w-full md:w-11/12  mx-auto flex items-start">
            <span className="text-secondary text-[128px] font-semibold -translate-y-20 absolute">
              “
            </span>
            <h6 className=" text-[22px] md:text-[28px] text-primary text-center font-semibold leading-tight mt-4">
              The International Baccalaureate (IB) Diploma Program is a
              comprehensive two-year curriculum. It is designed for students
              aged 16-19. IB is globally recognized by universities and
              educational institutions. It seeks to develop knowledgeable,
              curious, and caring young people. Taking on global challenges is
              easier when you have the tools to do so.
              <span className="text-secondary text-[128px] -translate-y-8 md:-translate-y-12 -translate-x-4 md:translate-x-6 self-end leading-none absolute rotate-180">
                “
              </span>
            </h6>
          </div>
          <br />
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="mt-auto md:mt-18">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
                Program Structure
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The IB Diploma Program consists of six subject groups and a core
                curriculum:
              </p>
              <h4 className="text-center md:text-left text-[20px] md:text-[24px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
                Subject Groups
              </h4>
              <ol className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4 list-decimal list-inside">
                <li>Language and Literature studies</li>
                <li>Sciences</li>
                <li>Language Acquisition</li>
                <li>Mathematics</li>
                <li>Individuals and Societies</li>
                <li>The Arts</li>
              </ol>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Students select three subjects to study at the Higher Level (HL)
                and three at the Standard Level (SL). It ensures ensuring a
                broad and balanced learning experience.
              </p>
            </section>
            <section className="flex flex-col items-start">
              <Image
                src="/assets/ib/banner-1.png"
                width={350}
                height={350}
                alt="What exactly is IB?"
                className="mx-auto mb-4 md:mb-auto"
              />
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}text-left ps-6
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="mt-auto md:mt-18">
              <h4 className="uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
                Core Curriculum
              </h4>
              {/* <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              </p> */}
              {/* <h4 className="uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
                What makes the IB programme so successful?
              </h4> */}
              <section className="w-full relative mt-4">
                <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal ">
                  Theory of Knowledge (TOK): Encourages critical thinking about
                  knowledge across disciplines.
                </p>
              </section>
              <section className="w-full relative mt-4">
                <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                  Extended Essay (EE): An independent, self-directed piece of
                  research, culminating in a 4,000-word paper.
                </p>
              </section>
              <section className="w-full relative mt-4">
                <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                  Creativity, Activity, Service (CAS): Creates students'
                  awareness and appreciation of life outside the academic
                  sphere.
                </p>
              </section>
              <h4 className="mt-6 uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
                Key Features of the IB Diploma Program
              </h4>
              <section className="w-full relative mt-4">
                <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                  Global Perspective: Develops international-mindedness and
                  understanding of diverse cultures.
                </p>
              </section>
              <section className="w-full relative mt-4">
                <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                  Critical Thinking: Emphasizes independent thought and drives
                  students to become active learners.
                </p>
              </section>
              <section className="w-full relative mt-4">
                <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                  Holistic Development: Balances academic rigour with personal
                  growth through CAS activities.
                </p>
              </section>
              <section className="w-full relative mt-4">
                <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                  University Preparation: Equips students with research,
                  writing, and analytical skills crucial for higher education.
                </p>
              </section>
            </section>
            <section className="w-full h-full flex flex-col items-start justify-end">
              <Image
                src="/assets/ib/banner-2.png"
                width={400}
                height={400}
                alt="What exactly is IB?"
                className="mx-auto mb-4"
              />
              <h4 className="mt-6 uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
                Academic Benefits
              </h4>
              <section className="w-full relative mt-4">
                <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                  Internationally recognized qualification
                </p>
              </section>
              <section className="w-full relative mt-4">
                <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                  Development of time management and study skills
                </p>
              </section>
              <section className="w-full relative mt-4">
                <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                  Preparation for university-level work
                </p>
              </section>
              <section className="w-full relative mt-4">
                <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                  Potential for advanced standing or course credit at many
                  universities
                </p>
              </section>
            </section>
          </div>
          <h4 className="mt-6 uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
            Assessment
          </h4>
          <section className="w-full relative mt-4">
            <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
            <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
              Internal assessments: Include oral work, fieldwork, laboratory
              work, and artistic performances.
            </p>
          </section>
          <section className="w-full relative mt-4">
            <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
            <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
              External examinations: Conducted at the end of the program, marked
              by external IB examiners.
            </p>
          </section>

          <br />
          <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
            Students receive scores on a 1-7 scale for each subject. There are
            also up to 3 additional points for the core components. A total of
            45 points is possible, with a minimum of 24 points required to
            receive the diploma.
          </p>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto mt-14">
            <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
              Support at Rostrum
            </h3>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <section>
                <section className="w-full flex mt-4">
                  <p className="text-[40px] md:text-[55px] text-primary font-bold leading-tight">
                    1
                  </p>
                  <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                    Expert Tutoring: Our tutors are IB graduates with extensive
                    curriculum and assessment criteria knowledge.
                  </p>
                </section>
                <section className="w-full flex mt-4">
                  <p className="text-[40px] md:text-[55px] text-primary font-bold leading-tight">
                    2
                  </p>
                  <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                    Personalized Instruction: Tailored one-on-one sessions
                    address individual learning needs and goals.
                  </p>
                </section>
                <section className="w-full flex mt-4">
                  <p className="text-[40px] md:text-[55px] text-primary font-bold leading-tight">
                    3
                  </p>
                  <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                    Subject-Specific Support: Specialized assistance in
                    challenging areas such as IB Physics, Chemistry, and
                    Mathematics.
                  </p>
                </section>
              </section>
              <section>
                <section className="w-full flex mt-4">
                  <p className="text-[40px] md:text-[55px] text-primary font-bold leading-tight">
                    4
                  </p>
                  <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                    Exam Preparation: Strategic guidance for both internal
                    assessments and final examinations.
                  </p>
                </section>
                <section className="w-full flex mt-4">
                  <p className="text-[40px] md:text-[55px] text-primary font-bold leading-tight">
                    5
                  </p>
                  <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                    Flexible Learning: Online sessions with recorded content for
                    review and convenience.
                  </p>
                </section>
                {/* <section className="w-full flex mt-4">
                  <p className="text-[40px] md:text-[55px] text-primary font-bold leading-tight">
                    6
                  </p>
                  <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                    We tutor students in IB Maths, IB Physics, IB Chemistry, IB
                    Biology, IB Economics, IB Business, IB Computers, IB
                    Psychology, IB Environmental Science, IB French and IB
                    Spanish. Each instructor is an expert in their subject and
                    has extensive knowledge of the IB Curriculum.
                  </p>
                </section> */}
              </section>
            </div>
          </div>
          <br/>
          <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
          At Rostrum, over 90% of our students have scored 6 or 7 in their IB
            subjects. Our targeted approach and experienced tutors are here for
            students! They give students the tools and confidence they need to
            excel in the IB Diploma Program.
            <br />
            <br />
            Please contact our academic advisors for more info on how Rostrum
            can support you.
          </p>
          {/* SECTION END */}
          {/* SECTION START */}
          {/* <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            {data.map((item, i) => (
              <section key={i} className="w-full">
                <div className="w-full flex items-end justify-end">
                  <Image
                    src={item.image}
                    width={250}
                    height={250}
                    alt={item.title}
                  />
                </div>
                <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                  {item.title}
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left">
                  {item.description}
                </p>
                {item.description_2 && (
                  <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left">
                    {item.description_2}
                  </p>
                )}
              </section>
            ))}
          </div> */}
          {/* SECTION END */}
        </div>
      </div>
    </main>
  );
};

export default IB;
