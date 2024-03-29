import AllVendorSlider from "./AllVendorSlider";

const CardSliderVendor = async () => {
  const response = await fetch(`${process.env.baseURL}/v1/vendors`, {
    headers: {
      "x-api-key": "ed79766c-2cc1-4967-8d3c-035387603caf",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return <AllVendorSlider data={data} />;
};

export default CardSliderVendor;
