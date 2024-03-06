"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "../components/Search";
import { Footer } from "../components/footer";
import { Navbar } from "../navbar";

const CheckOut = () => {
  const [loginResponse, setLoginResponse] = useState(null);
  const [cartResponce, setCartResponce] = useState(null);
  const [examData, setExamData] = useState(null);

  const router = useRouter();

  const discountAmount =
    Math.floor(cartResponce?.full_price) - Math.floor(cartResponce?.price);

  useEffect(() => {
    async function fetchData() {
      try {
        const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
        if (!loginResponse?.is_logged_in) {
          return router.push("/sign-in");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
    fetchData();
  }, [router]);
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const storedLoginResponse = localStorage.getItem("loginResponse");
      if (storedLoginResponse) {
        setLoginResponse(JSON.parse(storedLoginResponse));
      }
    }
    if (typeof localStorage !== "undefined") {
      const storedLoginResponse = localStorage.getItem("CartProducts");
      if (storedLoginResponse) {
        setCartResponce(JSON.parse(storedLoginResponse));
      }
    }
    if (typeof localStorage !== "undefined") {
      const localExamData = localStorage.getItem("ExamData");
      if (localExamData) {
        setExamData(JSON.parse(localExamData));
      }
    }
  }, []);

  const handleRemoveData = () => {
    debugger;
    localStorage.removeItem("CartProducts");
    localStorage.removeItem("ExamData");
    window.location.reload();
  };
  return (
    <>
      <Navbar />
      <Search />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="mx-auto max-w-8xl flex justify-center">
              <div className="md:mx-150px lg:mt-2 rounded-2">
                <img
                  src="/banner.png"
                  alt="banner"
                  loading="lazy"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            <section className=" bg-gray-100 font-poppins dark:bg-gray-800">
              <div className="px-4 py-2 mx-auto max-w-7xl lg:py-4 md:px-6">
                <div>
                  <h2 className="mb-8 text-4xl font-bold dark:text-white">
                    Your Cart
                  </h2>
                  {!examData ? (
                    <div className="p-6 mb-8 border bg-gray-50 dark:bg-gray-800 dark:border-gray-800">
                      <h4 className="font-bold text-2xl text-gray-500 dark:text-white text-center">
                        Nothing is in your Cart please add product in your cart
                        first.
                      </h4>
                    </div>
                  ) : (
                    <>
                      <div className="p-6 mb-8 border bg-gray-50 dark:bg-gray-800 dark:border-gray-800">
                        <div className="flex-wrap items-center hidden mb-6 -mx-4 md:flex md:mb-8">
                          <div className="w-full px-4 mb-6 md:w-6/12 lg:w-6/12 md:mb-0">
                            <h2 className="font-bold text-gray-500 dark:text-white">
                              Product name
                            </h2>
                          </div>
                          <div className="w-auto px-4 text-right md:w-6/12 lg:w-6/12 flex justify-between">
                            <h2 className="font-bold text-gray-500 dark:text-white">
                              Price
                            </h2>
                            <h2 className="font-bold text-gray-500 dark:text-white">
                              Clear Cart
                            </h2>
                          </div>
                        </div>
                        <div className="py-4 mb-8 border-t border-b border-gray-200 dark:border-gray-700">
                          <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                            <div className="w-full px-4 mb-6 md:w-6/12 lg:w-6/12 md:mb-0">
                              <div className="flex flex-wrap items-center -mx-4">
                                <div className="w-full px-4">
                                  <h2 className="mb-2 text-xl font-bold text-white">
                                    {cartResponce?.title}
                                  </h2>
                                  <p className="text-gray-500 dark:text-gray-400 text-lg font-bold">
                                    {examData?.exam_title}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="w-full px-4 text-right md:w-6/12 lg:w-6/12 flex justify-between">
                              <div>
                                <p className="text-xl font-bold text-blue-500 dark:text-white">
                                  $ {cartResponce?.price}
                                </p>
                                <span className="text-lg text-red-500 line-through ">
                                  $ {cartResponce?.full_price}
                                </span>
                              </div>

                              <IconButton
                                className="hover:bg-gray-700"
                                onClick={handleRemoveData}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 15 15"
                                >
                                  <path
                                    fill="RED"
                                    d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"
                                  />
                                </svg>
                              </IconButton>
                            </div>
                            <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12">
                              <p className="text-lg font-bold text-blue-500 dark:text-white"></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-between">
                        <div className="w-full px-4 mb-4 lg:w-1/2 ">
                          <div className="flex flex-wrap items-center gap-4">
                            <input
                              type="text"
                              className="w-full px-8 py-4 font-normal placeholder-gray-400 border lg:flex-1 dark:border-gray-700 dark:placeholder-gray-500 dark:text-white dark:bg-gray-800"
                              placeholder="Enter your Discount Cuppon"
                              required
                            />
                            <button className="inline-block w-full px-8 py-4 font-bold text-center text-gray-100 bg-blue-500 rounded-md lg:w-32 hover:bg-blue-600">
                              Apply
                            </button>
                          </div>
                        </div>
                        <div className="w-full px-4 mb-4 lg:w-1/2 ">
                          <div className="p-6 border border-blue-100 dark:bg-gray-900 dark:border-gray-900 bg-gray-50 md:p-8">
                            <h2 className="mb-8 text-3xl font-bold text-gray-700 dark:text-white">
                              Order Summary
                            </h2>
                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300 dark:border-gray-700 ">
                              <span className="text-gray-700 dark:text-white">
                                Subtotal
                              </span>
                              <span className="text-xl font-bold text-gray-700 dark:text-white ">
                                ${cartResponce.full_price}
                              </span>
                            </div>
                            <div className="flex items-center justify-between pb-4 mb-4 ">
                              <span className="text-gray-700 dark:text-white ">
                                Off
                              </span>
                              <span className="text-xl font-bold text-gray-700 dark:text-white ">
                                {cartResponce.off}%
                              </span>
                            </div>
                            <div className="flex items-center justify-between pb-4 mb-4 ">
                              <span className="text-gray-700 dark:text-white">
                                Discount
                              </span>
                              <span className="text-xl font-bold text-gray-700 dark:text-white">
                                - ${discountAmount}
                              </span>
                            </div>
                            <div className="flex items-center justify-between pb-4 mb-4 ">
                              <span className="text-gray-700 dark:text-white">
                                Order Total
                              </span>
                              <span className="text-xl font-bold text-gray-700 dark:text-white">
                                ${cartResponce.price}
                              </span>
                            </div>
                            <h2 className="text-lg text-gray-500 dark:text-white">
                              We offer:
                            </h2>
                            <div className="flex items-center gap-2 mb-4 ">
                              <a href="#">
                                <img
                                  src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png"
                                  alt=""
                                  className="object-cover h-16 w-26"
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png"
                                  alt=""
                                  className="object-cover h-16 w-26"
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png"
                                  alt=""
                                  className="object-cover h-16 w-26"
                                />
                              </a>
                            </div>
                            <div className="flex items-center justify-between ">
                              <button className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-blue-500 rounded-md hover:bg-blue-600">
                                Checkout
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </section>
          </Grid>

          <Grid item sm={0} lg={8} />
          <Grid item sm={12} lg={4}>
            <Grid
              container
              className="bg-gray-900"
              sx={{
                display: "flex",
                width: "100%",
              }}
            >
              <Grid item xs={12} sx={{ padding: "10px" }}>
                <Typography
                  component="div"
                  variant="h5"
                  color={"white"}
                  sx={{ borderBottom: "1px solid white" }}
                >
                  Refund Policy
                </Typography>
              </Grid>
              <Grid
                item
                xs={8}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                  mt: "-12px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  color={"white"}
                  component="div"
                  fontSize={12}
                >
                  DumpsArena.com has a remarkable success record. We're
                  confident of our products and provide a no hassle refund
                  policy.
                </Typography>
                <Link
                  href="/refund-policy"
                  className="text-white underline  hover:text-blue-400"
                >
                  How our refund policy works?
                </Link>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  mt: "-12px",
                }}
              >
                <img
                  width="200px"
                  height="200px"
                  src="/money_back.png"
                  alt="Live from space album cover"
                />
              </Grid>
            </Grid>
            {/*  */}
            <Card
              sx={{
                bgcolor: "#111827",
                padding: "10px",
                borderRadius: "0px",
                mb: "10px",
                mt: "10px",
              }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <div>
                    <Typography
                      fontSize={25}
                      fontWeight={"bold"}
                      sx={{ textAlign: "center" }}
                      className="text-white hover:text-yellow-200 hover:underline text-center"
                    >
                      How to Open Test Engine .dumpsarena Files
                    </Typography>
                    <Typography
                      fontSize={20}
                      variant="body1"
                      className="text-white text-center mb-2"
                    >
                      Use FREE DumpsArena Test Engine player to open .dumpsarena
                      files
                    </Typography>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingRight: "10px",
                  }}
                >
                  <img
                    src="/dumpsarena-test-engine_optimized.png"
                    alt="dumpsboss"
                    style={{ maxHeight: "400px", maxWidth: "100%" }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    className="bg-blue-500 mt-2 sm:mt-4"
                    sx={{
                      width: "100%",
                      bgcolor:
                        "linear-gradient(to bottom right, #6b46c1, #0075ff)",
                      "&:hover": {
                        bgcolor:
                          "linear-gradient(to bottom left, #6b46c1, #0075ff)",
                      },
                      "&:focus": {
                        ring: 4,
                        outline: "none",
                        ringColor: "blue.300",
                      },
                      "&:focus-visible": {
                        ring: 4,
                        outline: "none",
                        ringColor: "blue.800",
                      },
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 72 72"
                    >
                      <path
                        fill="#61b2e4"
                        fillRule="evenodd"
                        d="m34 16.163-19 3.093V34h19zM15 38v14.744l19 3.093V38zm23 18.488 22 3.582V38H38zM60 34H38V15.512l22-3.582z"
                        clipRule="evenodd"
                      />
                      <path d="M34 16.163h1a1 1 0 0 0-1.16-.987zm-19 3.093l-.16-.987a1 1 0 0 0-.84.987zM15 34h-1a1 1 0 0 0 1 1zm19 0v1a1 1 0 0 0 1-1zm-19 4v-1a1 1 0 0 0-1 1zm0 14.744h-1a1 1 0 0 0 .84.987zm19 3.093l-.16.987a1 1 0 0 0 1.16-.987zM34 38h1a1 1 0 0 0-1-1zm4 18.488h-1a1 1 0 0 0 .84.987zm22 3.582l-.16.987A1 1 0 0 0 61 60.07zM60 38h1a1 1 0 0 0-1-1zm-22 0v-1a1 1 0 0 0-1 1zm22-4v1a1 1 0 0 0 1-1zm-22 0h-1a1 1 0 0 0 1 1zm0-18.488l-.16-.987a1 1 0 0 0-.84.987zm22-3.582h1a1 1 0 0 0-1.16-.987zm-26.16 3.246l-19 3.093l.32 1.974l19-3.093zM14 19.256V34h2V19.256zM34 33H15v2h19zm-1-16.837V34h2V16.163zM14 38v14.744h2V38zm.84 15.731l19 3.093l.32-1.974l-19-3.093zM33 38v17.837h2V38zm-18 1h19v-2H15zm22.84 18.475l22 3.582l.32-1.974l-22-3.582zM61 60.07V38h-2v22.07zM38 39h22v-2H38zm1 17.488V38h-2v18.488zM60 33H38v2h22zm-21 1V15.512h-2V34zm20.84-23.057l-22 3.582l.32 1.974l22-3.582zM61 34V11.93h-2V34z" />
                    </svg>
                    <span style={{ marginTop: "5px" }}>Windows</span>
                  </Button>
                </Grid>
              </Grid>
            </Card>
            {/*  */}
            <Grid
              container
              className="bg-gray-800"
              sx={{
                display: "flex",
                mt: "10px",
                width: "100%",
              }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  width="100%"
                  src="safe_checkout_optimized.png"
                  alt="safe_checkout_optimized"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                  mt: "-12px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  color={"white"}
                  component="div"
                  fontSize={12}
                  style={{ textAlign: "justify" }}
                >
                  Your purchase with DumpsArena.com is safe and fast. The
                  DumpsArena.com website is protected by 256-bit SSL from
                  Cloudflare, the leader in online security.
                </Typography>
                <Link
                  type="button"
                  href="/"
                  className="text-white underline  hover:text-blue-400 mt-2"
                >
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Customer Support
                  </button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default CheckOut;
