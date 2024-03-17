import React from "react";

const Skeleton = () => {
  return (
    <div role="status" class="w-full animate-pulse px-10 md:px-20">
      <br />
      <br />
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-secondary w-full mb-4"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-primary w-1/2 mb-2.5"></div>
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-secondary w-full mb-4"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-primary w-1/2 mb-2.5"></div>
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-secondary w-full mb-4"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-primary w-1/2 mb-2.5"></div>
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-secondary w-full mb-4"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-primary w-1/2 mb-2.5"></div>
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-secondary w-full mb-4"></div>
      <span class="sr-only">Loading...</span>
      <br />
      <br />
    </div>
  );
};

export default Skeleton;
