"use client";
import { Icon } from "@iconify/react";
import { Alert, Button, IconButton, Snackbar, TextField } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { X_API_Key } from "../../AllUrls/ApiKey";
import { BaseUrl } from "../../AllUrls/BaseUrl";

const SignUpForm = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userRegiter, setUserRegiter] = useState("");
  const [ip, setIp] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const fetchIP = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/v1/my-ip`, {
        headers: {
          "x-api-key": X_API_Key,
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
    // Check if any field is empty
    if (!name || !email || !password || !confirmPassword) {
      setFormError(true);
      return;
    }
    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }
    // Check if password meets the minimum length requirement
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }
    // Proceed with form submission
    try {
      const response = await axios.post(
        `${BaseUrl}/v1/account/register`,
        {
          name,
          email,
          password,
          ip,
        },
        {
          headers: {
            "x-api-key": X_API_Key,
          },
        }
      );
      setUserRegiter(response.data);
      setOpen(true);
      setConfirmPassword("");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={
            userRegiter.message === "Email already exist." ? "error" : "success"
          }
          variant="filled"
          sx={{ width: "100%" }}
        >
          {userRegiter?.message}
        </Alert>
      </Snackbar>
      <form onSubmit={handleSubmit} className="lg:mt-10">
        <div className="flex">
          <div className="flex flex-row w-full">
            <div className="flex flex-1  justify-center px-4">
              <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
                <div className="flex flex-col space-y-2 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Sign Up account
                  </h2>
                  <p className="text-md md:text-xl">
                    Sign up or log in your account and get access to exams Dumps
                  </p>
                </div>
                <div className="flex flex-col max-w-md space-y-5">
                  <TextField
                    sx={{
                      bgcolor: "white",
                      border: "2px solid black",
                      borderRadius: "8px",
                    }}
                    onFocus={"none"}
                    type="text"
                    placeholder="Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setFormError(false);
                    }}
                  />
                  <TextField
                    sx={{
                      bgcolor: "white",
                      border: "2px solid black",
                      borderRadius: "8px",
                    }}
                    onFocus={"none"}
                    type="email"
                    placeholder="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setFormError(false);
                    }}
                  />
                  <TextField
                    sx={{
                      bgcolor: "white",
                      border: "2px solid black",
                      borderRadius: "8px",
                    }}
                    onFocus={"none"}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError("");
                      setFormError(false);
                    }}
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <Icon
                              icon="ep:hide"
                              width="0.8em"
                              height="0.8em"
                              style={{ color: "black" }}
                            />
                          ) : (
                            <Icon
                              icon="ep:view"
                              width="0.8em"
                              height="0.8em"
                              style={{ color: "black" }}
                            />
                          )}
                        </IconButton>
                      ),
                    }}
                  />
                  <TextField
                    sx={{
                      bgcolor: "white",
                      border: "2px solid black",
                      borderRadius: "6px",
                    }}
                    onFocus={"none"}
                    type="password"
                    placeholder="Confirm Password"
                    variant="outlined"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setPasswordMatchError(false);
                      setFormError(false);
                    }}
                    error={passwordMatchError}
                    helperText={passwordMatchError && "Passwords do not match"}
                  />
                  {formError && (
                    <span style={{ color: "red" }}>
                      All fields are required
                    </span>
                  )}
                  {passwordError && (
                    <span style={{ color: "red" }}>{passwordError}</span>
                  )}
                  <button
                    type="submit"
                    className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
                  >
                    Sign Up
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
                      <span>Already have a account</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
