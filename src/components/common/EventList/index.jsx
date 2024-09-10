import Image from "next/image";
import React from "react";

const EventList = () => {
  return (
    <div className="w-full h-full relative mt-10 mb-10">
      <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {Array(10)
          .fill()
          .map(() => {
            return (
              <div className="w-full relative">
                <Image
                  src="/assets/event.webp"
                  alt="Event"
                  width={700}
                  height={500}
                  //   fill={true}
                  //   style={{ objectFit: "cover" }}
                  className="border-4 border-secondary rounded-lg cursor-pointer"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default EventList;
