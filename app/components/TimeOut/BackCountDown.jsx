"use client";
import React, { useEffect, useState } from "react";

function BackCountDown() {
  // Set the initial countdown duration to 16 hours (in milliseconds)
  const initialDuration = 16 * 60 * 60 * 1000; // 16 hours in milliseconds
  const [duration, setDuration] = useState(initialDuration);

  // Get the start time from localStorage or set it to the current time
  const startTime = localStorage.getItem("countdownStartTime")
    ? parseInt(localStorage.getItem("countdownStartTime"))
    : new Date().getTime();

  // Calculate the remaining time based on the start time and duration
  const calculateRemainingTime = () => {
    const currentTime = new Date().getTime();
    let remainingTime = duration - (currentTime - startTime);

    // If remaining time is negative or zero, reset the countdown
    if (remainingTime <= 0) {
      remainingTime = initialDuration;
      setDuration(initialDuration);
      localStorage.setItem("countdownStartTime", currentTime.toString());
    }

    return remainingTime;
  };

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  // Update the remaining time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Convert remaining time to hours, minutes, and seconds
  const hours = Math.floor(remainingTime / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return (
    <span className="text-red-500">
      {hours}h {minutes}m {seconds}s
    </span>
  );
}

export default BackCountDown;
