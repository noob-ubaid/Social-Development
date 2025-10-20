// import React, { use, useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { AuthContext } from "../../contexts/AuthProvider";
// import { toast } from "react-toastify";
// const Details = () => {
//   const [data,setData] = useState([])
//   const [loading,setLoading] = useState(true)
//   const {id} = useParams()
//   const {user} = use(AuthContext)
//   const joinedData = {
//     id:data._id,
//     email : user?.email
//   }

//   const handleJoin = () => {
//     fetch(`${import.meta.env.VITE_api_url}/join`,{
//       method : "POST",
//       headers : {
//         "content-type" : "application/json"
//       },
//       body : JSON.stringify(joinedData)
//     })
//     .then(res => res.json())
//     .then(data => {
//       toast.success("You have joined this event.");
//     })
//   }
//   useEffect(()=>{
//     setLoading(true)
//     fetch(`${import.meta.env.VITE_api_url}/events/${id}`,{
//       credentials : 'include'
//     })
//     .then(res => res.json())
//     .then(data => {
//       setData(data)
//       setLoading(false)
//     })
//   },[id])
//     if (loading) {
//     return (
//       <div className="flex justify-center items-center h-40 md:h-[500px]">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
//       </div>
//     );
//   }
//   return (
//     <div className="max-w-[1600px] mx-auto">
//       <div className="border flex justify-between my-6 md:my-12 dark:border-gray-700 items-start gap-8 flex-col md:flex-row border-[#0F0F0F26] p-6 md:p-8 rounded-md">
//         <div className="w-full md:w-[40%]">
//           <img
//             className="w-full md:h-[400px] h-[300px] object-cover bg-center rounded-md"
//             src={data.image}
//             alt=""
//           />
//         </div>
//         <div className=" w-full md:w-[60%]">
//           <h3 className=" text-2xl dark:text-white font-semibold">Name : {data.name}</h3>
//           <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
//             <i class="fa-solid fa-location-dot text-main mr-2"></i>Location : {data.location}
//           </p>
//           <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
//            <i class="fa-solid fa-calendar-days text-main mr-2"></i> Date : {data.date}
//           </p>
//           <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
//             Event Type : {data.eventType}
//           </p>
//           <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
//             Description : {data.description}
//           </p>

//           <div>
//             <button
//             onClick={handleJoin}
//               className={`block w-full mt-6 text-center bg-[#AD49E1] text-white py-3 rounded-lg font-semibold hover:bg-[#9b3cd3] transition`}
//             >Join Event</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;

import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";

const Details = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const joinedData = {
    id: data._id,
    email: user?.email,
  };

  const handleJoin = () => {
    fetch(`${import.meta.env.VITE_api_url}/join`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(joinedData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("You have joined this event.");
      });
  };

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_api_url}/events/${id}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40 md:h-[500px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  // Share URL (You can make it dynamic based on your frontend domain)
  const shareUrl = `${window.location.origin}/details/${id}`;
  const shareTitle = `Check out this event: ${data.name}`;

  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="border flex justify-between my-6 md:my-12 dark:border-gray-700 items-start gap-8 flex-col md:flex-row border-[#0F0F0F26] p-6 md:p-8 rounded-md">
        <div className="w-full md:w-[40%]">
          <img
            className="w-full md:h-[400px] h-[300px] object-cover bg-center rounded-md"
            src={data.image}
            alt=""
          />
        </div>
        <div className="w-full md:w-[60%]">
          <h3 className="text-2xl dark:text-white font-semibold">
            {data.name}
          </h3>
          <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
            <i className="fa-solid fa-location-dot text-main mr-2"></i>
            Location : {data.location}
          </p>
          <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
            <i className="fa-solid fa-calendar-days text-main mr-2"></i>
            Date : {data.date}
          </p>
          <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
            Event Type : {data.eventType}
          </p>
          <p className="text-[#0F0F0F99] dark:text-white font-medium mt-2">
            Description : {data.description}
          </p>

          <div className="flex  items-center gap-3 mt-6">
            {/* Join Event Button */}
            <button
              onClick={handleJoin}
              className="w-[50%]  px-6 py-3 bg-[#AD49E1] text-white rounded-lg font-semibold hover:bg-[#9b3cd3] transition"
            >
              Join Event
            </button>

            {/* Share Buttons */}
            <div className="flex items-center justify-center  gap-2">
              <FacebookShareButton url={shareUrl} quote={shareTitle}>
                <FacebookIcon size={40} round />
              </FacebookShareButton>

              <WhatsappShareButton url={shareUrl} title={shareTitle}>
                <WhatsappIcon size={40} round />
              </WhatsappShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
