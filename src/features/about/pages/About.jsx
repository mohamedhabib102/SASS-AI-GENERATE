import { useLang } from "@/hooks/useLang";
import AboutHero from "./components/AboutHero";
import WhatWeOfferSection from "./components/WhatWeOfferSection";
import WhyMarkeefaSection from "./components/WhyMarkeefaSection";
import VisionMissionSection from "./components/VisionMissionSection";
import CtaSection from "@/features/prices/pages/components/CtaSection";
import CustomContainer from "@/components/shared/CustomContainer";

const About = () => {
  const { t } = useLang();

  return (
    <main className="bg-white">
      {/* 1. Hero Section */}
      <AboutHero />

      {/* 2. What We Offer Section (3 alternate rows) */}
      <div id="about-content">
        <WhatWeOfferSection />
      </div>

      {/* 3. Why Markeefa Section */}
      <WhyMarkeefaSection />

      {/* 4. Vision & Mission Section */}
      <VisionMissionSection />

      {/* 5. Call To Action (CTA) Section */}
      <section className="py-16 bg-white">
        <CustomContainer>
          <CtaSection
            title={t("aboutPage.aboutCta.cta.title")}
            description={t("aboutPage.aboutCta.cta.description")}
            btn1={t("aboutPage.aboutCta.cta.btn1")}
            btn2={t("aboutPage.aboutCta.cta.btn2")}
          />
        </CustomContainer>
      </section>
    </main>
  );
};

export default About;