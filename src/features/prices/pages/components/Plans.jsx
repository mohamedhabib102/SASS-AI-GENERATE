import PlanItem from "@/features/prices/pages/components/PlanItem";
import CustomContainer from "@/components/shared/CustomContainer";
import CustomTitle from "@/components/shared/CustomTitle";
import { useLang } from "@/hooks/useLang";
import { ArrowUpRight } from "lucide-react";
import Animate from "@/animations/Animate";
import { usePlans } from "@/features/prices/hooks/usePlans";

const Plans = () => {
  const { t } = useLang();
  const { data: apiPlansResponse } = usePlans();
  const apiPlans = apiPlansResponse?.data || apiPlansResponse || [];

  const plans = t("prices.plans", { returnObjects: true });

  let displayPlans = plans;
  
  if (apiPlans && apiPlans.length > 0) {
    displayPlans = apiPlans.map((apiPlan, index) => {
      const fallback = plans[index] || {};
      
      return {
        key: apiPlan.id || fallback.key,
        popular: apiPlan.is_popular ?? fallback.popular,
        name: apiPlan.name || fallback.name,
        tagline: apiPlan.description || apiPlan.short_description || fallback.tagline,
        price: apiPlan.price ?? fallback.price,
        type: apiPlan.billing_interval || fallback.type,
        features: (apiPlan.features && apiPlan.features.length > 0)
          ? apiPlan.features.map((f) => (typeof f === "string" ? f : f.name || f.label || f))
          : (fallback.features || []),
        button: apiPlan.button?.text || fallback.button,
      };
    });
  }

  return (
    <section className="lg:py-16 py-8">
      <CustomContainer>
        <Animate direction="up" triggerOn="scroll" delay={0}>
          <div className="relative text-sm bg-table text-primary py-2 px-10  mx-auto mb-5 text-center w-fit rounded-full font-semibold">
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
        </Animate>
        <Animate direction="up" triggerOn="scroll" delay={0.15}>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-center">
            <PlanItem plan={displayPlans} />
          </div>
        </Animate>
      </CustomContainer>
    </section>
  );
};
export default Plans;

