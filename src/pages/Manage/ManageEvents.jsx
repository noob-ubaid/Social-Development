import React, { use, useEffect, useState } from "react";
import MyEvents from "../MyEvents/MyEvents";
import NoEvents from "../NoEvents/NoEvents";
import { AuthContext } from "../../contexts/AuthProvider";

const ManageEvents = () => {
  const { user } = use(AuthContext);
  const [events, setEvents] = useState([]);
  console.log(events)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!user) return;
    setLoading(true);
    fetch(`${import.meta.env.VITE_api_url}/manage-events/${user?.email}`, {
      credentials : 'include'
    })
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
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
    <div className="flex flex-col gap-6 my-8 md:my-12">
      {events.length < 1 ? (
        <NoEvents />
      ) : (
        events.map((card) => (
          <MyEvents
            key={card._id}
            events={events}
            setEvents={setEvents}
            card={card}
          />
        ))
      )}
    </div>
  );
};

export default ManageEvents;






