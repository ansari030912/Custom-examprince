/* eslint-disable @next/next/no-img-element */
"use client";
import { Icon } from "@iconify/react";
import { Card, Container } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavbarList = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [profileToggles, setProfileToggles] = useState(false);
  const [loginResponse, setLoginResponse] = useState(null);

  const handleSignOut = () => {
    localStorage.removeItem("loginResponse");
    window.location.reload(); // Refresh the page
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.dumpsboss.com/v1/coupons",
          {
            headers: {
              "x-api-key": "ed79766c-2cc1-4967-8d3c-035387603caf",
            },
          }
        );
        localStorage.setItem("coupons", JSON.stringify(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const storedLoginResponse = localStorage.getItem("loginResponse");
      if (storedLoginResponse) {
        setLoginResponse(JSON.parse(storedLoginResponse));
      }
    }
  }, []);
  return (
    <nav class="text-white bg-gradient-to-t from-blue-400 to-gray-900">
      <Container maxWidth="lg">
        <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
          <div class="relative flex h-12 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center lg:hidden">
              <button
                type="button"
                class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gradient-to-b hover:from-gray-800 hover:text-white hover:to-blue-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                {toggleMenu === false ? (
                  <svg
                    class="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div class="flex flex-1 items-center  ms-11 lg:-m-5 justify-start  lg:items-stretch lg:justify-start">
              <div class="flex flex-shrink-0 items-center">
                <Link href="/">
                  <img
                    class="h-3 lg:h-4 w-auto"
                    src="/dumpsarena_white.svg"
                    alt="Your Company"
                  />
                </Link>
              </div>
              <div class="hidden sm:ml-6 lg:block">
                <div class="flex space-x-2">
                  <div>
                    <Link
                      href="/"
                      class="text-white hover:bg-gradient-to-b hover:from-gray-800 hover:to-blue-300 hover:text-gray-200 rounded-md px-3 py-2 text-sm font-medium flex"
                    >
                      <Icon
                        icon="ic:twotone-home"
                        width="1.2rem"
                        height="1.2rem"
                        color="white"
                      />
                      Home
                    </Link>
                  </div>
                  <Link
                    href="/all-vendors"
                    class="text-white hover:bg-gradient-to-b hover:from-gray-800 hover:text-white hover:to-blue-300 rounded-md px-3 py-2 text-sm font-medium flex"
                  >
                    <Icon
                      icon="icon-park-twotone:necktie"
                      width="1.2rem"
                      height="1.2rem"
                    />
                    Vendors
                  </Link>
                  <Link
                    href="/all-certificates"
                    class="text-white hover:bg-gradient-to-b hover:from-gray-800 hover:text-white hover:to-blue-300 rounded-md px-3 py-2 text-sm font-medium flex"
                  >
                    <Icon
                      icon="game-icons:tied-scroll"
                      width="1.2rem"
                      height="1.2rem"
                    />
                    Certifications
                  </Link>
                  <Link
                    href="/video-courses"
                    class="text-white hover:bg-gradient-to-b hover:from-gray-800 hover:text-white hover:to-blue-300 rounded-md px-3 py-2 text-sm font-medium flex"
                  >
                    <Icon
                      icon="icon-park-solid:video-two"
                      width="1.2rem"
                      height="1.2rem"
                    />
                    Video Cources
                  </Link>
                  <Link
                    href="/unlimited-access"
                    class="text-white hover:bg-gradient-to-b hover:from-gray-800 hover:text-white hover:to-blue-300 rounded-md px-3 py-2 text-sm font-medium flex"
                  >
                    <Icon
                      icon="game-icons:over-infinity"
                      width="1.2rem"
                      height="1.2rem"
                    />
                    Unlimited Access
                  </Link>
                </div>
              </div>
            </div>

            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                class="relative rounded-full text-white hover:bg-gradient-to-t hover:from-gray-800 hover:to-blue-400 p-2 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mr-2"
              >
                <Card class="bg-white">
                  {/* <span class="absolute pl-3 text-white">0</span> */}
                </Card>
                <span class="sr-only">Add to Cart</span>
                <Link href="/check-out">
                  <div className="flex space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.1rem"
                      height="1.1rem"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M0 1h4.764l.545 2h18.078l-3.666 11H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0zm7.764 11h10.515l2.334-7H5.855zM4 21a2 2 0 1 1 4 0a2 2 0 0 1-4 0m14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"
                      />
                    </svg>
                  </div>
                </Link>
              </button>

              {loginResponse?.is_active ? (
                <div class="relative ml-3">
                  <div>
                    <button
                      type="button"
                      class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2  hover:bg-gray-400 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      onClick={() => setProfileToggles(!profileToggles)}
                      aria-haspopup="true"
                    >
                      <span class="absolute -inset-1.5"></span>
                      <span class="sr-only">Open user menu</span>

                      <img
                        class="h-8 w-8 rounded-full"
                        src="https://surevested.ilife.tech/assets/images/no-user.png"
                        alt=""
                      />
                    </button>
                  </div>
                  {profileToggles === true ? (
                    <div
                      class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabindex="-1"
                    >
                      <div className="p-2">
                        <div className="text-gray-600">
                          <b>{loginResponse?.name}</b>
                        </div>
                        <div className="text-gray-700 text-sm">
                          <b>{loginResponse?.email}</b>
                        </div>
                        <hr />
                      </div>
                      <Link
                        href="/products"
                        class="px-4 py-2 text-sm text-gray-700 flex hover:bg-gray-100"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-0"
                      >
                        <Icon
                          icon="eos-icons:product-classes-outlined"
                          width="1.3em"
                          height="1.4em"
                          style={{ color: "black", marginRight: "4px" }}
                        />
                        Products
                      </Link>

                      <Link
                        href="/setting"
                        class="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-1"
                      >
                        <Icon
                          icon="lets-icons:setting-line"
                          width="1.3em"
                          height="1.4em"
                          style={{ color: "black", marginRight: "4px" }}
                        />
                        Settings
                      </Link>
                      <Link
                        href="/invoices"
                        class="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-1"
                      >
                        <Icon
                          icon="mdi:invoice-text-edit-outline"
                          width="1.3em"
                          height="1.4em"
                          style={{ color: "black", marginRight: "4px" }}
                        />
                        Invoices
                      </Link>
                      <Link
                        href="#"
                        class="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-1"
                      >
                        <Icon
                          icon="mdi:download-multiple-outline"
                          width="1.3em"
                          height="1.4em"
                          style={{ color: "black", marginRight: "4px" }}
                        />
                        Download History
                      </Link>
                      <Link
                        href="#"
                        class="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-1"
                      >
                        <Icon
                          icon="mdi:clipboard-text-history-outline"
                          width="1.3em"
                          height="1.4em"
                          style={{ color: "black", marginRight: "4px" }}
                        />
                        Login History
                      </Link>
                      <hr />
                      <div
                        onClick={handleSignOut}
                        class="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-1"
                      >
                        <Icon
                          icon="ri:logout-box-line"
                          width="1.3em"
                          height="1.4em"
                          style={{ color: "black", marginRight: "4px" }}
                        />
                        Sign out
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                <Link
                  href={"/sign-in"}
                  className="text-white hover:bg-gradient-to-t from-blue-400 to-gray-900 px-1 lg:py-1 text-xs  lg:text-lg font-medium rounded-md"
                >
                  <button>Login / SignUp</button>
                </Link>
              )}
            </div>
          </div>
        </div>
        {toggleMenu ? (
          <div class="lg:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2">
              <Link
                href="/"
                class="text-white hover:bg-gradient-to-b hover:from-gray-800 hover:text-white hover:to-blue-300 rounded-md px-3 py-2 text-base font-medium flex"
              >
                <Icon icon="ic:twotone-home" width="1.2rem" height="1.2rem" />
                Home
              </Link>
              <Link
                href="/all-vendors"
                class="text-white hover:bg-gradient-to-b hover:from-gray-800 hover:text-white hover:to-blue-300 rounded-md px-3 py-2 text-base font-medium flex"
              >
                <Icon
                  icon="icon-park-twotone:necktie"
                  width="1.2rem"
                  height="1.2rem"
                />
                Vendors
              </Link>
              <Link
                href="/all-certificates"
                class="text-white hover:bg-gradient-to-b hover:from-gray-800 hover:text-white hover:to-blue-300 rounded-md px-3 py-2 text-base font-medium flex"
              >
                <Icon
                  icon="game-icons:tied-scroll"
                  width="1.2rem"
                  height="1.2rem"
                />
                Certifications
              </Link>
              <Link
                href="/video-courses"
                class="text-white hover:bg-gradient-to-b hover:from-gray-800 hover:text-white hover:to-blue-300 rounded-md px-3 py-2 text-base font-medium flex"
              >
                <Icon
                  icon="icon-park-solid:video-two"
                  width="1.2rem"
                  height="1.2rem"
                />
                Video Cources
              </Link>
              <Link
                href="/unlimited-access"
                class="text-white hover:bg-gradient-to-b hover:from-gray-800 hover:text-white hover:to-blue-300 rounded-md px-3 py-2 text-base font-medium flex"
              >
                <Icon
                  icon="game-icons:over-infinity"
                  width="1.2rem"
                  height="1.2rem"
                />
                Unlimited Access
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </Container>
    </nav>
  );
};

export default NavbarList;
