import React from "react";
import HeaderBanner from "@/components/common/HeaderBanner";
import ReviewsList from "@/components/common/ReviewsList";
import CallToAction from "@/components/common/CallToAction";
import Fallback from "@/components/common/Fallback";
import { REVIEW_PAGE } from "@/quries";
import { URL } from "@/utils/SERVER_URL";
import { getAssetUrl } from "@/utils/getAssetUrl";

const Reviews = async () => {
  try {
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

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();
    const { headerSection, reviews } = data?.reviewsPage?.data?.attributes || {};

    if (!headerSection || !reviews) {
      throw new Error("Incomplete data received");
    }

    return (
      <main className="relative w-full h-auto">
        <HeaderBanner
          align="center"
          title={headerSection?.title}
          image={getAssetUrl(headerSection?.image)}
        />
        <ReviewsList data={reviews} />
        <CallToAction image={"/assets/call-action/home.png"} />
        <br />
        <br />
        <br />
      </main>
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return (
      <Fallback  />
    );
  }
};

export default Reviews;
