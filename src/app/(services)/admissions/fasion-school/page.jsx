import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner/Fashion";
import CallToAction from "@/components/common/CallToAction/fashion";
import AnimationProvider from "@/components/common/AnimationProvider";

const FasionSchool = () => {
  const data = [
    {
      logo: "/assets/fashion-schools-logo/1.svg",
      description: `London School of Fashion (London): They offers a comprehensive four-year program. It covers everything from sketching to garment production.`,
      width: 427,
      height: 178,
    },
    {
      logo: "/assets/fashion-schools-logo/2.svg",
      description: `Fashion Institute of Technology (New York City): Provides two-year and four-year programs in Fashion Design and Fashion Merchandising.`,
      width: 212,
      height: 211,
    },
    {
      logo: "/assets/fashion-schools-logo/3.svg",
      description: `Parsons School of Design (New York): Offers a four-year BFA and a two-year MFA in Fashion Design.`,
      width: 236,
      height: 106,
    },
    {
      logo: "/assets/fashion-schools-logo/4.svg",
      description: `School of the Art Institute of Chicago (Chicago): Offers four-year BFA and two-year MFA programs.`,
      width: 383,
      height: 95,
    },
    {
      logo: "/assets/fashion-schools-logo/5.svg",
      description: `Fashion Institute of Design & Merchandising (Los Angeles): Provides a two-year Fashion Design program and a four-year Fashion Merchandising program.`,
      width: 221,
      height: 117,
    },
    {
      logo: "/assets/fashion-schools-logo/6.svg",
      description: `Savannah College of Art & Design (Savannah, Georgia; Atlanta, Georgia; and Lacoste, France): One of the best four-year BFA and two-year MFA programs.`,
      width: 197,
      height: 197,
    },
    {
      logo: "/assets/fashion-schools-logo/7.svg",
      description: `Istituto Marangoni (Milan):  You get bachelor's and master's degrees in Fashion Design, Fashion Styling, and Fashion Business.`,
      width: 440,
      height: 302,
    },
    {
      logo: "/assets/fashion-schools-logo/8.svg",
      description: `Polimoda (Florence): Famous for its bachelor's and master's degrees in Fashion Design, Fashion Marketing, and Fashion Technology.`,
      width: 197,
      height: 238,
    },
    {
      logo: "/assets/fashion-schools-logo/9.svg",
      description: `Domus Academy (Milan): Commonly known for its master's degrees in Fashion Design, Fashion Management, and Fashion Styling & Visual Merchandising.`,
      width: 384,
      height: 82,
    },
    {
      logo: "/assets/fashion-schools-logo/10.svg",
      description: `Politecnico di Milano (Milan): Offers bachelor's and master's degrees in Fashion Design and Fashion System Design.`,
      width: 415,
      height: 141,
    },
  ];

  const process = [
    {
      title: `Choosing the Right Program`,
      description: `We’ll help you select the best program based on your interests and career goals`,
      image: "/assets/fashion-schools-logo/process/1.png",
    },
    {
      title: `Building Your Profile and Portfolio `,
      description: `Rostrum Education experts will help you create a standout portfolio. It can showcase your creativity and skills.`,
      image: "/assets/fashion-schools-logo/process/2.png",
    },
    {
      title: `Meeting Deadlines `,
      description: `Our specialists ensure all your applications and paperwork are submitted on time.`,
      image: "/assets/fashion-schools-logo/process/3.png",
    },
    {
      title: `Writing Your Motivation Letter`,
      description: `We assist in writing a compelling motivation letter. It should highlight your talents and passion.`,
      image: "/assets/fashion-schools-logo/process/4.png",
    },
    {
      title: `Test Preparation`,
      description: `We offer tutoring for SAT, ACT, TOEFL, and IELTS to help you meet university requirements.`,
      image: "/assets/fashion-schools-logo/process/5.png",
    },
  ];
  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="center"
        title={"Your Guide To The Top Global Fashion & Design Schools"}
        image={"/assets/header-banner/fashion.png"}
      />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          {/* Section Start */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <section className="mt-auto md:mt-18">
              <h3 className="text-center md:text-left text-[40px] md:text-[50px] text-primary font-bold leading-tight mt-2 mb-8 md:mb-auto uppercase">
                How To Choose The Best Fashion & Design Schools For You
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-6">
                The curriculum and methodology of fashion and design schools
                differ, but most provide instruction in design concepts and
                fashion history. Many fashion and design colleges also offer
                merchandising, marketing, and business courses to equip
                students with the necessary business skills to thrive in the
                industry. Applicants must have a good portfolio and a passion for
                fashion in order to get accepted into the finest fashion and
                design schools in the world.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-6">
                Many institutions additionally demand that students take an
                admission exam like the SAT or ACT. Admission to the world’s
                leading fashion and design colleges is extremely difficult, and
                students’ portfolios and test results are frequently used to
                determine acceptance. Students must also have a good
                foundation in art and design to get admitted to the most
                competitive colleges.
              </p>
              {/* <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-6">
                The world’s greatest fashion and design schools are found in
                major cities such as New York, London, Paris, and Milan. Many
                fashion and design colleges have locations in various countries,
                including China and India.
              </p> */}
            </section>
            <section>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-6">
                The world’s greatest fashion and design schools are found in
                major cities such as New York, London, Paris, and Milan. Many
                fashion and design colleges have locations in various countries,
                including China and India.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-6">
                Bachelor’s and master’s degrees are available at the world’s
                leading fashion and design colleges. Degrees normally take four
                years, while some colleges offer two-year expedited programs.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-6">
                The National Association of Colleges of Art and Design accredits
                the greatest fashion and design schools in the world (NASAD).
                Accreditation guarantees that a school’s curriculum fulfils the
                most stringent requirements. These institutions’ graduates
                frequently go on to work as fashion designers, merchandisers, or
                buyers. Many of them also work in the industries of advertising
                and public relations.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-6">
                The greatest fashion and design schools in the world provide
                financial help in the form of scholarships and grants. Students
                should research the financial aid options accessible at each
                college they are considering attending. Major cities throughout
                the world, such as New York, London, Paris, and Milan, are home
                to the greatest fashion and design schools in the world. Several
                fashion and design colleges have campuses in various countries,
                including China and India."
              </p>
            </section>
          </div>
          {/* Section End */}
          {/* Section Start */}
          <div className="w-full h-auto">
            <h3 className="text-center text-[40px] md:text-[55px] text-primary font-bold leading-tight mt-8 md:mt-14 mb-2 uppercase">
              Top 10 Fashion Schools Worldwide
            </h3>
            {/* <h6 className="w-full md:w-[60%] mx-auto text-[22px] md:text-[28px] text-primary text-center font-bold leading-tight">
              All of these institutions have outstanding programs that help you
              start a successful fashion career:
            </h6> */}
            <div className="w-full h-auto flex flex-wrap items-center justify-center">
              {data.map((item, i) => (
                <div
                  key={i}
                  className="w-full md:w-1/4 flex flex-col items-center justify-center mx-4 my-4 border-b-2 border-[#F5B646] pb-6  md:border-b-0  md:pb-auto"
                >
                  <Image
                    src={item.logo}
                    width={item.width}
                    height={item.height}
                    alt={item.description}
                  />
                  <p className="text-[20px] text-primary font-normal mt-3 text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Section End */}
          {/* Section Start */}
          <div className="w-full h-auto mt-20">
            <h3 className="text-center md:text-left text-[40px] md:text-[50px] text-primary font-bold leading-tight mt-2 mb-8 md:mb-auto uppercase">
              How We Help with Your Application
            </h3>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {process.map((item, i) => (
                <section key={i} className="w-full relative">
                  <div className="flex items-center justify-start">
                    <h6 className="relative w-full text-[22px] md:text-[28px] text-primary text-left font-bold leading-tight flex self-end">
                      {item.title}
                    </h6>
                    <Image
                      src={item.image}
                      width={200}
                      height={200}
                      alt={item.title}
                    />
                  </div>
                  <p className="text-[20px] text-primary font-normal mt-3 text-left">
                    {item.description}
                  </p>
                </section>
              ))}
            </div>
          </div>
          {/* Section End */}
          {/* Section Start */}
          <div className="w-full h-auto mt-20">
            <h3 className="text-center md:text-left text-[40px] md:text-[50px] text-primary font-bold leading-tight mt-2 mb-8 md:mb-auto uppercase">
              How To Make Your Portfolio Stand Out
            </h3>
            <p className="w-full md:w-[80%] text-[16px] md:text-[20px] text-primary font-normal mt-3 text-center md:text-left">
              Your portfolio is the most important part of your application. We
              help you:
            </p>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {[
                `Develop a portfolio that reflects your artistic identity.`,
                `Understand what colleges and employers are looking for.`,
                `Avoid common mistakes, and make sure that your portfolio stands out.`,
                `Only submit assignments that you are most confident with. Quality will always win over quantity.`,
                `Please maintain the coherence of your portfolio by grouping related materials under the same topic or concept.`,
                `Present some pages from the sketchbooks to showcase the work process and the idea development.`,
                `Keep the layout uncluttered and professional. It should have clear and appropriately labeled columns and rows.`,
                `Don’t be afraid to incorporate your personality and style into the designs.`,
                `Select assignments that fit the school's theme. You can focus on innovation, sustainability, or haute couture.`,
              ].map((item, i) => {
                return (
                  <div className="flex items-start justify-start my-2" key={i}>
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
            </div>
            <p className="w-full md:w-[80%] text-[16px] md:text-[20px] text-primary font-normal mt-3 text-center md:text-left">
              Rostrum Education helps you combine your strengths and ideas. A a
              professional portfolio for your career in fashion design can
              impress the school’s admission committees.
            </p>
          </div>
          {/* Section End */}
        </div>
      </div>
      <CallToAction image={"/assets/call-action/fashion.png"} />
      <p className="w-full p-2 md:p-6 text-[16px] md:text-[20px] text-primary font-normal mt-3 text-center">
        Get personalized counseling, portfolio development sessions, and
        application support with Rostrum. Start your journey to a successful
        fashion career today with a free consultation. Let’s turn your fashion
        dreams into reality!
      </p>
      <br />
      <br />
      <br />
    </main>
  );
};

export default FasionSchool;
