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
  const { i18n } = useTranslation();

  const changeLanguage = (lang, dir) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    //provide ar, en
    document.body.dir = dir;
    document.body.lang = lang;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-12.5 h-6 cursor-pointer">
        <Button size="icon" className="gap-2 bg-transparent border-none hover:bg-transparent">
          <Globe className="h-5! w-5!" />
          <ChevronDown className=" opacity-80" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40 bg-secondary">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            dir={lang.dir}
            onClick={() => changeLanguage(lang.code, lang.dir)}
            className="flex items-center gap-2 cursor-pointer text-white"
          >
            <Globe className="h-4 w-4 text-muted-foreground" />
            <span className="flex-1 text-right">{lang.label}</span>
            {i18n.language === lang.code && (
              <Check className="h-4 w-4 text-emerald-500" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
