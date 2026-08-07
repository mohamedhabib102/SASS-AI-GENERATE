import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import { cn } from "@/lib/utils";

// Lang
const LANGUAGES = [
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "en", label: "English", dir: "ltr" },
];

export default function ButtonChangeLang({ className, align }) {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (newLang, dir) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);

    document.documentElement.dir = dir;
    document.documentElement.lang = newLang;
    document.body.dir = dir;

    // تغيير اللغة في الـ URL
    const currentPath = location.pathname;

    // يشيل اللغة القديمة لو موجودة
    const pathWithoutLang = currentPath.replace(/^\/(ar|en)/, "");

    navigate(`/${newLang}${pathWithoutLang || ""}`);
  };

  const isRtl = i18n.language === "ar";
  const defaultAlign = isRtl ? "end" : "start";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Button
          size="icon"
          className={cn(
            "gap-2 bg-transparent border-none hover:bg-transparent shadow-none focus-visible:ring-0",
            className
          )}
        >
          <Globe className="h-5 w-5" />
          <ChevronDown className="h-4 w-4 opacity-80" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align={align || defaultAlign}
        className="w-40 bg-white z-[9999] border-border shadow-lg"
        dir={isRtl ? "rtl" : "ltr"}
      >
        {LANGUAGES.map((item) => (
          <DropdownMenuItem
            key={item.code}
            onClick={() => changeLanguage(item.code, item.dir)}
            className="flex items-center gap-2 cursor-pointer text-main font-medium"
          >
            <span className="flex-1 text-start">
              {t(`languages.${item.code}`, { defaultValue: item.label })}
            </span>

            {i18n.language === item.code && (
              <Check className="h-4 w-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}