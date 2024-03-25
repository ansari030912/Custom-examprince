"use client";
import { Container, Grid } from "@mui/material";
import Link from "next/link";
import { Searching } from ".";

const SearchBar = () => {
  const data = [
    { href: "/exam-provider/cisco", label: "Cisco" },
    { href: "/exam-provider/amazon", label: "Amazon" },
    { href: "/exam-provider/microsoft", label: "Microsoft" },
    { href: "/exam-provider/pmi", label: "PMI" },
    { href: "/exam-providers", label: "View All" },
  ];
  const itemsPerPage = 5;

  const startIndex = 0 * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <nav
      class="text-white bg-gray-100 "
      style={{
        boxShadow:
          "inset 0 4px 4px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 0, 0, 0.175)",
      }}
    >
      <Container maxWidth="lg" className="sm:-pt-4 ">
        <Grid container spacing={1} sx={{ padding: "2px 3px 4px 2px" }}>
          <Grid item xs={0} md={6} lg={4}>
            <div className="hidden md:block overflow-hidden">
              <div className="flex space-x-1 sm:space-x-3 md:space-x-6 lg:space-x-3 mt-1">
                {currentData.map((item, index) => (
                  <Link href={item.href} key={index}>
                    <b
                      style={{ fontSize: "14px" }}
                      className="text-gray-600  hover:bg-gray-300  rounded-md px-2 py-2 text-md flex"
                    >
                      {item.label}
                    </b>
                  </Link>
                ))}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <Searching />
          </Grid>
        </Grid>
      </Container>
    </nav>
  );
};

export default SearchBar;
