/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Icon } from "@iconify/react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  Snackbar,
  SnackbarContent,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Footer } from "../../../../components/footer";
import { Navbar } from "../../../../navbar";
import { max } from "moment";

const TeAccess = ({ params }) => {
  const [teAccess, setTeAccess] = useState({});
  const [copiedKeyIndex, setCopiedKeyIndex] = useState(-1);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopyToClipboard = (key, index) => {
    navigator.clipboard.writeText(key);
    setCopiedKeyIndex(index);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== "undefined") {
        const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));

        if (loginResponse) {
          try {
            const response = await axios.get(
              `https://api.dumpsboss.com/v1/account/te-access/${params.id_one}/${params.id_two}/${params.id_three}`,
              {
                headers: {
                  "x-api-key": "ed79766c-2cc1-4967-8d3c-035387603caf",
                  Authorization: `Bearer ${loginResponse._token}`,
                },
              }
            );

            setTeAccess(response.data); // Assuming response.data contains the data you want to set
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
      }
    };

    fetchData();
  }, [params.id_one, params.id_two, params.id_three]);

  return (
    <>
      <Navbar />
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
                icon="gg:copy"
                width="1.6em"
                height="1.6em"
                style={{ color: "white", marginRight: "4px" }}
              />
              Key copied to clipboard!
            </span>
          }
        />
      </Snackbar>

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
                color: "white",
                mt: "10px",
                p: "20px",
                background: `linear-gradient(to top, #5796E4, #1A273D)`, // Adjust color codes as needed
              }}
            >
              <Typography
                lineHeight={"30px"}
                variant="h1"
                fontSize={30}
                color="white"
                fontWeight={400}
              >
                <b>Test Engine Access</b>
              </Typography>
              <Typography
                lineHeight={"30px"}
                variant="h2"
                fontSize={20}
                color="white"
                fontWeight={500}
              >
                <b>
                  {teAccess.exam_code} {teAccess.exam_vendor}{" "}
                  <span className="text-gray-700 text-2xl">"</span>
                  {teAccess.exam_name}
                  <span className="text-gray-700 text-2xl">"</span>
                </b>
              </Typography>
            </Card>
            <Box
              sx={{
                border: "0px",
                borderRadius: "0px",
                marginTop: "10px",
                bgcolor: "transparent",
              }}
            >
              {teAccess.keys && teAccess.keys.length > 0 ? (
                teAccess.keys.map((item, i) => (
                  <Accordion key={i} sx={{ my: "8px" }}>
                    <AccordionSummary
                      sx={{
                        color: "white",
                        background: `linear-gradient(to top, #5796E4, #1A273D)`, // Adjust color codes as needed
                      }}
                      expandIcon={
                        <Icon
                          icon="ooui:expand"
                          width="1.2em"
                          height="1.2em"
                          style={{ color: "white" }}
                        />
                      }
                      aria-controls={`panel-${i}-content`}
                      id={`panel-${i}-header`}
                    >
                      <Typography>Activation Key {i + 1}</Typography>{" "}
                    </AccordionSummary>
                    <AccordionDetails sx>
                      <TextField
                        size="small"
                        variant="outlined"
                        label={"Purchase Key"}
                        value={item.purchase_key}
                        disabled
                        fullWidth
                        InputProps={{
                          readOnly: true,
                          endAdornment: (
                            <IconButton
                              onClick={() =>
                                handleCopyToClipboard(item.purchase_key, i)
                              }
                            >
                              <Icon
                                icon="mingcute:copy-line"
                                width="1em"
                                height="1em"
                                style={{ color: "#545e6b" }}
                              />
                            </IconButton>
                          ),
                        }}
                        sx={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      <TextField
                        size="small"
                        variant="outlined"
                        label={"Activation Key"}
                        value={item.activation_key}
                        disabled
                        fullWidth
                        InputProps={{
                          readOnly: true,
                          endAdornment: (
                            <IconButton
                              sx={{ alignSelf: "flex-start" }}
                              onClick={() =>
                                handleCopyToClipboard(item.activation_key, i)
                              }
                            >
                              <Icon
                                icon="mingcute:copy-line"
                                width="1em"
                                height="1em"
                                style={{ color: "#545e6b" }}
                              />
                            </IconButton>
                          ),
                        }}
                        sx={{ marginBottom: "10px" }}
                      />
                    </AccordionDetails>
                  </Accordion>
                ))
              ) : (
                <Card
                  sx={{
                    color: "white",
                    mt: "10px",
                    p: "20px",
                    background: `linear-gradient(to top, #5796E4, #1A273D)`, // Adjust color codes as needed
                  }}
                >
                  <Typography>No activation keys available.</Typography>
                </Card>
              )}
            </Box>
            <Box sx={{ mt: "10px" }}>
              {teAccess.te_file && (
                <Link href={teAccess.te_file}>
                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group hover:bg-gradient-to-l bg-gradient-to-br from-blue-800 to-red-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0 flex">
                      <Icon
                        icon="uil:file-download-alt"
                        width="1.7em"
                        height="1.4em"
                        style={{ color: "white" }}
                      />
                      Download .dumpsarena File
                    </span>
                  </button>
                </Link>
              )}
              {teAccess.te_file_zip && (
                <Link href={teAccess.te_file_zip}>
                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group hover:bg-gradient-to-l bg-gradient-to-br from-blue-800 to-red-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0 flex">
                      <Icon
                        icon="tabler:file-type-zip"
                        width="1.7em"
                        height="1.5em"
                        style={{ color: "white" }}
                      />
                      Download .zip File
                    </span>
                  </button>
                </Link>
              )}
            </Box>
            <Box
              sx={{
                bgcolor: "#111827",
                color: "white",
                padding: "10px",
                textAlign: "justify",
              }}
            >
              <Typography variant="h5">How To Use?</Typography>
              <Typography >
                Download the DumpsArena Test Engine Simulator and install it,
                then download the premium .dumpsarena file using above yellow
                button and you will get .zip file, unzip it, and add it to
                DumpsArena Test Engine Simulator. Activate the premium
                .dumpsarena file with above purchase and activation keys.
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} lg={4}>
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

export default TeAccess;
