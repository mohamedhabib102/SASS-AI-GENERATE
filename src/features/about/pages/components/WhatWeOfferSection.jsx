import React from "react";
import { useLang } from "@/hooks/useLang";
import AboutFeatureSection from "./AboutFeatureSection";
import TitleAbout from "./TitleAbout";
import useWhatWeOfferService from "../../hooks/useWhatWeOfferService";
import useHeaderAbout from "../../hooks/useHeaderAbout";
import Loading from "@/components/shared/Loading";

const WhatWeOfferSection = () => {
  const { lang, t } = useLang();

  const {
    data: whatWeOfferRes,
    isLoading: loadingOffer,
    isError: errorOffer,
  } = useWhatWeOfferService();

  const {
    data: headerAboutRes,
    isLoading: loadingHeader,
    isError: errorHeader,
  } = useHeaderAbout();

  const isLoading = loadingOffer || loadingHeader;
  const isError = errorOffer || errorHeader;

  const fallbackItems = [
    {
      id: 1,
      title: t("home.aboutUs.sectionTitle"),
      description: `${t("home.aboutUs.paragraph1")}\n\n${t("home.aboutUs.paragraph2")}`,
      button_text: t("home.aboutUs.learnMore"),
      image: "/images/WhatWeOfferSection1.jpg",
    },
    {
      id: 2,
      title: t("home.aboutUs.methodologyTitle"),
      description: t("home.aboutUs.methodologyDescription"),
      button_text: t("home.aboutUs.learnMore"),
      image: "/images/WhatWeOfferSection2.jpg",
    },
  ];

  const whatWeOfferData = (whatWeOfferRes?.data && whatWeOfferRes.data.length > 0) ? whatWeOfferRes.data : fallbackItems;

  const headerAboutData = headerAboutRes?.data;

  const titleData = Array.isArray(headerAboutData)
    ? headerAboutData[0]
    : headerAboutData;

  const sectionTitle = titleData?.title || t("home.aboutUs.motiveTitle");
  const sectionDescription = titleData?.description || t("home.aboutUs.motiveDescription");

  return (
    <section className="flex flex-col gap-8 pt-18">
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Loading color="#4f46e5" size={35} />
        </div>
      )  : (
        <>
          <TitleAbout
            title={sectionTitle}
            description={sectionDescription}
          />

          {whatWeOfferData.map((item, index) => (
            <AboutFeatureSection
              key={item.id ?? index}
              title={
                item.title
              }
              description={
                item.description
              }
              btnText={
                item.button_text}
              imgSrc={
                item.image
                  ? `${item.image}`
                  : "/images/WhatWeOfferSection1.jpg"
              }
              dirc={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </>
      )}
    </section>
  );
};

export default WhatWeOfferSection;