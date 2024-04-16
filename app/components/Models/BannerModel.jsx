/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

const BannerModel = () => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <span
            style={{ fontSize: "30px" }}
            className="absolute top-0 right-0 m-4 cursor-pointer text-white hover:text-gray-300"
            onClick={handleCloseModal}
          >
            &times;
          </span>
          <div className="relative w-100vw h-100vh md:max-w-3xl md:max-h-3xl rounded-lg shadow-lg overflow-hidden bg-white">
            <img
              src="/examprince-discount-banner.png"
              alt="Discount Banner"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BannerModel;
