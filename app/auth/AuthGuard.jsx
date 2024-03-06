/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const AuthGuard = ({ children }) => {
  const router = useRouter();
  const tokenExpired = (expiryTime) => {
    // eslint-disable-next-line prefer-const
    let expiredTimer;

    const currentTime = Date.now();
    const timeLeft = expiryTime - currentTime;
    console.log("🚀 ~ tokenExpired ~ timeLeft:", timeLeft);

    const date = new Date(timeLeft); // Convert Unix timestamp to milliseconds

    // Format time in 12-hour format
    const time12hr = date.toLocaleTimeString("en-US", { hour12: true });

    console.log("token expire on", time12hr);
    // Test token expires after 10s

    clearTimeout(expiredTimer);
    expiredTimer = setTimeout(() => {
      alert("Token expired");

      localStorage.removeItem("loginResponse");
      router.push("/sign-in");
    }, timeLeft);
  };

  useEffect(() => {
    const isLogin = JSON.parse(localStorage.getItem("loginResponse"));
    if (isLogin?.is_logged_in) {
      tokenExpired(isLogin?.expiryTime);
    }
  }, []);
  return children;
};
