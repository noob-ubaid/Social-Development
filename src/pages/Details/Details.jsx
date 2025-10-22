import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";
import { CiBookmark } from "react-icons/ci";
import {
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";

const Details = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false); // 👈 modal state
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const joinedData = {
    id: data._id,
    email: user?.email,
  };

  const handleBookMark = (id) => {
    const bookmark = {
      eventId: id,
      bannerImage: data.image,
      title: data.name,
      location: data.location,
      description: data.description,
      eventType: data.eventType,
      date: data.date,
      email: user?.email,
      name: data?.displayName,
    };
    fetch(`${import.meta.env.VITE_api_url}/bookmark`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookmark),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("You bookmarked this event");
      });
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
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-2xl dark:text-white font-semibold">
              {data.name}
            </h3>
            <button onClick={() => handleBookMark(data._id)}>
              <CiBookmark size={24} />
            </button>
          </div>
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

          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={handleJoin}
              className="w-[50%]  px-6 py-3 bg-[#AD49E1] text-white rounded-lg font-semibold hover:bg-[#9b3cd3] transition"
            >
              Join Event
            </button>

            <Link
              to={`/comments/${data._id}`}
              className="w-[50%] text-center px-6 py-3 border-[#AD49E1] border text-black hover:text-white dark:text-white rounded-lg font-semibold hover:bg-[#AD49E1] duration-300 transition"
            >
              View Comments
            </Link>
          </div>

          {/* Share Button */}
          <div className="mt-4">
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="w-full  px-6 py-3 bg-[#AD49E1] text-white rounded-lg font-semibold hover:bg-[#9b3cd3] transition"
            >
              Share Event
            </button>
          </div>
        </div>
      </div>

      {/* ================= Share Modal ================= */}
      {isShareModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
            <button
              onClick={() => setIsShareModalOpen(false)}
              className="absolute top-3 right-3 text-gray-600 dark:text-white text-xl"
            >
              ✕
            </button>
            <h3 className="text-lg font-semibold mb-4 text-center dark:text-white">
              Share this Event
            </h3>

            <div className="flex items-center justify-center gap-4">
              <FacebookShareButton url={shareUrl} quote={shareTitle}>
                <FacebookIcon size={50} round />
              </FacebookShareButton>

              <WhatsappShareButton url={shareUrl} title={shareTitle}>
                <WhatsappIcon size={50} round />
              </WhatsappShareButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
