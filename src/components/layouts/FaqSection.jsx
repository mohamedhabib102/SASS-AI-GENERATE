import { useState, useMemo } from "react";
import { useLang } from "@/hooks/lang/useLang";
import CustomContainer from "../shared/CustomContainer";
import FaqItem from "../ui/FaqItem";

export default function FaqSection() {
  const { t, lang } = useLang();
  const isRtl = lang === "ar";

  const [openIndex, setOpenIndex] = useState(0);

  const questions = useMemo(
    () => t("faq.questions", { returnObjects: true }),
    [t],
  );

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="w-full bg-gray-50 lg:py-16 py-8">
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