/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { X_API_Key } from "../../../AllUrls/ApiKey";
import { BaseUrl } from "../../../AllUrls/BaseUrl";
import {
  CommentsCard,
  Content,
  ExamPriceCard,
  RefundPolicy,
  SafeCheckOut,
} from "../../../components/Cards";
import { HotExam, ReleatedExam } from "../../../components/Tables";
import BackCountDown from "../../../components/TimeOut/BackCountDown";

const CertificationExamPage = async ({ params }) => {
  const response = await fetch(
    `${BaseUrl}/v1/certification/${params.cert_perma}?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );
  const data = await response.json();
  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: data?.cert_single_exam?.exam_faqs?.map((faq) => ({
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
            name: data?.cert_title,
            description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of ${data.cert_title} IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
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
      {data._has_multiple_exams && (
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Card
                className="text-white bg-gradient-to-b from-blue-400 to-gray-900"
                sx={{
                  color: "white",
                  borderRadius: "0.375rem",
                  fontSize: "0.875rem",
                  textAlign: "center",
                  cursor: "pointer",
                  padding: "0.625rem 1.25rem",
                  marginBottom: "0.5rem",
                }}
              >
                <Typography
                  fontSize={20}
                  fontWeight={700}
                  className="text-white"
                  color={"white"}
                >
                  {data?.cert_title}
                </Typography>
              </Card>
              <Card sx={{ bgcolor: "#1F2937", my: "10px", width: "100%" }}>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={3.5}>
                    <div className="flex justify-center">
                      <img
                        className="pl-5 rounded-t-lg h-full w-full"
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
                        {data?.vendor_title}
                      </Typography>
                      <Typography
                        fontSize={16}
                        fontWeight={700}
                        color={"white"}
                      >
                        Reliable Study Materials & Testing Engine for{" "}
                        {data.cert_title} Certification Success!
                      </Typography>
                      <Typography
                        fontSize={16}
                        fontWeight={700}
                        color={"white"}
                      >
                        Latest {data.exam_questions} Question & Answers
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
                          Limited Time Mega Sale!
                        </Typography>
                        <Typography
                          fontSize={20}
                          fontWeight={700}
                          color={"#DC3545"}
                        >
                          40-70% OFF
                        </Typography>
                        <Typography
                          fontSize={16}
                          fontWeight={700}
                          color={"#856404"}
                        >
                          Hurry up! offer ends in <BackCountDown />
                        </Typography>
                        <Typography
                          fontSize={18}
                          fontWeight={700}
                          color={"#0056B3"}
                        >
                          *Descarga GRATIS el Reproductor de Test
                        </Typography>
                      </Card>
                    </div>
                  </Grid>
                </Grid>
              </Card>
              <Box>
                <Grid container spacing={1}>
                  {data?.cert_multiple_exams?.map((exam) => (
                    <Grid key={exam.exam_perma} item xs={12} md={12}>
                      <div
                        style={{ minHeight: "130px", position: "relative" }}
                        className="max-w p-6 text-white bg-gradient-to-l from-blue-400 to-gray-900 shadow flex flex-col justify-between"
                      >
                        <div>
                          <h5 className="mb-1 text-2xl font-bold tracking-tight text-white">
                            {exam.exam_vendor_title}
                          </h5>
                          <p className="mb-4 text-large text-gray-200">
                            {exam.exam_title}
                          </p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="mb-2 text-sm font-bold text-gray-50">
                            Total {exam.exam_questions} Question & Answers
                          </p>
                          <Link
                            className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 ${
                              exam.exam_retired
                                ? "bg-red-500 hover:bg-red-600"
                                : "bg-green-700 hover:bg-green-800"
                            }`}
                            href={`/exam-questions/${params.vendor_perma}/${exam.exam_perma}`}
                          >
                            {exam.exam_retired ? "Retired Exam" : "Buy Now"}
                            <svg
                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid item sm={12} md={4}>
              <HotExam />
              <RefundPolicy />
              <SafeCheckOut />
            </Grid>
          </Grid>
        </Container>
      )}
      {data?._has_multiple_exams === false && (
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12} md={8}>
              <ExamPriceCard data={data.cert_single_exam} />
              {data?.cert_single_exam?.exam_topics?.length > 0 && (
                <div className="max-w-full mx-auto bg-white shadow-md overflow-hidden mt-4">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="text-white bg-gradient-to-l  from-gray-900 via-blue-400 to-gray-900">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-5 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                          Topic
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-5 text-right text-xs font-medium text-white uppercase tracking-wider"
                        >
                          Questions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {data?.cert_single_exam.exam_topics.map((topic) => (
                        <tr
                          key={topic.topic}
                          className="hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:via-gray-800 hover:to-blue-500 "
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
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
              <Content data={data.cert_single_exam} />
            </Grid>
            <Grid item sm={12} md={4}>
              <HotExam />
              <ReleatedExam examData={data.cert_single_exam} />
              <RefundPolicy />
              <SafeCheckOut />
            </Grid>
            <Grid item xs={12} md={8.5}>
              <CommentsCard data={data} />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default CertificationExamPage;

export async function generateMetadata({ params }) {
  const response = await fetch(
    `${BaseUrl}/v1/certification/${params.cert_perma}?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );

  const data = await response.json();
  let shouldIndex = true;
  if (data.cert_title === null) {
    shouldIndex = false;
  }

  return {
    title: `Updated ${data.cert_title} Exam Questions and Answers by Tech Professionals`,
    description: `Examprince is a premium provider of Real and Valid Exam Questions and Answers of ${data.cert_title} IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024 and become certified professional.`,
    robots: {
      index: shouldIndex,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://examprince.com/vendor-exam-questions/${params.vendor_perma}/${params.cert_perma}`,
        },
      ],
    },
  };
}
