"use client";
import {
  Box,
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AllCertificatesTable = ({ data, referral }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 15;

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if referral already exists in localStorage
      const storedReferral = localStorage.getItem("referral");
      if (!storedReferral) {
        // If referral doesn't exist, save it to localStorage
        localStorage.setItem("referral", referral);
      }
    }
  }, [referral]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Card
        className="text-white bg-gradient-to-br from-gray-800 to-blue-400"
        sx={{
          padding: 1,
          mt: 1,
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        <Typography
          color={"white"}
          fontSize={22}
          fontWeight={500}
          className="text-white"
        >
          <b>Vendors Ceritification</b>
        </Typography>
        <Typography
          variant="body2"
          fontSize={18}
          fontWeight={700}
          color="white"
        >
          Certify Your Success with Pass-Guaranteed Practice Exams
        </Typography>
      </Card>

      <Box
        sx={{
          borderRadius: "0px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
        }}
      >
        <Table sx={{ p: "10px", bgcolor: "#FFFFFF" }} size="medium">
          <TableBody sx={{ padding: 2 }}>
            {Array.isArray(data) &&
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item) => {
                  const {
                    vendor_title,
                    vendor_certs,
                    vendor_id,
                    vendor_perma,
                  } = item;
                  return (
                    <TableRow hover key={vendor_id}>
                      <TableCell style={{ m: "-4px" }}>
                        <Link href={`/certifications/${vendor_perma}`}>
                          <Typography
                            className="flex justify-between"
                            fontSize={14}
                            color={"#3D4049"}
                            fontWeight={600}
                          >
                            <b>{vendor_title}</b>
                            <Typography fontSize={16} fontWeight={500}>
                              <i>
                                <b>{vendor_certs}</b>
                              </i>{" "}
                              <b>Certifications</b>
                            </Typography>
                          </Typography>
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>

        <TablePagination
          sx={{
            bgcolor: "#FFFFFF",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
          }}
          rowsPerPageOptions={[rowsPerPage]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </Box>
    </>
  );
};
export default AllCertificatesTable;
