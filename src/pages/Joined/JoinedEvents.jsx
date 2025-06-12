import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import axios from "axios";
import Joinedcard from "../JoinedCard/Joinedcard";
import NoJoined from "../NoJoined/NoJoined";
const JoinedEvents = () => {
  const { user } = use(AuthContext);
  const [isJoined, setIsJoined] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios(`${import.meta.env.VITE_api_url}/join/${user?.email}`)
      .then((data) => {
        setIsJoined(data?.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [user]);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-40 md:h-72">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      ) : isJoined.length < 1 ? (
        <NoJoined/>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10">
          {isJoined.map((event) => (
            <Joinedcard key={event._id} event={event} />
          ))}
        </div>
      )}
    </>
  );
};

export default JoinedEvents;
