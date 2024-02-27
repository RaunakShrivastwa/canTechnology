import React, { useEffect, useState } from "react";
import Countdown from "./Countdown";

const VideoUniqueSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videRef, setVideoRef] = useState(null);

  function handlePlay() {
    setIsVideoPlaying(true);
  }
  function handlePause() {
    setIsVideoPlaying(false);
  }
  useEffect(() => {
    if (videRef) {
      setIsVideoPlaying(true);
    }
  });
  return (
    <div>
      <div className="flex flex-row">
        <div className="flex flex-col w-80 border border-slate-200 rounded rounded-lg p-4 bg-[#2d2d2d]">
          <div>
            <video
              ref={(ref) => setVideoRef(ref)}
              autoPlay
              onPlay={handlePlay}
              onPause={handlePause}
              src="https://az-files.codingninjas.com/1-1-doubt-support-with-subtitle-2-33136.mp4"
              className="z-1"
            ></video>
          </div>
          <div className="flex flex-row justify-between">
            <div className="py-3">
              <h1>Ankush Singhla</h1>
              <h1 className="text-sm">Co- Found of Coding Ninjas | Mentor</h1>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default VideoUniqueSection;
