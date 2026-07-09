import { useState } from "react";
import { Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import Loading from "@/components/shared/Loading";
import CustomContainer from "@/components/shared/CustomContainer";
import Animate from "@/animations/Animate";
import ServiceCard from "./ServiceCard";
import useServicesPage from "@/features/services/pages/useServicesPage";

const ServicesPage = () => {
  const [page, setPage] = useState(1);
  const { t } = useTranslation();

  const {
    data,
    isLoading,
    isError,
    error,
  } = useServicesPage(page);

  const sections = data?.data ?? [];
  const pagination = data?.pagination;
  const totalPages = pagination?.last_page ?? 1;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loading size={35} color="#1F7D53" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 py-20">
        {t(error?.messageKey)}
      </div>
    );
  }

  return (
    <section className="lg:py-16 py-8" id="services">
      <CustomContainer>
        {sections.map((section) => (
          <div key={section.id} className="mb-12 text-right">
            <Animate direction="up" triggerOn="scroll">
              <h3 className="text-xl font-semibold text-main">
                {section.title}
              </h3>

              <p className="text-sm text-gray mt-1 mb-6">
                {section.description}
              </p>
            </Animate>

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
                noServices
              </p>
            )}
          </div>
        ))}

        {totalPages > 1 && (
          <Animate direction="up" triggerOn="scroll" delay={0.1}>
            <div
              className="flex items-center justify-center gap-1 mt-8"
              dir="ltr"
            >
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-9 h-9 flex items-center justify-center rounded-md text-gray hover:bg-gray-100 disabled:opacity-40"
              >
                <ChevronLeft size={16} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNumber) => (
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
                )
              )}

              <button
                onClick={() =>
                  setPage((p) => Math.min(totalPages, p + 1))
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