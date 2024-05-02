/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Container, Grid } from "@mui/material";
import { X_API_Key } from "../../../AllUrls/ApiKey";
import { BaseUrl } from "../../../AllUrls/BaseUrl";
import {
  CommentsCard,
  Content,
  ExamPriceCard,
  RefundPolicy,
  SafeCheckOut,
} from "../../../components/Cards";
import ExamLinks from "../../../components/InternalLinking/ExamLinks";
import { HotExam, ReleatedExam } from "../../../components/Tables";

const AllVendorsPerma = async ({ params, searchParams }) => {
  const referral = searchParams?.ref || "";
  const vendorResponce = await fetch(
    `${BaseUrl}/v1/vendor/${params.vendor_perma}`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );
  const vendorData = await vendorResponce.json();

  const response = await fetch(
    `${BaseUrl}/v1/exam/${params.exam_perma}?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );
  const data = await response.json();
  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;

  return data.exam_code === "null" ? (
    <div />
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
          <Grid item sm={12} lg={4}>
            <HotExam />
            <ReleatedExam examData={data} />
            <RefundPolicy />
            <SafeCheckOut />
          </Grid>
          <Grid item xs={12} md={8}>
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
    `${BaseUrl}/v1/exam/${params.exam_perma}?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );
  const data = await response.json();
  return {
    title: `Updated ${data.exam_title} Exam Question and Answers by Tech Professionals`,
    description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of ${data.exam_title} IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024 and become certified professional.`,
    robots: {
      index: data.index_tag ? data.index_tag : false,
    },
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
