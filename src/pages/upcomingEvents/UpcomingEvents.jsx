import React, { useEffect, useState } from "react";
import Event from "../event/Event";
import Filter from "../Filter/Filter";

const UpcomingEvents = () => {
  const [data, setData] = useState([]);
  const [eventType, setEventType] = useState("All");
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(`${import.meta.env.VITE_api_url}/events?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [search]);
  const handleEventType = (e) => {
    setEventType(e.target.value);
  };

  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  const upcomingEvents = data.filter((event) => {
    const eventDate = new Date(event.date);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate >= todayDate;
  });

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

      <div>
        {filteredEvents.length < 1 ? (
          <Filter eventType={eventType} />
        ) : (
          <div
            initial="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10"
          >
            {filteredEvents.map((event) => (
              <Event key={event._id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
