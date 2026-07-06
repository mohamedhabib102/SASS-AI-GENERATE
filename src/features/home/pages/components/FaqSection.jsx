import { useState } from "react";
import { useLang } from "@/hooks/useLang";
import CustomContainer from "../../../../components/shared/CustomContainer";
import FaqItem from "../../../../components/ui/FaqItem";
import { useInView } from "react-intersection-observer";
import { useQuestion } from "../../hooks/useQuetion";

export default function FaqSection() {
  const { t, lang } = useLang();
  const isRtl = lang === "ar";
  const [openIndex, setOpenIndex] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "300px",
});

  const { data } = useQuestion({
    enabled: inView,
  });

  const faqsArray = Array.isArray(data) ? data : data?.data || [];
  const questions = faqsArray.map((item) => ({
    title: lang === "ar" ? item.question_ar : item.question_en,
    description: lang === "ar" ? item.answer_ar : item.answer_en,
    id: item.id
  }));

  console.log(data)

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section ref={ref} className="w-full bg-gray-50 lg:py-16 py-8">
      <CustomContainer>
        <h2
          className={`mb-6 lg:text-2xl text-xl font-bold text-main`}
        >
          {t("faq.sectionTitle")}
        </h2>

        <div className="flex flex-col gap-3">
          {questions.map((item, index) => (
            <FaqItem
              key={item.title}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </CustomContainer>
    </section>
  );
}