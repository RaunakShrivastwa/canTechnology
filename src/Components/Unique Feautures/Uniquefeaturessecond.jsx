import React from "react";
import VideoUniqueSection from "./VideoUniqueSection";

const Uniquefeaturessecond = () => {
  return (
    <div className="flex flex-col text-white items-center">
      <div className="mt-48 mb-12">
        <img
          src="https://files.codingninjas.com/why-us2-33889.svg"
          alt=""
          srcset=""
        />
      </div>
      <div className="grid grid-cols-2 gird-flow-col gap-x-20 mb-20">
        <div className="px-10">
          <VideoUniqueSection />
        </div>
        <div className="cursor-pointer mt-6">
          <div className="flex flex-row items-center border boder-radius-1 h-16 border-slate-50 border-opacity-30 px-3 rounded py-2 rounded-lg mt-12 hover:border-0 hover:bg-[#FFFFFF0D]">
            <div className="ml-2">
              <img
                width={33}
                className="inline-block"
                src="https://files.codingninjas.com/live-one-one-doubt-support-32931.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold pl-6">
                Fastest 1:1 doubt support
              </h1>
            </div>
          </div>
          <div className="mt-12 flex flex-row items-center border boder-radius-1 h-16 border-slate-50 border-opacity-30 px-3 rounded py-2 rounded-lg mt-12 hover:border-0 hover:bg-[#FFFFFF0D]">
            <div className="ml-2">
              <img
                width={33}
                className="inline-block"
                src="https://files.codingninjas.com/stanford-iit-maang-faculty-32934.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold pl-6">
                Stanford/IIT/MAANG Faculty
              </h1>
            </div>
          </div>
          <div className="mt-12 flex flex-row items-center border boder-radius-1 h-16 border-slate-50 border-opacity-30  px-3 rounded py-2 rounded-lg mt-12 hover:border-0 hover:bg-[#FFFFFF0D] ">
            <div className="ml-2">
              <img
                width={33}
                className="inline-block"
                src="https://files.codingninjas.com/placement-assistance-32933.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold pl-6">
                Placement Assistance
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uniquefeaturessecond;
