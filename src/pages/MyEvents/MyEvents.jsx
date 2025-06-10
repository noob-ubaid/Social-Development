import React from "react";
import { Link } from "react-router";

const MyEvents = ({ card }) => {
  return (
    <div className="border flex flex-col md:flex-row gap-6 md:gap-8 border-[#0F0F0F26] dark:border-gray-700 p-4 md:p-6 rounded-md">
      <div className="md:w-[40%]">
        <img
          className="w-full h-[280px] md:h-[500px] object-cover bg-center rounded-md"
          src={card.image}
          alt=""
        />
      </div>
      <div className="w-full md:w-[60%]">
        <h3 className=" text-xl dark:text-white font-semibold">
          Events Name : {card.name}
        </h3>
        <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
          Location : {card.location}
        </p>
        <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
          Date : {card.date}
        </p>
        <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
          Event Type : {card.eventType}
        </p>
        <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
          Description : {card.description}
        </p>

        <div className="mt-4 w-full flex items-center gap-8 justify-center ">
          <Link to={`/updateevent/${card._id}`} className="rounded-md text-center md:px-6 w-full md:py-3 px-4 py-2 text-[#09982F] bg-[#09982F1A] ">
            Update
          </Link>
          <button className="rounded-md md:px-6 w-full md:py-3 px-4 py-2 text-[#FF0000] bg-[#FF000020] ">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyEvents;
