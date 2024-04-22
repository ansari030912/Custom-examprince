import { X_API_Key } from "../../AllUrls/ApiKey";
import { BaseUrl } from "../../AllUrls/BaseUrl";
import AllReleatedExam from "./AllReleatedExam";

const ReleatedExamData = async ({ examData }) => {
  const response = await fetch(
    `${BaseUrl}/v1/related_exams/${examData?.exam_vendor_perma}`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );

  const data = await response.json();

  return <AllReleatedExam data={data} />;
};

export default ReleatedExamData;
