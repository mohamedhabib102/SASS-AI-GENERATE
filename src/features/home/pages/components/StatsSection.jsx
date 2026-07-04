import React from "react";
import CustomContainer from "../../../../components/shared/CustomContainer";
import { useLang } from "@/hooks/lang/useLang";

const StatsSection = ({ stats }) => {
  const { t } = useLang();

  const defaultLabels = [
    t("home.stats.projectsLabel"),
    t("home.stats.expertsLabel"),
    t("home.stats.satisfactionLabel")
  ];

  return (
    <div className="bg-[#F5F5F5] py-4 md:py-8">
      <CustomContainer>
        <div className="grid grid-cols-3 items-center text-center md:max-w-150 mx-auto">
          {stats && stats.length > 0 ? (
            stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className={`text-2xl md:text-[40px] font-semibold ${index === 2 ? "text-main" : "text-black"} leading-none`}>
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm lg:text-base text-black mt-2 font-medium">
                  {stat.label || defaultLabels[index] || ""}
                </span>
              </div>
            ))
          ) : (
            <>
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
            </>
          )}
        </div>
      </CustomContainer>
    </div>
  );
};

export default StatsSection;