import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner";
import Featured from "@/components/Home/Featured";
import UniList from "@/components/common/UniList";
import Stats from "@/components/Home/Stats";
import CallToAction from "@/components/common/CallToAction";
import Fallback from "@/components/common/Fallback";
import { CONTACT_PAGE, HOME_PAGE } from "@/quries";
import { URL } from "@/utils/SERVER_URL";
import { getAssetUrl } from "@/utils/getAssetUrl";

const Contact = async () => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: CONTACT_PAGE,
      }),
      next: { revalidate: 60 },
    });

    const statsResponse = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: HOME_PAGE,
      }),
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    if (!statsResponse.ok) {
      throw new Error(`HTTP error! status: ${statsResponse.status}`);
    }

    const { data: statsData } = await statsResponse.json();
    const { statsSection } = statsData?.homePage?.data?.attributes || {};
    const { data } = await response.json();
    const { address, timing, contact, description } =
      data?.contactPage?.data?.attributes || {};

    if (!address || !timing || !contact || !description) {
      throw new Error("Incomplete data received");
    }

    return (
      <main className="relative w-full h-auto">
        <HeaderBanner
          align="center"
          title={"CONTACT US"}
          image={"/assets/header-banner/event-header.png"}
        />
        <div className="w-full h-full relative mt-10 mb-10">
          <Stats data={statsSection} />
          <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <form className="p-10">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                  />
                  <p className="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-email"
                  >
                    Email Address
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    placeholder="********@*****.**"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-message"
                  >
                    Your Message
                  </label>
                  <textarea
                    rows="10"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  ></textarea>
                </div>
                <div className="flex justify-between w-full px-3">
                  <div className="md:flex md:items-center">
                    <label className="block text-gray-500 font-bold">
                      <input className="mr-2 leading-tight" type="checkbox" />
                      <span className="text-sm">Send me your newsletter!</span>
                    </label>
                  </div>
                  <button
                    className="shadow bg-secondary hover:bg-primary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-[28px] md:text-[40px] text-primary font-bold leading-none mt-2 uppercase">
                BOOK A FREE SESSION
              </h4>
              <Image
                src="/assets/contact-us.png"
                alt="Contact Us"
                width={700}
                height={500}
                //   fill={true}
                //   style={{ objectFit: "cover" }}
                className="mt-10"
              />
            </div>
          </div>
          <UniList />
          <div className="max-w-full md:max-w-screen-xl md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {Array(3)
              .fill()
              .map((item, i) => (
                <section
                  key={i}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      src="/assets/icons/location.svg"
                      width={30}
                      height={30}
                      alt="Location"
                    />
                    <h6 className="text-[22px] md:text-[28px] text-secondary text-center md:text-left font-bold leading-tight">
                      LONDON
                    </h6>
                  </div>
                  <div className="mt-4">
                    <p className="text-[16px] md:text-[20px] text-primary  text-center font-bold">
                      Address
                    </p>
                    <p className="text-[16px] md:text-[20px] text-primary font-normal text-center mt-0">
                      71-75 Shelton St, London WC2H 9JQ, United Kingdom
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-[16px] md:text-[20px] text-primary  text-center font-bold">
                      Phone
                    </p>
                    <p className="text-[16px] md:text-[20px] text-primary font-normal text-center mt-0">
                      +44 20 3978 4582
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-[16px] md:text-[20px] text-primary  text-center font-bold">
                      Email
                    </p>
                    <p className="text-[16px] md:text-[20px] text-primary font-normal text-center mt-0">
                      info@rostrumedu.com
                    </p>
                  </div>
                </section>
              ))}
          </div>
          <Featured />
        </div>
        <CallToAction image={"/assets/call-action/about.png"} />
      </main>
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <Fallback />;
  }
};

export default Contact;
