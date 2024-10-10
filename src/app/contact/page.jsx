import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner";
import Featured from "@/components/Home/Featured";
import UniList from "@/components/common/UniList";
import Stats from "@/components/Home/Stats";
import CallToAction from "@/components/common/CallToAction";
import Fallback from "@/components/common/Fallback";
import Faq from "@/components/common/Faq";
import { CONTACT_PAGE, HOME_PAGE } from "@/quries";
import { URL } from "@/utils/SERVER_URL";
import { getAssetUrl } from "@/utils/getAssetUrl";
import ContactForm from "@/components/common/ContactForm";

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
      next: { revalidate: 0 },
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
    const { faq, location } = data?.contactPage?.data?.attributes || {};
    if (!faq || !location) {
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
            <ContactForm/>
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
            {location.map((item, i) => (
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
                    {item?.title}
                  </h6>
                </div>
                <div className="mt-4">
                  <p className="text-[16px] md:text-[20px] text-primary  text-center font-bold">
                    Address
                  </p>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-center mt-0">
                    {item?.address}
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-[16px] md:text-[20px] text-primary  text-center font-bold">
                    Phone
                  </p>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-center mt-0">
                    {item?.phone}
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-[16px] md:text-[20px] text-primary  text-center font-bold">
                    Email
                  </p>
                  <p className="text-[16px] md:text-[20px] text-primary font-normal text-center mt-0">
                    {item?.email}
                  </p>
                </div>
              </section>
            ))}
          </div>
          <Featured />
          <Faq data={faq} />
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
