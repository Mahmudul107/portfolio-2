import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Main = () => {
  useEffect(() => {
    document.body.classList.add("overflow-x-hidden");
    return () => {
      document.body.classList.remove("overflow-x-hidden");
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#082f49] to-[#1e1b4b] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-44">
      <Header />
      <div className="my-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
