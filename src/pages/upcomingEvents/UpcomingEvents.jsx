import React, { useEffect, useState, useContext } from "react";
import Event from "../event/Event";
import Filter from "../Filter/Filter";
import { AuthContext } from "../../contexts/AuthProvider";

const UpcomingEvents = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);
  const [eventType, setEventType] = useState("All");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_api_url}/events?searchParams=${search}&sortField=date&sortOrder=${sortOrder}`, {
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
  }, [search,sortOrder, user?.accessToken]);

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
      <div className="flex items-center flex-col gap-4 mt-6 md:mt-12 md:gap-8 md:flex-row">
        <div className="flex-1 w-full">
          <input
            className="px-6 w-full py-3  rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
            type="text"
            name="search"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-1 items-center  gap-4 dark:bg-gray-700 dark:text-white flex-col md:flex-row w-full">
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
        <div className="flex-1 w-full">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-6 py-3 rounded w-full dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
          >
            <option value="asc">Earliest events first</option>
            <option value="desc">Latest events first</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40 md:h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      ) : (
        <div>
          {filteredEvents.length < 1 ? (
            <Filter eventType={eventType} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 mt-6 md:mt-10 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
              {filteredEvents.map((event) => (
                <Event key={event._id} event={event} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
