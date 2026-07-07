import { useLang } from "@/hooks/useLang";
import CustomContainer from "@/components/shared/CustomContainer";
import TitleServices from "./TitleServices";
import { CheckCircle2, CircleCheckBig } from "lucide-react";

const AudienceSection = () => {
  const { t, lang } = useLang();
  const isRtl = lang === "ar";

  const data = t("serviceDetails.audienceSection", { returnObjects: true });

  if (!data || !Array.isArray(data.items)) return null;

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <CustomContainer>
        {/* Section Header */}
    
          <TitleServices title={data.title} description={data.description} />
 

        {/* Items List */}
        <div className="max-w-xl mx-auto flex flex-col gap-4">
          {data.items.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 `}
            >
              <CircleCheckBig
                size={20}
                className="text-[#F56E14] shrink-0"
              />
              <span className="text-sm text-desc">{item}</span>
            </div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default AudienceSection;
