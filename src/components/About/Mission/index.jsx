import React from "react";
import Image from "next/image";
import AnimationProvider from "@/components/common/AnimationProvider";
import { getAssetUrl } from "@/utils/getAssetUrl";

const Mission = ({ data }) => {
  return (
    <div className="w-ful h-full relative mt-10">
      <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="w-full h-full flex flex-col items-center md:items-start justify-end">
          <AnimationProvider animationType="slide-up" duration={0.5}>
            <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 uppercase">
              {data?.title}
            </h3>
          </AnimationProvider>
          <AnimationProvider animationType="slide-up" duration={0.7}>
            <p className="text-[20px] text-primary font-normal text-center md:text-left mt-8">
              {data?.description_1}
            </p>
          </AnimationProvider>
        </section>
        <section className="w-full h-auto relative p-2">
          <AnimationProvider animationType="slide-up" duration={0.5}>
            <div className="relative w-full h-[500px] -mt-22">
              <Image
                src={getAssetUrl(data?.image)}
                alt="Mission"
                fill
                style={{ objectFit: "cover" }}
                className="-z-1"
              />
            </div>
          </AnimationProvider>
          <p className="text-[20px] text-primary font-normal text-center md:text-left mt-8">
            {data?.description_2}
          </p>
        </section>
      </div>
    </div>
  );
};

export default Mission;
