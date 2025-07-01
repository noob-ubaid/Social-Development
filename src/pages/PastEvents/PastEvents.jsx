import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../contexts/AuthProvider";
import PastEvent from "./PastEvent";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
    },
  },
};

const PastEvents = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_api_url}/events`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((resData) => {
        if (Array.isArray(resData)) {
          setData(resData);
        } else if (Array.isArray(resData.data)) {
          setData(resData.data);
        } else {
          console.error("Unexpected API response:", resData);
          setData([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setData([]);
        setLoading(false);
      });
  }, [user?.accessToken]);

  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);

  const pastEvents = Array.isArray(data)
    ? data.filter((event) => {
        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0);
        return eventDate < todayDate;
      })
    : [];

  return (
    <div>
      <h2 className="text-2xl font-bold  text-center my-8 text-gray-800 dark:text-white">
        ⏳ Past Events
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-40 md:h-[450px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      ) : pastEvents.length < 1 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">
          No past events found.
        </p>
      ) : (
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10"
        >
          {pastEvents.map((event) => (
            <PastEvent key={event._id} event={event} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default PastEvents;
