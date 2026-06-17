import React from "react";
import { CircleCheckBig } from "lucide-react";
import { useLang } from "@/hooks/lang/useLang";

const AboutAuth = () => {


  return (
    <div
      className="
      bg-primary text-white
      flex flex-col
      justify-between
      px-6 lg:px-8 py-5 lg:py-6
      min-h-screen
      overflow-y-auto
      select-none
      "
    >
      {/* Top Header / Logo */}
      <div className="w-full flex justify-start">
        <img
          src="/logo.svg"
          title="logo"
          alt="logo site"
          className="h-10 lg:h-15 w-auto"
        />
      </div>

      {/* Middle Content */}
      <div className="flex-1 flex flex-col justify-center items-center w-full">
        {/* Illustration */}
        <div className="w-full flex justify-center mb-4">
          <img
            src="/image-auth.png"
            alt="Marketing Illustration"
            className="w-full max-w-40 lg:max-w-70 object-contain"
          />
        </div>

        <div className="w-full">
          <div className="space-y-1">
            <h1 className="text-xl lg:text-2xl font-bold leading-tight">
              مرحباً بك في
              <span className="block text-[#F56E14] mt-1">
                منصة ماركيفا لإدارة الخدمات التسويقية
              </span>
            </h1>
          </div>

          <p className="text-white/80 text-sm lg:text-base leading-relaxed mb-5">
            منصة ذكية لأتمتة التسويق وجذب العملاء المحتملين.
            <span className="block mt-1">
              نجمع البيانات، نحللها بالذكاء الاصطناعي، ونوصل رسالتك للعميل في
              الوقت المناسب.
            </span>
          </p>

          <ul className="space-y-2.5">
            {[
              "جمع ذكي للعملاء المحتملين.",
              "لوحة تحكم ترصد الحملات التسويقية لحظة بلحظة.",
              "تحليل وتصنيف بالذكاء الاصطناعي.",
              "رسائل تسويقية مخصصة تلقائياً.",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#F0E8DB] flex items-center justify-center shrink-0">
                  <CircleCheckBig className="w-4 h-4 text-[#948163]" />
                </div>
                <span className="text-white/90 text-xs lg:text-sm font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex justify-between items-center text-white/50 text-[10px] lg:text-xs mt-4">
        <span>© 2026 أسفار. جميع الحقوق محفوظة.</span>

        <div className="flex gap-4">
          <a href="#">سياسة الخصوصية</a>
          <a href="#">شروط الخدمة</a>
        </div>
      </div>
    </div>
  );
};

export default AboutAuth;