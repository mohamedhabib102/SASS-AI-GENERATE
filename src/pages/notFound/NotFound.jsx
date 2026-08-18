import { Link } from "react-router-dom";
import { useLang } from "@/hooks/useLang";
import { Button } from "@/components/ui/button";
import CustomContainer from "@/components/shared/CustomContainer";
import { Home } from "lucide-react";

const NotFound = () => {
  const { lang, t } = useLang();

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-gray-50/50">
      <CustomContainer>
        <div className="flex flex-col items-center text-center max-w-lg mx-auto">
          {/* 404 Visual */}
          <div className="relative mb-8">
            <h1 className="text-9xl font-black text-primary/10 tracking-tighter">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-main">
                {t("notFound.oops")}
              </span>
            </div>
          </div>

          {/* Text Content */}
          <h2 className="text-2xl font-bold text-main mb-4">
            {t("notFound.title")}
          </h2>
          <p className="text-desc text-md mb-8 leading-relaxed">
            {t("notFound.description")}
          </p>

          {/* Action Button */}
          <Button asChild className="px-8 py-6 rounded-full font-semibold text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
            <Link to={`/${lang}`} className="flex items-center gap-2">
              <Home size={20} />
              {t("notFound.backHome")}
            </Link>
          </Button>
        </div>
      </CustomContainer>
    </section>
  );
};

export default NotFound;
