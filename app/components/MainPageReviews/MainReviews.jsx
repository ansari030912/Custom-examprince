/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Slider from "react-slick";

const reviews = [
  {
    text: "Exam Prince offers the most comprehensive test engine I’ve ever used for my Cisco certifications!",
    name: "John Doe",
  },
  {
    text: "I aced my Amazon certification thanks to the detailed practice exams on Exam Prince.",
    name: "Jane Smith",
  },
  {
    text: "The best resource for Microsoft certification prep. Exam Prince's test engine is unmatched!",
    name: "Robert Johnson",
  },
  {
    text: "Dell certification was a breeze with Exam Prince. Their test engine is simply the best.",
    name: "Emily Davis",
  },
  {
    text: "PMI exams were tough, but Exam Prince made it manageable. Fantastic test engine!",
    name: "Michael Wilson",
  },
  {
    text: "The Riverbed exam was easy to tackle with the help of Exam Prince's thorough test engine.",
    name: "Jessica Taylor",
  },
  {
    text: "RSA certifications felt easier with Exam Prince’s outstanding practice tests.",
    name: "William Martinez",
  },
  {
    text: "I highly recommend Exam Prince for SAFe certification prep. Their test engine is the best!",
    name: "Linda Anderson",
  },
  {
    text: "Salesforce certification exams are well covered on Exam Prince. Excellent test engine!",
    name: "Christopher Thomas",
  },
  {
    text: "SANS certification prep was simplified with Exam Prince. Great resource!",
    name: "Susan Jackson",
  },
  {
    text: "SAP exams are extensive, but Exam Prince's test engine covered everything I needed.",
    name: "Charles White",
  },
  {
    text: "Exam Prince helped me pass my SAS Institute exams with ease. Their test engine is superb!",
    name: "Patricia Harris",
  },
  {
    text: "The Scaled Agile exam was tough, but Exam Prince's practice tests made it manageable.",
    name: "Daniel Lewis",
  },
  {
    text: "Scrum certification prep was straightforward with Exam Prince’s excellent test engine.",
    name: "Barbara Clark",
  },
  {
    text: "SDI exam prep was a breeze with Exam Prince. Highly recommend their test engine!",
    name: "Paul Robinson",
  },
  {
    text: "ServiceNow certification was made easier with Exam Prince. The test engine is top-notch!",
    name: "Nancy Walker",
  },
  {
    text: "Sitecore exam prep is fantastic on Exam Prince. Great test engine!",
    name: "Kevin Hall",
  },
  {
    text: "Six Sigma certification was achievable thanks to Exam Prince's thorough test engine.",
    name: "Karen Young",
  },
  {
    text: "Slack certification was smooth with the help of Exam Prince’s excellent test engine.",
    name: "Donald Hernandez",
  },
  {
    text: "Exam Prince made SNIA certification prep simple and effective. Highly recommended!",
    name: "Betty King",
  },
  {
    text: "If you're looking for the best test engine for Cisco exams, Exam Prince is the answer!",
    name: "Thomas Wright",
  },
  {
    text: "Amazon certification prep has never been easier, thanks to Exam Prince. Excellent resource!",
    name: "Helen Lopez",
  },
  {
    text: "Exam Prince's test engine helped me pass my Microsoft exams with flying colors.",
    name: "Larry Scott",
  },
  {
    text: "The best place for Dell certification prep. Exam Prince’s test engine is unbeatable!",
    name: "Margaret Green",
  },
  {
    text: "PMI certification was made simpler with Exam Prince’s fantastic test engine.",
    name: "Brian Adams",
  },
  {
    text: "I highly recommend Exam Prince for Riverbed exam prep. Their test engine is superb!",
    name: "Dorothy Baker",
  },
  {
    text: "RSA certification was easy to achieve with Exam Prince’s thorough practice exams.",
    name: "Kenneth Gonzalez",
  },
  {
    text: "SAFe exam prep was a breeze with Exam Prince. Excellent test engine!",
    name: "Lisa Nelson",
  },
  {
    text: "Salesforce certification was manageable thanks to Exam Prince’s great test engine.",
    name: "Matthew Carter",
  },
  {
    text: "Exam Prince's test engine is the best for SANS certification prep. Highly recommended!",
    name: "Betty Mitchell",
  },
  {
    text: "I passed my SAP exams with ease thanks to Exam Prince. Great test engine!",
    name: "Steven Perez",
  },
  {
    text: "SAS Institute certification was easy with the help of Exam Prince’s detailed practice tests.",
    name: "Linda Roberts",
  },
  {
    text: "Exam Prince made Scaled Agile exam prep straightforward and effective.",
    name: "George Turner",
  },
  {
    text: "Scrum certification was simple with Exam Prince. Their test engine is top-notch!",
    name: "Sarah Phillips",
  },
  {
    text: "SDI exam prep was efficient with Exam Prince’s excellent test engine.",
    name: "Edward Campbell",
  },
  {
    text: "ServiceNow certification was easier with Exam Prince. Highly recommend their test engine!",
    name: "Deborah Parker",
  },
  {
    text: "Sitecore exam prep was effective with the help of Exam Prince’s test engine.",
    name: "Joseph Evans",
  },
  {
    text: "Exam Prince's test engine made Six Sigma certification a smooth process. Highly recommended!",
    name: "Dorothy Edwards",
  },
  {
    text: "Slack certification was straightforward with Exam Prince’s detailed practice exams.",
    name: "Larry Collins",
  },
  {
    text: "SNIA exam prep was simplified with Exam Prince’s fantastic test engine.",
    name: "Sandra Stewart",
  },
  {
    text: "Cisco certification was manageable with the help of Exam Prince. Excellent test engine!",
    name: "Raymond Morris",
  },
  {
    text: "Amazon exams were easier with Exam Prince’s thorough test engine. Highly recommend!",
    name: "Sharon Rogers",
  },
  {
    text: "I passed my Microsoft certification thanks to Exam Prince. Their test engine is the best!",
    name: "Jerry Reed",
  },

  {
    text: "Exam Prince’s test engine is incredibly user-friendly and effective for Riverbed exams.",
    name: "Sarah Hill",
  },
  {
    text: "The RSA practice exams on Exam Prince are top-notch. The test engine is unparalleled!",
    name: "Brian Scott",
  },
  {
    text: "I passed my SAFe certification with flying colors thanks to Exam Prince. Their test engine is the best!",
    name: "Laura Green",
  },
  {
    text: "Exam Prince’s test engine made my Salesforce certification preparation a breeze. Highly recommend!",
    name: "Kevin Adams",
  },
  {
    text: "The SANS exam prep on Exam Prince is outstanding. The test engine is incredibly effective!",
    name: "Lisa Baker",
  },
  {
    text: "Exam Prince has the best test engine for SAP certifications. I passed with ease!",
    name: "Eric Nelson",
  },
  {
    text: "I’m so grateful for Exam Prince’s test engine. It made my SAS Institute exam preparation so much easier!",
    name: "Kimberly Carter",
  },
];

