import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner";
import CallToAction from "@/components/common/CallToAction";
import AnimationProvider from "@/components/common/AnimationProvider";

const OxfordUniExam = () => {
  const data = [
    {
      title: `Perfect Concepts`,
      description: `Rostrum offers personalized tutoring services to each candidate. We strengthen individual weaknesses from the ground up, leading to perfect concepts based on a strong foundation.`,
    },
    {
      title: `Intensive Training`,
      description: `Rostrum tutors use an impressive array of resources, including but not limited to timed mock tests, detailed notes, and past papers.
`,
      description_2: ``,
    },
    {
      title: `Expert Faculty`,
      description: `All our tutors have attended or are currently enrolled in Oxford or Cambridge universities. Their teaching expertise is based on personal experience and a hands-on approach.`,
    },
    {
      title: `Personalised Programmes`,
      description: `Our services are customizable on every level. We will ensure that your individual needs are met so that you can get the best results possible.`,
    },
  ];
  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="left"
        title={"OXFORD UNIVERSITY ENTRANCE EXAM"}
        image={"/assets/header-banner/oxford-uni-exam.png"}
      />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          <div className="relative w-full md:w-11/12  mx-auto flex items-start">
            <span className="text-secondary text-[128px] font-semibold -translate-y-20 md:-translate-y-12 absolute -left-0 md:-left-12">
              “
            </span>
            <h6 className=" text-[22px] md:text-[28px] text-primary text-center font-semibold leading-tight mt-4">
              All our tutors are current students or graduates of University of
              Oxford and University of Cambridge and provide the best tutoring
              services for students all over the world including India and UAE.
              <span className="text-secondary text-[128px] -translate-y-12  -translate-x-8 md:translate-x-6 self-end leading-none absolute rotate-180 mt-2 md:mt-auto">
                “
              </span>
            </h6>
          </div>
          <br />
          {/* SECTION START */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            <section>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
                Do you want to apply to Oxford? Well, you'll need to sit for at
                least one admissions test. It is important to understand these
                tests well and register for the one required by your program of
                study.
              </p>
            </section>
            <section>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
                We have created a simple guide to explain each admissions test.
                This guide will help you decide which test is best for you so
                you can practice and prepare properly.
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto relative mt-10">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="flex flex-col items-center justify-center">
                <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
                  We Identify Tests You Might Need to Take
                </h3>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
                  Scroll down to read about all the admissions tests Oxford
                  uses. With Rostrum's help, you can decide which test to take.
                  We will also assist you with intensive test preparation to ace
                  the assessment.
                </p>
              </section>
              <Image
                src="/assets/oxford-uni/banner-1.png"
                width={480}
                height={480}
                alt="What exactly is IB?"
                className="mx-auto mb-4 md:mb-auto"
              />
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="w-full h-auto">
                <div>
                  <h4 className="uppercase text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight mb-2">
                    ENGAA
                  </h4>
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    What is ENGAA?
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    The Engineering Admissions Assessment tests how well you can
                    use and apply scientific and mathematical knowledge. Do well
                    on this test to stand out among top-grade students.
                  </p>
                  <br />
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    Duration:
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    2 hours
                  </p>
                  <br />
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    Structure:
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    The assessment consists of two sections, each a 60-minute
                    long multiple-choice questionnaire.
                    <br />
                    <br />
                    Section 1 includes 40 multiple-choice questions related to
                    Physics and Maths.
                    <br />
                    <br />
                    Section 2 contains 20 multiple-choice questions related to
                    Advanced Physics. These are more complex compared to Section
                    1.
                    {/* <a className="text-danger" href="#">
                      Find more details here.
                    </a> */}
                  </p>
                  <br />
                </div>
                <div>
                  <h4 className="uppercase text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight mb-2">
                    MAT
                  </h4>
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    What is MAT?
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    The Mathematics Admissions Test is designed to rank Math and
                    Computer Science applicants in the application process.
                  </p>
                  <br />
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    Duration:
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    2 hours 30 minutes
                  </p>
                  <br />
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    Structure:
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    The MAT has 27 questions. All questions should be answered.
                    <br />
                    <br />
                    Questions 1 to 25 are multiple-choice questions. You get
                    marks only for correct answers.
                    <br />
                    <br />
                    Questions 26 and 27 have several parts. Each question is
                    worth 15 marks. You will read the information and type your
                    answers in the provided boxes.
                    {/* <a className="text-danger" href="#">
                      Find more details on Oxbridge Entrance tests here.
                    </a> */}
                  </p>
                  <br />
                </div>
                <div>
                  <h4 className="uppercase text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight mb-2">
                    UCAT
                  </h4>
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    What is MAT?{" "}
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    The UCAT is a test that Oxford also uses to choose students
                    for their medical and dental degree programs.
                  </p>
                  <br />
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    Duration:
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    2 hours
                  </p>
                  <br />
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    Structure:
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    The UCAT is a computer-based test with five sections. These
                    are: verbal reasoning, decision-making, quantitative
                    reasoning, abstract reasoning, and situational judgment.
                    <br />
                    <br />
                    An important thing to note is that the test session runs
                    from July to September, and candidates can only take it once
                    in an admission cycle.
                  </p>
                  <br />
                </div>
                <div>
                  <h4 className="uppercase text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight mb-2">
                    TSA
                  </h4>
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    What is TSA?
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    The Thinking Skills Assessment is for students applying to
                    different degree programs. It tests how well you can solve
                    problems, think critically, and analyze information.
                    Answering quickly matters more than what you know.
                  </p>
                  <br />
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    Duration:
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    2 hours
                  </p>
                  <br />
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    Structure:
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    The TSA test is paper-based and consists of two sections.
                    <br />
                    <br />
                    Section 1: A 90-minute paper with 50 multiple-choice
                    questions. All of these assess problem-solving and critical
                    thinking skills.
                    <br />
                    <br />
                    Section 2: A 30-minute writing task to check how well you
                    can express your ideas clearly and effectively.
                    {/* <a className="text-danger" href="#">
                      {" "}
                      Find more details here.
                    </a> */}
                  </p>
                  <br />
                </div>
              </section>
              <section className="w-full h-auto">
                <div>
                  <h4 className="uppercase text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight mb-2">
                    PAT
                  </h4>
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    What is PAT?
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    The Physics Aptitude Test is an entrance test for several
                    physics-related courses at Oxford University.
                  </p>
                  <br />
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    Duration:
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    2 hours.
                  </p>
                  <br />
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    Structure:
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    The PAT assesses general skills in physics and math. The
                    total marks add up to 100; a digital calculator is provided
                    for the online test format. The test consists of one large
                    section with both physics and math questions. The exact
                    number of questions varies yearly but generally falls within
                    the 20s.
                    {/* <a className="text-danger" href="#">
                      {" "}
                      Find more details here.{" "}
                    </a> */}
                  </p>
                  <br />
                </div>
                <div>
                  <h4 className="uppercase text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight mb-2">
                    BMAT
                  </h4>
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    What is BMAT?
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    The BioMedical Admissions Test (BMAT) is a test designed to
                    measure skills and potential for medical and health-related
                    courses. It tests a candidate’s ability to apply scientific
                    and mathematical knowledge as well as problem-solving,
                    critical thinking and written communication skills essential
                    to university-level learning.
                  </p>
                  <br />
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    Duration:
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    BMAT is a 2-hour computer-based test which you will take on
                    your own computer at home or at another suitable location.{" "}
                  </p>
                  <br />
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    Structure:
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    The test consists of three sections and is taken in English.
                    Sections 1 and 2 are multiple-choice, and Section 3 is a
                    writing task.
                    {/* <a className="text-danger" href="#">
                      {" "}
                      Find more details here.
                    </a> */}
                  </p>
                  <br />
                </div>
                <div>
                  <h4 className="uppercase text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight mb-2">
                    ELAT
                  </h4>
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    What is ELAT?
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    The English Literature Admissions Test is for prospective
                    English majors at the University of Oxford.
                  </p>
                  <br />
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    Duration:
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    1 hour 30 minutes
                  </p>
                  <br />
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    Structure:
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    The ELAT requires candidates to write an essay on a question
                    based on unseen passages. They will be provided with six
                    passages that share a common theme but differ in form- like
                    poetry, prose, and drama. The candidate will select two
                    passages, compare and contrast them, and write an essay.
                    {/* <a className="text-danger" href="#">
                      {" "}
                      Find more details here
                    </a> */}
                  </p>
                  <br />
                </div>
                <div>
                  <h4 className="uppercase text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight mb-2">
                    HAT
                  </h4>
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    What is HAT?
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    The History Aptitude Test (HAT) is required by all candidates
                    applying for degrees involving history at Oxford University.
                    It aims to examine skills and potential required to study a
                    degree in history. It does not test substantive historical
                    knowledge and prior subject study is not required. It tests an
                    ability to read carefully and critically, the adoption of an
                    analytical approach, the ability to answer a question relevantly,
                    precision in handling concepts, historical imagination,
                    originality and clarity in writing.
                  </p>
                  <br />
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    Duration:
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    1 hour
                  </p>
                  <br />
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight">
                    Structure:
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    The HAT only has one section: the analysis of an unseen
                    source. Candidates are provided with a documentary source
                    from any region or period, with some explanations. You will
                    need to respond to a question based on this source.
                    <br />
                    <br />
                    This test evaluates how well you analyze information, use
                    evidence in arguments, and write clearly. It does not focus
                    on the historical knowledge you have.
                  </p>
                  <br />
                </div>
              </section>
            </div>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto relative mt-0">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="flex flex-col items-center justify-center">
                <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
                  How Does Rostrum Help You?
                </h3>
              </section>

              <Image
                src="/assets/oxford-uni/banner-2.png"
                width={680}
                height={680}
                alt="How does ROSTRUM help you?  ?"
                className="mx-auto mb-4 md:mb-auto"
              />
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.map((item, i) => (
                <section key={i}>
                  <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight">
                    {item.title}
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-2">
                    {item.description}
                  </p>
                  {item.description_2 && (
                    <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-2">
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
      <CallToAction image={"/assets/call-action/about.png"} />
    </main>
  );
};

export default OxfordUniExam;
