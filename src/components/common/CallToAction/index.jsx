"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import AnimationProvider from "@/components/common/AnimationProvider";
import { getAssetUrl } from "@/utils/getAssetUrl";

const CallToAction = ({ data, image }) => {
  const title = data?.title
    ? data?.title
    : "Become A Part Of Rostrum Community";
  const headline = data?.headline ? data?.headline : "Get In Touch Today!";
  const bgimage = data?.image ? getAssetUrl(data?.image) : image;

  return (
    <div className="w-ful h-full md:h-[467px] relative mt-10 md:mt-auto py-8  md:p-0">
      <Image
        src={bgimage}
        alt="Univerity Sitting"
        fill
        style={{ objectFit: "cover" }}
        className="-z-1"
      />
      <div className="relative z-10  max-w-full md:max-w-screen-xl h-full mx-2 md:mx-auto p-3 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <section className="w-full h-full flex flex-col items-start justify-center">
          <AnimationProvider animationType="slide-up" duration={1}>
            <h2 className="text-[45px] md:text-[70px] text-white font-bold uppercase leading-none">
              {title}
            </h2>
          </AnimationProvider>
          <AnimationProvider animationType="slide-up" duration={0.5}>
            <h4 className="text-[30px] md:text-[45px] text-white font-bold">
              {headline}
            </h4>
          </AnimationProvider>
        </section>
        <section className="w-full h-full flex flex-col items-center justify-center">
          <Button
            // onClick={() => alert('hello')}
            size="lg"
            type="secondary"
            text="Speak with an advisor"
          />
        </section>
      </div>
    </div>
  );
};

export default CallToAction;
