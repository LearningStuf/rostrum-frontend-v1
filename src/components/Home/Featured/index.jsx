import React from "react";
import Image from "next/image";
import AnimationProvider from "@/components/common/AnimationProvider";
import { HOME_FEATURED } from "@/quries";
import { URL } from "@/utils/SERVER_URL";
import { getAssetUrl } from "@/utils/getAssetUrl";

const Featured = async () => {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: HOME_FEATURED,
    }),
    next: { revalidate: 60 },
  });
  const { data } = await response.json();

  return (
    <div className="w-ful h-auto relative mt-10">
      <div className="max-w-full md:max-w-screen-xl h-auto mx-2 p-3 md:p-6 md:mx-auto">
        <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 uppercase">
          We have been featured in
        </h3>
      </div>
      <div className="max-w-full md:max-w-screen-xl h-auto mx-2 md:mx-auto p-3 md:p-6 flex flex-row flex-nowrap md:flex-wrap items-center justify-between overflow-x-auto">
        {data?.featureds?.data
          .map((item, i) => (
            <AnimationProvider key={i} animationType="slide-up" duration={0.7}>
              <div
                role="button"
                className="min-w-[260px] md:min-w-auto w-auto md:w-[373px] h-[154px] flex items-center justify-center bg-white shadow-md rounded-lg mb-14 me-8 md:me-auto p-3 md:p-auto"
              >
                <Image
                  src={getAssetUrl(item?.attributes?.image)}
                  width={251}
                  height={139}
                  alt="We have been featured in"
                />
              </div>
            </AnimationProvider>
          ))}
      </div>
    </div>
  );
};

export default Featured;
