import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner";
import CallToAction from "@/components/common/CallToAction";
import AnimationProvider from "@/components/common/AnimationProvider";

const IGCSE = () => {
  const subjects = [
    {
      title: "Economics",
      description: `Students who take IGCSE Economics learn about economic theory, vocabulary, and principles. This course teaches students about the economic strategies of various countries, as well as their interdependence and impact on the global economy. Students also learn how to use economic data analysis tools to process various sorts of economic data.`,
      description_2: `The course contains and develops basic economic numeracy and literacy, which aids in daily decision-making, employs examples from a range of economies, and offers a good foundation for further economics study.`,
    },
    {
      title: "Business Studies",
      description: `IGCSE Business Studies demonstrates knowledge of business principles and practises in a variety of industries. Students studying IGCSE Business Studies will become aware of the various types of business organisations, as well as the various ways in which these organisations run and how inter-departments such as marketing, operations, and finance interact.`,
      description_2: `IGCSE Business Studies students gain lifelong skills such as the ability to analyse business data, communication skills to support arguments with proper reasoning, and the ability to analyse business situations and make decisions or judgments, in addition to theoretical understanding of concepts and techniques.`,
    },
    {
      title: "English Language and Literature",
      description: `The IGCSE English course helps students to improve the capacity to communicate clearly, accurately, and effectively 
			in both speaking and writing, using a diverse vocabulary, perfect grammar, spelling, and punctuation. `,
      description_2: `The IGCSE English syllabus aims to assist students gain a better grasp of how writers use English to convey meaning and achieve the desired effect. It is an internationally recognised English GCSE that can be taken anywhere in 
			the world.`,
    },
    {
      title: "Computer Sciences",
      description: `IGCSE Computer Science emphasises on computational thinking and grasp of principles in order to address real-world problems with computers. It is  fantastic preparation for the Cambridge International AS and A Levels, as well as other areas of study and daily life.			`,
      description_2: `Students learn to programme by writing computer code and obtain a foundational understanding of computer problem-solving methods. Students utilise their knowledge to construct computer-based solutions and comprehend the benefits of using them using algorithms and a high-level programming language.`,
    },
    {
      title: "Biology",
      description: `The course’s main purpose is to give students a firm foundation in biology’s essential ideas while also piquing their interest in the field. Fundamental ideas and concepts are covered in the IGCSE Biology syllabus, as well as some modern applications of biology and a significant emphasis on practical skills.			`,
      description_2: `Biology is the study of living organisms and plants, and our tutors have ample experience in teaching the topic so that students can thrive in IGCSE biology.`,
    },
    {
      title: "Physics",
      description: `This course introduces students to the fundamental theories and concepts of physics while also allowing them to conduct a range of practical experiments.`,
      description_2: `The course’s prime purpose is to give students a strong foundation in physics so that they can develop an interest in the topic for further studies. The course also teaches students that physics is the study of natural occurrences that can be comprehended using evidence and facts..`,
    },
    {
      title: "History",
      description: `The IGCSE History Syllabus looks at some of the most important international concerns of the nineteenth and twentieth centuries, as well as examining the history of specific regions in greater depth. The focus is on both historical knowledge and the skills needed for historical investigation.`,
      description_2: `Students look at history from a social, economic, cultural, and political lens.`,
    },
    {
      title: "Mathematics",
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
      title: "Support for Assessments",
      description: `The IGCSE evaluates students through oral skills, coursework, and practical assessments. Our proficient IGCSE tutors offer exceptional assistance in achieving the assessment objectives.`,
      image: "/assets/igcse/images/1.png",
    },
    {
      title: "Achieve Top Scores",
      description: `Securing admission to your desired university depends on your grades in the pre-university program and the IGCSE. 
Our dedicated IGCSE tutors help you prepare thoroughly for your exams, maximizing your chances of getting into your dream undergraduate program.
`,
      image: "/assets/igcse/images/2.png",
    },
    {
      title: "Targeted Learning",
      description: `Our tutoring services extend beyond our centers in India and UAE to reach students worldwide. We support all IGCSE course subjects, including IGCSE Math, IGCSE Economics, IGCSE Physics, IGCSE Chemistry, and more. `,
      description_2: `Our IGCSE tutors help you in figuring your strengths and weaknesses in each subject. With personalized guidance, we ensure you overcome challenges and strive for top grades in IGCSE exams.`,
      image: "/assets/igcse/images/3.png",
    },
  ];
  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="left"
        title={
          "INTERNATIONAL GENERAL CERTIFICATE OF SECONDARY EDUCATION (IGCSE)"
        }
        image={"/assets/header-banner/igcse.png"}
      />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          <div className="relative w-full md:w-11/12  mx-auto flex items-start">
            <span className="text-secondary text-[128px] font-semibold -translate-y-20 md:-translate-y-12 absolute -left-0 md:-left-12">
              “
            </span>
            <h6 className=" text-[22px] md:text-[28px] text-primary text-center font-semibold leading-tight mt-4">
            At Rostrum, each IGCSE subject is taught by our carefully chosen expert tutors. Their efforts drive our high university acceptance rates for students across UAE, India, UK, and more.

              <span className="text-secondary text-[128px] -translate-y-12  translate-x-0 md:translate-x-6 self-end leading-none absolute rotate-180">
                “
              </span>
            </h6>
          </div>
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="h-full flex flex-col items-center justify-center">
              <Image
                src="/assets/igcse/banner-1.png"
                width={400}
                height={400}
                alt="What exactly is IGSCE?"
              />
            </section>
            <section>
              <h4 className="uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
              What is IGCSE?

              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              Cambridge International General Certificate of Secondary Education (IGCSE) is globally recognized. It is an educational program that helps students learn and apply many key concepts. It teaches them to understand numbers, patterns, and how things relate to each other. Students learn to think critically, solve problems, and use their knowledge in real-life situations.
              <br/>
              <br/>
              Designed for countries across the world, the curriculum introduces students to a wide range of global issues and cultures. This expands a student's view of the world, helping them appreciate different ways of life.
<br/>
<br/>
IGCSE exams try to be fair to everyone. The questions are written so anyone can understand them, regardless of where they come from. They may also use multiple-choice questions instead of questions with written answers. This helps people who are still learning the language.

<br/>
<br/>
Many universities value this program because it gives students a strong academic foundation. It helps them learn to think critically and apply what they learn.

              </p>
            </section>
          </div>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section>
              <h4 className="uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
              Who Can Pursue IGCSE?

              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              Although the IGCSE is ideal for students aged 14-16, any age group can give the exam if they have the aptitude. Students usually start the IGCSE course at age ten and take the exams at eleven. Some international schools allow students to begin as early as nine and sit the exams in the ninth grade. 
              <br/>
              <br/>
              Part of the Cambridge Secondary 2 stage, the IGCSE is trusted by schools and worldwide. Our teachers at Rostrum are experts in helping kids excel in this program. Their many years of experience with the IGCSE enables them to share an incredible wealth of knowledge effectively. This ensures students receive the best possible guidance and support. 

              </p>
            </section>
            <section className="h-full flex flex-col items-center justify-center">
              <Image
                src="/assets/igcse/banner-2.png"
                width={400}
                height={400}
                alt="Who can pursue IGSCE?"
              />
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <section>
              <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
                IGCSE Subjects
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-2">
              Cambridge IGCSE offers a wide selection of over 70 subjects, which are categorized into:

              </p>
            </section>
            <section>
              <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-2">
                English Language and Literature
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-2">
                Humanities & Social Sciences
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-2">
                Creative & Professional
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-2">
              Business Studies
              </p>

            </section>
            <section>
              <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-2">
                Mathematics
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-2">
                Sciences
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-2">
                Languages
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-2">
              Economics
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {subjects.map((item, i) => (
              <section key={i}>
                <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase mb-4">
                  {item.title}
                </h4>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
                  {item.description}
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
                  {item.description_2}
                </p>
              </section>
            ))}
          </div> */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {/* <section className="w-full relative mt-4">
              <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
              <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                Students are required to take at least 5 subjects, but not more
                than 14. The greater choice in subjects accommodates students’
                interests.
              </p>
            </section>
            <section className="w-full relative mt-4">
              <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
              <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                Students of the IGCSE are assessed at the end of the course. The
                assessment can include written, oral, coursework and practical
                assessments.
              </p>
            </section> */}
            <section className="w-full relative mt-4">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
              THE ROSTRUM ADVANTAGE

              </h3>
            </section>
            <section className="w-full relative mt-4">
              <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
              Our IGCSE online classes are tailored to suit each student and cater to any schedule. Your grades greatly impact future opportunities. This is why adapting to each student's learning style and flexibility is essential.

              </p>
              <br />
              <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
              We employ various interactive tools and strategies to coach students worldwide. IGCSE tutoring sessions are designed with the knowledge that every student is unique. Everyone has different learning and comprehension capabilities. At Rostrum we not only understand that, but value your uniqueness at every step.
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            {data.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center"
                >
                  <Image
                    src={item.image}
                    width={300}
                    height={300}
                    alt={item.title}
                  />
                  <h6 className="text-[22px] md:text-[28px] text-primary text-center font-bold leading-tight">
                    {item.title}
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-center mt-2">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          {/* SECTION END */}
        </div>
      </div>
      <CallToAction image={"/assets/call-action/home.png"} />
    </main>
  );
};

export default IGCSE;
