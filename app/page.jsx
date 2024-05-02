/* eslint-disable @next/next/no-css-tags */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import {
  Container,
  Grid
} from "@mui/material";
import CardSliderVendor from "./components/CardSlider/CardSliderVendor";
import { RefundPolicy, SafeCheckOut } from "./components/Cards";
import MainPageCard from "./components/Cards/MainPageCard";
import WindowsCard from "./components/Cards/WindowsCard";
import HotExamsData from "./components/Tables/HotExamsData";
import RecentlyUpdatedTable from "./components/Tables/RecentlyUpdatedTable";

const Home = () => {
  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Exam Prince",
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
            <MainPageCard />
            <RecentlyUpdatedTable />
          </Grid>
          <Grid item sm={12} lg={4}>
            <HotExamsData />
            <RefundPolicy />
          </Grid>
          <Grid item xs={12}>
            <CardSliderVendor />
          </Grid>
          <Grid item xs={12} lg={8} style={{ marginTop: "-10px" }}>
            <WindowsCard />
          </Grid>
          <Grid item sm={12} lg={4}>
            <SafeCheckOut />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
export async function generateMetadata() {
  return {
    title: `Updated Exam Questions and Answers by Tech Professionals`,
    description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of  IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
  };
}
