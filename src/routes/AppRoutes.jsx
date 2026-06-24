import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";
import ForgotPassword from "../pages/auth/ForgatPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import OtpCode from "../pages/auth/OtpCode";
import Prices from "@/pages/prices/Prices";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prices" element={<Prices />}/>
      <Route path="auth/sign-up" element={<SignUp />} />
      <Route path="auth/sign-in" element={<SignIn />} />
      <Route path="auth/forgot-password" element={<ForgotPassword />} />
      <Route path="auth/reset-password" element={<ResetPassword />} />
      <Route path="/auth/otp-code" element={<OtpCode />} />
    </Routes>
  );
};

export default AppRoutes;