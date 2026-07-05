import CustomContainer from "../../../../components/shared/CustomContainer";
import CustomTitle from "../../../../components/shared/CustomTitle";
import CtaSection from "./CtaSection";
import TablePlans from "./TablePlans";
import Animate from "@/animations/Animate";





const ComparisonSection = () => {
    return (
        <section className="lg:py-16 py-8">
            <CustomContainer>
                <Animate direction="up" triggerOn="scroll" delay={0}>
                    <CustomTitle
                     title={"قارن بين الباقات بالتفصيل"}
                     description={"اطّلع على جميع المزايا والقدرات المتاحة في كل باقة لاختيار ما يناسب حجم نشاطك وأهدافك التسويقية."}
                     showLine={false}
                     centered={true}
                    />
                </Animate>
                <Animate direction="up" triggerOn="scroll" delay={0.15}>
                    <TablePlans/>
                </Animate>
                <Animate direction="up" triggerOn="scroll" delay={0.1}>
                    <CtaSection/>
                </Animate>
            </CustomContainer>
        </section>
    )
}; export default ComparisonSection;