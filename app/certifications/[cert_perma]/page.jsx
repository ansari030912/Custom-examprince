/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { HotExam } from "../../components/Tables";
import SingleCertificationTable from "../../components/Tables/SingleCertificationTable";
import { BaseUrl } from "../../AllUrls/BaseUrl";
import { X_API_Key } from "../../AllUrls/ApiKey";
import { RefundPolicy, SafeCheckOut } from "../../components/Cards";
import WindowsCard from "../../components/Cards/WindowsCard";

export async function generateMetadata({ params }) {
  return {
    title: `Updated ${params.cert_perma} Exam Question and Answers by Tech Professionals`,
    description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of ${params.cert_perma} IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://examprince.com/certifications/${params.cert_perma}`,
        },
      ],
    },
  };
}

const AllCertificatesPerma = async ({ params }) => {
  const response = await fetch(`${BaseUrl}/v1/vendor/${params.cert_perma}`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });
  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;
  const data = await response.json();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: data?.vendor_title,
            description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of ${data?.vendor_title} IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
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
            <SingleCertificationTable data={data} />
            <WindowsCard />
          </Grid>
          <Grid item sm={12} md={4}>
            <HotExam />
            <RefundPolicy />
            <SafeCheckOut />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AllCertificatesPerma;
