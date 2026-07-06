import React from "react";
import { useLang } from "@/hooks/lang/useLang";
import CustomContainer from "@/components/shared/CustomContainer";
import CustomTitle from "@/components/shared/CustomTitle";
import ServerError from "@/components/shared/ServerError";
import { Button } from "@/components/ui/button";
import Animate from "@/animations/Animate";
import { useMarketing } from "@/features/home/hooks/useMarketingSections";

const AboutUsSection = () => {
  const { data, isPending, isError, error } = useMarketing();

  const { t, lang } = useLang();
  const isRtl = lang === "ar";

  const fallbackSections = [
    {
      id: "fallback-1",
      title: t("home.aboutUs.sectionTitle"),
      description: `${t("home.aboutUs.paragraph1")}\n\n${t("home.aboutUs.paragraph2")}`,
      button_text: t("home.aboutUs.learnMore"),
      image: "/images/about-us-section-1.png",
    },
    {
      id: "fallback-2",
      title: t("home.aboutUs.methodologyTitle"),
      description: t("home.aboutUs.methodologyDescription"),
      button_text: t("home.aboutUs.learnMore"),
      image: "/images/about-us-section-2.png",
    },
    {
      id: "fallback-3",
      title: t("home.aboutUs.controlTitle"),
      description: t("home.aboutUs.controlDescription"),
      button_text: t("home.aboutUs.learnMore"),
      image: "/images/about-us-section-3.png",
    },
  ];

  if (isPending) {
    return (
      <section className="lg:py-16 py-8">
        <CustomContainer>
          <p className="text-center">Loading...</p>
        </CustomContainer>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="lg:py-16 py-8">
        <CustomContainer>
          <ServerError
            message={error?.response?.data?.message || error?.message}
          />
        </CustomContainer>
      </section>
    );
  }

  const sections =
    data?.data?.length > 0
      ? data.data.slice(0, 3)
      : fallbackSections;

  return (
    <section className="lg:py-16 py-8 bg-white overflow-hidden" id="about">
      <CustomContainer>
        <Animate direction="up">
          <CustomTitle
            title={t("home.aboutUs.motiveTitle")}
            description={t("home.aboutUs.motiveDescription")}
            showLine
          />
        </Animate>

        {sections.map((section, index) => {
          const isEven = index % 2 === 0;
          const fallbackImg = `/images/about-us-section-${(index % 3) + 1}.png`;

          return (
            <div
              key={section.id}
              className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16 mt-16 md:mt-24 first:mt-8 md:first:mt-12"
            >
              {/* Text */}
              <div
                className={`lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-start ${
                  isEven
                    ? isRtl
                      ? "lg:order-2"
                      : "lg:order-1"
                    : isRtl
                    ? "lg:order-1"
                    : "lg:order-2"
                } order-1`}
              >
                <Animate direction="up" delay={0.2}>
                  <h3 className="text-xl md:text-2xl lg:text-[28px] font-bold text-main leading-tight mb-4">
                    {section.title}
                  </h3>

                  <p className="text-gray text-sm md:text-base leading-relaxed mb-6 max-w-xl whitespace-pre-line text-start">
                    {section.description}
                  </p>

                  {section.button_text && (
                    <Button
                      variant="secondary"
                      className="bg-secondary hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-xl"
                    >
                      {section.button_text}
                    </Button>
                  )}
                </Animate>
              </div>

              {/* Image */}
              <div
                className={`lg:col-span-5 flex justify-center items-center ${
                  isEven
                    ? isRtl
                      ? "lg:order-1"
                      : "lg:order-2"
                    : isRtl
                    ? "lg:order-2"
                    : "lg:order-1"
                } order-2`}
              >
                <Animate direction="up" delay={0.2}>
                  <div className="bg-[#E5E3FB] rounded-[40px] p-6 md:p-10 flex justify-center items-center w-full max-w-125 lg:h-100">
                    <img
                      src={section.image || fallbackImg}
                      alt={section.title}
                      className="w-full h-full object-contain max-h-75 lg:max-h-87.5"
                    />
                  </div>
                </Animate>
              </div>
            </div>
          );
        })}
      </CustomContainer>
    </section>
  );
};

export default AboutUsSection;