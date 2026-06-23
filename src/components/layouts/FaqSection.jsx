
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    title: "هل استخدام المنصة سهل للمبتدائين؟",
    description:
      "نعم، المنصة مصممة بواجهه بسيطة وواضحة تجعل أي شخص يقدر يستخدمها بدون خبرة سابقة.",
  },
  {
    title: "هل بياناتي آمنة؟",
    description:
      "نعم، بياناتك محمية بأعلى معايير الأمان والتشفير المعتمدة في الصناعة.",
  },
  {
    title: "هل أقدر أضيف أعضاء للفريق؟",
    description:
      "بكل تأكيد، يمكنك دعوة أعضاء فريقك وتحديد صلاحياتهم بسهولة من لوحة التحكم.",
  },
  {
    title: "هل يمكن استخدام المنصة على أكتر من جهاز؟",
    description:
      "أكيد، المنصة متوافقة مع جميع الأجهزة ويمكنك تسجيل الدخول من أي مكان.",
  },
  {
    title: "هل يمكن التحكم في صلاحيات المستخدمين؟",
    description:
      "نعم، يمكنك تخصيص صلاحيات كل مستخدم حسب دوره داخل الفريق.",
  },
  {
    title: "هل يتوفر دعم في حالة وجود مشكلة؟",
    description:
      "نعم، فريق الدعم متاح على مدار الساعة لمساعدتك في أي استفسار أو مشكلة.",
  },
];
////////////
function FaqItem({ item, index, isOpen, onToggle }) {
  return (
    <div
      className={`border rounded-xl transition-all ${
        isOpen
          ? "border-indigo-200 bg-white shadow-md"
          : "border-gray-200 bg-white"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-right"
      >
        <ChevronDown
          className={`shrink-0 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-indigo-500" : ""
          }`}
          size={18}
        />
        <span className="flex-1 text-right font-medium text-gray-800">
          {item.title}
        </span>
        <span
          className={`shrink-0 rounded-md px-2 py-0.5 text-xs font-semibold ${
            isOpen ? "bg-indigo-500 text-white" : "bg-gray-100 text-gray-400"
          }`}
        >
          Q{index + 1}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="px-5 pb-4 pt-0 text-sm leading-relaxed text-gray-500 text-right">
          {item.description}
        </p>
      </div>
    </div>
  );
}
/////////
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="w-full bg-gray-50 py-12 px-4" lang="ar">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-xl font-bold text-gray-900 text-right">
          الأسئلة الشائعة
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
      </div>
    </section>
  );
}


