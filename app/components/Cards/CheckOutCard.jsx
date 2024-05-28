"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { RefundPolicy, SafeCheckOut } from ".";

const CheckOutCard = () => {
  const [loginResponse, setLoginResponse] = useState(null);
  const [cartResponce, setCartResponce] = useState(null);
  const [examData, setExamData] = useState(null);
  const searchParams = useSearchParams();
  const queryEmail = searchParams.get("referralCode");
  console.log("🚀 ~ CheckOutCard ~ queryEmail:", queryEmail);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = formData.firstName ? "" : "This field is required";
    tempErrors.lastName = formData.lastName ? "" : "This field is required";
    tempErrors.email = formData.email ? "" : "This field is required";
    tempErrors.address = formData.address ? "" : "This field is required";
    tempErrors.city = formData.city ? "" : "This field is required";
    tempErrors.state = formData.state ? "" : "This field is required";
    tempErrors.country = formData.country ? "" : "This field is required";
    tempErrors.zip = formData.zip ? "" : "This field is required";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("userData", JSON.stringify(formData));
      console.log("Data saved:", formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        state: "",
        country: "",
        zip: "",
      });
    }
  };
  const discountAmount =
    Math.floor(cartResponce?.full_price) - Math.floor(cartResponce?.price);

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
    localStorage.removeItem("CartProducts");
    localStorage.removeItem("ExamData");
    window.location.reload();
  };
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12}></Grid>
          <Grid item md={8}>
            {/* <div className="mx-auto max-w-8xl flex justify-center">
              <div className="md:mx-150px lg:mt-2 rounded-2">
                <img
                  src="/examprince-discount-banner.png"
                  alt="banner"
                  loading="lazy"
                  width="100%"
                  height="100%"
                />
              </div>
            </div> */}
            <section className=" bg-gray-100 font-poppins mt-3">
              <div className="px-4 py-2 mx-auto max-w-7xl lg:py-4 md:px-6">
                <div>
                  <h2 className="mb-8 text-4xl font-bold ">Your Cart</h2>
                  {!examData ? (
                    <div className="p-6 mb-8 border bg-gray-50 ">
                      <h4 className="font-bold text-2xl text-gray-500 text-center">
                        Nothing is in your Cart please add product in your cart
                        first.
                      </h4>
                    </div>
                  ) : (
                    <>
                      <div className="p-6 mb-8 border bg-gray-50 ">
                        <div className="flex-wrap items-center hidden mb-6 -mx-4 md:flex md:mb-8">
                          <div className="w-full px-4 mb-6 md:w-6/12 lg:w-6/12 md:mb-0">
                            <h2 className="font-bold text-gray-500 ">
                              Product name
                            </h2>
                          </div>
                          <div className="w-auto px-4 text-right md:w-6/12 lg:w-6/12 flex justify-between">
                            <h2 className="font-bold text-gray-500 ">Price</h2>
                            <h2 className="font-bold text-gray-500 ">
                              Clear Cart
                            </h2>
                          </div>
                        </div>
                        <div className="py-4 mb-8 border-t border-b border-gray-200 ">
                          <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                            <div className="w-full px-4 mb-6 md:w-6/12 lg:w-6/12 md:mb-0">
                              <div className="flex flex-wrap items-center -mx-4">
                                <div className="w-full px-4">
                                  <h2 className="mb-2 text-xl font-bold text-gray-900">
                                    {cartResponce?.title}
                                  </h2>
                                  <p className="text-gray-500 text-lg font-bold">
                                    {cartResponce?.title ===
                                    examData?.exam_title
                                      ? ""
                                      : examData?.exam_title}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="w-full px-4 text-right md:w-6/12 lg:w-6/12 flex justify-between">
                              <div>
                                <p className="text-xl font-bold text-blue-500 ">
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
                              <p className="text-lg font-bold text-blue-500 "></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-between">
                        <div className="w-full mb-4 lg:w-1/2 ">
                          <div className="flex flex-nowrap items-center gap-4">
                            <input
                              type="text"
                              className="w-full px-8 py-4 font-normal placeholder-gray-400 border lg:flex-1  dark:placeholder-gray-500  "
                              placeholder="Promo code"
                              required
                              value="MEGASALE"
                            />
                            <span className="pr-1">
                              <button className="inline-block w-full px-8 py-4 font-bold text-center text-gray-100 bg-blue-500 rounded-md lg:w-32 hover:bg-blue-600">
                                Apply
                              </button>
                            </span>
                          </div>
                        </div>
                        <div className="w-full mb-4 mt-2 lg:w-1/2 ">
                          <div className="text-center mt-2 text-base font-bold text-green-400">
                            " <span className="text-red-500">MEGASALE</span> "
                            CUPPON 40-70% OFF IS ACTIVE
                          </div>
                        </div>
                        <div
                          // onSubmit={handleSubmit}
                          className="space-y-4 p-6 py-8 bg-white "
                        >
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                label="First Name"
                                variant="outlined"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                fullWidth
                                error={!!errors.firstName}
                                helperText={errors.firstName}
                                className="bg-white"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                label="Last Name"
                                variant="outlined"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                fullWidth
                                error={!!errors.lastName}
                                helperText={errors.lastName}
                                className="bg-white"
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                label="Email"
                                variant="outlined"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                fullWidth
                                error={!!errors.email}
                                helperText={errors.email}
                                className="bg-white"
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                label="Address"
                                variant="outlined"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                fullWidth
                                error={!!errors.address}
                                helperText={errors.address}
                                className="bg-white"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                label="City"
                                variant="outlined"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                fullWidth
                                error={!!errors.city}
                                helperText={errors.city}
                                className="bg-white"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                label="State/Province"
                                variant="outlined"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                fullWidth
                                error={!!errors.state}
                                helperText={errors.state}
                                className="bg-white"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                select
                                label="Country"
                                variant="outlined"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                fullWidth
                                error={!!errors.country}
                                helperText={errors.country}
                                SelectProps={{
                                  native: true,
                                }}
                                className="bg-white"
                              >
                                <option value="">-- Select country --</option>
                                <option value="USA">USA</option>
                                <option value="Canada">Canada</option>
                                <option value="UK">UK</option>
                                {/* Add more options as needed */}
                              </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                label="Zip Code"
                                variant="outlined"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                fullWidth
                                error={!!errors.zip}
                                helperText={errors.zip}
                                className="bg-white"
                              />
                            </Grid>
                          </Grid>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </section>
          </Grid>
          <Grid item sm={12} md={4}>
            <div className="p-6 border my-3 border-blue-100 bg-white md:p-8">
              <h2 className="mb-8 text-3xl font-bold text-gray-700 ">
                Order Summary
              </h2>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300  ">
                <span className="text-gray-700 ">Subtotal</span>
                <span className="text-xl font-bold text-gray-700  ">
                  ${cartResponce?.full_price}
                </span>
              </div>
              <div className="flex items-center justify-between pb-4 mb-4 ">
                <span className="text-gray-700  ">Off</span>
                <span className="text-xl font-bold text-gray-700  ">
                  {cartResponce?.off}%
                </span>
              </div>
              <div className="flex items-center justify-between pb-4 mb-4 ">
                <span className="text-gray-700 ">Discount</span>
                <span className="text-xl font-bold text-green-500 ">
                  - ${discountAmount}
                </span>
              </div>
              <div className="flex items-center justify-between pb-4 mb-4 ">
                <span className="text-gray-700 ">Order Total</span>
                <span className="text-xl font-bold text-gray-700 ">
                  ${cartResponce?.price}
                </span>
              </div>
              <h2 className="text-lg text-gray-500 ">We offer:</h2>
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
                <button
                  onClick={handleSubmit}
                  className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  Checkout
                </button>
              </div>
            </div>
            <RefundPolicy />
            <SafeCheckOut />

            <Card
              sx={{
                bgcolor: "white",
                padding: "10px",
                mb: "10px",
                mt: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <div>
                    <Link href={"/test-engine-simulator"}>
                      <Typography
                        fontSize={25}
                        fontWeight={"bold"}
                        sx={{ textAlign: "center" }}
                        className="text-gray-700 hover:text-blue-400 cursor-pointer hover:underline text-center"
                      >
                        How to Open Test Engine .ExamPrinceFiles
                      </Typography>
                    </Link>
                    <Typography
                      fontSize={20}
                      variant="body1"
                      className="text-gray-700 text-center mb-2"
                    >
                      Use FREE ExamPrinceTest Engine player to open .dumpsarena
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
                  <Link href={"/test-engine-simulator"}>
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
                  </Link>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CheckOutCard;
