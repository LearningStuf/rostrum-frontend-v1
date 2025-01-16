import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner";
import CallToAction from "@/components/common/CallToAction";
import AnimationProvider from "@/components/common/AnimationProvider";

const BusinessSchool = () => {
  const data = [
    {
      title: "Profile Evaluation",
      description: `Anyone aspiring to study at the top business schools has a profile with their personal achievements and goals. Our experts assess their unique needs and guide them accordingly.`,
      description_2: `The personal profile includes their past academic profile, grades, class history, achievements, qualifications, and any academic goals. This step will provide a starting point for selecting the perfect school for you and your journey to prepare for the application process.`,
      image: "/assets/business-school/1.svg",
    },
    {
      title: "Setting Your Goals",
      description: `We offer detailed individualized discussions between our advisors and our applicants. It can help to discuss some vital information with your counsellor. Your preferred courses, peers you want around you, and how much time you can devote to classes is important to make a decision. The decision of which school to go to becomes easier. `,
      image: "/assets/business-school/2.svg",
    },
    {
      title: "Professional Profile Development: What Makes You Unique?",
      description: `The top B-schools assess a person’s academic achievements. They shortlist based on the applicants and their activities outside academics. Hence, it’s important to curate your profile in a way that is striking to the admissions boards. `,
      description_2: `To be a worthy candidate, one must present the most well-refined version of themselves. Showing good leadership, teamwork, dedication, and practical skills will enhance your application. Do make sure to highlight leadership roles in various clubs, entrepreneurial ventures, internships, volunteer work, research projects, etc.`,
      description_3: `Our qualified mentors work closely with you to ensure your profile is presented in a way that highlights your most desirable skills. Not only this, but they also help you build your application in areas where it is lacking. To help your application stand out among the rest, we will help you develop a solid profile and application.`,
      image: "/assets/business-school/3.svg",
    },
    {
      title:
        "Enhancing Your Application: From Your Résumé to Your Admission Essay",
      description: `There are two components of your B-school application that you need to elevate to stand out in a crowd of overachievers: `,
      description_2: `An impactful resume is a key component in your MBA application. Remember that even a long list of achievements and experiences can get lost in the crowd if your resume is chaotic and haphazard. At Rostrum Education, our mentors will help you develop a well-crafted resume. It can highlight your professionalism, relevant experience, and differentiates you from other applicants.`,
      description_3: `A good essay or SOP provides valuable insights into who you are as a person and showcases your potential as a future business leader. Our experienced mentors will help you create an excellent essay. It can effectively convey your passion and commitment to the admission committees. Plus, it demonstrates your proficiency, clarity of thought, and critical thinking skills.`,
      image: "/assets/business-school/4.svg",
    },
    // {
    //   title: "Essays, SOPs And LORs",
    //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `,
    //   image: "/assets/business-school/5.svg",
    // },
    {
      title: "Preparing For GMAT",
      description: `GMAT scores play an important role when applying for business schools. Different schools have different prerequisites when it comes to GMAT results. Before you begin preparation, you should take a practice test. It can help to identify your strengths and weaknesses and proceed accordingly.`,
      description_2: `Rostrum offers a unique teaching approach for all necessary tests. We know you already have a lot on your plate! So, our expert educators use simplified methods proven to maximize learning outcomes. We also minimize student effort to avoid burn out. `,
      image: "/assets/business-school/6.svg",
    },
    {
      title: "Training For The Interview Process",
      description: `Before being accepted into the B-school of your choice, you must sit through an interview process. At Rostrum Education, we specialize in helping our candidates shine during their interviews.  `,
      description_2: `Our mentors will provide customized coaching for interviews. It can enhance your communication skills and refine your responses and body language. With our tailored approach and wealth of proven strategies and tips, we will work together. This ensures that you are well-equipped to impress the interviewers. You can secure your well-deserved spot in the school of your choice with us. `,
      description_3: `So what are you waiting for? Contact Rostrum Education now to start your journey towards securing admission to the top business school of your choice!`,
      image: "/assets/business-school/7.svg",
    },
  ];
  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="left"
        title={"Secure Admissions To Top Business Schools Around The World"}
        image={"/assets/header-banner/business.png"}
      />

      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          <p className="text-[20px] text-primary font-normal text-center md:text-left mt-8">
            The best business schools in the world all have very low acceptance
            rates. For example, Harvard Business School, Wharton, MIT, and
            Stanford Graduate School of Business accept 10 to 20% of
            applications.
            <br />
            <br />
            This is due to the large influx of extremely qualified applicants
            each year.
            <br />
            <br />
            The application process might be competitive, but Rostrum Education
            can make a difference. We can help students secure admission into
            the world's best business programs.
          </p>
          {data.map((item, i) => (
            <div
              key={i}
              className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto grid grid-cols-1 md:grid-cols-2  gap-8"
            >
              <AnimationProvider
                className={`w-full h-full flex flex-col items-center md:items-start justify-center
            ${i % 2 === 0 ? "order-2 md:order-1" : "order-2 md:order-2"}
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
                  {item?.description_2}
                </p>
                <p className="text-[20px] text-primary font-normal text-center md:text-left mt-8">
                  {item?.description_3}
                </p>
                {/* </section> */}
              </AnimationProvider>
              <AnimationProvider
                className={`w-full h-auto relative p-2 order-1 flex items-center justify-center
            ${i % 2 === 0 ? "order-1 md:order-2" : "order-1 md:order-1"}
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
            </div>
          ))}
        </div>
      </div>
      <CallToAction image={"/assets/call-action/home.png"} />

      <br />
      <br />
      <br />
    </main>
  );
};

export default BusinessSchool;
