"use client";
import React, { useState } from "react";

const Faq = () => {
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
        {/* Question 1 */}
        <div className="mb-4">
          <button
            onClick={() => toggleQuestion(1)}
            className="w-full text-left bg-primary text-white px-4 py-3 flex justify-between items-center rounded-full focus:outline-none"
          >
            <span className="font-bold text-lg">
              What is Rostrum Education?
            </span>
            <span>{openQuestion === 1 ? "▼" : "▶"}</span>
          </button>
          {openQuestion === 1 && (
            <p className="mt-4 text-[16px] md:text-[20px] text-primary font-normal">
              Rostrum Education is a leading consultancy firm that provides
              expert guidance and support to students and parents seeking higher
              education opportunities. With a team of experienced consultants,
              Rostrum Education offers personalized services tailored to the
              unique needs of each student, helping them achieve academic and
              career goals.
            </p>
          )}
        </div>

        {/* Question 2 */}
        <div className="mb-4">
          <button
            onClick={() => toggleQuestion(2)}
            className="w-full text-left bg-primary text-white px-4 py-3 flex justify-between items-center rounded-full focus:outline-none"
          >
            <span className="font-bold text-lg">QUESTION 2</span>
            <span>{openQuestion === 2 ? "▼" : "▶"}</span>
          </button>
          {openQuestion === 2 && (
            <p className="mt-4 text-[16px] md:text-[20px] text-primary font-normal">
              Rostrum Education is a leading consultancy firm that provides
              expert guidance and support to students and parents seeking higher
              education opportunities. With a team of experienced consultants,
              Rostrum Education offers personalized services tailored to the
              unique needs of each student, helping them achieve academic and
              career goals.
            </p>
          )}
        </div>

        {/* Question 3 */}
        <div className="mb-4">
          <button
            onClick={() => toggleQuestion(3)}
            className="w-full text-left bg-primary text-white px-4 py-3 flex justify-between items-center rounded-full focus:outline-none"
          >
            <span className="font-bold text-lg">QUESTION 3</span>
            <span>{openQuestion === 3 ? "▼" : "▶"}</span>
          </button>
          {openQuestion === 3 && (
            <p className="mt-4 text-[16px] md:text-[20px] text-primary font-normal">
              Rostrum Education is a leading consultancy firm that provides
              expert guidance and support to students and parents seeking higher
              education opportunities. With a team of experienced consultants,
              Rostrum Education offers personalized services tailored to the
              unique needs of each student, helping them achieve academic and
              career goals.
            </p>
          )}
        </div>

        {/* Question 4 */}
        <div className="mb-4">
          <button
            onClick={() => toggleQuestion(4)}
            className="w-full text-left bg-primary text-white px-4 py-3 flex justify-between items-center rounded-full focus:outline-none"
          >
            <span className="font-bold text-lg">QUESTION 4</span>
            <span>{openQuestion === 4 ? "▼" : "▶"}</span>
          </button>
          {openQuestion === 4 && (
            <p className="mt-4 text-[16px] md:text-[20px] text-primary font-normal">
              Rostrum Education is a leading consultancy firm that provides
              expert guidance and support to students and parents seeking higher
              education opportunities. With a team of experienced consultants,
              Rostrum Education offers personalized services tailored to the
              unique needs of each student, helping them achieve academic and
              career goals.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
