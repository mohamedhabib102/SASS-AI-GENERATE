import React from "react";
import { useLang } from "@/hooks/useLang";
import AboutFeatureSection from "./AboutFeatureSection";
import TitleAbout from "./TitleAbout";
import useWhatWeOfferService from "../../hooks/useWhatWeOfferService";
import useHeaderAbout from "../../hooks/useHeaderAbout";
import Loading from "@/components/shared/Loading";
import ServerError from "@/components/shared/ServerError";

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

  const headerAboutData = headerAboutRes?.data;
  const whatWeOfferData = whatWeOfferRes?.data ?? [];

  const titleData = Array.isArray(headerAboutData)
    ? headerAboutData[0]
    : headerAboutData;

  const sectionTitle = titleData?.title;
  const sectionDescription = titleData?.description;

  return (
    <section className="flex flex-col gap-8 pt-18">
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Loading color="#4f46e5" size={35} />
        </div>
      ) : isError || !sectionTitle ? (
        <ServerError message={t("errors.nofoundData")} />
      ) : (
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