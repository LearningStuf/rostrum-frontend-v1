import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner";
import CallToAction from "@/components/common/CallToAction";
import AnimationProvider from "@/components/common/AnimationProvider";

const LNAT = () => {
  const universities = [
    `University of Bristol`,
    `University of Oxford`,
    `King’s College London (KCL)`,
    `Durham University`,
    `UCL Faculty of Laws`,
    `University of Nottingham`,
    `University of Glasgow`,
    `SOAS`,
    `LSE London School of Economics and Political Science`,
  ];

  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="left"
        title={"LNAT EXAM PREPARATION"}
        image={"/assets/header-banner/lnat.png"}
      />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-4">
                What is the LNAT?
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Getting a great score on the Law National Aptitude Test (LNAT)
                exam can open doors for you if you want to pursue law. How? With
                the help of Rostrum Education’s resources and expert preparation
                tips!
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                LNAT is an assessment of a student’s potential and ability to
                study law at the undergraduate level. The aptitude test is
                crucial to your application to Ivy League schools. At Rostrum,
                our team of experienced tutors will mentor and guide you. They
                will cater to all your exam stress and provide the best tips and
                tricks to ace your LNAT.
              </p>
            </section>
            <section className="">
              <Image
                src="/assets/lnat/banner-1.png"
                width={586}
                height={127}
                alt="What is the LNAT?"
              />
              <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight ps-4 mt-4">
                The law national aptitude test
              </h6>
              {/* <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight mt-4">
                Why do I need to give LNAT?
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The test is used by nine UK universities and two other non-UK
                universities as part of their admissions process for
                undergraduate applications to Law. The content of the LNAT exam
                is regulated by the members of the LNAT Consortium (made up of
                six of those universities) and the test itself is administered
                by Pearson VUE, under contract to LNAT.
              </p> */}
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="mt-auto md:mt-4">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-4">
                WHY DO I NEED TO GIVE LNAT?
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                If you have decided to apply to the top law colleges in the UK,
                a LNAT test will be necessary, along with other admission
                criteria.
                <br />
                All the best universities in the UK will ask for an assessment
                of necessary skills for law. This includes verbal aptitude,
                deductive reasoning, analytical understanding, and critical
                thinking skills. The LNAT’s goal is to help universities select
                the cream of the crop.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The entrance exam provides a comprehensive assessment of a
                candidate’s competence. It does not test the student’s
                understanding of the law but their know-how of current affairs
                and everyday knowledge.
              </p>
            </section>
            <section className="">
              <Image
                src="/assets/lnat/banner-2.png"
                width={540}
                height={540}
                alt="Why do I need to give LNAT?"
                className="mx-auto"
              />

              {/* <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight mt-4">
                The seven categories LNAT questions are typically based on
              </h4>
              <div className="flex items-start flex-wrap justify-center md:justify-start">
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-left mt-4 me-6 md:me-14 ms-6 md:ms-0">
                  Ethics
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-left mt-4 me-6 md:me-14 ms-6 md:ms-0">
                  Media
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-left mt-4 me-6 md:me-14 ms-6 md:ms-0">
                  Education
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-left mt-4 me-6 md:me-14 ms-6 md:ms-0">
                  Law
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-left mt-4 me-6 md:me-14 ms-6 md:ms-0">
                  Science
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-left mt-4 me-6 md:me-14 ms-6 md:ms-0">
                  Politics
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-left mt-4 me-6 md:me-14 ms-6 md:ms-0">
                  Philosophy
                </p>
              </div>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The LNAT focuses on assessing aptitude for studying law in
                future years through general comprehension and reasoning skills
                which are essential for the study and practice of law.
                Universities don’t expect you to have any knowledge of the law,
                just have the right skills to learn it in the first place.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                During the LNAT you’ll be tested on the following skills:
              </p>
              <section className="w-full relative mt-4">
                <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                  Deductive reasoning
                </p>
              </section>
              <section className="w-full relative mt-4">
                <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                  Interpretation of information
                </p>
              </section>
              <section className="w-full relative mt-4">
                <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                  Verbal reasoning
                </p>
              </section>
              <br/>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The participating universities will have access to both your
                LNAT score and your essay. These are then utilised to support
                your university application and demonstrate your interest in
                studying law at the undergraduate level.
              </p> */}
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-4">
                CAN I PREPARE FOR LNAT ONLINE?
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Yes, LNAT preparation can be done online. Most students find it
                to be challenging. But don’t worry! With good preparation, you
                can get a high score. On average, applicants score 22 or 29 out
                of 42 on the exam. Only 2% of Oxford University candidates got a
                score above 34. There is no minimum score on LNAT. A score above
                27 ranks you higher in the college applications. Although, this
                can vary between colleges. For example, a student with a score
                of 28.5 was selected at Oxford.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                We understand your anxiety related to test preparation. The
                pressure of scoring high can be intimidating for most people.
                The Rostrum Community is an expansive network of students and
                alumni from leading universities around the world. It was made
                to help and motivate students who need extra guidance from
                seniors or support from fellow applicants.
              </p>

             
            </section>
            <section className="">
              <Image
                src="/assets/lnat/banner-3.png"
                width={480}
                height={480}
                alt="Why do I need to give LNAT?"
                className="mx-auto"
              />

            </section>
          </div>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="">
            <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-4">
                WHO CAN TAKE THE EXAM?
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Students applying for an undergraduate law degree can take the
                exam. Whether you are in your final high school year or a
                graduate who wants a second degree, the test is for you.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Candidates applying to Oxbridge must sit for the exam before 15
                October but after the summer holidays. For other universities,
                students can appear for the test till 20 January of the academic
                year they are applying for.
                <br />
                <br />
                Rostrum recommends starting with your LNAT MCQ preparation in
                the summer holidays before your exam date. As for the essay
                section, there is no specific preparation schedule. You should
                start for it as soon as you can. You can only take the exam once
                per the academic year or admissions cycle.
              </p>
            </section>
            <section className="">
              <Image
                src="/assets/lnat/banner-4.png"
                width={480}
                height={480}
                alt="Why do I need to give LNAT?"
                className="mx-auto"
              />

            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto mt-14">
            <h3 className="text-center  text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-4">
              UK LNAT UNIVERSITIES
            </h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {universities.map((item, i) => (
                <p
                  key={i}
                  className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-4">
              WHAT DOES THE TEST CONSIST OF?
            </h3>
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              The candidate is graded out of 24 for the essay section and out of
              42 for the multiple-choice questions. The results of both these
              parts become your combined score.
            </p>
          </div>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <section className="">
              <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight">
                PART ONE: MCQs
              </h6>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                In this LNAT component, you will be assessed on your ability to
                identify critical matters, develop concepts, and find
                information. Section A is a computerized MCQ-based exam with 42
                questions - based on excerpts. You will have 95 minutes to
                complete this part. There are several articles followed by
                questions (five options to choose from).
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                What you’re tested for:
              </p>
              <ul className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4 list-disc list-inside">
                <li>Distinguishing facts from opinions</li>
                <li>Attention to detail</li>
                <li>Analytical reasoning</li>
                <li>Interpreting deeper meanings</li>
                <li>Understanding argumentative structure</li>
                <li>Skimming for core ideas</li>
                <li>Perceiving the writer’s tone and viewpoint</li>
              </ul>
              <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                Expert tips:
              </p>
              <ul className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4 list-disc list-inside">
                <li>
                  Read the questions thoroughly and mark keywords before reading
                  the passage
                </li>
                <li>
                  Highlight important information in the passages, then read the
                  questions again
                </li>
                <li>
                  Do not make assumptions and stick to the information given
                </li>
                <li>
                  Try to read between the lines and look for the hidden meaning
                </li>
                <li>Learn how to differentiate between facts and opinions</li>
                <li>Get familiar with the different question structures</li>
                <li>Always check your answers before submitting</li>
              </ul>
            </section>
            <section className="">
              <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight">
                PART TWO: ESSAYS
              </h6>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                In this component, you will have to write an essay on one of the
                three topics. This is your chance to present a balanced,
                compelling, and well-reasoned argument. Sometimes, a candidate
                will be presented with controversial legal, cultural, and
                political topics.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                What you’re tested for:
              </p>
              <ul className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4 list-disc list-inside">
                <li>
                  Ability to form persuasive, unbiased, and well-corroborated
                  arguments
                </li>
                <li>Excellent English language proficiency</li>
                <li>Understanding of contemporary issues</li>
              </ul>
              <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                Expert tips:
              </p>
              <ul className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4 list-disc list-inside">
                <li>Pick a topic you’re knowledgeable about</li>
                <li>More facts, fewer opinions</li>
                <li>Take time to read the question</li>
                <li>Always plan your essay and write in bullet points</li>
                <li>Keep a consistent structure and tone throughout</li>
                <li>Always leave time for editing</li>
                <li>Convey a unique point of view</li>
              </ul>
            </section>
          </div>
          <br />

          <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
            WE STRATEGIZE: Our expert tutors will design a personalized study
            plan to help you achieve a high score on your LNAT. We will cater to
            your needs and design practice tests based on your aptitude and
            current skills using a SWOT analysis. With Rostrum’s support, you
            will be prepared to ace your LNAT exam with flying colors!
          </p>
          <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
            Our curriculum focuses on improving your analytical skills for the
            challenging test sections. We target on improving the following:
          </p>
          <ul className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4 list-disc list-inside">
            <li>Your knowledge of contemporary issues</li>
            <li>Your tonality</li>
            <li>forming well-reasoned arguments.</li>
          </ul>
          <p className="w-full md:w-1/2 mx-auto text-[16px] md:text-[20px] text-primary font-normal text-center mt-6">
            You will be ready to appear for your upcoming LNAT in no time.
          </p>
          {/* SECTION END */}
        </div>
      </div>
      <CallToAction image={"/assets/call-action/about.png"} />
    </main>
  );
};

export default LNAT;
