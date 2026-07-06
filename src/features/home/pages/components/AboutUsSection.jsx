import React from "react";
import { useLang } from "@/hooks/lang/useLang";
import CustomContainer from "../../../../components/shared/CustomContainer";
import CustomTitle from "../../../../components/shared/CustomTitle";
import { Button } from "../../../../components/ui/button";
import Animate from "@/animations/Animate";
import { useMarketing } from "@/hooks/useMarketing";

const AboutUsSection = () => {
  const { data, isLoading, error } = useMarketing();

  const { t, lang } = useLang();
  const isRtl = lang === "ar";

  return (
    <section className="lg:py-16 py-8 bg-white overflow-hidden" id="about">
      <CustomContainer>
        {/* Custom Title section at the top */}
        <Animate direction="up" delay={0}>

        <CustomTitle
          title={t("home.aboutUs.motiveTitle")}
          description={t("home.aboutUs.motiveDescription")}
          showLine={true}
          />

          </Animate>
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16 mt-8 md:mt-12" >
          <div
            className={`lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-start ${
              isRtl ? "lg:order-2" : "lg:order-1"
            } order-1`}
          >
           <Animate direction="up" delay={0.2}>
            
            <h3 className="text-xl md:text-2xl lg:text-[28px] font-bold text-main leading-tight mb-4">
              {t("home.aboutUs.sectionTitle")}
            </h3>
            
            <p className="text-gray text-sm md:text-base leading-relaxed mb-4 max-w-xl">
              {t("home.aboutUs.paragraph1")}
            </p>
            
            <p className="text-gray text-sm md:text-base leading-relaxed mb-6 max-w-xl">
              {t("home.aboutUs.paragraph2")}
            </p>

            <Button
              variant="secondary"
              className="bg-secondary hover:bg-orange-600 text-white font-semibold text-base h-auto py-3 px-8 rounded-xl cursor-pointer transition-colors duration-200 border-none shadow-md"
              >
              {t("home.aboutUs.learnMore")}
            </Button>
            </Animate>
          </div>

          {/* Image/Lavender card column */}
          <div
            className={`lg:col-span-5 flex justify-center items-center w-full ${
              isRtl ? "lg:order-1" : "lg:order-2"
            } order-2`}
          >
            <Animate direction="up" delay={0.2}>

            <div className="bg-[#E5E3FB] rounded-4xl md:rounded-[40px] p-6 md:p-10 flex justify-center items-center w-full max-w-125 lg:max-w-full mx-auto aspect-square lg:aspect-auto lg:h-100 transition-all duration-300 hover:shadow-lg">
              
              <img
                src="/images/about-us-section-1.png"
                alt="About us illustration"
                className="w-full h-full object-contain max-h-75 lg:max-h-87.5 transition-transform duration-300 hover:scale-105"
                loading="lazy"
                />
            </div>
              </Animate>
          </div>
        </div>


        {/* Second Two-column layout (Methodology) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16 mt-16 md:mt-24">
          {/* Image/Lavender card column on the left on desktop */}
          <div
            className={`lg:col-span-5 flex justify-center items-center w-full ${
              isRtl ? "lg:order-2" : "lg:order-1"
            } order-2`}
          >
            <Animate direction="up" delay={0.4}>

            <div className="bg-[#E5E3FB] rounded-4xl md:rounded-[40px] p-6 md:p-10 flex justify-center items-center w-full max-w-125 lg:max-w-full mx-auto aspect-square lg:aspect-auto lg:h-100 transition-all duration-300 hover:shadow-lg">
       
              <img
                src="/images/about-us-section-2.png"
                alt="Methodology illustration"
                className="w-full h-full object-contain max-h-75 lg:max-h-87.5 transition-transform duration-300 hover:scale-105"
                loading="lazy"
                />
       
            </div>
                </Animate>
          </div>

          {/* Text details column on the right on desktop */}
          <div
            className={`lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-start ${
              isRtl ? "lg:order-1" : "lg:order-2"
            } order-1`}
          >
           <Animate direction="up" delay={0.4}>

            <h3 className="text-xl md:text-2xl lg:text-[28px] font-bold text-main leading-tight mb-4">
              {t("home.aboutUs.methodologyTitle")}
            </h3>
            
            <p className="text-gray text-sm md:text-base leading-relaxed mb-6 max-w-xl">
              {t("home.aboutUs.methodologyDescription")}
            </p>

            <Button
              variant="secondary"
              className="bg-secondary hover:bg-orange-600 text-white font-semibold text-base h-auto py-3 px-8 rounded-xl cursor-pointer transition-colors duration-200 border-none shadow-md"
              >
              {t("home.aboutUs.learnMore")}
            </Button>
           </Animate>

          </div>
        </div>

        {/* Third Two-column layout (Control & Transparency) */}
        <div  className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16 mt-16 md:mt-24">
          {/* Text details column */}
          <div
            className={`lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-start ${
              isRtl ? "lg:order-2" : "lg:order-1"
            } order-1`}
          >
            <Animate direction="up" delay={0.6}>

            <h3 className="text-xl md:text-2xl lg:text-[28px] font-bold text-main leading-tight mb-4">
              {t("home.aboutUs.controlTitle")}
            </h3>

            <p className="text-gray text-sm md:text-base leading-relaxed mb-6 max-w-xl">
              {t("home.aboutUs.controlDescription")}
            </p>

            <Button
              variant="secondary"
              className="bg-secondary hover:bg-orange-600 text-white font-semibold text-base h-auto py-3 px-8 rounded-xl cursor-pointer transition-colors duration-200 border-none shadow-md"
            >
              {t("home.aboutUs.learnMore")}
            </Button>
            </Animate>
          </div>

          {/* Image/Lavender card column */}
          <div
            className={`lg:col-span-5 flex justify-center items-center w-full ${
              isRtl ? "lg:order-1" : "lg:order-2"
            } order-2`}
          >
            <Animate direction="up" delay={0.6}>

            <div className="bg-[#E5E3FB] rounded-4xl md:rounded-[40px] p-6 md:p-10 flex justify-center items-center w-full max-w-125 lg:max-w-full mx-auto aspect-square lg:aspect-auto lg:h-100 transition-all duration-300 hover:shadow-lg">
              <img
                src="/images/about-us-section-3.png"
                alt="Control and transparency illustration"
                className="w-full h-full object-contain max-h-75 lg:max-h-87.5 transition-transform duration-300 hover:scale-105"
                loading="lazy"
                />
            </div>
                </Animate>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default AboutUsSection;