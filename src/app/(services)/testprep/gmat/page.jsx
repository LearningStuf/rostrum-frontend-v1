import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner";
import CallToAction from "@/components/common/CallToAction";
import AnimationProvider from "@/components/common/AnimationProvider";

const GMAT = () => {
  const features = [
    {
      icon: "/assets/gmat/icons/1.svg",
      title: "700/800",
      description: `85% + students score over 700 on their GMAT!`,
    },
    {
      icon: "/assets/gmat/icons/2.svg",
      title: "ONE 2 ONE",
      description: `Personal tutoring for personalised care`,
    },
    {
      icon: "/assets/gmat/icons/3.svg",
      title: "DIGITALISED EDUCATION",
      description: `Smart classes | interactive whiteboards`,
    },
    {
      icon: "/assets/gmat/icons/4.svg",
      title: "EXCLUSIVE COURSE MATERIAL",
      description: `Access to exclusive study material specially curated 
      to achieve personal best in GMAT`,
    },
  ];
  const qualities = [
    {
      title: "Provision of a Strong Foundation:",
      description: `At Rostrum Education, we prioritize giving our clients a strong foundation from which to work. We focus heavily on strengthening basic concepts by providing the correct resources and giving effective guidance. Once our students fully grasp the basics, we employ our tried-and-tested training strategies.`,
    },
    {
      title: "Critical Thinking and Analysis:",
      description: `The candidate must possess the necessary critical analysis skills to excel and get a strong GMAT score. At Rostrum, we help our students develop these skills and enhance their natural talents over time using a unique systematic and dedicated approach.`,
    },
    {
      title: "Integrated Reasoning Skills",
      description: `Integrated reasoning and data analysis skills are paramount to taking the GMAT and arguably the exam's most challenging parts. We provide our students with the necessary resources and facilitate regular practice to help cultivate and improve these skills to ensure great results.`,
    },
  ];
  const data = [
    {
      title: "Excellent Educators-",
      description: `Each of Rostrum’s educators is the greatest in his field. And each of them has received training in presenting a simplified teaching technique that achieves maximum outcomes with the least amount of work.`,
    },
    {
      title: "Proven results—",
      description: `we’ll let our former students and the internet speak for themselves on this one. Take a look at some of the feedback we’ve received. (https://rostrumedu.com/reviews/)`,
    },
    {
      title: "GMAT Practice Test Series-",
      description: ` Ever wished you could obtain a complete drill-down analysis, from a histogram displaying your marks, time taken, and attempts vs. the top scorers to a line graph showing marks vs. percentile? Not only that, but we also take a lot of GMAT practice exams to help you improve your abilities with each try so you can give it your all on the big day.`,
    },
    {
      title: "",
      description: `You may study for your examinations in a relaxed and comfortable setting from the convenience of your own home or office with online tutoring. There are no distractions, which allows you to concentrate better. The Rostrum team has the top teachers who will not only help you achieve high grades but also assist you build some fantastic abilities. Rostrum’s online GMAT preparation will help you achieve the marks you desire to get into your dream business school.`,
    },
  ];
  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="left"
        title={"PREPARING FOR THE GMAT EXAM"}
        image={"/assets/header-banner/gmat.png"}
      />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          <div className="relative w-full md:w-11/12  mx-auto flex items-start">
            <span className="text-secondary text-[128px] font-semibold -translate-y-20 md:-translate-y-12 absolute -left-0 md:-left-12">
              “
            </span>
            <h6 className=" text-[22px] md:text-[28px] text-primary text-center font-semibold leading-tight mt-4">
              "At Rostrum, we are dedicated to helping ambitious candidates achieve the scores they deserve that will help them excel and succeed in their goals. Out of the 200,000 yearly applications, our students have been amongst those scoring above 700.”

              <span className="text-secondary text-[128px] -translate-y-12  -translate-x-8 md:translate-x-6 self-end leading-none absolute rotate-180 mt-2 md:mt-auto">
                “
              </span>
            </h6>
          </div>
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="mt-auto md:mt-18">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
                What is the GMAT?
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The Graduate Management Admissions Test (GMAT) is a standardized, computer-based exam for admission to graduate business programs like MBA and Finance. It assesses analytical writing, quantitative reasoning, and integrated reasoning skills and aims to evaluate an applicant's capabilities and potential for success in graduate management education.

              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                With over 2,500 schools worldwide accepting GMAT scores for admission, a well-defined study and preparation plan is crucial for achieving a strong score.

              </p>
            </section>
            <section className="flex flex-col items-center">
              <Image
                src="/assets/gmat/banner-1.png"
                width={471}
                height={471}
                alt="What is the GMAT?"
              />
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
            {features.map((item, i) => (
              <section
                key={i}
                className="w-full shadow-md rounded-md flex flex-col items-start justify-between py-6 px-4"
              >
                <Image
                  src={item.icon}
                  width={84.45}
                  height={99.67}
                  alt={item.title}
                />
                <div className="mt-4">
                  <h6 className="text-[22px] md:text-[28px] text-primary  md:text-left font-bold leading-tight ">
                    {item.title}
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    {item.description}
                  </p>
                </div>
              </section>
            ))}
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="mt-auto md:mt-14">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
                WHY TAKE THE GMAT?

              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Are you dreaming of launching a stellar business or climbing the corporate ladder? The GMAT is your key to unlocking a world of possibilities. Recognized by over 7,000 business schools globally, this test gives you the flexibility to pursue the graduate program that perfectly aligns with your ambitious future plans – the GMAT is the gateway to the tomorrow of your dreams!
                <br />
                {/* <br/>
              Usually a major requirement of top business schools worldwide, the GMAT is one of the most important tests you can take to secure admission and display your competence and talents in this field. A strong GMAT score provides a competitive advantage and enhances your application, making you a better candidate. */}

              </p>
            </section>
            <section className="flex flex-col items-center">
              <Image
                src="/assets/gmat/banner-2.png"
                width={471}
                height={471}
                alt="Significance of the GMAT exam"
              />

            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <section className="mt-auto md:mt-14">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
                GMAT EXAM SYLLABUS

              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The GMAT exam has recently been upgraded. The older version lasted approximately 3 hours and 7 minutes, excluding two optional breaks. The exam itself consisted of four components with different allocated time slots.

              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The updated version of the GMAT is called Focus Edition. The shortened duration is 2 hours and 15 minutes, and the test consists of 3 sections:

              </p>
            </section>
            <section className="flex flex-col items-center">
              <Image
                src="/assets/gmat/banner-3.png"
                width={571}
                height={571}
                alt="Significance of the GMAT exam"
              />
            </section>
          </div>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start justify-start">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.538"
                  height="26.358"
                  viewBox="0 0 27.538 26.358"
                >
                  <g
                    id="Group_110"
                    data-name="Group 110"
                    transform="translate(-26.404 -138.506)"
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
              <div>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-left ms-4">
                  Section 1: Quantitative Reasoning
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-left">
                  This section consists of 21 questions that assess a candidate's mathematical ability. Through questions related to arithmetic, algebra, and numerical problems, the student is evaluated on their problem-solving and data-interpretation skills, which are necessary in fields like management, accounting, and finance.

                </p>
              </div>
            </div>
            <div className="flex items-start justify-start ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.538"
                  height="26.358"
                  viewBox="0 0 27.538 26.358"
                >
                  <g
                    id="Group_110"
                    data-name="Group 110"
                    transform="translate(-26.404 -138.506)"
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
              <div>
                {/* <p className="text-[16px] md:text-[20px] text-primary font-bold text-left ms-4">
                Section 2: Verbal Reasoning

                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-left">
                This section gives 23 reading comprehension and critical reasoning questions. It assesses your ability to understand statements, words, and relationships between concepts. 

                </p> */}

                <p className="text-[16px] md:text-[20px] text-primary font-bold text-left ms-4">
                  Section 3: Data Insights

                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-left">
                This section tests the candidate’s ability to analyze and evaluate information presented in different formats, such as tables and graphs. It includes various question formats, such as Table Analysis, Graphics Interpretation, and Two-Part Analysis.
                  {/* <br />
                  <br />
                  The GMAT Official Guide 2024-25 is available now. It includes 800+ practice questions and more to help you prepare effectively for the GMAT Focus. */}
                  
                </p>
                
              </div>
            </div>
            <div className="flex items-start justify-start">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.538"
                  height="26.358"
                  viewBox="0 0 27.538 26.358"
                >
                  <g
                    id="Group_110"
                    data-name="Group 110"
                    transform="translate(-26.404 -138.506)"
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
              <div>
                {/* <p className="text-[16px] md:text-[20px] text-primary font-bold text-left ms-4">
                  Section 3: Data Insights

                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-left">
                  This section tests the candidate’s ability to analyze and evaluate information presented in different formats, such as tables and graphs. It includes various question formats, such as Table Analysis, Graphics Interpretation, and Two-Part Analysis.
                  <br />
                  <br />
                  The GMAT Official Guide 2024-25 is available now. It includes 800+ practice questions and more to help you prepare effectively for the GMAT Focus.

                </p> */}
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-left ms-4">
                  Section 2: Verbal Reasoning

                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-left">
                  This section gives 23 reading comprehension and critical reasoning questions. It assesses your ability to understand statements, words, and relationships between concepts. 
                </p>
              </div>
            </div>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          {/* <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
                GMAT Official Guide 2022
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The GMAT Official Guide (OG) 2022 is now out, and it includes a
                few new features. The Official Guide for GMAT is the most
                extensively utilized GMAT study resource, and it contains
                retired questions that have previously appeared on the GMAT
                test. The OG for GMAT is a question bank including over 1000
                questions from past GMAT examinations. They are the most similar
                to the GMAT’s actual questions.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                It is, nevertheless, insufficient for the entire preparation.
                Aside from the GMAT Official Guide, we recommend that you use
                other GMAT Prep resources. The GMAC also recommends not to
                depend upon the Official guide completely, you can refer to GMAT
                practice tests and GMAT online coaching.
              </p>
            </section>
            <section className="flex flex-col items-center">
              <Image
                src="/assets/gmat/banner-4.png"
                width={883}
                height={883}
                alt="GMAT Official Guide 2022 "
              />
            </section>
          </div> */}
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-12 gap-8 mt-14">
            <section className="col-span-12 md:col-span-8">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
                ONLINE COACHING, ITS BENEFITS, AND ROSTRUM
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                You may opt for online coaching to effectively prepare for the GMAT. Online coaching eliminates travel time and allows you to study with the same study and coaching material in the comfort of your room.

                <br />
                We at Rostrum Education have worked tirelessly to develop an effective online coaching regimen to help you study and score well on your GMAT exam!
                <br />
                At Rostrum, we are dedicated to helping ambitious candidates achieve the scores they deserve, which will help them excel and succeed in their goals. Our GMAT Practice Test Series has been proven to improve many successful GMAT test takers' skills and scores. Our excellent educators are some of the most experienced in their field. Their effective and tried-and-tested techniques have brought forth tremendous results!
              </p>
            </section>
            <section className="col-span-12 md:col-span-4">
              <Image
                src="/assets/gmat/banner-5.png"
                width={451}
                height={451}
                alt="GMAT online coaching and how is it beneficial"
              />
            </section>
          </div>

          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-12 gap-8 mt-14">
            <section className="col-span-12 md:col-span-8">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2  mb-0 md:mb-4">
                WHY ROSTRUM IS UNIQUE

              </h3>
            </section>
            <section className="col-span-12 md:col-span-4">
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-0 md:mt-4">

                Here are just a few of the many reasons why we at Rostrum Education are confident in our services:

              </p>
            </section>
          </div>
          <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
            Here’s how you’d find us to be different:
          </h6>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {qualities.map((item, i) => (
              <div key={i} className="w-full h-auto">
                <div className="flex items-start justify-start">
                  <span className="block w-[25px] h-[38px] bg-secondary rounded-full"></span>
                  <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ms-4 ">
                    {item.title}
                  </h6>
                </div>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          {/* <div className="w-full h-auto grid grid-cols-12 gap-8 mt-14">
            <section className="w-full col-span-12 md:col-span-4">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
                Here are few things we are proud of
              </h3>
            </section>
            <section className="w-full col-span-12 md:col-span-8">
              {data.map((item, i) => (
                <section
                  key={i}
                  className="border-b-2 border-[#F5B646] pb-4 mb-4"
                >
                  <p
                    key={i}
                    className="text-[16px] md:text-[20px] text-primary font-normal text-left"
                  >
                    {item.title && <b>{item.title}</b>} {item.description}
                  </p>
                </section>
              ))}
            </section>
          </div> */}
          {/* SECTION END */}
        </div>
      </div>
      <CallToAction image={"/assets/call-action/about.png"} />
    </main>
  );
};

export default GMAT;
