import { Link } from "react-router";

const Event = (event) => {
  return (
    <div
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
        <div className="mt-4 w-full ">
          <Link
            to={`/details/${event.event._id}`}
            className="block w-full text-center bg-[#AD49E1] text-white py-3 rounded-full font-semibold hover:bg-[#9b3cd3] transition"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Event;
