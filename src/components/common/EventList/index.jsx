import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ALL_EVENTS } from "@/quries";
import { URL } from "@/utils/SERVER_URL";
import { getAssetUrl } from "@/utils/getAssetUrl";

const EventList = async () => {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: ALL_EVENTS,
    }),
    next: { revalidate: 60},
  });
  const { data } = await response.json();
  const events = data?.events?.data;

  return (
    <div className="w-full h-full relative mt-10 mb-10">
      <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {events.map((item, i) => {
          return (
            <div key={i} className="w-full relative">
              <Link href={item?.attributes?.Link} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
              <Image
                src={getAssetUrl(item?.attributes?.banner)}
                alt="Event"
                width={700}
                height={500}
                //   fill={true}
                //   style={{ objectFit: "cover" }}
                className="border-4 border-secondary rounded-lg cursor-pointer"
              />
              </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventList;


// Might use the below code

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ALL_EVENTS } from "@/quries";
// import { URL } from "@/utils/SERVER_URL";
// import { getAssetUrl } from "@/utils/getAssetUrl";

// const EventList = async () => {
//   const response = await fetch(URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       query: ALL_EVENTS,
//     }),
//     next: { revalidate: 60},
//   });
//   const { data } = await response.json();
//   const events = data?.events?.data;

//   return (
//     <div className="w-full h-full relative mt-10 mb-10">
//       <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
//         {events.map((item, i) => {
//           return (
//             <div key={i} className="w-full relative">
//               <Link href={item?.attributes?.Link} passHref>
//                 <div className="relative w-full h-[500px]">
//                   <Image
//                     src={getAssetUrl(item?.attributes?.banner)}
//                     alt="Event"
//                     layout="fill"
//                     objectFit="cover"  // Ensures consistent aspect ratio and fills the space
//                     className="border-4 border-secondary rounded-lg cursor-pointer"
//                   />
//                 </div>
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default EventList;
