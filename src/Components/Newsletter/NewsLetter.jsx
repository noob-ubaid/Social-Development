import React from "react";

const NewsLetter = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-32  dark:from-gray-900 dark:to-gray-800 transition-all duration-500 rounded-xl  my-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          🌱 Stay Updated with Our Events!
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 text-base md:text-lg">
          Subscribe to our newsletter to receive updates about social service
          events near you. Be a part of the change — one event at a time.
        </p>
      </div>

      <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
        <div className="w-full flex p-2 items-center justify-between  rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 outline-none"
          />
          <button
            type="button"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-main text-white font-semibold  transition-all duration-300"
          >
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewsLetter;
