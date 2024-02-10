/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Card, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import CardSliderVendor from "./components/CardSlider/CardSliderVendor";
import WindowsCard from "./components/Cards/WindowsCard";
import HotExamsMW from "./components/Tables/HotExamsMW";
import RecentlyUpdatedTable from "./components/Tables/RecentlyUpdatedTable";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/NavBar";
const Home = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div class="mx-auto max-w-8xl flex justify-center">
              <div class="md:mx-150px lg:mt-2 rounded-2">
                <img
                  src="/banner.png"
                  alt="SASSA_Status_Check"
                  loading="lazy"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <CardSliderVendor />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Card
              sx={{
                p: "20px",
                bgcolor: "#E9ECEF",
              }}
            >
              <Typography
                lineHeight={"30px"}
                variant="h1"
                fontSize={30}
                color="#1F2937"
                fontWeight={400}
              >
                <b>Pass Your Next Certification Exam Fast!</b>
              </Typography>
              <Typography
                lineHeight={"30px"}
                variant="h2"
                fontSize={18}
                color="primary"
                fontWeight={300}
              >
                <b>
                  Everything you need to prepare, learn & pass your
                  certification exam easily. 90 days free updates. First attempt
                  100% success.
                </b>
              </Typography>
              <Typography lineHeight={"30px"} variant="body2" fontSize={16}>
                <b>Why Choose DumpsArena?</b>
              </Typography>

              <Typography lineHeight={"30px"} sx={{ display: "flex" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 22 22"
                  color="green"
                  style={{ marginRight: 6 }}
                >
                  <path
                    fill="currentColor"
                    d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"
                  />
                </svg>
                Latest Exam Questions & Answers from certification exams.
              </Typography>
              <Typography lineHeight={"30px"} sx={{ display: "flex" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 22 22"
                  color="green"
                  style={{ marginRight: 6 }}
                >
                  <path
                    fill="currentColor"
                    d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"
                  />
                </svg>
                High Success Rate supported by our 99.5% pass history.
              </Typography>
              <Typography lineHeight={"30px"} sx={{ display: "flex" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 22 22"
                  color="green"
                  style={{ marginRight: 6 }}
                >
                  <path
                    fill="currentColor"
                    d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"
                  />
                </svg>
                Hassle Free Refund if you failed your exam.
              </Typography>
              <Typography lineHeight={"30px"} sx={{ display: "flex" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 22 22"
                  color="green"
                  style={{ marginRight: 6 }}
                >
                  <path
                    fill="currentColor"
                    d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"
                  />
                </svg>
                Instant Downloads as soon as you complete your purchase.
              </Typography>
              <Typography lineHeight={"30px"} sx={{ display: "flex" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 22 22"
                  color="green"
                  style={{ marginRight: 6 }}
                >
                  <path
                    fill="currentColor"
                    d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"
                  />
                </svg>
                Free Quick Updates available within 2 weeks of any change to the
                actual exam.
              </Typography>
              <Typography lineHeight={"30px"} sx={{ display: "flex" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 22 22"
                  color="green"
                  style={{ marginRight: 6 }}
                >
                  <path
                    fill="currentColor"
                    d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"
                  />
                </svg>
                Secure Shopping Experience Your information will never be shared
                with 3rd parties.
              </Typography>
            </Card>
            <Card
              sx={{
                marginTop: "10px",
                boxShadow: "2px 2px 4px rgba(255, 255, 255, 255)",
              }}
            >
              <RecentlyUpdatedTable />
            </Card>
            <Card
              sx={{
                marginTop: "10px",
                borderRadius: "0px",
              }}
            >
              <WindowsCard />
            </Card>
          </Grid>
          <Grid item sm={12} lg={4}>
            <HotExamsMW />
            <Grid
              container
              className="bg-gray-900"
              sx={{
                display: "flex",
                mt: "10px",
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
                  href="/"
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
                    class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
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

export default Home;
