export default async function sitemap() {
  const response = await fetch("https://certsgang.com/v1/sitemap/vendors", {
    headers: {
      "x-api-key": "ed79766c-2cc1-4967-8d3c-035387603caf",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  console.log("🚀 ~ sitemap ~ data:", data);

  return data.map((item) => ({
    url: `https://examprince.com/exam-provider/${item.vendor_perma}`,
    lastModified: "2024-04-17",
    priority: 0.6,
  }));
}
