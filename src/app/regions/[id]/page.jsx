import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner";
import CallToAction from "@/components/common/CallToAction";
import Scholarship from "@/components/common/Scholarship";
import Fallback from "@/components/common/Fallback";
import { SINGLE_COUNTRY } from "@/quries";
import { URL } from "@/utils/SERVER_URL";
import { getAssetUrl } from "@/utils/getAssetUrl";


//TODO 

// const data = [
//   {
//     question: "What is Rostrum Education?",
//     answer:
//       "Rostrum Education is a leading consultancy firm that provides expert guidance and support to students and parents seeking higher education opportunities. With a team of experienced consultants, Rostrum Education offers personalized services tailored to each student's unique needs.",
//   },
//   {
//     question: "How can I apply for a scholarship?",
//     answer:
//       "You can apply for a scholarship through our official website by filling out the application form. Be sure to provide all required documents and meet the eligibility criteria before submitting.",
//   },
//   {
//     question: "What are the eligibility criteria for scholarships?",
//     answer:
//       "The eligibility criteria vary depending on the specific scholarship. Generally, students must have a strong academic record, demonstrate leadership potential, and show a commitment to their education.",
//   },
//   {
//     question: "Is financial aid available for international students?",
//     answer:
//       "Yes, financial aid is available for international students. We offer various scholarships and financial assistance programs to help students manage their tuition fees and other expenses.",
//   },
// ];

