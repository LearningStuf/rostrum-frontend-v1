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
      title: "Versatile and adaptable",
      description: `Since the majority of those taking the GRE test are either working or studying, time is the most significant barrier when it comes to studying. Attending a time-consuming GRE classroom course is out of the question for you. If you choose these lessons, you will have to sacrifice two or three hours of your everyday routine to attend GRE classes. You also won’t be able to make up any lessons if you miss a few. Because you won’t be able to miss courses, you’ll have no choice but to go regardless of your time or energy.`,
      description_2: `GRE online coaching, on the other hand, allows you to choose your own schedule and intensity, study from the comfort of your own home, and miss lessons on days when you don’t have time.`,
    },
    {
      title: "Evaluation",
      description: `It might be tough for the tutor to find out your skills and limitations in a group of 30 pupils. Because the tutor must concentrate on the entire class, you will never be their first priority. Technology restructures the process for you with online GRE prep. Algorithms and adaptive technologies are used in online courses to adjust to your performance and assist you with your weak areas. As a result, you’ll receive a course that adjusts to your abilities.`,
      description_2: ``,
    },
    {
      title: "The most recent information",
      description: `The content at most coaching institutes is not updated every year. For many years, their lectures and sample papers remained the same. Content quality may not remain constant in online prep courses. It is powered by constantly updated software that incorporates the most up-to-date data and gives you the most up-to-date information.`,
      description_2: ``,
    },
    {
      title: "Keep track of your progress",
      description: `After taking a practice exam, the online GRE online coaching provides you with an instant result as well as an analysis. This allows you to track your progress and your mentor to assess your strengths and shortcomings.`,
      description_2: ``,
    },
  ];

  const instructors = [
    {
      title: "Perfect Foundation",
      description: ` We help you construct a good foundation of concepts by equipping you with resources and tutoring systematically. 
      We also undertake classroom exercises and employ various techniques during our GRE coaching to aid you in formulating a unique test taking strategy.`,
      description_2: ``,
    },
    {
      title: "Analytical Writing Skills",
      description: `If you are taking the GRE then you need to develop necessary language, writing, critical thinking and analytical skills to attempt both the sections in Analytical Writing. We understand that you can’t develop them overnight. Our tutors help you improve your analytical and writing skills using comprehensive methods and also by taking GRE mock tests.`,
      description_2: ``,
    },
    {
      title: "Subject Test Guidance",
      description: `GRE Subject Tests give your application an advantage over the others. Rostrum offers you coaching for all the 6 GRE Subject Tests, no matter from where you belong as we provide tutoring services all over the world including India and UAE. We assist you in choosing the right subjects which will help you showcase your strengths. We also provide additional support to improve your understanding of a subject. Personalised Subject Test Guidance is provided to all students during GRE preparation.`,
      description_2: ``,
    },
    {
      title: "GRE practise test series",
      description: `Ever wished you could obtain a complete drill-down analysis, from a histogram displaying your marks, time taken, and attempts vs. the top scorers to a line graph showing marks vs. percentile? Not only that, but we also take a lot of GMAT mock tests and practice previous years’ GRE question papers to help you improve your abilities with each try so you can give it your all on the big day. To start the journey with us, click on the button below.`,
      description_2: ``,
    },
  ];

  return (
    <main className="relative w-full h-auto">
      <HeaderBanner align="left" title={"GRE"} />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          {/* SECTION START */}
          <div className="relative w-full md:w-11/12  mx-auto flex items-start">
            <span className="text-secondary text-[128px] font-semibold -translate-y-12 ">
              “
            </span>
            <h6 className=" text-[22px] md:text-[28px] text-primary text-center font-semibold leading-tight">
              Over 600,000 applicants take the test every year, be best placed
              with us! We espouse a 90% entrance rate of students giving the
              test with our GRE prep from all over the world including India and
              UAE.
              <span className="text-secondary text-[128px] -translate-y-2 translate-x-6 self-end leading-none absolute">
                “
              </span>
            </h6>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto mt-14">
            <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
              THE GRE GENERAL TEST COMPUTES YOUR:
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
                  Skills that have been developed over a long period of time and
                  are not related to a specific field of study.
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  The test may include questions that are modified versions of
                  already published questions or of questions you may have
                  already seen on the test. Some modifications are considerable;
                  others are less evident.
                </p>
              </section>
            </div>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 mt-14">
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
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="">
              <h4 className="text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
                What is the duration of the GRE?
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                You should plan to sit for the exam for around four hours on GRE
                Test Day, including test-taking time and short breaks. This time
                does not include the time you check in at the testing center. It
                is critical to arrive on time and prepared. You should arrive at
                the testing center at least 30 minutes before your scheduled
                test time, according to ETS.
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
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
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
          </div>
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
              <h4 className="text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
                What is the best way to prepare for the GRE?
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                A strong GRE score will have a significant influence on your
                career; consequently, you should prepare well. An excellent
                technique is to use a range of study resources and assess your
                preparation for the test by taking GRE practice tests. The ideal
                method would be to use a combination of GRE online coaching, GRE
                practice exams, and looking through previous year’s GRE question
                paper. You must have methods and practices to follow in order to
                get a good GRE score. Set a goal for yourself and start
                preparing for the GRE following the advice below:
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                1. On a daily, weekly, and monthly basis, build core vocabulary.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                2. For Verbal Reasoning, Quantitative Reasoning, and Analytical
                Writing Assessment, see the official ETS guide books.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                3. Practice reading passages to learn how to interpret and form
                conclusions from them.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                4. Keep an eye on what’s going on in the world.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                5. Analyze sample GRE topics and come up with arguments.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                6. Analyze mathematical difficulties and plan your response.
              </p>
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
                7. Experiment with different types of arithmetic problems.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                8. Logic should always be applied before getting into
                sophisticated mathematical processes.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                9. Practice, practice, practice with GRE practice tests!
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                10. Take GRE mock tests.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                11. Examine and practice GRE question papers from past years.
              </p>
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase">
              GRE online
            </h3>
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              One of the most common concerns among GRE students is where to
              begin their preparation. Some students choose traditional private
              tuition, coaching sessions, or self-study, but online prep courses
              have recently become a popular choice among students. If you’re
              unsure whether to attend coaching courses or prepare online, here
              are a few reasons why online exam prep is becoming increasingly
              popular among test takers across the world. Here are some
              advantages of GRE online coaching versus classroom instruction to
              assist you make an informed decision.
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
                What makes Rostrum’s instructors unique
              </h3>
              <br />
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
                Here’s how you’d find us to be different
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
      <CallToAction />
    </main>
  );
};

export default GRE;
