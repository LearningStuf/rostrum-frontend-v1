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
        title={"CAMBRIDGE A LEVEL PROGRAM"}
        image={"/assets/header-banner/a-level.png"}
      />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          <div className="relative w-full  mx-auto flex items-start">
            <span className="text-secondary text-[128px]  -translate-y-12">
              “
            </span>
            <h6 className=" text-[22px] md:text-[28px] text-primary text-center font-semibold leading-tight">
              90% of rostrum students score an A* or A in the Cambridge
              International Examination. Our highly qualified tutors know and
              provide the cues and tips to score better. We have students from
              all over the world including India and the UAE.
            </h6>
            <span className="text-secondary text-[128px] translate-y-0 translate-x-0 md:translate-x-4 self-end rotate-180">
              “
            </span>
          </div>
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="mt-auto md:mt-18">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
                What is the Cambridge A- level program?
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Cambridge is the world’s leading authority on teaching,
                learning, and evaluation of the English language. Since 1863,
                the University of Cambridge has provided worldwide standardised
                educational assessment. CIE (University of Cambridge
                International Examinations) is the world’s largest provider of
                international credentials for students aged 14 to 19. Every
                year, thousands of applicants take the Cambridge exams in over
                150 countries.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The Cambridge Advanced Level A Level program is an international
                curriculum developed by the Cambridge International
                Examinations. It is an advanced two-year pre-university program
                designed for 16 to 19 year olds. It helps students understand
                subjects better. It encourages students to develop the necessary
                life skills.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Cambridge A level offers students over 50 subjects to choose
                from.
                <br />
                These subjects can be broadly classified into:
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
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                If you studied a certain topic in high school and want to pursue
                it at university, you have a strong chance of being accepted.
                Assume you have high grades in the topic, and presto! That’s a
                bonus!
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Certain degree programs may need ‘facilitating topics,’ which
                are higher level studies. When you choose two such enabling
                topics in high school, you have a wide range of university
                options.
              </p>
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
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-0 md:mt-4">
              Students may specialize in the subject they prefer or may choose
              different subjects. The grades awarded to students range from A*
              to E, with A* being the highest
            </p>
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left  mt-0 md:mt-4">
              Students pursuing A levels are assessed at the end of the two-year
              course. They take all the subject papers in one examination
              series.
            </p>
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left  mt-0 md:mt-4">
              A Cambridge A level qualification opens doors to universities
              around the world. The course is deemed to be an excellent
              preparation for rigorous university life.
            </p>
          </div>
          <h4 className="uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
            Cambridge International Examinations
          </h4>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              Cambridge International Examinations helps students develop an
              educated curiosity and a lifelong enthusiasm for studying,
              preparing them for life. The Cambridge learning network includes
              almost 10,000 schools. North America, Latin America, the United
              Kingdom and Ireland, Europe, the Middle East and North Africa,
              Sub-Saharan Africa, Northeast Asia, South Asia, and Southeast Asia
              & Pacific are the nine regions it operates in. Cambridge has
              representation in every area, and it is a valued education partner
              to governments in over 30 nations.
            </p>
            <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
              Cambridge’s foreign education program and certificates include all
              levels of education, including elementary, secondary, and
              pre-university. They have a proven track record of offering
              excellent education, employment, and life preparation.{" "}
              <b>
                Cambridge IGCSE, Cambridge O Level, Cambridge International AS
                and A Level, and Cambridge Pre-U are internationally recognized
                qualifications that open doors for Cambridge students.
              </b>
            </p>
          </div>

          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="mt-auto md:mt-18 order-2 md:order-1">
              <h4 className="uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
                When are the examinations going to be held?
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                In most cases, exams are held twice a year, in June and
                November. Those who take the June exam may receive their results
                in August, while those who take the November exam may receive
                their results in January. Students pursuing A levels are
                assessed at the end of the two-year course. They take all the
                subject papers in one examination series. A Cambridge A level
                qualification opens doors to universities around the world. The
                course is deemed to be an excellent preparation for rigorous
                university life.
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
                Significance of Cambridge level program
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Cambridge International AS and A Levels are recognized by
                institutions in the United Kingdom and throughout the world,
                opening up a world of opportunities for you. You will have the
                finest opportunities to gain admission to reputable worldwide
                educational institutes.
                <br />
                Course credits and grants are available to students with A Level
                credentials. Brighter students may be eligible for full
                scholarships.
              </p>
              <br />
              <br />
              <h4 className="uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
                Worldwide recognition of the Cambridge A level program
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                A Level is accepted as an admission qualification by
                universities all around the world, including those in the United
                Kingdom, the United States, Canada, Singapore, Australia, and
                New Zealand.
                <b className="font-bold">
                  You can skip a year at universities in the UK, the US, and
                  Canada if you get three fair passes at A level.
                </b>
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-6 md:mt-20">
            <section>
              <h4 className="uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
                Advanced placement exams 2022
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The Advanced Placement Tests in 2022 will be given in schools as
                paper-and-pencil exams over the course of two weeks in May: May
                2–6 and May 9–13.
                <br />
                AP Chinese and AP Japanese exams will be given in class on
                computers, as usual. The AP coordinators are in charge of
                informing students about when and where they should report for
                their tests. Under no circumstances is early testing or testing
                at times other than those set by College Board authorized. If
                students are unable to test within the first two weeks of May,
                late testing dates are available.
              </p>
            </section>
            <section>
              <h4 className="uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
                Late-stage testing{" "}
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Students may be required to take tests late due to unforeseen
                situations. Late testing uses various formats to protect the
                security of AP Exams. All students who take part in late testing
                at a particular school must take these other tests on the
                planned late-testing days and hours.
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className="w-full h-auto mt-14">
            <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
              How will Rostrum help you?
            </h3>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-12 gap-10 mt-8">
              <section className="h-full col-span-1 md:col-span-7 order-2 md:order-1">
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight">
                  Coursework Assistance
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  The key to getting good grades in the A level is to balance
                  your performance in both, written examinations and coursework.
                  The form or type of coursework is different for every subject.
                  Our team of A Level tutors based all over the world, including
                  India and the UAE, assist students in planning and conducting
                  coursework in all subjects such as A Level Math, A Level
                  Physics, A Level Chemistry and more.
                </p>
                <br />
                <br />
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight">
                  Strategic Learning
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  We offer tutoring services for all the course subjects of the
                  Cambridge A level and AS Level. Our A Level tutors help you
                  outline your areas of strengths and improvement in a subject.
                  Our personalized care ensures that you overcome your
                  difficulties and achieve progressive results.
                </p>
                <br />
                <br />
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-tight">
                  Achieve Targets
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  The first step to gain entry into your dream university is to
                  achieve the ‘target score!’ Our A Level tutors make certain
                  that you achieve the ‘target score’ by channelizing your
                  efforts in the right way. We help students get an A* in A
                  Levels. They use innovative approaches to develop exam skills.
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
