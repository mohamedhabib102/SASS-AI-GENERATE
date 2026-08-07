import { useLang } from "@/hooks/useLang";
import CustomContainer from "@/components/shared/CustomContainer";
import TitleServices from "./TitleServices";

const ExecutionSteps = () => {
  const { t, lang } = useLang();
  const isRtl = lang === "ar";

  const data = t("serviceDetails.executionSteps", { returnObjects: true });

  if (!data || !Array.isArray(data.steps)) return null;

  // For RTL, reverse display order to show highest number first (3,2,1)
  const displaySteps = isRtl ? [...data.steps].reverse() : data.steps;

  return (
    <section className="py-16 bg-white">
      <CustomContainer>
        {/* Section Header */}
       
          <TitleServices title={data.title} description={data.description} />
    

        {/* Steps Row */}
        <div className="flex flex-col lg:flex-row lg:items-start items-center gap-8 lg:gap-0 relative">

          {/* Single connector line passing through all circles */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-border z-0" />

          {displaySteps.map((step, index) => (
            <div
              key={step.id || index}
              className="flex-1 flex flex-col  items-center text-center gap-4 relative"
            >
              {/* Number Circle */}
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shrink-0 z-10 relative ring-4 ring-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)]">
                <span className="text-white text-5xl font-bold">{step.number}</span>
              </div>

              {/* Step Content */}
              <div className="flex flex-col items-center gap-2 px-4">
                <h3 className="text-base font-bold text-main">{step.title}</h3>
                <p className="text-sm text-desc leading-relaxed max-w-50">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default ExecutionSteps;
