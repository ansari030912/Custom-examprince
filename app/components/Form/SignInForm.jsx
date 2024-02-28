"use client";

import { Alert, Snackbar, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SignInForm = () => {
  const [isLogin, setIsLogin] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [ip, setIp] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [expiredTimer, setExpiredTimer] = useState(null);

  const router = useRouter();

  const fetchIP = async () => {
    try {
      const response = await axios.get("https://api.dumpsboss.com/v1/my-ip", {
        headers: {
          "x-api-key": "ed79766c-2cc1-4967-8d3c-035387603caf",
        },
      });
      setIp(response.data);
    } catch (error) {
      console.error("Error fetching IP:", error);
    }
  };

  useEffect(() => {
    fetchIP();
  }, []);

  // const handleTokenExpired = () => {
  //   alert("Token expired Please Sign In again");
  //   localStorage.removeItem("loginResponse");
  //   router.push("/sign-in"); // Refresh the page
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required");
    }

    if (!password) {
      setPasswordError("Password is required");
    }

    if (emailError || passwordError) {
      return;
    }

    try {
      const response = await axios.post(
        "https://api.dumpsboss.com/v1/account/login",
        {
          email,
          password,
          ip,
        },
        {
          headers: {
            "x-api-key": "ed79766c-2cc1-4967-8d3c-035387603caf",
          },
        }
      );

      console.log(response.data);
      setIsLogin(response.data);
      setOpenSnackbar(true);

      if (response.data.is_logged_in) {
        const expiryTime = Date.now() + 20000;
        localStorage.setItem(
          "loginResponse",
          JSON.stringify({ ...response.data, expiryTime })
        );
        router.push("/");
      } else {
        router.push("/sign-in");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };
  return (
    <>
      {!isLogin?.is_logged_in === true ? (
        <form onSubmit={handleSubmit} className="lg:mt-12">
          <div className="flex ">
            <div className="flex flex-row w-full">
              <div className="flex flex-1 justify-center px-4 relative">
                <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
                  <div className="flex flex-col space-y-2 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">
                      Sign in account
                    </h2>
                    <p className="text-md md:text-xl">
                      Sign up or log in your account and get access to exams
                      Dumps
                    </p>
                  </div>
                  <div className="flex flex-col max-w-md space-y-5">
                    <input
                      type="email"
                      placeholder="Email"
                      className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value), setEmailError("");
                      }}
                    />
                    {emailError && (
                      <span style={{ color: "red" }} className="text-sm">
                        {emailError}
                      </span>
                    )}
                    <input
                      type="password"
                      placeholder="Password"
                      className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value), setPasswordError("");
                      }}
                    />
                    {passwordError && (
                      <span style={{ color: "red" }} className="text-sm -my-10">
                        {passwordError}
                      </span>
                    )}
                    <Link
                      href={"/reset-password"}
                      className="text-blue-500 text-right underline font-bold"
                    >
                      <Typography>Fogot Password?</Typography>
                    </Link>
                    <button
                      type="submit"
                      className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
                    >
                      Sign In
                    </button>
                    <div className="flex justify-center items-center">
                      <span className="w-full border border-black"></span>
                      <span className="px-4">Or</span>
                      <span className="w-full border border-black"></span>
                    </div>
                    <Link
                      href={"/sign-up"}
                      className="flex items-center hover:bg-white justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative"
                    >
                      <button>
                        <span>Create your new account</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      ) : null}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={isLogin?.is_logged_in ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {isLogin && isLogin?.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SignInForm;
