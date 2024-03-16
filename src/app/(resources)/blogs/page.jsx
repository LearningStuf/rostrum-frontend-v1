import React from "react";
import HeaderBanner from "@/components/common/HeaderBanner";
import BlogList from "@/components/common/BlogList";
import CallToAction from "@/components/common/CallToAction";

import { BLOG_PAGE } from "@/quries";
import { URL } from "@/utils/SERVER_URL";
import { getAssetUrl } from "@/utils/getAssetUrl";

const Blogs = async () => {
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
  const { data } = await response.json();
  const { headerSection } = data?.blogPage?.data?.attributes;

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
};

export default Blogs;
