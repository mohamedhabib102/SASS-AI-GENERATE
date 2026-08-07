import React, { useState } from "react";
import { useLang } from "@/hooks/useLang";
import CustomContainer from "@/components/shared/CustomContainer";
import TitleServices from "./TitleServices";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useGetFeedbacks from "@/features/home/hooks/useGetFeedbacks";
import Loading from "@/components/shared/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ServiceTestimonials = () => {
  const { t, lang } = useLang();
  const isRtl = lang === "ar";

  const { feedbacks, isLoading } = useGetFeedbacks();
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const fallbackReviews = [
    {
      id: "fallback-1",
      name: isRtl ? "أحمد ابراهيم" : "Ahmed Ibrahim",
      description: t("home.testimonials.review1Text"),
      rate: 5,
      avatar: "/images/user1.jpg",
    },
    {
      id: "fallback-2",
      name: isRtl ? "سارة أحمد" : "Sara Ahmed",
      description: t("home.testimonials.review2Text"),
      rate: 5,
      avatar: "/images/user2.jpg",
    },
    {
      id: "fallback-3",
      name: isRtl ? "أحمد حسن" : "Ahmed Hassan",
      description: t("home.testimonials.review3Text"),
      rate: 5,
      avatar: "/images/user3.jpg",
    },

        {
      id: "fallback-4",
      name: isRtl ? "أحمد حسن" : "Ahmed Hassan",
      description: t("home.testimonials.review3Text"),
      rate: 5,
      avatar: "/images/user3.jpg",
    },
  ];

  // Use all reviews from API if available, otherwise use fallback data
  const apiReviews = feedbacks?.data || [];
  const reviews = apiReviews.length > 0 ? apiReviews : fallbackReviews;

  // Handle slide transition next/prev
  const handlePrev = () => {
    if (swiperInstance) {
      if (isRtl) {
        swiperInstance.slideNext();
      } else {
        swiperInstance.slidePrev();
      }
    }
  };

  const handleNext = () => {
    if (swiperInstance) {
      if (isRtl) {
        swiperInstance.slidePrev();
      } else {
        swiperInstance.slideNext();
      }
    }
  };

  const updateNavigationState = (swiper) => {
    // In RTL, Swiper's beginning/end might correspond to opposite sides
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <CustomContainer>
        {/* Section Header */}
        <TitleServices
          title={t("home.testimonials.sectionTitle")}
          description={t("home.testimonials.sectionDescription")}
        />

        {/* Reviews Container with Navigation Arrows */}
        {isLoading ? (
          <Loading size={45} color="#4f46e5" />
        ) : (
          <div className="relative max-w-5xl mx-auto px-4 md:px-12" dir={isRtl ? "rtl" : "ltr"}>
            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              disabled={isRtl ? isEnd : isBeginning}
              aria-label="Previous slide"
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 hidden md:flex items-center justify-center text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Swiper Slider */}
            <Swiper
              onSwiper={(swiper) => {
                setSwiperInstance(swiper);
                updateNavigationState(swiper);
              }}
              onSlideChange={(swiper) => {
                updateNavigationState(swiper);
              }}
              key={isRtl ? "rtl" : "ltr"}
              dir={isRtl ? "rtl" : "ltr"}
              slidesPerView={1}
              spaceBetween={24}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {reviews.map(({ id, name, description, rate, avatar }) => (
                <SwiperSlide key={id} className="h-auto py-2">
                  <div
                    className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 flex flex-col gap-4 shadow-sm h-full"
                  >
                    {/* Rating */}
                    <div
                      className={`flex items-center gap-1 ${isRtl ? "justify-end" : "justify-start"}`}
                    >
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className={`h-3.5 w-3.5 ${
                            index < rate
                              ? "fill-[#FDC776] text-[#FDC776]"
                              : "fill-transparent text-gray-300"
                          }`}
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>

                    {/* Comment */}
                    <p
                      className={`text-[#696868] text-sm leading-relaxed mb-12 flex-grow ${isRtl ? "text-right" : "text-left"}`}
                    >
                      &ldquo;{description}&rdquo;
                    </p>

                    <hr className="border-[#8A8A8A] mt-auto" />

                    {/* Client Info */}
                    <div
                      className={`flex items-center gap-3 ${isRtl ? "flex-row-reverse justify-end" : "flex-row"}`}
                    >
                      <img
                        src={avatar || "/default-pic.jpeg"}
                        alt={name}
                        onError={(e) => { e.target.src = '/default-pic.jpeg' }}
                        className="w-8 h-8 rounded-full object-cover shrink-0 bg-gray-100"
                      />
                      <h4 className="text-sm font-bold text-[#111827]">{name}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              disabled={isRtl ? isBeginning : isEnd}
              aria-label="Next slide"
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 hidden md:flex items-center justify-center text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-all duration-200 cursor-pointer"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        )}
      </CustomContainer>
    </section>
  );
};

export default ServiceTestimonials;
