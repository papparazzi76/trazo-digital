import HeroSection from "@/components/sections/HeroSection";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import ServicesSection from "@/components/sections/ServicesSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsGallery />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
