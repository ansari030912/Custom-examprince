import loginAuth from "../auth/LoginAuth";
import ForgotPasswordCard from "../components/Cards/ForgotPasswordCard";

export const metadata = {
  title: "Forgot password",
  description: "A world of css",
  keywords: "A world of css",
  robots: "noIndex",
};
const ForgotPassword = () => {
 
  return (
    <ForgotPasswordCard />
  );
};
export default loginAuth(ForgotPassword);
