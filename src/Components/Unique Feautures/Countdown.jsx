import React, { useState, useEffect } from "react";

const Countdown = ({ initialTime, isVideoPlaying }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (!isVideoPlaying || timeLeft === 0) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isVideoPlaying, timeLeft]);

  // Convert timeLeft to hours, minutes, and seconds
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  // Display the countdown timer
  return (
    <div>
      <p>{`${seconds.toString().padStart(2, "0")}`}</p>
    </div>
  );
};

export default Countdown;
