// import React, { use, useEffect, useState } from "react";
// import { AuthContext } from "../../contexts/AuthProvider";
// import axios from "axios";
// import Joinedcard from "../JoinedCard/Joinedcard";
// import NoJoined from "../NoJoined/NoJoined";
// const JoinedEvents = () => {
//   const { user } = use(AuthContext);
//   const [isJoined, setIsJoined] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     axios(`${import.meta.env.VITE_api_url}/join/${user?.email}`)
//       .then((data) => {
//         setIsJoined(data?.data);
//         setLoading(false);
//       })
//       .catch((err) => console.log(err));
//   }, [user]);
//   return (
//     <>
//       {loading ? (
//         <div className="flex justify-center items-center h-40 md:h-72">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
//         </div>
//       ) : isJoined.length < 1 ? (
//         <NoJoined/>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10">
//           {isJoined.map((event) => (
//             <Joinedcard key={event._id} event={event} />
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default JoinedEvents;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import axios from "axios";
import Joinedcard from "../JoinedCard/Joinedcard";
import NoJoined from "../NoJoined/NoJoined";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
    },
  },
};

const JoinedEvents = () => {
  const { user } = useContext(AuthContext);
  const [isJoined, setIsJoined] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc"); // asc or desc

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      axios(`${import.meta.env.VITE_api_url}/join/${user.email}`)
        .then((data) => {
          const sortedData = data.data.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
          });
          setIsJoined(sortedData);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [user, sortOrder]);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-40 md:h-72">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      ) : isJoined.length < 1 ? (
        <NoJoined />
      ) : (
        <>
          <div className="flex justify-end my-6">
            <div className="relative w-60">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="appearance-none w-full bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-400 text-blue-900 font-medium py-2 px-4 pr-10 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 hover:cursor-pointer"
              >
                <option value="asc">📅 Earliest Events First</option>
                <option value="desc">🕒 Latest Events First</option>
              </select>
              {/* Dropdown icon */}
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-blue-700">
                ▼
              </div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10"
          >
            {isJoined.map((event) => (
              <Joinedcard key={event._id} event={event} />
            ))}
          </motion.div>
        </>
      )}
    </>
  );
};

export default JoinedEvents;
