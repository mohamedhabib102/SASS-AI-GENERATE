import React, { useMemo } from "react";
import { useLang } from "@/hooks/lang/useLang";
import CustomContainer from "../shared/CustomContainer";
import CustomTitle from "../shared/CustomTitle";
import Animate from "@/animations/Animate";

const ServiceManagementSection = () => {
  const { t, lang } = useLang();
  const isRtl = lang === "ar";

  const cards = useMemo(
    () => [
      {
        id: 1,
        title: t("home.serviceManagement.card1Title"),
        description: t("home.serviceManagement.card1Description"),
        image: "/images/management-1.png",
      },
      {
        id: 2,
        title: t("home.serviceManagement.card2Title"),
        description: t("home.serviceManagement.card2Description"),
        image: "/images/management-2.png",
      },
      {
        id: 3,
        title: t("home.serviceManagement.card3Title"),
        description: t("home.serviceManagement.card3Description"),
        image: "/images/management-3.png",
      },
    ],
    [t],
  );

  // Staggering helper: Card 1 & 3 align to the right (start in RTL, end in LTR), Card 2 to the left (end in RTL, start in LTR)
  const getStaggerClass = (id) => {
    const isEven = id % 2 === 0;
    if (isRtl) {
      return isEven ? "lg:self-end" : "lg:self-start";
    } else {
      return isEven ? "lg:self-start" : "lg:self-end";
    }
  };

  return (
    <section
      className="lg:py-16 py-8 bg-white overflow-hidden"
      id="service-management"
    >
      <CustomContainer>
        {/* Header Section */}
        <CustomTitle
          title={t("home.serviceManagement.sectionTitle")}
          description={t("home.serviceManagement.sectionDescription")}
          showLine={true}
        />

        {/* Staggered Cards List */}
        <div className="flex flex-col gap-6 md:gap-8 mt-8 md:mt-12 w-full">
          {cards.map((card, index) => (
            <Animate
              key={card.id}
              direction={index % 2 === 0 ? "right" : "left"}
              delay={index * 0.15}
              distance={150}
              className={`${getStaggerClass(card.id)} w-full lg:w-[85%] bg-table border border-primary rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-12 transition-all duration-300 hover:shadow-md hover:scale-[1.01]`}
            >
          
                {/* Text Content */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-start order-2 md:order-1">
                  <div className="mb-4 inline-block">
                    <h3 className="text-primary font-bold text-lg md:text-xl pb-1.5 border-b-2 border-primary leading-tight inline">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-main text-sm md:text-base leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Illustration / Image */}
                <div className="w-full md:w-[32%] lg:w-[28%] flex justify-center items-center shrink-0 order-1 md:order-2">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full max-h-40 md:max-h-48 object-contain transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              
            </Animate>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default ServiceManagementSection;
