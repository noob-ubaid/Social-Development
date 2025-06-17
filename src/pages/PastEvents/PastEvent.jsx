import { Link } from "react-router";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
const PastEvent = (event) => {
  return (
    <motion.div
      variants={cardVariants}
      className="border hover:shadow-md transition dark:border-gray-700 duration-300 border-[#0F0F0F26]  rounded-md"
    >
      <div>
        <img
          className="w-full h-[280px] object-cover bg-center rounded-t-md"
          src={event.event.image}
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className=" text-xl dark:text-white font-semibold">
          {event.event.name}
        </h3>
        <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
          Event Type : {event.event.eventType}
        </p>
        <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
          <i class="fa-solid fa-calendar-days text-main mr-2"></i> Date :{" "}
          {event.event.date}
        </p>
        <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
          <i class="fa-solid fa-location-dot text-main mr-2"></i> Location :{" "}
          {event.event.location}
        </p>
      </div>
    </motion.div>
  );
};

export default PastEvent;
