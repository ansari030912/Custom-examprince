/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Container, Grid } from "@mui/material";
import { X_API_Key } from "../../AllUrls/ApiKey";
import { BaseUrl } from "../../AllUrls/BaseUrl";
import {
  RefundPolicy,
  SafeCheckOut,
  WindowsDataCard,
} from "../../components/Cards";
import HotExamsData from "../../components/Tables/HotExamsData";
import SingleVendorExamTable from "../../components/Tables/SingleVendorExamTable";

export async function generateMetadata({ params }) {
  const response = await fetch(`${BaseUrl}/v1/vendor/${params.vendor_perma}`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const metaDATA = await response.json();
  return {
    title: `Updated ${params.vendor_perma} Exam Questions and Answers by Tech Professionals`,
    description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of ${params.vendor_perma} IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: metaDATA?.index_tag,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://examprince.com/exam-provider/${params?.vendor_perma}`,
        },
      ],
    },
  };
}

const AllVendorsPerma = async ({ params }) => {
  const response = await fetch(`${BaseUrl}/v1/vendor/${params.vendor_perma}`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

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
            <SingleVendorExamTable data={data} />
            <WindowsDataCard />
          </Grid>
          <Grid item sm={12} md={4}>
            <HotExamsData />
            <RefundPolicy />
            <SafeCheckOut />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AllVendorsPerma;
