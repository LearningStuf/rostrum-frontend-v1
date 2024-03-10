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

  const data = [
    {
      title: "Tackling unfamiliar content:",
      description: `Our counsellors have decades of experience tutoring and 
		mentoring students from all over the world including India 
		and UAE to get placed at leading world universities. 
		Intensive one-on-one discussions with our counsellors assist 
		students in getting comfortable with the unknown.  
		Students are taught to think critically about the concerns 
		being raised, question assumptions, draw logical 
		conclusions from specific information provided to them and 
		frame counter-arguments.`,
    },
    {
      title: "Timing:",
      description: `In the LNAT, timing is everything. You can be incredibly 
		talented, but if you don’t finish the paper, you’ll struggle to 
		earn a good grade. This is especially evident when we 
		consider that the LNAT is a multiple choice test; leaving an 
		answer blank gives you a 0% chance of getting the question correct, guessing gives you a 20% chance, and eliminating a few answer alternatives gives you a 50% chance (the average LNAT score!). You should practise under timed settings in the weeks leading up to the exam.`,
    },
    {
      title: "Acing the MCQ section:",
      description: `The key to acing the first section is just practice. Our 
		carefully curated practice questions and guides place 
		students at the ideal position to crack this exam. The LNAT 
		practice tests are incredibly useful to simulate test day 
		pressure and effect.`,
    },
    {
      title: "Critical thinking:",
      description: `The ability to read, analyze and break down the text are 
		quintessential to the MCQ section. Through intensive 
		reading recommended by our experts and deliberations, 
		this section feels like a breeze to our students.`,
    },
    {
      title: "Skillfully presenting arguments in the essay section:",
      description: `The essay section requires the student to present a well-
		structured and persuasive argument on the topic provided. 
		Our experts provide the right kind of hand-holding to 
		gradually develop this ability in students over the course of 
		the mentoring sessions. They are also guided on what kind 
		of assumptions can be made especially when the topic is 
		from an unfamiliar background to make the essay come out 
		as strong as one based on facts.`,
    },
    {
      title: "Staying abreast and developing opinion on latest happenings:",
      description: `Thorough knowledge of current affairs gives you an edge and our mentors inculcate in students the habit of reading from the best sources, analyzing what they have read and developing the ability to present solid arguments in favor of their opinion through regular discussions and debates.`,
    },
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
                The Law National Aptitude Test (LNAT) is an aptitude test,
                constructed by a syndicate of UK Universities to assess if the
                student is a good fit to study law at the undergraduate level.
                It is used alongside other admissions processes such as UCAS
                application and academic qualifications.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Essentially, the LNAT exam is an assessment of the student’s
                verbal reasoning skills, their ability to understand and
                interpret information, their inductive and deductive reasoning
                abilities and the ability to analyze unseen information and draw
                logical conclusions. Our team of experienced tutors provide the
                best tutoring and mentoring all over the world including India
                and UAE.
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
              <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight mt-4">
                Why do I need to give LNAT?
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The test is used by nine UK universities and two other non-UK
                universities as part of their admissions process for
                undergraduate applications to Law. The content of the LNAT exam
                is regulated by the members of the LNAT Consortium (made up of
                six of those universities) and the test itself is administered
                by Pearson VUE, under contract to LNAT.
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="mt-auto md:mt-40">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-4">
                Why do I need to give LNAT?
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                It is a 2-hour 15-minute test divided into two sections - MCQs
                and Essay.
                <br />
                Section A is designed as a computerised MCQ based exam
                consisting of 42 questions. Students are given 95 minutes to
                answer these questions which are based on passages of text
                (dilemmas) and a mark out of 42. This section is designed to
                assess the ability to grasp arguments and recognize key issues,
                trace relevant material proficiently and conceptualise.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Students are given a number of articles to read in the multiple
                choice part, along with questions to answer (and each question
                comes with 5 possible answers to choose from). The LNAT test
                questions are analytical and may ask students to identify the
                writers’ assertions, views, and criticisms, or to determine
                which of the five statements can or cannot be confirmed.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The second section gives 40 minutes to write an essay from a
                list of 3 proposed subjects. The essay gives an opportunity to
                construct, present and conclude an intellectually reasoned,
                persuasive and balanced argument around the chosen topic, a top
                skill for any Law aspirant. In the essay portion, students will
                be given a controversial statement to discuss in a balanced
                manner, or to advocate for or against in a brief essay answer
                format.
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

              <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight mt-4">
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
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-4">
                Keep these in mind during your LNAT prep:
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                All applicants (UK, EU, and international) to undergraduate law
                programmes at the University of Bristol, Durham University,
                University of Nottingham, and other institutions must take the
                LNAT.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The test must be taken during the UCAS year in which you plan to
                apply to university.
                <br />
                The test can only be taken once each year (September to June),
                and results cannot be transferred over from year to year.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Pearson VUE will make your LNAT score and essay accessible for
                download by your selected universities within 24 hours of
                completing your LNAT. They’ll have access to your score before
                you do.
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

              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Each university will use the candidate’s LNAT score and essays
                in the manner that best matches its admissions criteria. The
                LNAT is used in combination with academic qualifications,
                information on the UCAS or other application form, the
                candidate’s personal statement, and, in some situations,
                performance at the interview.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The LNAT does not have a set weight, and different colleges will
                use it in different ways.
              </p>
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
              LNAT Tutoring at ROSTRUM
            </h3>
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              There are no facts to be memorized and lessons to be reviewed in
              preparation for the test. Instead, students should concentrate on
              developing critical thinking abilities and on acquainting
              themselves with the format of the test. This is where Rostrum
              steps in.
            </p>
          </div>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {data.map((item, i) => (
              <section key={i} className="">
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight">
                  {item.title}
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  {item.description}
                </p>
              </section>
            ))}
          </div>
          <p className="w-full md:w-1/2 mx-auto text-[16px] md:text-[20px] text-primary font-normal text-center mt-6">
            You could be answering 1000s of LNAT questions but not noticing
            improvement. We show you how to speed up your LNAT techniques by
            teaching you section-specific strategies. Our LNAT tutors will serve
            as companions, mentors, and educators for you.
          </p>
          {/* SECTION END */}
        </div>
      </div>
      <CallToAction image={"/assets/call-action/about.png"} />
    </main>
  );
};

export default LNAT;
