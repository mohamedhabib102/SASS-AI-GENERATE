import { useAuthStore } from "@/store/authStore";
import { useLang } from "@/hooks/useLang";
import { useNavigate } from "react-router-dom";
import CustomContainer from "@/components/shared/CustomContainer";
import Animate from "@/animations/Animate";
import { LogOut, Mail, Phone, UserRound, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const { t, lang } = useLang();
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate(`/${lang}/auth/sign-in`);
  };

  const getInitial = (name) =>
    name ? name.charAt(0).toUpperCase() : "";

  return (
    <section className="py-16 min-h-[70vh]">
      <CustomContainer>
        <Animate direction="up" triggerOn="mount" duration={0.5}>
          <div className="max-w-2xl mx-auto">
            {/* Profile Card */}
            <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
              {/* Header Banner */}
              <div className="h-32 bg-gradient-to-r from-primary to-primary-dark relative" />

              {/* Avatar */}
              <div className="flex justify-center -mt-16 relative z-10">
                <div className="w-28 h-28 rounded-full border-4 border-white shadow-md bg-[#E5E3FB] text-primary flex items-center justify-center text-4xl font-bold overflow-hidden">
                  {user?.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user?.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    getInitial(user?.name) || <UserRound size={40} />
                  )}
                </div>
              </div>

              {/* User Info */}
              <div className="text-center px-6 pt-4 pb-2">
                <h1 className="text-2xl font-bold text-main">
                  {user?.name || t("profile.user")}
                </h1>
                {user?.role && (
                  <span className="inline-block mt-2 text-xs font-medium text-primary bg-table px-3 py-1 rounded-full">
                    {user.role}
                  </span>
                )}
              </div>

              {/* Details */}
              <div className="px-6 py-6 space-y-4">
                {user?.email && (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-table text-primary flex items-center justify-center shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-desc">
                        {t("profile.email")}
                      </p>
                      <p className="text-sm font-medium text-main" dir="ltr">
                        {user.email}
                      </p>
                    </div>
                  </div>
                )}

                {user?.phone && (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-table text-primary flex items-center justify-center shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-desc">
                        {t("profile.phone")}
                      </p>
                      <p className="text-sm font-medium text-main" dir="ltr">
                        {user.phone}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="px-6 pb-6 flex flex-col gap-3">
                <Button
                  className="w-full py-5 bg-primary hover:bg-primary/90 text-white font-semibold shadow-md transition-all duration-200 cursor-pointer"
                >
                  <Pencil size={18} className="ltr:mr-2 rtl:ml-2" />
                  {t("profile.editData")}
                </Button>

                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="w-full py-5 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 cursor-pointer font-semibold transition-all duration-200"
                >
                  <LogOut size={18} className="ltr:mr-2 rtl:ml-2" />
                  {t("profile.logout")}
                </Button>
              </div>
            </div>
          </div>
        </Animate>
      </CustomContainer>
    </section>
  );
};

export default Profile;
