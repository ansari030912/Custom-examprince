/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Card, Container, Grid } from "@mui/material";
import SafeCheckOutCard from "../components/Cards/SafeCheckOutCard";
import WindowsCard from "../components/Cards/WindowsCard";
import HotExamsData from "../components/Tables/HotExamsData";

export async function generateMetadata() {
  return {
    title: `FAQ's ExamPrince.com`,
    description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://examprince.com/faqs`,
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
              <div style={{ color: "white" }}>FAQ'S ExamPrince.Com</div>
            </Card>
            <Card className="p-6 mt-2">
              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold ">
                Frequently Asked Questions
              </h1>

              <div className="container mx-auto mt-4 text-justify">
                <h2 className="text-blue-500 text-2xl md:text-3xl lg:text-3xl font-bold mt-6">
                  Products Classification
                </h2>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  1. What Products ExamPrince.Com Offers?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  It is the main line Product provided for Exam preparation.
                  Questions and Answers are provided in .PDF format which can be
                  downloaded on a computer. Two weeks preparation time is
                  recommended before you appear in the Final Exam. FREE Demo for
                  any Questions and Answer Product can be downloaded from each
                  product page.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Customers who want to buy more than 3 exams at a discounted
                  price can request for "Custom Bundle". Forward such queries to{" "}
                  <a
                    href="mailto:sales@examprince.com"
                    className="text-blue-500 underline"
                  >
                    sales@examprince.com
                  </a>{" "}
                  and do not forget to include the Exam codes you need access
                  to. Our team will give you a discounted quotation depending on
                  the Exams requested.
                </p>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  2. Can I Pass Exam With ExamPrince.Com Questions And Answers
                  Product Only?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Certainly sure! Since all of examprince.com products are of
                  the Latest version we feel confident about the quality of the
                  products. Just make sure that you study the Questions and
                  Answers product of the respective Exam for two weeks before
                  you appear in the actual Exam.
                </p>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  3. How Long My ExamPrince.Com Product Remain Valid?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  ExamPrince.com products have a validity of 90 days from the
                  date of purchase. This means that any updates to the products,
                  including but not limited to new questions, or updates and
                  changes by our editing team, will be automatically updated to
                  your members area to make sure that you get the latest exam
                  prep materials during those 90 days.
                </p>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  4. Is it possible to extend the expired product?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Yes, when the 90 days of your product validity are over, you
                  have the option of renewing your expired products with an
                  additional discount. This can be done in your Member's Area.
                  Please note that you will not be able to use the product after
                  it has expired if you don't renew it.
                </p>

                <h2 className="text-blue-500 text-2xl md:text-3xl lg:text-3xl font-bold mt-6">
                  Version & Update
                </h2>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  1. What Is The Latest Version Of My ExamPrince.Com Product?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  ExamPrince.com Products are updated on a regular basis
                  whenever Questions are changed from our end. So it is
                  carefully ensured that you always have a fully updated
                  Product.
                </p>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  2. How to Verify my version of Questions and Answers Product?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  We regularly update the product Questions are changed from our
                  end. For double fold verification you can Login to your
                  examprince.com Member's Area and download the Latest Product
                  again.
                </p>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  3. How often are your products updated?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  There is NO FIXED DATE for the update of Exams. All
                  examprince.com Products are reviewed by Product Manager on a
                  weekly basis and if any certification vendor changes the
                  question in the exam our product will be updated accordingly.
                </p>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  4. Is your update free?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  We provide Free updates during the 90-day validity from the
                  date of purchase. To gain access to any update customer should
                  have a current copy of a specific exam in examprince.com
                  login. In case of Expired Products, you must extend the
                  product access for another 90 days at a 30% Discount to get
                  Updates.
                </p>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  5. Product is showing lesser number of Questions than before?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Why waste time on questions that are outdated? During the
                  Product Updates the older questions that no longer form the
                  part of the real Exam are removed and that is why the Product
                  might be left with fewer questions. This actually means that
                  you have to study fewer questions and pass with higher scores.
                </p>

                <h2 className="text-blue-500 text-2xl md:text-3xl lg:text-3xl font-bold mt-6">
                  PDF Version
                </h2>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  1. What is a PDF Version?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  The PDF version is simply a portable document copy of your
                  Questions and Answer Product. This is a world standard .pdf
                  file which contains all questions and answers and can be read
                  by official Acrobat by Adobe or any other free reader
                  application.
                </p>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  2. Will I get the updates for PDF Version?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  ExamPrince.com provides updates for PDF Version together with
                  the Questions & Answers product. If the PDF file is updated,
                  then the new version will be made available in your Member's
                  Area and you can download the new version from there.
                </p>

                <h2 className="text-blue-500 text-2xl md:text-3xl lg:text-3xl font-bold mt-6">
                  Download Product
                </h2>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  1. I have paid for my Product when can I download my product?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  If the payment was successful and you have received the
                  confirmation e-mail from examprince.com, you can download the
                  Product right away.
                </p>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  2. Where can I Download Product?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Login to your account here and you will see your invoice
                  number next to your product and the download button. You can
                  then download purchased product without delay.
                </p>

                <h2 className="text-blue-500 text-2xl md:text-3xl lg:text-3xl font-bold mt-6">
                  Login Failed & Solutions
                </h2>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  1. I have placed an order, but when I enter the user center I
                  do not see any active Products for downloading, what is the
                  problem?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Please make sure that the transaction was successful. Make
                  sure that you are logging into the correct account. If you
                  think that you are doing it correctly and the issue is still
                  not resolved please contact our Support Team.
                </p>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  2. After login, I am taken back to the home page, How can I
                  login my members area?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Make sure that you are filling the correct Email and Password.
                  Otherwise, the problem is with your internet browser. Restart
                  the computer and change Internet Settings if necessary.
                  Sometimes changing internet browser also helps. If the problem
                  persists, please email{" "}
                  <a
                    href="mailto:sales@examprince.com"
                    className="text-blue-500 underline"
                  >
                    sales@examprince.com
                  </a>
                  .
                </p>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  3. I have forgot my Password or system is not accepting
                  password? What should I do?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Please use the Forgot password page and we will send you an
                  email with a reset password link, click on that to reset your
                  Password. Alternatively, email{" "}
                  <a
                    href="mailto:sales@examprince.com"
                    className="text-blue-500 underline"
                  >
                    sales@examprince.com
                  </a>{" "}
                  to resolve this issue.
                </p>

                <h2 className="text-blue-500 text-2xl md:text-3xl lg:text-3xl font-bold mt-6">
                  Payment Options
                </h2>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  1. What ways can I choose to pay for the order?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  ExamPrince.com is accepting payments in many ways. The most
                  popular one is paying instantly through Credit or Debit card.
                  We recommend Card for faster payment.
                </p>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  2. What Kind Of Credit/Debit Cards Does ExamPrince.Com Accept?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  ExamPrince.com accepts most popular credit cards and debit
                  cards including VISA, Mastercard, American Express, Dinner
                  Club International, Maestro, Solo, JCB, and CarteBleue.
                </p>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  3. Is my credit card information secure at your site and how
                  secure is your website?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  ExamPrince.com is fully secured by Cloudflare SSL. We
                  absolutely can make sure that your card information is secure
                  at our website which is guaranteed by our Credit Card
                  Processors.
                </p>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  4. I am trying to Pay for my product, but I always get
                  "unauthorized" message. How can I pay for it?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Please make sure that you are filling in all the fields
                  correctly. You may try using an alternate Payment Method for
                  this purchase. Please e-mail{" "}
                  <a
                    href="mailto:sales@examprince.com"
                    className="text-blue-500 underline"
                  >
                    sales@examprince.com
                  </a>{" "}
                  for support payment assistance.
                </p>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  5. How can I get Discount?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Special Discount is offered for popular certifications and
                  exams. If you want to buy three or more products please
                  contact the Support Team for getting discount.
                </p>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  6. I Used ExamPrince.Com Questions And Answers Product And
                  Failed How Can I Ask For A Refund?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  If you fail the exam on the first attempt then you can claim
                  refund or swap exam for any two products of your Choice.
                  Please view examprince.com Guarantee for more details.
                </p>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  7. Does a third party can see your customers' information from
                  your website?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  No, they can not. Our system is fully secured and we do not
                  share any information with third parties.
                </p>

                <h2 className="text-blue-500 text-2xl md:text-3xl lg:text-3xl font-bold mt-6">
                  Unlimited Access
                </h2>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  1. How many Premium PDF files can be downloaded with Unlimited
                  Access?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Any 15 Premium PDF files can be Downloaded per month if you
                  buy Unlimited Access for any duration.
                </p>

                <h2 className="text-blue-500 text-2xl md:text-3xl lg:text-3xl font-bold mt-6">
                  Reseller Access
                </h2>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  1. How many Premium PDF files can be downloaded with Reseller
                  Access?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  You can download unlimited PDF files if you buy Reseller
                  Access for any duration. There are no download limits.
                </p>

                <h2 className="text-blue-500 text-2xl md:text-3xl lg:text-3xl font-bold mt-6">
                  Test Engine Simulator to open .examprince Files
                </h2>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  1. Where do I get Exam Testing Engine?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  To open .examprince files use FREE ExamPrince Exam Testing
                  Engine, which can be downloaded from, here. Should you have
                  any questions or concerns about using this product, please
                  contact the support team directly.
                </p>

                <h2 className="text-blue-500 text-2xl md:text-3xl lg:text-3xl font-bold mt-6">
                  Free Bonus PDF File
                </h2>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  1. What is FREE bonus PDF File?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Free bonus PDF Files are provided by our new experts, so we
                  are giving them FREE with premium files. Please follow our
                  Premium Files for preparations, correct and verified answers.
                </p>

                <h2 className="text-blue-500 text-2xl md:text-3xl lg:text-3xl font-bold mt-6">
                  Guarantee
                </h2>

                <h3 className="text-xl md:text-xl font-bold mt-4">
                  1. I took the exam today and failed how can I ask for a
                  refund?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  If you fail the exam on the first attempt then you can claim
                  refund or swap exam for any two products of your Choice
                  including the Original. Please view examprince.com Guarantee
                  page for more details.
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
