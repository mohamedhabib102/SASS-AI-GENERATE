import { Navigate, useParams } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

const GuestRoute = ({ children }) => {
  const { lang } = useParams();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to={`/${lang || "ar"}`} replace />;
  }

  return children;
};

export default GuestRoute;