const Region = async ({ params }) => {
  let id = params?.id;
  let result;
  let serverError;
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: SINGLE_COUNTRY, // The GraphQL query
        variables: {
          id: id, // Pass the ID as a variable
        },
      }),
      next: { revalidate: 0 },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();
    let country = data?.countries?.data[0];
    result = country;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    serverError = error;
  }

  let data = result ? result?.attributes : null;

  if (serverError) {
    return (
      <Fallback message="We are sorry, but we couldn't load the country information at this moment. Please try again later." />
    );
  }

  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="center"
        title={data?.title}
        image={"/assets/header-banner/gmat.png"}
      />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          <div className="relative w-full md:w-11/12  mx-auto flex items-start">
            <span className="text-secondary text-[128px] font-semibold -translate-y-20 md:-translate-y-12 absolute -left-0 md:-left-12">
              “
            </span>
            <h6 className=" text-[22px] md:text-[28px] text-primary text-center font-semibold leading-tight mt-4">
              {data?.description}
              <span className="text-secondary text-[128px] -translate-y-12  -translate-x-8 md:translate-x-6 self-end leading-none absolute rotate-180 mt-2 md:mt-auto">
                “
              </span>
            </h6>
          </div>
          {/* SECTION 1 */}
          <div className="w-full h-auto grid grid-cols-12 gap-6 mt-14">
            <section className="col-span-12 md:col-span-8">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase">
                {data?.statsSection?.title}
              </h3>
              <section>
                <h3 className="text-[40px] md:text-[55px] text-secondary font-bold leading-none mt-5 md:mt-2">
                  {data?.statsSection?.heading1}
                </h3>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left">
                  {data?.statsSection?.description1}
                </p>
              </section>
              <section>
                <h3 className="text-[40px] md:text-[55px] text-secondary font-bold leading-none mt-5 md:mt-2">
                  {data?.statsSection?.heading2}
                </h3>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left">
                  {data?.statsSection?.description2}
                </p>
              </section>
              <section>
                <h3 className="text-[40px] md:text-[55px] text-secondary font-bold leading-none mt-5 md:mt-2">
                  {data?.statsSection?.heading3}
                </h3>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left">
                  {data?.statsSection?.description3}
                </p>
              </section>
            </section>
            <section className="col-span-12 md:col-span-4">
              <Image
                src={getAssetUrl(data?.statsSection?.image)}
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
                {data?.successSection?.title}
              </h3>
              <div>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  <b>{data?.successSection?.text1}</b>
                  <br />
                  {data?.successSection?.description1}
                </p>
              </div>
              <div>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  <b>{data?.successSection?.text2}</b>
                  <br />
                  {data?.successSection?.description2}
                </p>
              </div>
              <div>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  <b>{data?.successSection?.text3}</b>
                  <br />
                  {data?.successSection?.description3}
                </p>
              </div>
              <div>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  <b>{data?.successSection?.text4}</b>
                  <br />
                  {data?.successSection?.description4}
                </p>
              </div>
            </section>
            {/* <section className="flex items-center justify-center">
              <Image
                src={getAssetUrl(data?.successSection?.image)}
                width={471}
                height={471}
                alt="What is the GMAT?"
              />
            </section> */}

            {/* changes by hassan to test out 2 coloumns */}

            <section className="grid grid-rows-2 gap-4">
              {/* <div className="bg-gray-100 p-4"> */}
              <Image
                src={getAssetUrl(data?.successSection?.image)}
                width={471}
                height={471}
                alt="What is the GMAT?"
              />
              {/* </div> */}
              <div className="flex flex-col space-y-4">
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
                  <b>{data?.successSection?.text4}</b>
                  <br />
                  {data?.successSection?.description4}
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
                  <b>{data?.successSection?.text4}</b>
                  <br />
                  {data?.successSection?.description4}
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left">
                  <b>{data?.successSection?.text6}</b>
                  <br />
                  {data?.successSection?.description6}
                </p>
              </div>
            </section>


          </div>
          {/* SECTION 3 */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-12 gap-10 mt-14">
            <section className="h-full col-span-1 md:col-span-5">
              <div className="w-full h-[400px] md:h-full relative">
                <Image
                  src={getAssetUrl(data?.requirementSection.image)}
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
                {data?.requirementSection.title}
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                {data?.requirementSection.description}
              </p>
            </section>
          </div>
          {/* SECTION 4 */}
          <Scholarship data={data?.faqSection} />
          {/* SECTION 5 */}
          <div className="mt-14">
            <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase">
              {data?.processSection?.title}
            </h3>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <section>
                <div>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                    <b>{data?.processSection?.text1}</b>
                    <br />
                    {data?.processSection?.description1}
                  </p>
                </div>
                <div>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                    <b>{data?.processSection?.text2}</b>
                    <br />
                    {data?.processSection?.description2}
                  </p>
                </div>
                <div>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                    <b>{data?.processSection?.text3}</b>
                    <br />
                    {data?.processSection?.description3}
                  </p>
                </div>
                <div>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                    <b>{data?.processSection?.text4}</b>
                    <br />
                    {data?.processSection?.description4}
                  </p>
                </div>
              </section>
              <section className="flex items-center justify-center">
                <Image
                  src={getAssetUrl(data?.processSection?.image)}
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
              {data?.featuredSection?.title}
            </h3>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {data?.featuredSection?.features.map((item, i) => (
                <section key={i} >
                  <div className="w-full relative mt-4">
                    <span className="absolute top-1 w-4 h-4 rounded-full bg-secondary block"></span>
                    <h6 className="text-[20px] md:text-[24px] text-primary text-left font-bold leading-tight mt-4 md:mt-2 ps-6">
                      {item?.title}
                    </h6>
                  </div>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-left mt-2">
                    {item?.description}
                  </p>
                </section>
              ))}
            </div>
          </div>

          {/* Adding the code below just to test it out */}
{/* 
          <section className="w-full px-4 md:px-20 py-10 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
              <div className="flex justify-start">
                <div className="w-full h-[700px] max-w-[90%] bg-yellow-400 rounded-[100px] -ml-6 md:-ml-20"></div>
              </div> */}

              {/* Right Side: Content Blocks */}
              {/* <div className="flex flex-col space-y-6 text-primary text-center md:text-left">
                <div>
                  <h3 className="font-bold text-[18px] md:text-[20px] uppercase">Comprehensive Test Preparation</h3>
                  <p className="text-[16px] md:text-[18px] mt-1">
                    Our intensive preparation for exams like SAT, ACT, GMAT, GRE, UCAT, LNAT, and Oxbridge Entrance sharpens your competitive edge.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[18px] md:text-[20px] uppercase">Expert Guidance</h3>
                  <p className="text-[16px] md:text-[18px] mt-1">
                    Gain insights from mentors experienced in the nuances of Ivy League and Oxbridge admissions, tailored for international students applying to US and UK universities.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[18px] md:text-[20px] uppercase">Progress Monitoring</h3>
                  <p className="text-[16px] md:text-[18px] mt-1">
                    Continuous assessments and feedback keep you on track towards your academic goals.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[18px] md:text-[20px] uppercase">Customised Strategies</h3>
                  <p className="text-[16px] md:text-[18px] mt-1">
                    Develop personalised strategies for each university’s specific requirements, adapting to the distinctive needs of UK-based and international students.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[18px] md:text-[20px] uppercase">Proven Track Record</h3>
                  <p className="text-[16px] md:text-[18px] mt-1">
                    Students from top UK schools, including the likes of Eton College and Harrow School, have successfully navigated complex admissions processes with Rostrum’s assistance, evidenced by numerous Ivy League and Oxbridge admissions.
                  </p>
                </div>
              </div>
            </div>
          </section> */}




        </div>
      </div>
      <CallToAction image={"/assets/call-action/about.png"} />
    </main>
  );
};

export default Region;
