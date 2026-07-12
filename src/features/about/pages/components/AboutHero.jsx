import React from "react";
import CustomContainer from "@/components/shared/CustomContainer";
import { Button } from "@/components/ui/button";
import { useLang } from "@/hooks/useLang";
import Animate from "@/animations/Animate";

const AboutHero = () => {
  const { t } = useLang();

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about-content");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex items-center justify-center min-h-120 md:min-h-137.5 lg:min-h-[600px] w-full text-white py-16 overflow-hidden">
      {/* Background Image using HTML <img> Tag */}
      <img
        src="/images/about-hero.jpg"
        alt="About Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        loading="eager"
      />

      {/* Gradient Overlay using Tailwind CSS with specified stops */}
      <div className="absolute bg-[linear-gradient(0deg,rgba(0,0,0,0.40)_0%,rgba(0,0,0,0.40)_100%),linear-gradient(0deg,rgba(255,255,233,0.30)_0%,rgba(255,255,233,0.30)_100%),linear-gradient(0deg,rgba(0,0,0,0.30)_0%,rgba(0,0,0,0.30)_100%)] z-10 w-full h-full top-0 left-0" />
      <CustomContainer className="relative z-20">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <Animate direction="up" triggerOn="mount" duration={0.6}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight lg:leading-[1.2] mb-6 drop-shadow-md">
              {t("aboutPage.hero.title")}
            </h1>
          </Animate>

          <Animate direction="up" triggerOn="mount" duration={0.6} delay={0.2}>
            <p className="text-white/95 text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl whitespace-pre-line drop-shadow-sm font-light">
              {t("aboutPage.hero.description")}
            </p>
          </Animate>

          <Animate direction="up" triggerOn="mount" duration={0.6} delay={0.4}>
            <Button
              onClick={scrollToNextSection}
              className="bg-secondary hover:bg-secondary/80 text-white font-semibold text-base md:text-lg h-auto py-2.5 px-10 rounded-lg cursor-pointer transition-all duration-300 shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] border-none"
            >
              {t("aboutPage.hero.btnText")}
            </Button>
          </Animate>
        </div>
      </CustomContainer>
    </section>
  );
};

export default AboutHero;