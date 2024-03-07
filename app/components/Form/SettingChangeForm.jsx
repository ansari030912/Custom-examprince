"use client";
import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const SettingChangeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [apiResponse, setApiResponse] = useState({});
  const [user, setUser] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  useEffect(() => {
    const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    setUser(loginResponse);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({}); // Reset errors

    // Check for password length
    if (formData.password.length < 8) {
      setErrors({ password: "Password must be at least 8 characters long" });
      return;
    }

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    try {
      const response = await axios.post(
        "https://api.dumpsboss.com/v1/account/update-profile",
        {
          name: formData.name,
          password: formData.password,
        },
        {
          headers: {
            "x-api-key": "ed79766c-2cc1-4967-8d3c-035387603caf",
            Authorization: `Bearer ${loginResponse._token}`,
          },
        }
      );
      setApiResponse(response.data);
      // Reset form data
      setFormData({ name: "", password: "", confirmPassword: "" });
      setOpenSnackbar(true);
      router.push("/");
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
                <div className="flex flex-col max-w-md space-y-5">
                  <input
                    type="name"
                    placeholder="Name"
                    className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                    name="name"
                    disabled
                    value={user?.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span style={{ color: "red" }} className="text-sm">
                      {errors.name}
                    </span>
                  )}
                  <input
                    type="password"
                    placeholder="Password"
                    className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <span style={{ color: "red" }} className="text-sm">
                      {errors.password}
                    </span>
                  )}
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && (
                    <span style={{ color: "red" }} className="text-sm">
                      {errors.confirmPassword}
                    </span>
                  )}
                  <button
                    type="submit"
                    className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
                  >
                    Update Profile
                  </button>
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
          horizontal: "right",
        }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={apiResponse?.is_active ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {apiResponse && apiResponse.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SettingChangeForm;
