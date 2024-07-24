"use client";
import axios from "axios";
import { useState } from "react";
import { X_API_Key } from "../../AllUrls/ApiKey";
import { BaseUrl } from "../../AllUrls/BaseUrl";

const CustomInvoice = ({ params }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${BaseUrl}/v1/invoice/${params.invoice_perma}`,
        {
          headers: {
            "x-api-key": X_API_Key,
          },
        }
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching the invoice data:", error);
      setError("Error fetching the invoice data: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Fetch Data"}
      </button>
      {error && <div>{error}</div>}
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

export default CustomInvoice;
