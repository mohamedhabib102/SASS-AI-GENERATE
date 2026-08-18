import CustomContainer from "@/components/shared/CustomContainer";
import { useLang } from "@/hooks/useLang";
import Animate from "@/animations/Animate";
import useHeroAbout from "@/features/about/hooks/useHeroAbout";
import Loading from "@/components/shared/Loading";

const AboutHero = () => {
  const { t } = useLang();
  const { data: res, isLoading, isError } = useHeroAbout();

  const heroData = res?.data;
  const bgImage = heroData?.background_image ?? "/images/about-hero.jpg";
  const title = heroData?.title || t("aboutPage.hero.title");
  const description = heroData?.description || t("aboutPage.hero.description");

  return (
    <section className="relative flex items-center justify-center min-h-120 md:min-h-137.5 lg:min-h-[600px] w-full text-white py-16 overflow-hidden">
      {/* Background Image - always visible */}
      <img
        src={bgImage}
        alt="About Hero Background"
        onError={(e) => { e.target.src = '/images/about-hero.jpg' }}
        className="absolute inset-0 w-full h-full object-cover z-0"
        loading="eager"
      />

      {/* Gradient Overlay */}
      <div className="absolute bg-[linear-gradient(0deg,rgba(0,0,0,0.40)_0%,rgba(0,0,0,0.40)_100%),linear-gradient(0deg,rgba(255,255,233,0.30)_0%,rgba(255,255,233,0.30)_100%),linear-gradient(0deg,rgba(0,0,0,0.30)_0%,rgba(0,0,0,0.30)_100%)] z-10 w-full h-full top-0 left-0" />

      <CustomContainer className="relative z-20">
        {isLoading ? (
          <div className="flex justify-center items-center py-16">
            <Loading color="#ffffff" size={35} />
          </div>
        ) :  (
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <Animate direction="up" triggerOn="mount" duration={0.6}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight lg:leading-[1.2] mb-6 drop-shadow-md">
                {title}
              </h1>
            </Animate>

            <Animate direction="up" triggerOn="mount" duration={0.6} delay={0.2}>
              <p className="text-white/95 text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl whitespace-pre-line drop-shadow-sm font-light">
                {description}
              </p>
            </Animate>
          </div>
        )}
      </CustomContainer>
    </section>
  );
};

export default AboutHero;