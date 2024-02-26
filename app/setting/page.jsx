"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SettingPage = () => {
  const [user, setUser] = useState();
  const router = useRouter();
  useEffect(() => {
    const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    if (!loginResponse?.is_active) {
      return router.push("/sign-in");
    }
    setUser(loginResponse);
  }, [router]);
  return <div>SettingPage</div>;
};

export default SettingPage;
