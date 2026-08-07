import CustomContainer from "@/components/shared/CustomContainer";
import CustomTitle from "@/components/shared/CustomTitle";
import CtaSection from "./CtaSection";
import TablePlans from "./TablePlans";
import Animate from "@/animations/Animate";
import { useComparisons } from "@/features/prices/hooks/useComparisons";
import { useInView } from "react-intersection-observer";
import { useLang } from "@/hooks/useLang";
import Loading from "@/components/shared/Loading";
import ServerError from "@/components/shared/ServerError";

const ComparisonSection = () => {
    const { t } = useLang();
    const { ref, inView } = useInView({
        rootMargin: "300px",
    });

    const { data, isLoading, isError } = useComparisons({ enabled: inView });
    const apiData = data?.data || data || null;

    const sectionTitle = apiData?.sectionTitle || null;
    const sectionDescription = apiData?.sectionDescription || null;

    return (
        <section ref={ref} className="lg:py-16 py-8">
            <CustomContainer>
                <Animate direction="up" triggerOn="scroll" delay={0}>
                    <CustomTitle
                        title={sectionTitle ?? ""}
                        description={sectionDescription ?? ""}
                        showLine={false}
                        centered={true}
                    />
                </Animate>

                <Animate direction="up" triggerOn="scroll" delay={0.15}>
                    {isLoading ? (
                        <div className="flex justify-center items-center py-16">
                            <Loading color="#4f46e5" size={35} />
                        </div>
                    ) : isError || !apiData ? (
                      <ServerError message={t("errors.nofoundData")}/>
                    ) : (
                        <TablePlans data={apiData} />
                    )}
                </Animate>

                <Animate direction="up" triggerOn="scroll" delay={0.1}>
                    <CtaSection />
                </Animate>
            </CustomContainer>
        </section>
    );
}; export default ComparisonSection;