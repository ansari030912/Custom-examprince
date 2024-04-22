"use client";
import {
  Card,
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

const SingleCertificationTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 15;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const uniqueCerts = Array.from(
    new Set(data?.vendor_certs?.map((cert) => cert?.cert_id))
  ).map((certId) => {
    return data?.vendor_certs?.find((cert) => cert?.cert_id === certId);
  });

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
          <b>{data?.vendor_title}</b> - <b>Certifications</b>
        </Typography>
      </Card>
      <Card sx={{ borderRadius: "0px" }}>
        <TableContainer>
          <Table sx={{ p: "10px", borderRadius: "0px" }} size="medium">
            <TableBody sx={{ padding: 2 }}>
              {Array.isArray(uniqueCerts) &&
                uniqueCerts
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item) => {
                    const { cert_id, cert_perma, cert_name, cert_title } = item;
                    return (
                      <TableRow hover key={cert_id}>
                        <TableCell>
                          <Link
                            href={`/vendor-exam-questions/${data?.vendor_perma}/${cert_perma}`}
                          >
                            <Typography
                              fontSize={18}
                              fontWeight={300}
                              sx={{ display: "flex" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1.4em"
                                viewBox="0 0 2048 2048"
                              >
                                <path
                                  fill="currentColor"
                                  d="M1024 640q79 0 149 30t122 82t83 123t30 149q0 80-30 149t-82 122t-123 83t-149 30q-80 0-149-30t-122-82t-83-122t-30-150q0-79 30-149t82-122t122-83t150-30"
                                />
                              </svg>{" "}
                              <b style={{ textDecoration: "underline" }}>
                                {cert_title}
                              </b>
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
          count={uniqueCerts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </Card>
    </>
  );
};
export default SingleCertificationTable;
