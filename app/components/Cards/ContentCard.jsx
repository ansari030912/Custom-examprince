"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

export default function ContentCard({ data }) {
  const [expanded, setExpanded] = useState(null);
  const [value, setValue] = useState("faqs");

  const handlePageChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <>
      <Card
        sx={{
          mt: "10px",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
        }}
      >
        <Tabs value={value} onChange={handlePageChange}>
          <Tab
            value="faqs"
            label="Faqs"
            className="text-gray-600 text-md font-bold"
          />
          <Tab
            value="certifications"
            label="Certification"
            className="text-gray-600 text-md font-bold"
          />
        </Tabs>
      </Card>
      {value === "faqs" && (
        <Card
          sx={{
            bgcolor: "#111827",
            padding: "15px",
          }}
        >
          <Typography variant="h5" fontWeight={600} padding={1} color={"white"}>
            Frequently Asked Questions
          </Typography>
          {data?.exam_faqs?.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{ marginBottom: "10px", border: "1px solid white" }} // Use sx prop for inline styling
            >
              <AccordionSummary
                sx={{ bgcolor: "white" }}
                aria-controls={`panel${index}d-content`}
                id={`panel${index}d-header`}
              >
                <div>
                  <svg
                    color="white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </div>
                <Typography>{faq.faq_q}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ bgcolor: "#111827", color: "white" }}>
                <Typography>{faq.faq_a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Card>
      )}
      {value === "certifications" && (
        <Card sx={{ bgcolor: "#111827", color: "white", padding: "10px" }}>
          <Typography variant="h5" fontWeight={600} padding={1} color={"white"}>
            {data.exam_vendor_title} Certifications
          </Typography>
          <Typography>
            {Array.isArray(data.exam_certs) &&
              data?.exam_certs?.map((item) => (
                <Link
                  href={`/certification/${item.cert_perma}`}
                  key={item.cert_id}
                >
                  <Card
                    className="hover:bg-gray-600 hover:underline"
                    sx={{
                      mt: "4px",
                      bgcolor: "#111827",
                      color: "white",
                      padding: "10px",
                      border: "1px solid white",
                      borderRadius: "0px",
                    }}
                  >
                    {item.cert_title}
                  </Card>
                </Link>
              ))}
          </Typography>
        </Card>
      )}
    </>
  );
}
