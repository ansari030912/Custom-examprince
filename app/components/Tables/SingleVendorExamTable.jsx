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
          borderRadius: "0px",
        }}
      >
        <Typography color={"white"} fontSize={24} fontWeight={500}>
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
      <Card sx={{ borderRadius: "0px" }}>
        <TableContainer>
          <Table sx={{ p: "10px", borderRadius: "0px" }} size="small">
            <TableBody sx={{ padding: 2 }}>
              {Array.isArray(data.vendor_exams) &&
                data.vendor_exams
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item) => {
                    const {
                      exam_code,
                      exam_perma,
                      exam_title,
                      exam_questions,
                    } = item;
                    return (
                      <TableRow hover key={exam_code}>
                        <TableCell>
                          <Link href={`/exam/${exam_perma}`}>
                            <Typography fontSize={14} fontWeight={600}>
                              <b>{exam_title}</b>
                            </Typography>
                            <Typography
                              sx={{ textAlign: "right" }}
                              fontSize={14}
                              fontWeight={500}
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
        </TableContainer>
        <TablePagination
          sx={{
            boxShadow: "0 4px 8px rgba(0.5, 0, 0, 0.5)",
          }}
          rowsPerPageOptions={[rowsPerPage]}
          component="div"
          count={data.vendor_exams?.length} // Corrected count
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </Card>
    </>
  );
};
export default SingleVendorExamTable;
