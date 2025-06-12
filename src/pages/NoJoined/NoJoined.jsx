import React from "react";
import { Link } from "react-router";

const NoJoined = () => {
  return (
    <div className="bg-[rgba(15, 15, 15, 0.05)] w-full dark:bg-gray-600 py-32 md:mb-28 text-center px-4 md:px-0 bg-[#0F0F0F0D] mt-6 md:mt-10 rounded-md">
      <h4 className="font-semibold dark:text-white text-2xl md:text-3xl text-[#141414]">
        You haven’t joined any events yet
      </h4>
      <p className="mt-4 dark:text-gray-200 text-[#141414B3]">
        You’re just one click away from amazing events. Browse now and join your
        first one! others.
      </p>
    </div>
  );
};

export default NoJoined;
