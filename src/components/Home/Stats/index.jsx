import React from "react";
import Image from "next/image";
import CountUp from "@/components/common/CountUp";

const Stats = ({data}) => {
  return (
    <div className="w-ful h-auto relative mt-10 md:mt-auto">
      <div className="max-w-full md:max-w-screen-xl h-auto mx-2 p-4 md:p-6 md:mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <section className="w-full h-auto flex flex-col items-center md:items-start justify-start mb-6 md:mb-auto">
          <Image
            src={"/assets/icons/square.svg"}
            width={50}
            height={50}
            alt="Stats Icon..."
          />
          <CountUp start={0} end={data?.number1} />
          <h6 className="text-[22px] md:text-[28px] text-primary font-semibold leading-none mt-2">
            {data?.text1}
          </h6>
        </section>

        <section className="w-full h-auto flex flex-col items-center md:items-start justify-start mb-6 md:mb-auto">
          <Image
            src={"/assets/icons/circle.svg"}
            width={50}
            height={50}
            alt="Stats Icon..."
          />
          <CountUp start={0} end={data?.number2} />
          <h6 className="text-[22px] md:text-[28px] text-primary font-semibold leading-none mt-2">
            {data?.text2}
          </h6>
        </section>
        
        <section className="w-full h-auto flex flex-col items-center md:items-start justify-start mb-6 md:mb-auto">
          <Image
            src={"/assets/icons/oval.svg"}
            width={50}
            height={50}
            alt="Stats Icon..."
          />
          <CountUp start={0} end={data?.number3} />
          <h6 className="text-[22px] md:text-[28px] text-primary font-semibold leading-none mt-2">
            {data?.text3}
          </h6>
        </section>

        <section className="w-full h-auto flex flex-col items-center md:items-start justify-start mb-6 md:mb-auto">
          <Image
            src={"/assets/icons/triangle.svg"}
            width={50}
            height={50}
            alt="Stats Icon..."
          />
          <CountUp start={0} end={data?.number4} />
          <h6 className="text-[22px] md:text-[28px] text-primary font-semibold leading-none mt-2">
            {data?.text4}
          </h6>
        </section>

      </div>
    </div>
  );
};

export default Stats;
