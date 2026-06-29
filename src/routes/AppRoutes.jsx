import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import SignUp from "../features/auth/pages/SignUp";
import SignIn from "../features/auth/pages/SignIn";
import ForgotPassword from "../features/auth/pages/ForgatPassword";
import ResetPassword from "../features/auth/pages/ResetPassword";
import OtpCode from "../features/auth/pages/OtpCode";
import Prices from "@/pages/prices/Prices";
import Services from "@/pages/services/Services";
import ContactUs from "@/pages/contactUs/ContactUs";
import GoogleCallback from "@/features/auth/pages/GoogleCallback";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prices" element={<Prices />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="auth/sign-up" element={<SignUp />} />
      <Route path="auth/sign-in" element={<SignIn />} />
      <Route path="auth/forgot-password" element={<ForgotPassword />} />
      <Route path="auth/reset-password" element={<ResetPassword />} />
      <Route path="/auth/otp-code" element={<OtpCode />} />
      <Route path="/auth/google/callback" element={<GoogleCallback />}/>
    </Routes>
  );
};

export default AppRoutes;
