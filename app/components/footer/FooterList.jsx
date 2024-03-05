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
          <div style={{ fontSize: 30, fontWeight: 800 }}>Dumps Boss</div>
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
              <div style={{ marginBottom: "10px" }}> sales@dumpsarena.com</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              className="text-left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 256 256"
              >
                <g fill="currentColor">
                  <path
                    d="M223.94 174.08A48.33 48.33 0 0 1 176 216A136 136 0 0 1 40 80a48.33 48.33 0 0 1 41.92-47.94a8 8 0 0 1 8.3 4.8l21.13 47.2a8 8 0 0 1-.66 7.53L89.32 117a7.93 7.93 0 0 0-.54 7.81c8.27 16.93 25.77 34.22 42.75 42.41a7.92 7.92 0 0 0 7.83-.59l25-21.3a8 8 0 0 1 7.59-.69l47.16 21.13a8 8 0 0 1 4.83 8.31"
                    opacity=".2"
                  />
                  <path d="m222.37 158.46l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8.12 8.12 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62M176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40a.61.61 0 0 0 0 .12l21 47l-20.67 24.74a6.13 6.13 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a8.44 8.44 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208" />
                </g>
              </svg>
              <div style={{ marginBottom: "10px" }}>+447380890921</div>
            </div>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 mb-4 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/1 w-full px-4 text-justify">
            DumpsArena does not provide real Microsoft exam questions.
            Similarly, DumpsArena does not supply real Amazon exam questions.
            The materials offered by DumpsArena lack real questions and answers
            from Cisco's certification exams. The CFA Institute neither endorses
            nor assures the accuracy or quality of DumpsArena's content. CFA®
            and Chartered Financial Analyst® are registered trademarks held by
            the CFA Institute.
          </div>
          <div className="mt-3">
            <Link href="/">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-800 to-blue-400 group-hover:from-gray-600 group-hover:to-blue-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-600 text-white  rounded-md group-hover:bg-opacity-0">
                  Home
                </span>
              </button>
            </Link>
            <Link href="/all-vendors">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-800 to-blue-400 group-hover:from-gray-600 group-hover:to-blue-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-600 text-white  rounded-md group-hover:bg-opacity-0">
                  Vendor
                </span>
              </button>
            </Link>
            <Link href="/all-certificates">
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
            <Link href="#">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-800 to-blue-400 group-hover:from-gray-600 group-hover:to-blue-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-600 text-white  rounded-md group-hover:bg-opacity-0">
                  Faqs
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Box className="md:flex md:justify-center p-2 ">
          <p className="text-white text-sm text-center sm:text-center">
            © 2024 DumpsArena.com - All Rights Reserved
          </p>
        </Box>
      </div>
    </footer>
  );
};

export default FooterList;
