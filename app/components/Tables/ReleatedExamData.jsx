import AllReleatedExam from "./AllReleatedExam";

const ReleatedExamData = async ({ examData }) => {
  const response = await fetch(
    `${process.env.baseURL}/v1/related_exams/${examData?.exam_vendor_perma}`,
    {
      headers: {
        "x-api-key": "ed79766c-2cc1-4967-8d3c-035387603caf",
      },
    }
  );

  const data = await response.json();

  return <AllReleatedExam data={data} />;
};

export default ReleatedExamData;
