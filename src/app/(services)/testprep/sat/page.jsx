import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner";
import CallToAction from "@/components/common/CallToAction";
import AnimationProvider from "@/components/common/AnimationProvider";

const SAT = () => {
  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="center"
        title={"SCHOLASTIC APTITUDE EXAM (SAT)"}
        image={"/assets/header-banner/sat.png"}
      />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <section className="">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
              What is the SAT? 
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              The SAT is a popular test that many colleges use to see if students are ready for university. It's a timed test with multiple-choice questions that helps schools compare different applicants.
              <br/>
              <br/>
              Rostrum Education’s students regularly get top scores of 1600 on their SATs. Our tutors have a combined experience of over 75 years. They help students from places like India and the UAE achieve great results.

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
Why Do We Need the SAT? 

              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              The SAT is an important part of getting into college. It's a common yardstick colleges use to compare applicants. Colleges look at your grades, recommendations, activities, interviews, essays, and SAT score to help them decide if you will be a good fit. Some schools give it more weightage than others. But, a higher SAT score improves your chances of getting into your dream college.

              </p>
            </section>

            <section>
              <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
              Where is the SAT Valid?

              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              The SAT is accepted by many institutions worldwide. It is often used for undergraduate admissions in the United States and Canada. Some universities in the United Kingdom and Australia also recognize SAT scores.

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
              <section className="w-full relative my-4 md:my-8">
                <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                Extensive study help: In-depth tutoring to help you aim for the best test scores and strengthen college applications.
                </p>
              </section>
              <section className="w-full relative my-4 md:my-8">
                <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                Customization: Tailored programs that strengthen weak areas with personalized tutoring for each student.
                </p>
              </section>
              <section className="w-full relative my-0 md:my-8">
                <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                Individualized Coaching: Personal attention through one-on-one tutoring sessions tailored to your needs

                </p>
              </section>
            </section>
            <section className="relative flex flex-col-reverse md:flex-col">
              <Image
                src="/assets/sat/banner-2.png"
                width={370}
                height={370}
                alt="What is the SAT?"
                className="mx-auto"
              />
              <section className="w-full relative my-0 md:my-8">
                <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-left ps-6">
                Digital Learning: Modern educational approach that uses smart classrooms and interactive whiteboards.
                </p>
              </section>
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto mt-14">
            <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 border-b-2 border-[#F5B646] pb-4 mb-4">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase">
              Eligibility for SAT 
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-center md:text-left">
              The SAT, overseen by the College Board, does not establish specific qualifications. There's also no age limit for taking the SAT, and you can take it as many times as you want.

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
              How to Register for the SAT?
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">

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
              Steps for Online SAT Enrollment
              </h6>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                1. Visit the official College Board website. 
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                2. Create an account. 
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                3. Fill in the necessary fields. 
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                4. Select your test date and venue.  
                
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                5. Upload a clear photograph.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                6. Complete the payment.
              </p>
            </section>
            <section>
              <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
              Scholarship for the SAT
              </h6>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              Many institutions provide scholarships based on SAT scores. Students can also explore loans and financial aid options from banks and organizations.
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto mt-14">
            <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase">
            SAT Myths Busted

            </h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <section>
                <div className="mb-8">
                  <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  Regarding college admissions, the SAT surpasses the ACT
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  Colleges equally recognize both exams. Opt for the one that aligns most with your strengths. 
                  </p>
                </div>
                <div className="mb-8">
                  <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  Taking both the SAT and ACT enhances admission prospects. 
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  Concentrating on an exam that you have the skills for is a better idea.
                  </p>
                </div>

              </section>
              <section>
              <div className="mb-8">
                  <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  The SAT English section is challenging. 
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  Don’t worry. It can be managed through consistent reading and vocabulary enhancement. 
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
              What Makes Rostrum’s Instructors Unique?
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              Rostrum Education offers: 
              </p>
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
              A Solid Foundation:
              </h6>
              <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-center md:text-left">
              Build a strong base with practice tests, mock exams, and personalized tutoring.
              </p>
            </section>
            <section>
              <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
              Personalized Programs:
              </h6>
              <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-center md:text-left">
              Customized learning plans catering to individual needs. 

              </p>
            </section>
            <section>
              <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
              Subject Test Guidance
              </h6>
              <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-center md:text-left">
              Coaching for all 20 SAT Subject Tests to highlight strengths.
              </p>
            </section>
            <section>
              <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
              Essay Proficiency
              </h6>
              <p className="text-[16px] md:text-[20px] text-primary leading-tight font-normal text-center md:text-left">
              Enhance critical writing skills through comprehensive tutoring.

              </p>
            </section>
          </div>
          {/* SECTION END */}
        </div>
      </div>
      <CallToAction image={"/assets/call-action/about.png"} />
    </main>
  );
};

export default SAT;
