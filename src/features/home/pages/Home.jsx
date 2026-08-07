import HeroSection from "@/features/home/pages/components/HeroSection";
import AboutUsSection from "@/features/home/pages/components/AboutUsSection";
import ServicesSection from "@/features/home/pages/components/ServicesSection";
import FaqSection from "@/features/home/pages/components/FaqSection";
import ServiceManagementSection from "@/features/home/pages/components/ServiceManagementSection ";
import TestimonialsSection from "@/features/home/pages/components/TestimonialsSection";

const Home = () => {
  return (
    <>
        <HeroSection/>
        <AboutUsSection />
        <ServicesSection />
        <ServiceManagementSection/>
        <TestimonialsSection/>
        <FaqSection/>
    </>
  );
};
export default Home;
