import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner";
import CallToAction from "@/components/common/CallToAction";
import AnimationProvider from "@/components/common/AnimationProvider";

const BMAT = () => {
  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="left"
        title={"BMAT"}
        image={"/assets/header-banner/bmat.png"}
      />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <section className="">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
              BMAT PREPARATION WITH ROSTRUM EDUCATION
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              BMAT (BioMedical Admissions Test) is a prerequisite entrance exam to apply to medical universities. Rostrum Education provides the finest and most competent services to help you achieve your goal. 
              <br/>
              <br/>
              Resources and information are given below.

              </p>
              <br />
              <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
              What Is BMAT?

              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              BMAT is a test that measures aptitude and knowledge. It consists of 3 sections and must be completed in 2 hours. 

              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              The first section aims to assess your problem-solving, critical thinking, and inference skills. It consists of 32 multiple-choice questions that must be completed within 60 minutes.


              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              The second section is about scientific knowledge and its applications. It consists of 27 multiple-choice questions based on biology, chemistry, physics, and mathematics. It should be completed in 30 minutes.

              </p>
            </section>
            <section className="">
              <Image
                src="/assets/bmat/banner-1.png"
                width={471}
                height={471}
                alt="BMAT PREP"
                className="mx-auto"
              />

              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              The last section is a writing task in which the applicant must choose one topic out of three to write an essay on. The section evaluates your ability to articulate, critically assess, and communicate your ideas.
<br/>
<br/>
Some students prefer to focus on the UCAT. However, taking the BMAT exam expands your potential list of medical schools to which you may want to apply in the future.

              </p>
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          {/* <div className="w-full h-auto mt-14">
            <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
              What is the BMAT test’s scoring system?
            </h4>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                In Sections 1 and 2, each question is worth one mark. Each
                section’s total raw marks are transformed to the BMAT scale,
                which ranges from 1 (poor) to 9 (high) (high). Scores are
                recorded to the nearest tenth of a decimal place. Typical BMAT
                candidates will receive a score of around 5.0, which is almost
                half a mark. The best candidates will receive a score of
                approximately 6.0, with a few exceptional individuals receiving
                a score of above 7.0.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The topic of Section 3 essays is graded, as well as the quality
                of the written English. Each essay is graded twice. The average
                of the two marks is stated if the two marks are the same or are
                separated by no more than one mark. If there is a significant
                disparity in the grades, the essays are remarked a third time,
                and the final grade granted is double-checked by a senior member
                of the Cambridge Assessment team.
              </p>
            </div>
          </div> */}
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <section className="">
              <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
              How Important Is The BMAT Exam?

              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              Some students choose not to take the BMAT exam and instead focus on the UCAT. However, a limited group of highly reputable medical schools accept BMAT as their entrance exam. It is known for its thorough aptitude testing. Preparing well and clearing the BMAT opens up many medical schools to apply to. The BMAT is conducted several times a year. One must take the BMAT in November to apply to a UK university.
              </p>
            </section>
            <section className="">
              <Image
                src="/assets/bmat/banner-2.png"
                width={471}
                height={471}
                alt="Who Should Take The BMAT?"
                className="mx-auto"
              />
            </section>
          </div>

          {/* SECTION END */}

          {/* SECTION START */}

          <div className="w-full h-auto mt-14">
            <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
            Which Universities Require The BMAT Exam

            </h4>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              <section>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                University of Cambridge
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                University of Oxford
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                University College London
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                University of Leeds
                </p>
              </section>
              <section>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                Lancaster University
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                Brighton and Sussex Medical School
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                Universidad de Navarra
                </p>
              </section>
              <section>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                Nazarbayev University School of Medicine
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                Imperial College London
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                Keele University
                </p>
              </section>
            </div>
            {/* <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  Why is the BMAT used by some universities?
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  Some colleges use the BMAT to create an additional level of
                  difference amongst applicants. The importance of BMAT results
                  will be weighted differently by each university.
                </p>
              </section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  When will you be able to take the BMAT?
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  The BMAT exam is given many times a year. In each application
                  cycle, you can only take the test once. You must take the BMAT
                  test in November if you are applying to a UK university.
                </p>
              </section>
            </div> */}
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="mt-10">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
              Tips On Excellent Preparation For BMAT

              </h3>
            </section>
            <section>
              <Image
                src="/assets/bmat/banner-3.png"
                width={441}
                height={441}
                alt="Here are a few tips to help you as you start your prep:"
                className="mx-auto"
              />
            </section>
          </div>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            <section>
              <section className='mb-6 md:mb-auto' >
                {/* <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  1. Prioritise
                </h6> */}
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                1- Familiarize Yourself With the Test Structure: The BMAT has a specific testing approach and contents. Preparation requires a focused approach. First, you must understand the test structure. Use official sources for practice tests and past papers and plan your preparation accordingly.
                </p>
              
              </section>
              <section className='mb-6 md:mb-auto' >                
              {/* <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  2. Previous years’ papers
                </h6> */}
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                2- Master Time Management: Go through multiple practice tests to improve on the test. Focus on completing the questions within their allocated periods. Simulate test conditions to familiarize yourself with the pacing.
                </p>
              </section>
              <section className='mb-6 md:mb-auto' >               
               {/* <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  3. Complex problems vs. Time
                </h6> */}
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
               3-  Work on Problem Areas: Assess your strengths and weaknesses and divide and prioritize your time accordingly.
                </p>

              </section>
            </section>
            <section>
            <section className='mb-6 md:mb-auto' >                
            {/* <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  4. Treat Section 1 as if it were the UCAT
                </h6> */}
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
               4 -  Section 1, Problem Solving: The first BMAT section consists of questions to test problem-solving skills. Stay calm under pressure and approach the questions logically. Break down the problem and use logical reasoning to eliminate answers. Practice makes perfect!
                </p>
              </section>
              <section className='mb-6 md:mb-auto' >
                {/* <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  5. Maintain your confidence in Section 2
                </h6> */}
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                5- Section 2, Scientific Knowledge: The BMAT tests your scientific knowledge. It ensures you have a strong grasp of your key concepts in biology, chemistry, physics, and mathematics.
                </p>

              </section>
              <section>
                {/* <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  6. Section 3 requires a great deal of clarity
                </h6> */}
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
               6-  Section 3, Critical Skills and Writing: Now, practice your critical analysis and comprehension skills. Read scientific articles and summarize key points every day to improve these skills.
                </p>
              </section>
              <section>
                {/* <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  6. Section 3 requires a great deal of clarity
                </h6> */}
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                7- Seek Feedback: And last but not least, review your performance with peers and teachers!
                </p>
              </section>
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <section className="">
              <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
              Perks And Merits Of Rostrum Education

              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              At Rostrum Education, we specialize in helping you improve your BMAT score. We help enhance your admission prospects to top medical schools. 

<br/>
<br/>
Our tutors are professionals who have graduated from top medical universities. They provide invaluable firsthand experience to help you prepare. Each tutor excels in creating personalized lesson plans. They also focus on your test timelines, previous scores, strengths, and weaknesses.

              </p>
            </section>
            <section className="">
              <Image
                src="/assets/bmat/banner-4.png"
                width={471}
                height={471}
                alt="THE ROSTRUM EDGE"
                className="mx-auto"
              />
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto relative mt-14">
            <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
            Valuable Resources Provided At Rostrum

            </h4>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                ONE-ON-ONE TUTORING
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Personalized class plans and programs ensure each student makes the most out of their Rostrum experience.
                </p>
              </section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                Tried and tested strategies:
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
          
Comprehensive test materials comprising of targetted mock papers and practice questions.

                </p>
              </section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                BMAT COURSES
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
           
Intensive and highly effective BMAT courses that include valuable preparation curriculum and methodology.

                </p>
              </section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                SUPERVISION AND FEEDBACK
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Regular supervision is needed to ensure that students thoroughly understand the course materials. Feedback is shared with both students and parents.
                </p>
              </section>
            </div>
          </div>
          {/* SECTION END */}
        </div>
      </div>
      <CallToAction 
              image={'/assets/call-action/about.png'}

      />
    </main>
  );
};

export default BMAT;
