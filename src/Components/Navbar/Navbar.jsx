import React from "react";
import RightNavbar from "./RightNavbar";
import LeftNavbar from "./LeftNavbar";

const Navbar = () => {
  return (
    <div className="w-screen flex flex-row justify-between items-center h-14 z-50 top-0 bg-white sticky">
      <div className="ml-24">
        <LeftNavbar />
      </div>
      <div className="flex-end mr-40">
        <RightNavbar />
      </div>
    </div>
  );
};

export default Navbar;
