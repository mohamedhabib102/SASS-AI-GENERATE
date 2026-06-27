import HeroSection from "@/components/sections/HeroSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FaqSection from "@/components/sections/FaqSection";
import ServiceManagementSection from "@/components/sections/ServiceManagementSection ";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

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
