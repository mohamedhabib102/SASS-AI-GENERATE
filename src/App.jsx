import { useLocation } from "react-router-dom";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import AppRoutes from "@/routes/AppRoutes";

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname.startsWith("/auth");

  return (
    <>
      {!isAuthPage && <Header />}

      <AppRoutes />

      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;