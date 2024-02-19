"use client";
import {
  Avatar,
  Card,
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
    <>
      <Card
        sx={{
          bgcolor: "#111827",
          borderRadius: "0px",
          marginTop: 1,
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
      <Card sx={{ borderRadius: "0px", marginTop: 1 }}>
        <TableContainer component={Card}>
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
                      exam_vendor_img,
                    } = item;
                    return (
                      <TableRow hover key={exam_code}>
                        <TableCell style={{ marginLeft: -15 }}>
                          <div>
                            <Link
                              href={`/exam/${exam_perma}`}
                              className="md:flex justify-between"
                            >
                              <Typography className="flex">
                                <Avatar
                                  className="mt-4 md:mt-1"
                                  alt={exam_vendor_title}
                                  src={`https://dumpsarena.com/media/bacb.png`}
                                />
                                <div className="pl-4">
                                  <b className="flex">{exam_vendor_title}</b>
                                  <Typography>{exam_title}</Typography>
                                </div>
                              </Typography>
                              <Typography className="text-right">
                                <Typography variant="caption">
                                  <b>Updated Date: </b>
                                  <em>
                                    {moment(exam_update_date).format(
                                      "MM ddd YYYY"
                                    )}
                                  </em>
                                </Typography>
                              </Typography>
                            </Link>
                          </div>
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
export default TableContentRecentlyUpdated;
