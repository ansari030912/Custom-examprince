/* eslint-disable @next/next/no-async-client-component */

import { Card, Typography } from "@mui/material";
import Link from "next/link";

const AllReleatedExam = ({ data }) => {
  return (
    <>
      <Card className="text-white bg-gradient-to-r from-gray-800 to-blue-400 hover:bg-gradient-to-bl mt-2 mb-2">
        <Typography
          color={"white"}
          fontSize={24}
          fontWeight={500}
          className="flex p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            style={{ marginTop: 4, marginRight: 3, color: "#6F75E0" }}
          >
            <path
              fill="currentColor"
              d="M22.099 5.781c-1.283-2-3.14-3.67-5.27-4.52l-.63-.213a7.433 7.433 0 0 0-2.15-.331c-2.307.01-4.175 1.92-4.175 4.275a4.3 4.3 0 0 0 .867 2.602l-.26-.342c.124.186.26.37.417.556c.663.802 1.604 1.635 2.822 2.58c2.999 2.32 4.943 4.378 5.104 6.93c.038.344.062.696.062 1.051c0 1.297-.283 2.67-.764 3.635h.005s-.207.377-.077.487c.066.057.21.1.46-.053a12.104 12.104 0 0 0 3.4-3.33a12.111 12.111 0 0 0 2.088-6.635a12.098 12.098 0 0 0-1.9-6.692zm-9.096 8.718l-1.878-1.55c-3.934-2.87-5.98-5.966-4.859-9.783a8.73 8.73 0 0 1 .37-1.016v-.004s.278-.583-.327-.295a12.067 12.067 0 0 0-6.292 9.975a12.11 12.11 0 0 0 2.053 7.421a9.394 9.394 0 0 0 2.154 2.168H4.22c4.148 3.053 7.706 1.446 7.706 1.446h.003a4.847 4.847 0 0 0 2.962-4.492a4.855 4.855 0 0 0-1.889-3.87z"
            />
          </svg>
          <b> Releated Exams</b>
        </Typography>
      </Card>
      <Card>
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full">
              <div className="md:pr-1 md:py-6">
                {Array.isArray(data) &&
                  data.slice(0, 5).map((item) => {
                    const {
                      vendor_title,
                      exam_title,
                      vendor_perma,
                      exam_perma,
                    } = item;
                    return (
                      <>
                        <div key={exam_perma} className="flex relative pb-6">
                          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 text-white bg-gradient-to-r from-gray-500 to-stone-800 pointer-events-none"></div>
                          </div>
                          <div className="flex-shrink-0 w-10 h-10 rounded-full  bg-gradient-to-r from-gray-500 to-stone-800 inline-flex items-center justify-center text-white relative z-10">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1.8em"
                              height="1.8em"
                              viewBox="0 0 64 64"
                            >
                              <path
                                fill="white"
                                d="m57.063 20.218l1.029-1.698s.906-1.502.906-3.519c0-4.886-4.662-4.757-4.662-4.757L44.179 7.479L38.638 2l-7.291 1.985l-2.391-.651l-1.817 1.797l-10.497 2.858s-4.04-.111-4.04 4.123c0 1.748.786 3.05.786 3.05l1.351 2.23l-1.187 1.172l-5.86 1.596s-4.662-.129-4.662 4.757a7.56 7.56 0 0 0 .779 3.281L2 29.987l.949.376c.021.051.029.108.07.149c1.835 1.839 1.684 4.309 1.422 5.643l-1.109 1.111l8.401 4.039L23.271 60.35c1.849 2.906 5.774 1.088 5.774 1.088l29.649-14.256l-1.109-1.111c-.262-1.334-.413-3.804 1.422-5.644c.041-.041.049-.098.07-.148l.949-.377l-5.513-5.45l6.33-3.043l-.961-.963c-.227-1.156-.358-3.297 1.233-4.891c.035-.036.041-.084.06-.129l.825-.327zm-5.685-8.835l-1.25 1.978l-3.234-3.198zM39.176 7.144l4.643 4.963l-16.789 6.067l-3.965-6.156zM15.744 19.052l11.457 18.911l-21.827-8.658zm-4.775 2.067l-1.345 1.33l-.538-.825zm-4.247 1.034l1.252 1.927l-2.713 2.682a5.586 5.586 0 0 1-.331-1.845c0-1.826.906-2.521 1.792-2.764M5.154 37.026l.015-.058l25.147 11.007l-24.95-11.894c.023-.135.041-.284.06-.434l19.533 8.18l-19.465-9.116a7.723 7.723 0 0 0-.086-1.245l18.079 7.445L5.165 32.4a6.048 6.048 0 0 0-.47-1.137l24.883 10.625l.566.934c1.167 1.834 3.284 1.495 4.351 1.177c1.475.728 4.119 2.412 3.442 4.893c-.357 1.312-1.142 1.948-2.399 1.948c-1.273 0-2.544-.666-2.557-.675zM30.2 50.185l-1.966.814l-1.67-2.563zm-7.614 5.381l-7.729-12.759l7.682 3.693l3.633 5.592c-1.465.626-3.102 2.055-3.586 3.474m34.033-12.184a7.731 7.731 0 0 0-.086 1.245l-19.465 9.116l19.533-8.18c.019.149.036.299.06.434l-24.95 11.895l25.147-11.007a.982.982 0 0 1 .015.058L29.046 60.08c-.013.009-1.282.675-2.557.675c-1.258 0-2.042-.637-2.399-1.948c-.918-3.367 4.302-5.276 4.38-5.305l4.575-1.952c.491.209 3.994 1.584 5.711-1.115l1.083-1.786l17.494-7.47a6.12 6.12 0 0 0-.471 1.137L38.54 50.827zm.034-4.161l-14.825 6.144l4.114-6.791l6.767-3.253zm2.393-11.107a6.9 6.9 0 0 0-.075 1.079l-16.868 7.9l16.928-7.089c.017.129.031.26.052.376L37.459 40.688l21.794-9.539a.46.46 0 0 1 .013.05L35.149 42.586c-.011.007-1.112.585-2.216.585c-1.091 0-1.77-.553-2.079-1.689c-.796-2.918 3.728-4.572 3.796-4.597l25.014-10.68a5.268 5.268 0 0 0-.407.986l-15.88 7.376z"
                              />
                            </svg>
                          </div>
                          <Link
                            href={`/exam-questions/${vendor_perma}/${exam_perma}`}
                            className="w-full hover:text-blue-500"
                          >
                            <div className="flex-grow pl-4">
                              <b className="font-semibold text-sm  mb-1 tracking-wider">
                                {vendor_title}
                              </b>
                              <p className="leading-relaxed">{exam_title}</p>
                              <hr style={{ marginTop: "12px" }} />
                            </div>
                          </Link>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>
      </Card>
    </>
  );
};
export default AllReleatedExam;
