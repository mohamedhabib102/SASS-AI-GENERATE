import PlanItem from "@/components/sections/PlanItem";
import CustomContainer from "@/components/shared/CustomContainer";
import CustomTitle from "@/components/shared/CustomTitle";
import { useLang } from "@/hooks/lang/useLang";
import { ArrowUpRight } from "lucide-react";
import { useMemo } from "react";
import Animate from "@/animations/Animate";

const Plans = () => {
  const { t, lang } = useLang();

  const plans = useMemo(
    () => t("prices.plans", { returnObjects: true }),
    [t, lang],
  );
  return (
    <section className="lg:py-16 py-8">
      <CustomContainer>
        <Animate direction="up" triggerOn="scroll" delay={0}>
          <div className="relative text-sm bg-table text-primary py-2 px-4 min-w-40 mx-auto mb-5 text-center w-fit rounded-full font-semibold">
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
            <PlanItem plan={plans} />
          </div>
        </Animate>
      </CustomContainer>
    </section>
  );
};
export default Plans;

