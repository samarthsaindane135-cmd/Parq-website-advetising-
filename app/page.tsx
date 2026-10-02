import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DashboardSection from "@/components/DashboardSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import WhyParqSection from "@/components/WhyParqSection";
import RequestDemoSection from "@/components/RequestDemoSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. About PARQ - Short Section */}
      <AboutSection />

      {/* 4. Our Services (6 Cards) */}
      <ServicesSection />

      {/* 5. Dashboard Showcase */}
      <DashboardSection />

      {/* 7. How It Works (5 Steps) */}
      <HowItWorksSection />

      {/* 8. Benefits (4 Cards) */}
      <BenefitsSection />

      {/* 9. Why PARQ (6 Pillars) */}
      <WhyParqSection />

      {/* 10. Request Demo CTA */}
      <RequestDemoSection />

      {/* 13. Contact Preview */}
      <ContactSection />
    </>
  );
}
