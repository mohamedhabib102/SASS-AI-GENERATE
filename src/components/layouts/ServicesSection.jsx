import React, { useMemo } from "react";
import { useLang } from "@/hooks/lang/useLang";
import CustomContainer from "../shared/CustomContainer";
import CustomTitle from "../shared/CustomTitle";
import { Link } from "react-router-dom";
import {
  Megaphone,
  Palette,
  FileText,
  TrendingUp,
  BarChart2,
  MessageSquare,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const ServicesSection = () => {
  const { t, lang } = useLang();
  const isRtl = lang === "ar";

  const services = useMemo(
    () => [
      {
        id: 1,
        title: t("home.services.card1Title"),
        description: t("home.services.card1Description"),
        Icon: Megaphone,
      },
      {
        id: 2,
        title: t("home.services.card2Title"),
        description: t("home.services.card2Description"),
        Icon: Palette,
      },
      {
        id: 3,
        title: t("home.services.card3Title"),
        description: t("home.services.card3Description"),
        Icon: FileText,
      },
      {
        id: 4,
        title: t("home.services.card4Title"),
        description: t("home.services.card4Description"),
        Icon: TrendingUp,
      },
      {
        id: 5,
        title: t("home.services.card5Title"),
        description: t("home.services.card5Description"),
        Icon: BarChart2,
      },
      {
        id: 6,
        title: t("home.services.card6Title"),
        description: t("home.services.card6Description"),
        Icon: MessageSquare,
      },
    ],
    [t],
  );

  return (
    <section
      className="py-16 md:py-24 bg-[#F5F5F5] overflow-hidden"
      id="services"
    >
      <CustomContainer>
        <div className={`flex items-start justify-between gap-4 flex-wrap lg:flex-row flex-col`}>
          <div className="flex-1">
            <CustomTitle
              title={t("home.services.sectionTitle")}
              description={t("home.services.sectionDescription")}
            />
          </div>

          <Link
            to="/services"
            className="flex items-center flex-row-reverse gap-2 text-primary font-medium text-sm md:text-base shrink-0 mt-1 hover:gap-3 transition-all duration-200"
          >
            {isRtl ? (
              <ArrowLeft className="h-4 w-4" />
            ) : (
              <ArrowRight className="h-4 w-4" />
            )}
            {t("home.services.viewMore")}
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-4">
          {services.map(({ id, title, description, Icon }) => (
            <div
              key={id}
              className="group bg-transparent border border-primary rounded-2xl p-6 md:p-7 flex flex-col gap-4 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className={`flex`}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
              </div>

              {/* Title */}
              <h3
                className={`text-base md:text-lg font-bold text-main leading-snug ${isRtl ? "text-right" : "text-left"}`}
              >
                {title}
              </h3>

              {/* Description */}
              <p
                className={`text-main text-sm leading-relaxed ${isRtl ? "text-right" : "text-left"}`}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default ServicesSection;
