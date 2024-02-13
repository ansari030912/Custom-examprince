"use client";
import {
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
import React, { useState } from "react";

const AllVendorsTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 15;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Card
        sx={{
          bgcolor: "#1F2937",
          padding: 1,
          mb:1
        }}
      >
        <Typography
          color={"white"}
          fontSize={24}
          fontWeight={500}
          className="text-purple-600"
        >
          <b>Vendors - Ceritification Providers</b>
        </Typography>
        <Typography
          variant="body2"
          fontSize={20}
          fontWeight={700}
          color="white"
        >
          Pass-Guaranteed Practice Exam Questions - Get Certified & Career
          Success
        </Typography>
      </Card>
      <Card>
        <TableContainer component={Paper}>
          <Table sx={{ p: "10px" }} size="medium">
            <TableBody sx={{ padding: 2 }}>
              {Array.isArray(data) &&
                data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item) => {
                    const {
                      vendor_title,
                      vendor_exams,
                      vendor_id,
                      vendor_perma,
                    } = item;
                    return (
                      <TableRow hover key={vendor_id}>
                        <TableCell style={{ m: "-4px" }}>
                          <Link href={`/vendor/${vendor_perma}`}>
                            <Typography
                              className="flex justify-between"
                              fontSize={16}
                              fontWeight={600}
                            >
                              <b >{vendor_title}</b>
                              <Typography fontSize={14} fontWeight={400}>
                                <b>Total Exams:</b> <i>{vendor_exams}</i>
                              </Typography>
                            </Typography>
                          </Link>
                        </TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{
            boxShadow: "0 4px 8px rgba(0.5, 0, 0, 0.5)",
          }}
          rowsPerPageOptions={[rowsPerPage]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </Card>
    </>
  );
};
export default AllVendorsTable;
