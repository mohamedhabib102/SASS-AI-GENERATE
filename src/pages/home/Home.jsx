import HeroSection from "@/components/layouts/HeroSection";
import AboutUsSection from "@/components/layouts/AboutUsSection";
import ServicesSection from "@/components/layouts/ServicesSection";
import FaqSection from "@/components/layouts/FaqSection";
import ServiceManagementSection from "@/components/layouts/ServiceManagementSection ";
import TestimonialsSection from "@/components/layouts/TestimonialsSection";

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
