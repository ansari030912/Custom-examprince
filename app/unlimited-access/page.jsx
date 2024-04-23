/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import {
  RefundPolicy,
  SafeCheckOut,
  UnlimitedAccess,
  WindowsDataCard,
} from "../components/Cards";
import { HotExam } from "../components/Tables";
import { BaseUrl } from "../AllUrls/BaseUrl";
import { X_API_Key } from "../AllUrls/ApiKey";

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
          url: `https://examprince.com/unlimited-access`,
        },
      ],
    },
  };
}
const UnlimitedAccessPage = async () => {
  const response = await fetch(
    `${BaseUrl}/v1/unlimited_access/?coupon=MEGASALE-30`,
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
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Unlimited Access",
            description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
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
          <Grid item xs={12} md={8}>
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
            <UnlimitedAccess data={data} />
            <WindowsDataCard />
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

export default UnlimitedAccessPage;
