/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Icon } from "@iconify/react";
import {
  Box,
  Card,
  Container,
  Grid,
  TablePagination,
  Typography,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { X_API_Key } from "../../../AllUrls/ApiKey";
import { BaseUrl } from "../../../AllUrls/BaseUrl";
import withAuth from "../../../auth/RouterAuth";
import { HotExam } from "../../../components/Tables";

const UnlimitedPDFPage = ({ params }) => {
  const router = useRouter();
  const [unlimitedTeAccess, setUnlimitedTeAccess] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
        if (!loginResponse?._token) {
          return router.push("/sign-in");
        }
        const response = await axios.get(
          `${BaseUrl}/v1/account/pdf-unlimited-access/${params.id_one}/${params.id_two}/A`,
          {
            headers: {
              "x-api-key": X_API_Key,
              Authorization: `Bearer ${loginResponse._token}`,
            },
          }
        );
        setUnlimitedTeAccess(response.data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
    if (!unlimitedTeAccess) {
      fetchData();
    }
  }, [unlimitedTeAccess, params.id_one, params.id_two, router]);

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12} md={8.5}>
            <Card sx={{ bgcolor: "#1F2937", width: "100%" }}>
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
                      className="text-red-500"
                      color={"white"}
                    >
                      Unlimited PDF Access
                    </Typography>
                    <Typography fontSize={18} fontWeight={700} color={"white"}>
                      You have the unlimited access of PDF Dumps files.
                    </Typography>

                    <Card
                      sx={{
                        bgcolor: "#FFF3CD",
                        p: "15px",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        fontSize={16}
                        fontWeight={700}
                        color={"#856404"}
                      >
                        You have downloaded
                      </Typography>
                      <Typography
                        fontSize={20}
                        fontWeight={700}
                        color={"#DC3545"}
                      >
                        {unlimitedTeAccess?.total_downloaded} of{" "}
                        {unlimitedTeAccess?.total_limit}
                      </Typography>
                      <Typography
                        fontSize={16}
                        fontWeight={700}
                        color={"#856404"}
                      >
                        files monthly download limit.
                      </Typography>
                      <Typography
                        fontSize={18}
                        fontWeight={700}
                        color={"#0056B3"}
                      >
                        (Each download of different or same PDF file will effect
                        the download limit)
                      </Typography>
                    </Card>
                  </div>
                </Grid>
              </Grid>
            </Card>
            {unlimitedTeAccess && (
              <Card sx={{ padding: "18px", bgcolor: "#F8F9FA", mt: "10px" }}>
                <Grid container spacing={3}>
                  {unlimitedTeAccess?.vendors
                    ?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    .map((vendor) => (
                      <Grid item xs={12} key={vendor.vendor_perma}>
                        <Box sx={{ bgcolor: "#E2E2E2", padding: "17px" }}>
                          <div className="mb-1 text-2xl font-bold tracking-tight text-black">
                            {vendor.vendor_title}
                          </div>
                          <Grid container spacing={2}>
                            {vendor.exams.map((exam) => (
                              <Grid key={exam.exam_perma} item xs={12} md={12}>
                                <div
                                  style={{
                                    minHeight: "130px",
                                    position: "relative",
                                  }}
                                  className="max-w-full p-6 text-white bg-gradient-to-l from-gray-400 to-gray-900 shadow flex flex-col justify-between"
                                >
                                  <div>
                                    <h5 className="mb-1 text-2xl font-bold tracking-tight text-white">
                                      {exam.exam_code}
                                    </h5>
                                    <p className="mb-4 text-large text-gray-200">
                                      {exam.exam_name}
                                    </p>
                                    <p className="mb-2 text-sm font-bold text-gray-50">
                                      Total {exam.exam_questions} Question &
                                      Answers
                                    </p>
                                  </div>
                                  <div className="flex justify-end items-center">
                                    <Link
                                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                                      href={`https://api.dumpsboss.com${exam.download_url}`}
                                    >
                                      Downalod File
                                      <Icon
                                        icon="ic:outline-download"
                                        width="1.6em"
                                        height="1.6em"
                                        style={{ color: "white" }}
                                      />
                                    </Link>
                                  </div>
                                </div>
                              </Grid>
                            ))}
                          </Grid>
                        </Box>
                      </Grid>
                    ))}
                </Grid>
                <div style={{ textAlign: "right", marginBottom: "-5px" }}>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={unlimitedTeAccess?.vendors?.length || 0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </div>
              </Card>
            )}
          </Grid>
          <Grid item sm={12} md={3.5}>
            <HotExam />
            <Grid
              container
              className="bg-gray-900"
              sx={{
                marginTop: "10px",
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
                  ExamPrince.com has a remarkable success record. We're
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
                  Your purchase with ExamPrince.com is safe and fast. The
                  ExamPrince.com website is protected by 256-bit SSL from
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
    </>
  );
};

export default withAuth(UnlimitedPDFPage);
