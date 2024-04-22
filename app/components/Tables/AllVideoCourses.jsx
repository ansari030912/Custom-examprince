import { X_API_Key } from "../../AllUrls/ApiKey";
import { BaseUrl } from "../../AllUrls/BaseUrl";
import AllVideoCoursesTable from "./AllVideoCoursesTable";

const AllVideoCourses = async ({ referral }) => {
  const response = await fetch(`${BaseUrl}/v1/training-courses`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return <AllVideoCoursesTable data={data} referral={referral} />;
};

export default AllVideoCourses;
