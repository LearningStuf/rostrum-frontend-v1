import React from "react";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import moment from "moment";
import Image from "next/image";
import Fallback from "@/components/common/Fallback";
import { SINGLE_BLOGS } from "@/quries";
import { URL } from "@/utils/SERVER_URL";
import { getAssetUrl } from "@/utils/getAssetUrl";

const SingleBlog = async ({ params }) => {
  let id = params?.id;

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: SINGLE_BLOGS, // The GraphQL query
        variables: {
          id: id, // Pass the ID as a variable
        },
      }),
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();
    const blog = data?.blogs?.data[0];
    let content = blog?.attributes?.content;
    console.log(blog)

    return (
      <main className="max-w-full md:max-w-screen-xl h-auto  mx-auto py-10 px-4 md:px-20">
        <section className="flex items-center justify-between py-2">
          <p></p>
          <p className="text-dark text-sm  md:text-md text-right mb-2 font-medium">
            Last Updated:{" "}
            <span className="text-primary">
              {moment(blog?.attributes?.createdAt).fromNow()}
            </span>
          </p>
        </section>
        <h1 className="transition-all text-[45px] md:text-[90px] text-primary  font-bold leading-none text-center">
          {blog?.attributes?.title}
        </h1>
        <Image
          src={getAssetUrl(blog?.attributes?.image)}
          alt={blog?.attributes?.title}
          width={2000}
          height={400}
          className="mt-8 mb-8"
        />
        <hr/>
        <BlocksRenderer content={content} />
      </main>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return (
      <Fallback message="We are sorry, but we couldn't load the blog information at this moment. Please try again later." />
    );
  }
};

export default SingleBlog;
