"use client";
import { Icon } from "@iconify/react";
import {
  Box,
  Card,
  Grid,
  Snackbar,
  SnackbarContent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const ExamAddToCart = ({ data }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleBoxClick = (item) => {
    localStorage.removeItem("ExamData");
    localStorage.setItem("ExamData", JSON.stringify(data));
    localStorage.removeItem("CartProducts");
    localStorage.setItem("CartProducts", JSON.stringify(item));
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Grid container spacing={2}>
        {Array.isArray(data.exam_prices) &&
          data.exam_prices.map((item, index) => {
            const { title, full_price, price, off, cart } = item;
            return (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  onClick={() => handleBoxClick(item)}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Card
                    className="text-white"
                    sx={{
                      backgroundColor: "#E5E7EB",
                      overflow: "hidden",
                      display: "flex",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.04)",
                        border: "none",
                      },
                      borderRadius: "0px",
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "0px",
                      borderBottomRightRadius: "15px",
                      borderBottomLeftRadius: "0px",
                    }}
                  >
                    <Box>
                      {off !== 0 && (
                        <div
                          style={{
                            color: "white",
                            backgroundColor: off >= 50 ? "#2880ed" : "#1fad53",
                            padding: "10px",
                          }}
                          className="font-bold justify-center p-1"
                        >
                          <span
                            style={{
                              color: off >= 50 ? "yellow" : "white",
                              font: off >= 50 ? "bold" : "",
                            }}
                          >
                            {off}% Off
                          </span>
                          <div className="flex justify-center">
                            {off >= 50 ? (
                              <div className="flex justify-between">
                                <Icon
                                  icon="tdesign:cart-add"
                                  width="1.8em"
                                  height="1.8em"
                                  style={{ color: "yellow" }}
                                />
                              </div>
                            ) : (
                              <Icon
                                icon="tdesign:cart-add"
                                width="1.8em"
                                height="1.8em"
                                style={{ color: "white" }}
                              />
                            )}
                          </div>
                        </div>
                      )}
                    </Box>
                    <div
                      style={{
                        padding: "5px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        fontWeight={700}
                        color={"#1F2937"}
                        fontSize={18}
                        className="text-left"
                      >
                        {title}
                      </Typography>
                      <div>
                        <div className="flex justify-between">
                          <div>
                            <span className="text-2xl font-bold text-gray-500">
                              ${price}
                            </span>
                            <span className="text-xl font-medium text-red-500 line-through ml-1">
                              ${full_price}
                            </span>
                          </div>
                          {off >= 70 ? (
                            <div className="align-right">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.8em"
                                height="1.8em"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill="navy"
                                  fill-rule="evenodd"
                                  d="m9.194 5l.351.873l.94.064l3.197.217l-2.46 2.055l-.722.603l.23.914l.782 3.108l-2.714-1.704L8 10.629l-.798.5l-2.714 1.705l.782-3.108l.23-.914l-.723-.603l-2.46-2.055l3.198-.217l.94-.064l.35-.874L8 2.025zm-7.723-.292l3.943-.268L6.886.773C7.29-.231 8.71-.231 9.114.773l1.472 3.667l3.943.268c1.08.073 1.518 1.424.688 2.118L12.185 9.36l.964 3.832c.264 1.05-.886 1.884-1.802 1.31L8 12.4l-3.347 2.101c-.916.575-2.066-.26-1.802-1.309l.964-3.832L.783 6.826c-.83-.694-.391-2.045.688-2.118"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Box>
              </Grid>
            );
          })}
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <SnackbarContent
          sx={{
            backgroundColor: "green",
          }}
          message={
            <span style={{ display: "flex", alignItems: "center" }}>
              <Icon
                icon="mdi:cart-outline"
                width="1.6em"
                height="1.4em"
                style={{ color: "white", marginRight: "2px" }}
              />
              Product added to cart!
            </span>
          }
        />
      </Snackbar>
    </>
  );
};

export default ExamAddToCart;
