import CustomContainer from "../shared/CustomContainer";
import CustomTitle from "../shared/CustomTitle";
import TablePlans from "./TablePlans";





const ComparisonSection = () => {
    return (
        <section className="lg:py-16 py-8">
            <CustomContainer>
                <CustomTitle
                 title={"قارن بين الباقات بالتفصيل"}
                 description={"اطّلع على جميع المزايا والقدرات المتاحة في كل باقة لاختيار ما يناسب حجم نشاطك وأهدافك التسويقية."}
                 showLine={false}
                 centered={true}
                />
                <TablePlans/>
            </CustomContainer>
        </section>
    )
}; export default ComparisonSection;