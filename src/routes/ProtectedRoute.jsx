import { Navigate, useParams } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

const ProtectedRoute = ({ children }) => {
  const { lang } = useParams();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={`/${lang || "ar"}/auth/sign-in`} replace />;
  }

  return children;
};

export default ProtectedRoute;
