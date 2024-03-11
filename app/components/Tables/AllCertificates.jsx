import AllCertificatesTable from "./AllCertificatesTable";

const AllCertificates = async ({ referral }) => {
  const response = await fetch(`${process.env.baseURL}/v1/certifications`, {
    headers: {
      "x-api-key": "ed79766c-2cc1-4967-8d3c-035387603caf",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return <AllCertificatesTable data={data} referral={referral} />;
};

export default AllCertificates;
