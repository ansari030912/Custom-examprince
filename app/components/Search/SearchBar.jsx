"use client";
import { Container, Grid } from "@mui/material";
import Link from "next/link";
import { Searching } from ".";

const SearchBar = () => {
  const data = [
    { href: "/vendor/cisco", label: "Cisco" },
    { href: "/vendor/amazon", label: "Amazon" },
    { href: "/vendor/microsoft", label: "Microsoft" },
    { href: "/vendor/pmi", label: "PMI" },
    { href: "/all-vendors", label: "View All" },
  ];
  const itemsPerPage = 5;

  const startIndex = 0 * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <nav className="text-white bg-gradient-to-b from-blue-400 to-gray-900 p-1">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7} md={6} lg={4}>
            <div className="overflow-hidden">
              <div className="flex space-x-1 sm:space-x-3 md:space-x-6 lg:space-x-3 mt-1">
                {currentData.map((item, index) => (
                  <Link href={item.href} key={index}>
                    <b className="text-white hover:bg-gradient-to-t hover:from-gray-800 hover:text-white hover:to-blue-300 rounded-md px-2 py-2 text-sm font-medium flex">
                      {item.label}
                    </b>
                  </Link>
                ))}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={5} md={6} lg={8}>
            <Searching />
          </Grid>
        </Grid>
      </Container>
    </nav>
  );
};

export default SearchBar;
