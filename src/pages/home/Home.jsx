import Header from "@/components/layouts/Header";
import HeroSection from "@/components/layouts/HeroSection";
import AboutUsSection from "@/components/layouts/AboutUsSection";
import ServicesSection from "@/components/layouts/ServicesSection";
import FaqSection from "@/components/layouts/FaqSection";

const Home = () => {
  return (
    <section>
        <Header />
        <HeroSection/>
        <AboutUsSection />
        <ServicesSection />
        <FaqSection/>
    </section>
  );
};
export default Home;
