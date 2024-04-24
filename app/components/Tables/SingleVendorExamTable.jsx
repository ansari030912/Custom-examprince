"use client";
import {
  Avatar,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const SingleVendorExamTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 15;

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
        <Typography color={"white"} fontSize={22} fontWeight={500}>
          <b>{data.vendor_title}</b>
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
        <Table
          sx={{ p: "10px", borderRadius: "0px", bgcolor: "#FFFFFF" }}
          size="small"
        >
          <TableBody sx={{ padding: 2 }}>
            {Array.isArray(data.vendor_exams) &&
              data.vendor_exams
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item) => {
                  const { exam_code, exam_perma, exam_title, exam_questions } =
                    item;
                  return (
                    <TableRow hover key={exam_code}>
                      <TableCell>
                        <Link
                          className="md:flex justify-between"
                          href={`/exam-questions/${data?.vendor_perma}/${exam_perma}`}
                        >
                          <Typography
                            className="flex justify-between"
                            fontSize={14}
                            color={"#3D4049"}
                            fontWeight={600}
                          >
                            <Avatar
                              className="mt-3 md:mt-0"
                              alt={exam_title}
                              src={`https://dumpsarena.com/media/bacb.png`}
                            />
                            <div className="pl-4 mt-2">
                              <b className="flex">{exam_title}</b>
                            </div>
                          </Typography>
                          <Typography
                            className="pl-4 mt-3"
                            fontSize={14}
                            fontWeight={400}
                          >
                            <b>Total Exams:</b> <i>{exam_questions}</i>
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
          count={data.vendor_exams?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </Box>
    </>
  );
};
export default SingleVendorExamTable;
