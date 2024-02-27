import React from "react";

const Highlight = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row mt-16 justify-between w-3/4">
          <div>
            <img
              src="https://files.codingninjas.com/new-cn-logos-31142.svg"
              alt=""
            />
          </div>
          <div>
            <h3 class="text-base bg-gradient-to-r text-transparent bg-clip-text from-pink-500 to-orange-500 inline-block">
              Your dream role, faster and with confidence!
            </h3>
          </div>
        </div>
        <div className="bg-gradient-to-r from-pink-500 to-orange-500 h-2 mt-4 w-9/12"></div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row mt-10 mb-14 justify-between">
            <div>
              <h3 className="text-white font-semibold">Others</h3>
            </div>
            <div>
              <h3 className="text-white font-semibold  inline-block ml-56 pl-72">
                Average role, under-confident
              </h3>
            </div>
          </div>
          <div className="h-2 mt-[-40px] bg-white opacity-70 rounded rounded-sm w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
