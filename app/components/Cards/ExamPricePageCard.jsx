/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { Box, Card, Grid, Typography } from "@mui/material";
import moment from "moment";
import React from "react";

const ExamPricePageCard = ({ data }) => {
  return (
    <>
      <Card
        sx={{ bgcolor: "#1F2937", my: "10px", display: "flex", width: "100%" }}
      >
        <img
          className="p-8 rounded-t-lg"
          src="/package-small-min_optimized.png"
          alt="product image"
          width="230px"
        />
        <div style={{ padding: "20px" }}>
          <Typography
            fontSize={20}
            fontWeight={700}
            className="text-purple-500"
            color={"white"}
          >
            {data.exam_title}
          </Typography>
          <Typography fontSize={16} fontWeight={700} color={"white"}>
            Latest updated date: {moment(data.exam_update_date).format("LL")}
          </Typography>
          <Typography fontSize={16} fontWeight={700} color={"white"}>
            Latest {data.exam_questions} Question & Answers
          </Typography>
          <Card
            sx={{ bgcolor: "#FFF3CD", padding: "15px", textAlign: "center" }}
          >
            <Typography fontSize={16} fontWeight={700} color={"#856404"}>
              Limited Time Mega Sale!
            </Typography>

            <Typography fontSize={20} fontWeight={700} color={"#DC3545"}>
              40-70% OFF
            </Typography>
            <Typography fontSize={16} fontWeight={700} color={"#856404"}>
              Hurry up! offer ends in{" "}
              <span className="text-red-500">16h 39m 40s</span>
            </Typography>
            <Typography fontSize={18} fontWeight={700} color={"#0056B3"}>
              *Descarga GRATIS el Reproductor de Test
            </Typography>
          </Card>
        </div>
      </Card>
      <Grid container spacing={2}>
        {Array.isArray(data.exam_prices) &&
          data.exam_prices.map((item, index) => {
            const { title, full_price, price, off, cart } = item;
            return (
              <Grid item xs={6}>
                <Card
                  key={index}
                  sx={{ bgcolor: "#1F2937", minHeight: "150px" }}
                >
                  <Box
                    sx={{
                      padding: "10px", // Adjusted padding to add space at the top and bottom
                      display: "flex",
                      flexDirection: "column",
                      alignContent: "space-between",
                    }}
                  >
                    <div>
                      <Typography
                        fontSize={20}
                        fontWeight={700}
                        color={"white"}
                      >
                        {title}
                      </Typography>

                      <Typography fontSize={18} color={"yellow"}>
                        Total Questions:{" "}
                        <span style={{ color: "white" }}>{off}</span>
                      </Typography>
                    </div>
                    <div>
                      <div>
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                          ${price}
                        </span>
                        <span className="text-xl font-bold text-red-500 line-through">
                          ${full_price}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          {off === 0 ? (
                            ""
                          ) : (
                            <div className="bg-yellow-300 mr-2 rounded-ss-md p-1 mb-2">
                              {off}% Off
                            </div>
                          )}
                        </div>
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                          <span class="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Add to cart
                          </span>
                        </button>
                      </div>
                    </div>
                  </Box>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default ExamPricePageCard;
