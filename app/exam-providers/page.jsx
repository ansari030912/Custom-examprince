/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import {
  RefundPolicy,
  SafeCheckOut,
  WindowsDataCard,
} from "../components/Cards";
import { HotExam } from "../components/Tables";
import AllVendors from "../components/Tables/AllVendors";

const AllVendorsPage = ({ searchParams }) => {
  const referral = searchParams?.ref || "";
  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Exam Providers",
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
          <Grid item xs={12} lg={8}>
            <AllVendors referral={referral} />
            <WindowsDataCard />
          </Grid>
          <Grid item sm={12} lg={4}>
            <HotExam />
            <RefundPolicy />
            <SafeCheckOut />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AllVendorsPage;

export async function generateMetadata() {
  return {
    title: `Updated Certificates Exam Question and Answers by Tech Professionals`,
    description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: false,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://examprince.com/exam-providers`,
        },
      ],
    },
  };
}
