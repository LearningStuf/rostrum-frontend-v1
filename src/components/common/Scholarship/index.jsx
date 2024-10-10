"use client";
import React, { useState } from "react";

const Scholarship = ({ data }) => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="w-full h-auto relative mt-10">
      <div className="max-w-full md:max-w-screen-xl h-auto mx-2 p-3 md:p-6 md:mx-auto">
        <h4 className="uppercase text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight">
          {data?.title}
        </h4>
      </div>
      <div className="max-w-full md:max-w-screen-xl h-auto mx-2 md:mx-auto p-3 md:p-6">
        {data?.faq?.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left bg-primary text-white px-4 py-3 flex justify-between items-center rounded-full focus:outline-none"
            >
              <span className="font-bold text-lg">{item.question}</span>
              <span>{openQuestion === index ? "▼" : "▶"}</span>
            </button>
            {openQuestion === index && (
              <p className="mt-4 text-[16px] md:text-[20px] text-primary font-normal">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scholarship;
