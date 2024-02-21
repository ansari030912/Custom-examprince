/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { Box, Card, Grid, Typography } from "@mui/material";
import moment from "moment";
import Link from "next/link";
import React from "react";

const ExamPricePageCard = ({ data }) => {
  return (
    <>
      <Card
        className="text-white bg-gradient-to-b from-blue-400 to-gray-900"
        sx={{
          color: "white",
          // backgroundImage: "linear-gradient(to bottom right, #805ad5, #4dabf7)",
          borderRadius: "0.375rem",
          fontSize: "0.875rem",
          textAlign: "center",
          cursor: "pointer",
          padding: "0.625rem 1.25rem",
          marginBottom: "0.5rem",
          // "&:hover": {
          //   backgroundImage:
          //     "linear-gradient(to bottom left, #805ad5, #4dabf7)",
          //   boxShadow:
          //     "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          // },
          // "&:focus": {
          //   boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.5)",
          //   outline: "none",
          // },
        }}
      >
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
      <Card sx={{ backgroundColor: "#a7cbf9", padding: "10px" }}>
        <Grid container spacing={2}>
          {Array.isArray(data.exam_prices) &&
            data.exam_prices.map((item, index) => {
              const { title, full_price, price, off, cart } = item;
              return (
                <>
                  <Grid item xs={12} md={4}>
                    <Link href="#">
                      <Card
                        className="text-white bg-gradient-to-t from-blue-400 to-gray-900"
                        key={index}
                        sx={{
                          backgroundColor: "#1F2937",
                          overflow: "hidden",
                          display: "flex",
                          transition: "transform 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
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
                            <>
                              <div
                                style={{
                                  color: "white",
                                  backgroundColor: "#652E60",
                                  padding: "10px",
                                }}
                                className="font-bold justify-center p-1"
                              >
                                <span
                                  style={{
                                    color: off >= 50 ? "#FFD700" : "white",
                                  }}
                                >
                                  {off}% Off
                                </span>
                                <div className="flex justify-center">
                                  {off >= 50 ? (
                                    <div className="flex justify-between">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1.6rem"
                                        height="1.6rem"
                                        viewBox="0 0 56 56"
                                      >
                                        <path
                                          fill="white"
                                          d="M45.416 28.85C51.155 28.85 56 24.068 56 18.287c0-5.781-4.783-10.564-10.584-10.564c-5.781 0-10.564 4.783-10.564 10.564c0 5.822 4.783 10.563 10.564 10.563m-28.51 12.976h24.268c.81 0 1.517-.665 1.517-1.56c0-.893-.707-1.559-1.517-1.559H17.26c-1.186 0-1.914-.832-2.1-2.1l-.313-2.184h26.368c2.163 0 3.556-.915 4.346-2.703c-1.788 0-3.473-.353-5.032-1.04c-.312.416-.707.603-1.29.603l-24.87.021l-1.767-12.06h19.463c-.103-.957-.041-2.205.104-3.14H12.144l-.374-2.642c-.229-1.6-.79-2.412-2.911-2.412h-7.32C.707 11.05 0 11.778 0 12.61c0 .852.707 1.58 1.539 1.58h7.028l3.328 22.833c.436 2.953 1.996 4.803 5.011 4.803m28.53-16.677c-.727 0-1.372-.5-1.372-1.268v-4.326h-3.972a1.274 1.274 0 0 1-1.268-1.268c0-.686.561-1.269 1.268-1.269h3.972v-4.304c0-.79.645-1.29 1.373-1.29c.727 0 1.35.5 1.35 1.29v4.304h3.973c.707 0 1.29.582 1.29 1.269c0 .686-.583 1.268-1.29 1.268h-3.972v4.326c0 .769-.624 1.268-1.351 1.268M18.55 51.933a3.342 3.342 0 0 0 3.369-3.37a3.355 3.355 0 0 0-3.37-3.368a3.342 3.342 0 0 0-3.368 3.369a3.329 3.329 0 0 0 3.369 3.369m19.464 0a3.342 3.342 0 0 0 3.368-3.37a3.355 3.355 0 0 0-3.368-3.368c-1.893 0-3.41 1.497-3.41 3.369c0 1.892 1.517 3.369 3.41 3.369"
                                        />
                                      </svg>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                      >
                                        <path
                                          fill="#FFD700"
                                          d="M12 2l2.293 6.394 6.891.228c.808.027 1.13 1.14.487 1.712l-5.514 4.47 2.018 6.664c.236.78-.613 1.417-1.251.94L12 18.875l-5.424 3.402c-.638.399-1.487-.16-1.251-.94l2.018-6.664L2.329 10.334c-.643-.572-.32-1.685.487-1.712l6.891-.228L12 2z"
                                        />
                                      </svg>
                                    </div>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1.6rem"
                                      height="1.6rem"
                                      viewBox="0 0 56 56"
                                    >
                                      <path
                                        fill="white"
                                        d="M45.416 28.85C51.155 28.85 56 24.068 56 18.287c0-5.781-4.783-10.564-10.584-10.564c-5.781 0-10.564 4.783-10.564 10.564c0 5.822 4.783 10.563 10.564 10.563m-28.51 12.976h24.268c.81 0 1.517-.665 1.517-1.56c0-.893-.707-1.559-1.517-1.559H17.26c-1.186 0-1.914-.832-2.1-2.1l-.313-2.184h26.368c2.163 0 3.556-.915 4.346-2.703c-1.788 0-3.473-.353-5.032-1.04c-.312.416-.707.603-1.29.603l-24.87.021l-1.767-12.06h19.463c-.103-.957-.041-2.205.104-3.14H12.144l-.374-2.642c-.229-1.6-.79-2.412-2.911-2.412h-7.32C.707 11.05 0 11.778 0 12.61c0 .852.707 1.58 1.539 1.58h7.028l3.328 22.833c.436 2.953 1.996 4.803 5.011 4.803m28.53-16.677c-.727 0-1.372-.5-1.372-1.268v-4.326h-3.972a1.274 1.274 0 0 1-1.268-1.268c0-.686.561-1.269 1.268-1.269h3.972v-4.304c0-.79.645-1.29 1.373-1.29c.727 0 1.35.5 1.35 1.29v4.304h3.973c.707 0 1.29.582 1.29 1.269c0 .686-.583 1.268-1.29 1.268h-3.972v4.326c0 .769-.624 1.268-1.351 1.268M18.55 51.933a3.342 3.342 0 0 0 3.369-3.37a3.355 3.355 0 0 0-3.37-3.368a3.342 3.342 0 0 0-3.368 3.369a3.329 3.329 0 0 0 3.369 3.369m19.464 0a3.342 3.342 0 0 0 3.368-3.37a3.355 3.355 0 0 0-3.368-3.368c-1.893 0-3.41 1.497-3.41 3.369c0 1.892 1.517 3.369 3.41 3.369"
                                      />
                                    </svg>
                                  )}
                                </div>
                              </div>
                            </>
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
                            color={"white"}
                            fontSize={12}
                            className="text-left"
                          >
                            {title}
                          </Typography>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            <div>
                              <span className="text-xl font-bold text-white dark:text-white">
                                ${price}
                              </span>
                              <span className="text-lg font-bold text-red-500 line-through ml-1">
                                ${full_price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </Grid>
                </>
              );
            })}
        </Grid>
      </Card>
      <Card
        className="text-white bg-gradient-to-l from-gray-400 to-gray-900"
        sx={{
          mt: 2,
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          fontSize: 20,
          padding: "15px",
          color: "white",

          textAlign: "center",
        }}
      >
        <b>What is in the Premium File?</b>
      </Card>
      <Card
        sx={{
          padding: "10px",
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
        }}
      >
        {Array.isArray(data.question_types) &&
          data.question_types.map((item, i) => {
            const { question_type, question_type_count } = item;
            return (
              <>
                <Card
                  className="text-white bg-gradient-to-l from-blue-400 to-gray-900"
                  key={i}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px",

                    border: "1px solid white",
                    borderRadius: "0px",
                    mb: "4px",
                  }}
                >
                  <div className="text-white">{question_type}</div>
                  <div className="text-white">{question_type_count}</div>
                </Card>
              </>
            );
          })}
      </Card>
      <Card
        className="bg-gradient-to-l from-gray-400 to-gray-900"
        sx={{
          mt: 2,
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          fontSize: 20,
          padding: "15px",
          textAlign: "center",
          color: "white",
        }}
      >
        <b>Last Week Results</b>
      </Card>
      <Card
        sx={{
          padding: "4px",
          borderRadius: "0px",
        }}
      >
        <Box
          sx={{
            padding: "5px",
            bgcolor: "white",
            borderRadius: "4px",
          }}
        >
          <div>
            <div
              class="text-white w-full h-8 pt-1 rounded-full bg-gradient-to-l from-blue-500 to-gray-800  focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium  text-sm px-5 text-center"
              style={{ width: `${data.exam_last_week_average_score}%` }}
            >
              <div className="flex justify-between">
                <div>Average Score In Real Exam</div>
                <div>{data.exam_last_week_average_score}% </div>
              </div>
            </div>
          </div>

          <div>
            <div
              class="mt-1 text-white h-8 pt-1 w-full rounded-full bg-gradient-to-l from-blue-500 to-gray-800  focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium  text-sm px-5 text-center"
              style={{ width: `${data.exam_last_week_word_to_word}%` }}
            >
              <div className="flex justify-between">
                <div>Questions came word for word from this dump</div>
                <div>{data.exam_last_week_word_to_word}%</div>
              </div>
            </div>
          </div>
        </Box>
      </Card>
    </>
  );
};

export default ExamPricePageCard;
