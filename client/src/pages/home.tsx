import HeroSection from "@/components/home/hero-section";
import VisionSection from "@/components/home/vision-section";
import ServicesSection from "@/components/home/services-section";
import CompanyInfo from "@/components/home/company-info";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <VisionSection />
      <ServicesSection />
      <CompanyInfo />
    </div>
  );
}
