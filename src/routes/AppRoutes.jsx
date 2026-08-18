import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";
import { Toaster } from "react-hot-toast";
import Loading from "@/components/shared/Loading";

const Home = lazy(() => import("../features/home/pages/Home"));
const SignIn = lazy(() => import("../features/auth/pages/SignIn"));
const ForgotPassword = lazy(() => import("../features/auth/pages/ForgatPassword"));
const ResetPassword = lazy(() => import("../features/auth/pages/ResetPassword"));
const OtpCode = lazy(() => import("../features/auth/pages/OtpCode"));
const Prices = lazy(() => import("@/features/prices/pages/Prices"));
const Services = lazy(() => import("@/features/services/pages/Services"));
const ContactUs = lazy(() => import("@/pages/contactUs/ContactUs"));
const GoogleCallback = lazy(() => import("@/features/auth/pages/GoogleCallback"));
const DetailsService = lazy(() => import("@/features/services/pages/DetailsService"));
const About = lazy(() => import("@/features/about/pages/About"));
const Profile = lazy(() => import("@/features/auth/pages/Profile"));
const NotFound = lazy(() => import("@/pages/notFound/NotFound"));
const TrainingEvaluation = lazy(() => import("@/pages/training-evaluation/TrainingEvaluation"));

const AppRoutes = () => {
  return (
    <>
      <Toaster />

      <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><Loading /></div>}>
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
      </Suspense>
    </>
  );
};

export default AppRoutes;
