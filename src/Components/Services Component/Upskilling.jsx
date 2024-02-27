import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";
import UpskillingCourses from "./UpskillingCourses";

const Upskilling = () => {
  return (
    <div className="w-screen relative top-64">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row justify-items items-center relative left-28">
          <div>
            <img
              className="inline-block p-0 m-0"
              src="https://files.codingninjas.com/upskilling-course-icon-32521.svg"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <h2 className="relative mt-[-20px] text-lg font-bold ml-[-16px]">
              Upskilling Courses
              <span className="ml-2 border border-green bg-[#65B168] pl-2 pr-3 rounded-r-full py-1 text-xs font-bold text-white">
                30% off on all courses
              </span>
            </h2>
          </div>
        </div>
        <div className="flex-end text-sm right-36 text-[#f66c3b] decoration-[#f66c3b] underline font-medium relative self-center top-[-10px]">
          <Link to="/promotions/newcampaign">Get Upto 100% Scholarships</Link>
          <ArrowOutwardIcon
            style={{
              fontSize: 18,
              position: "relative",
              left: "2px",
              top: "-4px",
              color: "#F66C3B",
              fontWeight: 700,
            }}
          />
        </div>
      </div>
      <div className="w-screen relative pl-36 mt-[-10px]">
        <UpskillingCourses />
      </div>
    </div>
  );
};

export default Upskilling;
