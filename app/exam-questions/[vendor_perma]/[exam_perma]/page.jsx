/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import {
  CommentsCard,
  Content,
  ExamPriceCard,
} from "../../../components/Cards";
import ExamLinks from "../../../components/InternalLinking/ExamLinks";
import { HotExam, ReleatedExam } from "../../../components/Tables";

const AllVendorsPerma = async ({ params, searchParams }) => {
  const referral = searchParams?.ref || "";
  const vendorResponce = await fetch(
    `${process.env.baseURL}/v1/vendor/${params.vendor_perma}`,
    {
      headers: {
        "x-api-key": "ed79766c-2cc1-4967-8d3c-035387603caf",
      },
    }
  );
  const vendorData = await vendorResponce.json();

  const response = await fetch(
    `${process.env.baseURL}/v1/exam/${params.exam_perma}?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": "ed79766c-2cc1-4967-8d3c-035387603caf",
      },
    }
  );
  const data = await response.json();
  if (data?.exam_code === "null") {
    return <div>Hello</div>;
  }
  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;

  return data.exam_code === "null" ? (
    <div>Hello</div>
  ) : (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: data?.exam_faqs?.map((faq) => ({
              "@type": "Question",
              name: faq.faq_q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.faq_a,
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: data?.exam_title,
            description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of ${data?.exam_title} IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: 4,
                bestRating: 5,
              },
              author: {
                "@type": "Person",
                name: "Fred Benson",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: 4.4,
              reviewCount: randomReviewCount,
            },
          }),
        }}
      />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12} md={8.5}>
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
            <ExamPriceCard data={data} />
            {data?.exam_topics?.length > 0 && (
              <div className="max-w-full mx-auto bg-white shadow-md overflow-hidden mt-4">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="text-white bg-gradient-to-l  from-gray-900 via-blue-400 to-gray-900">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-lg font-medium text-white uppercase tracking-wider"
                      >
                        Topic
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-lg font-medium text-white uppercase tracking-wider"
                      >
                        Questions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data?.exam_topics.map((topic) => (
                      <tr
                        key={topic.topic}
                        className="hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:via-gray-800 hover:to-blue-500 "
                      >
                        <td className="px-6 py-4 text-lg whitespace-nowrap">
                          {topic.topic}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          {topic.topic_questions}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <Content data={data} referral={referral} />
            <ExamLinks
              vendorTitle={vendorData?.vendor_title}
              vendorData={vendorData}
              data={data}
            />
          </Grid>
          <Grid item sm={12} md={3.5}>
            <HotExam />
            <ReleatedExam examData={data} />
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
                    className="text-white bg-gradient-to-r from-blue-400 to-gray-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Customer Support
                  </button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8.5}>
            <CommentsCard data={data} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AllVendorsPerma;
export async function generateMetadata({ params }) {
  const response = await fetch(
    `${process.env.baseURL}/v1/exam/${params.exam_perma}?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": "ed79766c-2cc1-4967-8d3c-035387603caf",
      },
    }
  );
  const data = await response.json();
  return {
    title: `Updated ${data.exam_title} Exam Question and Answers by Tech Professionals`,
    description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of ${data.exam_title} IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024 and become certified professional.`,
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://examprince.com/exam-questions/${params.vendor_perma}/${params.exam_perma}`,
        },
      ],
    },
  };
}
