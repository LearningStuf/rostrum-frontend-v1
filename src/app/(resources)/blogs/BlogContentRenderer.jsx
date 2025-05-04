'use client';

import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const BlogContentRenderer = ({ content }) => {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => <p className="mb-4">{children}</p>,
        heading: ({ children, level }) => {
          const Tag = `h${level}`;
          return <Tag className="font-bold my-4 text-primary">{children}</Tag>;
        },
        quote: ({ children }) => (
          <blockquote className="border-l-4 border-primary pl-4 italic my-4">
            {children}
          </blockquote>
        ),
        list: ({ children, format }) => {
          const ListTag = format === "ordered" ? "ol" : "ul";
          const className = format === "ordered" ? "list-decimal" : "list-disc";
          return <ListTag className={`${className} ml-6 mb-4`}>{children}</ListTag>;
        },
        listItem: ({ children }) => <li className="mb-2">{children}</li>,
      }}
    />
  );
};

export default BlogContentRenderer;
