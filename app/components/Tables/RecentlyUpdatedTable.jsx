import { X_API_Key } from "../../AllUrls/ApiKey";
import { BaseUrl } from "../../AllUrls/BaseUrl";
import TableContentRecentlyUpdated from "./TableContentRecentlyUpdated";

const RecentlyUpdatedTable = async () => {
  const response = await fetch(`${BaseUrl}/v1/recently-updated`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();

  return <TableContentRecentlyUpdated data={data} />;
};

export default RecentlyUpdatedTable;
