import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner";
import CallToAction from "@/components/common/CallToAction";
import TopSchools from "@/components/common/TopSchools";

const BordingSchool = () => {
  const benefits = [
    {
      title: "Cultural Influences",
      description: `International education helps students develop a global outlook. It doesn't matter where they go to college. International schools foster cultural awareness by teaching about various countries and their people. Courses like the IB Diploma or Cambridge International Examinations enrich students' worldviews. Students' local culture shapes them even if they attend international schools. It should be celebrated! Students from India and the UAE are learning to take pride in their culture too.`,
      description_2: ``,
    },
    {
      title: "Opportunities For Growth",
      description: `Studying abroad offers unique opportunities beyond attending a local high school. It provides students with new perspectives. You can gain insights into the admission processes. It can also bring exposure to job prospects in another country. Such experiences benefits those considering further studies abroad. It can broaden their horizons and enhance their global awareness.
      `,
      description_2: ``,
    },
    {
      title: "Self Sustenance",
      description: `Boarding schools play a crucial role in fostering students' self-reliance and independence. `,
      description_2: `Students can learn valuable life skills. You will be in charge of daily activities, problem-solving, personal responsibilities, and more. Taking them head independently on can develop your cognitive and analytical abilities. `,
    },
    {
      title: "Small Classroom Sizes",
      description: `
      Boarding schools often have smaller class sizes. This allows mentors to focus closely on each student. This personalized attention enhances learning and ensures students grasp concepts thoroughly. It also fosters healthy peer interactions and discussions, boosting their academic performance. As a result, students excel in their exams. It can increase their chances of getting into top universities.
      `,
      description_2: ``,
    },
    {
      title: "Enhances Sense Of Personal Accountability",
      description: `Top boarding school students are more responsible than their peers in traditional schools. The rigorous curriculum demands hard work to uphold the school's high standards. It can set them apart from schools in places like India and the UAE.`,
      description_2: ``,
    },
    {
      title: "Academically Centred",
      description: `Choosing a boarding school provides a focused environment for students. You can concentrate on studies without hassle. The structured weekly schedule teaches time management and organization, especially during exams. The best boarding schools also offer diverse subjects and easy access to teachers. It supports students with academic queries; it is particularly beneficial during exam periods.`,
      description_2: ``,
    },
    {
      title: "Qualified Teachers",
      description: `
      Boarding schools have some of the best and most dedicated teachers. They view teaching as a passion, often spending extra hours with students beyond the classroom. Their goal is to prepare students for college and exams. They want to help them reach their full potential through immersive study sessions.

      `,
      description_2: ``,
    },
    {
      title: "Fewer Distractions",
      description: `
      Boarding school students can focus better without the usual distractions, such as TV, video games, and phones. This enables them to concentrate on their studies and excel academically.

      `,
      description_2: ``,
    },
  ];
  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="left"
        title={"Your Guide To Top Global Boarding Schools"}
        image={"/assets/header-banner/boarding.png"}
      />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          {/* Section Start */}

          <h3 className="text-center md:text-left text-[40px] md:text-[50px] text-primary font-bold leading-tight mt-2 mb-8 md:mb-auto uppercase">
            Curious About Boarding Schools? Here’s Why They’re Worth It!
          </h3>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
              Many parents opt for boarding schools for many reasons! They can
              provide their children with a focused, academically-rigorous
              environment. These schools excel in education and emphasize
              academic dedication.
            </p>
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
              Rostrum Education helps students worldwide. We have offices in
              India and the UAE where we work from to find suitable boarding
              schools. Safety is also a key benefit, with fewer students relying
              on public transit than day schools.
            </p>
          </div>
          {/* Section End */}

          {/* TODO!!!
          Issue regarding boarding school image issue
          completed 

           */}


          <section className="w-full h-[323px] rounded-3xl mt-14 relative">
            <Image
              src="/assets/boarding-school/home.png"
              alt="Description"
              layout="responsive" // Makes the image responsive
              width={1200} // Specify a width (aspect ratio)
              height={800} // Specify a height (aspect ratio)
              objectFit="cover" // Ensures the image covers the container
              className="rounded-3xl"
            />
          </section>

          {/* Section Start */}
          <h3 className="text-center md:text-left text-[40px] md:text-[50px] text-primary font-bold leading-tight mt-14 mb-8 md:mb-auto uppercase">
            Benefits Of Going To A Boarding School
          </h3>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {benefits.map((item, i) => (
              <div key={i} className="w-full h-auto">
                <div className="flex items-start justify-start relative">
                  <span className="block w-[30px] h-[43px] bg-secondary rounded-full absolute top-0 left-0"></span>
                  <h4 className="text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight ms-4 uppercase ps-6">
                    {item.title}
                  </h4>
                </div>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-left ps-auto md:ps-12 mt-2 md:mt-auto">
                  {item.description}
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-left ps-auto md:ps-12 mt-2 md:mt-auto">
                  {item.description_2}
                </p>
              </div>
            ))}
          </div>
          {/* Section End */}
          {/* Section Start */}
          <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight mt-14 mb-auto uppercase">
            How Does Rostrum Help?
          </h3>
          <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight  mt-4">
            At Rostrum, we ensure students stand out from the crowd by:
          </h6>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="mt-6">
              {/* <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mt-4">
                Application Assistance
              </h6> */}
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Assisting with the application process for boarding schools. We
                increase understanding the admissions standards and procedures
                for competitive institutions.
              </p>
              {/* <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mt-4">
                Tailored assistance in preparation for admissions interviews{" "}
              </h6> */}
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Helping parents and kids find the best-fitting schools. We offer
                choices based on their abilities, interests, personality traits,
                and natural talents.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Offering comprehensive support for students' academic and career
                development.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Our team has extensive experience in boarding schools. Hence, we
                can guide you through every stage of the application process. We
                focus on meeting your specific needs and boost your chances of
                admission to top private boarding schools.
              </p>
            </section>
            <section className="mt-4">
              <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mt-4">
                What's Included?
              </h6>
              <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight  mt-4">
                Our education experts will:
              </h6>
              <p></p>
              {[
                `Review your academic background and extracurricular activities.`,
                `Monitor and assess your progress.`,
                `Recommend schools that match your preferences and goals.`,
                `Help you create a standout application.`,
                // `Boost your self-confidence, professionalism, and interview skills.`,
                // `Advise on requesting references and recommendation letters.`,
              ].map((item, i) => {
                return (
                  <div className="flex items-start justify-start my-8" key={i}>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20.538"
                        height="19.358"
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
                    <p className="text-[16px] md:text-[20px] text-primary font-normal text-left ms-4">
                      {item}
                    </p>
                  </div>
                );
              })}
              {/* <p className="text-[16px] md:text-[20px] text-primary font-normal text-left ms-4">
                And we'll support you with anything else that comes up
                throughout!
              </p> */}
            </section>
          </div>
          {/* Section End */}
          <TopSchools />
          {/* Section Start */}
          <h3 className="text-center text-[40px] md:text-[50px] text-primary font-bold leading-tight mt-14 mb-8 md:mb-auto">
            Benefits of Attending a Boarding School in the UK
          </h3>
          {/* <h4 className="w-full md:w-[70%] mx-auto text-center text-[22px] md:text-[28px] text-primary font-bold leading-tight mt-4">
            Book a free session with us and start the journey for the betterment
            of your child!
          </h4> */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
              UK boarding schools offer a world-class education. They can
              prepare students for successful careers and college admissions.
              They must meet high government standards for teaching quality,
              facilities, and student care.
              <br />
              <br />
              Many UK boarding schools feature beautiful, historic buildings
              alongside modern classrooms. These exceptional facilities enhance
              students' English proficiency and make learning enjoyable.
            </p>

            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
              Switching from Conventional Schools to Boarding Schools
              <br />
              <br />
              If you want your child fully immersed in an educational
              environment or have a busy career, boarding schools are worth
              considering. They provide unique benefits and experiences that
              conventional day schools can't match.
              <br />
              <br />
              Sign up for a complimentary session and start your child's journey
              to success!
            </p>
          </div>
          {/* Section End */}
        </div>
      </div>
      <CallToAction image={"/assets/call-action/about.png"} />

      <br />
      <br />
      <br />
    </main>
  );
};

export default BordingSchool;
