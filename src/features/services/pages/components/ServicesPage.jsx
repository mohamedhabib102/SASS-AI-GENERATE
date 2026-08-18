import { useState } from "react";
import { Share2, ChevronLeft, ChevronRight } from "lucide-react";

import Loading from "@/components/shared/Loading";
import CustomContainer from "@/components/shared/CustomContainer";
import Animate from "@/animations/Animate";
import ServiceCard from "./ServiceCard";
import { useLang } from "@/hooks/useLang";
import { useServicesPage } from "../../hooks/useServicesPage";

const ServicesPage = () => {
  const [page, setPage] = useState(1);

  const { t, lang } = useLang();
  const isRtl = lang === "ar";

  const { data, isLoading, isError } = useServicesPage(page);

  const pagination = data?.pagination;
  const totalPages = pagination?.last_page ?? 1;

  const fallbackSections = [
    {
      id: "fallback-section-1",
      title: t("home.services.sectionTitle"),
      description: t("home.services.sectionDescription"),
      services: [
        {
          id: "fallback-service-1",
          title: t("home.services.card1Title"),
          description: t("home.services.card1Description"),
        },
        {
          id: "fallback-service-2",
          title: t("home.services.card2Title"),
          description: t("home.services.card2Description"),
        },
        {
          id: "fallback-service-3",
          title: t("home.services.card3Title"),
          description: t("home.services.card3Description"),
        },
        {
          id: "fallback-service-4",
          title: t("home.services.card4Title"),
          description: t("home.services.card4Description"),
        },
        {
          id: "fallback-service-5",
          title: t("home.services.card5Title"),
          description: t("home.services.card5Description"),
        },
      ],
    },
  ];

  const sections =
    data?.data?.length > 0 ? data.data : fallbackSections;

  if (isLoading) {
    return (
      <section>
        <CustomContainer>
          <Loading />
        </CustomContainer>
      </section>
    );
  }

  return (
    <section>
      <CustomContainer>
        {sections.map((section) => (
          <div key={section.id} className="mb-12">
            {/* Section Title */}
            <Animate direction="up">
              <h2
                className={`text-xl md:text-2xl lg:text-[32px] font-bold text-main ${
                  isRtl ? "text-right" : "text-left"
                }`}
              >
                {section.title}
              </h2>

              {/* Section Description */}
              <p
                className={`text-sm text-gray mt-1 mb-6 ${
                  isRtl ? "text-right" : "text-left"
                }`}
              >
                {section.description}
              </p>
            </Animate>

            {/* Services Grid */}
            {section.services?.length ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {section.services.map((service, idx) => (
                  <Animate
                    key={service.id}
                    direction="up"
                    triggerOn="scroll"
                    delay={idx * 0.05}
                  >
                    <ServiceCard
                      Icon={Share2}
                      service={service}
                    />
                  </Animate>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">
                {t("home.services.noServices")}
              </p>
            )}
          </div>
        ))}

        {/* Pagination */}
        {totalPages > 1 && (
          <Animate direction="up" triggerOn="scroll" delay={0.1}>
            <div
              className="flex items-center justify-center gap-1 mt-8"
              dir="ltr"
            >
              <button
                onClick={() =>
                  setPage((p) => Math.max(1, p - 1))
                }
                disabled={page === 1}
                className="w-9 h-9 flex items-center justify-center rounded-md text-gray hover:bg-gray-100 disabled:opacity-40"
              >
                <ChevronLeft size={16} />
              </button>

              {Array.from(
                { length: totalPages },
                (_, i) => i + 1
              ).map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  className={`w-9 h-9 flex items-center justify-center rounded-md text-sm ${
                    page === pageNumber
                      ? "bg-primary text-white"
                      : "text-gray hover:bg-gray-100"
                  }`}
                >
                  {pageNumber}
                </button>
              ))}

              <button
                onClick={() =>
                  setPage((p) =>
                    Math.min(totalPages, p + 1)
                  )
                }
                disabled={page === totalPages}
                className="w-9 h-9 flex items-center justify-center rounded-md text-gray hover:bg-gray-100 disabled:opacity-40"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </Animate>
        )}
      </CustomContainer>
    </section>
  );
};

export default ServicesPage;