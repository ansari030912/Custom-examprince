/* eslint-disable @next/next/no-img-element */
"use client";
import { Icon } from "@iconify/react";
import { IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { useState, useEffect } from "react";

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "/dumpsarena-test-engine_optimized.png",
    "/dumpsarena-test-engine_optimized.png",
    "/dumpsarena-test-engine_optimized.png",
    "/dumpsarena-test-engine_optimized.png",
    "/dumpsarena-test-engine_optimized.png",
    "/dumpsarena-test-engine_optimized.png",
    "/dumpsarena-test-engine_optimized.png",
    "/dumpsarena-test-engine_optimized.png",
    "/dumpsarena-test-engine_optimized.png",
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out transform"
            style={{
              transform: `translateX(-${
                (currentIndex % slides.length) * (100 / 3)
              }%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-1/3 h-full flex-shrink-0">
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center h-full">
          <IconButton sx={{ bgcolor: "gray" }} onClick={prevSlide}>
            <Icon
              icon="mingcute:left-line"
              width="1.2em"
              height="1.2em"
              style={{ color: "#bfbfbf" }}
            />
          </IconButton>
          <IconButton
            sx={{ bgcolor: "gray", color: "gray" }}
            onClick={nextSlide}
          >
            <Icon
              icon="mingcute:right-line"
              width="1.2em"
              height="1.2em"
              style={{ color: "#bfbfbf" }}
            />
          </IconButton>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Link
          href={"https://releases.dumpsarena.com/DumpsArenaTestEngine.zip"}
          type="button"
          className="text-white flex bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          <Icon
            icon="ant-design:windows-outlined"
            width="1.5em"
            height="1.5em"
            style={{ color: "white" }}
          />
          Download for windows (.zip)
        </Link>
        <Link
          type="button"
          href={"https://releases.dumpsarena.com/DumpsArenaTestEngine.exe"}
          className="text-white flex bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          <Icon
            icon="ant-design:windows-outlined"
            width="1.5em"
            height="1.5em"
            style={{ color: "white" }}
          />
          Download for windows (.exe)
        </Link>
      </div>

      <div className="text-center font-bold">
        <Typography>version 2.0.15</Typography>
        <Typography>(required Win 8, Win 8.1 or Win 10)</Typography>
      </div>
    </>
  );
};

export default CustomCarousel;
