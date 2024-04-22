/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-async-client-component */
import { Card, Typography } from "@mui/material";
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
      <Card sx={{ borderRadius: "0px" }}>
        <section className="text-gray-600 body-font">
          <div className="container px-2 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full ">
              <div className="py-2">
                <div style={{ border: "1px solid #E5E7EB" }}>
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
                            style={{ width: "100%" }}
                            className="flex justify-center items-center relative pb-1 hover:text-blue-500"
                          >
                            <div className="flex-grow w-full pl-2 text-gray-700 hover:text-blue-500">
                              <Link
                                href={`/exam-questions/${vendor_perma}/${exam_perma}`}
                                className="w-full"
                                style={{ width: "100%" }}
                              >
                                <b className="font-semibold text-md tracking-wider">
                                  <span className="text-blue-500">
                                    {vendor_title}
                                  </span>
                                  <p
                                    className="leading-relaxed"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: 600,
                                    }}
                                  >
                                    {exam_title}
                                  </p>
                                </b>
                              </Link>
                            </div>
                          </div>
                          {index < array.length - 1 && (
                            <hr
                              style={{ marginBottom: "2px" }}
                              className="bg-gradient-to-r from-gray-800 to-blue-400 "
                            />
                          )}
                        </>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Card>
    </>
  );
};
export default AllReleatedExam;
