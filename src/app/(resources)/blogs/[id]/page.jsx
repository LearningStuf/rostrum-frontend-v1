
import React from "react";
//import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import BlogContentRenderer from "@/app/(resources)/blogs/BlogContentRenderer";
import moment from "moment";
import Image from "next/image";
import Fallback from "@/components/common/Fallback";
import { SINGLE_BLOGS } from "@/quries";
import { URL } from "@/utils/SERVER_URL";
import { getAssetUrl } from "@/utils/getAssetUrl";

// This function generates metadata for the blog page dynamically
export async function generateMetadata({ params }) {
  const id = params?.id;

  // Fetch blog data (you can reuse the fetching logic)
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: SINGLE_BLOGS,
      variables: { id },
    }),
  });

  const { data } = await response.json();
  const blog = data?.blogs?.data[0];
  const seo = blog?.attributes?.SEO;

  // SEO Data Variables
  const title = seo?.title || blog?.attributes?.title;  // SEO title fallback to blog title
  const metaDescription = seo?.metaDescription || "Default description";
  const imageUrl = getAssetUrl(blog?.attributes?.image);

  return {
    title: title,
    description: metaDescription,
    keywords: seo?.focusKeywords || "",  // Add keywords if you need
    openGraph: {
      title: title,
      description: metaDescription,
      // url: `https://yourwebsite.com/blog/${id}`,
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: metaDescription,
      images: [imageUrl],
    },
    // You can add other metadata fields like canonical URL, robots, etc. if needed
  };
}

const SingleBlog = async ({ params }) => {
  let id = params?.id;

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: SINGLE_BLOGS,
        variables: { id },
      }),
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();
    const blog = data?.blogs?.data[0];

    let content = blog?.attributes?.content;

    console.log("This is the blog content: ", content)

    return (
      <main className="max-w-full md:max-w-screen-xl h-auto mx-auto py-10 px-4 md:px-20">
        <section className="flex items-center justify-between py-2">
          <p></p>
          <p className="text-dark text-sm md:text-md text-right mb-2 font-medium">
            Last Updated:{" "}
            <span className="text-primary">
              {moment(blog?.attributes?.createdAt).fromNow()}
            </span>
          </p>
        </section>

        <h1 className="transition-all text-[45px] md:text-[90px] text-primary font-bold leading-none text-center">
          {blog?.attributes?.title}
        </h1>

        {/* Blog Image */}
        <Image
          src={getAssetUrl(blog?.attributes?.image)}
          alt={blog?.attributes?.title}
          width={2000}
          height={400}
          className="mt-8 mb-8"
        />

        <hr />

        {/* Blog Content */}
        {/* <BlocksRenderer  content={content}/> */}
        <BlogContentRenderer content={content} />

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
