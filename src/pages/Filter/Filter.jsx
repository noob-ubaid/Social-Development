import React from "react";

const Filter = ({ eventType }) => {
  return (
    <div className="bg-[rgba(15, 15, 15, 0.05)] mb-8 w-full py-20 dark:bg-gray-700 md:mb-28 text-center px-4 md:px-0 bg-[#0F0F0F0D] mt-8 md:mt-16 rounded-md">
      <h4 className="font-semibold text-2xl dark:text-white md:text-3xl text-[#141414]">
        No {eventType} Events Found
      </h4>
      <p className="mt-4 text-[#141414B3] dark:text-white">
        Looks like there are no upcoming events for {eventType}. Try selecting
        another category or come back later.
      </p>
    </div>
  );
};

export default Filter;
