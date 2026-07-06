import { Button } from "@/components/ui/button";




const CtaSection = () => {
    return (
        <div className="rounded-3xl text-center p-8 bg-linear-to-r from-primary/10 via-primary/0 to-secondary/10 ">
            <h3 className="text-main lg:text-4xl text-2xl font-semibold mb-4">لست متأكداً أي باقة تناسب خدماتك؟</h3>
            <p className="text-[#7A7A7A] font-normal text-sm mb-6 lg:max-w-150 max-w-auto mx-auto">دع فريق ماركيفا يساعدك في اختيار الحل الأنسب لحجم شركتك واحتياجات فريقك — لتبدأ بتنظيم أكثر احترافية وتجربة أفضل لشركتك .</p>

            <div className="flex items-center gap-3 justify-center lg:flex-row flex-col">
                <Button className={`bg-primary py-6 px-4 hover:bg-primary/80 cursor-pointer text-white border`}>
                    تحدث مع مستشار مبيعات
                </Button>
                <Button className={`border border-primary hover:bg-primary/20 bg-transparent text-primary cursor-pointer py-6 px-4`}>
                    استكشف المميزات
                </Button>
            </div>
        </div>
    )
}; export default CtaSection;