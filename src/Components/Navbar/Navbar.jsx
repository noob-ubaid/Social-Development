import React from "react";
import { FaHandshakeAngle } from "react-icons/fa6";
import { NavLink } from "react-router";
import { motion } from "motion/react";
import { delay } from "motion";

const Navbar = () => {
  const word = "SocialMates";
  const letters = word.split("");
  console.log(letters);
  const links = (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
      <NavLink className={`text-lg `}>Home</NavLink>
      <NavLink className={`text-lg `}>Upcoming Events</NavLink>
    </div>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex ml-3 md:ml-0 items-center gap-2 md:gap-3">
          <FaHandshakeAngle size={28} />
          
           <h1>
             {letters.map((letter, index) => (
              <motion.p
                initial={{filter:"blur(6px)", opacity: 0, y: 12 }}
                animate={{filter:"blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.3 , delay: 0.1 * index}}
                className="text-xl font-semibold inline-block md:text-2xl"
                key={index}
              >
                {letter}
              </motion.p>
            ))}
           </h1>
          
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
