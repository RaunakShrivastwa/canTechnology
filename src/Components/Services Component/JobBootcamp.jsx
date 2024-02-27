import React from "react";
import CourseCard from "./CourseCard";

const JobBootcamp = () => {
  return (
    <div>
      <div className=" flex flex-col">
        <div className="mt-16">
          <h1 className=" opacity-50 tracking-wide text-gray-400 place-content-center text-center text-8xl font-bold uppercase">
            Our Courses
          </h1>
        </div>
        <div>
          <div className="left-28 flex flex-row items-center relative top-8 max-w-fit">
            <div>
              <img
                className="inline-block p-0 m-0"
                src="https://files.codingninjas.com/bootcampicon-32524.svg"
                alt=""
              />
            </div>
            <div className="relative ml-[-16px]">
              <h4 className="inline text-center text-lg font-bold relative top-[-16px]">
                Job Bootcamp Courses
                <span className="text-sm ml-2 border px-3 font-base font-bolder  font-medium py-0.5 rounded-r-2xl bg-slate-300">
                  For professionals
                </span>
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 absolute ml-52">
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBootcamp;
