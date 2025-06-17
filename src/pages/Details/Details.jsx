import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";
const Details = () => {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true)
  const {id} = useParams()
  const {user} = use(AuthContext)
  const joinedData = {
    id:data._id,
    email : user?.email
  }
  
  const handleJoin = () => {
    fetch(`${import.meta.env.VITE_api_url}/join`,{
      method : "POST",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(joinedData)
    })
    .then(res => res.json())
    .then(data => {
      toast.success("You have joined this event.");
    })
  }
  useEffect(()=>{
    setLoading(true)
    fetch(`${import.meta.env.VITE_api_url}/events/${id}`,{
      credentials : 'include'
    })
    .then(res => res.json())
    .then(data => {
      setData(data)
      setLoading(false)
    })
  },[id])
    if (loading) {
    return (
      <div className="flex justify-center items-center h-40 md:h-[500px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="border flex justify-between my-6 md:my-12 dark:border-gray-700 items-start gap-8 flex-col md:flex-row border-[#0F0F0F26] p-6 md:p-8 rounded-md">
        <div className="w-full md:w-[40%]">
          <img
            className="w-full md:h-[450px] h-[300px] object-cover bg-center rounded-md"
            src={data.image}
            alt=""
          />
        </div>
        <div className=" w-full md:w-[60%]">
          <h3 className=" text-2xl dark:text-white font-semibold">Name : {data.name}</h3>
          <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
            <i class="fa-solid fa-location-dot text-main mr-2"></i>Location : {data.location}
          </p>
          <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
           <i class="fa-solid fa-calendar-days text-main mr-2"></i> Date : {data.date}
          </p>
          <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
            Event Type : {data.eventType}
          </p>
          <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
            Description : {data.description}
          </p>

          <div>
            <button
            onClick={handleJoin}
              className={`block w-full mt-6 text-center bg-[#AD49E1] text-white py-3 rounded-lg font-semibold hover:bg-[#9b3cd3] transition`}
            >Join Event</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
