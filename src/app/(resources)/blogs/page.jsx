import React from "react";
import HeaderBanner from "@/components/common/HeaderBanner";
import BlogList from "@/components/common/BlogList";
import CallToAction from "@/components/common/CallToAction";
import Fallback from "@/components/common/Fallback";

import { BLOG_PAGE } from "@/quries";
import { URL } from "@/utils/SERVER_URL";
import { getAssetUrl } from "@/utils/getAssetUrl";

const Blogs = async () => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: BLOG_PAGE,
      }),
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();
    const { headerSection } = data?.blogPage?.data?.attributes || {};

    if (!headerSection) {
      throw new Error("Incomplete data received");
    }

    return (
      <main className="relative w-full h-auto">
        <HeaderBanner
          align="center"
          title={headerSection?.title}
          image={getAssetUrl(headerSection?.image)}
        />
        <BlogList />
        <CallToAction image={"/assets/call-action/home.png"} />
        <br />
        <br />
        <br />
      </main>
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return (
      <Fallback message="We are sorry, but we couldn't load the blog page information at this moment. Please try again later." />
    );
  }
};

export default Blogs;
