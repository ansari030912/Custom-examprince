/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { Box, Card, Grid, Typography } from "@mui/material";
import moment from "moment";
import React from "react";

const ExamPricePageCard = ({ data }) => {
  return (
    <>
      <Card class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2">
        <Typography
          fontSize={20}
          fontWeight={700}
          className="text-white"
          color={"white"}
        >
          Buy Unlimited Access Package with 2500+ Exams. Only $203.99
        </Typography>
      </Card>
      <Card sx={{ bgcolor: "#1F2937", my: "10px", width: "100%" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3.5}>
            <div className="flex justify-center">
              <img
                className="p-8 rounded-t-lg "
                src="/package-small-min_optimized.png"
                alt="product image"
                // width="100%"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={8.5}>
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
                Latest updated date:{" "}
                {moment(data.exam_update_date).format("LL")}
              </Typography>
              <Typography fontSize={16} fontWeight={700} color={"white"}>
                Latest {data.exam_questions} Question & Answers
              </Typography>
              <Card sx={{ bgcolor: "#FFF3CD", p: "15px", textAlign: "center" }}>
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
          </Grid>
        </Grid>
      </Card>

      <Grid container spacing={2}>
        {Array.isArray(data.exam_prices) &&
          data.exam_prices.map((item, index) => {
            const { title, full_price, price, off, cart } = item;
            return (
              <Grid item xs={12} md={6}>
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
                        className="flex justify-between"
                      >
                        {title}
                        {off >= 50 ? (
                          <div class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm p-1 flex text-center justify-end">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="18"
                              height="18"
                            >
                              <path
                                fill="#FFD700"
                                d="M12 2l2.293 6.394 6.891.228c.808.027 1.13 1.14.487 1.712l-5.514 4.47 2.018 6.664c.236.78-.613 1.417-1.251.94L12 18.875l-5.424 3.402c-.638.399-1.487-.16-1.251-.94l2.018-6.664L2.329 10.334c-.643-.572-.32-1.685.487-1.712l6.891-.228L12 2z"
                              />
                            </svg>
                            <div>Most Popular</div>
                          </div>
                        ) : (
                          ""
                        )}
                      </Typography>

                      <Typography fontSize={18} color={"yellow"}>
                        {/* Total Questions:{" "} */}
                        <span style={{ color: "#1F2937" }}>{off}</span>
                      </Typography>
                    </div>
                    <div>
                      <div>
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                          ${price}
                        </span>
                        <span className="text-xl font-bold text-red-500 line-through pl-2">
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
      <Card
        style={{
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          fontSize: 26,
          padding: "15px",
        }}
        class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2"
      >
        What is in the Premium File?
      </Card>
      <Card sx={{ bgcolor: "#111827", color: "white", padding: "10px" }}>
        {Array.isArray(data.question_types) &&
          data.question_types.map((item, i) => {
            const { question_type, question_type_count } = item;
            return (
              <>
                <Card
                  key={i}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px",
                    backgroundColor: "#111827",
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "0px",
                    mb: "4px",
                  }}
                >
                  <div>{question_type}</div>
                  <div>{question_type_count}</div>
                </Card>
              </>
            );
          })}
      </Card>
      <Card
        style={{
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          fontSize: 26,
          padding: "15px",
        }}
        class="mt-3 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Last Week Results
      </Card>
      <Card sx={{ bgcolor: "#111827", color: "white", padding: "20px" }}>
        <Typography fontSize={22} fontWeight={700}>
          Customer Pass {data.exam_title} Exam
        </Typography>
        <Card
          sx={{
            mt: 2,
            padding: "10px",
            bgcolor: "#111827",
            borderRadius: "4px",
            boxShadow:
              "0 0 0 2px transparent, 0 0 0 3px #8B5CF6, 0 0 0 3px #3B82F6",
          }}
        >
          <div class="flex justify-between mb-1">
            <span class="text-base font-large text-blue-700 dark:text-white">
              Average Score In Real Exam
            </span>
            <span class="text-sm font-large text-blue-700 dark:text-white">
              {data.exam_last_week_average_score}%
            </span>
          </div>
          <div>
            <div
              class="text-white h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium  text-sm px-5 py-1.5 text-center"
              style={{ width: `${data.exam_last_week_average_score}%` }}
            ></div>
          </div>
        </Card>
        <Card
          sx={{
            mt: 2,
            padding: "10px",
            bgcolor: "#111827",
            borderRadius: "4px",
            boxShadow:
              "0 0 0 2px transparent, 0 0 0 3px #8B5CF6, 0 0 0 3px #3B82F6",
          }}
        >
          <div class="flex justify-between mb-1">
            <span class="text-base font-lg text-blue-700 dark:text-white">
              Questions came word for word from this dump
            </span>
            <span class="text-sm font-lg text-blue-700 dark:text-white">
              {data.exam_last_week_word_to_word}%
            </span>
          </div>
          <div>
            <div
              class="text-white h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium  text-sm px-5 py-1.5 text-center"
              style={{ width: `${data.exam_last_week_word_to_word}%` }}
            ></div>
          </div>
        </Card>
      </Card>
    </>
  );
};

export default ExamPricePageCard;
