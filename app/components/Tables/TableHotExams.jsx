/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-async-client-component */
"use client";
//
import { Button, Card, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const TableHotExams = ({ data }) => {
  const [selectedView, setSelectedView] = useState("week");

  const renderRows = (items) => {
    return items?.slice(0, 10)?.map((item) => {
      const { vendor_title, exam_title, exam_perma, vendor_perma } = item;
      return (
        <>
          <div className="flex relative pb-6 hover:text-blue-500">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 text-white bg-gradient-to-r from-gray-500 to-stone-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full  bg-gradient-to-r from-gray-500 to-stone-800 inline-flex items-center justify-center text-white relative z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.8em"
                height="1.8em"
                viewBox="0 0 64 64"
              >
                <path
                  fill="white"
                  d="m57.063 20.218l1.029-1.698s.906-1.502.906-3.519c0-4.886-4.662-4.757-4.662-4.757L44.179 7.479L38.638 2l-7.291 1.985l-2.391-.651l-1.817 1.797l-10.497 2.858s-4.04-.111-4.04 4.123c0 1.748.786 3.05.786 3.05l1.351 2.23l-1.187 1.172l-5.86 1.596s-4.662-.129-4.662 4.757a7.56 7.56 0 0 0 .779 3.281L2 29.987l.949.376c.021.051.029.108.07.149c1.835 1.839 1.684 4.309 1.422 5.643l-1.109 1.111l8.401 4.039L23.271 60.35c1.849 2.906 5.774 1.088 5.774 1.088l29.649-14.256l-1.109-1.111c-.262-1.334-.413-3.804 1.422-5.644c.041-.041.049-.098.07-.148l.949-.377l-5.513-5.45l6.33-3.043l-.961-.963c-.227-1.156-.358-3.297 1.233-4.891c.035-.036.041-.084.06-.129l.825-.327zm-5.685-8.835l-1.25 1.978l-3.234-3.198zM39.176 7.144l4.643 4.963l-16.789 6.067l-3.965-6.156zM15.744 19.052l11.457 18.911l-21.827-8.658zm-4.775 2.067l-1.345 1.33l-.538-.825zm-4.247 1.034l1.252 1.927l-2.713 2.682a5.586 5.586 0 0 1-.331-1.845c0-1.826.906-2.521 1.792-2.764M5.154 37.026l.015-.058l25.147 11.007l-24.95-11.894c.023-.135.041-.284.06-.434l19.533 8.18l-19.465-9.116a7.723 7.723 0 0 0-.086-1.245l18.079 7.445L5.165 32.4a6.048 6.048 0 0 0-.47-1.137l24.883 10.625l.566.934c1.167 1.834 3.284 1.495 4.351 1.177c1.475.728 4.119 2.412 3.442 4.893c-.357 1.312-1.142 1.948-2.399 1.948c-1.273 0-2.544-.666-2.557-.675zM30.2 50.185l-1.966.814l-1.67-2.563zm-7.614 5.381l-7.729-12.759l7.682 3.693l3.633 5.592c-1.465.626-3.102 2.055-3.586 3.474m34.033-12.184a7.731 7.731 0 0 0-.086 1.245l-19.465 9.116l19.533-8.18c.019.149.036.299.06.434l-24.95 11.895l25.147-11.007a.982.982 0 0 1 .015.058L29.046 60.08c-.013.009-1.282.675-2.557.675c-1.258 0-2.042-.637-2.399-1.948c-.918-3.367 4.302-5.276 4.38-5.305l4.575-1.952c.491.209 3.994 1.584 5.711-1.115l1.083-1.786l17.494-7.47a6.12 6.12 0 0 0-.471 1.137L38.54 50.827zm.034-4.161l-14.825 6.144l4.114-6.791l6.767-3.253zm2.393-11.107a6.9 6.9 0 0 0-.075 1.079l-16.868 7.9l16.928-7.089c.017.129.031.26.052.376L37.459 40.688l21.794-9.539a.46.46 0 0 1 .013.05L35.149 42.586c-.011.007-1.112.585-2.216.585c-1.091 0-1.77-.553-2.079-1.689c-.796-2.918 3.728-4.572 3.796-4.597l25.014-10.68a5.268 5.268 0 0 0-.407.986l-15.88 7.376z"
                />
              </svg>
            </div>
            <Link
              href={`/exam-questions/${vendor_perma}/${exam_perma}`}
              className="w-full hover:text-blue-500"
            >
              <div className="flex-grow pl-4">
                <b className="font-semibold text-md mb-1 tracking-wider">
                  {vendor_title}
                </b>
                <p className="leading-relaxed text-sm">{exam_title}</p>
                <hr style={{ marginTop: "12px" }} />
              </div>
            </Link>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <Card
        className="text-white bg-gradient-to-r from-gray-800 to-blue-400 hover:bg-gradient-to-bl"
        sx={{ mb: 1 }}
      >
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
            style={{ marginTop: 3 }}
          >
            <path
              fill="red"
              d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.58.58 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27"
            ></path>
          </svg>
          <b>Hot Exams</b>
        </Typography>
      </Card>
      <Card sx={{ borderRadius: "0px" }}>
        <Grid container spacing={1} sx={{ padding: "5px" }}>
          <Grid item xs={6}>
            <Button
              className="bg-blue-500 text-white"
              fullWidth
              variant="contained"
              onClick={() => setSelectedView("week")}
            >
              {selectedView === "week" ? <b>This Week</b> : "This Week"}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              className="bg-blue-500 text-white"
              onClick={() => setSelectedView("month")}
            >
              {selectedView === "month" ? <b>This Month</b> : "This Month"}
            </Button>
          </Grid>
        </Grid>
      </Card>

      <Card sx={{ borderRadius: "0px", width: "100%", padding: "10px" }}>
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full">
              <div className="md:pr-1 md:py-6">
                {selectedView === "week" && renderRows(data?.week)}
                {selectedView === "month" && renderRows(data?.month)}
              </div>
            </div>
          </div>
        </section>
      </Card>
    </>
  );
};

export default TableHotExams;
