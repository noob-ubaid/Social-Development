// import React from "react";
// import { motion } from "framer-motion";
// import { FaLock, FaUsers, FaCalendarAlt, FaSeedling, FaLaptop, FaMobileAlt } from "react-icons/fa";

// const data = {
//   title: "About Us",
//   intro:
//     "Welcome to Social Impact Connect – your one-stop community platform for discovering, creating, and participating in impactful social development events happening around you. Whether it's a road-cleaning drive in Mirpur or a tree plantation in Hossainpur, our mission is to bring changemakers together and foster meaningful action.",
//   missionTitle: "Our Mission",
//   mission:
//     "To empower individuals and communities by making social engagement more accessible, organized, and rewarding. We believe that positive change starts at the grassroots level — and with the right tools, everyone can contribute.",
//   offers: [
//     { icon: <FaCalendarAlt />, title: "Event Discovery", desc: "Easily explore upcoming social events in your area." },
//     { icon: <FaSeedling />, title: "Event Creation", desc: "Share your cause by organizing new events with just a few clicks." },
//     { icon: <FaUsers />, title: "Seamless Participation", desc: "Join events and track your impact, all in one place." },
//     { icon: <FaLock />, title: "Secure Experience", desc: "Your data is safe with us — powered by Firebase Auth, JWT, and protected routes." },
//     { icon: <FaMobileAlt />, title: "Responsive Design", desc: "Fully optimized for mobile, tablet, and desktop devices." },
//     { icon: <FaLaptop />, title: "Modern Interface", desc: "Clean layouts, theme toggling (light/dark), and accessible navigation to enhance user experience." },
//   ],
//   audience: [
//     "Community organizers and volunteers",
//     "Students and professionals eager to engage in CSR or social initiatives",
//     "NGOs and local organizations looking for digital outreach and event management"
//   ],
//   vision:
//     "To become the leading platform in Bangladesh (and beyond) for community-driven social service initiatives, by turning simple ideas into collective action.",
// };

// const About = () => {
//   return (
//     <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-14 max-w-6xl mx-auto">
//       <motion.h1
//         className="text-4xl font-bold text-center mb-6 text-purple-600"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         🧩 {data.title}
//       </motion.h1>
//       <p className="text-lg text-center mb-10">{data.intro}</p>

//       <div className="mb-14">
//         <h2 className="text-2xl font-semibold text-purple-600 mb-2">🌱 {data.missionTitle}</h2>
//         <p>{data.mission}</p>
//       </div>

//       <div className="mb-14">
//         <h2 className="text-2xl font-semibold text-purple-600 mb-6">💡 What We Offer</h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {data.offers.map((item, idx) => (
//             <div key={idx} className="bg-purple-50 dark:bg-gray-800 p-5 rounded-lg shadow hover:shadow-md">
//               <div className="text-2xl text-purple-600 mb-2">{item.icon}</div>
//               <h4 className="font-bold mb-1">{item.title}</h4>
//               <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mb-14">
//         <h2 className="text-2xl font-semibold text-purple-600 mb-3">👥 Who Is It For?</h2>
//         <ul className="list-disc ml-6 space-y-2">
//           {data.audience.map((aud, idx) => (
//             <li key={idx}>{aud}</li>
//           ))}
//         </ul>
//       </div>



//       <div className="text-center bg-purple-100 dark:bg-gray-800 p-8 rounded-xl">
//         <h3 className="text-2xl font-bold text-purple-700 mb-4">🚀 Our Vision</h3>
//         <p className="max-w-2xl mx-auto">{data.vision}</p>
//         <p className="mt-4 italic">🌍 Start small, think big — because change starts with you.</p>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';

const About = () => {
    return (
        <div>
            
        </div>
    );
};

export default About;