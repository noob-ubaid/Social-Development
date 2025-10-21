import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Link } from "react-router";

const SavedEvents = () => {
  const { user } = use(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_api_url}/bookmark/${user?.email}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((save) => {
        setData(save);
        setLoading(false);
      });
  }, [user]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-40 md:h-[500px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }
  return (
    <>
      {data.length < 1 ? (
        <div className="bg-[rgba(15,15,15,0.05)] dark:bg-gray-700 mb-8 md:mb-28 w-full py-20 text-center px-4 md:px-0 mt-8 md:mt-16 rounded-md">
          <h4 className="font-semibold text-2xl md:text-3xl text-[#141414] dark:text-white">
            You haven’t saved any events
          </h4>
          <p className="mt-4 text-[#141414B3] dark:text-white">
            Go to the event details page to save events
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 md:mt-10 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
          {data.map((saved) => (
            <div className="border hover:shadow-md transition dark:border-gray-700 duration-300 border-[#0F0F0F26]  rounded-md">
              <div>
                <img
                  className="w-full h-[280px] object-cover bg-center rounded-t-md"
                  src={saved.bannerImage}
                  alt=""
                />
              </div>
              <div className="p-4">
                <h3 className=" text-xl dark:text-white font-semibold">
                  {saved.title}
                </h3>
                <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
                  Event Type : {saved.eventType}
                </p>
                <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
                  <i class="fa-solid fa-calendar-days text-main mr-2"></i> Date
                  : {saved.date}
                </p>
                <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
                  <i class="fa-solid fa-location-dot text-main mr-2"></i>{" "}
                  Location : {saved.location}
                </p>
                <div className="mt-4 w-full ">
                  <Link
                    to={`/details/${saved.eventId}`}
                    className="block w-full text-center bg-[#AD49E1] text-white py-3 rounded-full font-semibold hover:bg-[#9b3cd3] transition"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SavedEvents;
