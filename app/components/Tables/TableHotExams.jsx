/* eslint-disable @next/next/no-async-client-component */
"use client";
import { Icon } from "@iconify/react";
import {
  Button,
  Card,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const TableHotExams = ({ data }) => {
  const [selectedView, setSelectedView] = useState("week");
  return (
    <>
      <Card sx={{ bgcolor: "#1F2937", mb: 1 }}>
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
            viewBox="0 0 24 24"
            style={{ marginTop: 3 }}
          >
            <path
              fill="red"
              d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.58.58 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27"
            ></path>
          </svg>
          <b>Hot Exams</b>
        </Typography>
      </Card>
      <Card >
        <Card sx={{ borderRadius: "0px" }}>
          <Grid
            container
            spacing={1}
            sx={{
              padding: "5px",
            }}
          >
            <Grid item xs={6}>
              <Button
                className="bg-gray-600 text-white"
                fullWidth
                variant="contained"
                onClick={() => setSelectedView("week")}
              >
                {selectedView === "week" ? <b>This Week</b> : "This Week"}
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                className="bg-gray-600 text-white"
                onClick={() => setSelectedView("month")}
              >
                {selectedView === "month" ? <b>This Month</b> : "This Month"}
              </Button>
            </Grid>
          </Grid>
        </Card>

        <TableContainer
          component={Paper}
          sx={{ borderRadius: "0px" }}
          size="small"
        >
          <Table sx={{ p: "10px" }} size="small">
            <TableBody sx={{ padding: 2 }}>
              {selectedView === "week" &&
                data?.week?.map((item) => {
                  const {
                    exam_vendor_title,
                    exam_title,
                    vendor_title,
                    exam_perma,
                  } = item;
                  return (
                    <>
                      <TableRow hover key={exam_perma}>
                        <TableCell>
                          <Link href={`/exam/${exam_perma}`}>
                            <Typography className="flex">
                              <Icon
                                icon="fa-solid:arrow-circle-right"
                                width="1rem"
                                height="1rem"
                                sx={{ color: "blue", marginRight: "10px" }}
                              />
                              <b
                                className="text-gray-700"
                                style={{ fontSize: 12, marginLeft: 4 }}
                              >
                                {exam_title}
                              </b>
                            </Typography>
                          </Link>
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })}
              {selectedView === "month" &&
                data?.month?.map((item) => {
                  const {
                    exam_vendor_title,
                    exam_title,
                    vendor_title,
                    exam_perma,
                  } = item;
                  return (
                    <>
                      <TableRow hover key={exam_perma}>
                        <TableCell>
                          <Link href={`/exam/${exam_perma}`}>
                            <Typography className="flex">
                              <Icon
                                icon="fa-solid:arrow-circle-right"
                                width="1rem"
                                height="1rem"
                                sx={{ color: "blue", marginRight: "10px" }}
                              />
                              <b
                                className="text-gray-700"
                                style={{ fontSize: 12, marginLeft: 4 }}
                              >
                                {exam_title}
                              </b>
                            </Typography>
                          </Link>
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};
export default TableHotExams;
