import React from "react";
import Image from "next/image";

const TopSchools = () => {
  const schools = [
    {
      title: `Westminster 
      School `,
      image: "/assets/boarding-school/1.png",
    },
    {
      title: ` 
      St Paul’s 
      School `,
      image: "/assets/boarding-school/2.png",
    },
    {
      title: ` Eton 
      College
       `,
      image: "/assets/boarding-school/3.png",
    },
    {
      title: ` 
      Harrow 
School
 `,
      image: "/assets/boarding-school/4.png",
    },
    {
      title: ` 
      Sevenoaks
School  `,
      image: "/assets/boarding-school/5.png",
    },
    {
      title: ` 
      Winchester 
College `,
      image: "/assets/boarding-school/6.png",
    },
    {
      title: ` Rugby 
      School  `,
      image: "/assets/boarding-school/7.png",
    },
    {
      title: `Wellington
      College`,
      image: "/assets/boarding-school/8.png",
    },
    {
      title: ` 
      Whitgift
School `,
      image: "/assets/boarding-school/9.png",
    },
    {
      title: ` 
      Badminton
School `,
      image: "/assets/boarding-school/10.png",
    },
    {
      title: ` Charterhouse 
      School  `,
      image: "/assets/boarding-school/11.png",
    },
    {
      title: ` Marlborough
      College `,
      image: "/assets/boarding-school/12.png",
    },
    {
      title: ` Cheltenhem
      College `,
      image: "/assets/boarding-school/13.png",
    },
  ];
  return (
    <div className="w-full h-auto">
      <h3 className="text-center text-[40px] md:text-[50px] text-primary font-bold leading-tight mt-14 mb-8 md:mb-auto uppercase">
        Top UK Boarding Schools
      </h3>
      <div className="w-full h-auto flex flex-wrap items-center justify-center mt-8">
        {schools
          .map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center mx-4 my-8"
            >
              <div className="relative w-[120px] md:w-[150px] h-[120px] md:h-[150px]">
                <Image
                  src={item.image}
                  alt="University"
                  fill={true}
                  objectFit="containe"
                />
              </div>
              <p className="text-[20px] text-primary font-semibold mt-3">
                {item.title}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopSchools;
