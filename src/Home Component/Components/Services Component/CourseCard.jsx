import React from "react";

const CourseCard = () => {
  return (
    <div className="bg-slate-100 rounded-lg shadow-xl z-50 hover:shadow-2xl cursor-pointer">
      <div className="flex flex-row items-center pl-4 py-8 pr-16">
        <div className="border p-2 bg-white rounded-full">
          <img
            className="w-12"
            src="https://files.codingninjas.com/fullstack-32956.png"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-black ml-5 text-xl font-medium">
            Full Stack Web Development
          </h1>
        </div>
      </div>
      <div className="flex flex-row bg-white px-2 py-3 justify-around">
        <p className="text-gray-600 text-sm">140+ Hrs of Content</p>
        <p className="text-gray-600 text-sm">300+ Problems</p>
        <p className="text-gray-600 text-sm">10k+ Learners</p>
      </div>
    </div>
  );
};

export default CourseCard;
