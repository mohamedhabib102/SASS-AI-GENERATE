import { CircleCheckBig } from "lucide-react";

const AboutAuth = () => {
  return (
    <div
      className=" bg-[#1e25b6] text-white flex flex-col justify-between px-6 lg:px-8 py-12 lg:py-16 select-none"
      dir="rtl"
    >
      {/* Top Header / Logo */}
      <div className="w-full flex justify-start">
        <img
          src="/logo.svg"
          title="logo"
          alt="logo site"
          className="h-10 lg:h-14 w-auto"
        />
      </div>

      {/* Middle Content */}
      <div className="flex-grow flex flex-col justify-center items-center my-8 w-full">
        {/* Illustration */}
        <div className="w-full flex justify-center mb-8 lg:mb-12">
          <img
            src="/image-auth.png"
            alt="Marketing Illustration"
            className="w-full max-w-[340px] lg:max-w-[420px] h-auto object-contain"
          />
        </div>

        {/* Text and Features block */}
        <div className="w-full   space-y-6">
          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-2xl lg:text-[2.2rem] font-bold text-white leading-tight">
              مرحباً بك في
              <span className="block text-[#F56E14] mt-2 font-bold">
                منصة ماركيفا لإدارة الخدمات التسويقية
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-white/80 text-sm lg:text-base leading-relaxed font-normal">
            منصة ذكية لأتمتة التسويق وجذب العملاء المحتملين.
            <span className="block mt-1">
              نجمع البيانات، نحللها بالذكاء الاصطناعي، ونوصل رسالتك للعميل في
              الوقت المناسب.
            </span>
          </p>

          {/* Bullet Points */}
          <ul className="space-y-4">
            {/* Bullet 1 */}
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#F0E8DB] flex items-center justify-center shrink-0">
                <CircleCheckBig className="w-5 h-5 text-[#948163]" />
              </div>
              <span className="text-white/90 text-sm lg:text-base font-medium">
                جمع ذكي للعملاء المحتملين.
              </span>
            </li>
            {/* Bullet 2 */}
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#F0E8DB] flex items-center justify-center shrink-0">
                <CircleCheckBig className="w-5 h-5 text-[#948163]" />
              </div>
              <span className="text-white/90 text-sm lg:text-base font-medium">
                لوحة تحكم ترصد الحملات التسويقية لحظة بلحظة.
              </span>
            </li>
            {/* Bullet 3 */}
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#F0E8DB] flex items-center justify-center shrink-0">
                <CircleCheckBig className="w-5 h-5 text-[#948163]" />
              </div>
              <span className="text-white/90 text-sm lg:text-base font-medium">
                تحليل وتصنيف بالذكاء الاصطناعي.
              </span>
            </li>
            {/* Bullet 4 */}
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#F0E8DB] flex items-center justify-center shrink-0">
                <CircleCheckBig className="w-5 h-5 text-[#948163]" />
              </div>
              <span className="text-white/90 text-sm lg:text-base font-medium">
                رسائل تسويقية مخصصة تلقائياً.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex justify-between items-center text-white/50 text-xs lg:text-sm mt-8">
        <div>
          <span>© 2026 أسفار. جميع الحقوق محفوظة.</span>
        </div>
        <div className="flex gap-4">
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            سياسة الخصوصية
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            شروط الخدمة
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutAuth;
