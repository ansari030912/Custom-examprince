/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function loginAuth(Component) {
  return function AuthenticatedComponent(props) {
    const router = useRouter();
    let loginResponse;

    if (typeof window !== "undefined") {
      // Check if running in a browser environment
      loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    }

    useEffect(() => {
      if (!loginResponse?.is_logged_in) {
        // If not logged in, redirect to sign-in page
        router.push("/sign-in");
      }
    }, [!loginResponse, router]);

    if (loginResponse?.is_logged_in) {
      return router.push("/");
    }
    return <Component {...props} />;
  };
}
