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
      <HeaderBanner align="left" title={"AMERICAN COLLEGE TESTING "} />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          {/* SECTION START */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <section>
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
                What is the ACT?
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The ACT is another entrance test used by a lot of colleges and
                universities to make admission-based decisions. The purpose of
                the ACT test prep is to calculate a student’s preparedness for
                college, and provide colleges with one standard source that can
                be used by all applicants.
              </p>
            </section>
            <section>
              <br />
              <br />
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Admissions Officers at colleges evaluate your test scores
                alongside your high school GPA, the classes you took in high
                school, experiences outside of school, letters of recommendation
                from teachers and mentors, extracurricular activities, awards
                and commendation received, admissions interviews, and personal
                essays.
              </p>
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
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
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto relative mt-14">
            <h4 className="text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
              Sections of the ACT test overview
            </h4>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mb-4">
                  ENGLISH
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  75 multiple-choice questions
                  <br />
                  Time: 45 minutes
                  <br />
                  Topics Covered: grammar, punctuation, sentence structure, and
                  rhetorical skills are also assessed
                </p>
              </section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mb-4">
                  MATHS
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  60 multiple-choice questions
                  <br />
                  Time limit: 60 minutes
                  <br />
                  Subjects covered: algebra I and II, geometry, and trigonometry
                  are some of the subjects covered
                </p>
              </section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mb-4">
                  READING
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  40 multiple-choice questions
                  <br />
                  Time: 35 minutes
                  <br />
                  There are four sections with ten questions each: prose
                  fiction, social studies, humanities, and natural sciences
                </p>
              </section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mb-4">
                  WRITING
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  Optional writing test * 1 paper
                  <br />
                  Time: 40 minutes
                  <br />
                  Because certain schools demand it, we recommend taking the ACT
                  writing test
                </p>
              </section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mb-4">
                  SCIENCE
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  40 multiple-choice questions
                  <br />
                  Time: 35 minutes
                  <br />
                  Questions include graphs, charts, tables, and study summaries
                </p>
              </section>
            </div>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="mt-auto md:mt-14">
              <h4 className="text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
                How to make an ACT registration?
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The ACT is not given at a specific time. Because the exam topic
                includes academic materials up to that time, students normally
                take it in the second half of 11th grade. When it comes to the
                application process, most students find having their ACT results
                handy. Furthermore, taking the exam in 11th grade gives you
                plenty of time to prepare and retake the exam if your initial
                score isn’t good.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                If you haven’t already done so, you can register for the exam on
                the ACT website. If you haven’t previously done so, you’ll need
                to create an account on the ACT website to register for the exam
              </p>
            </section>
            <section className="">
              <Image
                src="/assets/act/banner-1.png"
                width={471}
                height={471}
                alt="Significance of the GMAT exam"
                className="mx-auto"
              />
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                We recommend you choose a location close to you to avoid any
                exam day chaos while you’re on way to the exam in the morning.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Make sure you allow yourself enough time to prepare before you
                choose a date. If you’re completely unfamiliar with the test,
                schedule it at least three months in advance to allow yourself
                enough time to study.
              </p>
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto mt-14">
            <h4 className="text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
              Tips for ACT preparation
            </h4>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {process.map((item, i) => (
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
              ))}
            </div>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto mt-14">
            <h4 className="text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
              What makes Rostrum’s
              <br className="hidden md:block" />
              instructors unique?
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
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mb-4">
                  Regular Monitoring
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  To test your understanding of the concepts and measure your
                  progress, we conduct week-end tests, subject tests, full
                  length mocks and essay practice sessions. We check your pace
                  and performance and concentrate on key improvement areas so
                  that you may achieve a good balanced score in your final ACT
                  exam.
                </p>
              </section>
              <section className="">
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mb-4">
                  Adequate practice
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  You receive hands-on experience with tactics and learn which
                  ones work best for you. This gives you a sense of which types
                  of questions work best with certain approaches.
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  Perfect Foundation: We help you construct a good foundation of
                  concepts by equipping you with resources and tutoring
                  systematically for ACT coaching. We provide coaching to the
                  students all over the world including India and UAE. We also
                  undertake classroom exercises and employ various techniques to
                  aid you in formulating a unique test taking strategy for math,
                  English and science sections in ACT.
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  Essay Skills: If you are taking the ACT with Essay then you
                  need to develop necessary language, writing, critical thinking
                  and analytical skills to attempt the essay. Our tutors help
                  you build essay skills using comprehensive methods.
                </p>
              </section>
            </div>
          </div>
          {/* SECTION END */}
        </div>
      </div>
      <CallToAction />
    </main>
  );
};

export default ACT;
