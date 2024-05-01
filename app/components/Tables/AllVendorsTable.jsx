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
import { useEffect, useState } from "react";

const AllVendorsTable = ({ data, referral }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 15;
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item.vendor_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedReferral = localStorage.getItem("referral");
      if (!storedReferral) {
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
          <b>Vendors - Exams Providers</b>
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
        <div className="pb-4 bg-white pl-3 pt-4">
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block pt-2 pb-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <hr />
        <Table sx={{ p: "10px", bgcolor: "#FFFFFF" }} size="small">
          <TableBody sx={{ padding: 2 }}>
            {Array.isArray(filteredData) &&
              filteredData
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
                        <Link
                          className="md:flex justify-between"
                          href={`/exam-provider/${vendor_perma}`}
                        >
                          <Typography
                            className="flex justify-between"
                            fontSize={14}
                            color={"#3D4049"}
                            fontWeight={600}
                          >
                            <Avatar
                              className="mt-4 md:mt-1"
                              alt={vendor_title}
                              src={`https://dumpsarena.com/media/bacb.png`}
                            />
                            <div className="pl-4 mt-3">
                              <b className="flex">{vendor_title}</b>
                              {/* <Typography>{vendor_title}</Typography> */}
                            </div>
                          </Typography>
                          <Typography
                            className="pl-4 mt-3"
                            fontSize={14}
                            fontWeight={400}
                          >
                            <b>Total Exams:</b> <i>{vendor_exams}</i>
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
export default AllVendorsTable;
