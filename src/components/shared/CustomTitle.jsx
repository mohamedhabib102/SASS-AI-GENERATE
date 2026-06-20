import { useLang } from "@/hooks/lang/useLang";
import React from "react";

const CustomTitle = ({ title, description }) => {
  const { lang } = useLang();
  const isRtl = lang === "ar";

  return (
    <div className={`flex flex-col w-full mb-12 md:mb-16 items-center text-center ${isRtl ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"}`}>
      {/* Title with line */}
      <div className={`flex items-center gap-4 text-xl md:text-2xl lg:text-[32px] font-bold text-main mx-auto ${isRtl ? "lg:ml-auto lg:mr-0" : "lg:mr-auto lg:ml-0"}`}>
        <h2 className="text-main">{title}</h2>
        <span className="h-0.75 w-16 md:w-24 bg-main rounded-full lg:block hidden" />
      </div>

      {/* Description */}
      {description && (
        <p className={`text-gray text-sm md:text-base leading-relaxed mt-4 max-w-212 px-4 mx-auto ${isRtl ? "lg:ml-auto lg:mr-0" : "lg:mr-auto lg:ml-0"}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default CustomTitle;
