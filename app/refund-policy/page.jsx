/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Card, Container, Grid } from "@mui/material";
import SafeCheckOutCard from "../components/Cards/SafeCheckOutCard";
import WindowsCard from "../components/Cards/WindowsCard";
import HotExamsData from "../components/Tables/HotExamsData";

export async function generateMetadata() {
  return {
    title: `Updated Certificates Exam Question and Answers by Tech Professionals`,
    description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://examprince.com/refund-policy`,
        },
      ],
    },
  };
}
const RefundPolicy = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12} lg={8}>
            <div className="mx-auto max-w-8xl flex justify-center">
              <div className="md:mx-150px mb-3 rounded-2">
                <img
                  src="/examprince-discount-banner.png"
                  alt="Banner"
                  loading="lazy"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <Card className="text-white bg-gradient-to-l from-blue-400 to-gray-900 p-2.5 font-bold text-2xl">
              <div style={{ color: "white" }}>ExamPrince.Com Refund Policy</div>
            </Card>
            <Card className="p-6 mt-2">
              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold ">
                ExamPrince.com Refund Policy
              </h1>

              <div className="container mx-auto mt-2 text-justify">
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  ExamPrince.com offers premium IT products to its clientele,
                  aiming for their success in exams. Our team provides
                  meticulously curated, genuine preparation materials for
                  various exams, for the following reasons:
                </p>

                <ul
                  style={{ textAlign: "justify" }}
                  className="list-disc list-inside my-4"
                >
                  <li
                    className="text-base md:text-md lg:text-lg"
                    style={{ textAlign: "justify" }}
                  >
                    Our Questions & Answers are meticulously compiled by
                    seasoned IT professionals and experts with extensive field
                    experience.
                  </li>
                  <li
                    style={{ textAlign: "justify" }}
                    className="text-base md:text-md lg:text-lg"
                  >
                    We consistently review the latest exam patterns to ensure
                    our products stay updated. Our question pools are regularly
                    refreshed to reflect changes in real exam questions,
                    ensuring a 95% coverage of all real exam questions.
                  </li>
                  <li
                    style={{ textAlign: "justify" }}
                    className="text-base md:text-md lg:text-lg"
                  >
                    We provide unparalleled, top-tier customer service, offering
                    24/7 assistance to address any technical inquiries or
                    issues.
                  </li>
                  <li className="text-base md:text-md lg:text-lg">
                    We are so confident in the quality of our products that we
                    offer a full refund if you fail any exam on your first
                    attempt. We guarantee your success with ExamPrince.com
                    products.
                  </li>
                </ul>

                <p
                  style={{ textAlign: "justify" }}
                  className="text-base md:text-lg lg:text-xl text-justify font-bold"
                >
                  However, there are specific conditions for refund eligibility:
                </p>

                <ol
                  style={{ textAlign: "justify" }}
                  className="list-decimal list-inside my-4"
                >
                  <li
                    style={{ textAlign: "justify" }}
                    className="text-base md:text-md lg:text-lg"
                  >
                    Refunds cannot be claimed after 30 days from the date of
                    purchase.
                  </li>
                  <li
                    style={{ textAlign: "justify" }}
                    className="text-base md:text-md lg:text-lg"
                  >
                    You must study the dumps for at least 15 days before taking
                    the exam.
                  </li>
                  <li
                    style={{ textAlign: "justify" }}
                    className="text-base md:text-md lg:text-lg"
                  >
                    Refund policy does not apply to retired exams.
                  </li>
                  <li className="text-base md:text-md lg:text-lg">
                    Refunds will not be issued if the candidate's name differs
                    from the account holder's name.
                  </li>
                  <li
                    style={{ textAlign: "justify" }}
                    className="text-base md:text-md lg:text-lg"
                  >
                    Refunds will not be issued if the candidate's email differs
                    from the email used for payment processing (e.g., Stripe,
                    PayPal).
                  </li>
                  <li
                    style={{ textAlign: "justify" }}
                    className="text-base md:text-md lg:text-lg"
                  >
                    To claim a refund, you must send your ExamPrinceInvoice
                    number and failed result PDF or screenshot to{" "}
                    <a
                      href="mailto:sales@ExamPrince.com"
                      className="text-blue-500 underline"
                    >
                      sales@ExamPrince.com
                    </a>{" "}
                    within 7 days of receiving the result.
                  </li>
                  <li
                    style={{ textAlign: "justify" }}
                    className="text-base md:text-md lg:text-lg"
                  >
                    Claims for wrong purchases will not be entertained once the
                    incorrect product is downloaded and installed.
                  </li>
                  <li
                    style={{ textAlign: "justify" }}
                    className="text-base md:text-md lg:text-lg"
                  >
                    Refunds are not applicable for expired orders beyond 90 days
                    from the purchase date.
                  </li>
                  <li
                    style={{ textAlign: "justify" }}
                    className="text-base md:text-md lg:text-lg"
                  >
                    Refund policy does not cover Unlimited Access packages.
                  </li>
                  <li
                    style={{ textAlign: "justify" }}
                    className="text-base md:text-md lg:text-lg"
                  >
                    Refund policy does not apply to Training Courses.
                  </li>
                </ol>

                <p
                  style={{ textAlign: "justify" }}
                  className="text-base md:text-lg lg:text-xl text-justify"
                >
                  For cases not explicitly mentioned but related to the refund
                  policy, ExamPrince.com reserves all rights for final
                  explanation.
                </p>
              </div>
            </Card>
            <WindowsCard />
          </Grid>
          <Grid item sm={12} lg={4}>
            <HotExamsData />
            <SafeCheckOutCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default RefundPolicy;
