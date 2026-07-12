import CustomContainer from "@/components/shared/CustomContainer";
import { useParams, Link } from "react-router-dom";
import { useLang } from "@/hooks/useLang";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ServiceFeatures from "./components/ServiceFeatures";
import { useServiceDetails } from "../hooks/useServicesDetails";
import Animate from "@/animations/Animate";
import ExecutionSteps from "./components/ExecutionSteps";
import AudienceSection from "./components/AudienceSection";
import ServiceTestimonials from "./components/ServiceTestimonials";
import Loading from "@/components/shared/Loading";

const DetailsService = () => {
  const { id } = useParams();
  const { t, lang } = useLang();
  const isRtl = lang === "ar";

  const { data, isLoading } = useServiceDetails(id ? Number(id) : 0);

  const service = data?.data || data || "";
  const sectionOne = service?.section_one || {};
  const statsItems = [
    {
      label: lang === "ar" ? "رضا العملاء" : "Client satisfaction",
      value: sectionOne?.stats?.client_satisfaction || 20,
    },
    {
      label: lang === "ar" ? "المشاريع المكتملة" : "Completed projects",
      value: sectionOne?.stats?.completed_projects || 0,
    },
    {
      label: lang === "ar" ? "معدل النجاح" : "Success rate",
      value: sectionOne?.stats?.success_rate || 0,
    },
  ].filter((stat) => stat.value !== undefined && stat.value !== null);

  if (isLoading) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center py-20">
        <div className="flex flex-col items-center gap-3">
          <Loading size={35} color="#1F7D53" />
          <p className="text-sm text-desc">{lang === "ar" ? "جارٍ التحميل..." : "Loading..."}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="lg:pt-10 pt-6">
      <div className="py-0 pb-10">
        <CustomContainer>
          {/* Breadcrumb */}
          <Animate direction="down" triggerOn="mount" duration={0.6}>
            <div
              className={`flex items-center gap-1.5 text-sm text-desc mb-8 ${isRtl ? "flex-row-reverse justify-end" : ""}`}
            >
              <Link
                to="/services"
                className="text-desc hover:text-primary transition-colors"
              >
                {t("serviceDetails.breadcrumbParent")}
              </Link>
              {isRtl ? (
                <ChevronLeft size={15} className="text-desc" />
              ) : (
                <ChevronRight size={15} className="text-desc" />
              )}
              <span className="text-main font-medium">
                {service.name} 
                {/* t("serviceDetails.pageTitle") */}
              </span>
            </div>
          </Animate>

          {/* Main Content */}
          <div
            className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${isRtl ? "lg:flex-row-reverse" : ""}`}
          >
            {/* Image */}
            <Animate
              direction={isRtl ? "left" : "right"}
              triggerOn="mount"
              duration={0.7}
              className="w-full lg:w-1/2 shrink-0"
            >
              <div className="w-full bg-[#E5E3FB] rounded-[42px] aspect-square flex items-center justify-center p-8 lg:p-12">
                <img
                  src={sectionOne.cover_image||"/images/details-service.svg"}
                  alt={id}
                  className="w-full h-full object-contain"
                />
              </div>
            </Animate>

            {/* Text Content */}
            <Animate
              direction="up"
              triggerOn="mount"
              duration={0.7}
              delay={0.15}
              className="w-full lg:w-1/2"
            >
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl lg:text-3xl font-bold text-main leading-snug">
                  {t("serviceDetails.pageTitle")}
                </h1>

                <p className="text-sm text-desc leading-relaxed">
                  {sectionOne.full_description}
                </p>

                {/* Price */}
                <p className="text-base font-semibold text-main">
                  <span className="text-desc font-normal">
                    {t("serviceDetails.price")}{" "}
                  </span>
                  {service.price}
                </p>

                {/* Book Button */}
                <button
                  type="button"
                  className={`${isRtl ? "ml-auto" : "mr-auto"}
                  bg-secondary hover:bg-secondary/85 transition-colors text-white font-medium text-sm px-8 py-3 rounded-lg cursor-pointer`}
                >
                  {lang === "ar" ? sectionOne?.booking_button?.text.ar : sectionOne?.booking_button?.text.en}
                </button>

                {/* Stats */}
                {statsItems.length > 0 && (
                  <div
                    className={`flex items-center gap-6 md:gap-12 mt-4 pt-6 border-t border-border w-full justify-between md:justify-start`}
                  >
                    {statsItems.map((stat, index) => (
                      <div
                        key={index}
                        className="flex-1 flex flex-col items-center text-center gap-1"
                      >
                        <span className="text-2xl md:text-3xl font-bold text-main">
                          {stat.value}
                        </span>
                        <span className="text-sm md:text-base font-normal text-main leading-tight">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Animate>
          </div>
        </CustomContainer>
      </div>

      <Animate direction="up" triggerOn="scroll">
        <ServiceFeatures />
      </Animate>

      <Animate direction="up" triggerOn="scroll">
        <ExecutionSteps />
      </Animate>

      <Animate direction="up" triggerOn="scroll">
        <AudienceSection />
      </Animate>

      <Animate direction="up" triggerOn="scroll">
        <ServiceTestimonials />
      </Animate>
    </section>
  );
};
export default DetailsService;
