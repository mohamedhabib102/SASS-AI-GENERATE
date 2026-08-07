import React from "react";
import CustomContainer from "@/components/shared/CustomContainer";
import { useLang } from "@/hooks/useLang";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "framer-motion";
import { useRef } from "react";

const parseStatValue = (value) => {
  if (typeof value !== "string" && typeof value !== "number") {
    return { number: 0, prefix: "", suffix: "" };
  }

  const str = String(value);
  const match = str.match(/^([^\d]*)([\d,]+)([^\d]*)$/);

  if (!match) {
    return { number: 0, prefix: "", suffix: "", raw: str };
  }

  return {
    number: parseInt(match[2].replace(/,/g, ""), 10),
    prefix: match[1] || "",
    suffix: match[3] || "",
  };
};


const AnimatedCounter = ({ value, duration = 2000 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const parsed = parseStatValue(value);

  const count = useCountUp(parsed.number || 0, {
    duration,
    start: isInView,
  });

  // If we couldn't parse a number, just show the raw value
  if (parsed.raw !== undefined) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {parsed.prefix}
      {count}
      {parsed.suffix}
    </span>
  );
};

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
                  <AnimatedCounter value={stat.value} />
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
                  <AnimatedCounter value={t("home.stats.projectsCount")} />
                </span>
                <span className="text-xs md:text-sm lg:text-base text-black mt-2 font-medium">
                  {t("home.stats.projectsLabel")}
                </span>
              </div>

              {/* Marketing Specialists */}
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-[40px] font-semibold text-black leading-none">
                  <AnimatedCounter value={t("home.stats.expertsCount")} />
                </span>
                <span className="text-xs md:text-sm lg:text-base text-black mt-2 font-medium">
                  {t("home.stats.expertsLabel")}
                </span>
              </div>

              {/* Client Satisfaction */}
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-[40px] font-semibold text-main leading-none">
                  <AnimatedCounter value={t("home.stats.satisfactionCount")} />
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