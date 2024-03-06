"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const ResetPasswordForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const queryEmail = searchParams.get("email");
  const queryToken = searchParams.get("token");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [passwordResetData, setPasswordResetData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPasswordError("");

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.dumpsboss.com/v1/account/reset-password",
        {
          email: queryEmail,
          reset_token: queryToken,
          new_password: password,
        },
        {
          headers: {
            "x-api-key": "ed79766c-2cc1-4967-8d3c-035387603caf",
          },
        }
      );
      if (response.data) {
        router.push("/sign-in");
      }
      setPasswordResetData(response.data);
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="lg:mt-12">
        <div className="flex">
          <div className="flex flex-row w-full">
            <div className="flex flex-1 justify-center px-4 relative">
              <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md">
                <div className="flex flex-col space-y-2 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Create a new password
                  </h2>
                  <p className="text-md md:text-xl">
                    Enter your new password and then sign in again.
                  </p>
                </div>
                <div className="flex flex-col max-w-md space-y-5">
                  <input
                    type="password"
                    placeholder="Password"
                    className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {passwordError && (
                    <span style={{ color: "red" }} className="text-sm">
                      {passwordError}
                    </span>
                  )}
                  <button
                    type="submit"
                    className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
                  >
                    Update
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
          severity={passwordResetData ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {passwordResetData
            ? "Password reset successfuly!"
            : "Session expired"}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ResetPasswordForm;
