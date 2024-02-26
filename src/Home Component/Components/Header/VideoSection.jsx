import React, { useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const VideoSection = () => {
  const videoref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  function playingandpausing() {
    if (isPlaying) {
      videoref.current.pause();
    } else {
      videoref.current.play();
    }
    setIsPlaying(!isPlaying);
  }
  function UpdateTime() {
    setCurrentTime(videoref.current.currentTime);
    setDuration(videoref.current.duration);
  }
  function handleSeek(e) {
    const seekTime = e.target.value;
    videoref.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  }
  return (
    <div>
      <div>
        <video
          autoPlay
          loop
          muted
          ref={videoref}
          src="https://az-files.codingninjas.com/trailer-2-33063.mp4"
          type="video/mp4"
          onTimeUpdate={UpdateTime}
        ></video>
        <div>
          <button
            onClick={playingandpausing}
            className="relative top-[-33px] text-white left-[6px]"
          >
            {isPlaying ? (
              <PauseIcon color="white" />
            ) : (
              <PlayArrowIcon color="white" />
            )}
          </button>
          <input
            className="w-11/12 cursor-pointer opacity-60 bg-black relative top-[-30px] left-[12px] hover:opacity-100"
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            step={1}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
