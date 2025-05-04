import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner";
import CallToAction from "@/components/common/CallToAction";
import AnimationProvider from "@/components/common/AnimationProvider";

const OxbridgePrep = () => {
  const data = [
    {
      title: "Re-read Your Personal Statement",
      description: `If you have passed all the stages and reached the interview stage, that means you did an amazing job writing your personal statement. But that doesn’t mean that the job is done. `,
      description_2:`The interviewer will ask specific questions related to the personal statement, so you will have to know your essay inside out. From academics to work experience, prepare everything so you don’t miss out on any information at the last minute. `,
      image: "/assets/oxbridge/1.png",
    },
    {
      title: "Whenever Possible, Ask Questions",
      description: `While preparing for a university interview, most students focus on answering instead of questioning. Asking thoughtful, well-chosen questions will show your interviewer that you are curious and eager to learn more- which is a quality they are looking for.`,
      image: "/assets/oxbridge/2.png",
    },
    {
      title: "Don’t be Worried or Stressed",
      description: `Staying calm and composed during your interview is key to your success. The interviewers are looking to faze you, so if you fall into the trap and are not visibly confident, they will not move forward with you. Therefore, it is important not to worry and just remain calm. `,
      image: "/assets/oxbridge/3.png",
    },
    {
      title: "Have a Nutritious Breakfast ",
      description: `Make sure to eat a nutritious and filling breakfast before your Oxbridge University interview. Avoid binging or trying your hand at fad diets during this time, as that can make you feel tired. Instead, try to eat eggs and fruit so that you consume enough protein and fiber to stay energized and attentive during your interview. `,
      image: "/assets/oxbridge/4.png",
    },
    {
      title: "Do Not be Fooled By Urban Legends",
      description: `Some Oxbridge professors may ask out-of-the-book questions,, but most of the time, you do not need to expect anything out of the ordinary. Every student is unique, so every interview will be different based on the interviewer and the interviewee. Try not to focus on other people’s interviews and just stay prepared for your own. `,
      image: "/assets/oxbridge/5.png",
    },
  ];
  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="center"
        title={"Oxbridge Interview Prep"}
        image={"/assets/header-banner/ox.png"}
      />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left ">
              As the end of the year approaches, news on whether or not students
              have passed on to the interview stage will arrive shortly.
              Receiving an acceptance from a top-rated university can be
              nerve-wracking.
            </p>
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
              However, there is no need to worry about the
              journey! Rostrum Education is here to provide customized plans for
              each student to help them ace their interview!
              Here are just a few tips you can practice in the days before and
              on the day of your interview!
            </p>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section>
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight mt-2 mb-8 md:mb-4">
                Begin Preparing Ahead of Time
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal  text-center md:text-left mt-4">
                At Oxbridge, the interview is the final stage in the application
                process, so it's important to start preparing weeks in advance.
                All it takes is some practice and research to better answer
                questions and show enthusiasm.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal  text-center md:text-left mt-4">
                So don't wait till the last minute; start preparing the
                following things now!
              </p>
            </section>
            <section>
              <Image
                src="/assets/oxbridge/banner-1.png"
                width={486}
                height={486}
                alt="Begin preparing ahead of time"
                className="mx-auto"
              />
            </section>
          </div>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <section>
              <div className="mt-10">
                <h6 className="text-[20px] md:text-[24px] text-primary text-left font-bold leading-tight mt-4 md:mt-2 flex items-start">
                  Dealing With Unseen Subject-Specific Material
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal  text-left mt-1">
                  We can never know the core material of the interview before it
                  happens, so students should reach out to professionals for
                  help beforehand. Our counselors have extensive experience and
                  can support students in navigating unfamiliar material.
                </p>
              </div>
              <div className="mt-10">
                <h6 className="text-[20px] md:text-[24px] text-primary text-left font-bold leading-tight mt-4 md:mt-2 flex items-start">
                  Subject-Specific Examples
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal  text-left mt-1">
                  Every student will be asked different questions based on their
                  courses. Rostrum Education's counselors have worked with
                  countless students before. They will cater their guidance to
                  your study area.
                  <br />
                  <br />
                  Verbal and Non-Verbal (Body Language Communication) What you
                  say is not the only thing that matters. Interviewers also look
                  at small details, such as how you dress and act. Rostrum helps
                  you perfect those moves.
                </p>
              </div>
              <div className="mt-10">
                <h6 className="text-[20px] md:text-[24px] text-primary text-left font-bold leading-tight mt-4 md:mt-2 flex items-start">
                  Personal Statement Questions
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal  text-left mt-1">
                  We sit with our students individually and brainstorm ideas for
                  their personal statements. This helps us better understand
                  their thoughts and goals to tell the perfect story.
                </p>
              </div>
              <div className="mt-10">
                <h6 className="text-[20px] md:text-[24px] text-primary text-left font-bold leading-tight mt-4 md:mt-2 flex items-start">
                  Structuring Answers
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal  text-left mt-1">
                  Once we've gathered our ideas, we will assist you in coming up
                  with answers that will definitely impress the university.
                </p>
              </div>

        

            </section>
            <section>
              <div className="mt-10">
                <h6 className="text-[20px] md:text-[24px] text-primary text-left font-bold leading-tight mt-4 md:mt-2 flex items-start">
                  Responding to Interviewer's Cues and Tips
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-1">
                  The interviewer will give you particular cues that you will
                  need to understand throughout the interview. We will help you
                  interpret these cues so that you can tackle any unfamiliar or
                  confusing situation.
                </p>
              </div>
              <div className="mt-10">
                <h6 className="text-[20px] md:text-[24px] text-primary text-left font-bold leading-tight mt-4 md:mt-2 flex items-start">
                  Past Questions
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-1">
                  Our team constantly updates itself with all interview drives,
                  which is an advantage for our students. Using these, you can
                  prepare for any general questions you may ask in the
                  interview.
                </p>
              </div>
              <div className="mt-10">
                <h6 className="text-[20px] md:text-[24px] text-primary text-left font-bold leading-tight mt-4 md:mt-2 flex items-start">
                  Demonstrating Confidence, Teachability, and Reflection
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-1">
                  The most important thing in an interview is confidence. This
                  is why we do not just prepare our students academically but
                  also help develop their personality holistically.
                  <br />
                  <br />
                  Talking About Yourself, Interests and Achievements
                  <br />
                  <br />
                  It is important to talk about yourself but not overdo it. At
                  Rostrum, we help our students present themselves confidently.
                </p>
              </div>

 
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          {data.map((item, i) => (
            <div
              key={i}
              className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto grid grid-cols-1 md:grid-cols-2  gap-8"
            >
              <AnimationProvider
                className={`w-full h-auto relative p-2 order-1
            ${i % 2 === 1 ? "order-1 md:order-2" : "order-1 md:order-1"}
            `}
                animationType="slide-up"
              >
                {/* <section
                className={`w-full h-auto relative p-2 order-1
			${i % 2 === 0 ? 'order-1 md:order-2' : 'order-1 md:order-1'}
			`}
              > */}
                <div className="relative w-full h-[300px] md:h-[500px] ">
                  <Image
                    src={item.image}
                    alt="Mission"
                    fill
                    style={{ objectFit: "cover" }}
                    className="-z-1"
                  />
                </div>
                {/* </section> */}
              </AnimationProvider>
              <AnimationProvider
                className={`w-full h-full flex flex-col items-center md:items-start justify-center
            ${i % 2 === 1 ? "order-2 md:order-1" : "order-2 md:order-2"}
            `}
                animationType="slide-up"
              >
                {/* <section
                className={`w-full h-full flex flex-col items-center md:items-start justify-center
			${i % 2 === 0 ? 'order-2 md:order-1' : 'order-2 md:order-2'}
			`}
              > */}
                <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-none mt-2 uppercase">
                  {item.title}
                </h4>
                <p className="text-[20px] text-primary font-normal text-center md:text-left mt-8">
                  {item.description}
                </p>
                <p className="text-[20px] text-primary font-normal text-center md:text-left mt-8">
                  {item.description_2}
                </p>
                {/* </section> */}
              </AnimationProvider>
            </div>
          ))}
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto relative mt-14">
            <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 mb-8 md:mb-auto uppercase">
            What Makes Us Different
            </h3>

            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {[
                `All our tutors have graduated from top-ranked universities such as Oxford and Cambridge. `,
                `We test all of our students through mock assessments so that they are ready for everything. `,
                `Our services are provided to students worldwide, including India and UAE. `,
                `We make sure that candidates answer in line with the mark scheme specification.`,
                `Every year, we analyze the new set of test questions and familiarize our students with them.`,
                `We teach our students how they can approach unfamiliar questions and write model answers. `
              ].map((item, i) => (
                <section key={i} className="flex items-start justify-start">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.538"
                      height="20.358"
                      viewBox="0 0 27.538 26.358"
                      className="me-2"
                    >
                      <g
                        id="Group_110"
                        data-name="Group 110"
                        transform="translate(-26.404 -138.505)"
                      >
                        <g id="Group_109" data-name="Group 109">
                          <path
                            id="Path_276"
                            data-name="Path 276"
                            d="M41.793,139.683l2.082,6.408a1.705,1.705,0,0,0,1.621,1.178h6.738a1.7,1.7,0,0,1,1,3.082l-5.451,3.961a1.7,1.7,0,0,0-.619,1.9l2.082,6.408a1.7,1.7,0,0,1-2.622,1.9l-5.451-3.96a1.7,1.7,0,0,0-2,0l-5.451,3.96a1.7,1.7,0,0,1-2.623-1.9l2.082-6.408a1.7,1.7,0,0,0-.619-1.9l-5.451-3.961a1.7,1.7,0,0,1,1-3.082h6.738a1.706,1.706,0,0,0,1.621-1.178l2.082-6.408a1.7,1.7,0,0,1,3.241,0"
                            fill="#ff335a"
                          />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left">
                    {item}
                  </p>
                </section>
              ))}
            </div>
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center mt-6">
            Don’t wait until the last minute! Contact us now to ace your Oxbridge interview and secure a spot at the top-rated university with our expert guidance! 
            </p>
          </div>
          {/* SECTION END */}
        </div>
      </div>
    </main>
  );
};

export default OxbridgePrep;
