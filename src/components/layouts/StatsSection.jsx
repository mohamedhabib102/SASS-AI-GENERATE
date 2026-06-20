import React from "react";
import CustomContainer from "../shared/CustomContainer";
import { useLang } from "@/hooks/lang/useLang";

const StatsSection = () => {
  const { t } = useLang();

  return (
    <div className="bg-[#F5F5F5] py-4 md:py-8">
      <CustomContainer>
        <div className="grid grid-cols-3 items-center text-center md:max-w-150 mx-auto">
          {/* Projects Completed */}
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-[40px] font-semibold text-black leading-none">
              {t("home.stats.projectsCount")}
            </span>
            <span className="text-xs md:text-sm lg:text-base text-black mt-2 font-medium">
              {t("home.stats.projectsLabel")}
            </span>
          </div>

          {/* Marketing Specialists */}
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-[40px] font-semibold text-black leading-none">
              {t("home.stats.expertsCount")}
            </span>
            <span className="text-xs md:text-sm lg:text-base text-black mt-2 font-medium">
              {t("home.stats.expertsLabel")}
            </span>
          </div>

          {/* Client Satisfaction */}
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-[40px] font-semibold text-main leading-none">
              {t("home.stats.satisfactionCount")}
            </span>
            <span className="text-xs md:text-sm lg:text-base text-black mt-2 font-medium">
              {t("home.stats.satisfactionLabel")}
            </span>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default StatsSection;