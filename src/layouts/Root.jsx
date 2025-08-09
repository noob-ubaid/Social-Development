import React, { use } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import { AuthContext } from "../contexts/AuthProvider";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  const { loading } = use(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }
  return (
    <div className="bg-white dark:bg-gray-900">
        <Navbar />
      <div className="max-w-[1600px] mx-auto font-roboto">
        <div className="px-4 md:px-0">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
