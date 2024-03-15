"use client";
import loginAuth from "../auth/LoginAuth";
import ForgotPasswordCard from "../components/Cards/ForgotPasswordCard";

const ForgotPassword = () => {
  return <ForgotPasswordCard />;
};
export default loginAuth(ForgotPassword);
