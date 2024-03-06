/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Card, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import WindowsCard from "../components/Cards/WindowsCard";
import { Search } from "../components/Search";
import HotExamsData from "../components/Tables/HotExamsData";
import { Footer } from "../components/footer";
import { Navbar } from "../navbar";

const RefundPolicy = () => {
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
                  src="/banner.gif"
                  alt="banner"
                  loading="lazy"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Card className="text-white bg-gradient-to-r from-blue-400 to-gray-900 p-2.5 font-bold text-2xl">
              Dumpsarena.Com Refund Policy
            </Card>
            <Card className="p-6 mt-2">
              <h1 class="text-3xl md:text-4xl lg:text-4xl font-bold ">
                dumpsarena.com Refund Policy
              </h1>

              <div class="container mx-auto mt-2">
                <p class="text-base md:text-lg lg:text-xl text-justify">
                  dumpsarena.com offers premium IT products to its clientele,
                  aiming for their success in exams. Our team provides
                  meticulously curated, genuine preparation materials for
                  various exams, for the following reasons:
                </p>

                <ul class="list-disc list-inside my-4">
                  <li class="text-base md:text-md lg:text-lg">
                    Our Questions & Answers are meticulously compiled by
                    seasoned IT professionals and experts with extensive field
                    experience.
                  </li>
                  <li class="text-base md:text-md lg:text-lg">
                    We consistently review the latest exam patterns to ensure
                    our products stay updated. Our question pools are regularly
                    refreshed to reflect changes in real exam questions,
                    ensuring a 95% coverage of all real exam questions.
                  </li>
                  <li class="text-base md:text-md lg:text-lg">
                    We provide unparalleled, top-tier customer service, offering
                    24/7 assistance to address any technical inquiries or
                    issues.
                  </li>
                  <li class="text-base md:text-md lg:text-lg">
                    We are so confident in the quality of our products that we
                    offer a full refund if you fail any exam on your first
                    attempt. We guarantee your success with dumpsarena.com
                    products.
                  </li>
                </ul>

                <p class="text-base md:text-lg lg:text-xl text-justify font-bold">
                  However, there are specific conditions for refund eligibility:
                </p>

                <ol class="list-decimal list-inside my-4">
                  <li class="text-base md:text-md lg:text-lg">
                    Refunds cannot be claimed after 30 days from the date of
                    purchase.
                  </li>
                  <li class="text-base md:text-md lg:text-lg">
                    You must study the dumps for at least 15 days before taking
                    the exam.
                  </li>
                  <li class="text-base md:text-md lg:text-lg">
                    Refund policy does not apply to retired exams.
                  </li>
                  <li class="text-base md:text-md lg:text-lg">
                    Refunds will not be issued if the candidate's name differs
                    from the account holder's name.
                  </li>
                  <li class="text-base md:text-md lg:text-lg">
                    Refunds will not be issued if the candidate's email differs
                    from the email used for payment processing (e.g., Stripe,
                    PayPal).
                  </li>
                  <li class="text-base md:text-md lg:text-lg">
                    To claim a refund, you must send your DumpsArena Invoice
                    number and failed result PDF or screenshot to{" "}
                    <a
                      href="mailto:sales@dumpsarena.com"
                      class="text-blue-500 underline"
                    >
                      sales@dumpsarena.com
                    </a>{" "}
                    within 7 days of receiving the result.
                  </li>
                  <li class="text-base md:text-md lg:text-lg">
                    Claims for wrong purchases will not be entertained once the
                    incorrect product is downloaded and installed.
                  </li>
                  <li class="text-base md:text-md lg:text-lg">
                    Refunds are not applicable for expired orders beyond 90 days
                    from the purchase date.
                  </li>
                  <li class="text-base md:text-md lg:text-lg">
                    Refund policy does not cover Unlimited Access packages.
                  </li>
                  <li class="text-base md:text-md lg:text-lg">
                    Refund policy does not apply to Training Courses.
                  </li>
                </ol>

                <p class="text-base md:text-lg lg:text-xl text-justify">
                  For cases not explicitly mentioned but related to the refund
                  policy, dumpsarena.com reserves all rights for final
                  explanation.
                </p>
              </div>
            </Card>
            <WindowsCard />
          </Grid>
          <Grid item sm={12} lg={4}>
            <HotExamsData />

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
                    className="text-white bg-gradient-to-r from-blue-400 to-gray-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
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

export default RefundPolicy;
