/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Button, Card, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { RefundPolicy, SafeCheckOut } from "../components/Cards";
import AllVideoCourses from "../components/Tables/AllVideoCourses";
import HotExamsMW from "../components/Tables/HotExamsData";

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
          url: `https://examprince.com/video-courses`,
        },
      ],
    },
  };
}
const AllVideoCoursesPage = ({ searchParams }) => {
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
            name: "Video Courses",
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
            <AllVideoCourses referral={referral} />
          </Grid>
          <Grid item sm={12} md={4}>
            <HotExamsMW />
            <RefundPolicy />
            <SafeCheckOut />
            <Card
              sx={{
                bgcolor: "white",
                padding: "10px",
                mb: "10px",
                mt: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <div>
                    <Link href={"/test-engine-simulator"}>
                      <Typography
                        fontSize={25}
                        fontWeight={"bold"}
                        sx={{ textAlign: "center" }}
                        className="text-gray-700 hover:text-blue-400 cursor-pointer hover:underline text-center"
                      >
                        How to Open Test Engine .ExamPrinceFiles
                      </Typography>
                    </Link>
                    <Typography
                      fontSize={20}
                      variant="body1"
                      className="text-gray-700 text-center mb-2"
                    >
                      Use FREE ExamPrinceTest Engine player to open .examprince
                      files
                    </Typography>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingRight: "10px",
                  }}
                >
                  <img
                    src="/dumpsarena-test-engine_optimized.png"
                    alt="dumpsboss"
                    style={{ maxHeight: "400px", maxWidth: "100%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Link href={"/test-engine-simulator"}>
                    <Button
                      variant="contained"
                      className="bg-blue-500 mt-2 sm:mt-4"
                      sx={{
                        width: "100%",
                        bgcolor:
                          "linear-gradient(to bottom right, #6b46c1, #0075ff)",
                        "&:hover": {
                          bgcolor:
                            "linear-gradient(to bottom left, #6b46c1, #0075ff)",
                        },
                        "&:focus": {
                          ring: 4,
                          outline: "none",
                          ringColor: "blue.300",
                        },
                        "&:focus-visible": {
                          ring: 4,
                          outline: "none",
                          ringColor: "blue.800",
                        },
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2rem"
                        height="2rem"
                        viewBox="0 0 72 72"
                      >
                        <path
                          fill="#61b2e4"
                          fillRule="evenodd"
                          d="m34 16.163-19 3.093V34h19zM15 38v14.744l19 3.093V38zm23 18.488 22 3.582V38H38zM60 34H38V15.512l22-3.582z"
                          clipRule="evenodd"
                        />
                        <path d="M34 16.163h1a1 1 0 0 0-1.16-.987zm-19 3.093l-.16-.987a1 1 0 0 0-.84.987zM15 34h-1a1 1 0 0 0 1 1zm19 0v1a1 1 0 0 0 1-1zm-19 4v-1a1 1 0 0 0-1 1zm0 14.744h-1a1 1 0 0 0 .84.987zm19 3.093l-.16.987a1 1 0 0 0 1.16-.987zM34 38h1a1 1 0 0 0-1-1zm4 18.488h-1a1 1 0 0 0 .84.987zm22 3.582l-.16.987A1 1 0 0 0 61 60.07zM60 38h1a1 1 0 0 0-1-1zm-22 0v-1a1 1 0 0 0-1 1zm22-4v1a1 1 0 0 0 1-1zm-22 0h-1a1 1 0 0 0 1 1zm0-18.488l-.16-.987a1 1 0 0 0-.84.987zm22-3.582h1a1 1 0 0 0-1.16-.987zm-26.16 3.246l-19 3.093l.32 1.974l19-3.093zM14 19.256V34h2V19.256zM34 33H15v2h19zm-1-16.837V34h2V16.163zM14 38v14.744h2V38zm.84 15.731l19 3.093l.32-1.974l-19-3.093zM33 38v17.837h2V38zm-18 1h19v-2H15zm22.84 18.475l22 3.582l.32-1.974l-22-3.582zM61 60.07V38h-2v22.07zM38 39h22v-2H38zm1 17.488V38h-2v18.488zM60 33H38v2h22zm-21 1V15.512h-2V34zm20.84-23.057l-22 3.582l.32 1.974l22-3.582zM61 34V11.93h-2V34z" />
                      </svg>
                      <span style={{ marginTop: "5px" }}>Windows</span>
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AllVideoCoursesPage;
