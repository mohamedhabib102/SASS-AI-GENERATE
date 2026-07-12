import React from "react";
import { useLang } from "@/hooks/useLang";
import AboutFeatureSection from "./AboutFeatureSection";
import TitleAbout from "./TitleAbout";

const WhatWeOfferSection = () => {
  const { t } = useLang();

  return (
    <div className="flex flex-col gap-8 pt-18">
      <TitleAbout
       title={t("aboutPage.service.title")}
       description={t("aboutPage.service.description")}
      />
      {/* 1. Task & Campaign Management (Image Left) */}
      <AboutFeatureSection
        title={t("aboutPage.features.taskManagement.title")}
        description={t("aboutPage.features.taskManagement.description")}
        btnText={t("aboutPage.features.taskManagement.button")}
        imgSrc="/images/WhatWeOfferSection1.jpg"
        dirc="left"
      />

      {/* 2. Performance & Tasks Reports (Image Right) */}
      <AboutFeatureSection
        title={t("aboutPage.features.reportsPerformance.title")}
        description={t("aboutPage.features.reportsPerformance.description")}
        btnText={t("aboutPage.features.reportsPerformance.button")}
        imgSrc="/images/abouthero1.jpg"
        dirc="right"
      />

      {/* 3. Order & Subscription Management (Image Left) */}
      <AboutFeatureSection
        title={t("aboutPage.features.orderManagement.title")}
        description={t("aboutPage.features.orderManagement.description")}
        btnText={t("aboutPage.features.orderManagement.button")}
        imgSrc="/images/abouthero2.jpg"
        dirc="left"
      />

      {/* 4. Team Management (Image Right) */}
      <AboutFeatureSection
        title={t("aboutPage.features.teamManagement.title")}
        description={t("aboutPage.features.teamManagement.description")}
        btnText={t("aboutPage.features.teamManagement.button")}
        imgSrc="/images/abouthero3.jpg"
        dirc="right"
      />
    </div>
  );
};

export default WhatWeOfferSection;