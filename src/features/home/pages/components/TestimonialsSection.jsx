import React, { useMemo, useState } from "react";
import { useLang } from "@/hooks/lang/useLang";
import CustomContainer from "../../../../components/shared/CustomContainer";
import CustomTitle from "../../../../components/shared/CustomTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import Animate from "@/animations/Animate";
import useGetFeedbacks from "../../hooks/useGetFeedbacks";
import Loading from "@/components/shared/Loading";
import Empty from "@/components/shared/Empty";
import { useInView } from "react-intersection-observer";

const TestimonialsSection = () => {
  const { t, lang } = useLang();
  const isRtl = lang === "ar";

  const { ref, inView } = useInView({
      triggerOnce: true,
      rootMargin: "300px",
  });
  
  const { feedbacks, isLoading ,setPage,page} = useGetFeedbacks({ enabled: inView });



  return (
    <section
    ref={ref}
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
        {
        isLoading ?
        <Loading size={45} color="#4f46e5"/>
        :
        <div className="relative mt-8 md:mt-10  max-w-5xl mx-auto" dir={isRtl ? "rtl" : "ltr"}>
          {
            feedbacks?.data?.length === 0 ?
            <Empty text={'Testimonials'}/>
            :
            <Swiper
            modules={[Navigation, Grid]}
            key={isRtl ? "rtl" : "ltr"}
            dir={isRtl ? "rtl" : "ltr"}
            slidesPerView={1}
            slidesPerGroup={1}
            // navigation={{
            //   page
            // }}
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
            {feedbacks?.data?.map(({ id, name, description, rate, avatar, idx }) => (
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
                    className={`text-[#696868] text-sm leading-relaxed mb-12 ${isRtl ? "text-right" : "text-left"}`}
                  >
                    “{description}”
                  </p>

                  <hr className="border-[#8A8A8A]" />

                  {/* Client Info */}
                  <div
                    className={`flex items-center gap-3 ${isRtl ? "flex-row-reverse justify-end" : "flex-row"}`}
                  >
                    <img
                      src={avatar || '/default-pic.jpeg'}
                      alt={name}
                      className="w-8 h-8 rounded-full object-cover shrink-0 bg-gray-100"
                    />
                    <h4 className="text-sm font-bold text-[#111827]">{name}</h4>
                  </div>
                </Animate>

              </SwiperSlide>
            ))}
            </Swiper>
          }
          <button
            onClick={()=> setPage(old => old+1)}
            disabled={page === feedbacks?.total}
            aria-label={t("home.testimonials.prevSlide")}
            className="absolute top-1/2 -right-16 lg:flex hidden -translate-y-1/2 z-10 w-13 h-13 rounded-full border border-gray-300 bg-white items-center justify-center text-primary transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <button
            onClick={()=> setPage(old => old-1)}
            disabled={page === 1}
            aria-label={t("home.testimonials.nextSlide")}
            className="lg:flex hidden absolute top-1/2 -left-16 -translate-y-1/2 z-10 w-13 h-13 rounded-full border border-gray-300 bg-white items-center justify-center text-primary transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>

        }
      </CustomContainer>
    </section>
  );
};

export default TestimonialsSection;