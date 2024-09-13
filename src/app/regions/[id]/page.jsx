import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner";
import CallToAction from "@/components/common/CallToAction";
import Scholarship from "@/components/common/Scholarship";

const data = [
  {
    question: "What is Rostrum Education?",
    answer:
      "Rostrum Education is a leading consultancy firm that provides expert guidance and support to students and parents seeking higher education opportunities. With a team of experienced consultants, Rostrum Education offers personalized services tailored to each student's unique needs.",
  },
  {
    question: "How can I apply for a scholarship?",
    answer:
      "You can apply for a scholarship through our official website by filling out the application form. Be sure to provide all required documents and meet the eligibility criteria before submitting.",
  },
  {
    question: "What are the eligibility criteria for scholarships?",
    answer:
      "The eligibility criteria vary depending on the specific scholarship. Generally, students must have a strong academic record, demonstrate leadership potential, and show a commitment to their education.",
  },
  {
    question: "Is financial aid available for international students?",
    answer:
      "Yes, financial aid is available for international students. We offer various scholarships and financial assistance programs to help students manage their tuition fees and other expenses.",
  },
];

const Region = () => {
  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="center"
        title={"Rostrum Education UNITED STATES"}
        image={"/assets/header-banner/gmat.png"}
      />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          <div className="relative w-full md:w-11/12  mx-auto flex items-start">
            <span className="text-secondary text-[128px] font-semibold -translate-y-20 md:-translate-y-12 absolute -left-0 md:-left-12">
              “
            </span>
            <h6 className=" text-[22px] md:text-[28px] text-primary text-center font-semibold leading-tight mt-4">
              Welcome to Rostrum Education USA. As your leading guide to
              academic excellence and securing entry into the world's most
              prestigious universities, we provide tailored mentorship to
              American students embarking on this thrilling academic journey.
              <span className="text-secondary text-[128px] -translate-y-12  -translate-x-8 md:translate-x-6 self-end leading-none absolute rotate-180 mt-2 md:mt-auto">
                “
              </span>
            </h6>
          </div>
          {/* SECTION 1 */}
          <div className="w-full h-auto grid grid-cols-12 gap-6 mt-14">
            <section className="col-span-12 md:col-span-8">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase">
                OUR EXCEPTIONAL SUCCESS RECORD SPEAKS VOLUMES
              </h3>
              <section>
                <h3 className="text-[40px] md:text-[55px] text-secondary font-bold leading-none mt-5 md:mt-2">
                  750+
                </h3>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left">
                  students admitted globally, including a remarkable
                </p>
              </section>
              <section>
                <h3 className="text-[40px] md:text-[55px] text-secondary font-bold leading-none mt-5 md:mt-2">
                  750+
                </h3>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left">
                  students admitted globally, including a remarkable
                </p>
              </section>
              <section>
                <h3 className="text-[40px] md:text-[55px] text-secondary font-bold leading-none mt-5 md:mt-2">
                  750+
                </h3>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left">
                  students admitted globally, including a remarkable
                </p>
              </section>
            </section>
            <section className="col-span-12 md:col-span-4">
              <Image
                src="/assets/gmat/banner-1.png"
                width={471}
                height={471}
                alt="What is the GMAT?"
              />
            </section>
          </div>
          {/* SECTION 2 */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section>
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase">
                YOUR ROUTE TO SUCCESS AS A USA STUDENT
              </h3>
              <div>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  <b>University Selection</b>
                  <br />
                  We demystify complex admission processes, tailoring your
                  application to meet the high standards of globally recognized
                  universities.
                </p>
              </div>
              <div>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  <b>University Selection</b>
                  <br />
                  We demystify complex admission processes, tailoring your
                  application to meet the high standards of globally recognized
                  universities.
                </p>
              </div>
              <div>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  <b>University Selection</b>
                  <br />
                  We demystify complex admission processes, tailoring your
                  application to meet the high standards of globally recognized
                  universities.
                </p>
              </div>
              <div>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  <b>University Selection</b>
                  <br />
                  We demystify complex admission processes, tailoring your
                  application to meet the high standards of globally recognized
                  universities.
                </p>
              </div>
            </section>
            <section className="flex items-center justify-center">
              <Image
                src="/assets/gmat/banner-1.png"
                width={471}
                height={471}
                alt="What is the GMAT?"
              />
            </section>
          </div>
          {/* SECTION 3 */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-12 gap-10 mt-14">
            <section className="h-full col-span-1 md:col-span-5">
              <div className="w-full h-[400px] md:h-full relative">
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
                Undergraduate Admission Requirements
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                For USA students, a strong academic record, especially in
                standardised tests and high school performance, is crucial for
                undergraduate courses. High school performance, including GPA,
                class rank, and the rigour of courses such as AP or IB programs,
                is crucial for university admissions, showcasing a student's
                ability to handle challenging academic material. Beyond
                academics, personal statements, recommendation letters, and
                extracurricular activities play a vital role, providing insights
                into a student's motivation, character, and well-roundedness.
              </p>
            </section>
          </div>
          {/* SECTION 4 */}
          <Scholarship data={data} />
          {/* SECTION 5 */}
          <div className="mt-14">
            <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase">
              Process for Students from the USA to Get into Uk Universities
            </h3>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <section>
                <div>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                    <b>University Selection</b>
                    <br />
                    We demystify complex admission processes, tailoring your
                    application to meet the high standards of globally
                    recognized universities.
                  </p>
                </div>
                <div>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                    <b>University Selection</b>
                    <br />
                    We demystify complex admission processes, tailoring your
                    application to meet the high standards of globally
                    recognized universities.
                  </p>
                </div>
                <div>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                    <b>University Selection</b>
                    <br />
                    We demystify complex admission processes, tailoring your
                    application to meet the high standards of globally
                    recognized universities.
                  </p>
                </div>
                <div>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                    <b>University Selection</b>
                    <br />
                    We demystify complex admission processes, tailoring your
                    application to meet the high standards of globally
                    recognized universities.
                  </p>
                </div>
              </section>
              <section className="flex items-center justify-center">
                <Image
                  src="/assets/gmat/banner-1.png"
                  width={471}
                  height={471}
                  alt="What is the GMAT?"
                />
              </section>
            </div>
          </div>
          {/* SECTION 6 */}
          <div className="mt-14">
            <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase">
              NAVIGATING APPLICATIONS AND CRAFTING A DISTINCTIVE PROFILE
            </h3>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {Array(4)
                .fill()
                .map((item) => (
                  <section>
                    <div className="w-full relative mt-4">
                      <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                      <h6 className="text-[20px] md:text-[24px] text-primary text-left font-bold leading-tight mt-4 md:mt-2 ps-6">
                        INDIVIDUALISED SUPPORT
                      </h6>
                    </div>
                    <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                      Rostrum mentors offer personalised guidance, fine-tuning
                      your applications for both local and international
                      universities. Expert advice is provided for crafting
                      Statements of Purpose (SOP) and selecting impactful Letter
                      of Recommendation (LOR) writers.
                    </p>
                  </section>
                ))}
            </div>
          </div>
        </div>
      </div>
      <CallToAction image={"/assets/call-action/about.png"} />
    </main>
  );
};

export default Region;
