import AllVideoCoursesTable from "./AllVideoCoursesTable";

const AllVideoCourses = async ({ referral }) => {
  const response = await fetch(`${process.env.baseURL}/v1/training-courses`, {
    headers: {
      "x-api-key": "ed79766c-2cc1-4967-8d3c-035387603caf",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return <AllVideoCoursesTable data={data} referral={referral} />;
};

export default AllVideoCourses;
