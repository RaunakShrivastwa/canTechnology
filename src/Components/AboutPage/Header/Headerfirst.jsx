import React from "react";

const Headerfirst = () => {
  return (
    <div>
      <div className="py-12 flex flex-col items-center ">
        <div>
          <h4 className="text-white font-base mt-3  text-2xl mb-4">
            Restricted by opportunities?
          </h4>
        </div>
        <div>
          <h1 className="text-white mt-2 tracking-wider text-6xl text-wrap font-bold">
            Get the tech career <br />
            <span className="leading-normal"> you deserve. Faster</span>
          </h1>
        </div>
        <div>
          <p className="mt-3 text-base text-gray-400 opacity-70">
            Structured coding courses that get you there faster with confidence.
          </p>
        </div>
        <div className="mt-14">
          <button className="opacity-90 border border-amber-500 opacity-85 px-12 py-4 rounded bg-[#f66c3b] text-white font-bold">
            Explore Courses
            <img
              className="inline-block ml-2"
              src="https://files.codingninjas.com/arrow-double-down-32299.svg"
              alt="arrowdown"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Headerfirst;
