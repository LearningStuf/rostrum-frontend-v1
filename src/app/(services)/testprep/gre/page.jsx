import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner";
import CallToAction from "@/components/common/CallToAction";
import AnimationProvider from "@/components/common/AnimationProvider";

const GRE = () => {
  const features = [
    {
      title: "320/340",
      description: `85% + students score over 320 on their GRE!`,
      icon: "/assets/gre/icons/1.svg",
    },
    {
      title: "ONE 2 ONE",
      description: `Personal tutoring for personalised care`,
      icon: "/assets/gre/icons/2.svg",
    },
    {
      title: "DIGITALISED EDUCATION",
      description: `Smart classes | interactive whiteboards`,
      icon: "/assets/gre/icons/3.svg",
    },
    {
      title: "EXCLUSIVE COURSE MATERIAL",
      description: `Access to exclusive study material specially curated to achieve personal best in GRE.`,
      icon: "/assets/gre/icons/4.svg",
    },
  ];

  const data = [
    {
      title: "Flexibility in Learning:",
      description: `With online coaching, you can make your schedule according to your convenience. You can postpone lessons whenever needed. Our students also find that it's less stressful to study from home and not have to spend extra time, money, and fuel on transport arrangements. if you want to go through the same class again, just hit replay!`,
      description_2: ``,
    },
    {
      title: "Personalized Study Plans:",
      description: `Online coaching gives you the luxury of selecting a personalized study plan according to the test you are taking, the syllabus you want to focus on, and areas you find most challenging. Communicate with online tutors and experts to make most of your time and money investments.`,
      description_2: ``,
    },
    {
      title: "Real-time Progress Tracking:",
      description: `You can immediately access your practice test results and gain insight into your progress and improvement. You and your online mentors can then use these results to improve your further coaching.`,
      description_2: ``,
    },
  ];

  const instructors = [
    {
      title: "Access to Expert Instructors",
      description: `At Rostrum Education, we have a team of expert coaches who are not only experts in their fields but are also trained educationists.`,
      description_2: ``,
    },
    {
      title: "Interactive Learning Tools and Resources",
      description: `Rostrum Education offers coaching resources for all 6 GRE subject tests to help improve your skills. These include smart classes, interactive whiteboards, and exclusive course materials.`,
      description_2: ``,
    },
    {
      title: "GRE Practice Test Series:",
      description: `Our GRE Test Series includes GMAT mock tests and practice papers with previous years’ GRE questions to boost your abilities. Our feedback system includes histograms with a complete analysis of your performance vs other top scorers.`,
      description_2: ``,
    },
    {
      title: "Supportive Online Community:",
      description: `Rostrum Education connects you to a community of mentors, peers, and alumni who share your goals and are on their way to achieving them. `,
      description_2: ``,
    },
  ];

  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="left"
        title={"GRE"}
        image={"/assets/header-banner/gre.png"}
      />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          {/* SECTION START */}
          <div className="relative w-full md:w-10/12 mx-auto flex items-start">
            <span className="text-secondary text-[128px]  -translate-y-12">
              “
            </span>
            <h6 className=" text-[22px] md:text-[28px] text-primary text-center font-bold leading-tight">
              Over 600,000 applicants take the test every year, be best placed
              with us! We espouse a 90% entrance rate of students giving the
              test with our GRE prep from all over the world including India and
              UAE.
            </h6>
            <span className="text-secondary text-[128px] translate-y-16 md:translate-y-0 translate-x-0 md:translate-x-0 self-end rotate-180">
              “
            </span>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 md:mt-0">
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              The Graduate Reform Examination General Test has the kind of
              questions that closely reflect the process of thinking you’ll do —
              and the skills you need to succeed — in the highly competitive
              demanding graduate school programs, including business and law.
              The GRE exam lets you skip questions within a section which makes
              the nerves relax more, you can also go back and change answers and
              have the flexibility to choose which questions within
            </p>
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              a section you want to answer first. The GRE General Test is a
              standardised test meant to assess general intellectual
              preparedness for graduate school and administered by the
              Educational Testing Service, or ETS. Some graduate schools require
              applicants to take the GRE General Test as well as a GRE Subject
              Test, which evaluates technical knowledge in a specific area such
              as physics, psychology, or mathematics.
            </p>
          </div> */}
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto mt-14">
            <h3 className="text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-4">
              The GRE measures an applicant’s
            </h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight mb-4">
                  • Verbal reasoning
                </h6>
                <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight mb-4">
                  • Quantitative reasoning
                </h6>
                <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight mb-4">
                  • Critical thinking and
                </h6>
                <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight mb-4">
                  • Analytical writing skills
                </h6>
              </section>
              <section>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
                  The GRE focuses on testing skills that show how an applicant
                  has developed their academic skills over time. This contrasts
                  knowledge-based tests for an applicant’s scientific knowledge
                  in a specific field of study.
                </p>
              </section>
            </div>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          {/* <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 mt-14">
            {features.map((item, i) => (
              <div
                key={i}
                className="w-full h-auto rounded-xl shadow-lg py-6 px-4 flex flex-col items-start justify-between"
              >
                <Image
                  src={item.icon}
                  width={70}
                  height={80}
                  alt={item.title}
                />
                <section>
                  <h6 className="text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight mt-4">
                    {item.title}
                  </h6>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
                    {item.description}
                  </p>
                </section>
              </div>
            ))}
          </div> */}
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="">
              <h4 className="text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
                The GRE consists of the following sections:
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                <b> Analytical Writing Section (Time Duration: 30 minutes)</b>
                {/* <br />
                This section consists of 2 tasks. For the “Analyse an Issue”
                task, candidates are asked to take a position on a given
                statement and then defend their position. They should do this
                concisely and effectively through logical arguments and
                evidence.
                <br />
                <br />
                The other task is to “Analyse an argument”. Candidates are
                presented with an argument and you must analyze and critique it. */}
                <br />
                Includes two tasks – Analyze an Issue (take a stance and defend it) and Analyze an Argument (critique a given argument).
              </p>

              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                <b>Verbal Reasoning Section (Time Duration: 60 minutes)</b>
                {/* <br />
                This section tests a candidate's hold on the English language.
                The questions include comprehension paragraphs, sentence
                completion, grammar, sentence equivalence, etc. */}
                <br />
                Tests English skills through comprehension, sentence completion, grammar, and equivalence questions.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                <b>Quantitative Reasoning (Time Duration: 70 minutes)</b>
                {/* <br />
                This section includes the basics of math such as algebra,
                arithmetic, geometry, problem-solving, and data analysis. */}
                <br />
                Covers basic math: algebra, arithmetic, geometry, problem-solving, and data analysis.
              </p>
            </section>
            <section className="">
              <Image
                src="/assets/gre/banner-1.png"
                width={453}
                height={453}
                alt="What is the duration of the GRE?"
                className="mx-auto"
              />
            </section>
          </div>
          {/* <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mt-4">
              If you’re wondering what the appropriate time is to take the GRE,
              here’s everything you need to know.
            </h6>
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              The GRE is given at several times throughout the year. This makes
              it easy for you to complete the test according to your study
              schedule. However, it is recommended that you leave yourself some
              breathing room before the deadline for your application.
              <br />
              If you need to complete the application by the end of December,
              for example, booking the GRE date in October is a good idea. This
              will provide you some breathing room if you’re not happy with your
              results.
              <br />
              The GRE test is not required by all universities. Students should,
              however, verify with their prospective universities to determine
              their eligibility for admission. The GRE is accepted by colleges
              all across the world, including the United States, the United
              Kingdom, New Zealand, and Canada.
            </p>
          </div> */}
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="mt-auto md:mt-14">
              <h4 className="text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
                What is the procedure for registering for the GRE?
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Please keep your passport and debit/credit card accessible
                before registering for the GRE. Make sure the information you
                enter on the ETS portal matches what’s on your passport.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-bold text-left mt-4">
                To register for the GRE exam, follow these steps:
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                1) Create an ETS account on the official ETS website.
                (https://ereg.ets.org/ereg/public/jump?_p=GRI).
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                2 ) Go to your ETS account and log in.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                3) Choose the GRE exam you want to take and the location where
                you want to take it.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                4) After you’ve confirmed the venue, choose a test time and date
                for the exam before proceeding to payment.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                5) Go over your application again.
              </p>
            </section>
            <section className="">
              <Image
                src="/assets/gre/banner-2.png"
                width={471}
                height={471}
                alt="Significance of the GMAT exam"
                className="mx-auto"
              />
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                6) Finish the registration procedure by paying the registration
                cost online using a debit or credit card.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                7) After your money is finalised, you will get an email
                confirmation of your GRE registration to the email address you
                provided.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-bold text-left mt-4">
                YOU HAVE FINALLY BEEN REGISTERED!!
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="mt-auto md:mt-14">
              <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
                GRE DURATION AND APPLICATION PROCESS
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The GRE lasts around 4 hours. We advise candidates to arrive 30
                minutes earlier to help them settle in, relax a bit, and avoid
                any last-minute stress caused by rushing to the test center.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                What is an appropriate time to take the GRE?
                <br />
                <br />
                You may be tempted to take the GRE close to when your
                application submissions are due. However, it's best to take the
                GRE with enough breathing time in case you are not satisfied
                with your score and want to retake it.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                Things you will need on hand before you begin the application
                process:
              </p>
              <ul className="list-inside list-disc text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                <li>Your passport</li>
                <li>Your credit/debit card</li>
              </ul>
            </section>
            <section className="">
              <Image
                src="/assets/gre/banner-3.png"
                width={471}
                height={471}
                alt="What is the best way to prepare for the GRE?"
                className="mx-auto"
              />
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                Follow these steps for your GRE registration:
              </p>
              <ul className="list-inside list-decimal text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                <li>
                  Visit the ETS official website to create an ETS account and
                  log in.{" "}
                </li>
                <li>
                  Select the GRE you want to take and choose your preferred
                  location, date, and time.{" "}
                </li>
                <li>
                  Review your application thoroughly before making the payment
                  using a debit or credit card.
                </li>
                <li>
                  Ensure that you have received the confirmation email for your
                  registration.
                </li>
              </ul>
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase">
              ADVANTAGE OF GRE ONLINE COACHING
            </h3>
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              Many coaching centers offer test preparation courses. However,
              specialized online services offer many benefits to students
              preparing for the GRE:
            </p>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            {data.map((item, i) => (
              <section key={i} className="">
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mb-4">
                  {item.title}
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  {item.description}
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
                  {item.description_2}
                </p>
              </section>
            ))}
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full grid grid-cols-12 gap-8 mt-14">
            <section className="w-full col-span-12 md:col-span-7  mt-auto md:mt-14 ">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase :mb-4">
                WHY CHOOSE ROSTRUM EDUCATION FOR YOUR GRE COACHING?
              </h3>
              <br />
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
                Our wealth of educational resources and trained coaches are with
                you at every step of the way. They make sure that you have the
                perfect foundation to do well in entrance exams. Following are
                the benefits of trusting us with your GRE journey:
              </p>
            </section>
            <section className="w-full col-span-12 md:col-span-5">
              <Image
                src="/assets/gre/banner-4.png"
                width={471}
                height={471}
                alt="What makes Rostrum’s instructors unique"
                className="mx-auto"
              />
            </section>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            {instructors.map((item, i) => (
              <section className="" key={i}>
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mb-4">
                  {item.title}
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  {item.description}
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
                  {item.description_2}
                </p>
              </section>
            ))}
          </div>
          {/* SECTION END */}
        </div>
      </div>
      <CallToAction image={"/assets/call-action/about.png"} />
    </main>
  );
};

export default GRE;
