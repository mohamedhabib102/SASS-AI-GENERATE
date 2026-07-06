import Animate from "@/animations/Animate";
import { useLang } from "@/hooks/useLang";
import { ChevronDown } from "lucide-react";

export default function FaqItem({ item, index, isOpen, onToggle }) {
  const { lang } = useLang();
  const isAr = lang === "ar";
  return (
    <Animate
      direction="up"
      className={`border rounded-xl transition-all ${
        isOpen
          ? "border-indigo-200 bg-white shadow-md"
          : "border-gray-200 bg-white"
      }`}
      delay={index * 0.15}
    >
      <button
        onClick={onToggle}
        className="w-full flex flex-row-reverse items-center justify-between gap-3 px-5 py-4 text-right mb-2"
      >
        <ChevronDown
          className={`shrink-0 text-gray transition-transform duration-300 ${
            isOpen ? "rotate-180 text-gray" : ""
          }`}
          size={18}
        />
        <span
          className={`flex-1 ${isAr ? "text-right" : "text-left"} font-medium text-main`}
        >
          {item.title}
        </span>
        <span
          className={`shrink-0 rounded-xl w-9 h-9 flex justify-center items-center text-xs font-semibold ${
            isOpen ? "bg-primary text-white" : "bg-gray-100 text-gray-400"
          }`}
        >
          0{index + 1}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-70" : "max-h-0"
        }`}
      >
        <div className="relative px-7 pb-4 pt-0 text-sm leading-relaxed text-gray-500">
          <p className="relative">
            {item.description}
            <span
              className={`absolute w-1 h-full top-0 bg-secondary ${isAr ? "-right-2.5" : "-left-2.5"} rounded-full`}
            ></span>
          </p>
        </div>
      </div>
    </Animate>
  );
}
