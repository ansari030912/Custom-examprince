/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";
import Link from "next/link";

const FooterList = () => {
  return (
    <footer
      className="text-white body-font mt-4 bg-gray-700"
      style={{
        backgroundImage: "url(/footer.jpg)",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
      }}
    >
      <div className="container px-4 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <div style={{ fontSize: 30, fontWeight: 800, textAlign: "center" }}>
            Exam Prince
          </div>
          <img
            className="mt-2"
            width="100%"
            src="/safe_checkout_optimized.png"
            alt="safe_checkout_optimized"
          />
          <div className="mt-4">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              className="sm:text-right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.7rem"
                height="1.7rem"
                viewBox="0 0 36 36"
              >
                <path
                  fill="currentColor"
                  d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-1.54 22H5.66l7-7.24l-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0L32 9.21v17.5l-7.36-7.36l-1.41 1.41ZM5.31 8h25.07L17.84 20.47Z"
                  className="clr-i-outline clr-i-outline-path-1"
                />
                <path fill="none" d="M0 0h36v36H0z" />
              </svg>
              <div style={{ marginBottom: "10px" }}> sales@examprince.com</div>
            </div>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 mb-4 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/1 w-full px-4 text-justify">
            ExamPrince does not provide real Microsoft exam questions.
            Similarly, ExamPrince does not supply real Amazon exam questions.
            The materials offered by ExamPrince lack real questions and answers
            from Cisco's certification exams. The CFA Institute neither endorses
            nor assures the accuracy or quality of ExamPrince content. CFA® and
            Chartered Financial Analyst® are registered trademarks held by the
            CFA Institute.
          </div>
          <div className="mt-3">
            <Link href="/">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-800 to-blue-400 group-hover:from-gray-600 group-hover:to-blue-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-600 text-white  rounded-md group-hover:bg-opacity-0">
                  Home
                </span>
              </button>
            </Link>
            <Link href="/exam-providers">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-800 to-blue-400 group-hover:from-gray-600 group-hover:to-blue-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-600 text-white  rounded-md group-hover:bg-opacity-0">
                  Vendor
                </span>
              </button>
            </Link>
            <Link href="/certifications">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-800 to-blue-400 group-hover:from-gray-600 group-hover:to-blue-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-600 text-white  rounded-md group-hover:bg-opacity-0">
                  Certificates
                </span>
              </button>
            </Link>
            <Link href="/video-courses">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-800 to-blue-400 group-hover:from-gray-600 group-hover:to-blue-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-600 text-white  rounded-md group-hover:bg-opacity-0">
                  Video Cources
                </span>
              </button>
            </Link>
            <Link href="/unlimited-access">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-800 to-blue-400 group-hover:from-gray-600 group-hover:to-blue-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-600 text-white  rounded-md group-hover:bg-opacity-0">
                  Unlimited Access
                </span>
              </button>
            </Link>
            {/* <Link href="#">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-800 to-blue-400 group-hover:from-gray-600 group-hover:to-blue-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-600 text-white  rounded-md group-hover:bg-opacity-0">
                  Faqs
                </span>
              </button>
            </Link> */}
          </div>
        </div>
      </div>
      <div>
        <Box className="md:flex md:justify-center p-2 ">
          <p className="text-white text-sm text-center sm:text-center">
            © 2024 ExamPrince.com - All Rights Reserved
          </p>
        </Box>
      </div>
    </footer>
  );
};

export default FooterList;
