/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const CardComponent = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = window.innerWidth < 768 ? 6 : 12;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const renderCards = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const cards = data.slice(startIndex, endIndex);

    return (
      <Grid container spacing={2}>
        {cards.map((vendor, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Link href={`/vendor/${vendor.vendor_perma}`}>
              <Card
                className="transition-transform hover:scale-105 hover:bg-blend-hard-light"
                sx={{
                  boxShadow: "2px 2px 8px rgba(225, 140, 250, 100)",
                }}
              >
                <CardMedia>
                  <img
                    src="/vendor-card-img.png"
                    alt="card"
                    style={{ width: "100%" }}
                  />
                </CardMedia>
                <Divider />
                <CardContent sx={{ bgcolor: "#1F2937" }}>
                  <Typography
                    variant="h6"
                    fontSize={13}
                    fontWeight={700}
                    color="white"
                    sx={{
                      textAlign: "center",
                      mt: "-10px",
                      m: "-6px",
                      mb: "-10px",
                    }}
                  >
                    {vendor.vendor_title}
                  </Typography>
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
          key="first"
          onClick={() => handlePageChange(1)}
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          First
        </button>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pagination.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          type="button"
          className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
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
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Last
        </button>
      );
    }

    return pagination;
  };

  return (
    <Card
      sx={{
        padding: "15px",
        borderRadius: "0px",
        bgcolor: "#1F2937",
      }}
    >
      <Box sx={{ textAlign: "right", mb: 1 }}>
        <Link href="/all-vendors">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              View All Vendors
            </span>
          </button>
        </Link>
      </Box>
      <div className="cards">{renderCards()}</div>

      <Box sx={{ textAlign: "center", marginTop: 2 }}>{renderPagination()}</Box>
    </Card>
  );
};

export default CardComponent;
