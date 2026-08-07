import { useLang } from '@/hooks/useLang';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const GoogleAuthButton = () => {
  const handleGoogleLogin = () => {
    window.location.href = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
  };

  const {t} = useLang();

  return (
    <div className="w-full mt-2">
      <div className="relative flex items-center mb-4">
        <div className="grow border-t border-[#E5E7EB]"></div>
        <span className="shrink-0 mx-4 text-[#9CA3AF] text-sm">أو</span>
        <div className="grow border-t border-[#E5E7EB]"></div>
      </div>
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-3 bg-white border border-[#E5E7EB] text-[#374151] font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer disabled:opacity-50"
      >
        {t("signIn.submit")}
        <FcGoogle size={24} />
      </button>
    </div>
  );
};

export default GoogleAuthButton;
