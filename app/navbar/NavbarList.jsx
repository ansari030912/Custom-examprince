/* eslint-disable @next/next/no-img-element */
"use client";
import { Icon } from "@iconify/react";
import { Container } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavbarList = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [profileToggles, setProfileToggles] = useState(false);
  const [loginResponse, setLoginResponse] = useState(null);
  const [cartResponce, setCartResponce] = useState(null);

  const handleSignOut = () => {
    localStorage.removeItem("loginResponse");
    window.location.reload();
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
    if (typeof localStorage !== "undefined") {
      const storedLoginResponse = localStorage.getItem("CartProducts");
      if (storedLoginResponse) {
        setCartResponce(JSON.parse(storedLoginResponse));
      }
    }
  }, []);
  return (
    <nav
      style={{ zIndex: 1 }}
      className="text-white border-b shadow-2xl shadow-gray-400 py-2 bg-gradient-to-l from-gray-800 via-blue-400 to-gray-800"
    >
      <Container maxWidth="lg">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
          <div className="relative flex h-12 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gradient-to-l hover:from-blue-400  hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                {toggleMenu === false ? (
                  <svg
                    className="block h-6 w-6"
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
            <div className="flex flex-1 items-center  ms-11 lg:-m-5 justify-start  lg:items-stretch lg:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/">
                  <img
                    height={"120px"}
                    width={"120px"}
                    src="/examprince.png"
                    alt="dumpsarena"
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 lg:block">
                <div className="flex space-x-2">
                  <div>
                    <Link
                      href="/"
                      className="text-white hover:bg-gradient-to-r hover:from-blue-400  hover:to-gray-800 rounded-md px-3 py-2 text-sm font-medium flex"
                    >
                      <Icon
                        icon="ic:twotone-home"
                        width="1.3rem"
                        height="1.3rem"
                        color="white"
                        style={{ marginRight: "4px", paddingBottom: "2px" }}
                      />
                      Home
                    </Link>
                  </div>
                  <Link
                    href="/exam-providers"
                    className="text-white hover:bg-gradient-to-r hover:from-blue-400  hover:to-gray-800 rounded-md px-3 py-2 text-sm font-medium flex"
                  >
                    <Icon
                      icon="icon-park-twotone:necktie"
                      width="1.2rem"
                      height="1.2rem"
                    />
                    Vendors
                  </Link>
                  <Link
                    href="/certifications"
                    className="text-white hover:bg-gradient-to-l hover:from-blue-400  hover:to-gray-800  rounded-md px-3 py-2 text-sm font-medium flex"
                  >
                    <Icon
                      icon="game-icons:tied-scroll"
                      width="1.2rem"
                      height="1.2rem"
                      style={{ marginRight: "4px" }}
                    />
                    Certifications
                  </Link>
                  <Link
                    href="/video-courses"
                    className="text-white hover:bg-gradient-to-l hover:from-blue-400  hover:to-gray-800 rounded-md px-3 py-2 text-sm font-medium flex"
                  >
                    <Icon
                      icon="icon-park-solid:video-two"
                      width="1.2rem"
                      height="1.2rem"
                      style={{ marginRight: "4px" }}
                    />
                    Video Cources
                  </Link>
                  <Link
                    href="/unlimited-access"
                    className="text-white hover:bg-gradient-to-l hover:from-blue-400  hover:to-gray-800 rounded-md px-3 py-2 text-sm font-medium flex"
                  >
                    <Icon
                      icon="game-icons:over-infinity"
                      width="1.2rem"
                      height="1.2rem"
                      style={{ marginRight: "4px" }}
                    />
                    Unlimited Access
                  </Link>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full text-white  p-2 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mr-2"
              >
                <span className="sr-only">Add to Cart</span>
                <Link href="/check-out">
                  <div className="flex space-x-1">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.3rem"
                        height="1.4rem"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M0 1h4.764l.545 2h18.078l-3.666 11H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0zm7.764 11h10.515l2.334-7H5.855zM4 21a2 2 0 1 1 4 0a2 2 0 0 1-4 0m14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-white ">
                        {!cartResponce ? "" : "1"}
                      </span>
                    </div>
                  </div>
                </Link>
              </button>

              {!loginResponse?.is_logged_in ? (
                <Link
                  href={"/sign-in"}
                  className="text-white hover:bg-gradient-to-t from-blue-400 to-gray-900 px-1 lg:py-1 text-xs  lg:text-lg font-medium rounded-md"
                >
                  <button>Login / SignUp</button>
                </Link>
              ) : (
                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2  hover:bg-gray-400 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      onClick={() => setProfileToggles(!profileToggles)}
                      aria-haspopup="true"
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>

                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://surevested.ilife.tech/assets/images/no-user.png"
                        alt=""
                      />
                    </button>
                  </div>
                  {profileToggles === true ? (
                    <div
                      className="absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabindex="-1"
                    >
                      <div className="p-2">
                        <div className="text-gray-600 flex">
                          <Icon
                            icon="noto:person"
                            width="1.2em"
                            height="1.4em"
                            style={{ marginRight: "4px" }}
                          />
                          <b>{loginResponse?.name}</b>
                        </div>
                        <div className="text-gray-700 text-sm flex">
                          <Icon
                            icon="solar:letter-bold"
                            width="1.4em"
                            height="1.4em"
                            style={{ color: "gray", marginRight: "2px" }}
                          />
                          <b>{loginResponse?.email}</b>
                        </div>
                        <hr />
                      </div>
                      <Link
                        href="/products"
                        className="px-4 py-2 text-sm text-gray-700 flex hover:bg-gray-100"
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
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
                        href="download-history"
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
                        href="login-history"
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
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
              )}
            </div>
          </div>
        </div>
        {toggleMenu ? (
          <div className="lg:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href="/"
                className="text-white hover:bg-gradient-to-l hover:from-blue-400  hover:to-gray-800 rounded-md px-3 py-2 text-base font-medium flex"
              >
                <Icon icon="ic:twotone-home" width="1.3rem" height="1.4rem" />
                Home
              </Link>
              <Link
                href="/exam-providers"
                className="text-white hover:bg-gradient-to-l hover:from-blue-400  hover:to-gray-800 rounded-md px-3 py-2 text-base font-medium flex"
              >
                <Icon
                  icon="icon-park-twotone:necktie"
                  width="1.2rem"
                  height="1.5rem"
                  style={{ marginRight: "2px" }}
                />
                Vendors
              </Link>
              <Link
                href="/certificates"
                className="text-white hover:bg-gradient-to-l hover:from-blue-400  hover:to-gray-800 rounded-md px-3 py-2 text-base font-medium flex"
              >
                <Icon
                  icon="game-icons:tied-scroll"
                  width="1.2rem"
                  height="1.2rem"
                  style={{ marginRight: "4px" }}
                />
                Certifications
              </Link>
              <Link
                href="/video-courses"
                className="text-white hover:bg-gradient-to-l hover:from-blue-400  hover:to-gray-800 rounded-md px-3 py-2 text-base font-medium flex"
              >
                <Icon
                  icon="icon-park-solid:video-two"
                  width="1.2rem"
                  height="1.2rem"
                  style={{ marginRight: "4px" }}
                />
                Video Cources
              </Link>
              <Link
                href="/unlimited-access"
                className="text-white hover:bg-gradient-to-l hover:from-blue-400  hover:to-gray-800 rounded-md px-3 py-2 text-base font-medium flex"
              >
                <Icon
                  icon="game-icons:over-infinity"
                  width="1.2rem"
                  height="1.2rem"
                  style={{ marginRight: "4px" }}
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
