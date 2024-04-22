/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-async-client-component */
"use client";
import { Box, Button, Card, Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const TableHotExams = ({ data }) => {
  const [selectedView, setSelectedView] = useState("month");
  const renderRows = (items) => {
    return items?.slice(0, 10)?.map((item, index, array) => {
      const { vendor_title, exam_title, exam_perma, vendor_perma } = item;
      return (
        <>
          <div
            key={exam_perma}
            style={{ width: "100%" }}
            // style={{ width: "100%", border: "1px solid #003049" }}
            className="flex justify-center items-center relative pb-1 hover:text-blue-500"
          >
            <div className="flex-grow w-full pl-2 text-gray-700 hover:text-blue-400">
              <Link
                href={`/exam-questions/${vendor_perma}/${exam_perma}`}
                className="w-full"
                style={{ width: "100%" }} // corrected typo here from 'widht' to 'width'
              >
                <b className="font-semibold text-md tracking-wider">
                  <span className="text-blue-500">{vendor_title}</span>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {exam_title}
                  </p>
                </b>
              </Link>
            </div>
          </div>

          {index < array.length - 1 && (
            <hr
              style={{ marginBottom: "2px" }}
              className="bg-gradient-to-r from-gray-800 to-blue-400 "
            />
          )}
        </>
      );
    });
  };

  return (
    <>
      <Card className="text-white" sx={{ mb: 0.5, bgcolor: "#345277" }}>
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
      <Box sx={{ mb: 0.5 }}>
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

      <Card sx={{ borderRadius: "0px", width: "100%" }}>
        <section className="text-gray-600 body-font">
          <div className="container px-2 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full">
              <div className="md:py-2">
                <div style={{ border: "1px solid #E5E7EB" }}>
                  {selectedView === "week" && renderRows(data?.week)}
                  {selectedView === "month" && renderRows(data?.month)}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Card>
    </>
  );
};

export default TableHotExams;
