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
      <div className="grid grid-cols-2 gap-x-20 mb-20">
        <div>
          <VideoUniqueSection />
        </div>
        <div>
          <div className="flex flex-row items-center border boder-radius-1 border-white px-3 rounded py-2 rounded-lg mt-12 hover:border-0 hover:bg-[#FFFFFF0D]">
            <div>
              <img
                width={44}
                className="inline-block"
                src="https://files.codingninjas.com/live-one-one-doubt-support-32931.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl text-bold pl-2">
                Fastest 1:1 doubt support
              </h1>
            </div>
          </div>
          <div className="mt-12 flex flex-row items-center border boder-radius-1 border-white px-3 rounded py-2 rounded-lg">
            <div>
              <img
                width={44}
                className="inline-block"
                src="https://files.codingninjas.com/live-one-one-doubt-support-32931.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl text-bold">Fastest 1:1 doubt support</h1>
            </div>
          </div>
          <div className="mt-12 flex flex-row items-center border boder-radius-1 border-white px-3 rounded py-2 rounded-lg">
            <div>
              <img
                width={44}
                className="inline-block"
                src="https://files.codingninjas.com/live-one-one-doubt-support-32931.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl text-bold">Fastest 1:1 doubt support</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uniquefeaturessecond;
