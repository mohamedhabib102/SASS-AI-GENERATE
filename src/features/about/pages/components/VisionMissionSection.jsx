import React from "react";
import { useLang } from "@/hooks/useLang";
import CustomContainer from "@/components/shared/CustomContainer";
import Animate from "@/animations/Animate";
import useEndAboutSection from "../../hooks/useEndAboutSection";

const VisionMissionSection = () => {
  const { t } = useLang();
  const {data} =  useEndAboutSection();

  console.log(data)

  return (
    <section className="py-16 bg-gray-50/50 overflow-hidden">
      <CustomContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Box */}
          <Animate direction="right" triggerOn="scroll" className="h-full">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#DEDEDE] shadow-xs flex flex-col justify-center text-center md:text-start h-full hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-main mb-4">
                {t("aboutPage.visionMission.vision.title")}
              </h3>
              <p className="text-gray text-base leading-relaxed">
                {t("aboutPage.visionMission.vision.description")}
              </p>
            </div>
          </Animate>

          {/* Mission Box */}
          <Animate direction="left" triggerOn="scroll" className="h-full">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#DEDEDE] shadow-xs flex flex-col justify-center text-center md:text-start h-full hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-main mb-4">
                {t("aboutPage.visionMission.mission.title")}
              </h3>
              <p className="text-gray text-base leading-relaxed">
                {t("aboutPage.visionMission.mission.description")}
              </p>
            </div>
          </Animate>
        </div>
      </CustomContainer>
    </section>
  );
};

export default VisionMissionSection;
