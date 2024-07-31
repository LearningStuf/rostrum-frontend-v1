import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimationProvider from "../AnimationProvider";

import { ALL_BLOGS } from "@/quries";
import { URL } from "@/utils/SERVER_URL";
import { getAssetUrl } from "@/utils/getAssetUrl";

const BlogList = async () => {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: ALL_BLOGS,
    }),
    next: { revalidate: 60 },
  });
  const { data } = await response.json();
  const blogs = data?.blogs?.data;
  console.log(blogs);

  return (
    <div className="w-ful h-full relative mt-10 mb-10">
      <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {blogs?.map((item, i) => (
          <AnimationProvider key={i} animationType="slide-up" duration={0.4}>
            <div className="max-w-sm h-autooverflow-hidden shadow-lg rounded-3xl pb-4">
              <div className="w-full h-[300px] relative">
                <Image
                  src={getAssetUrl(item?.attributes?.image)}
                  alt="Sunset in the mountains"
                  fill={true}
                  style={{ objectFit: "cover" }}
                  className="rounded-tr-3xl rounded-tl-3xl"
                />
              </div>
              <div className="px-6 py-4">
                <h6 className="text-[22px] md:text-[28px] text-primary text-center md:text-left font-bold leading-none mt-4">
                  {item?.attributes?.title}
                </h6>
                <p className="text-[20px] text-primary font-normal text-center md:text-left mt-2">
                  {item?.attributes?.description}
                </p>
                <Link
                  href="/"
                  className="text-secondary mt-2 block text-center md:text-left"
                >
                  Read more
                </Link>
              </div>
            </div>
          </AnimationProvider>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
