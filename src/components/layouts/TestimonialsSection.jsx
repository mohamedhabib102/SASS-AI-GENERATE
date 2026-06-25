import React, { useMemo, useState } from "react";
import { useLang } from "@/hooks/lang/useLang";
import CustomContainer from "../shared/CustomContainer";
import CustomTitle from "../shared/CustomTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import Animate from "@/animations/Animate";

const TestimonialsSection = () => {
  const { t, lang } = useLang();
  const isRtl = lang === "ar";

  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const testimonials = useMemo(
    () => [
      {
        id: 1,
        name: "أحمد حسن",
        comment:
          "المنصة فرّقت معايا جدا في تنظيم الشغل والمتابعة، كل حاجة بقت واضحة وسريعة.",
        rating: 5,
        avatar: "/images/user1.jpg",
      },
      {
        id: 2,
        name: "سارة أحمد",
        comment: "التجربة مريحة وسريعة، حاسة إن الشغل بقى منظم ومفيش لخبطة.",
        rating: 5,
        avatar: "/images/user2.jpg",
      },
      {
        id: 3,
        name: "أحمد ابراهيم",
        comment: "أداة عملية جداً، استخدمناها مع الفريق ووفرت وقت كبير.",
        rating: 5,
        avatar: "/images/user3.jpg",
      },
      {
        id: 4,
        name: "عمر خالد",
        comment: "أكتر حاجة عجبتني إن كل الملاحظات بتوصل واضحة ومن غير تكرار.",
        rating: 5,
        avatar: "/images/user4.jpg",
      },
      {
        id: 5,
        name: "ليلي محمود",
        comment:
          "منصة ذكية وبسيطة، محتاجة شوية إضافات صغيرة بس التجربة ممتازة.",
        rating: 5,
        avatar: "/images/user1.jpg",
      },
      {
        id: 6,
        name: "نورهان علي",
        comment:
          "سهلة في التعلم وسريعة الاستخدام، وده فرق معايا في الشغل اليومي.",
        rating: 5,
        avatar: "/images/user2.jpg",
      },
      {
        id: 7,
        name: "محمد سامي",
        comment:
          "خدمة عملاء سريعة ومحترفة، حسيت إن فيه فريق فعلاً بيتابع معايا.",
        rating: 5,
        avatar: "/images/user3.jpg",
      },
      {
        id: 8,
        name: "ياسمين عادل",
        comment: "كل الطلبات بقت في مكان واحد، سهلّت عليا تتبع كل حاجة بسهولة.",
        rating: 4,
        avatar: "/images/user2.jpg",
      },
      {
        id: 9,
        name: "كريم صلاح",
        comment: "أسعار مناسبة وجودة عالية، وده اللي خلاني أستمر معاهم.",
        rating: 5,
        avatar: "/images/user4.jpg",
      },
      {
        id: 10,
        name: "هدى إبراهيم",
        comment: "التقارير واضحة جداً وبتوصلني في وقتها، حسيت بشفافية كاملة.",
        rating: 5,
        avatar: "/images/user2.jpg",
      },
      {
        id: 11,
        name: "خالد منصور",
        comment: "تجربة استخدام سلسة، وفريق الدعم بيرد بسرعة على أي استفسار.",
        rating: 4,
        avatar: "/images/user3.jpg",
      },
      {
        id: 12,
        name: "مريم طارق",
        comment: "نتايج فعلية وملموسة من أول شهر، وده اللي خلاني أثق في الخدمة.",
        rating: 5,
        avatar: "/images/user4.jpg",
      },
    ],
    [],
  );

  return (
    <section
      className="relative lg:py-16 py-8 bg-[#F5F5F5] overflow-hidden"
      id="testimonials"
    >
      <CustomContainer>
        <Animate direction="up">

        <CustomTitle
          title={t("home.testimonials.sectionTitle")}
          description={t("home.testimonials.sectionDescription")}
          showLine={true}
          />
          </Animate>

        {/* Testimonials Slider */}
        <div className="relative mt-8 md:mt-10  max-w-5xl mx-auto" dir={isRtl ? "rtl" : "ltr"}>
          <Swiper
            modules={[Navigation, Grid]}
            key={isRtl ? "rtl" : "ltr"}
            dir={isRtl ? "rtl" : "ltr"}
            slidesPerView={1}
            slidesPerGroup={1}
            navigation={{
              prevEl,
              nextEl,
            }}
            spaceBetween={13}
            breakpoints={{
              768: {
                slidesPerView: 3,
                slidesPerGroup: 6,
                grid: { rows: 2, fill: "row" },
                spaceBetween: 18,
              },
            }}
          >
            {testimonials.map(({ id, name, comment, rating, avatar, idx }) => (
              <SwiperSlide key={id} className="h-auto">
                <Animate direction="up" delay={idx * 0.15} 
                className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 flex flex-col gap-4 h-full">
                    {/* Rating */}
                  <div
                    className={`flex items-center justify-start gap-1 ${isRtl ? "justify-end" : "justify-start"}`}
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={`h-3.5 w-3.5 ${
                          index < rating
                            ? "fill-[#FDC776] text-[#FDC776]"
                            : "fill-transparent text-gray-300"
                        }`}
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p
                    className={`text-[#696868] text-sm leading-relaxed mb-12 ${isRtl ? "text-right" : "text-left"}`}
                  >
                    “{comment}”
                  </p>

                  <hr className="border-[#8A8A8A]" />

                  {/* Client Info */}
                  <div
                    className={`flex items-center gap-3 ${isRtl ? "flex-row-reverse justify-end" : "flex-row"}`}
                  >
                    <img
                      src={avatar}
                      alt={name}
                      className="w-8 h-8 rounded-full object-cover shrink-0 bg-gray-100"
                    />
                    <h4 className="text-sm font-bold text-[#111827]">{name}</h4>
                  </div>
                </Animate>

              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={setPrevEl}
            aria-label={t("home.testimonials.prevSlide")}
            className="absolute top-1/2 -right-16 lg:flex hidden -translate-y-1/2 z-10 w-13 h-13 rounded-full border border-gray-300 bg-white items-center justify-center text-primary transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <button
            ref={setNextEl}
            aria-label={t("home.testimonials.nextSlide")}
            className="lg:flex hidden absolute top-1/2 -left-16 -translate-y-1/2 z-10 w-13 h-13 rounded-full border border-gray-300 bg-white items-center justify-center text-primary transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>
      </CustomContainer>
    </section>
  );
};

export default TestimonialsSection;