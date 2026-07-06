import { Routes, Route } from "react-router-dom";
import Home from "@/features/home/pages/Home";
import SignUp from "@/features/auth/pages/SignUp";
import SignIn from "@/features/auth/pages/SignIn";
import ForgotPassword from "@/features/auth/pages/ForgatPassword";
import ResetPassword from "@/features/auth/pages/ResetPassword";
import OtpCode from "@/features/auth/pages/OtpCode";
import Prices from "@/pages/prices/Prices";
import Services from "@/pages/services/Services";
import About from "@/pages/about/About";
import ContactUs from "@/pages/contactUs/ContactUs";
import CreateProfileCompany from "@/features/company/pages/CreateProfileCompany";
import MainLayout from "@/layouts/MainLayout";
import GoogleCallback from "@/features/auth/pages/GoogleCallback";
import { Toaster } from "react-hot-toast";

const AppRoutes = () => {
  
  return (
    <>
    <Toaster />
    <Routes>
      {/* Routes that need Header and Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Route>

      {/* Routes that do NOT need Header and Footer */}
      <Route path="auth/sign-up" element={<SignUp />} />
      <Route path="auth/sign-in" element={<SignIn />} />
      <Route path="auth/forgot-password" element={<ForgotPassword />} />
      <Route path="auth/reset-password" element={<ResetPassword />} />
      <Route path="/auth/otp-code" element={<OtpCode />} />
      <Route path="/company/create-profile" element={<CreateProfileCompany />} />
      <Route path="/auth/google/callback" element={<GoogleCallback />}/>
    </Routes>
    </>
  );
};

export default AppRoutes;
