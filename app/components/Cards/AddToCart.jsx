/* eslint-disable @next/next/no-img-element */
import { IconButton } from "@mui/material";
import React from "react";

const AddToCart = () => {
  return (
    <section class=" bg-gray-100 font-poppins dark:bg-gray-800">
      <div class="px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
        <div>
          <h2 class="mb-8 text-4xl font-bold dark:text-white">Your Cart</h2>
          <div class="p-6 mb-8 border bg-gray-50 dark:bg-gray-800 dark:border-gray-800">
            <div class="flex-wrap items-center hidden mb-6 -mx-4 md:flex md:mb-8">
              <div class="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                <h2 class="font-bold text-gray-500 dark:text-white">
                  Product name
                </h2>
              </div>
              <div class="hidden px-4 lg:block lg:w-2/12">
                <h2 class="font-bold text-gray-500 dark:text-white">Price</h2>
              </div>

              <div class="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                <h2 class="font-bold text-gray-500 dark:text-white">
                  Subtotal
                </h2>
              </div>
            </div>
            <div class="py-4 mb-8 border-t border-b border-gray-200 dark:border-gray-700">
              <div class="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                <div class="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                  <div class="flex flex-wrap items-center -mx-4">
                    {/* <div class="w-full px-4 mb-3 md:w-1/3">
                      <div class="w-full h-96 md:h-24 md:w-24">
                        <img
                          src="https://i.postimg.cc/kGjz3dpD/pexels-cottonbro-3296434.jpg"
                          alt=""
                          class="object-cover w-full h-full"
                        />
                      </div>
                    </div> */}
                    <div class="w-2/3 px-4">
                      <h2 class="mb-2 text-xl font-bold dark:text-white">
                        Microsoft
                      </h2>
                      <p class="text-gray-500 dark:text-white ">PDF Only</p>
                    </div>
                  </div>
                </div>
                <div class="hidden px-4 lg:block lg:w-2/12">
                  <p class="text-lg font-bold text-blue-500 dark:text-white">
                    $100.00
                  </p>
                  <span class="text-xs text-gray-500 line-through dark:text-white">
                    $1500
                  </span>
                </div>
                <div class="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                  <p class="text-lg font-bold text-blue-500 dark:text-white">
                    $100.00
                  </p>
                </div>
                <div class="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                  <p class="text-lg font-bold text-blue-500 dark:text-white">
                    <IconButton className="hover:bg-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 15 15"
                      >
                        <path
                          fill="RED"
                          d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"
                        />
                      </svg>
                    </IconButton>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap justify-between">
            <div class="w-full px-4 mb-4 lg:w-1/2 ">
              <div class="flex flex-wrap items-center gap-4">
                {/* <span class="text-gray-700 dark:text-white">Apply Coupon</span> */}
                <input
                  type="text"
                  class="w-full px-8 py-4 font-normal placeholder-gray-400 border lg:flex-1 dark:border-gray-700 dark:placeholder-gray-500 dark:text-white dark:bg-gray-800"
                  placeholder="Enter your Discount Cuppon"
                  required
                />
                <button class="inline-block w-full px-8 py-4 font-bold text-center text-gray-100 bg-blue-500 rounded-md lg:w-32 hover:bg-blue-600">
                  Apply
                </button>
              </div>
            </div>
            <div class="w-full px-4 mb-4 lg:w-1/2 ">
              <div class="p-6 border border-blue-100 dark:bg-gray-900 dark:border-gray-900 bg-gray-50 md:p-8">
                <h2 class="mb-8 text-3xl font-bold text-gray-700 dark:text-white">
                  Order Summary
                </h2>
                <div class="flex items-center justify-between pb-4 mb-4 border-b border-gray-300 dark:border-gray-700 ">
                  <span class="text-gray-700 dark:text-white">Subtotal</span>
                  <span class="text-xl font-bold text-gray-700 dark:text-white ">
                    $100
                  </span>
                </div>
                <div class="flex items-center justify-between pb-4 mb-4 ">
                  <span class="text-gray-700 dark:text-white ">Discount</span>
                  <span class="text-xl font-bold text-gray-700 dark:text-white ">
                    $0.1
                  </span>
                </div>
                <div class="flex items-center justify-between pb-4 mb-4 ">
                  <span class="text-gray-700 dark:text-white">Order Total</span>
                  <span class="text-xl font-bold text-gray-700 dark:text-white">
                    $99.00
                  </span>
                </div>
                <h2 class="text-lg text-gray-500 dark:text-white">We offer:</h2>
                <div class="flex items-center gap-2 mb-4 ">
                  <a href="#">
                    <img
                      src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png"
                      alt=""
                      class="object-cover h-16 w-26"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png"
                      alt=""
                      class="object-cover h-16 w-26"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png"
                      alt=""
                      class="object-cover h-16 w-26"
                    />
                  </a>
                </div>
                <div class="flex items-center justify-between ">
                  <button class="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-blue-500 rounded-md hover:bg-blue-600">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddToCart;
