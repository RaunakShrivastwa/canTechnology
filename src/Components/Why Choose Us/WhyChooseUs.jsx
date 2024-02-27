import React from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Table from "./Table";
import Highlight from "./Highlight";

const WhyChooseUs = () => {
  const iconStyle = {
    background:
      "-webkit-linear-gradient(112deg, #fa00ff -3.21%, #ff8a00 97.8%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className="flex flex-col px-28 rounded rounded-xl">
      <div className="border border-white mb-28">
        <div>
          <Table />
        </div>
        <div className="mb-10">
          <Highlight />
        </div>
      </div>
      <div className="text-center mt-[-6] mb-12">
        <button className="py-4 px-8 bg-orange-700 text-white rounded-lg opacity-80">
          Explore Courses <KeyboardDoubleArrowUpIcon />
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
