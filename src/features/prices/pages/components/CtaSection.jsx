import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const CtaSection = () => {
    const { t } = useTranslation();
    return (
        <div className="rounded-3xl text-center p-8 bg-linear-to-r from-primary/10 via-primary/0 to-secondary/10 ">
            <h3 className="text-main lg:text-4xl text-2xl font-semibold mb-4">{t("prices.cta.title")}</h3>
            <p className="text-[#7A7A7A] font-normal text-sm mb-6 lg:max-w-150 max-w-auto mx-auto">{t("prices.cta.description")}</p>

            <div className="flex items-center gap-3 justify-center lg:flex-row flex-col">
                <Button className={`bg-primary py-6 px-4 hover:bg-primary/80 cursor-pointer text-white border`}>
                    {t("prices.cta.btn1")}
                </Button>
                <Button className={`border border-primary hover:bg-primary/20 bg-transparent text-primary cursor-pointer py-6 px-4`}>
                    {t("prices.cta.btn2")}
                </Button>
            </div>
        </div>
    )
}; export default CtaSection;