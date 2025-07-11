import {
  FaCalendarAlt,
  FaLock,
  FaSearchLocation,
  FaUsers,
} from "react-icons/fa";
import { MdEventAvailable, MdOutlineDashboard } from "react-icons/md";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaCalendarAlt className="text-4xl text-blue-600" />,
    title: "Create & Join Events",
    description:
      "Users can create social events or join existing ones with just a few clicks.",
  },
  {
    icon: <FaUsers className="text-4xl text-green-600" />,
    title: "Community Driven",
    description:
      "Promotes real-life social development by encouraging community involvement.",
  },
  {
    icon: <MdEventAvailable className="text-4xl text-orange-500" />,
    title: "Upcoming Events Feed",
    description:
      "Stay updated with all upcoming local social events in a clean grid layout.",
  },
  {
    icon: <MdOutlineDashboard className="text-4xl text-purple-600" />,
    title: "Manage Your Events",
    description:
      "Easily view and manage the events you've created, including updates.",
  },
  {
    icon: <FaLock className="text-4xl text-red-500" />,
    title: "Secure Authentication",
    description:
      "Password and social logins with Firebase & JWT-based route protection.",
  },
  {
    icon: <FaSearchLocation className="text-4xl text-yellow-500" />,
    title: "Smart Filters & Search",
    description:
      "Filter by event type or search by name — fast and powered by MongoDB.",
  },
];
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const FeatureSection = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 rounded-md my-10 md:mt-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          className="text-3xl feature-title md:text-4xl font-bold mb-12 text-gray-800 dark:text-white"
        >
          What Makes Our Platform Special?
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              variants={cardVariants}
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-2xl border border-[#14141426] shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
