import { baseURL } from "@/app/baseUrl";
import SingleVendorExamTable from "./SingleVendorsExmas";

const SingleVendorsExmas = ({ data }) => {
  return <SingleVendorExamTable data={data} />;
};

export async function getServerSideProps(context) {
  const { params } = context;

  try {
    const response = await fetch(
      `${baseURL}/v1/vendors/${params.vendor_perma}`,
      {
        headers: {
          "x-api-key": "ed79766c-2cc1-4967-8d3c-035387603caf",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: { error: error.message },
    };
  }
}

export default SingleVendorsExmas;
