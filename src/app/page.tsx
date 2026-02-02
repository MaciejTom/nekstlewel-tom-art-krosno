import {
  NavSection,
  HeroSection,
  ProblemSection,
  ServicesSection,
  ProcessSection,
  WhyUsSection,
  PortfolioSection,
  FaqSection,
  ContactSection,
  FooterSection,
  BackToTop,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <NavSection />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <ProcessSection />
        <WhyUsSection />
        <PortfolioSection />
        <FaqSection />
        <ContactSection />
      </main>
      <FooterSection />
      <BackToTop />
    </>
  );
}
