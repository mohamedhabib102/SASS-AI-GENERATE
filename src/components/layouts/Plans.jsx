import PlanItem from "@/components/layouts/PlanItem";
import CustomContainer from "@/components/shared/CustomContainer";
import CustomTitle from "@/components/shared/CustomTitle";
import { useLang } from "@/hooks/lang/useLang";
import { ArrowUpRight } from "lucide-react";
import { useMemo } from "react";

const Plans = () => {
  const { t, lang } = useLang();

  const plans = useMemo(
    () => t("prices.plans", { returnObjects: true }),
    [t, lang],
  );
  return (
    <section className="lg:py-16 py-8">
      <CustomContainer>
        <div className="relative text-sm bg-[#EDEDFC] text-primary py-2 px-4 min-w-40 mx-auto mb-5 text-center w-fit rounded-full font-semibold">
          <ArrowUpRight
            size={15}
            className="absolute left-4 top-1/2 -translate-y-1/2"
          />
          {t("prices.badge")}
          <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></span>
        </div>
        <CustomTitle
          title={t("prices.title")}
          description={t("prices.description")}
          showLine={false}
          centered={true}
          descriptionColor={"text-desc"}
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-center">
          <PlanItem plan={plans} />
        </div>
      </CustomContainer>
    </section>
  );
};
export default Plans;
