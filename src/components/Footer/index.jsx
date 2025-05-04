import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FOOTER } from "@/quries";
import { URL } from "@/utils/SERVER_URL";

const Footer = async () => {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: FOOTER,
    }),
    next: { revalidate: 60 },
  });

  const { data } = await response.json();

  return (
    <footer className="bg-primary-light">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-4">
          <div className="mb-6 md:mb-0">
            <div className="flex justify-center">
              <Link href="/" className="inline-block">
                <Image
                  src="/assets/logo.svg"
                  width={120}
                  height={120}
                  alt="Logo..."
                  className="-translate-y-16 -translate-x-10"
                />
              </Link>
            </div>
            <p className="text-[20px] text-stone -mt-6">
              {data?.footer?.data?.attributes?.description}
            </p>
          </div>


          <div>
            <h4 className="mb-6 text-[24px] font-semibold text-stone uppercase">
              Quick links
            </h4>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">

              {data?.footer?.data?.attributes?.website_routes?.data?.map(

                (route, i) => (
                  <Link
                    key={i}
                    href={route?.attributes?.url}>
                    <li
                      className="mb-4 text-[20px] text-stone transition-all hover:text-secondary"
                      role="button"
                    >
                      {route?.attributes?.name}
                    </li>
                  </Link>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-[24px] font-semibold text-stone uppercase">
              Address
            </h4>
            {/* 
            Commenting old code to make this dynamic!!!

            <h4 className="mb-1 text-[24px] font-semibold text-stone">Dubai</h4>
            <p className="mb-6 text-[20px] text-stone">
              {data?.footer?.data?.attributes?.addressDubai}
            </p>
            <h4 className="mb-1 text-[24px] font-semibold text-stone">Delhi</h4>
            <p className="text-[20px] text-stone">
              {data?.footer?.data?.attributes?.addressDelhi}
            </p> */}
            {data?.footer?.data?.attributes?.Address?.map((item, index) => (
              <div key={index} className="mb-6">
                <h4 className="mb-1 text-[24px] font-semibold text-stone">{item.Country}</h4>
                <p className="text-[20px] text-stone">{item.Address}</p>
              </div>
            ))}
          </div>
          <div>
            <h4 className="mb-6 text-[24px] font-semibold text-stone uppercase">
              Contact us
            </h4>
            <h4 className="mb-1 text-[24px] font-semibold text-stone">Phone</h4>
            {/* 
            Commented out old phone code to make it dynamic
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-1 text-[20px] text-stone" role="button">
                {data?.footer?.data?.attributes?.phone1}
              </li>
              <li className="mb-1 text-[20px] text-stone " role="button">
                {data?.footer?.data?.attributes?.phone2}
              </li>
              <li className="mb-1 text-[20px] text-stone " role="button">
                {data?.footer?.data?.attributes?.phone3}
              </li>
              <li className="mb-1 text-[20px] text-stone " role="button">
                {data?.footer?.data?.attributes?.phone4}
              </li>
            </ul> */}

            {Object.entries(
              data?.footer?.data?.attributes?.Phone?.reduce((acc, item) => {
                // Group phone numbers by country
                if (!acc[item.Country]) {
                  acc[item.Country] = [];
                }
                acc[item.Country].push(item.Phone);
                return acc;
              }, {})
            ).map(([countryName, phones]) => (
              <div key={countryName} className="mb-1">
                {/* <h5 className="mb-2 text-[20px] font-semibold text-stone">{countryName}</h5> */}
                <ul className="text-gray-500 dark:text-gray-400 font-small">
                  {phones.map((phone, index) => (
                    <li key={index} className="mb-1 text-[20px] text-stone">
                      <span className="font-normal text-[20px]">{countryName}:</span> {phone}
                    </li>
                  ))}
                </ul>
              </div>
            ))}


            <h4 className="mb-1 mt-6 text-[24px] font-semibold text-stone">
              Email address
            </h4>
            <p className="mb-6 text-[20px] text-stone">
              {data?.footer?.data?.attributes?.email}
            </p>
          </div>
        </div>
      </div>
      <hr className="mx-auto w-full max-w-screen-xl my-4 border-primary-dark sm:mx-auto lg:mt-4" />
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:pb-5">
        <span className="text-[20px] text-stone sm:text-center">
          © 2024{" "}
          <Link href="/" className="hover:underline">
            Rostum
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
