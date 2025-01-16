import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner";
import CallToAction from "@/components/common/CallToAction";
import AnimationProvider from "@/components/common/AnimationProvider";

const ACT = () => {
  const process = [
    {
      title: `Make a schedule for your studies.`,
      description: `The first step in preparing for the ACT is to establish a regular study regimen. Divide the total number of prep hours you anticipate you’ll need by the number of weeks before the test to figure out how many hours you should prepare each week.`,
      description_2: `It’s also a good idea to set out consistent days and hours for studying each week. This aids in maintaining consistency. Make sure someone else is aware of your study routine and ready to hold you accountable!`,
      image: "/assets/act/process/1.png",
    },
    {
      title: `Use practice questions and tests 
          to sharpen your skills.`,
      description: `It would be “practice!” if we could just write one step in “How to prepare for the ACT.”           `,
      description_2: `Practice questions and practice exams are two essential components of ACT preparation. Practice questions help you focus on the abilities you need to improve for the test. Completing at least a couple of complete exam practice runs is the second stage of ACT preparation. When doing a full test practice run, utilize an official practice test and test yourself under the same settings as on test day.          `,
      image: "/assets/act/process/2.png",
    },
    {
      title: `Recognize and address your flaws`,
      description: `After you’ve gotten a general sense of what the ACT tests and how they work, you’ll want to construct a baseline of your own abilities. The most crucial part of this is recognizing your shortcomings so you can focus your preparation on them.`,
      description_2: `After you’ve completed the practice exam, calculate your score using the scoring rules supplied by ACT, at the back of the test booklet. This will show you which portions you’re weakest in, which sections you’re best in, and where you’re beginning from.`,
      image: "/assets/act/process/3.png",
    },
    {
      title: `ACT Coaching`,
      description: `The ACT study resources provided by Rostrum Education are the most up-to-date and thorough. Learn from our qualified teachers, who have the knowledge and experience to help you reach your ACT preparation goals. With the greatest ACT tutoring, you get your desired score with a tailored study plan, student portal, practice tests, complete score report, refreshers, and more. Book a free consultation with us to learn more about the coaching.`,
      description_2: ``,
      image: "/assets/act/process/4.png",
    },
    {
      title: `Be ready and prepared for the final day`,
      description: `So get plenty of rest the night before, have a well-balanced, protein-rich breakfast, and make sure you have pencils and an acceptable calculator in your luggage!`,
      description_2: ``,
      image: "",
    },
    {
      title: `Improve Your Time-Management Techniques`,
      description: `The easiest strategy to manage your time on the ACT is to estimate how much time you can devote to each question. You’ll have more time per question in some parts than others. For example, in the English portion, you’ll have about 36 seconds each question, while in the Math section, you’ll have a whole minute.`,
      description_2: ``,
      image: "",
    },
  ];
  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="left"
        title={"AMERICAN COLLEGE TESTING "}
        image={"/assets/header-banner/act.png"}
      />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          {/* SECTION START */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <section>
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
                What is the ACT?
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Your dream of going to an Ivy League college will come true.
                How? By getting the best score on ACT with Rostrum’s help.
                <br />
                <br />
                The ACT (American College Testing) is an entrance exam American
                universities use to select the best students. It checks the
                applicant’s aptitude and skills required for an undergraduate
                degree.
              </p>
            </section>
            <section>
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
                Why Give ACT?
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-0 md:mt-4">
                When applying to universities, you can submit your ACT scores
                with your other documents,
                <br />
                <br />
                The ACT commonly measures a student’s overall readiness in all
                subject areas, but its importance varies for every course.
                <br />
                <br />
                However, securing a high score on the ACT can open up your
                possibilities. You will be more likely to get admission into
                your dream university!
              </p>
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <section className="">
              <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mb-4">
                How is it graded?
              </h6>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                A composite score between 1-36 is given based on the average of
                4 ACT Tests. Actual testing time is 2 hours and 55 minutes;
                however, total testing time is 3 hours and 40 minutes if the
                optional 40–minute Writing Test is taken.
              </p>
            </section>
            <section className="">
              <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mb-4">
                What is the format?
              </h6>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The ACT is divided into four sections: English, Reading, Maths,
                and Science, with an optional Writing Test. Some schools may
                require the Writing Test, so check with them before taking the
                ACT. The ACT test has a total of 215 multiple-choice questions.
              </p>
            </section>
          </div> */}
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto relative mt-14">
            <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
              What Is The Structure Of ACT?
            </h4>
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              You will be tested in four main subjects: English, Reading, Math,
              and Science. There is also an optional writing test.
              <br />
              <br />
              <b> Pro Tip: </b>Check your college’s requirements to see if you
              should opt for the writing test. If you are confused about the
              requirements, you should take the writing test to be safe.
              <br />
              <br />
              The sections are divided as follows:
            </p>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mb-4">
                  English
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  This section has 75 questions. It lasts for 45 minutes. It
                  tests your ability to improve and edit short texts and essays
                  in different styles)
                </p>
              </section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mb-4">
                  Mathematics
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  This section has 60 questions. It lasts for 60 minutes. It
                  tests the math skills you learn by the start of grade 12.
                </p>
              </section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mb-4">
                  Reading
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  This section has 40 questions. It lasts for 35 minutes. It
                  tests how well you understand, think, and use information from
                  different sources
                </p>
              </section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mb-4">
                  Science
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  This section has 40 questions. It lasts for 35 minutes. It
                  tests how well you solve problems in biology, chemistry,
                  Earth/space sciences, and physics.
                </p>
              </section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mb-4">
                  Writing (Optional)
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  This section has 1 prompt. It lasts for 30 minutes. It tests
                  writing skills that you learned in high school English.
                </p>
              </section>
            </div>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="mt-auto md:mt-14">
              <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
                Scoring
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                In each section, you will get a mark between 1 to 36. Your total
                score will be the average of the four sections, from 1 to 36.
                The writing test has a separate marking.
                <br />
                <br />
                Anything above 30 is a good score that can guarantee your
                acceptance into a top Ivy League school. In 2020, over 5,579
                applicants (out of 1.67 million) got a full 36 on the ACT.
                <br />
                <br />
                Eligibility criteria
                <br />
                <br />
                The ACT is mostly given by high school graduates worldwide.
                However, grades 6 to 9 students can also sit for the exam.
                <br />
                <br />
                The student must be at least 13 years old at the time of
                registration and get consent from their parents. There is no
                maximum age limit.
                <br />
                <br />
                There are no specific academic criteria, and students with low
                GPAs can also take the exam.
                <br />
                <br />
                The applicant must have a valid international passport to
                register.
              </p>
            </section>
            <section className="w-full h-full flex items-center justify-center">
              <Image
                src="/assets/act/banner-1.png"
                width={471}
                height={471}
                alt="Significance of the GMAT exam"
                className="mx-auto"
              />
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto mt-14">
            <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
              EXAM PREPARATION TIPS
            </h4>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {/* {process.map((item, i) => (
                <section key={i} className="w-full relative">
                  <div className="flex items-center justify-start">
                    <h6 className="relative w-full text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight flex self-end">
                      {item.title}
                    </h6>
                    {item.image && (
                      <Image
                        src={item.image}
                        width={300}
                        height={300}
                        alt={item.title}
                      />
                    )}
                  </div>
                  <p className="text-[20px] text-primary font-normal mt-3 text-left">
                    {item.description}
                  </p>
                  <p className="text-[20px] text-primary font-normal mt-3 text-left">
                    {item.description_2}
                  </p>
                </section>
              ))} */}
              <section>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                  English
                </p>
                <ul className="list-outside list-disc text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  <li>Concisely write your answer.</li>
                  <li>
                    Read the passage thoroughly and mark important information.
                  </li>
                  <li>
                    Choose the “No Change” answers carefully - they can be
                    tricky!
                  </li>
                </ul>
              </section>
              <section>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                  Math
                </p>
                <ul className="list-outside list-disc text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  <li>Analyze diagrams carefully.</li>
                  <li>
                    To solve with ‘x,’ put an answer choice into the original
                    equation to check it
                  </li>
                </ul>
              </section>
              <section>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                  Reading
                </p>
                <ul className="list-outside list-disc text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  <li>
                    Skim the excerpts - read each paragraph's introduction,
                    conclusion, and first sentence.
                  </li>
                  <li>
                    Start the passages which are of interest. This may include
                    humanities, literary narrative, social science, or natural
                    science
                  </li>
                </ul>
              </section>
              <section>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                  Science
                </p>
                <ul className="list-outside list-disc text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  <li>Leave the conflicting viewpoints part for the end</li>
                  <li>Pay attention to the visual aids (graphs)</li>
                </ul>
              </section>
              <section>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                  Essay
                </p>
                <ul className="list-outside list-disc text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  <li>Write solid examples based on facts.</li>
                  <li>Focus on a compelling intro and a good conclusion.</li>
                </ul>
              </section>
            </div>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto mt-14">
            <h4 className="text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
              Rostrum Tutoring For The Perfect ACT Score
            </h4>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
              <section className="">
                <Image
                  src="/assets/act/banner-2.png"
                  width={571}
                  height={571}
                  alt="Significance of the GMAT exam"
                  className="mx-auto"
                />
              </section>
              <section className="">
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mb-4">
                  Expert Advice
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  Our team of expert tutors and advisors will simplify the ACT
                  process for you. We will provide you with a customized study
                  plan based on your initial aptitude scores. If you need help
                  in a particular subject or component, we will first fix your
                  basic concepts. Our tutoring is comprehensive, up-to-date, and
                  catered to every student’s academic needs. Rostrum will be the
                  perfect companion throughout the journey to get the best score
                  on the ACT. Over 80% of our students get higher than 32 marks,
                  making them one of the top applicants for Ivy League colleges!
                </p>
                <br />
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mb-4">
                  Become A Part Of Our Community
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  You can also join the Rostrum Community- a network of students
                  from all over the world. Connect with students going through
                  the same exam stress, seek advice from alumni, or find
                  students from your country!
                </p>
              </section>
            </div>
          </div>
          {/* SECTION END */}
        </div>
      </div>
      <CallToAction image={"/assets/call-action/home.png"} />
    </main>
  );
};

export default ACT;
