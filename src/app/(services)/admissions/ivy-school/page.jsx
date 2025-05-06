import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner/Ivy";
import CallToAction from "@/components/common/CallToAction";

const IVY = () => {
  const ivySchools = [
    {
      name: `Penn`,
      logo: "/assets/ivy-schools/1.png",
      width: 231,
      height: 200,
    },
    {
      name: `Columbia`,
      logo: "/assets/ivy-schools/2.png",
      width: 200,
      height: 200,
    },
    {
      name: `Harvard`,
      logo: "/assets/ivy-schools/3.png",
      width: 182.13,
      height: 176.97,
    },
    {
      name: `Dartmouth`,
      logo: "/assets/ivy-schools/4.png",
      width: 203,
      height: 217,
    },
    {
      name: `Yale`,
      logo: "/assets/ivy-schools/5.png",
      width: 168.57,
      height: 177,
    },
    {
      name: `Cornell`,
      logo: "/assets/ivy-schools/6.png",
      width: 181,
      height: 181,
    },
    {
      name: `Brown`,
      logo: "/assets/ivy-schools/7.png",
      width: 169.13,
      height: 238.63,
    },
    {
      name: `Princeton`,
      logo: "/assets/ivy-schools/8.png",
      width: 169.87,
      height: 216.44,
    },
  ];

  const data = [
    {
      title: "Goal Alignment",
      description: `At Rostrum, we ensure you stay on track with application deadlines and goal setting, which is essential for Ivy League applications. Rostrum ensures no more deadline stress!`
    },
    {
      title: "SAT/ACT Preparation",
      description: ` Rostrum students are well-prepared to excel in standardized tests.`
    },
    {
      title: "Profile Building",
      description: `Our team of seasoned admissions officers helps you discover internships and competitions that enhance your profile and academic interests.`,
    },
    {
      title: "Research Project",
      description: `We connect you with research experts to guide you from brainstorming to the final report.`,
    },
    {
      title: "Applications",
      description: `Rostrum provides comprehensive support throughout your application journey, covering deadlines, content, and planning with careful attention.`,
    },
    {
      title: "Shortlisting Colleges/ Universities",
      description: `We help students narrow their college choices by offering personalized recommendations based on their field of study and preferred country.`,
    },
    {
      title: "Essays and LOR",
      description: `A well-written essay is vital for scholarships and standing out from others. Our team helps you brainstorm the best topic and works closely with you to ensure perfection.`,
    },
    {
      title: "Scholarships and Financial Aid",
      description: `We handle scholarship applications efficiently, ensuring timely document submission and thorough research to find available scholarships for your course and eligibility.`,
    },
  ];
  return (

    <main className="relative w-full h-auto">
      <HeaderBanner
        // title={"Ivy \nLeague \nConsultants"}
        align="right"
        image={"/assets/header-banner/ivy.png"}
      />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          {/* SECTION START */}
          <div className="w-full h-auto relative">
            <h3 className="text-center text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 mb-8 md:mb-auto uppercase">
              Top IVY League Schools
            </h3>
            <div className="w-full h-auto grid grid-cols-2 md:grid-cols-4 gap-8 mt-14">
              {ivySchools.map((item, i) => (
                <div key={i} className="w-full h-[250px] md:h-auto">
                  <div className="w-full h-auto md:h-[240px] flex items-center justify-end mx-auto">
                    <Image
                      src={item.logo}
                      width={item.width - 40}
                      height={item.height}
                      alt="University"
                      // objectFit='containe'
                      className="mx-auto self-end"
                    />
                  </div>
                  <h6 className="text-[22px] md:text-[28px] text-primary text-center font-bold leading-tight mt-4 md:mt-2">
                    {item.name}
                  </h6>
                  <h6 className="text-[22px] md:text-[28px] text-primary text-center font-bold leading-tight">
                    University
                  </h6>
                </div>
              ))}
            </div>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-12 gap-4 mt-14">
            <section className="col-span-12 md:col-span-5">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 mb-8 md:mb-auto">
                What is the Ivy League?
              </h3>
            </section>
            <section className="col-span-12 md:col-span-7">
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
                Ivy League colleges are the most prestigious schools, noted for their selectivity, academic excellence, and career opportunities. Their alumni include people who later became presidents and Nobel Prize winners. These universities provide many students with renowned education, research grants, and financial assistance.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
                Join a group of high achievers and start your journey to success at an Ivy League school.
              </p>
            </section>
          </div>
          <div className="w-full h-auto grid grid-cols-12 gap-4 mt-14">
            <section className="col-span-12 md:col-span-5">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 mb-8 md:mb-auto">
                Focus On These Specific Areas To Stand Out
              </h3>
            </section>
            <section className="col-span-12 md:col-span-7">
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
                The Ivy League universities look for students who are well-rounded and capable of bringing with them other skill sets. Although there is no foolproof technique, what you do in high school might help your chances of admission. Admissions officers assess your ability to impact and review your past achievements to gauge your potential. Concentrate on these four critical areas in high school to prepare for admission to these prestigious universities:
              </p>
            </section>
          </div>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section>
              <h4 className="text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
                Choose Your High School Courses Wisely
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                Ivy League universities look for students who take challenging classes aligned with their interests to demonstrate dedication. Plan your high school curriculum for academic opportunities. Admission isn't based on specific courses, but excelling in advanced placement and rigorous subjects prepares you for Ivy League education.
              </p>
            </section>
            <section>
              <h4 className="text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
                Make Meaningful Connections
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-4">
                Ivy League applications require two reference letters from teachers, counselors, coaches, or mentors. These letters provide insight into your academic success and demonstrate your potential role on campus. Develop strong relationships with your teachers and advisors in your senior year. Letters of recommendation reveal your intellectual vibrancy, personality, and life story, showcasing personal qualities beyond test scores and grades.
              </p>
            </section>
          </div>
          {/* SECTION END */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="relative w-full md:w-[90%] h-[300px] md:h-full mx-auto">
              <Image
                src="/assets/ivy-schools/left.png"
                // width={item.width}
                // height={item.height}
                alt="Goals and Character Qualities"
                fill={true}
                objectFit="contain"
              />
            </section>
            <section>
              <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
                Goals And Character Qualities
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Ivy League universities value individuality and initiative. Explore options by showing passion, dedication, and interest in your future pursuits. Take initiative to broaden your horizons and demonstrate energy and enthusiasm. High school is a chance to discover new interests and get involved in areas that intrigue you. What interests you? What sets you apart? How will you make a significant impact?

              </p>
            </section>
          </div>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="order-2 md:order-1">
              <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
                Extracurricular Activities And Interests
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Ivy League institutions value your extracurricular involvement. Show commitment, leadership, and growth from your experiences. Focus on meaningful activities rather than spreading yourself too thin—quality over quantity matters. Share how your involvement impacted a cause, team, or community and how it shaped your life.
              </p>
            </section>
            <section className="order-1 md:order-2 relative w-full h-auto md:h-full mx-auto">
              <Image
                src="/assets/ivy-schools/right.png"
                // width={item.width}
                // height={item.height}
                alt="Goals and Character Qualities"
                fill={true}
                objectFit="contain"
              />
            </section>
          </div>
          {/* SECTION END */}
        </div>
      </div>
      <CallToAction image={"/assets/call-action/about.png"} />
      <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
        {/* SECTION START */}
        <div className="w-full h-auto relative mt-14">
          <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
            How Will Rostrum Education Help You?
          </h4>
          <p className="w-full md:w-[85%] text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-2">
            Rostrum Education connects students with ex-admission officers and mentors from top US universities like Harvard and Stanford. With centers in India and the UAE, our structure effectively guides you through the admissions process; we provide comprehensive support throughout the application process.

          </p>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {data.map((item, i) => (
              <section key={i}>
                <h6 className="text-[20px] md:text-[24px] text-primary text-left font-bold leading-tight mt-4 md:mt-2 flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27.538"
                    height="26.358"
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
                  {item.title}
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                  {item.description}
                </p>
              </section>
            ))}
          </div>
        </div>
        {/* SECTION END */}
        <br />
        <br />
        <br />
      </div>
    </main>
  );
};

export default IVY;
