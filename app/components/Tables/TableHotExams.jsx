"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const TableHotExams = ({ data }) => {
  const [selectedView, setSelectedView] = useState("month");
  const renderRows = (items) => {
    return items?.slice(0, 10)?.map((item, index, array) => {
      const { vendor_title, exam_title, exam_perma, vendor_perma, exam_code } =
        item;
      return (
        <>
          <div
            style={{ width: "100%", marginBottom: "8px" }}
            class="bg-white border border-gray-200 rounded-lg shadow hover:cursor-pointer hover:decoration-transparent"
          >
            <div className="px-4 pt-2">
              <Link href={`/exam-questions/${vendor_perma}/${exam_perma}`}>
                <div class="text-base font-semibold">
                  {vendor_title} {exam_code}
                </div>
              </Link>
              <Link href={`/exam-questions/${vendor_perma}/${exam_perma}`}>
                <h5 class=" text-base tracking-tight text-blue-500 ">
                  {exam_title}
                </h5>
              </Link>
              <Link
                href={`/exam-questions/${vendor_perma}/${exam_perma}`}
                class="flex pb-2 items-center justify-end text-gray-500 hover:text-blue-400"
              >
                <div class="flex items-center space-x-1 ">
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.1em"
                    height="1.1em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="#FDE047"
                      d="M239.18 97.26A16.38 16.38 0 0 0 224.92 86l-59-4.76l-22.78-55.09a16.36 16.36 0 0 0-30.27 0L90.11 81.23L31.08 86a16.46 16.46 0 0 0-9.37 28.86l45 38.83L53 211.75a16.4 16.4 0 0 0 24.5 17.82l50.5-31.08l50.53 31.08A16.4 16.4 0 0 0 203 211.75l-13.76-58.07l45-38.83a16.43 16.43 0 0 0 4.94-17.59m-15.34 5.47l-48.7 42a8 8 0 0 0-2.56 7.91l14.88 62.8a.37.37 0 0 1-.17.48c-.18.14-.23.11-.38 0l-54.72-33.65a8 8 0 0 0-4.19-1.17V32c.24 0 .27.08.35.26L153 91.86a8 8 0 0 0 6.75 4.92l63.91 5.16c.16 0 .25 0 .34.29s0 .4-.16.5"
                    />
                  </svg>
                  <div class="flex items-center">
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                      4.5
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <Card className="text-white" sx={{ mb: 1, bgcolor: "#345277" }}>
        <Typography
          color={"white"}
          fontSize={24}
          fontWeight={500}
          className="flex p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            viewBox="0 0 24 24"
            style={{ marginTop: 1 }}
          >
            <path
              fill="#ff1111"
              d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.58.58 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27"
            ></path>
          </svg>
          <b>Hot Exams</b>
        </Typography>
      </Card>
      <Box>
        <Grid container spacing={1} sx={{ padding: "5px" }}>
          <Grid item xs={6}>
            <Button
              className={`text-white ${
                selectedView === "month" ? "bg-gray-600" : "bg-blue-500"
              }`}
              fullWidth
              variant="contained"
              onClick={() => setSelectedView("month")}
            >
              {selectedView === "month" ? <b>This Month</b> : "This Month"}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              className={`text-white ${
                selectedView === "week" ? "bg-gray-600" : "bg-blue-500"
              }`}
              fullWidth
              variant="contained"
              onClick={() => setSelectedView("week")}
            >
              {selectedView === "week" ? <b>This Week</b> : "This Week"}
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: "100%" }}>
        <section className="text-gray-600 body-font w-full">
          <div className="mx-auto flex flex-wrap w-full">
            <div className="flex flex-wrap w-full">
              <div className="py-2 w-full">
                <div className="w-full">
                  {selectedView === "week" && renderRows(data?.week)}
                  {selectedView === "month" && renderRows(data?.month)}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Box>
    </>
  );
};

export default TableHotExams;
