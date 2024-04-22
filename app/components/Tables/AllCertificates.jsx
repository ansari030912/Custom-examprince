import { X_API_Key } from "../../AllUrls/ApiKey";
import { BaseUrl } from "../../AllUrls/BaseUrl";
import AllCertificatesTable from "./AllCertificatesTable";

const AllCertificates = async ({ referral }) => {
  const response = await fetch(`${BaseUrl}/v1/certifications`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return <AllCertificatesTable data={data} referral={referral} />;
};

export default AllCertificates;
