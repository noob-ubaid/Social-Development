import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

const CreateEvent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [eventType, setEventType] = useState();
  const [description, setDescription] = useState();
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleEventType = (e) => {
    setEventType(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const location = form.location.value;
    const date = startDate.toDateString();

    const data = {
      name,
      image,
      location,
      description,
      eventType,
      date,
    };
    axios.post(`${import.meta.env.VITE_api_url}/events`, data)
    .then((res) => res.data)
      .then((data) => {
        toast.success("Successfully added your event");
      });
  };
  return (
    <div className="my-6 md:my-10">
      <h2 className="text-2xl text-center md:text-3xl font-semibold">
        Add Event
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mt-4 md:gap-6 gap-4 md:mt-8 w-full">
          <input
            className=" px-6 py-3 rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
            type="text"
            name="name"
            placeholder="Enter your Event Name"
            required
          />

          <textarea
            name="description"
            rows="5"
            required
            onChange={handleDescription}
            placeholder="Description"
            className=" px-6  py-3 rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
          ></textarea>

          <div className="flex items-center md:gap-8 gap-4 dark:bg-gray-700 dark:text-white flex-col md:flex-row w-full">
            <select
              onChange={handleEventType}
              value={eventType}
              required
              className=" px-6 py-3 rounded w-full dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
            >
              <option value="">-- Choose a Event type --</option>
              <option value="Tree Plantation">Tree Plantation</option>
              <option value="Donation">Donation</option>
              <option value="Clean Up">Clean Up</option>
            </select>
          </div>
          <input
            className=" px-6 py-3 rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
            type="text"
            name="image"
            placeholder="Enter your Image URL"
            required
          />
          <input
            className=" px-6 py-3 rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
            type="text"
            name="location"
            placeholder="Enter your Event Location"
            required
          />
          <DatePicker
            className="px-6 w-full py-3 rounded dark:bg-gray-700 dark:text-white bg-gray-200 outline-none"
            selected={startDate}
            minDate={new Date()}
            dateFormat="dd-MM-yyyy"
            onChange={(date) => setStartDate(date)}
          />
          <button
            type="submit"
            className=" bg-[#AD49E1] w-full  text-white font-medium md:px-8 md:py-2.5 px-4 py-2  rounded"
          >
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
