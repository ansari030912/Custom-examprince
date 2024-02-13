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
import moment from "moment";
import Link from "next/link";
import React, { useState } from "react";

const TableContentRecentlyUpdated = ({ data }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 8;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card>
      <TableContainer component={Paper}>
        <Card
          sx={{
            bgcolor: "#1F2937",
            borderRadius: "0px",
          }}
        >
          <Typography
            color={"white"}
            fontSize={24}
            fontWeight={500}
            className="flex p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="0 0 54 54"
              style={{ marginTop: 3 }}
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth={4}
              >
                <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></path>
                <path
                  strokeLinecap="round"
                  d="M24.008 12v12.01l8.479 8.48"
                ></path>
              </g>
            </svg>
            <b>Recently Updated</b>
          </Typography>
        </Card>
        <Table sx={{ p: "10px" }} size="small">
          <TableBody sx={{ padding: 2 }}>
            {Array.isArray(data) &&
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item) => {
                  const {
                    exam_vendor_title,
                    exam_title,
                    exam_update_date,
                    exam_code,
                    exam_perma,
                  } = item;
                  return (
                    <TableRow hover key={exam_code}>
                      <TableCell style={{ m: "-4px" }}>
                        <Link href={`/exam/${exam_perma}`}>
                          <Typography className="flex justify-between">
                            <b>{exam_vendor_title}</b>
                            <Typography variant="caption">
                              <b>Updated Date: </b>
                              <em>{moment(exam_update_date).format("LL")}</em>
                            </Typography>
                          </Typography>
                          <Typography>{exam_title}</Typography>
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
  );
};
export default TableContentRecentlyUpdated;
