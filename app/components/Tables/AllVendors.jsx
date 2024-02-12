import React from "react";
import AllVendorsTable from "./AllVendorsTable";
import { baseURL } from "@/app/baseUrl";

const AllVendors = async () => {
  const response = await fetch(`${baseURL}/v1/vendors`, {
    headers: {
      "x-api-key": "ed79766c-2cc1-4967-8d3c-035387603caf",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return <AllVendorsTable data={data} />;
};

export default AllVendors;
