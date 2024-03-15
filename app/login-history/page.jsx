/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import withAuth from "../auth/RouterAuth";
import LoginHistoryCard from "../components/Cards/LoginHistoryCard";
export const metadata = {
  title: "Login History",
  description: "A world of css",
  keywords: "A world of css",
  robots: "noIndex",
};
const LoginHistoryPage = () => {
  return <LoginHistoryCard />;
};

export default withAuth(LoginHistoryPage);
