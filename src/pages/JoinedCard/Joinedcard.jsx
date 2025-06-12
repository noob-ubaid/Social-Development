import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
const Joinedcard = ({ event }) => {
  return (
    <motion.div variants={cardVariants} className="border hover:shadow-md transition dark:border-gray-700 duration-300 border-[#0F0F0F26]  rounded-md">
      <div>
        <img
          className="w-full h-[280px] object-cover bg-center rounded-t-md"
          src={event.image}
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className=" text-xl dark:text-white font-semibold">{event.name}</h3>
        <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
          Event Type : {event.eventType}
        </p>
        <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
          <i class="fa-solid fa-calendar-days text-main mr-2"></i> Date :{" "}
          {event.date}
        </p>
        <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
          <i class="fa-solid fa-location-dot text-main mr-2"></i> Location :{" "}
          {event.location}
        </p>
        <button
          className={`block w-full mt-6 text-center bg-[#AD49E1] text-white py-3 rounded-full font-semibold hover:bg-[#9b3cd3] transition`}
        >
          Cancel
        </button>
      </div>
    </motion.div>
  );
};

export default Joinedcard;
