"use client";
import React, { useEffect, useState } from "react";

function BackCountDown() {
  // Set the initial countdown duration to 16 hours (in milliseconds)
  const initialDuration = 16 * 60 * 60 * 1000; // 16 hours in milliseconds
  const [duration, setDuration] = useState(initialDuration);

  // Function to retrieve start time from local storage
  const getStartTimeFromLocalStorage = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      return localStorage.getItem("countdownStartTime");
    }
    return null;
  };

  // Get the start time from localStorage or set it to the current time
  const startTime = getStartTimeFromLocalStorage()
    ? parseInt(getStartTimeFromLocalStorage())
    : new Date().getTime();

  // Function to calculate remaining time based on start time and duration
  const calculateRemainingTime = () => {
    const currentTime = new Date().getTime();
    let remainingTime = duration - (currentTime - startTime);

    // If remaining time is negative or zero, reset the countdown
    if (remainingTime <= 0) {
      remainingTime = initialDuration;
      setDuration(initialDuration);

      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("countdownStartTime", currentTime.toString());
      }
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
