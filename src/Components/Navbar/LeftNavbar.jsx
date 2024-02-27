import React from "react";
import CircleIcon from "@mui/icons-material/Circle";

const LeftNavbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-around">
        <div>
          <img
            src="https://files.codingninjas.in/new_cn_logo-29829.svg"
            alt="Logo"
          />
        </div>
        <div className="ml-12 font-semibold">
          <p className="shadow-sm text-sm">Job Bootcamp</p>
        </div>
        <div className="ml-12 flex flex-col font-semibold items-center">
          <p className="shadow-sm text-sm">
            Upskilling Courses
            <span>
              <CircleIcon
                color="primary"
                style={{
                  fontSize: 8,
                  position: "absolute",
                  top: 20,
                }}
              />
            </span>
          </p>
          <p className="text-[10px] font-normal">Upto 100% Scholarship</p>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar;
