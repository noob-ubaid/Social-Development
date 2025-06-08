import React, { use } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import { AuthContext } from "../contexts/AuthProvider";
import { div } from "motion/react-client";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  const { loading } = use(AuthContext);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-[1600px] mx-auto font-roboto">
        <Navbar />
        <div className="px-4 md:px-0">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
