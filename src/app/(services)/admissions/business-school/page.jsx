import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner";
import CallToAction from "@/components/common/CallToAction";
import AnimationProvider from "@/components/common/AnimationProvider";

const BusinessSchool = () => {
  const data = [
    {
      title: "Profile Assessment",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `,
      image: "/assets/business-school/1.svg",
    },
    {
      title: "Target Setting",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `,
      image: "/assets/business-school/2.svg",
    },
    {
      title: "Profile building",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `,
      image: "/assets/business-school/3.svg",
    },
    {
      title: "Crafting A Robust CV",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `,
      image: "/assets/business-school/4.svg",
    },
    {
      title: "Essays, SOPs And LORs",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `,
      image: "/assets/business-school/5.svg",
    },
    {
      title: "GMAT Prep",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `,
      image: "/assets/business-school/6.svg",
    },
    {
      title: "Interview Prep",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `,
      image: "/assets/business-school/7.svg",
    },
  ];
  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="left"
        title={"PREPARE FOR TOP BUSINESS SCHOOLS IN THE WORLD"}
        image={"/assets/header-banner/business.png"}
      />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
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
                {/* </section> */}
              </AnimationProvider>
              <AnimationProvider
                className={`w-full h-auto relative p-2 order-1
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
