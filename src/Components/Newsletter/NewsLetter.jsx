import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
     
    },
  },
};

const NewsLetter = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-32 dark:from-gray-900 dark:to-gray-800 transition-all duration-500 rounded-xl my-8 md:my-10">
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
          variants={itemVariants}
        >
          🌱 Stay Updated with Our Events!
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 text-base md:text-lg"
          variants={itemVariants}
        >
          Subscribe to our newsletter to receive updates about social service
          events near you. Be a part of the change — one event at a time.
        </motion.p>
      </motion.div>

      <motion.form
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <motion.div
          variants={itemVariants}
          className="w-full flex p-2 items-center justify-between rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 outline-none bg-transparent"
          />
          <button
            type="button"
            className="md:px-8 md:py-3 px-4 py-2 rounded-full bg-main text-white font-semibold transition-all duration-300"
          >
            Subscribe
          </button>
        </motion.div>
      </motion.form>
    </section>
  );
};

export default NewsLetter;
