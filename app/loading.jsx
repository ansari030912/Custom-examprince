/* eslint-disable @next/next/no-img-element */
import React from "react";

const Loading = () => {
  return (
    <div className="loader-container flex justify-center h-full w-full">
      <div className="loader">
        <img
          src="/loading.gif"
          style={{ width: "100vw", height: "auto" }}
          alt="Loading..."
        />
      </div>
    </div>
  );
};

export default Loading;
