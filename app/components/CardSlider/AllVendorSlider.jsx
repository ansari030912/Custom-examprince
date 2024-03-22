/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const AllVendorSlider = () => {
  const exams = [
    {
      name: "AWS Developer Associate",
      image: "2",
      perma: "aws-certified-developer-associate-certification",
    },
    {
      name: "AWS Solution Architect Associate",
      perma: "aws-certified-solutions-architect-associate-certification",
      image: "3",
    },
    {
      name: "AWS Solution Architect Professional",
      perma: "aws-certified-solutions-architect-professional-certification",
      image: "6",
    },
    {
      name: "AWS Certified SysOps Administrator - Associate",
      perma: "aws-certified-sysops-administrator-associate-certification",
      image: "7",
    },

    {
      name: "PMP Project Management Professional",
      perma: "pmp-certification",
      image: "9",
    },
    {
      name: "PMI ACP",
      perma: "pmi-acp",
      image: "10",
    },
    {
      name: "CCNA",
      perma: "ccna",
      image: "11",
    },
    {
      name: "CCNP Enterprise",
      perma: "ccnp-enterprise",
      image: "12",
    },
    {
      name: "CCIE Enterprise Wireless",
      perma: "ccna-enterprise-wireless",
      image: "13",
    },
    {
      name: "Microsoft Certified: Azure Solutions Architect Expert",

      perma: "azure-solutions-architect-expert",
      image: "14",
    },
    {
      name: "Azure Fundamentals",
      perma: "azure-fundamentals",
      image: "15",
    },
    {
      name: "365 Certified: Enterprise Administrator Expert",
      perma: "microsoft-365-certified-enterprise-administrator-expert",
      image: "16",
    },
    {
      name: "Azure Administrator Associate",
      perma: "azure-administrator-associate",
      image: "17",
    },
    {
      name: "MCSA Windows Server 2016",
      perma: "mcsa-windows-server-2016",
      image: "18",
    },
    {
      name: "MCSE",
      perma: "mcse-microsoft-certified-solutions-expert",
      image: "20",
    },
    {
      name: "MCSA Web Applications",
      perma: "mcsa-web-applications",
      image: "21",
    },
    {
      name: "MCSA: SQL 2016 Database Administration",
      perma: "mcsa-sql-2016-database-administration",
      image: "22",
    },
    {
      name: "MCSE: Core Infrastructure",
      perma: "mcse-core-infrastructure",
      image: "23",
    },
    {
      name: "MCSE Productivity Solutions",
      perma: "mcse-productivity-solutions-expert",
      image: "24",
    },
    {
      name: "MCSE Data Management and Analytics",
      perma: "mcse-data-management-and-analytics",
      image: "25",
    },
    {
      name: "CompTIA CASP",
      perma: "cmcse-core-infrastructure",
      image: "26",
    },
    {
      name: "CompTIA A+",
      perma: "comptia-a-plus-certification",
      image: "27",
    },
    {
      name: "CompTIA Linux+",
      perma: "comptia-linux-plus-certification",
      image: "28",
    },
    {
      name: "CompTIA Network+",
      perma: "comptia-network",
      image: "29",
    },
    {
      name: "CompTIA Security+",
      perma: "comptia-security",
      image: "30",
    },

    {
      name: "CCA-V Professional Virtualization",
      perma: "cca-v",
      image: "32",
    },

    {
      name: "CCP-V Expert Virtualization",
      perma: "ccp-v-certification",
      image: "34",
    },
    {
      name: "CISM Certified Information Security Manager",
      perma: "cism-certification",
      image: "35",
    },
    {
      name: "CISSP Certified Information Systems Security Professional",

      perma: "cissp-certification",
      image: "37",
    },
    {
      name: "Google Cloud Certified",
      perma: "google-cloud-certified",
      image: "38",
    },
    {
      name: "Checkpoint CCSA R80",
      perma: "ccsa-r80",
      image: "39",
    },
    {
      name: "CCSE R80",
      perma: "ccse-update",
      image: "40",
    },
    {
      name: "CEH Certified Ethical Hacker",
      perma: "ceh-certification",
      image: "41",
    },
    {
      name: "LPIC Level 1",
      perma: "lpic-level-1",
      image: "42",
    },
    {
      name: "LPIC Level 2",
      perma: "lpic-level-2-certification",
      image: "43",
    },
    {
      name: "LPIC Level 3",
      perma: "lpic-level-3-certification",
      image: "44",
    },
    {
      name: "PCNSE",
      perma: "pcnse",
      image: "45",
    },
    {
      name: "JNCIA Junos",
      perma: "jncia-junos-certification",
      image: "46",
    },
    {
      name: "TOGAF 9 Certified",
      perma: "togaf-9-certified-certification",
      image: "47",
    },
    {
      name: "VCAP6-DCV Design",
      perma: "vcap6-dcv-design",
      image: "48",
    },
    {
      name: "VCP6.5-DCV",
      perma: "vcp6-5-dcv",
      image: "49",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(exams.length / itemsPerPage);

  const renderCards = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const cards = exams.slice(startIndex, endIndex);

    return (
      <Grid container spacing={2}>
        {cards.map((vendor, index) => (
          <Grid item xs={6} sm={4} md={2.4} key={index}>
            <Link href={`/certification/${vendor.perma}`}>
              <Card
                className="transition-transform hover:scale-105 hover:bg-blend-hard-light"
                sx={{
                  boxShadow: "2px 2px 8px rgba(225, 140, 250, 100)",
                }}
              >
                <CardMedia sx={{ padding: "15px" }}>
                  <img
                    src={`/${vendor.image}.png`}
                    alt="card"
                    style={{
                      width: "100%",
                      maxHeight: "170px",
                      minHeight: "169px",
                    }}
                  />
                </CardMedia>
                <Divider />
                <CardContent
                  style={{ minHeight: "65px" }}
                  className="text-white bg-gradient-to-r from-gray-800 to-blue-400"
                >
                  <Typography
                    variant="h6"
                    fontSize={13}
                    fontWeight={700}
                    color="white"
                    sx={{
                      textAlign: "center",
                      mt: "-10px",
                      m: "-6px",
                      mb: "-10px",
                    }}
                  >
                    {vendor.name}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pagination = [];
    const adjacentPages = 1; // Number of adjacent pages to show
    let startPage = Math.max(1, currentPage - adjacentPages);
    let endPage = Math.min(totalPages, currentPage + adjacentPages);

    // Adding button for the first page
    if (currentPage > 1) {
      pagination.push(
        <button
          key="first"
          onClick={() => handlePageChange(1)}
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          First
        </button>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pagination.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          type="button"
          className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
            currentPage === i ? "bg-gray-200" : ""
          }`}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages) {
      pagination.push(
        <button
          style={{
            textAlign: "center",
          }}
          key="last"
          onClick={() => handlePageChange(totalPages)}
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Last
        </button>
      );
    }

    return pagination;
  };

  return (
    <Card
      sx={{
        padding: "15px",
        borderRadius: "0px",
      }}
    >
      <Box sx={{ textAlign: "right", mb: 1 }}>
        <Link href="/exam-providers">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br text-white from-green-400 to-blue-600  hover:text-white  focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md bg-opacity-0">
              View All Vendors
            </span>
          </button>
        </Link>
      </Box>
      <div className="cards">{renderCards()}</div>

      <Box sx={{ textAlign: "center", marginTop: 2 }}>{renderPagination()}</Box>
    </Card>
  );
};

export default AllVendorSlider;
