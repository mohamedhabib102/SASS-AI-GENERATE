import CustomContainer from "@/components/shared/CustomContainer";
import CustomTitle from "@/components/shared/CustomTitle";
import CtaSection from "./CtaSection";
import TablePlans from "./TablePlans";
import Animate from "@/animations/Animate";
import { useComparisons } from "@/features/prices/hooks/useComparisons";
import { useInView } from "react-intersection-observer";
import { comparisonTableData } from "@/data/dataTable";
import { useLang } from "@/hooks/useLang";

const ComparisonSection = () => {
    const { t, lang } = useLang()
    const { ref, inView } = useInView({
        rootMargin: "300px",
    });

    const { data } = useComparisons({ enabled: inView });
    const apiData = data?.data || data;
    const comparisonData = apiData || comparisonTableData;

    return (
        <section ref={ref} className="lg:py-16 py-8">
            <CustomContainer>
                <Animate direction="up" triggerOn="scroll" delay={0}>
                    <CustomTitle
                     title={comparisonData?.sectionTitle || "قارن بين الباقات بالتفصيل"}
                     description={comparisonData?.sectionDescription || "اطّلع على جميع المزايا والقدرات المتاحة في كل باقة لاختيار ما يناسب حجم نشاطك وأهدافك التسويقية."}
                     showLine={false}
                     centered={true}
                    />
                </Animate>
                <Animate direction="up" triggerOn="scroll" delay={0.15}>
                    <TablePlans data={comparisonData} />
                </Animate>
                <Animate direction="up" triggerOn="scroll" delay={0.1}>
                    <CtaSection
                      title={t("prices.cta.title")}
                      description={t("prices.cta.description")}
                      btn1={t("prices.cta.btn1")}
                      btn2={t("prices.cta.btn2")}
                    />
                </Animate>
            </CustomContainer>
        </section>
    )
}; export default ComparisonSection;