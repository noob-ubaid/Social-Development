import React, { use, useRef, useState } from "react";
import { FaHandshakeAngle } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { AuthContext } from "../../contexts/AuthProvider";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { MdCancel } from "react-icons/md";
import { useDarkMode } from "../../contexts/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
const Navbar = () => {
  const word = "Jovent";
    const { darkMode, setDarkMode } = useDarkMode();
    const handleTheme = () => {
      setDarkMode(!darkMode)
    }
  const [open, setOpen] = useState(false);
  const letters = word.split("");
  const { user, logOut } = use(AuthContext);

  const links = (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
      <NavLink to="/" className="text-lg font-medium">
        Home
      </NavLink>
      <NavLink to="/upcomingevents" className="text-lg font-medium">
        Upcoming Events
      </NavLink>
    </div>
  );

  return (
    <div className=" relative flex items-center py-2 px-3 md:px-0 justify-between overflow-visible z-30">
      <div className="w-[50%] md:w-[25%] flex items-center">
        <div className="dropdown relative z-50">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <div className="flex ml-1 md:ml-0 items-center gap-1 md:gap-3 whitespace-nowrap overflow-hidden">
          <motion.p>
            <FaHandshakeAngle className="text-main text-xl md:text-3xl" />
          </motion.p>
          <h1 className="flex flex-wrap items-center gap-[1px] text-nowrap">
            {letters.map((letter, index) => (
              <motion.span
                initial={{ filter: "blur(6px)", opacity: 0, y: 12 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.1 * index }}
                className="text-lg font-semibold text-nowrap md:text-2xl"
                key={index}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <motion.div
        initial={{ filter: "blur(4px)", opacity: 0, y: 12 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex items-center gap-2 md:gap-4 relative z-50"
      >
        {user && (
          <Tooltip title={user.displayName} placement="top">
            <Button
              variant="text"
              disableRipple
              disableElevation
              className="min-w-0 p-0 rounded-full"
              style={{ minWidth: 0, padding: 0 }}
              onClick={() => setOpen(true)}
            >
              <img
                className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                src={user?.photoURL}
                alt="User"
              />
            </Button>
          </Tooltip>
        )}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ filter: "blur(6px)", opacity: 0, y: 20 }}
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="absolute top-14 right-0 mt-2 w-56 bg-white border z-50 rounded shadow-lg p-4 dark:bg-gray-800"
            >
              <p className="mb-2 text-sm font-semibold text-gray-800 dark:text-white">
                Events
              </p>
              <button
                onClick={() => setOpen(false)}
                className="text-white absolute top-3 right-3"
              >
                <MdCancel size={25} />
              </button>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    to="/create"
                    className="block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white"
                  >
                    Create Event
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/manage"
                    className="block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white"
                  >
                    Manage Events
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/joined"
                    className="block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white"
                  >
                    Joined Events
                  </NavLink>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        

        {user ? (
          <button
            onClick={() => logOut()}
            className=" bg-main text-white px-4 py-2 rounded-full md:px-8 md:py-3"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className=" bg-main text-white px-4 py-2 rounded-full md:px-8 md:py-3"
          >
            Login
          </Link>
        )}
        <button onClick={handleTheme}>
          {darkMode ? <CiLight className="text-2xl md:text-4xl"/> :  <MdDarkMode className="text-2xl md:text-4xl"/> }
        </button>
      </motion.div>
    </div>
  );
};

export default Navbar;
