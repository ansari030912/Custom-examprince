/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Card, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import CustomCarousel from "../components/CardSlider/CustomCarousel";
import { Search } from "../components/Search";
import HotExamsData from "../components/Tables/HotExamsData";
import { Footer } from "../components/footer";
import { Navbar } from "../navbar";
const TestEngineSimulator = () => {
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

          <Grid item xs={12} lg={8}>
            <Card
              sx={{
                p: "20px",
                borderRadius: "0px",
              }}
            >
              <section className="text-gray-600 body-font">
                <div className="px-5 py-5 mx-auto">
                  <div className=" mb-5">
                    <h1 className="sm:text-4xl text-xl font-medium title-font text-gray-700 mb-4">
                      <b>Ace Your Upcoming Certification Exam Quickly!</b>
                    </h1>
                    <p className="text-gray-500 leading-relaxed">
                      <b>
                        Prepare, study, and ace your certification exam
                        effortlessly with everything you need. Enjoy 90 days of
                        free updates and ensure 100% success on your first
                        attempt.
                      </b>
                    </p>
                  </div>
                  <div className="flex flex-wrap  sm:mx-auto sm:mb-2 -mx-2">
                    <div className="p-1 sm:w-1/2 w-full">
                      <div className="text-white bg-gradient-to-br from-gray-800 to-blue-400  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-tl-4xl  rounded-tr-none rounded-br-none flex p-4 h-full items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.7em"
                          height="1.7em"
                          viewBox="0 0 2048 2048"
                        >
                          <path
                            fill="white"
                            d="m1344 1510l339-339l90 90l-429 429l-237-237l90-90zm704-742v1280H768v-781q-61 13-128 13q-133 0-249-50t-204-137T50 890T0 640q0-133 50-249t137-204T390 50T640 0q133 0 249 50t204 137t137 203t50 250q0 67-13 128zM128 640q0 106 40 199t110 162t163 110t199 41q106 0 199-40t162-110t110-163t41-199q0-106-40-199t-110-162t-163-110t-199-41q-106 0-199 40T279 278T169 441t-41 199m1792 256h-693q-51 113-134 196t-197 135v693h1024zm-915-403L576 922L339 685l90-90l147 147l339-339z"
                          />
                        </svg>
                        <span className="title-font font-medium">
                          <div className="font-bold ml-2 text-white">
                            Authentic exam simulation
                          </div>
                        </span>
                      </div>
                    </div>

                    <div className="p-1 sm:w-1/2 w-full">
                      <div className="text-white bg-gradient-to-bl from-gray-800 to-blue-400  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-tl-4xl md:rounded-tr-3xl rounded-tl-none rounded-bl-none flex p-4 h-full items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.8em"
                          height="1.8em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="white"
                            d="M6.5 10C7.3 10 8 9.3 8 8.5S7.3 7 6.5 7S5 7.7 5 8.5S5.7 10 6.5 10M9 6l7 7l-5 5l-7-7V6zm0-2H4c-1.1 0-2 .9-2 2v5c0 .6.2 1.1.6 1.4l7 7c.3.4.8.6 1.4.6s1.1-.2 1.4-.6l5-5c.4-.4.6-.9.6-1.4c0-.6-.2-1.1-.6-1.4l-7-7C10.1 4.2 9.6 4 9 4m4.5 1.7l1-1l6.9 6.9c.4.4.6.9.6 1.4s-.2 1.1-.6 1.4L16 19.8l-1-1l5.7-5.8z"
                          />
                        </svg>
                        <span className="title-font font-medium">
                          <div className="font-bold ml-2 text-white">
                            Multiple question provided
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="p-1 sm:w-1/2 w-full">
                      <div className="text-white bg-gradient-to-r from-gray-800 to-blue-400  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-tl-4xl flex p-4 h-full items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.8em"
                          height="1.8em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 14v2m-4-6V8a4 4 0 1 1 8 0v2m-9 9h10a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1"
                          />
                        </svg>
                        <span className="title-font font-medium">
                          <div className="font-bold ml-2 text-white">
                            Personalized exam mode options
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="p-1 sm:w-1/2 w-full">
                      <div className="text-white bg-gradient-to-l from-gray-800 to-blue-400  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-tl-4xl flex p-4 h-full items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.6em"
                          height="1.6em"
                          viewBox="0 0 2048 2048"
                        >
                          <path
                            fill="white"
                            d="m1491 595l90 90l-749 749l-365-365l90-90l275 275zM1024 0q141 0 272 36t245 103t207 160t160 208t103 245t37 272q0 141-36 272t-103 245t-160 207t-208 160t-245 103t-272 37q-141 0-272-36t-245-103t-207-160t-160-208t-103-244t-37-273q0-141 36-272t103-245t160-207t208-160T751 37t273-37m0 1920q123 0 237-32t214-90t182-141t140-181t91-214t32-238q0-123-32-237t-90-214t-141-182t-181-140t-214-91t-238-32q-123 0-237 32t-214 90t-182 141t-140 181t-91 214t-32 238q0 123 32 237t90 214t141 182t181 140t214 91t238 32"
                          />
                        </svg>
                        <span className="title-font font-medium">
                          <div className="font-bold ml-2 text-white">
                            Complete exams in a single file
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="p-1 sm:w-1/2 w-full">
                      <div className="text-white bg-gradient-to-tr from-gray-800 to-blue-400  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-tl-4xl rounded-tr-none rounded-br-none md:rounded-bl-3xl flex p-4 h-full items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.8em"
                          height="1.8em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="white"
                            d="M7 3H5v6h2zm12 0h-2v10h2zM3 13h2v8h2v-8h2v-2H3zm12-6h-2V3h-2v4H9v2h6zm-4 14h2V11h-2zm4-6v2h2v4h2v-4h2v-2z"
                          />
                        </svg>
                        <div className="font-bold ml-2 text-white">
                          Unlimited access to exam files
                        </div>
                      </div>
                    </div>
                    <div className="p-1 sm:w-1/2 w-full">
                      <div className="text-white bg-gradient-to-tl from-gray-800 to-blue-400  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-tl-4xl rounded-tr-none rounded-bl-none rounded-br-4xl flex p-4 h-full items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.8em"
                          height="1.8em"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            fill="white"
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372m47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2c.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8c-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119c0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3c-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7c4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124c-.1-69.4-44.2-100.4-109-116.4m-68.6-16.2c-5.6-1.6-10.3-3.1-15-5c-33.8-12.2-49.5-31.9-49.5-57.3c0-36.3 27.5-57 64.5-61.7zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2c47.3 14.4 63.2 34.4 63.2 65.1c0 39.1-29.4 62.6-72 66.4"
                          />
                        </svg>
                        <span className="title-font font-medium">
                          <div className="font-bold ml-2 text-white">
                            Free Test Engine usage
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Card>
            <Card
              className="text-white bg-gradient-to-b from-gray-800 to-blue-400"
              sx={{ padding: "18px", bgcolor: "#E9ECEF", mt: "10px" }}
            >
              <CustomCarousel />
            </Card>
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

export default TestEngineSimulator;
