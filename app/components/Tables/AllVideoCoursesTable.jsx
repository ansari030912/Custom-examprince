"use client";
import {
  Box,
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import VideoCourseSlider from "../CardSlider/VideoCourseSlider";

const AllVideoCoursesTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 15;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Card
        sx={{
          color: "white",
          bgcolor: "#111827",
          padding: "10px",
        }}
      >
        <Typography
          color={"white"}
          fontSize={24}
          fontWeight={700}
          className="text-white"
        >
          Video Training Courses
        </Typography>
      </Card>

      {Array.isArray(data) &&
        data
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((item) => {
            const { vendor_title, training_courses, vendor_id, vendor_perma } =
              item;
            return (
              <Card key={vendor_title} sx={{ my: "10px", bgcolor: "#1F2937" }}>
                <Box
                  sx={{
                    m: "10px",
                    color: "white",
                    backgroundImage:
                      "linear-gradient(to bottom right, #6B46C1, #B153EA)",
                    "&:hover": {
                      backgroundImage:
                        "linear-gradient(to bottom left, #6B46C1, #B153EA)",
                    },
                    "&:focus": {
                      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.5)",
                      outline: "none",
                      ringColor: "blue-300",
                    },
                    "&:focus.dark": {
                      boxShadow: "0 0 0 3px rgba(3, 102, 214, 0.5)",
                      outline: "none",
                      ringColor: "blue-800",
                    },
                    fontFamily: "Inter",
                    borderRadius: "0.375rem", // rounded-lg equivalent
                    fontSize: "0.875rem", // text-sm equivalent
                    padding: "0.5rem 1rem", // px-5 py-2.5 equivalent
                    marginBottom: "0.5rem", // mb-2 equivalent
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={600}
                    sx={{ display: "flex" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.7rem"
                      height="1.7rem"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1.27 1.27 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506c.766.582 1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452c.347 0 .674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z"
                      />
                      <path
                        fill="white"
                        d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182c.04-.03.077-.062.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2c-.947 0-1.58 1.136-2.847 3.408"
                        opacity="0.5"
                      />
                    </svg>{" "}
                    {vendor_title}
                  </Typography>
                </Box>
                <Box sx={{ padding: "10px" }}>
                  <VideoCourseSlider data={training_courses} />
                </Box>
              </Card>
            );
          })}
    </>
  );
};
export default AllVideoCoursesTable;
