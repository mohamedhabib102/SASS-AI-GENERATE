import React, { useMemo, useRef } from "react";
import { useLang } from "@/hooks/lang/useLang";
import CustomContainer from "../shared/CustomContainer";
import CustomTitle from "../shared/CustomTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const TestimonialsSection = () => {
  const { t, lang } = useLang();
  const isRtl = lang === "ar";

  const prevRef = useRef(null);
  const nextRef = useRef(null);


  const testimonialSlides = useMemo(
    () => ({
      slide1: [
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
          comment:
            "التجربة مريحة وسريعة، حاسة إن الشغل بقى منظم ومفيش لخبطة.",
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
      ],
      slide2: [
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
          comment:
            "كل الطلبات بقت في مكان واحد، سهلّت عليا تتبع كل حاجة بسهولة.",
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
    }),
    [],
  );

  const slidesList = Object.values(testimonialSlides);

  return (
    <section
      className="relative py-16 md:py-24 bg-[#F5F5F5] overflow-hidden"
      id="testimonials"
    >
      <CustomContainer>
        <CustomTitle
          title={t("home.testimonials.sectionTitle")}
          description={t("home.testimonials.sectionDescription")}
        />

        {/* Testimonials Slider */}
        <div className="relative mt-8 md:mt-10" dir={isRtl ? "rtl" : "ltr"}>
          <Swiper
            modules={[Navigation]}
            key={isRtl ? "rtl" : "ltr"}
            dir={isRtl ? "rtl" : "ltr"}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            spaceBetween={24}
          >
            {slidesList.map((slideCards, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div
                  className="
                    flex md:grid overflow-x-auto md:overflow-visible
                    snap-x snap-mandatory md:snap-none
                    grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                    gap-5 md:gap-6
                    [-ms-overflow-style:none] scrollbar-none
                    [&::-webkit-scrollbar]:hidden
                  "
                >
                  {slideCards.map(({ id, name, comment, rating, avatar }) => (
                    <div
                      key={id}
                      className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 flex flex-col gap-4 shrink-0 w-full snap-start md:shrink md:w-auto"
                    >
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
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={prevRef}
            aria-label={t("home.testimonials.prevSlide")}
            className="flex absolute top-1/2 -right-18 -translate-y-1/2 z-10 w-13 h-13 rounded-full border border-gray-300 bg-white items-center justify-center text-primary transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <button
            ref={nextRef}
            aria-label={t("home.testimonials.nextSlide")}
            className="flex absolute top-1/2 -left-18 -translate-y-1/2 z-10 w-13 h-13 rounded-full border border-gray-300 bg-white items-center justify-center text-primary transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>
      </CustomContainer>
    </section>
  );
};

export default TestimonialsSection;