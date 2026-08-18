import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import toast from "react-hot-toast";

const GoogleCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const loginStore = useAuthStore((state) => state.login);

  useEffect(() => {
    const token = searchParams.get('token');
    const userParam = searchParams.get('user');
    const lang = localStorage.getItem('lang') || 'ar';

    if (token) {
      sessionStorage.setItem("token", token);
      
      let userData = { id: '', name: '', role: '', image: '' };
      if (userParam) {
        try {
          userData = JSON.parse(decodeURIComponent(userParam));
        } catch (e) {
          console.error("Failed to parse user data", e);
        }
      }
      
      loginStore(userData);
      toast.success("تم تسجيل الدخول بحساب جوجل بنجاح");
      navigate(`/${lang}`);
    } else {
      toast.error("فشل تسجيل الدخول بحساب جوجل");
      navigate(`/${lang}/auth/sign-in`);
    }
  }, [navigate, searchParams, loginStore]);

  return (
    <div className="flex justify-center items-center min-h-screen text-primary font-semibold text-xl">
      جاري معالجة تسجيل الدخول...
    </div>
  );
};

export default GoogleCallback;