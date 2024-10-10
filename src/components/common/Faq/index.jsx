"use client";
import React, { useState } from "react";

const Faq = ({ data }) => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="w-ful h-auto relative mt-10">
      <div className="max-w-full md:max-w-screen-xl h-auto mx-2 p-3 md:p-6 md:mx-auto">
        <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 uppercase">
          FAQ'S
        </h3>
      </div>
      <div className="max-w-full md:max-w-screen-xl h-auto mx-2 md:mx-auto p-3 md:p-6">
        <div className="max-w-full md:max-w-screen-xl h-auto mx-2 md:mx-auto p-3 md:p-6">
          {data?.map((item, index) => (
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
    </div>
  );
};

export default Faq;
