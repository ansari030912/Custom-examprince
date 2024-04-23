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
      name: "Developer Associate",
      image: "2",
      perma: "aws-certified-developer-associate-certification",
      vendor: "aws",
    },
    {
      name: "Solution Architect Associate",
      perma: "aws-certified-solutions-architect-associate-certification",
      image: "3",
      vendor: "aws",
    },
    {
      name: "Solution Architect Professional",
      perma: "aws-certified-solutions-architect-professional-certification",
      image: "6",
      vendor: "aws",
    },
    {
      name: "SysOps Administrator - Associate",
      perma: "aws-certified-sysops-administrator-associate-certification",
      image: "7",
      vendor: "aws",
    },

    {
      name: "Project Management Professional",
      perma: "pmp-certification",
      image: "9",
      vendor: "pmp",
    },
    {
      name: "ACP",
      perma: "pmi-acp",
      image: "10",
      vendor: "pmp",
    },
    {
      name: "CCNA",
      perma: "ccna",
      image: "11",
      vendor: "cisco",
    },
    {
      name: "CCNP - Enterprise",
      perma: "ccnp-enterprise",
      image: "12",
      vendor: "cisco",
    },
    {
      name: "CCIE - Enterprise Wireless",
      perma: "ccna-enterprise-wireless",
      image: "13",
      vendor: "cisco",
    },
    {
      name: "Azure Solutions Architect Expert",
      perma: "azure-solutions-architect-expert",
      image: "14",
      vendor: "microsoft",
    },
    {
      name: "Azure Fundamentals",
      perma: "azure-fundamentals",
      image: "15",
      vendor: "microsoft",
    },
    {
      name: "Enterprise Administrator - Expert",
      perma: "microsoft-365-certified-enterprise-administrator-expert",
      image: "16",
      vendor: "microsoft",
    },
    {
      name: "Azure Administrator - Associate",
      perma: "azure-administrator-associate",
      image: "17",
      vendor: "microsoft",
    },
    {
      name: "MCSA Windows Server 2016",
      perma: "mcsa-windows-server-2016",
      image: "18",
      vendor: "microsoft",
    },
    {
      name: "MCSE",
      perma: "mcse-microsoft-certified-solutions-expert",
      image: "20",
      vendor: "microsoft",
    },
    {
      name: "MCSA Web Applications",
      perma: "mcsa-web-applications",
      image: "21",
      vendor: "microsoft",
    },
    {
      name: "MCSA SQL 2016 Database Administration",
      perma: "mcsa-sql-2016-database-administration",
      image: "22",
      vendor: "microsoft",
    },
    {
      name: "MCSE Core Infrastructure",
      perma: "mcse-core-infrastructure",
      image: "23",
      vendor: "microsoft",
    },
    {
      name: "MCSE Productivity Solutions",
      perma: "mcse-productivity-solutions-expert",
      image: "24",
      vendor: "microsoft",
    },
    {
      name: "MCSE Data Management and Analytics",
      perma: "mcse-data-management-and-analytics",
      image: "25",
      vendor: "",
    },
    {
      name: "CompTIA CASP",
      perma: "cmcse-core-infrastructure",
      image: "26",
      vendor: "comptia",
    },
    {
      name: "CompTIA A+",
      perma: "comptia-a-plus-certification",
      image: "27",
      vendor: "comptia",
    },
    {
      name: "CompTIA Linux+",
      perma: "comptia-linux-plus-certification",
      image: "28",
      vendor: "comptia",
    },
    {
      name: "CompTIA Network+",
      perma: "comptia-network",
      image: "29",
      vendor: "comptia",
    },
    {
      name: "CompTIA Security+",
      perma: "comptia-security",
      image: "30",
      vendor: "comptia",
    },

    {
      name: "CCA-V Professional Virtualization",
      perma: "cca-v",
      image: "32",
      vendor: "citrix",
    },

    {
      name: "CCP-V Expert Virtualization",
      perma: "ccp-v-certification",
      image: "34",
      vendor: "citrix",
    },
    {
      name: "CISM",
      perma: "cism-certification",
      image: "35",
      vendor: "isaca",
    },
    {
      name: "CISSP",
      perma: "cissp-certification",
      image: "37",
      vendor: "isc",
    },
    {
      name: "Google Cloud Certified",
      perma: "google-cloud-certified",
      image: "38",
      vendor: "google",
    },
    {
      name: "Checkpoint CCSA R80",
      perma: "ccsa-r80",
      image: "39",
      vendor: "checkpoint",
    },
    {
      name: "CCSE R80",
      perma: "ccse-update",
      image: "40",
      vendor: "checkpoint",
    },
    {
      name: "CEH Certified Ethical Hacker",
      perma: "ceh-certification",
      image: "41",
      vendor: "eccouncil",
    },
    {
      name: "LPIC Level 1",
      perma: "lpic-level-1",
      image: "42",
      vendor: "lpi",
    },
    {
      name: "LPIC Level 2",
      perma: "lpic-level-2-certification",
      image: "43",
      vendor: "lpi",
    },
    {
      name: "LPIC Level 3",
      perma: "lpic-level-3-certification",
      image: "44",
      vendor: "lpi",
    },
    {
      name: "PCNSE",
      perma: "pcnse",
      image: "45",
      vendor: "poloalto-networks",
    },
    {
      name: "JNCIA Junos",
      perma: "jncia-junos-certification",
      image: "46",
      vendor: "juniper",
    },
    {
      name: "TOGAF 9 Certified",
      perma: "togaf-9-certified-certification",
      image: "47",
      vendor: "the-open-group",
    },
    {
      name: "VCAP6-DCV Design",
      perma: "vcap6-dcv-design",
      image: "48",
      vendor: "vmware",
    },
    {
      name: "VCP6.5-DCV",
      perma: "vcp6-5-dcv",
      image: "49",
      vendor: "vmware",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(exams.length / itemsPerPage);

  const renderCards = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const cards = exams.slice(startIndex, endIndex);

    return (
      <Grid container spacing={2}>
        {cards.map((vendor, index) => (
          <Grid item xs={12} sm={4} md={2} key={index}>
            <Link
              href={`/vendor-exam-questions/${vendor.vendor}/${vendor.perma}`}
            >
              <Card
                className="transition-transform  hover:scale-105 hover:bg-blend-hard-light"
                // sx={{
                //   boxShadow: "2px 2px 8px rgba(225, 140, 250, 100)",
                // }}
              >
                <CardMedia sx={{ padding: "10px" }} className="rounded-full">
                  <img
                    src={`/${vendor.image}.png`}
                    alt="card"
                    style={{
                      width: "100%",
                      minHeight: "185px",
                    }}
                  />
                </CardMedia>
                <Divider />
                <CardContent
                  style={{ minHeight: "65px" }}
                  className="text-gray-600 "
                >
                  <Typography
                    variant="h6"
                    fontSize={14}
                    fontWeight={700}
                    sx={{
                      textAlign: "center",
                      mt: "-8px",
                      m: "-8px",
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
          className="text-gray-100 bg-sky-900 border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
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
          className={`text-gray-100 bg-sky-900 border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  ${
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
          className="text-gray-100 bg-sky-900 focus:right-1 focus:ring-white border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          Last
        </button>
      );
    }

    return pagination;
  };

  return (
    <Box
      sx={{
        padding: "15px",
        borderRadius: "0px",
      }}
    >
      <div className="cards">{renderCards()}</div>

      <Box sx={{ textAlign: "center", marginTop: 2 }}>{renderPagination()}</Box>
    </Box>
  );
};

export default AllVendorSlider;
