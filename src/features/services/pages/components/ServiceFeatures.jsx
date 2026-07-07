import { useLang } from "@/hooks/useLang";
import { FileText, Calendar, TrendingUp, MessageSquare } from "lucide-react";
import CustomContainer from "@/components/shared/CustomContainer";
import TitleServices from "./TitleServices";

const iconMap = {
  FileText: FileText,
  Calendar: Calendar,
  TrendingUp: TrendingUp,
  MessageSquare: MessageSquare
};

const ServiceFeatures = () => {
  const { t, lang } = useLang();
  const isRtl = lang === "ar";

  // Get features translation object
  const featuresData = t("serviceDetails.whatYouGet", { returnObjects: true });

  if (!featuresData || !Array.isArray(featuresData.items)) {
    return null;
  }

  return (
    <section className="bg-[#F5F5F5] py-10">
      <CustomContainer>
        {/* Section Header */}

        <TitleServices title={featuresData.title} description={featuresData.subtitle} />


        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || FileText;

            return (
              <div
                key={index}
                className="relative border border-primary rounded-xl p-4 pb-6 flex flex-col transition-all duration-300 hover:shadow-lg group"
              >
                {/* Icon Container positioned absolute top right (RTL) or top left (LTR) */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-primary bg-table group-hover:bg-[#E5E3FB] group-hover:text-primary-dark transition-all duration-300 mb-6`}
                >
                  <IconComponent size={20} />
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-main mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-desc leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </CustomContainer>
    </section>
  );
};

export default ServiceFeatures;
