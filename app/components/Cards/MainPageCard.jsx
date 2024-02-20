import { Card, Grid, Typography } from "@mui/material";
import React from "react";

const MainPageCard = () => {
  return (
    <Card
      // className=
      sx={{
        p: "20px",
        bgcolor: "#1F2937",
        borderRadius: "0px",
      }}
    >
      <section class="text-gray-600 body-font">
        <div class="px-5 py-5 mx-auto">
          <div class=" mb-5">
            <h1 class="sm:text-4xl text-xl font-medium title-font text-white mb-4">
              <b>Ace Your Upcoming Certification Exam Quickly!</b>
            </h1>
            <p class="text-gray-200 leading-relaxed">
              <b>
                Prepare, study, and ace your certification exam effortlessly
                with everything you need. Enjoy 90 days of free updates and
                ensure 100% success on your first attempt.
              </b>
            </p>
          </div>
          <div class="flex flex-wrap  sm:mx-auto sm:mb-2 -mx-2">
            <div class="p-1 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded-tl-4xl  rounded-tr-none rounded-br-none flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                  <div class="font-bold">Latest Questions & Answers</div>
                </span>
              </div>
            </div>

            <div class="p-1 sm:w-1/2 w-full">
              <div class="bg-gray-100 md:rounded-tr-3xl rounded-tl-none rounded-bl-none flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                  <div className="font-bold">Easy to refund</div>
                </span>
              </div>
            </div>
            <div class="p-1 sm:w-1/2 w-full">
              <div class="bg-gray-100 flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                  <div className="font-bold">Hight sucess rate of (96.6%)</div>
                </span>
              </div>
            </div>
            <div class="p-1 sm:w-1/2 w-full">
              <div class="bg-gray-100 flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                  <div className="font-bold">Quick access availability</div>
                </span>
              </div>
            </div>
            <div class="p-1 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded-tr-none rounded-br-none md:rounded-bl-3xl flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <div className="font-bold">Instantly prepared access</div>
              </div>
            </div>
            <div class="p-1 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded-tr-none rounded-bl-none rounded-br-4xl flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                  <div className="font-bold">Safe, Private, Reliable</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Card>
  );
};

export default MainPageCard;
