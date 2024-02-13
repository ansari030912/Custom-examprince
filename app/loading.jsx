/* eslint-disable @next/next/no-img-element */
import React from "react";

const Loading = () => {
  return (
    <div className="loader-container flex justify-center">
      <div className="loader ">
        <img
          src="https://usagif.com/wp-content/uploads/loading-31.gif"
          style={{ height: "100%", width: "100%" }}
          alt="Loading..."
        />
      </div>
    </div>
  );
};

export default Loading;
