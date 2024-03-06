"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const AuthGuard = ({ children }) => {
  function jwtDecode(token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const rawData = window.atob(base64);
    const buffer = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; i++) {
      buffer[i] = rawData.charCodeAt(i);
    }
    const decoder = new TextDecoder();
    const jsonPayload = decoder.decode(buffer);
    return JSON.parse(jsonPayload);
  }
  const router = useRouter();
  const tokenExpired = (exp) => {
    // eslint-disable-next-line prefer-const
    let expiredTimer;

    const currentTime = Date.now();
    const timeLeft = exp - currentTime;
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
      const { exp } = jwtDecode(isLogin._token);
      tokenExpired(exp);
    }
  }, []);
  return children;
};
