/* eslint-disable @next/next/no-async-client-component */
"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ScAccessAccordian from "../../../components/Cards/ScAccessAccordian";
import ScPriceCard from "../../../components/Cards/ScPriceCard";
import { Search } from "../../../components/Search";
import { HotExam } from "../../../components/Tables";
import { Footer } from "../../../components/footer";
import { Navbar } from "../../../navbar";

const ScAccess = async ({ params }) => {
  const [data, setData] = useState(null);
  const router = useRouter();
  useEffect(() => {
    async function fetchData() {
      try {
        const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
        if (!loginResponse?._token) {
          return router.push("/sign-in");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
    fetchData();
  }, [router]);

  useEffect(() => {
    debugger;
    const fetchData = async () => {
      // Check if localStorage is available (client-side)
      if (
        typeof window !== "undefined" &&
        localStorage.getItem("loginResponse")
      ) {
        const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
        console.log("🚀 ~ fetchData ~ loginResponse:", loginResponse);
        const response = await axios.get(
          `https://api.dumpsboss.com/v1/account/sc-access/${params.id_one}/${params.id_two}`,
          {
            headers: {
              "x-api-key": "ed79766c-2cc1-4967-8d3c-035387603caf",
              Authorization: `Bearer ${loginResponse._token}`,
            },
          }
        );

        setData(response.data);
      }
    };

    fetchData();
  }, [params.id_one, params.id_two]);

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
                  alt="banner"
                  loading="lazy"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <ScPriceCard data={data} />
          </Grid>
          <Grid item xs={12} md={8}>
            <ScAccessAccordian data={data} />
            {/* <WindowsDataCard /> */}
          </Grid>
          <Grid item sm={12} lg={4}>
            <HotExam />
            <Grid
              container
              className="text-white bg-gradient-to-br from-gray-800 to-blue-400"
              sx={{
                mt: "10px",
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
              className="text-white bg-gradient-to-t from-gray-800 to-blue-400"
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
                  src="/safe_checkout_optimized.png"
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
                    class="text-white bg-gradient-to-r from-blue-400 to-gray-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
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

export default ScAccess;