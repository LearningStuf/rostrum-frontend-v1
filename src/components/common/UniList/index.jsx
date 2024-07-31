import React from "react";
import UniSlider from "@/components/common/UniSlider";
import { HOME_UNIVERSITIES } from "@/quries";
import { URL } from "@/utils/SERVER_URL";

const UniList = async () => {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: HOME_UNIVERSITIES,
    }),
    next: { revalidate: 60 },
  });
  const { data } = await response.json();

  return (
    <div className="w-ful h-auto relative mt-10 overflow-hidden">
      <div className="max-w-full md:max-w-screen-xl h-auto mx-2 p-3 md:p-6 md:mx-auto">
        <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 uppercase">
          Colleges / Universities <br className="hidden md:block" /> students
          have made through
        </h3>
      </div>
      {data && <UniSlider data={data?.universitiesHomes?.data} />}
    </div>
  );
};

export default UniList;
