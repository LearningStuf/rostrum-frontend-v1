import React from "react";
import HeaderBanner from "@/components/common/HeaderBanner";
import CallToAction from "@/components/common/CallToAction";
import TopSchools from "@/components/common/TopSchools";

const BordingSchool = () => {
  const benefits = [
    {
      title: "Cultural influences",
      description: `International education will help pupils develop a global outlook no matter where they go to college. International schools encourage students to learn about other cultures throughout the world by teaching them about various countries and their people. Students learn more about other cultures and the globe outside of the classroom by taking courses like the IB Diploma or Cambridge International Examinations.`,
      description_2: `Regardless of whether or not they attend an international school in their hometown, students are heavily impacted by the culture in which they grew up, especially in countries like India and UAE.`,
    },
    {
      title: "Opportunities for growth",
      description: `Being autonomous isn’t as important, and the experience 
      is fairly comparable to attending a regular high school in 
      the region. In spite of this, living abroad offers students 
      a unique opportunity to learn and broaden their 
      perspectives. High school students can also learn about 
      the university process and job prospects in the nation 
      they’ve temporarily immigrated too. This is especially useful 
      for individuals who wish to continue their studies in a 
      foreign nation. Overall, studying abroad broadens students’ 
      horizons and awareness of how the world operates outside 
      of their own culture and neighbourhood.
      `,
      description_2: ``,
    },
    {
      title: "Self Sustenance",
      description: `Boarding Schools are really helpful in making students self-
      reliant and independent. Throughout the day, every activity 
      is done by them without the involvement of any outside 
      body. It teaches them how to manage time better, perform 
      domestic chores, be in charge of their possessions, and learn 
      how to maturely handle situations on their own since they 
      don’t always have access tohome. Their cognitive reasoning 
      and analytical functioning become stronger.
      `,
      description_2: ``,
    },
    {
      title: "Small Classroom Sizes",
      description: `There are usually fewer students at a boarding school 
      which helps mentors to pay attention more acutely. This 
      helps in giving more attention to individual learning and 
      the teachers are able to provide more material to the 
      students. Detailed attention allows students to 
      comprehend the concepts better. The students are able to 
      interact among themselves which caters to healthy 
      discussions as well.
      `,
      description_2: ``,
    },
    {
      title: "Enhances sense of personal accountability",
      description: `Students who go to boarding school are more responsible than those who go to a traditional school. The curriculum in boarding schools is extremely strict, and students are expected to work hard to maintain the school’s excellent reputation unlike India and the UAE.
      `,
      description_2: ``,
    },
    {
      title: "Academically Centred",
      description: `
      One of the primary reasons to select a Boarding School is 
the environment it provides, which allows a student to 
centre their minds solely around studies. This helps the 
student to be organised and teaches them time allocation. 
They also offer a wider range of subject choices.
      `,
      description_2: ``,
    },
    {
      title: "Qualified Teachers",
      description: `
      Boarding schools have some of the best and most competent 
teachers. These teachers do not approach what they do as a 
job but as something that they are passionate about, given 
the number of hours that they put in with their students even 
after class hours. Their ultimate goal is to help students be 
well-prepared for college and act on their boards.
      `,
      description_2: ``,
    },
    {
      title: "FEWER Distractions",
      description: `
      Boarding school students can focus more effectively because they are free of conventional distractions like television, video games and phones. This helps them focus more on school and helps them do better academically
      `,
      description_2: ``,
    },
  ];
  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="left"
        title={"PREPARE FOR TOP BOARDING SCHOOLS IN THE WORLD"}
        image={"/assets/header-banner/boarding.png"}
      />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          {/* Section Start */}

          <h3 className="text-center md:text-left text-[40px] md:text-[50px] text-primary font-bold leading-tight mt-2 mb-8 md:mb-auto uppercase">
            To start off, the question that pops is why choose a boarding
            school?
          </h3>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
              Parents prefer to send their children to study at a boarding
              school when they require their child to be more study-oriented and
              face challenging academics. A boarding school helps a student’s
              mind to be centred around studies. Boarding schools have a record
              of having an excellent education model and Rostrum helps students
              from all over the world, including but not limited to, India and
              UAEIt highly depends on the student’s preference of the country,
              but there are a lot of options that can be considered around the
              world. It’s reasonable to say that boarding schools are safer than
              day schools since they have fewer pupils who use public transit.
            </p>
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
              Despite COVID-19, several residential schools remained operational
              in 2020. These universities are like little bubbles, with almost
              all of the students and faculty remaining on campus. As the
              COVID-19 epidemic continues to spread, youngsters face an uphill
              battle in developing the social skills they’ll need later in life.
              Zoom or Microsoft Teams can only imitate in-class teaching and
              learning to a certain amount, therefore parents all around the
              world increasingly think that boarding schools are good for their
              children’s social-emotional development.
            </p>
          </div>
          {/* Section End */}

          <section className="w-full h-[323px] bg-semi-gray rounded-3xl mt-14"></section>

          {/* Section Start */}
          <h3 className="text-center md:text-left text-[40px] md:text-[50px] text-primary font-bold leading-tight mt-14 mb-8 md:mb-auto uppercase">
            Benefits Of Going To A Boarding School
          </h3>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {benefits
              .map((item, i) => (
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
            How Does The Rostrum Help?
          </h3>
          <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight  mt-4">
            We make sure that students stand out from the crowd:{" "}
          </h6>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="mt-6">
              <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mt-4">
                Application Assistance
              </h6>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                For parents and kids who want to locate the best-fitting
                schools. Our team has decades of experience working with
                boarding schools. When it comes to finding the right school for
                a student, we take into account all of their abilities,
                interests, personality traits, and natural abilities.
              </p>
              <br />
              <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mt-4">
                Tailored assistance in preparation for admissions interviews{" "}
              </h6>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Boarding/day schools and universities across the United States
                are requiring overseas students to prepare for third-party
                interviews. For Vericant or in-person interviews, we provide
                mock sessions. Due to the overwhelming number of overseas
                students applying to US boarding schools, admissions staff place
                an increasing emphasis on the student interview as a way to
                verify English proficiency and determine a student’s fit.
              </p>
            </section>
            <section className="mt-4">
              <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight mt-4">
                What’s Included? Our education experts…{" "}
              </h6>
              {[
                `Examine and analyse your academic background and extracurricular engagement`,
                `Track and evaluate your academic and extracurricular development`,
                `Propose schools based on your preferences, aspirations and successes`,
                `Give advice on how to ask for references and letters of recommendation`,
                `Help you craft an outstanding `
              ]
                .map((item, i) => {
                  return (
                    <div
                      className="flex items-start justify-start my-8"
                      key={i}
                    >
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
            </section>
          </div>
          {/* Section End */}
          <TopSchools />
          {/* Section Start */}
          <h3 className="text-center text-[40px] md:text-[50px] text-primary font-bold leading-tight mt-14 mb-8 md:mb-auto">
            What are the benefits of attending a boarding school in the United
            Kingdom?
          </h3>
          <h4 className="w-full md:w-[70%] mx-auto text-center text-[22px] md:text-[28px] text-primary font-bold leading-tight mt-4">
            Book a free session with us and start the journey for the betterment
            of your child!
          </h4>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
              Boarding schools in the United Kingdom provide students with a
              world-class education, enabling them to further their careers and
              attend college. All boarding schools in the United Kingdom are
              required by law to fulfil high government requirements for the
              quality of their teaching, facilities, and student care.
            </p>
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
              Many boarding schools in the United Kingdom blend gorgeous,
              century-old structures with a mix of contemporary and traditional
              classrooms. Students’ English proficiency increases as a result of
              the outstanding facilities, which combine to make living and
              learning an enjoyable experience
            </p>
          </div>
          {/* Section End */}
        </div>
      </div>
      <CallToAction 
        image={'/assets/call-action/about.png'}
      />

      <br />
      <br />
      <br />
    </main>
  );
};

export default BordingSchool;
