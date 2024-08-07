"use client";
import { Icon } from "@iconify/react";
import { Snackbar, SnackbarContent } from "@mui/material";
import React, { useEffect, useState } from "react";

const VideoExamAddToCart = ({ data }) => {
  const [addCart, setAddCart] = useState({
    cart: "",
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    setAddCart({
      cart: data.cart,
    });
  }, [data]);

  const handleBoxClick = () => {
    const cartData = {
      cart: addCart.cart,
      saveExam: true,
    };
    localStorage.removeItem("CartProducts");
    localStorage.setItem("CartProducts", JSON.stringify(cartData));
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <SnackbarContent
          sx={{
            backgroundColor: "green",
          }}
          message={
            <span style={{ display: "flex", alignItems: "center" }}>
              <Icon
                icon="mdi:cart-outline"
                width="1.6em"
                height="1.4em"
                style={{ color: "white", marginRight: "2px" }}
              />
              Product added to cart!
            </span>
          }
        />
      </Snackbar>
      <button
        onClick={handleBoxClick}
        className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add to cart
      </button>
    </>
  );
};

export default VideoExamAddToCart;
