/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Card, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { Search } from "../components/Search";
import { Footer } from "../components/footer";
import { Navbar } from "../navbar";
import HotExamsData from "../components/Tables/HotExamsData";

const TestEngineSimulator = () => {
  return (
    <>
      <Navbar />
      <Search />
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
                <b>Download FREE DumpsArena Exam Test Engine Simulator</b>
              </Typography>
              <Typography
                lineHeight={"30px"}
                variant="h2"
                fontSize={18}
                color="primary"
                fontWeight={300}
              >
                <b>
                  An exam testing engine for certification exam preparation.
                  Take exams that are just like the real thing.
                </b>
              </Typography>
              <Typography lineHeight={"30px"} variant="body2" fontSize={16}>
                <b>Use DumpsArena Test Engine to open .dumpsarena files</b>
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
                Realistic exam simulation
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
                Several different question types
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
                Customizable exam taking mode
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
                Whole exam in a single file
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
                Open unlimited exam files
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
                No extra charges to use Test Engine (Totally FREE)
              </Typography>
            </Card>

            {/* <RecentlyUpdatedTable /> */}
          </Grid>
          <Grid item sm={12} lg={4}>
            <HotExamsData />
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

export default TestEngineSimulator;
