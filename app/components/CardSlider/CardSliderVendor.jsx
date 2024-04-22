import { X_API_Key } from "../../AllUrls/ApiKey";
import { BaseUrl } from "../../AllUrls/BaseUrl";
import AllVendorSlider from "./AllVendorSlider";

const CardSliderVendor = async () => {
  const response = await fetch(`${BaseUrl}/v1/vendors`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return <AllVendorSlider data={data} />;
};

export default CardSliderVendor;
