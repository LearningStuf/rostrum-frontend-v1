import React from "react";
import HeaderBanner from "@/components/common/HeaderBanner";
import Mission from "@/components/About/Mission";
import HowWeWork from "@/components/About/HowWeWork";
import CallToAction from "@/components/common/CallToAction";
import Fallback from "@/components/common/Fallback";
import { ABOUT_PAGE } from "@/quries";
import { URL } from "@/utils/SERVER_URL";
import { getAssetUrl } from "@/utils/getAssetUrl";

const About = async () => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ABOUT_PAGE,
      }),
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();
    const {
      headerSection,
      missionSection,
      weWorkText,
      callToAction,
      weWorkSection,
    } = data?.about?.data?.attributes || {};

    // if (
    //   !headerSection ||
    //   !missionSection ||
    //   !weWorkText ||
    //   !callToAction ||
    //   !weWorkSection
    // ) {
    //   throw new Error("Incomplete data received");
    // }


    console.log(headerSection , "ABC")

    return (
      <main className="relative w-full h-auto">
        <HeaderBanner
          align="center"
          title={headerSection?.title}
          image={getAssetUrl(headerSection?.image)}
        />
        <Mission data={missionSection} />
        <HowWeWork title={weWorkText} data={weWorkSection} />
        <CallToAction
          data={callToAction}
          image={"/assets/call-action/about.png"}
        />
        <br />
        <br />
        <br />
      </main>
    );
  } catch (error) {
    return <Fallback />;
  }
};

export default About;
