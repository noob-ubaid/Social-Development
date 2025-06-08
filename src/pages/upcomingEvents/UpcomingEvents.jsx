import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Event from "../event/Event";

const UpcomingEvents = () => {
  const data = useLoaderData();
  const [eventType, setEventType] = useState("All");
  const handleEventType = (e) => {
    setEventType(e.target.value);
  };
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = data.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate >= today;
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
          className=" px-6 py-3 rounded w-full dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
        >
          <option value="All">All</option>
          <option value="Tree Plantation">Tree Plantation</option>
          <option value="Donation">Donation</option>
          <option value="Clean Up">Clean Up</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
        {filteredEvents.map((event) => (
          <Event key={event._id} event={event}></Event>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
