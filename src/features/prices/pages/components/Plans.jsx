import PlanItem from "@/features/prices/pages/components/PlanItem";
import CustomContainer from "@/components/shared/CustomContainer";
import CustomTitle from "@/components/shared/CustomTitle";
import { useLang } from "@/hooks/useLang";
import { ArrowUpRight } from "lucide-react";
import Animate from "@/animations/Animate";
import { usePlans } from "@/features/prices/hooks/usePlans";
import { Loader2 } from "lucide-react";
import Loading from "@/components/shared/Loading";
import ServerError from "@/components/shared/ServerError";

const Plans = () => {
  const { t, lang } = useLang();
  const { data: apiPlansResponse, isLoading, isError } = usePlans();
  const apiPlans = apiPlansResponse?.data || apiPlansResponse || [];

  let displayPlans = null;

  if (apiPlans && apiPlans.length > 0) {
    displayPlans = apiPlans.map((apiPlan) => {
      return {
        key: apiPlan?.id,
        popular: apiPlan?.is_popular,
        name: apiPlan?.name,
        tagline: apiPlan?.description,
        price: apiPlan?.price,
        type: apiPlan?.billing_interval,
        features: (apiPlan.features && apiPlan.features.length > 0)
          ? apiPlan.features.map((f) => (typeof f === "string" ? f : f.name || f.label || f))
          : [],
        button: apiPlan.button?.text,
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
          {isLoading ? (
            <div className="flex justify-center items-center py-16">
              <Loading color="#4f46e5" size={35} />
            </div>
          ) : isError || !displayPlans ? (
            <ServerError message={t("errors.nofoundData")}/>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-center">
              <PlanItem plan={displayPlans} />
            </div>
          )}
        </Animate>
      </CustomContainer>
    </section>
  );
};
export default Plans;
