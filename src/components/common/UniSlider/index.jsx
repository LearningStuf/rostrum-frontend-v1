"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { getAssetUrl } from "@/utils/getAssetUrl";

const UniSlider = ({ data }) => {
  return (
    <div className="w-ful h-auto relative mt-10 md:mt-auto p-0">
      <Marquee>
        {data?.map((item, i) => (
          <section
            key={i}
            className="relative flex flex-col items-center justify-center m-10"
          >
            <div className="relative w-[120px] md:w-[150px] h-[120px] md:h-[150px]">
              <Image
                src={getAssetUrl(item?.attributes?.image)}
                // width={150}
                // height={150}
                //   style={{ maxWidth: '100%', height: 'auto' }}
                alt="University"
                fill={true}
                objectFit="containe"
              />
            </div>
            <p className="text-[20px] text-primary font-semibold mt-3">
              {item?.attributes?.name}
            </p>
          </section>
        ))}
      </Marquee>
    </div>
  );
};

export default UniSlider;
