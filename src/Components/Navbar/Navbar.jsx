import React, { useState } from "react";
import { FaHandshakeAngle } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../../contexts/AuthProvider";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { useDarkMode } from "../../contexts/ThemeContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const { user, logOut } = React.useContext(AuthContext);

  const word = "Jovent".split("");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Upcoming Events", path: "/upcomingevents" },
    { name: "Past Events", path: "/pastEvents" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const eventLinks = [
    { name: "Create Event", path: "/create" },
    { name: "Manage Events", path: `/manage/${user?.email}` },
    { name: "Joined Events", path: "/joined" },
  ];

  const events = (
    <div>
      {user?.email && (
        <div
          className="relative ml-0 lg:ml-4 mt-2 lg:mt-0"
          onMouseEnter={() => setIsEventsOpen(true)}
          onMouseLeave={() => setIsEventsOpen(false)}
        >
          <div className="text-lg dark:text-white text-center justify-center nav font-medium flex items-center gap-2 cursor-pointer select-none">
            Events <FaCaretDown />
          </div>
          <AnimatePresence>
            {isEventsOpen && (
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute z-[50] mt-2 w-52 bg-base-100 dark:bg-gray-800 rounded-box shadow p-2 space-y-1"
              >
                {eventLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      className="block px-4 py-2 rounded text-base md:text-lg hover:bg-gray-100 text-center dark:hover:bg-gray-700 text-gray-800 dark:text-white"
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".nav", { opacity: 0, y: -10, duration: 0.4, stagger: 0.2 });
    tl.from(".end", { opacity: 0, y: -10, duration: 0.4, stagger: 0.1 });
  });

  return (
    <div className="sticky top-0 bg-main/10  backdrop-blur-2xl rounded-none md:rounded-md z-50  py-4 px-3 md:px-4  overflow-visible">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <div className="flex items-center ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 dark:text-white"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dark:bg-gray-800 dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-lg text-center nav px-4 py-2 rounded-md dark:text-white font-medium"
              >
                {link.name}
              </NavLink>
            ))}
            {events}
          </ul>
        </div>

        <div className="flex ml-1 md:ml-0 items-center gap-1 md:gap-3 whitespace-nowrap overflow-hidden">
          <FaHandshakeAngle className="text-main text-xl md:text-3xl" />
          <h1 className="flex flex-wrap items-center gap-[1px] text-nowrap">
            {word.map((letter, idx) => (
              <motion.span
                key={idx}
                initial={{ filter: "blur(6px)", opacity: 0, y: -12 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.15 * idx }}
                className="text-lg dark:text-white font-semibold text-nowrap md:text-2xl"
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>
      </div>

      <div className="hidden lg:flex flex-col lg:flex-row items-center gap-4 lg:gap-0">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className="text-lg nav px-4 py-2 rounded-md dark:text-white font-medium"
          >
            {link.name}
          </NavLink>
        ))}
        {events}
      </div>

      <div className="flex items-center gap-1">
        <div className="end">
          {user && (
            <Tooltip title={user.displayName} placement="top" arrow>
              <Button
                variant="text"
                disableRipple
                disableElevation
                className="min-w-0 p-0 rounded-full"
              >
                <img
                  src={user?.photoURL}
                  alt="User"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                />
              </Button>
            </Tooltip>
          )}
        </div>

        <div className="end">
          {user ? (
            <button
              onClick={logOut}
              className="bg-main text-white px-4 py-2 rounded-full md:px-8 md:py-3"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-main text-white px-4 py-2 rounded-full md:px-8 md:py-3"
            >
              Login
            </Link>
          )}
        </div>

        <button className="end" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <CiLight className="text-2xl text-white md:text-4xl" />
          ) : (
            <MdDarkMode className="text-2xl text-black md:text-4xl" />
          )}
        </button>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
