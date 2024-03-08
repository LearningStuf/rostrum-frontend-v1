import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner";
import CallToAction from "@/components/common/CallToAction";
import AnimationProvider from "@/components/common/AnimationProvider";

const SAT = () => {
  return (
    <main className="relative w-full h-auto">
      <HeaderBanner align="left" title={"SAT"} />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <section className="">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
                What is the SAT?
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The Scholastic Aptitude Test is a college entrance test that
                most colleges and universities utilise to determine admittance.
                The SAT is a multiple-choice, paper-and-pencil examination. SAT
                scores are a key component of your college applications. This
                entrance exam is used by universities to make admission
                decisions.
              </p>
            </section>
            <section className="">
              <Image
                src="/assets/sat/banner-1.png"
                width={471}
                height={471}
                alt="What is the SAT?"
                className="mx-auto"
              />
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <section>
              <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
                Sections of the ACT test overview
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The SAT helps mark a student’s readiness for college. This also
                makes it easier for colleges to have one common test that can be
                used to weigh all applicants. College admissions officers of
                universities review the standardised test scores alongside your
                High School GPA, letters of recommendation from mentors,
                extracurricular activities, admissions interviews, and personal
                essays. The relevance of SAT scores varies from college to
                college and university to university.
              </p>
            </section>

            <section>
              <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
                Where is the SAT valid?
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The SAT Exam is approved by many institutions throughout the
                world. In the United States and Canada, it is most commonly used
                in undergraduate courses. Some universities in the United
                Kingdom and Australia recognise it as well.
              </p>
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 relative">
            <section className="relative">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
                SAT hacks from Rostrum experts
              </h3>
              <br />
              <section className="w-full relative my-auto md:my-8">
                <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                  Candidates who do well on the SAT are likely to be skilled
                  readers with a large vocabulary. They can also handle the
                  stress of completing questions in a shorter amount of time
                  since the test has many portions.
                </p>
              </section>
              <section className="w-full relative my-auto md:my-8">
                <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                  To stay on track with your self-study program, you’ll need
                  drive and self-discipline.
                </p>
              </section>
              <section className="w-full relative my-auto md:my-8">
                <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                  Attending coaching classes, is not a bad idea if you believe
                  you learn best in a classroom setting.
                </p>
              </section>
            </section>
            <section className="relative">
              <Image
                src="/assets/sat/banner-2.png"
                width={370}
                height={370}
                alt="What is the SAT?"
                className="mx-auto"
              />
              <section className="w-full relative my-auto md:my-8">
                <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                  Rostrum has a great team of tutors who can help you excel in
                  the exam and get you selected in your dream institution with
                  brilliant scores. Use of various resources such as SAT
                  practice tests, previous year papers, taking SAT mock tests
                  and various strategies will be applied.
                </p>
              </section>
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto mt-14">
            <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 border-b-2 border-[#F5B646] pb-4 mb-4">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase">
                Eligibility for SAT 2022
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-center md:text-left">
                The College Board, which administers the SAT, has not
                established any precise SAT qualifying criteria for students who
                wish to take the exam. But here the few basic guidelines:
              </p>
            </section>
            <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 border-b-2 border-[#F5B646] pb-4 mb-4">
              <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                1. Minimum age to take the SAT
              </h6>
              <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-center md:text-left">
                Candidates should be aware that there is no minimum or maximum
                age requirement for taking the exam, nor is there a SAT age
                limit.
              </p>
            </section>
            <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 border-b-2 border-[#F5B646] pb-4 mb-4">
              <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                2. Can you take the SAT examinations more than once?
              </h6>
              <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-center md:text-left">
                The College Board does not impose any limits on students taking
                the SAT exam, so they can take it as many times as they wish. In
                India, the SAT is given five times a year. March, May, August,
                October, and December are the most common months for the test.
              </p>
            </section>
            <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 border-b-2 border-[#F5B646] pb-4 mb-4">
              <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                3. What are the educational requirements for taking the SAT?
              </h6>
              <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-center md:text-left">
                The College Board has not established any explicit qualifying
                requirements.
              </p>
            </section>
          </div>
          <br />
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="mt-auto">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase">
                How to register for SAT?
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Students can register for the SAT using either the traditional
                mail-in technique or the more convenient online alternative.
                Candidates using the online approach must first create a login
                ID on the official SAT website before proceeding with the
                registration procedure.
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
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section>
              <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                Online SAT Registration (Steps):
              </h6>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                1. Go to the official College Board website
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                2. Register for an account
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                3. Fill out all of the relevant fields
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                4. Decide the exam you want to take and where you want to take
                it
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                5. Take a clear snapshot and upload it
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                6. Make the payment
              </p>
            </section>
            <section>
              <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                Scholarships for the SAT
              </h6>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                One of the most significant disadvantages of studying abroad is
                having to pay tuition in a foreign currency while also dealing
                with hefty living costs. Because of these factors, many students
                are unable to travel overseas and must settle for other options.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Scholarships, as well as other fellowships and scholarships, are
                often offered to outstanding students and may be found on each
                college’s official website. For studying abroad, students can
                also take out education loans from financial organizations,
                banks, and individual organisations.
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto mt-14">
            <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase">
              SAT MYTHS BUSTED
            </h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <section>
                <div className="mb-8">
                  <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                    The SAT is a high-level conceptual
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                    The SAT is a test that assesses a student’s reasoning and
                    analytical abilities. It doesn’t put a student’s knowledge
                    of the most difficult concepts to the test, which are only
                    taught in advanced classes. Instead, basic knowledge
                    questions are used to assess the ability to apply and
                    reason.
                  </p>
                </div>
                <div className="mb-8">
                  <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                    In terms of college admissions, the SAT is a better option
                    than the ACT
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                    The SAT and ACT are equivalent in terms of college
                    admissions. Both the SAT and the ACT are internationally
                    conducted standardised tests and bear the same weightage.
                  </p>
                </div>
                <div className="mb-8">
                  <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                    The SAT English section is a difficult one
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                    If you are an avid reader, the SAT English section should be
                    a breeze for you. All you need to do now is brush up on your
                    vocabulary and improve your text-analysis skills.
                  </p>
                </div>
              </section>
              <section>
                <div className="mb-8">
                  <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                    Avoid attempting the SAT Essay section
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                    The SAT essay, though optional, should be taken by a student
                    because some universities place a premium on essay scores.
                    Above all, a high essay score improves your chances of
                    getting into college.
                  </p>
                </div>
                <div className="mb-8">
                  <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                    I’ll have more alternatives for admission if I take both the
                    SAT and the ACT
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                    Students take both tests in order to improve their chances
                    of getting into a good college. Taking both of these
                    examinations is not advised. This is because most
                    institutions accept scores from either the ACT or the SAT
                    and do not have a preference between the two tests. The ACT
                    and SAT test patterns are not identical. Both demand a
                    unique approach to preparation and skill set. It might be
                    scary and tough to prepare for both.
                    <br />A better alternative would be to take one of the two
                    tests, choosing one based on the subject’s competencies, the
                    set of skills that best matches your skills, and the testing
                    style with which you are most familiar.
                  </p>
                </div>
              </section>
            </div>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full grid grid-cols-12 gap-8 mt-4">
            <section className="col-span-12 md:col-span-7 flex flex-col items-start justify-end">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
                What makes Rostrum’s instructors unique?
              </h3>
            </section>
            <section className="col-span-12 md:col-span-5">
              <Image
                src="/assets/act/banner-2.png"
                width={529}
                height={529}
                alt="What makes Rostrum’s instructors unique?"
                className="mx-auto"
              />
            </section>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <section>
              <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                Perfect Foundation:
              </h6>
              <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-center md:text-left">
                We help you construct a good foundation of concepts by equipping
                you with resources such as SAT practice tests, SAT mock tests,
                and tutoring systematically. We also undertake classroom
                exercises and employ various techniques such as passage mapping
                and answer elimination, to aid you in formulating a unique test
                taking strategy.
              </p>
            </section>
            <section>
              <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                Subject Test Guidance:
              </h6>
              <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-center md:text-left">
                SAT Subject Tests give your application an advantage. Our SAT
                prep covers all three SAT subsections (Reading, Writing and
                Language, and Math) and the essay. Rostrum offers you coaching
                for all the 20 SAT Subject Tests. We assist you in choosing the
                right subjects which will help you showcase your strengths.
              </p>
            </section>
            <section>
              <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                Essay Skills:
              </h6>
              <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-center md:text-left">
                If you are taking the SAT with Essay then you need to develop
                necessary language, writing, critical thinking and analytical
                skills to attempt the essay. We understand that you can’t
                develop them overnight. Our tutors help you build essay skills
                using comprehensive methods.
              </p>
            </section>
            <section>
              <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                Personalised Programmes:
              </h6>
              <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-center md:text-left">
                We’ll help you identify what works for you and take it from
                there. The customisable programme allows every student to make
                the most out of what they learn with Rostrum.
              </p>
            </section>
          </div>
          {/* SECTION END */}
        </div>
      </div>
      <CallToAction/>
    </main>
  );
};

export default SAT;
