"use client";

import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const ForgotPasswordForm = () => {
  const [passwordRest, setPasswordRest] = useState({});
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [ip, setIp] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError("");

    if (!email) {
      setEmailError("Email is required");
    }
    if (emailError) {
      return;
    }
    try {
      const response = await axios.post(
        "https://api.dumpsboss.com/v1/account/forgot-password",
        {
          email,
          ip,
          reset_url: "http://localhost:3000/reset-password/",
        },
        {
          headers: {
            "x-api-key": "ed79766c-2cc1-4967-8d3c-035387603caf",
          },
        }
      );
      console.log(response.data);
      setPasswordRest(response.data);
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="lg:mt-12">
        <div className="flex ">
          <div className="flex flex-row w-full">
            <div className="flex flex-1 justify-center px-4 relative">
              <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
                <div className="flex flex-col space-y-2 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Fotgot your account
                  </h2>
                  <p className="text-md md:text-xl">
                    Enter your email and press forgot password to get a rest
                    verification code.
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
                  <button
                    type="submit"
                    className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
                  >
                    Forgot password
                  </button>
                  <div className="flex justify-center items-center">
                    <span className="w-full border border-black"></span>
                    <span className="px-4">Or</span>
                    <span className="w-full border border-black"></span>
                  </div>
                  <Link
                    href={"/sign-in"}
                    className="flex items-center hover:bg-white justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative"
                  >
                    <button>
                      <span>Back to sign in</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={passwordRest.email_sent ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {passwordRest.message && passwordRest.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ForgotPasswordForm;
