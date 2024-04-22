import { X_API_Key } from "../../AllUrls/ApiKey";
import { BaseUrl } from "../../AllUrls/BaseUrl";
import AllVendorsTable from "./AllVendorsTable";

const AllVendors = async ({ referral }) => {
  const response = await fetch(`${BaseUrl}/v1/vendors`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return <AllVendorsTable data={data} referral={referral} />;
};

export default AllVendors;
