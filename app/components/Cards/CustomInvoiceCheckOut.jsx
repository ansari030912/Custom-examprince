/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Card,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RefundPolicy, SafeCheckOut } from ".";
import { X_API_Key } from "../../AllUrls/ApiKey";
import { BaseUrl } from "../../AllUrls/BaseUrl";

const CustomInvoiceCheckOut = ({ data }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirectingMessage, setRedirectingMessage] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/v1/my-ip`, {
          headers: {
            "x-api-key": X_API_Key,
          },
        });
        setIpAddress(response.data);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };
    fetchIpAddress();
  }, []);

  const validate = () => {
    let tempErrors = {};
    tempErrors.fullName = fullName ? "" : "This field is required";
    tempErrors.email = email ? "" : "This field is required";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "fullName":
        setFullName(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      const userData = {
        fullName,
        email,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      console.log("Data saved:", userData);
      setFullName("");
      setEmail("");
    }
  };

  const handleCheckout = async () => {
    if (!validate() || !acceptedTerms) return;
    setLoading(true);
    setRedirectingMessage("We are redirecting to Prepway...");
    setTimeout(async () => {
      try {
        const response = await axios.post(
          `${BaseUrl}/v1/payment`,
          {
            name: fullName,
            email: email,
            ip: ipAddress,
            coupon: "",
            IsInvoice: true,
            invoice_perma: data.invoice_perma,
            cart_items: data.invoice_items.map((item) => item.cart),
          },
          {
            headers: {
              "x-api-key": X_API_Key,
            },
          }
        );

        if (response.data.success) {
          window.location.href = response.data.redirect_link;
        } else {
          setErrorMessage("Payment failed. Please try again.");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error during checkout:", error);
        setErrorMessage("An error occurred. Please try again.");
        setLoading(false);
      }
    }, 2000);
  };

  const handleRemoveData = () => {
    localStorage.removeItem("CartProducts");
    window.location.reload();
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12}></Grid>
        <Grid item md={8}>
          <section className="bg-gray-100 font-poppins mt-3">
            <div className="px-4 py-2 mx-auto max-w-7xl lg:py-4 md:px-6">
              <div>
                <h2 className="mb-8 text-4xl font-bold">Your Invoice</h2>
                {!data ? (
                  <div className="p-6 mb-8 border bg-gray-50">
                    <h4 className="font-bold text-2xl text-gray-500 text-center">
                      Loading invoice data, please wait...
                    </h4>
                  </div>
                ) : (
                  <>
                    <div className="p-6 mb-8 border bg-gray-50">
                      <div className="py-4 mb-8 border-t border-b border-gray-200">
                        {data.invoice_items && data.invoice_items.length > 0 ? (
                          <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                            <div className="w-full px-4 mb-6 md:w-6/12 lg:w-6/12 md:mb-0">
                              <div className="flex flex-wrap items-center -mx-4">
                                <div className="w-full px-4">
                                  <h2 className="mb-1 text-lg font-bold text-gray-700">
                                    {data.invoice_items[0].title}{" "}
                                    {data.invoice_items[0].type}
                                  </h2>
                                  <p className="text-blue-500 text-xl mb-1 font-bold">
                                    {data.invoice_items[0].sub_title}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="w-full px-4 text-right md:w-6/12 lg:w-6/12 flex justify-between">
                              <div>
                                <p className="text-xl font-bold text-blue-500">
                                  $ {data.invoice_items[0].price}
                                </p>
                                <span className="text-lg text-red-500 line-through">
                                  $ {data.invoice_items[0].full_price}
                                </span>
                              </div>
                              <IconButton onClick={handleRemoveData}>
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
                          </div>
                        ) : (
                          <p>No invoice items found.</p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-between">
                      <div className="w-full mb-4 px-3 lg:w-1/2 ">
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={12}>
                            <TextField
                              label="Full Name"
                              variant="outlined"
                              name="fullName"
                              value={fullName}
                              onChange={handleChange}
                              fullWidth
                              error={!!errors.fullName}
                              helperText={errors.fullName}
                              className="bg-white"
                            />
                          </Grid>
                          <Grid item xs={12} md={12}>
                            <TextField
                              label="Email"
                              variant="outlined"
                              name="email"
                              value={email}
                              onChange={handleChange}
                              type="email"
                              fullWidth
                              error={!!errors.email}
                              helperText={errors.email}
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
          {!data ? (
            ""
          ) : (
            <div className="p-6 border my-3 border-blue-100 bg-white md:p-8">
              <h2 className="mb-8 text-3xl font-bold text-gray-700">
                Order Summary
              </h2>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300">
                <span className="text-gray-700">Subtotal</span>
                <span className="text-xl font-bold text-gray-700">
                  ${data.invoice_sub_total}
                </span>
              </div>
              <div className="flex items-center justify-between pb-4 mb-4">
                <span className="text-gray-700">Discount</span>
                <span className="text-xl font-bold text-green-500">
                  - ${data.invoice_discount}
                </span>
              </div>
              <div className="flex items-center justify-between pb-4 mb-4">
                <span className="text-gray-700">Order Total</span>
                <span className="text-xl font-bold text-gray-700">
                  ${data.invoice_total}
                </span>
              </div>
              <div className="flex items-center justify-between pb-4 mb-4">
                <span className="text-gray-700">Invoice Paid</span>
                <span className="text-xl font-bold text-gray-700">
                  {data.invoice_paid ? "Yes" : "No"}
                </span>
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                  />
                }
                label={
                  <Typography>
                    I agree to the{" "}
                    <Link className="text-blue-400" href="/terms-and-conditions">
                      terms and conditions
                    </Link>
                  </Typography>
                }
              />

              <div className="flex items-center justify-between">
                <Button
                  onClick={handleCheckout}
                  disabled={!acceptedTerms || loading}
                  className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  {loading ? (
                    <div
                      style={{ fontSize: "10px" }}
                      className="flex items-center justify-center"
                    >
                      <CircularProgress />
                    </div>
                  ) : (
                    "Checkout"
                  )}
                </Button>
              </div>
              {!loading && (
                <span>
                  {errorMessage && (
                    <div className="mt-4 text-center text-red-700">
                      {errorMessage}
                    </div>
                  )}
                </span>
              )}

              {loading && (
                <span>
                  {redirectingMessage && (
                    <div className="mt-4 text-center text-gray-700">
                      {redirectingMessage}
                    </div>
                  )}
                </span>
              )}
            </div>
          )}
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
                    Use FREE ExamPrinceTest Engine player to open .examprince
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
  );
};

export default CustomInvoiceCheckOut;
