import React from "react";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
  return (
    <div className="flex items-center mt-6 gap-8 mb-6 md:mt-8 md:gap-16 justify-between flex-col-reverse md:flex-row">
      <div>
        <motion.h2
          initial={{ filter: "blur(4px)", opacity: 0, y: 12 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="text-3xl md:text-4xl text-center md:text-left md:font-bold lg:text-[45px] font-semibold"
        >
          The Social Impact Hub -{" "}
          <span
            style={{ color: "#ad49e1", fontWeight: "bold", fontStyle: "italic" }}
          >
            <Typewriter
              words={[
                "GreenPulse",
                "EventSphere",
                "CivicConnect",
                "ServeSphere",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </span>
        </motion.h2>
        <motion.p
          initial={{ filter: "blur(4px)", opacity: 0, y: 12 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="max-w-[750px] text-gray-400 text-center md:text-left mt-6"
        >
          Create, join, and manage events that matter. From tree plantations to
          community donations — GreenPulse is your gateway to local impact.
          Connect with others, organize meaningful initiatives, and make a
          lasting difference in your community — one event at a time.
        </motion.p>
      </div>
      <div>
        <motion.img
          initial={{ filter: "blur(4px)", opacity: 0, y: 12 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="rounded-md w-full md:w-[700px]"
          src="https://media.istockphoto.com/id/1022255954/photo/people-planting-tree-in-park.jpg?s=612x612&w=0&k=20&c=g_lC-Irk0zpLf7Mi3SyPQIKqfSk4UpDACCIXrNeNE5A="
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
