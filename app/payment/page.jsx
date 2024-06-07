/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Card, Container, Grid } from "@mui/material";
import SafeCheckOutCard from "../components/Cards/SafeCheckOutCard";
import WindowsCard from "../components/Cards/WindowsCard";
import HotExamsData from "../components/Tables/HotExamsData";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: `Payment ExamPrince.com`,
    description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://examprince.com/payment`,
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
              <div style={{ color: "white" }}>ExamPrince.Com Payment</div>
            </Card>
            <Card className="p-6 mt-2">
              {/* ExamPrince.Com Payment Section */}
              <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-6">
                Payment ExamPrince.Com
              </h1>
              <div className="container mx-auto mt-2 text-justify">
                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4">
                  How to buy?
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Purchase with an account on examprince.com
                </p>
                <ol className="list-decimal pl-5">
                  <li>
                    "Register" on our website to become a member of
                    examprince.com.
                  </li>
                  <li>
                    If you have registered before you can "Sign in" directly. If
                    not, you need to register first.
                  </li>
                  <li>
                    After you "Register" or "Sign in" successfully, you can
                    choose to be forwarded to the "My Account" or "Home Page".
                  </li>
                  <li>
                    Enter a term in the Search bar and click the "Vendors",
                    "Certifications" or "Exams" to find the exam subject which
                    you need, and then click the button "Add to cart" to add our
                    product to the cart.
                  </li>
                  <li>
                    Go to your shopping cart, In this page, please confirm the
                    exams and coupon code carefully. Then, you should click the
                    button of your choice of payment processor, Pay via Paypal
                    or Credit Card.
                  </li>
                  <li>
                    You will be redirected to PayPal or Credit Card processor's
                    website automatically, and we will not request any important
                    information from you. (Use PayPal account or credit card
                    such as Visa, MasterCard, American Express, Discover Card
                    and JCB to purchase it directly)
                  </li>
                  <li>
                    After successful payment, you will be redirected to your
                    member's area where you can download your exam instantly.
                  </li>
                </ol>

                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4">
                  Unable To Complete Payment?
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  If you are a PayPal user and you receive the following PayPal
                  Error:
                </p>
                <ul className="list-disc pl-5">
                  <li>"Error: Unable To Process This Transaction"</li>
                  <li>"Unable To Complete Payment"</li>
                  <li>"Unable To Proceed, Try again Later"</li>
                </ul>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  The wording may be a little different, but the message is
                  essentially the same.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  You may need to follow these steps to solve the issue:
                </p>
                <ol className="list-decimal pl-5">
                  <li>Login your PayPal account.</li>
                  <li>
                    Near the top of the page, there is a "SEND MONEY" Tab.
                    Directly under this, there is "Pay for examprince.com
                    Items". Clicking on that, should pull up ALL the purchases
                    you have on examprince.com that are not yet paid.
                  </li>
                  <li>
                    You can then select the one you would like to pay and
                    complete your transaction.
                  </li>
                  <li>
                    If the problem persists the clearing the cookies on your
                    internet browsers may solve the issue.
                  </li>
                </ol>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  This should solve the problem! If you are still experiencing
                  any problems, please contact examprince.com Customer Support.
                </p>

                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4">
                  If you are a Credit Card user and you are receiving the
                  payment Error:
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Support for Credit Cards checkout is coming soon.
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
