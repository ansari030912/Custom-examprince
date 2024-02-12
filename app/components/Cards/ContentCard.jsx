"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function ContentCard({ data }) {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Card sx={{ bgcolor: "#111827", padding: "15px", mt: "10px" }}>
      <Typography variant="h5" fontWeight={600} padding={1} color={"white"}>
        Frequently Asked Questions
      </Typography>
      {data.exam_faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          style={{ marginBottom: "10px", border:"1px solid white" }} // Add inline style for spacing
        >
          <AccordionSummary
            sx={{ bgcolor: "white" }}
            aria-controls={`panel${index}d-content`}
            id={`panel${index}d-header`}
          >
            <div>
              {expanded ? (
                <svg
                  color="white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              ) : (
                <svg
                  color="white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              )}
            </div>
            <Typography>{faq.faq_q}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: "#111827", color: "white" }}>
            <Typography>{faq.faq_a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Card>
  );
}
