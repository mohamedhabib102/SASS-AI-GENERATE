import { useState } from "react";
import { useLang } from "@/hooks/useLang";
import CustomContainer from "@/components/shared/CustomContainer";
import FaqItem from "@/components/ui/FaqItem";
import { useInView } from "react-intersection-observer";
import { useQuestion } from "@/features/home/hooks/useQuestion";

export default function FaqSection() {
  const { t, lang } = useLang();
  const [openIndex, setOpenIndex] = useState(0);

  const { ref, inView } = useInView({
    rootMargin: "300px",
  });


  const { data} = useQuestion({
    enabled: inView,
  });

  // API questions
  const apiQuestions = (data?.data ?? []).map((item) => ({
    title: item.question,
    description: item.answer,
    id: item.id,
  }));

  // Static fallback from translation file
  const staticQuestions = t("faq.questions", { returnObjects: true });

  // Use API data if available, otherwise fall back to static translations
  const questions = apiQuestions.length > 0
    ? apiQuestions
    : Array.isArray(staticQuestions)
    ? staticQuestions.map((q, i) => ({ ...q, id: i }))
    : [];

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
          {
            questions.map((item, index) => (
              <FaqItem
                key={item.id}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))
          }
        </div>
      </CustomContainer>
    </section>
  );
}