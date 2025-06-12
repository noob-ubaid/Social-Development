import React from "react";
import { Link } from "react-router";

const NoEvents = () => {
  return (
    <div className="bg-[rgba(15, 15, 15, 0.05)] w-full dark:bg-gray-600 py-20 md:mb-28 text-center px-4 md:px-0 bg-[#0F0F0F0D] mt-6 md:mt-10 rounded-md">
      <h4 className="font-semibold dark:text-white text-2xl md:text-3xl text-[#141414]">
        You haven’t added any events yet
      </h4>
      <p className="mt-4 dark:text-gray-200 text-[#141414B3]">
        Add a new event to start building your social impact and connecting with
        others.
      </p>
      <div className="mt-10">
        <Link
          to="/create"
          className=" bg-[#AD49E1] mt-6 text-white font-medium px-8 py-3  rounded-full"
        >
          Add Event
        </Link>
      </div>
    </div>
  );
};

export default NoEvents;
