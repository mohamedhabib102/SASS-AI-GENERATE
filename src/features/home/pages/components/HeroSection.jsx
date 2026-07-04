import React from "react";
import CustomContainer from "../../../../components/shared/CustomContainer";
import { Button } from "../../../../components/ui/button";
import { useLang } from "@/hooks/lang/useLang";
import StatsSection from "./StatsSection";
import Animate from "@/animations/Animate";

const HeroSection = () => {
  const { t } = useLang();

  return (
    <>
      <section className="bg-primary text-white md:py-12 py-8 overflow-hidden relative">
        <CustomContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12 relative z-10">
            {/* Text content */}
            <div className="lg:col-span-6 flex flex-col items-start text-start">
              <Animate direction="left" triggerOn="mount">
                <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight lg:leading-[1.2] text-white">
                {t("home.hero.title")}
              </h1>
              <p className="text-white/85 text-sm md:text-base lg:text-lg leading-relaxed mt-4 md:mt-6 whitespace-pre-line max-w-xl">
                {t("home.hero.description")}
              </p>
              <Button 
                variant="secondary" 
                className="bg-secondary hover:bg-orange-600 text-white font-semibold text-base h-auto py-3 px-8 rounded-xl cursor-pointer transition-colors duration-200 mt-6 md:mt-8 border-none shadow-md"
              >
                {t("home.hero.button")}
              </Button>
              </Animate>
            </div>

            {/* Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <Animate direction="right" triggerOn="mount">
              <img
                src="/images/hero-animated.svg"
                alt="Hero illustration"
                className="w-full h-auto lg:min-w-142 lg:max-w-full lg:scale-105 xl:scale-110 transition-transform duration-300 object-contain"
                loading="lazy"
                />
              </Animate>
            </div>
          </div>
        </CustomContainer>
      </section>
      <StatsSection />
    </>
  );
};

export default HeroSection;