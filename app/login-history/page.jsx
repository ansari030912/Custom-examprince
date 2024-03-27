"use client";
import withAuth from "../auth/RouterAuth";
import LoginHistoryCard from "../components/Cards/LoginHistoryCard";
const LoginHistoryPage = () => {
  return <LoginHistoryCard />;
};

export default withAuth(LoginHistoryPage);
