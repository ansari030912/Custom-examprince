/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Icon,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const VideoCourseSlider = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const renderCards = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const cards = data.slice(startIndex, endIndex);

    return (
      <Grid container spacing={2}>
        {cards.map((vendor, index) => (
          <Grid item xs={6} sm={4} md={4} key={index}>
            <Link
              key={vendor.vendor_title}
              href={`/training-course/${vendor.perma}`}
            >
              <Card
                className="transition-transform hover:scale-105 hover:bg-blend-hard-light"
                sx={{
                  boxShadow: "1px 1px 3px rgba(150, 140, 250, 150)",
                }}
              >
                <CardMedia>
                  <img
                    src="/video-file-formats.png"
                    alt="card"
                    style={{ width: "100%" }}
                  />
                </CardMedia>
                <Divider />
                <CardContent
                  sx={{
                    bgcolor: "#1F2937",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "140px",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontSize={14}
                    fontWeight={700}
                    color="white"
                    sx={{
                      mt: "-10px",
                      m: "-6px",
                      mb: "5px",
                    }}
                  >
                    {vendor.title}
                  </Typography>

                  <Box
                    sx={{
                      padding: "5px",
                      mt: "5px",
                      mb: "-10px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        bgcolor: "#1F2937",
                        display: "flex",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#fff"
                          d="M109.98 98.53c-.28-6.25-2.39-10.31-6.21-13.83c-9.54-8.81-21.04-17.22-31.63-24.75c-4.91-3.49-10.37-8.1-16.06-10.23C48.06 46.71 39 47.78 30.41 49c-3.75.53-7.52 1.13-11.22 2c-4.28 1.02-9.36 2.23-12.99 4.8c-3.26 2.31-2.86 5.2-1.26 7.88c.24 1.23.01 2.4.02 3.65c.02 2.36-.25 4.72-.82 7c-.36 1.41-.85 2.77-1.31 4.15C1 83.82 6.05 88.3 9.79 91.39c2.1 1.73 4.34 3.29 6.45 5.01c8.2 6.67 16.6 12.7 24.99 19.05c9.83 7.45 13.58 10.04 25.85 5.85c3.31-1.13 6.7-2.03 10.09-2.9c4.8-1.23 11.18-2.4 15.85-4.04c4.73-1.66 10.84-3.86 14.31-7.65c1.74-1.89 2.48-4.6 2.49-7.12c.12-.31.18-.65.16-1.06"
                        />
                        <path
                          fill="#bdcf46"
                          d="M13.37 58.22c4.72-1.99 23.27-4.87 27.36-5.34c3.47-.4 7.84-.96 11.28-.45c1.39.23 5.85 2.56 10.48 5.71c9.47 6.44 34.45 25.17 36.03 26.62c.42.39 3.85 3.66 2.12 3.64c-1.75-.02-3.5.1-5.23.3c-2.96.35-20.23 4.46-28.07 6.38c-1.55.38-5.75 1.16-6.91 1.39c-3.28.67-5.97-.38-8.65-2.26c-5.59-3.9-40.37-30.7-41.28-32.59c-.66-1.34.67-2.47 2.87-3.4"
                        />
                        <path
                          fill="#2f2f2f"
                          d="M110.83 91.97c-1.08-2.84-3.64-5.09-5.95-7.23C94.31 74.98 83.2 67 71.56 58.6c-2.99-2.16-5.92-4.24-9.03-6.23c-1.54-.98-3.45-1.81-5.09-2.63c-5.42-2.71-11.06-2.51-16.92-1.84c-10.67 1.22-20.98 1.58-31.22 5.08c-2.85.98-5.64 2.34-6.3 5.77c-.26 1.39.51 3.74 1.01 5c.39.96-2.89 12.98-3.38 14.42c-1.22 3.59.54 6.81 2.99 9.5c1.34 1.48 39.08 30.57 40.03 31.26c3.6 2.65 6.45 4.46 9.5 5.34c3.86 1.11 8.03.69 14.43-1.49c2.57-.88 23.26-6.01 34.77-10.56c3.92-1.55 6.17-3.63 7.09-4.64c1.12-1.22 1.84-2.77 2.23-4.4c.24-.99.36-2.02.37-3.02c.1-.31-.43-6.14-1.21-8.19M13.37 58.22c4.72-1.99 23.27-4.87 27.36-5.34c3.47-.4 7.84-.96 11.28-.45c1.39.23 5.85 2.56 10.48 5.71c9.47 6.44 34.45 25.17 36.03 26.62c.42.39 3.85 3.66 2.12 3.64c-1.75-.02-3.5.1-5.23.3c-2.96.35-20.23 4.46-28.07 6.38c-1.55.38-5.75 1.16-6.91 1.39c-3.28.67-5.97-.38-8.65-2.26c-5.59-3.9-40.37-30.7-41.28-32.59c-.66-1.34.67-2.47 2.87-3.4M9.39 85.99c-.97-.98-4.78-3.5-3.74-6.68c1.12-3.44 2.19-9.01 2.43-12.68c4.3 3.45 44.34 34.01 46.82 34.72c1.55 4.82 1.57 10.23-.15 15c-.24.66-.43 1.3-.71 1.94c-1.1-.41-2.18-.99-3.34-1.7c-1.86-1.16-38.07-27.33-41.31-30.6m93.34 20.05c-3.6 2.57-9.03 3.6-12.59 4.65c-7.62 2.26-15.31 4.32-23.01 6.28c-2.29.58-4.61 1.28-6.95 1.67c.43-.95.8-1.93 1.06-2.96c.69-2.72.82-5.64.52-8.43c-.16-1.43-.21-4.04-.55-5.42c.4-.03 9.83-2.26 17.28-4.16c7.58-1.93 16.37-4.6 21.64-4.71a6.71 6.71 0 0 1 4.33 1.5c1.84 1.51 2.26 4.3 1.8 6.52c-.43 2.18-1.76 3.8-3.53 5.06"
                        />
                        <path
                          fill="#bdcf46"
                          d="M23.86 79.56c5.72 4.39 20.66 15.8 27.52 21.04c2.18 1.66 4.63 3.38 9.6 2.48c4.97-.9 35.97-8.94 35.97-8.94c2.83-.74 5.96-.94 8.86-.55c1.05.14 2.08.47 3.02.97c.33.18.68.36.98.6c.16.13.27.3.44.42c2.29 1.55.89-3.1.63-3.73c-.63-1.53-1.5-2.96-2.5-4.28a23.6 23.6 0 0 0-2.66-2.91c-10.56-9.75-22.24-18.19-33.88-26.59c-2.99-2.16-5.94-4.4-9.05-6.39c-1.54-.98-3.1-1.95-4.73-2.77c-5.43-2.71-11.5-2.44-17.36-1.77c-10.67 1.22-21.34 1.82-31.58 5.33c-2.86.98-6.31 2.81-6.95 6.26c-.26 1.39-.26 3.81 2.19 5.98c1.78 1.58 11.96 9.06 19.5 14.85"
                        />
                        <path
                          fill="#fff"
                          d="M125.71 71.96c-.28-6.25-2.39-10.31-6.21-13.83c-9.54-8.81-21.04-17.22-31.64-24.75c-4.91-3.49-10.37-8.1-16.06-10.23c-8.02-3.01-17.08-1.94-25.68-.72c-3.75.53-7.52 1.13-11.21 2c-4.28 1.01-9.37 2.23-13 4.8c-3.26 2.31-2.86 5.21-1.26 7.88c.24 1.23.01 2.4.02 3.65c.02 2.36-.25 4.72-.82 7c-.36 1.41-.85 2.77-1.31 4.15c-1.82 5.34 3.23 9.81 6.98 12.91c2.1 1.73 4.34 3.29 6.45 5.01c8.19 6.67 16.6 12.7 24.98 19.05c9.83 7.45 13.58 10.04 25.85 5.85c3.31-1.13 6.7-2.03 10.09-2.9c4.8-1.23 11.17-2.4 15.85-4.04c4.73-1.66 10.84-3.86 14.31-7.65c1.73-1.89 2.48-4.6 2.5-7.12c.12-.31.18-.66.16-1.06"
                        />
                        <path
                          fill="#bdcf46"
                          d="M29.1 31.65c4.72-1.99 23.26-4.87 27.36-5.34c3.47-.4 7.83-.96 11.28-.45c1.39.23 5.85 2.56 10.48 5.71c9.47 6.44 34.45 25.17 36.02 26.62c.42.39 3.86 3.66 2.13 3.64c-1.75-.02-3.49.1-5.23.3c-2.95.35-20.23 4.46-28.07 6.38c-1.55.38-5.75 1.16-6.91 1.39c-3.28.67-5.97-.38-8.66-2.26c-5.59-3.9-40.37-30.7-41.28-32.59c-.65-1.34.68-2.47 2.88-3.4"
                        />
                        <path
                          fill="#2f2f2f"
                          d="M126.56 67.38c-1.08-2.85-3.64-5.1-5.95-7.23c-10.56-9.75-21.67-17.74-33.32-26.13c-3-2.16-5.92-4.24-9.03-6.22c-1.55-.98-3.45-1.81-5.09-2.63c-5.44-2.71-11.06-2.51-16.93-1.84c-10.66 1.22-20.97 1.58-31.21 5.09c-2.85.98-5.65 2.33-6.3 5.77c-.26 1.39.5 3.74 1.01 5c.39.96-2.89 12.98-3.38 14.41c-1.22 3.59.54 6.81 2.99 9.51c1.34 1.48 39.08 30.57 40.03 31.26c3.6 2.64 6.45 4.46 9.5 5.33c3.85 1.1 8.03.69 14.43-1.49c2.57-.88 23.26-6.01 34.77-10.55c3.92-1.55 6.17-3.64 7.09-4.64c1.12-1.22 1.84-2.77 2.24-4.4c.24-.99.36-2.02.37-3.02c.09-.34-.44-6.17-1.22-8.22M29.1 33.63c4.72-1.99 23.26-4.86 27.36-5.34c3.47-.41 7.83-.96 11.28-.45c1.39.23 5.85 2.56 10.48 5.71c9.47 6.44 34.45 25.17 36.02 26.62c.42.39 3.86 3.66 2.13 3.64c-1.75-.02-3.49.09-5.23.3c-2.95.35-20.23 4.47-28.07 6.38c-1.55.38-5.75 1.15-6.91 1.39c-3.28.67-5.97-.38-8.66-2.25c-5.59-3.9-40.37-30.7-41.28-32.59c-.65-1.35.68-2.48 2.88-3.41M25.12 61.4c-.97-.98-4.78-3.49-3.74-6.68c1.12-3.44 2.19-9 2.42-12.68c4.3 3.44 44.34 34.01 46.82 34.72c1.55 4.82 1.57 10.23-.15 14.99c-.24.66-.43 1.31-.71 1.94c-1.1-.41-2.18-.99-3.34-1.7c-1.85-1.15-38.06-27.32-41.3-30.59m93.34 20.05c-3.6 2.56-9.03 3.6-12.58 4.66c-7.62 2.26-15.31 4.31-23.01 6.28c-2.3.59-4.61 1.28-6.95 1.67c.43-.95.79-1.93 1.06-2.96c.69-2.73.82-5.64.53-8.43c-.16-1.43-.22-4.03-.56-5.42c.4-.03 9.83-2.26 17.28-4.16c7.58-1.93 16.36-4.6 21.65-4.71c2.09-.04 3.63.93 4.32 1.5c1.84 1.51 2.27 4.3 1.81 6.52c-.45 2.17-1.78 3.79-3.55 5.05"
                        />
                        <path
                          fill="#006ca2"
                          d="M39.59 52.99c5.72 4.39 20.66 15.8 27.53 21.04c2.18 1.67 4.63 3.38 9.59 2.48c4.96-.9 35.97-8.94 35.97-8.94a23.4 23.4 0 0 1 8.86-.55c1.06.14 2.09.47 3.02.97c.33.18.68.36.98.6c.16.13.27.3.44.41c2.29 1.55.88-3.09.62-3.73c-.63-1.53-1.5-2.96-2.5-4.28a23.6 23.6 0 0 0-2.66-2.91C110.88 48.34 99.21 39.9 87.56 31.5c-3-2.16-5.94-4.4-9.05-6.39c-1.54-.98-3.1-1.95-4.73-2.77c-5.43-2.71-11.5-2.44-17.36-1.77c-10.67 1.22-21.34 1.82-31.58 5.33c-2.86.98-6.3 2.82-6.95 6.26c-.26 1.39-.26 3.81 2.19 5.98c1.79 1.58 11.97 9.06 19.51 14.85"
                        />
                        <path
                          fill="#fff"
                          d="M115.93 54.96c-.28-6.25-2.38-10.31-6.21-13.83c-9.54-8.81-21.04-17.22-31.63-24.75c-4.91-3.49-10.37-8.1-16.06-10.23c-8.02-3.01-17.09-1.94-25.67-.72c-3.76.53-7.53 1.13-11.22 2c-4.28 1.02-9.37 2.23-13 4.8c-3.26 2.31-2.86 5.21-1.26 7.88c.23 1.23.01 2.4.02 3.65c.02 2.36-.25 4.72-.83 7c-.35 1.41-.84 2.77-1.31 4.15c-1.82 5.34 3.23 9.81 6.98 12.91c2.1 1.73 4.34 3.29 6.45 5.01c8.19 6.67 16.6 12.7 24.98 19.05c9.83 7.45 13.59 10.04 25.86 5.85c3.31-1.13 6.69-2.03 10.09-2.9c4.8-1.23 11.17-2.4 15.84-4.04c4.74-1.66 10.84-3.86 14.32-7.65c1.73-1.89 2.48-4.6 2.5-7.12c.11-.31.17-.66.15-1.06"
                        />
                        <path
                          fill="#bdcf46"
                          d="M19.32 14.65c4.72-1.99 23.27-4.87 27.36-5.34c3.47-.4 7.84-.96 11.28-.45c1.38.23 5.85 2.56 10.48 5.71c9.47 6.44 34.45 25.17 36.02 26.62c.42.39 3.85 3.66 2.12 3.64c-1.75-.02-3.49.1-5.23.3c-2.96.35-20.23 4.46-28.07 6.38c-1.55.38-5.75 1.16-6.91 1.39c-3.28.67-5.97-.38-8.66-2.26c-5.59-3.9-40.37-30.7-41.28-32.59c-.63-1.35.69-2.48 2.89-3.4"
                        />
                        <path
                          fill="#2f2f2f"
                          d="M116.78 48.39c-1.08-2.84-3.63-5.09-5.95-7.23c-10.56-9.75-21.67-17.73-33.32-26.13c-2.99-2.16-5.92-4.24-9.03-6.23c-1.54-.98-3.45-1.81-5.09-2.63c-5.43-2.71-11.06-2.51-16.92-1.84C35.8 5.55 25.5 5.91 15.25 9.42c-2.85.98-5.65 2.33-6.3 5.77c-.26 1.39.5 3.74 1.01 5c.39.96-2.9 12.98-3.38 14.42c-1.22 3.59.54 6.81 2.99 9.5c1.34 1.48 39.08 30.57 40.03 31.26c3.6 2.65 6.45 4.46 9.5 5.33c3.85 1.11 8.03.69 14.43-1.49c2.58-.88 23.26-6.01 34.77-10.56c3.92-1.55 6.17-3.63 7.09-4.64c1.12-1.22 1.84-2.77 2.24-4.4c.24-.99.35-2.02.37-3.02c.09-.31-.44-6.14-1.22-8.2M19.32 14.65c4.72-1.99 23.27-4.87 27.36-5.34c3.47-.4 7.84-.96 11.28-.45c1.38.23 5.85 2.56 10.48 5.71c9.47 6.44 34.45 25.17 36.02 26.62c.42.39 3.85 3.66 2.12 3.64c-1.75-.02-3.49.1-5.23.3c-2.96.35-20.23 4.46-28.07 6.38c-1.55.38-5.75 1.16-6.91 1.39c-3.28.67-5.97-.38-8.66-2.26c-5.59-3.9-40.37-30.7-41.28-32.59c-.63-1.35.69-2.48 2.89-3.4m-3.98 27.77c-.97-.98-4.78-3.5-3.74-6.68c1.12-3.44 2.19-9.01 2.43-12.68c4.29 3.45 44.33 34.01 46.82 34.72c1.55 4.82 1.57 10.23-.15 15c-.24.66-.43 1.3-.71 1.94c-1.11-.41-2.18-.99-3.34-1.7c-1.85-1.16-38.07-27.34-41.31-30.6m93.35 20.04c-3.61 2.56-9.03 3.6-12.59 4.65c-7.62 2.26-15.31 4.32-23.01 6.28c-2.29.58-4.61 1.28-6.95 1.67c.43-.95.8-1.93 1.06-2.96c.69-2.72.82-5.64.52-8.43c-.16-1.43-.21-4.04-.55-5.43c.4-.03 9.83-2.26 17.28-4.15c7.58-1.93 16.37-4.6 21.65-4.71a6.71 6.71 0 0 1 4.33 1.5c1.84 1.51 2.26 4.3 1.8 6.52c-.45 2.18-1.78 3.81-3.54 5.06"
                        />
                        <path
                          fill="#ed6c30"
                          d="M29.81 35.98c5.73 4.39 20.66 15.8 27.53 21.04c2.18 1.67 4.63 3.38 9.59 2.48c4.96-.9 35.97-8.94 35.97-8.94c2.83-.74 5.96-.94 8.86-.55c1.05.14 2.08.47 3.02.97c.33.18.68.36.98.6c.16.13.27.3.44.42c2.29 1.55.88-3.1.62-3.73c-.63-1.53-1.5-2.96-2.5-4.28c-.8-1.04-1.69-2.01-2.65-2.91c-10.56-9.75-22.24-18.19-33.88-26.59c-2.99-2.16-5.94-4.4-9.06-6.39c-1.54-.97-3.09-1.94-4.73-2.76c-5.43-2.71-11.5-2.44-17.36-1.77C35.97 4.8 25.31 5.4 15.07 8.9c-2.86.98-6.31 2.82-6.96 6.26c-.26 1.39-.26 3.81 2.19 5.98c1.79 1.58 11.97 9.06 19.51 14.84"
                        />
                        <path
                          fill="#fff"
                          d="M39.65 24.54c-.87-.1-1.71-.35-2.51-.82c-1.61-.95-3.42-2.35-4.43-3.83c-1.19-1.74.2-2.38 1.95-2.82c2.42-.6 4.91-.99 7.4-1.32c2.56-.34 5.18-.54 7.74-.88c1.96-.27 3.97-.45 5.91-.64c1.17-.1 2.41-.3 3.56.06c1.18.37 2.24 1.19 3.14 1.96c1 .86 2.08 1.65 2.91 2.66c.23.29.49.56.57.93c.05.22.07.36-.05.55c-.33.48-1.22.81-1.78.87c-3.1.35-6.03 1.22-9.08 1.77c-2.69.48-5.48.6-8.2.92c-1.39.17-2.79.27-4.19.41c-.98.11-1.94.3-2.94.18"
                        />
                      </svg>{" "}
                      <Typography
                        variant="caption"
                        color={"white"}
                        sx={{ ml: "2px" }}
                      >
                        {vendor.videos} Lectures
                      </Typography>
                    </div>

                    <div
                      style={{
                        bgcolor: "#1F2937",
                        display: "flex",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.2rem"
                        height="1.2rem"
                        viewBox="0 0 72 72"
                      >
                        <circle
                          cx="35.905"
                          cy="36.014"
                          r="27.035"
                          fill="#fcea2b"
                        />
                        <circle
                          cx="36.006"
                          cy="36.037"
                          r="21.871"
                          fill="#fff"
                        />
                        <path
                          fill="none"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M55.11 25.38a21.863 21.863 0 1 1-8.095-8.245"
                        />
                        <path
                          fill="none"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M62.94 35.997a27.046 27.046 0 1 1-5.266-16.038"
                        />
                        <path
                          fill="none"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m47.394 21.578l11.038-1.16l-1.16-11.038m-7.297 26.974H35.891V18.52m0 35.391v-3.845M21.143 36.354h-3.057h0"
                        />
                        <circle cx="35.891" cy="36.354" r="3.737" />
                        <circle cx="48.694" cy="47.937" r="1.48" />
                        <circle cx="23.087" cy="24.717" r="1.48" />
                        <circle cx="23.087" cy="47.937" r="1.48" />
                      </svg>
                      <Typography
                        variant="caption"
                        color={"white"}
                        sx={{ ml: "2px" }}
                      >
                        {vendor.duration}
                      </Typography>
                    </div>
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pagination = [];
    const adjacentPages = 1; // Number of adjacent pages to show
    let startPage = Math.max(1, currentPage - adjacentPages);
    let endPage = Math.min(totalPages, currentPage + adjacentPages);

    // Adding button for the first page
    if (currentPage > 1) {
      pagination.push(
        <button
          style={{}}
          key="first"
          onClick={() => handlePageChange(1)}
          type="button"
          className="  focus:outline-none text-white bg-gradient-to-br hover:bg-gradient-to-l from-purple-800 to-purple-600 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          First
        </button>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pagination.push(
        <button
          style={{}}
          key={i}
          onClick={() => handlePageChange(i)}
          type="button"
          className={` focus:outline-none text-white bg-gradient-to-br hover:bg-gradient-to-l from-purple-800 to-purple-600 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
            currentPage === i ? "bg-gray-200" : ""
          }`}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages) {
      pagination.push(
        <button
          style={{
            textAlign: "center",
          }}
          key="last"
          onClick={() => handlePageChange(totalPages)}
          type="button"
          className=" focus:outline-none  text-white bg-gradient-to-br hover:bg-gradient-to-l from-purple-800 to-purple-600 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Last
        </button>
      );
    }

    return pagination;
  };

  return (
    <Box
      className="text-white bg-gradient-to-br from-gray-800 to-blue-400"
      sx={{
        padding: "15px",
        borderRadius: "0px",
        // bgcolor: "#1F2937",
      }}
    >
      <div className="cards">{renderCards()}</div>

      {data.length <= 3 ? (
        ""
      ) : (
        <Box sx={{ textAlign: "center", marginTop: 2 }}>
          {renderPagination()}
        </Box>
      )}
    </Box>
  );
};

export default VideoCourseSlider;
