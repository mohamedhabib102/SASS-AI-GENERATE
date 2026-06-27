import { useState } from "react";
import {
  Image,
  Share2,
  Type,
  Megaphone,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import CustomContainer from "../shared/CustomContainer";
import { Button } from "../ui/button";

const servicesData = [
  {
    id: "social-media",
    icon: Share2,
    title: "إدارة السوشيال ميديا",
    description:
      "خدمات لإدارة وتطوير حساباتك على منصات التواصل الاجتماعي باحترافية.",
    cards: [
      {
        id: "reports",
        title: "تقارير وتحليل الأداء",
        description:
          "تقارير دورية توضح أداء الحسابات وتحليل النتائج وإخراج تحسينات الفترة.",
        price: 1000,
      },
      {
        id: "content-design",
        title: "محتوى وتصميم",
        description:
          "إنشاء محتوى إبداعي وتصميمات جذابة تناسب هوية علامتك التجارية.",
        price: 2000,
      },
      {
        id: "monthly-accounts",
        title: "إدارة حسابات شهرية",
        description:
          "إدارة كاملة لحساباتك تشمل النشر، المتابعة، والرد على التعليقات.",
        price: 3000,
      },
    ],
  },
  {
    id: "design-marketing",
    icon: Image,
    title: "التصميم والتسويق البصري",
    description: "حلول تصميم احترافية تعكس هوية علامتك وتزيد من قوة حضورك.",
    cards: [
      {
        id: "motion-graphics",
        title: "موشن جرافيك",
        description:
          "فيديوهات موشن جرافيك توضح أفكارك بصيغة جذابة لجذب الانتباه.",
        price: 3500,
      },
      {
        id: "brand-identity",
        title: "هوية بصرية كاملة",
        description:
          "تصميم لوجو وهوية متكاملة تعبر عن علامتك التجارية باحترافية.",
        price: 5000,
      },
      {
        id: "social-posts-design",
        title: "تصميم بوستات سوشيال",
        description:
          "تصميمات جذابة ومتناسقة مع الهوية البصرية للمنشورات اليومية.",
        price: 1200,
      },
    ],
  },
  {
    id: "content-writing",
    icon: Type,
    title: "كتابة المحتوى",
    description: "محتوى احترافي يخاطب جمهورك ويحقق أهدافك التسويقية.",
    cards: [
      {
        id: "website-content",
        title: "محتوى مواقع إلكترونية",
        description: "كتابة محتوى احترافي للمواقع يعكس هوية النشاط.",
        price: 2500,
      },
      {
        id: "ad-content",
        title: "محتوى إعلاني",
        description: "نصوص إعلانية قوية تساعد على زيادة المبيعات.",
        price: 1500,
      },
      {
        id: "social-content",
        title: "محتوى سوشيال ميديا",
        description: "كتابة محتوى إبداعي مناسب لمنصات التواصل الاجتماعي.",
        price: 1000,
      },
    ],
  },
  {
    id: "paid-ads",
    icon: Megaphone,
    title: "الإعلانات الممولة",
    description: "حملات إعلانية مدروسة لتحقيق أفضل نتائج بأقل تكلفة.",
    cards: [
      {
        id: "retargeting",
        title: "إعادة الاستهداف",
        description:
          "حملات مخصصة لاستهداف العملاء المهتمين سابقًا بخدماتك.",
        price: 1500,
      },
      {
        id: "google-ads",
        title: "إعلانات جوجل",
        description:
          "حملات بحث وشبكة إعلانية للوصول لعملاء جاهزين للشراء.",
        price: 3000,
      },
      {
        id: "fb-ig-ads",
        title: "إعلانات فيسبوك وإنستجرام",
        description:
          "إنشاء وإدارة حملات إعلانية تستهدف جمهورك بدقة.",
        price: 2500,
      },
    ],
  },
  {
    id: "seo-services",
    icon: Search,
    title: "تحسين محركات البحث (SEO)",
    description: "تصدّر نتائج البحث وزوّد ظهور موقعك بشكل طبيعي ومستمر.",
    cards: [
      {
        id: "technical-seo",
        title: "السيو التقني",
        description:
          "فحص وتحسين بنية الموقع التقنية لرفع ترتيبه في محركات البحث.",
        price: 2000,
      },
      {
        id: "content-seo",
        title: "سيو المحتوى",
        description:
          "تحسين المحتوى والكلمات المفتاحية لزيادة الزيارات العضوية.",
        price: 1800,
      },
      {
        id: "backlinks",
        title: "بناء الروابط الخلفية",
        description:
          "بناء روابط قوية وموثوقة لرفع مصداقية الموقع لدى جوجل.",
        price: 2200,
      },
    ],
  },
];

const SECTIONS_PER_PAGE = 4;

const ServiceCard = ({ Icon, card }) => {
  return (
    <div className="bg-white border border-[#CACACA] rounded-2xl p-5 flex flex-col gap-3 text-right">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg  text-primary">
        <Icon size={20} />
      </span>

      <h4 className="text-base font-medium text-main">{card.title}</h4>

      <p className="text-sm text-gray leading-relaxed flex-1 mb-4">
        {card.description}
      </p>

      <p className="text-sm font-semibold text-main">
        {card.price} $ / شهر
      </p>

      <Button className="cursor-pointer py-4.5 mt-1 bg-secondary hover:bg-secondary/90 text-white text-sm font-medium rounded-lg">
        عرض التفاصيل
      </Button>
    </div>
  );
};

const ServicesPage = () => {
  const [page, setPage] = useState(1);

  // الباجنيشن هنا على مستوى السيكشانز نفسها (كل صفحة فيها عدد سيكشانز محدد)
  const totalPages = Math.ceil(servicesData.length / SECTIONS_PER_PAGE);
  const startIdx = (page - 1) * SECTIONS_PER_PAGE;
  const visibleSections = servicesData.slice(
    startIdx,
    startIdx + SECTIONS_PER_PAGE,
  );

  return (
    <section className="lg:py-16 py-8" id="services">
      <CustomContainer>
        {visibleSections.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.id} className="mb-12 text-right">
              <h3 className="text-xl font-semibold text-main">
                {section.title}
              </h3>
              <p className="text-sm text-gray mt-1 mb-6">
                {section.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {section.cards.map((card) => (
                  <ServiceCard key={card.id} Icon={Icon} card={card} />
                ))}
              </div>
            </div>
          );
        })}

        {/* ===== Pagination واحدة بس تحت كل السيكشانز ===== */}
        {totalPages > 1 && (
          <div
            className="flex items-center justify-center gap-1 mt-8"
            dir="ltr"
          >
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="w-9 h-9 flex items-center justify-center rounded-md text-gray hover:bg-gray-100 disabled:opacity-40"
              disabled={page === 1}
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  className={`w-9 h-9 flex items-center justify-center rounded-md text-sm ${
                    page === pageNumber
                      ? "bg-primary text-white"
                      : "text-gray hover:bg-gray-100"
                  }`}
                >
                  {pageNumber}
                </button>
              ),
            )}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="w-9 h-9 flex items-center justify-center rounded-md text-gray hover:bg-gray-100 disabled:opacity-40"
              disabled={page === totalPages}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </CustomContainer>
    </section>
  );
};

export default ServicesPage;