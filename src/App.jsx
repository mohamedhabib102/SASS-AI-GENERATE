import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "@/pages/home/Home";
// Auth
import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/SignUp";
import ForgotPassword from "@/pages/auth/ForgatPassword";
import OtpCode from "@/pages/auth/OtpCode";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth/sign-up" element={<SignUp />} />
        <Route path="auth/sign-in" element={<SignIn />} />
        <Route path="auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/otp-code" element={<OtpCode />} />
      </Routes>
    </main>
  );
}

export default App;
