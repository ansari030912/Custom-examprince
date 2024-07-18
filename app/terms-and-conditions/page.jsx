/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Card, Container, Grid } from "@mui/material";
import Link from "next/link";
import SafeCheckOutCard from "../components/Cards/SafeCheckOutCard";
import WindowsCard from "../components/Cards/WindowsCard";
import HotExamsData from "../components/Tables/HotExamsData";

export async function generateMetadata() {
  return {
    title: `Terms & Conditions ExamPrince.com`,
    description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://examprince.com/terms-and-conditions`,
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
                ExamPrince.Com Terms And Conditions
              </div>
            </Card>
            <Card className="p-6 mt-2">
              {/* Terms and Conditions Section */}
              <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-6">
                ExamPrince.Com Terms And Conditions
              </h1>
              <div className="container mx-auto mt-2 text-justify">
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  ExamPrince (hereinafter referred to as the "Company", "we",
                  "us", "our" and "ourselves") operates a website called
                  ExamPrince.com, web-address is https://examprince.com
                  including all the subsidiary pages (hereinafter referred to as
                  the "Website"). The registered office of the Company is
                  situated at the 171-75 Shelton Street, London, United Kingdom,
                  WC2H 9JQ.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Mentioned below are the legal agreements that are binding
                  between the Company and you (hereinafter referred to as the
                  "User"). You are requested to carefully read these Terms of
                  Use because they are related to the way you use and interact
                  with the Website, and/or with the information that is part of
                  it and/or that is shared on our social media profiles and
                  pages, and all the products and services that you can access
                  through the Website. The mentioned Terms of Use govern all
                  kinds of uses of the Website, whether as a registered customer
                  or as a guest.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Please read them carefully. The Company reserves the right to
                  change these Terms and Conditions without prior notice, and
                  you are solely responsible for regularly reviewing these Terms
                  and Conditions.
                </p>

                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4">
                  Product Descriptions
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  The Company attempts to be as accurate as possible in
                  describing its products. However, the Company does not warrant
                  that product descriptions or other content on this site are
                  accurate, complete, reliable, current or error-free. If a
                  product purchased on this site is not substantially as
                  described, your remedy is to contact our support team ASAP.
                </p>

                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4">
                  Privacy
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Please review our Privacy Policy, the provisions of which are
                  incorporated in these Terms and Conditions by this reference.
                  By using this site, you acknowledge that you have read and
                  understood the Privacy Policy in detail.
                </p>

                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4">
                  Copyright
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  All content on this site, such as text, graphics, logos,
                  button icons, images, audio clips, digital downloads, and data
                  compilations is the property of the Company or its content
                  suppliers and is protected by domestic and international
                  Copyright Laws.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  The compilation of all content on this site is exclusive
                  property of the Company and is protected by domestic and
                  international copyright laws. All software used on this site
                  is the property of the Company or its software suppliers and
                  is protected by domestic and international copyright laws.
                </p>

                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4">
                  Copyright Complaints
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  The Company respects the intellectual property rights of
                  others. If you believe that your property appears on this site
                  in a manner that constitutes infringement of your copyright,
                  please do contact us at sales@examprince.com and we will
                  respond in the shortest time possible.
                </p>

                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4">
                  License And Site Access
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  The Company grants you a limited time license to access this
                  site, to purchase the products and use the services offered
                  through this site for personal use only.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  This license does not permit the following, all of which are
                  strictly prohibited without the prior written consent of the
                  Company: Downloading (other than page caching), Modifying,
                  Reproducing, Duplicating, Copying, or any Derivative use of
                  this site or its contents; any Collection or use of any
                  product listings, Descriptions, or Prices; any use of Data
                  Mining, Robots, or Similar Data gathering and Extraction
                  Devices; using or framing any Trademark, Logo, or other
                  Proprietary Information (including images, text, page layout,
                  or form) of the Company; using Meta Tags or any other "hidden
                  text" utilizing the Company's name or trademarks; or any
                  exploitation of this site or its contents for any commercial
                  purpose.
                </p>

                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4">
                  Fraudulent Activity
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  You agree to cooperate fully with the Company in any
                  investigation by the Company or its agents regarding
                  fraudulent or improper activity in connection with the use of
                  this site and the resource, including, but not limited to,
                  fraudulent charge backs and false claims regarding non-receipt
                  of products.
                </p>

                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4">
                  Third-party Sites
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  This site may also include links and pointers to Internet
                  sites maintained by third parties. The Company does not
                  operate or control any information, products or services
                  appearing on or offered through these third-party sites, is
                  not responsible for examining or evaluating these third-party
                  sites and does not assume any responsibility or liability for
                  any actions, products, or content related to these third-party
                  sites.
                </p>

                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4">
                  Indemnification
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  You agree to indemnify and hold the Company and its officers,
                  directors, agents, and employees, harmless from any claims,
                  demands, losses or costs, including reasonable attorneys'
                  fees, due to or arising out of your use of this site, your
                  breach of these Terms and Conditions, or your violation of any
                  law or the rights of a third party.
                </p>

                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4">
                  Governing Law And Jurisdiction
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  The prevailing party in any legal proceeding relating to these
                  Terms and Conditions or your use of this site shall be
                  entitled to recovery of reasonable attorney's fees, expert
                  fees, litigation expenses and court costs in addition to any
                  other relief Terms and Conditions and your agreement to be
                  bound hereby are governed by the laws of the United Kingdom,
                  without regard to its conflicts of law rules. In the event of
                  any dispute relating in any way to these Terms and Conditions
                  or your use of this site, you consent to the personal
                  jurisdiction of the U.K and federal courts located in the
                  jurisdiction of the court.
                </p>

                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4">
                  Notices
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  You consent to receive notices from us by e-mail, by mail at
                  the addresses included in the contact information you provide
                  to the Company, or by posting notices on this site.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Notices posted on this site shall be considered received 24
                  hours after posting.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Notices sent by e-mail shall be considered received
                  immediately upon sending, unless the Company receives notice
                  that the e-mail was not delivered.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  Notices sent by mail shall be considered received 3 business
                  days after mailing.
                </p>

                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4">
                  Waiver
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  The failure of the Company to enforce any provision of these
                  Terms and Conditions shall not be construed as a waiver or
                  limitation of the Company's right subsequently to enforce and
                  compel strict compliance with every provision of these Terms
                  and Conditions.
                </p>

                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4">
                  Remedies
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  You acknowledge that violation of these Terms and Conditions
                  could cause irreparable harm for which monetary damages may be
                  difficult to ascertain or an inadequate remedy. You therefore
                  agree that the Company shall be entitled, in addition to its
                  other rights, to seek and obtain injunctive relief for any
                  violation of these Terms and Conditions without the filing or
                  posting of any bond or surety.
                </p>

                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4">
                  Severability
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  If any term or provision of these Terms and Conditions is
                  found to be invalid or unenforceable by a court of competent
                  jurisdiction, such term or provision shall be deemed modified
                  to the extent necessary to make it valid and enforceable. If
                  such term or provision cannot be so modified, then the same
                  shall be deemed stricken here from, and shall not affect the
                  validity or enforceability of the remainder of these Terms and
                  Conditions.
                </p>

                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4">
                  Entire Agreement
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify">
                  These Terms and Conditions constitute the entire agreement
                  between you and the Company regarding the subject matter
                  hereof.
                </p>

                <p className="text-base md:text-lg lg:text-xl text-justify">
                  <Link
                    href="mailto:sales@examprince.com"
                    className="text-blue-500 underline"
                  >
                    sales@examprince.com
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
