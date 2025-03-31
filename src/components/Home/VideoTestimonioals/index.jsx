'use client';
import React from "react";
import Image from "next/image";
import { getAssetUrl } from "@/utils/getAssetUrl";
import { useState } from 'react';

const VideoTestimonials = ({ data }) => {

  // Code introduced for Youtube Player 
    const [videoId, setVideoId] = useState(null); // To track the clicked video

    const handleThumbnailClick = (id) => {
      // Split | sign to get the video id --> change introduced for youtube video player
      const [universityName, videoId] = id.split('|').map(part => part.trim());
      console.log("This is the video id being passed: " , videoId)
      console.log("This is the universtiyName id being passed: " , universityName)
      setVideoId(videoId); // Set the YouTube video ID when the thumbnail is clicked
    };

    const getUniName = (id) => {
      const [universityName, videoId] = id.split('|').map(part => part.trim());
      console.log("This is the universtiyName id being passed: " , universityName)
      return universityName;
    }

    const closePlayer = () => {
      setVideoId(null); // Close the player
    };
  // Code introduced for Youtube Player


  return (
    <div className="w-ful h-auto relative mt-10">
      <div className="w-ful h-full md:h-[467px] relative mt-10 md:mt-auto bg-bg-dark p-0">
        <div className="max-w-full h-full md:max-w-screen-xl mx-2 md:mx-auto p-0 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4">
          {data?.map((item, i) => (
            // Code introduced to fetch youtube video ID
            
            <section
              key={i}
              role="button"
              className={`relative w-full h-[467px] md:h-full flex flex-col items-start justify-end ps-6 pb-4 `}
            >
              <Image
                src={getAssetUrl(item?.attributes?.thumbnail)}
                alt="Testimonial"
                fill
                style={{ objectFit: "cover" }}
                className="-z-1 rounded-tl-[100px] rounded-br-[100px]"
                onClick={() => handleThumbnailClick(item?.attributes?.university)}

              />
              <button className="relative z-10 transition-all  duration-300 hover:scale-105" onClick={() => handleThumbnailClick(item?.attributes?.university)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="58"
                  height="58"
                  viewBox="0 0 58 58"
                >
                  <g
                    id="Group_357"
                    data-name="Group 357"
                    transform="translate(-1347 -2429)"
                  >
                    <path
                      id="Polygon_8"
                      data-name="Polygon 8"
                      d="M15.325,4.484a3,3,0,0,1,5.192,0L33.235,26.448a3,3,0,0,1-2.6,4.5H5.2a3,3,0,0,1-2.6-4.5Z"
                      transform="translate(1394.951 2440) rotate(90)"
                      fill="#fff"
                    />
                    <g
                      id="Ellipse_76"
                      data-name="Ellipse 76"
                      transform="translate(1347 2429)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3"
                    >
                      <circle cx="29" cy="29" r="29" stroke="none" />
                      <circle cx="29" cy="29" r="27.5" fill="none" />
                    </g>
                  </g>
                </svg>
              </button>
              <p className="relative z-10  text-[20px] text-white font-bold mt-4">
                {item?.attributes?.name}
              </p>
              <p className="relative z-10 text-[20px] text-white font-normal">
                {getUniName(item?.attributes?.university)}
              </p>
            </section>
          ))}
        </div>
      </div>

      {/* // Introducing the Youtube code */}

      {videoId && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl p-4">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closePlayer}
            >
              &times;
            </button>
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      )}

      {/* // Introducing the Youtube code */}

    </div>



  );
};

export default VideoTestimonials;
