import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "@/pages/home/Home";
// Auth
import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/SignUp";
import ForgotPassword from "@/pages/auth/ForgatPassword";
import OtpCode from "@/pages/auth/OtpCode";
import ResetPassword from "./pages/auth/ResetPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth/sign-up" element={<SignUp />} />
        <Route path="auth/sign-in" element={<SignIn />} />
        <Route path="auth/forgot-password" element={<ForgotPassword />} />
        <Route path="auth/reset-password" element={<ResetPassword />} />
        <Route path="/auth/otp-code" element={<OtpCode />} />
      </Routes>
    </>
  );
}

export default App;
