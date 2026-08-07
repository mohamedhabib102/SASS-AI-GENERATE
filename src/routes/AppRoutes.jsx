import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../features/home/pages/Home";
import SignIn from "../features/auth/pages/SignIn";
import ForgotPassword from "../features/auth/pages/ForgatPassword";
import ResetPassword from "../features/auth/pages/ResetPassword";
import OtpCode from "../features/auth/pages/OtpCode";
import Prices from "@/features/prices/pages/Prices";
import Services from "@/features/services/pages/Services";
import ContactUs from "@/pages/contactUs/ContactUs";
import MainLayout from "@/layouts/MainLayout";
import GoogleCallback from "@/features/auth/pages/GoogleCallback";
import { Toaster } from "react-hot-toast";
import DetailsService from "@/features/services/pages/DetailsService";
import About from "@/features/about/pages/About";
import Profile from "@/features/auth/pages/Profile";
import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";
import NotFound from "@/pages/notFound/NotFound";
import TrainingEvaluation from "@/pages/training-evaluation/TrainingEvaluation";

const AppRoutes = () => {
  return (
    <>
      <Toaster />

      <Routes>
        <Route path="/" element={<Navigate to="/ar" replace />} />
        {/* Routes with Header/Footer */}
        <Route path="/:lang" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Prices />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="services/:id" element={<DetailsService />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="training-evaluation" element={<TrainingEvaluation />} />
        </Route>

        {/* Auth Routes (Guest only) */}
        <Route path="/:lang/auth/sign-in" element={<GuestRoute><SignIn /></GuestRoute>} />
        <Route path="/:lang/auth/forgot-password" element={<GuestRoute><ForgotPassword /></GuestRoute>} />
        <Route path="/:lang/auth/reset-password" element={<GuestRoute><ResetPassword /></GuestRoute>} />
        <Route path="/:lang/auth/otp-code" element={<GuestRoute><OtpCode /></GuestRoute>} />
        <Route path="/:lang/auth/google/callback" element={<GoogleCallback />} />

        {/* Catch-all for URLs outside /:lang */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
};

export default AppRoutes;
