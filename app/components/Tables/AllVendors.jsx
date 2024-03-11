import AllVendorsTable from "./AllVendorsTable";

const AllVendors = async ({referral}) => {
  const response = await fetch(`${process.env.baseURL}/v1/vendors`, {
    headers: {
      "x-api-key": "ed79766c-2cc1-4967-8d3c-035387603caf",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return <AllVendorsTable data={data} referral={referral} />;
};

export default AllVendors;
