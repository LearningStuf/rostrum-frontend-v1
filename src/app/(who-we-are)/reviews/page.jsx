import React from "react";
import HeaderBanner from "@/components/common/HeaderBanner";
import ReviewsList from "@/components/common/ReviewsList";
import CallToAction from "@/components/common/CallToAction";
import { REVIEW_PAGE } from "@/quries";
import { URL } from "@/utils/SERVER_URL";
import { getAssetUrl } from "@/utils/getAssetUrl";

const Reviews = async () => {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: REVIEW_PAGE,
    }),
    next: { revalidate: 86400 },
  });
  const { data } = await response.json();
  const { headerSection, reviews } = data?.reviewsPage?.data?.attributes;
  return (
    <main className="relative w-full h-auto">
      <HeaderBanner
        align="center"
        title={headerSection?.title}
        image={getAssetUrl(headerSection?.image)}
      />
      <ReviewsList
        data={reviews}
      />
      <CallToAction image={"/assets/call-action/home.png"} />
      <br />
      <br />
      <br />
    </main>
  );
};

export default Reviews;
