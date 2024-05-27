import { X_API_Key } from "../../AllUrls/ApiKey";
import { BaseUrl } from "../../AllUrls/BaseUrl";
import TableHotExams from "./TableHotExams";

const HotExamsData = async () => {
  const response = await fetch(`${BaseUrl}/v1/hot_exams`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const data = await response.json();

  return <TableHotExams data={data} />;
};

export default HotExamsData;
 