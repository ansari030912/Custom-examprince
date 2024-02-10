/* eslint-disable @next/next/no-img-element */
"use client";
import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";

const CardComponent = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  // const maxPagesToShow = 6; // Adjust this value according to your requirement

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const renderCards = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const cards = data.slice(startIndex, endIndex);

    return (
      <Grid container spacing={2}>
        {cards.map((vendor, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Card
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
      <div className="cards">{renderCards()}</div>
      <Box sx={{ textAlign: "center", marginTop: 2 }}>{renderPagination()}</Box>
    </Card>
  );
};

export default CardComponent;
