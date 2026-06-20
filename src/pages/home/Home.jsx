import Header from "@/components/layouts/Header";
import HeroSection from "@/components/layouts/HeroSection";
import AboutUsSection from "@/components/layouts/AboutUsSection";
import ServicesSection from "@/components/layouts/ServicesSection";

const Home = () => {
  return (
    <section>
        <Header />
        <HeroSection/>
        <AboutUsSection />
        <ServicesSection />
    </section>
  );
};
export default Home;
