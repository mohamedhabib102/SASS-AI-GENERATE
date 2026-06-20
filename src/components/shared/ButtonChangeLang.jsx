import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

// Lang
const LANGUAGES = [
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "en", label: "English", dir: "ltr" },
];

export default function ButtonChangeLang() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language

  const changeLanguage = (lang, dir) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    // Set both HTML and body element directions
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    document.body.dir = dir;
    document.body.lang = lang;
  };

  const isRtl = i18n.language === "ar";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-12.5 h-6 cursor-pointer">
        <Button size="icon" className="gap-2 bg-transparent border-none hover:bg-transparent shadow-none focus-visible:ring-0">
          <Globe className="h-5! w-5!" />
          <ChevronDown className=" opacity-80" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40 bg-white" dir={isRtl ? "rtl" : "ltr"}>
        {LANGUAGES.map((item) => (
          <DropdownMenuItem
            key={item.code}
            onClick={() => changeLanguage(item.code, item.dir)}
            className="flex items-center gap-2 cursor-pointer text-black"
          >
            {/* <Globe className="h-4 w-4 text-muted-foreground" /> */}
            <span className="flex-1 text-start">{t(`languages.${item.code}`)}</span>
            {i18n.language === item.code && (
              <Check className="h-4 w-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
