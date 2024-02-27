import React, { useState } from "react";
import PopularCourses from "./CoursesDisplay/PopularCourses";
import DataStructureandAlgorithms from "./CoursesDisplay/Data Structure and Algorithms";
import WebDevelopment from "./CoursesDisplay/WebDevelopment";
import Competitive from "./CoursesDisplay/Competitive";
import AnalyticsandDataScience from "./CoursesDisplay/AnalyticsandDataScience";
import Interview from "./CoursesDisplay/interview";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const UpskillingCourses = () => {
  const [selected, setSelected] = useState("Popular Courses");

  const handleClick = (division) => {
    setSelected(division);
  };

  return (
    <div className="flex flex-row text-slate-400">
      <div className="w-72">
        {[
          "Popular Courses",
          "Data Structures and Algorithms",
          "Web Development",
          "Competitive",
          "Analytics & Data Science",
          "Interview",
        ].map((division) => (
          <div
            key={division}
            className={`mb-4 ${
              selected === division
                ? "border-l-2 border-blue-500"
                : "border-l-2"
            }`}
            onClick={() => handleClick(division)}
          >
            <button className="py-4 text-lg px-3 w-full text-left">
              {selected === division ? (
                <div className="flex flex-row items-center justify-between">
                  <div>{division}</div>{" "}
                  <div className="">
                    <KeyboardArrowRightIcon style={{ color: "blue" }} />
                  </div>
                </div>
              ) : (
                division
              )}
            </button>
          </div>
        ))}
      </div>
      <div>
        {selected === "Popular Courses" && <PopularCourses />}
        {selected === "Data Structures and Algorithms" && (
          <DataStructureandAlgorithms />
        )}
        {selected === "Web Development" && <WebDevelopment />}
        {selected === "Competitive" && <Competitive />}
        {selected === "Analytics & Data Science" && <AnalyticsandDataScience />}
        {selected === "Interview" && <Interview />}
      </div>
    </div>
  );
};

export default UpskillingCourses;
