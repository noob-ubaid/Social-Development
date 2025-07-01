import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 dark:border-gray-600 dark:border-t rounded-md py-16">
      <div className="max-w-3xl mx-auto px-4 text-center ">
        {/* Logo */}
        <div className="flex items-center flex-col justify-center">
          <p className="icon flex items-center gap-2">
            <FaHandshakeAngle className="text-main text-xl md:text-3xl" />
            <span className="text-lg dark:text-white font-semibold text-nowrap md:text-2xl">
              Jovent
            </span>
          </p>
          <p className="text-gray-400 border-b border-gray-400 dark:border-gray-600 pb-4 mt-4 mb-6">
            Create, join, and track local social service events with Jovent
            Events, connecting communities through impactful activities like
            cleanups and tree plantations.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-7 pb-6 border-b border-gray-400 dark:border-gray-600 mb-6">
          <Link
            className="font-medium  text-gray-700 dark:text-gray-300 hover:text-[#AD49E1] duration-200 text-sm sm:text-base"
            to="/"
          >
            Home
          </Link>
          <Link
            className="font-medium  text-gray-700 dark:text-gray-300 hover:text-[#AD49E1] duration-200 text-sm sm:text-base"
            to="/upcomingevents"
          >
            Upcoming Events
          </Link>
          <Link
            className="font-medium  text-gray-700 dark:text-gray-300 hover:text-[#AD49E1] duration-200 text-sm sm:text-base"
            to="/pastEvents"
          >
            Past Events
          </Link>
          <Link
            className="font-medium  text-gray-700 dark:text-gray-300 hover:text-[#AD49E1] duration-200 text-sm sm:text-base"
            to="/about"
          >
            About Us
          </Link>
          <Link
            className="font-medium  text-gray-700 dark:text-gray-300 hover:text-[#AD49E1] duration-200 text-sm sm:text-base"
            to="/contact"
          >
            Contact Us
          </Link>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ubaidur-rahman01/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-[#AD49E1] duration-300" />
          </a>
          <a
            target="_blank"
            href="https://x.com/UbaidurRah24983?t=dXrrCouR6TD9CaqpfD2DGQ&s=08"
            aria-label="Twitter"
          >
            <FaTwitter className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-[#AD49E1] duration-300" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/ubaidur.rahman.881781?rdid=Jod9W9noAyDDBpMT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FXDbMmv5i%2F#"
            aria-label="Facebook"
          >
            <FaFacebook className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-[#AD49E1] duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
