import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner";
import CallToAction from "@/components/common/CallToAction";
import AnimationProvider from "@/components/common/AnimationProvider";

const Alevel = () => {
  const data = [
    {
      image: "/assets/a-level/icons/1.png",
      title: "Business",
      width: 166.74,
      height: 167.98,
    },
    {
      image: "/assets/a-level/icons/2.png",
      title: "Mathematics",
      width: 128.29,
      height: 136.48,
    },
    {
      image: "/assets/a-level/icons/3.png",
      title: "Sciences",
      width: 136.48,
      height: 127.97,
    },
    {
      image: "/assets/a-level/icons/4.png",
      title: "Languages",
      width: 136.48,
      height: 130.44,
    },
    {
      image: "/assets/a-level/icons/5.png",
      title: "Humanities &",
      nextLine: "Social Sciences",
      width: 156.25,
      height: 149.33,
    },
    {
      image: "/assets/a-level/icons/6.png",
      title: "English Language",
      nextLine: "and Literature",
      width: 134.28,
      height: 136.48,
    },
    {
      image: "/assets/a-level/icons/7.png",
      title: "Technical",
      nextLine: "& Creative",
      width: 118.46,
      height: 136.48,
    },
  ];
  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="left"
        title={"Cambridge A Level Program"}
        image={"/assets/header-banner/a-level.png"}
      />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          <div className="relative w-full  mx-auto flex items-start">
            <span className="text-secondary text-[128px]  -translate-y-12">
              “
            </span>
            <h6 className=" text-[22px] md:text-[28px] text-primary text-center font-semibold leading-tight">
            Rostrum's success is evident: 90% of our students achieve A* or A grades in the Cambridge Assessment International Education. Our expert tutors offer insider tips for mastering these tests. We can attract and assist a diverse student body from countries like India and the UAE.
            </h6>
            <span className="text-secondary text-[128px] translate-y-0 translate-x-0 md:translate-x-4 self-end rotate-180">
              “
            </span>
          </div>
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="mt-auto md:mt-18">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
              What Is The Cambridge A-Level Program?
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              Cambridge has been a leader in education since 1863. CAIEs (Cambridge International Exams) exams are globally respected. Thousands of students take them annually across 150+ countries. The Advanced Level program (A-Level) is designed for 16 to 19-year-olds. It improves subject understanding and life skills.

              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              Doing well in high school significantly increases your chances of getting into a good university. Some university programs need specific advanced subjects called 'facilitating topics'. The subjects strengthen your foundations. It also expands your options for which programs you can apply for.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              Cambridge A-level offers a diverse range of over 50 subjects, which are classified into different categories, such as:
              </p>
            </section>
            <section className="flex flex-col items-center">
              <Image
                src="/assets/a-level/banner-1.png"
                width={771}
                height={771}
                alt="What is the Cambridge A- level program?"
                // objectFit='containe'
                className="my-auto md:my-12"
              />
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full md:w-3/4 flex flex-wrap items-start justify-center mx-auto">
            {data.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center my-6 mx-8"
              >
                <div className="h-[160px]">
                  <Image
                    src={item.image}
                    width={item.width}
                    height={item.height}
                    alt={item.title}
                  />
                </div>
                <p className="text-[16px] md:text-[20px] text-primary  text-center font-bold">
                  {item.title}
                  {item.nextLine ? (
                    <>
                      <br />
                      {item.nextLine}
                    </>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-1 gap-12 mb-14">
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-0 md:mt-4">
            Students focus on their favorite subjects or try new ones. Grades range from A* to E, with A* being the best. A-level exams happen at the end of two years and cover all subjects. Getting a Cambridge A-level lets you apply to universities globally. It gives you a strong foundation to begin the next phase of your education.

            </p>
            {/* <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left  mt-0 md:mt-4">
              Students pursuing A levels are assessed at the end of the two-year
              course. They take all the subject papers in one examination
              series.
            </p>
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left  mt-0 md:mt-4">
              A Cambridge A level qualification opens doors to universities
              around the world. The course is deemed to be an excellent
              preparation for rigorous university life.
            </p> */}
          </div>
          <h4 className="uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
          Cambridge Assessment International Education
          </h4>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
            Cambridge Assessment International Education partners with schools in over 30 countries. It intends to promote comprehensive, globally recognized education. The network includes 10,000 schools across all seven continents. 

            </p>
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
            With international recognition, students can prepare for lifelong success. Cambridge IGCSE, O Level, AS and A Level, and Pre-U all need CAIEs. 
            </p>
          </div>

          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="mt-auto md:mt-18 order-2 md:order-1">
              <h4 className="uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
              When Do The Examinations Take Place?

              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              Cambridge exams happen twice yearly, in June and November, with results out in August and January, respectively. A-level students sit their exams at the end of their two-year course. A Cambridge A-level qualification opens doors to global universities. It prepares students well for university life.
              </p>
            </section>
            <section className="h-full flex flex-col items-center justify-center order-1 md:order-2">
              <Image
                src="/assets/a-level/banner-2.png"
                width={528}
                height={528}
                alt="When are the examinations going to be held?"
              />
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-12 gap-10 mt-14">
            <section className="h-full col-span-1 md:col-span-5">
              <div className='w-full h-[400px] md:h-full relative' >
              <Image
                src="/assets/a-level/banner-3.png"
                // width={690}
                // height={975}
                alt="Significance of Cambridge level program"
                className="h-full"
                fill
              />
              </div>
            </section>
            <section className="col-span-1 md:col-span-7">
              <h4 className="uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
              Significance Of Cambridge Level Program 
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              Cambridge International AS and A Levels have global recognition. It provides ample opportunities for admission to prestigious educational institutions. Students with A Level qualifications receive course credits, grants, and potentially full scholarships.

              </p>
              <br />
              <br />
              <h4 className="uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
              Worldwide Recognition Of The Cambridge A-Level Program

              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              A Level is an admission qualification by universities worldwide. It includes prestigious colleges in the UK, US, Canada, Singapore, Australia, and New Zealand. Achieving three fair passes at A level enables you to skip a year at universities in the UK, US, and Canada.
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-6 md:mt-20">
            <section>
              <h4 className="uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
              Advanced Placement Exams 2022
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              The Advanced Placement Tests in 2022 will take place in schools over two weeks in May: May 2–6 and May 9–13. AP Chinese and AP Japanese exams will be done on computers in class. Students should follow instructions from AP coordinators for test scheduling. Testing outside the designated May dates is not permitted, but late testing options are available if needed.

              </p>
            </section>
            <section>
              <h4 className="uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
              Late-Stage Testing
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              In cases of unforeseen circumstances, students might need to take tests later. Late testing employs different formats to ensure AP Exam security. Students participating in late testing at a school must take these exams on the designated late-testing days and times.
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto mt-14">
            <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
            How Will Rostrum Help You? 
            </h3>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-12 gap-10 mt-8">
              <section className="h-full col-span-1 md:col-span-7 order-2 md:order-1">
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight">
                Coursework Assistant

                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                For top A-level grades, doing well in exams and coursework is important. Each subject has its coursework style. Our team of tutors is located worldwide, including India and the UAE. They support students in completing coursework for subjects like Math, Physics, Chemistry, and more.
                </p>
                <br />
                <br />
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight">
                Strategic Learning

                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                We provide tutoring for all Cambridge A-level and AS Level subjects. Our tutors help you identify strengths and areas for improvement. With personalized attention, we help you overcome difficulties and achieve better results.

                </p>
                <br />
                <br />
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight">
                Achieve Targets

                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Achieving the 'target score' is essential to enter your dream university. Rostrum’s A Level tutors ensure you reach this goal by guiding your efforts effectively. We specialize in helping students attain an A* in A Levels through innovative exam skill development.

                </p>
              </section>
              <section className="h-full col-span-1 md:col-span-5 order-1 md:order-2">
                <Image
                  src="/assets/a-level/banner-4.png"
                  width={674}
                  height={988}
                  alt="Significance of Cambridge level program"
                  className="h-full"
                />
              </section>
            </div>
          </div>
          {/* SECTION END */}
        </div>
      </div>
      <CallToAction image={"/assets/call-action/home.png"} />
    </main>
  );
};

export default Alevel;
