/* eslint-disable react/no-unescaped-entities */
"use client";
import { Card } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const SearchCard = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [vendorData, setVendorData] = useState([]);
  const [certificationData, setCertificationData] = useState([]);

  const fetchData = async () => {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const storedExamData = localStorage.getItem("searchData");
        if (storedExamData) {
          setSearchData(JSON.parse(storedExamData));
        } else {
          const examResponse = await axios.get(
            `https://dumpsarena.com/exam-search`
          );
          setSearchData(examResponse.data);
          localStorage.setItem("searchData", JSON.stringify(examResponse.data));
        }

        const storedVendorData = localStorage.getItem("vendorData");
        if (storedVendorData) {
          setVendorData(JSON.parse(storedVendorData));
        } else {
          const vendorResponse = await axios.get(
            `https://dumpsarena.com/vendor-search`
          );
          setVendorData(vendorResponse.data);
          localStorage.setItem(
            "vendorData",
            JSON.stringify(vendorResponse.data)
          );
        }

        const storedCertificationData =
          localStorage.getItem("certificationData");
        if (storedCertificationData) {
          setCertificationData(JSON.parse(storedCertificationData));
        } else {
          const certificationResponse = await axios.get(
            `https://dumpsarena.com/certification-search`
          );
          setCertificationData(certificationResponse.data);
          localStorage.setItem(
            "certificationData",
            JSON.stringify(certificationResponse.data)
          );
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const filteredData = searchData
    .filter((item) =>
      item.code.toLowerCase().startsWith(searchValue.toLowerCase())
    )
    .slice(0, 30);

  const filteredVendors = vendorData
    .filter((item) =>
      item.slug.toLowerCase().startsWith(searchValue.toLowerCase())
    )
    .slice(0, 10);

  const filteredCertifications = certificationData
    .filter((item) =>
      item.slug.toLowerCase().startsWith(searchValue.toLowerCase())
    )
    .slice(0, 10);

  return (
    <div style={{ position: "relative", marginBottom: 4 }}>
      <input
        type="text"
        style={{
          padding: "10px",
          borderRadius: "5px",
          color: "black",
          width: "100%",
          outline: "none",
          paddingLeft: "30px",
        }}
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => {
          const { value } = e.target;
          handleSearch(value);
        }}
      />
      <svg
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          fill: "#1F2937",
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
      >
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        <path fill="none" d="M0 0h24v24H0z" />
      </svg>
      {searchValue && (
        <>
          <ul
            style={{
              backgroundColor: "white",
              color: "gray",
              padding: "0",
              margin: "0",
              listStyle: "none",
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              borderRadius: "0px",
              zIndex: 1000,
            }}
          >
            <Card
              sx={{ maxHeight: "500px", overflowY: "auto", padding: "10px" }}
            >
              <li
                style={{
                  padding: "10px",
                  border: "1px solid gray",
                  textAlign: "center",
                }}
              >
                See all search for "{searchValue}"
              </li>
              <li
                className="bg-gray-700 text-white font-bold text-xl text-center"
                style={{
                  padding: "10px",
                  borderTop: "1px solid gray",
                  borderLeft: "1px solid gray",
                  borderRight: "1px solid gray",
                  borderBottom: "1px solid gray",
                }}
              >
                Exams - {filteredData.length}
              </li>
              {filteredData.map((item, index) => (
                <Link
                  key={item.code}
                  href={`/exam/${item.code}`}
                  style={{ cursor: "pointer" }}
                >
                  <li
                    style={{
                      padding: "10px",
                      borderTop: "1px solid gray",
                      borderLeft: "1px solid gray",
                      borderRight: "1px solid gray",
                      borderBottom: "1px solid gray",
                    }}
                    className="hover:bg-gray-200"
                  >
                    <div className="text-gray-700 font-bold">{item.code}</div>
                    <div>{item.name}</div>
                  </li>
                </Link>
              ))}
              <li
                className="bg-gray-700 text-white font-bold text-xl text-center"
                style={{
                  padding: "10px",
                  borderTop: "1px solid gray",
                  borderLeft: "1px solid gray",
                  borderRight: "1px solid gray",
                  borderBottom: "1px solid gray",
                }}
              >
                Vendors - {filteredVendors.length}
              </li>
              {filteredVendors.map((item, index) => (
                <Link
                  key={item.id}
                  href={`/vendor/${item.slug}`}
                  style={{ cursor: "pointer" }}
                >
                  <li
                    style={{
                      padding: "10px",
                      borderTop: "1px solid gray",
                      borderLeft: "1px solid gray",
                      borderRight: "1px solid gray",
                      borderBottom: "1px solid gray",
                    }}
                    className="hover:bg-gray-200"
                  >
                    <div className="text-gray-700 font-bold">{item.slug}</div>
                    <div>{item.name}</div>
                  </li>
                </Link>
              ))}
              <li
                className="bg-gray-700 text-white font-bold text-xl text-center"
                style={{
                  padding: "10px",
                  borderTop: "1px solid gray",
                  borderLeft: "1px solid gray",
                  borderRight: "1px solid gray",
                  borderBottom: "1px solid gray",
                }}
              >
                Certifications - {filteredCertifications.length}
              </li>
              {filteredCertifications.map((item, index) => (
                <Link
                  key={item.id}
                  href={`/vendor/${item.vendor}`}
                  style={{ cursor: "pointer" }}
                >
                  <li
                    style={{
                      padding: "10px",
                      borderTop: "1px solid gray",
                      borderLeft: "1px solid gray",
                      borderRight: "1px solid gray",
                      borderBottom: "1px solid gray",
                    }}
                    className="hover:bg-gray-200"
                  >
                    <div className="text-gray-700 font-bold">{item.slug}</div>
                    <div>{item.name}</div>
                  </li>
                </Link>
              ))}
            </Card>
          </ul>
        </>
      )}
    </div>
  );
};

export default SearchCard;
