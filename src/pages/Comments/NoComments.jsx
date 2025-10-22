import React from "react";

const NoComments = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-700 rounded-md py-8 md:py-12 ">
      <p className="font-main font-semibold text-2xl text-black dark:text-white md:text-3xl text-center">
        No Comments Yet
      </p>
      <p className="font-main font-medium text-lg mt-4  text-gray-600 dark:text-white md:text-xl text-center">
        Share your thoughts related to this post.
      </p>
    </div>
  );
};

export default NoComments;
