import CustomContainer from "@/components/shared/CustomContainer";
import { useParams, Link } from "react-router-dom";
import { useLang } from "@/hooks/useLang";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ServiceFeatures from "./components/ServiceFeatures";

const DetailsService = () => {
    const { id } = useParams();
    const { t, lang } = useLang();
    const isRtl = lang === "ar";

    const stats = t("serviceDetails.stats", { returnObjects: true });

    return (
        <>
            <section className="lg:py-16 py-10">
                <CustomContainer>

                    {/* Breadcrumb */}
                    <div className={`flex items-center gap-1.5 text-sm text-desc mb-8 ${isRtl ? "flex-row-reverse justify-end" : ""}`}>
                        <Link
                            to="/services"
                            className="text-desc hover:text-primary transition-colors"
                        >
                            {t("serviceDetails.breadcrumbParent")}
                        </Link>
                        {isRtl
                            ? <ChevronLeft size={15} className="text-desc" />
                            : <ChevronRight size={15} className="text-desc" />
                        }
                        <span className="text-main font-medium">{id}</span>
                    </div>

                    {/* Main Content */}
                    <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${isRtl ? "lg:flex-row-reverse" : ""}`}>

                        {/* Image */}
                        <div className="w-full lg:w-1/2 shrink-0 bg-[#E5E3FB] rounded-[42px] aspect-square flex items-center justify-center p-8 lg:p-12">
                            <img
                                src="/images/details-service.svg"
                                alt={id}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Text Content */}
                        <div className={`w-full lg:w-1/2 flex flex-col gap-5 `}>

                            <h1 className="text-2xl lg:text-3xl font-bold text-main leading-snug">
                                إدارة حسابات السوشيال ميديا
                            </h1>

                            <p className="text-sm text-desc leading-relaxed">
                                {t("serviceDetails.description")}
                            </p>

                            {/* Price */}
                            <p className="text-base font-semibold text-main">
                                <span className="text-desc font-normal">{t("serviceDetails.price")} </span>
                                {t("serviceDetails.price_value")}
                            </p>

                            {/* Book Button */}
                            <button
                                type="button"
                                className={
                                    `${isRtl ? "ml-auto" : "mr-auto"}
                                    bg-secondary hover:bg-secondary/85 transition-colors text-white font-medium text-sm px-8 py-3 rounded-lg cursor-pointer`
                                }
                            >
                                {t("serviceDetails.bookButton")}
                            </button>

                            {/* Stats */}
                        <div className={`flex items-center  gap-12 mt-4 pt-6 border-t border-border w-full `}>
                                {Array.isArray(stats) && stats.map((stat, index) => (
                                <div key={index} className={`flex flex-col gap-1 ${isRtl ? "items-start" : "items-end"}`}>
                                    <span className="text-3xl font-bold text-main">{stat.value}</span>
                                    <span className="text-lg font-normal text-main">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </CustomContainer>
            </section>
            <ServiceFeatures />
        </>
    );
};
export default DetailsService;