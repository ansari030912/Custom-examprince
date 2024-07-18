/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Card, Container, Grid } from "@mui/material";
import Link from "next/link";
import SafeCheckOutCard from "../components/Cards/SafeCheckOutCard";
import WindowsCard from "../components/Cards/WindowsCard";
import HotExamsData from "../components/Tables/HotExamsData";

export async function generateMetadata() {
  return {
    title: `Privacy Policy ExamPrince.com`,
    description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://examprince.com/privacy-policy`,
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
              <div style={{ color: "white" }}>
                ExamPrince.Com Privacy Policy
              </div>
            </Card>
            <Card className="p-6 mt-2">
              {/* ExamPrince.Com Privacy Policy Section */}
              <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-6">
                ExamPrince.Com Privacy Policy
              </h1>
              <div className="container mx-auto mt-2 text-justify">
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Welcome to the Privacy Center of examprince.com,
                  examprince.com respects your privacy. By this notice, we make
                  a commitment to you that we will protect your privacy.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  In the following parts, we will show you how your data is
                  collected and used.
                </p>
                <h4 className="text-xl md:text-xl lg:text-2xl font-bold mt-4">
                  {" "}
                  Where Can Privacy Notice be used?
                </h4>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  This privacy notice informs how examprince.com deals with the
                  personal identification information and other personal
                  identification information shared by the business companies
                  when visitors visit{" "}
                  <Link
                    className="text-blue-400 underline"
                    href={"https://examprince.com"}
                  >
                    https://examprince.com
                  </Link>{" "}
                  and its server.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  When you are registered to be a member of examprince.com, it
                  means that we can use your information according to this
                  privacy notice.
                </p>
                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4 text-blue-500">
                  User E-mail and Password
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  You are required to fill in your e-mail address and password
                  when you register at examprince.com deals. The only one thing
                  that matters when you log in is your password. Your registered
                  E-mail is your username when you log in at{" "}
                  <Link
                    className="text-blue-400 underline"
                    href={"https://examprince.com"}
                  >
                    https://examprince.com
                  </Link>
                  . Please use an e-mail address which is effective so we can
                  keep in touch with you.
                </p>
                <p className="text-base md:text-base text-justify mb-3 mt-4">
                  <b>1.</b> You can change your password once you have logged in
                  examprince.com deals Member's Area.
                </p>
                <p className="text-base md:text-base text-justify mb-3">
                  <b>2.</b> If you forget your password, you may lose your
                  account and your personal identification information.
                </p>
                <p className="text-base md:text-base text-justify mb-3">
                  <b>3.</b> You can contact us or use the links for password
                  missing to get your password back.
                </p>
                <p className="text-base md:text-base text-justify mb-3">
                  <b>4.</b> examprince.com deals holds no responsibility for the
                  damage caused by a missing password which is due to individual
                  mistakes or improper use of Member's Area.
                </p>
                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4 text-blue-500">
                  Collect Information
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  When you register at examprince.com, use examprince.com's
                  products or services, we'll collect your personal
                  identification information.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  If you want to be a member of examprince.com, you are required
                  to fill in the information, including name and registered
                  e-mail address.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  In addition, if you choose the Products Delivery Service, you
                  are required to fill in your true name, address, phone number
                  and postal code.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  examprince.com offers better service to its members by
                  obtaining members' statistical information from this
                  registered information.
                </p>
                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4 text-blue-500">
                  Use of Information
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  examprince.com collects client's information to offer better
                  focused services. After becoming a member of examprince.com,
                  we will offer you the following services by checking your
                  registered information:
                </p>
                <ul className="list-disc pl-5 mt-3">
                  <li>Enjoy examprince.com Membership Price.</li>
                  <li>
                    Receive the information of sale promotions, newsletters, new
                    products, new services and new features of examprince.com
                    periodically.
                  </li>
                  <li>Request assistance from our Support Team.</li>
                </ul>
                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4 text-blue-500">
                  Proclaim and Share the Information
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  examprince.com will never give, sell, rent or share our user's
                  personal information with the third party unless following
                  circumstances as exceptions:
                </p>
                <ul className="list-disc pl-5 mt-3">
                  <li>
                    When we are allowed to share the information with the third
                    party by our clients.
                  </li>
                  <li>
                    Whenever, without sharing your personal information, the
                    products and services you need/require will not be possible
                    to offer.
                  </li>
                  <li>
                    When, the third party, the surrogate of examprince.com and
                    examprince.com offer services together. (After the service,
                    the third party is forbidden to read all the data which is
                    available before the service included)
                  </li>
                  <li>
                    When we are forced to offer your information by law and the
                    government.
                  </li>
                  <li>
                    We find out that you disobey the service terms of
                    examprince.com or rules of other products and services.
                  </li>
                </ul>
                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4 text-blue-500">
                  Use of Cookies
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Under the circumstances that you don't refuse to receive
                  cookies, they will be sent to your browser and kept in the
                  hard disk of your computer.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  We use cookies to store the data caused by visiting our
                  website. So when you visit our website or visit it again, we
                  can identify you.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  We can offer you better service by analyzing the data. You
                  have the right to choose to accept the cookies or refuse it.
                  You can also refuse cookies by changing settings of the
                  browser.
                </p>
                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4 text-blue-500">
                  Credit Card
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  examprince.com online payment solution requires clients to
                  fill in the information of credit card on payment processor's
                  websites so we can't store any payment information on our
                  server. examprince.com will never get anything about the
                  client's integrity payment information. All our online payment
                  is accomplished by the third safe payment gateway. We can tell
                  whether the client has successfully paid by the feedback
                  information of the payment gateway. examprince.com uses SSL
                  confidential system to ensure the security of data
                  transmission.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  If our payment gateway judges that there might be some
                  possibility of Credit Card or Paypal Fraud, The client will
                  receive a mail inquiring about the information of your credit
                  card or Paypal. You should respond it in 24 hours if you have
                  received such mails. Then we will submit the information you
                  offered to the payment gateway to prove that you're the
                  cardholder of the credit card to dispel your suspicion of
                  cheating.
                </p>
                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4 text-blue-500">
                  External Links
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  You may find some links to other websites in{" "}
                  <Link
                    className="text-blue-400 underline"
                    href={"https://examprince.com"}
                  >
                    https://examprince.com
                  </Link>{" "}
                  and examprince.com has no responsibility for other websites
                  privacy safeguards. We may add some related business company's
                  websites to examprince.com at any time when needed, but the
                  information we give to relating companies is just general
                  information, we'll never publish your identification.
                </p>
                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4 text-blue-500">
                  The Revision of the Privacy Policy
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  The privacy policy of examprince.com improves continuously.
                  With the expansion of our service area, we will update the
                  privacy policy whenever there is something new. You can look
                  over this notice at any time. Except for the large margin of
                  revision in personal information, examprince.com won't inform
                  the clients of the update.
                </p>
                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4 text-blue-500">
                  Contact ExamPrince.Com
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  If you would like to contact us for any reason regarding our
                  privacy practices, please write to us at the following email
                  address:{" "}
                  <Link
                    className="text-blue-400 underline"
                    href={"sales@examprince.com"}
                  >
                    sales@examprince.com.
                  </Link>
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
