import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner";
import CallToAction from "@/components/common/CallToAction";
import AnimationProvider from "@/components/common/AnimationProvider";

const Psychometric = () => {
  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="left"
        title={"PSYCHOMETRIC TEST & ASSESSMENT"}
        image={"/assets/header-banner/psycho.png"}
      />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          {/* SECTION START */}
          <h3 className="text-center text-[40px] md:text-[55px] text-primary font-bold leading-tight mt-2 mb-4">
          Why Do We Need Psychometric Tests? 

          </h3>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left ">
            Psychometric tests are objective measurement tools. They help evaluate a candidate's talent and potential. They are useful for career planning, especially for grades 8-12 students. Most teenagers' career planning is influenced by their peers, which can lead to ill-informed choices. Hence, psychometric tests can help them better understand potential career paths. 

            </p>
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
            Here at Rostrum, we work on understanding the student as a whole. Applying to top universities such as Ivy Leagues is challenging. These institutions look for more than good grades. Students need to be all-rounders, and we guide them so they can excel in all areas. 
            <br/>
            <br/>
            Our psychometric coaching results are tried and tested. Many of our students have been admitted to top universities such as Harvard and MIT due to our efforts. 

            </p>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="mt-auto md:mt-18">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 mb-8 md:mb-4">
              What is a Psychometric Test, and How Can It Help You? 

              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              A psychometric assessment is a scientific method for evaluating performance. It uses small activities or exercises to highlight your strengths. It helps students explore their interests and skills and understand which careers suit them. 
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              Through psychometric coaching, Rostrum Education helps students understand these tests. It allows them to perform to the best of their abilities.

              </p>
            </section>
            <section className="flex flex-col items-center">
              <Image
                src="/assets/psycho/banner-1.png"
                width={471}
                height={471}
                alt="WHAT IS A PSYCHOMETRIC TEST, AND HOW CAN IT HELP YOU?"
                // objectFit='containe'
                className="md:self-end"
              />
              {/* <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                These exams are frequently used to assess cognitive abilities
                such as aptitude, psychological traits such as personality,
                developmental progress such as IQ. People are frequently
                perplexed about what a psychometric exam is and which one is
                appropriate. At Rostrum, students are enabled to quickly explore
                and choose the ideal tool for their needs.
              </p> */}
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-ful h-full relative mt-14 mb-10">
            <h3 className="text-center text-[40px] md:text-[55px] text-primary font-bold leading-tight mt-2 mb-4">
            WE ENSURE STUDENTS STAND OU
            </h3>
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center mt-4">
            Assisting with the application process for boarding schools. We increase understanding the admissions standards and procedures for competitive institutions. Helping parents and kids find the best-fitting schools. We offer choices based on their abilities, interests, personality traits, and natural talents. Offering comprehensive support for students' academic and career development.
            </p>
            {/* <section className="w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="flex flex-col items-center justify-start">
                <h6 className="text-[20px] md:text-[24px] text-primary text-center font-bold leading-tight mt-4 md:mt-2">
                Aptitude Tests

                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center mt-2">
                  These tests are used to evaluate a variety of cognitive
                  talents. There are a variety of aptitude tests available. A
                  comprehensive test would include many of these types.
                </p>
              </div>
              <div className="flex flex-col items-center justify-start">
                <h6 className="text-[20px] md:text-[24px] text-primary text-center font-bold leading-tight mt-4 md:mt-2">
                  Numerical
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center mt-2">
                Numerical tests assess a person’s ability to work with numbers and data well.

                </p>
              </div>
              <div className="flex flex-col items-center justify-start">
                <h6 className="text-[20px] md:text-[24px] text-primary text-center font-bold leading-tight mt-4 md:mt-2">
                  Verbal
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center mt-2">
                Candidates answer questions assessing their vocabulary, grammar, writing skills, and reading comprehension. Questions are presented in a multiple-choice format. The results showcase how effectively a candidate can communicate.

                </p>
              </div>
              <div className="flex flex-col items-center justify-start">
                <h6 className="text-[20px] md:text-[24px] text-primary text-center font-bold leading-tight mt-4 md:mt-2">
                  Diagrammatic
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center mt-2">
                Diagrammatic tests gauge a candidate's problem-solving skills. They will analyze patterns or shapes, usually with only a minute to answer each question. 
                </p>
              </div>
              <div className="flex flex-col items-center justify-start">
                <h6 className="text-[20px] md:text-[24px] text-primary text-center font-bold leading-tight mt-4 md:mt-2">
                  Error checking
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center mt-2">
                As the name indicates, candidates will identify errors in the data provided to them in this test. 

                </p>
              </div>
              <div className="flex flex-col items-center justify-start">
                <h6 className="text-[20px] md:text-[24px] text-primary text-center font-bold leading-tight mt-4 md:mt-2">
                  Inductive
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center mt-2">
                This type of psychometric test measures how well a person can think methodically through the use of graphic sequences.

                </p>
              </div>
            </section>
            <section className="w-full md:w-3/5 mx-auto h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="flex flex-col items-center justify-start">
                <h6 className="text-[20px] md:text-[24px] text-primary text-center font-bold leading-tight mt-4 md:mt-2">
                Behavioral Tests
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center mt-2">
                Psychometric behavioral tests identify a candidate's personality traits. It helps to determine who best fits what occupation. They are especially important as they indicate how well a candidate will fit in an organization and what role they’ll play.

                </p>
              </div>
              <div className="flex flex-col items-center justify-start">
                <h6 className="text-[20px] md:text-[24px] text-primary text-center font-bold leading-tight mt-4 md:mt-2">
                  Logical
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center mt-2">
                Logical assessment tests help examine a candidate's ability to think logically.

                </p>
              </div>
            </section>
            <section className="w-full md:w-1/2 mx-auto h-auto grid grid-cols-1 gap-8 mt-8">
              <div className="flex flex-col items-center justify-start">
                <h6 className="text-[20px] md:text-[24px] text-primary text-center font-bold leading-tight mt-4 md:mt-2">
                Assessment Centers 

                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center mt-2">
                Assessment Centers are the most complicated form of testing. They use selection exercises and practices to assess the individual. A combination of both activities and tests are used. There is no fixed duration for these tests; they can range from hours to days. 

                  <br />
                  Why is it Vital For Students to Take Psychometric Tests? Often, parents think their children should pursue a career simply because they perform well in a certain subject. However, psychometric testing experts believe otherwise. Excelling in a subject may be one valid factor, but several others determine how suitable someone might be for a career. One important factor besides the Intelligence Quotient (IQ) is the Emotional Quotient (EQ). This is useful in understanding how much stress a student can handle and what work environment would suit them best. 
                  <br />
                  Understanding their unique strengths will help students make informed career choices. Psychometric tests can also provide information about a student’s personality. They can help determine someone's emotional intelligence. They also highlight how they would handle high-pressure situations. Since students know there is no right or wrong answer, they can also answer freely, without any outside pressure. The nature of the tests discourages cheating, so the results are reliable and accurate.

                </p>
              </div>
            </section> */}
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          {/* <div className="w-full h-auto relative my-10">
            <h3 className="text-center text-[40px] md:text-[55px] text-primary font-bold leading-tight mt-2 mb-4">
              WHY IS IT VITAL FOR STUDENTS
              <br className="hidden md:block" />
              TO TAKE PSYCHOMETRIC TESTS?
            </h3>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
              <section className="mt-auto md:mt-18 order-2 md:order-1">
                <h6 className="text-[20px] md:text-[24px] text-primary text-center md:text-left font-bold leading-tight mt-4 md:mt-2">
                  WHAT IS A PSYCHOMETRIC TEST, AND HOW CAN IT HELP YOU?
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  They are beneficial for students in grades 8 through 12 to
                  choose their careers wisely. This is the stage when youngsters
                  form their fundamental viewpoints and attitudes about the
                  subjects they are studying.
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  Psychometric tests are particularly helpful for students
                  entering grades 11 and 12, unsure of what stream of education
                  they should choose.
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  Psychometric assessments play a tremendous role in assisting
                  grade 12 students with selecting their undergrad programs and
                  field of study.
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  Psychometric tests provide information on a student’s
                  personality, such as whether they are an introvert or an
                  extrovert, their level of emotional intelligence, and other
                  attributes that cannot be determined from a profile or even an
                  interview.
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  Psychometric tests provide useful information about a person’s
                  interests and talents without being biased because they are
                  completed by students who answer questions based on their own
                  judgments.
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  There are no right or wrong answers, there is no chance of
                  cheating or copying from others, like there is in other exams.
                  As a result, in the vast majority of cases the results are
                  reliable and accurate.
                </p>
              </section>
              <section className="flex flex-col items-center justify-center order-1 md:order-2">
                <Image
                  src="/assets/psycho/banner-2.png"
                  width={568}
                  height={568}
                  alt="WHAT IS A PSYCHOMETRIC TEST, AND HOW CAN IT HELP YOU?"
                  // objectFit='containe'
                />
              </section>
            </div>
          </div> */}
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-12 gap-6 mt-14">
            <section className="col-span-12 md:col-span-5">
              <Image
                src="/assets/psycho/banner-3.png"
                width={568}
                height={568}
                alt="How can Psychometric tests help you choose a career?"
                className="mx-auto"
              />
            </section>
            <section className="col-span-12 md:col-span-7">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight  mb-2">
              How Can Psychometric Tests Help You Choose a Career? 

              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              It can be exhausting to understand what exactly you aspire to be. That’s completely fine! The ocean of choices would make anyone confused. One step you can take to help you get through this phase is signing up for psychometric tests. 
<br/>
Unlike school exams, these tests will reveal different answers for every student based on their personal traits. You can judge your aptitude in several careers and choose accordingly. 

              </p>
            </section>
          </div>
          <div className="w-full h-auto grid grid-cols-12 gap-6 mt-14">
            <section className="col-span-12 md:col-span-7  mt-auto md:mt-10">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight  mb-2">
              When is the Right Time to Take a Psychometric Test? 

              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              A student’s physical and mental capacities change constantly during their teens. Hence, psychometric counselors advise students to take the test once they have reached a stable level of development. 
              <br/>
              <br/>
              The initial test can be taken in 10th grade since students typically choose their subject combinations during this time. Even if you’re happy with your career choice, a psychometric assessment can make narrowing down a specific niche easier. There is no right time to take these tests- you can take them at any stage in your life. However, the recommended age is 14-15 years old.

              </p>
            </section>
            <section className="col-span-12 md:col-span-5">
              <Image
                src="/assets/psycho/banner-4.png"
                width={468}
                height={468}
                alt="When is the right time to take a Psychometric test?"
                className="mx-auto"
              />
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto mt-10 mb-10">
            <h3 className="text-center text-[40px] md:text-[55px] text-primary font-bold leading-tight mt-2 mb-4">
            How Can Rostrum Education Help?

            </h3>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <section>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Rostrum Education’s Intellectual DNA test stands out from other assessments. It promotes good communication and critical thinking skills among students. This is in sharp contrast to the one-right-answer method used by other quantitative assessments. 

                </p>

              </section>
              <section>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Rostrum Education’s collaboration with the Institute of Psychometric Coaching brings a new era of qualitative psychometric testing. With an emphasis on instructional technology and cutting-edge digital solutions, Rostrum Education is on a mission to make education accessible worldwide. 

                </p>

              </section>
            </div>
            {/* <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <section>
                <h6 className="text-[20px] md:text-[24px] text-primary text-center md:text-left uppercase font-bold leading-tight mt-4 md:mt-2">
                  MORE ABOUT GWYN
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  A specialist in Neurolinguistics for the last 20 years he has
                  been coaching high potential students into top global
                  universities (Oxford, Cambridge, Imperial and LSE, Ivy League,
                  M7 plus Canadian and European schools.) He works with
                  undergraduates and postgraduate students to obtain internships
                  and full-time Graduate positions with the world’s top
                  financial institutions, law firms, consultancies, and global
                  corporates.
                </p>
              </section>
              <section>
                <br />
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  At Rostrum, we have been making use of education technology
                  right from the inception of our organisation. The Covid-19
                  pandemic has only strengthened our endeavour to digitise
                  through our sophisticated and state of the art software and
                  make education easily accessible to students across the world.
                  Register for the Intellectual DNA test today and discover your
                  true calling.
                </p>
              </section>
            </div> */}
          </div>
          {/* SECTION END */}
        </div>
      </div>
    </main>
  );
};

export default Psychometric;
