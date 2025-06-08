import React from "react";
import { useLoaderData } from "react-router";

const Details = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="border flex justify-between mt-6 md:mt-12 dark:border-gray-700 items-start gap-8 flex-col md:flex-row border-[#0F0F0F26] p-6 md:p-8 rounded-md">
        <div className="w-full md:w-[40%]">
          <img
            className="w-full md:h-[500px] h-[300px] object-cover bg-center rounded-md"
            src={data.image}
            alt=""
          />
        </div>
        <div className=" w-full md:w-[60%]">
          <h3 className=" text-2xl dark:text-white font-semibold">Name : {data.name}</h3>
          <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
            Location : {data.location}
          </p>
          <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
            Date : {data.date}
          </p>
          <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
            Event Type : {data.eventType}
          </p>
          <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
            Description : {data.description}
          </p>

          <div>
            <button
              className={`block w-full ${"cursor-not-allowed"} mt-6 text-center bg-[#AD49E1] text-white py-3 rounded-lg font-semibold hover:bg-[#9b3cd3] transition`}
            >Join Event</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
