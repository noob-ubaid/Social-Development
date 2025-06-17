import React, { useEffect, useState, useContext } from "react";
import Event from "../event/Event";
import Filter from "../Filter/Filter";
import { motion } from "framer-motion";
import { AuthContext } from "../../contexts/AuthProvider";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
    },
  },
};

const UpcomingEvents = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);
  const [eventType, setEventType] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_api_url}/events?searchParams=${search}`, {
     credentials : 'include'
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
  }, [search, user?.accessToken]);

  const handleEventType = (e) => {
    setEventType(e.target.value);
  };

  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);

  const upcomingEvents = Array.isArray(data)
    ? data.filter((event) => {
        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0);
        return eventDate >= todayDate;
      })
    : [];

  const filteredEvents =
    eventType === "All"
      ? upcomingEvents
      : upcomingEvents.filter((event) => event.eventType === eventType);

  return (
    <div>
      <div className="flex items-center my-6 md:my-8 md:gap-8 gap-4 dark:bg-gray-700 dark:text-white flex-col md:flex-row w-full">
        <select
          onChange={handleEventType}
          value={eventType}
          required
          className="px-6 py-3 rounded w-full dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
        >
          <option value="All">All</option>
          <option value="Tree Plantation">Tree Plantation</option>
          <option value="Donation">Donation</option>
          <option value="Clean Up">Clean Up</option>
        </select>
      </div>

      <div>
        <input
          className="px-6 w-full mb-8 py-3 rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
          type="text"
          name="search"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          required
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40 md:h-72">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      ) : (
        <div>
          {filteredEvents.length < 1 ? (
            <Filter eventType={eventType} />
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10"
            >
              {filteredEvents.map((event) => (
                <Event key={event._id} event={event} />
              ))}
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;

