/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-async-client-component */
import { Box, Card, Typography } from "@mui/material";
import Link from "next/link";

const AllReleatedExam = ({ data }) => {
  return (
    <>
      <Card className="text-white mt-2" sx={{ mb: 1, bgcolor: "#345277" }}>
        <Typography
          color={"white"}
          fontSize={24}
          fontWeight={500}
          className="flex p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1.10em"
            viewBox="0 0 24 24"
            style={{ marginTop: 4, marginRight: 3, color: "#6F75E0" }}
          >
            <path
              fill="white"
              d="M22.099 5.781c-1.283-2-3.14-3.67-5.27-4.52l-.63-.213a7.433 7.433 0 0 0-2.15-.331c-2.307.01-4.175 1.92-4.175 4.275a4.3 4.3 0 0 0 .867 2.602l-.26-.342c.124.186.26.37.417.556c.663.802 1.604 1.635 2.822 2.58c2.999 2.32 4.943 4.378 5.104 6.93c.038.344.062.696.062 1.051c0 1.297-.283 2.67-.764 3.635h.005s-.207.377-.077.487c.066.057.21.1.46-.053a12.104 12.104 0 0 0 3.4-3.33a12.111 12.111 0 0 0 2.088-6.635a12.098 12.098 0 0 0-1.9-6.692zm-9.096 8.718l-1.878-1.55c-3.934-2.87-5.98-5.966-4.859-9.783a8.73 8.73 0 0 1 .37-1.016v-.004s.278-.583-.327-.295a12.067 12.067 0 0 0-6.292 9.975a12.11 12.11 0 0 0 2.053 7.421a9.394 9.394 0 0 0 2.154 2.168H4.22c4.148 3.053 7.706 1.446 7.706 1.446h.003a4.847 4.847 0 0 0 2.962-4.492a4.855 4.855 0 0 0-1.889-3.87z"
            />
          </svg>
          <b> Releated Exams</b>
        </Typography>
      </Card>
      <Box sx={{ borderRadius: "0px" }}>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full ">
              <div className="py-2">
                <div>
                  {Array.isArray(data) &&
                    data.slice(0, 5).map((item, index, array) => {
                      const {
                        vendor_title,
                        exam_title,
                        vendor_perma,
                        exam_perma,
                      } = item;
                      return (
                        <>
                          <div
                            key={exam_perma}
                            style={{ width: "100%", marginBottom: "8px" }}
                            class="bg-white border border-gray-200 rounded-lg shadow hover:cursor-pointer hover:decoration-transparent"
                          >
                            <div class="px-4">
                              <Link
                                href={`/exam-questions/${vendor_perma}/${exam_perma}`}
                                class="flex items-center justify-between"
                              >
                                <span class="text-lg font-bold text-gray-600 mt-2">
                                  {vendor_title}
                                </span>

                                <div class="flex items-center space-x-1 mt-2">
                                  <svg
                                    class="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    class="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                  >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.1em"
                                    height="1.1em"
                                    viewBox="0 0 256 256"
                                  >
                                    <path
                                      fill="#FDE047"
                                      d="M239.18 97.26A16.38 16.38 0 0 0 224.92 86l-59-4.76l-22.78-55.09a16.36 16.36 0 0 0-30.27 0L90.11 81.23L31.08 86a16.46 16.46 0 0 0-9.37 28.86l45 38.83L53 211.75a16.4 16.4 0 0 0 24.5 17.82l50.5-31.08l50.53 31.08A16.4 16.4 0 0 0 203 211.75l-13.76-58.07l45-38.83a16.43 16.43 0 0 0 4.94-17.59m-15.34 5.47l-48.7 42a8 8 0 0 0-2.56 7.91l14.88 62.8a.37.37 0 0 1-.17.48c-.18.14-.23.11-.38 0l-54.72-33.65a8 8 0 0 0-4.19-1.17V32c.24 0 .27.08.35.26L153 91.86a8 8 0 0 0 6.75 4.92l63.91 5.16c.16 0 .25 0 .34.29s0 .4-.16.5"
                                    />
                                  </svg>
                                  <div class="flex items-center">
                                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                                      4.5
                                    </span>
                                  </div>
                                </div>
                              </Link>
                              <Link
                                href={`/exam-questions/${vendor_perma}/${exam_perma}`}
                              >
                                <h5 class="text-base pb-2 font-semibold tracking-tight text-gray-500 hover:text-blue-400">
                                  {exam_title}
                                </h5>
                              </Link>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Box>
    </>
  );
};
export default AllReleatedExam;
