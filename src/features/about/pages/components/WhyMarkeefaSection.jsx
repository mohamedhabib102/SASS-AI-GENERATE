import React from "react";
import { useLang } from "@/hooks/useLang";
import CustomContainer from "@/components/shared/CustomContainer";
import TitleAbout from "./TitleAbout";
import Animate from "@/animations/Animate";
import { Button } from "@/components/ui/button";

const WhyMarkeefaSection = () => {
  const { t } = useLang();

  const features = [
    {
      id: 1,
      title: t("aboutPage.whyMarkeefa.feature1.title"),
      description: t("aboutPage.whyMarkeefa.feature1.description"),
    },
    {
      id: 2,
      title: t("aboutPage.whyMarkeefa.feature2.title"),
      description: t("aboutPage.whyMarkeefa.feature2.description"),
    },
    {
      id: 3,
      title: t("aboutPage.whyMarkeefa.feature3.title"),
      description: t("aboutPage.whyMarkeefa.feature3.description"),
    },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <CustomContainer>
        <Animate direction="up" triggerOn="scroll">
          <TitleAbout
            title={t("aboutPage.whyMarkeefa.title")}
            description={t("aboutPage.whyMarkeefa.description")}
          />
        </Animate>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-24">
          {/* Left Column: Feature List */}
          <div className="lg:col-span-6 flex flex-col gap-8 order-2 lg:order-1 items-start">
            <div className="flex flex-col gap-8 w-full">
              {features.map((feature, index) => (
                <Animate
                  key={feature.id}
                  direction="up"
                  triggerOn="scroll"
                  delay={index * 0.1}
                  className="flex gap-4 items-start text-start"
                >
                  {/* Number / Checkbox-like Indicator (Orange background, white checkmark) */}
                  <div className="shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xs mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-main mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-desc text-sm md:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Animate>
              ))}
            </div>

            {/* Learn More Button */}
            <Animate direction="up" triggerOn="scroll" delay={0.3} className="mt-4">
              <Button
                className="bg-secondary hover:bg-orange-600 text-white font-semibold text-base px-10 py-3.5 h-auto rounded-xl shadow-md transition-all duration-200 cursor-pointer border-none"
              >
                {t("aboutPage.whyMarkeefa.button")}
              </Button>
            </Animate>
          </div>

          {/* Right Column: Vertically Stacked Images */}
          <div className="lg:col-span-6 flex justify-center items-center order-1 lg:order-2 w-full">
            <Animate direction="left" triggerOn="scroll" className="flex flex-col gap-6 w-full">
              {/* Image 1: Team Performance */}
              <img
                src="/images/whay2.png"
                alt="Team Discussion"
                className="w-full h-45 object-cover rounded-3xl shadow-md border border-gray-100 hover:scale-[1.01] transition-transform duration-300"
              />

              {/* Image 2: Kanban Board */}
              <img
                src="/images/whay3.png"
                alt="Kanban Board"
                className="w-full h-45 object-cover rounded-3xl shadow-md border border-gray-100 hover:scale-[1.01] transition-transform duration-300"
              />
              
            

              {/* Image 3: Analytics Dashboard */}
              <img
                src="/images/whay1.png"
                alt="Analytics Dashboard"
                className="w-full h-45 object-cover rounded-3xl shadow-md border border-gray-100 hover:scale-[1.01] transition-transform duration-300"
              />
            </Animate>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default WhyMarkeefaSection;