const customStyles = `
  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .slick-list:focus {
    outline: none;
  }

  .slick-list.dragging {
    cursor: pointer;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .slick-track:before,
  .slick-track:after {
    display: table;
    content: "";
  }

  .slick-track:after {
    clear: both;
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }

  [dir="rtl"] .slick-slide {
    float: right;
  }

  .slick-slide img {
    display: block;
  }

  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-events: none;
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-prev,
  .slick-next {
    display: none !important;
  }
`;

const TestimonialCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      style={{
        paddingTop: "3rem",
        // paddingBottom: "3rem",
        backgroundColor: "#F8FAFC",
        overflow: "hidden",
      }}
    >
      <style>{customStyles}</style>
      <div
        style={{ paddingLeft: "1rem", paddingRight: "1rem", margin: "0 auto" }}
      >
        <h2
          style={{
            marginBottom: "1.25rem",
            fontWeight: "bold",
            textAlign: "center",
            letterSpacing: "-0.015em",
            lineHeight: "1.2",
          }}
          className="text-4xl"
        >
          See what others are saying
        </h2>
        <p
          style={{
            marginBottom: "4rem",
            fontSize: "1.125rem",
            color: "#4B5563",
            fontWeight: "500",
            textAlign: "center",
            margin: "0 auto",
            maxWidth: "24rem",
          }}
        >
          Top World Wide Review About ExamPrince.com
        </p>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div
              key={index}
              style={{
                minHeight: "400px",
                flexShrink: "0",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
              className="px-2 min-h-95 mb-4 mt-3"
            >
              <div
                style={{
                  padding: "1.5rem",
                  height: "100%",
                  backgroundColor: "white",
                  borderRadius: "0.5rem",
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ paddingBottom: "1.5rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        style={{ width: "auto", padding: "0.125rem" }}
                      >
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z"
                            fill="#F59E0B"
                          ></path>
                        </svg>
                      </div>
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                  >
                    {review.text}
                  </p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ width: "auto", padding: "0.5rem" }}>
                    <img
                      src="/img/1.png"
                      alt=""
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div
                    style={{
                      width: "auto",
                      padding: "0.5rem",
                      textAlign: "center",
                    }}
                  >
                    <h3 style={{ fontSize: "1rem", fontWeight: "600" }}>
                      {review.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
