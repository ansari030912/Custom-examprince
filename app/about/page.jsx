/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Card, Container, Grid } from "@mui/material";
import SafeCheckOutCard from "../components/Cards/SafeCheckOutCard";
import WindowsCard from "../components/Cards/WindowsCard";
import HotExamsData from "../components/Tables/HotExamsData";

export async function generateMetadata() {
  return {
    title: `About ExamPrince.com`,
    description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://examprince.com/about`,
        },
      ],
    },
  };
}

const page = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12} lg={8}>
            <Card className="text-white bg-gradient-to-l from-blue-400 to-gray-900 p-2.5 font-bold text-2xl">
              <div style={{ color: "white" }}>About ExamPrince.Com </div>
            </Card>
            <Card className="p-6 mt-2">
              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold ">
                About ExamPrince.com
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
                      href="mailto:sales@examprince.com"
                      className="text-blue-500 underline"
                    >
                      sales@examprince.com
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

              <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mt-6">
                About ExamPrince.Com
              </h2>
              <div className="container mx-auto mt-2 text-justify">
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  ExamPrince.com is a website committed to providing candidates
                  with all kinds of IT certifications study materials.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  We at ExamPrince.com guarantee that candidates will not only
                  pass their exams but also get a profound understanding of the
                  respective subject. There are so many companies in the
                  Certification Industry but ExamPrince.com is unique in itself.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  In the following parts, we will show you how your data is
                  collected and used.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Here you can find the latest and most accurate study materials
                  for all kinds of IT certification exams. Especially, IBM,
                  Microsoft, Cisco CCNA/CCDA/CCNP, VMware VCP510, Checkpoint
                  CCSE, CompTIA A+/Network+ certification practice exams, and
                  more. We help you pass any IT exam on the first try.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Get fewer questions with a reasonable price. Why? Because
                  accuracy is the key while comprehensiveness is the guarantee,
                  both of which are the foundation for a good performance in the
                  real exam. For example, with the CCNA product, some companies
                  show you 800+ questions but we supply only 300 questions
                  because other companies never delete the old questions that
                  will not be used in the real exam, wasting your time.
                  Sometimes, time is much more expensive than money.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Our study materials, including quality questions, verified
                  answers, and professional explanations in detail, cover all
                  the knowledge points and at least 95% of the exam questions,
                  with an emphasis on the main points and high summarization.
                  Any changes that happen in the tests of vendors will reflect
                  on our product off-hand.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  With the above advantages and disadvantages, candidates will
                  make their own choices.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Let us know if you have any queries:{" "}
                  <a
                    href="mailto:sales@examprince.com"
                    className="text-blue-500 underline"
                  >
                    sales@examprince.com
                  </a>
                </p>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4}>
            <HotExamsData />
            <SafeCheckOutCard />
          </Grid>
          <Grid item xs={12} lg={8}>
            <WindowsCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default page;
