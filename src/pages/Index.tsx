import { HeroSection } from '@/components/landing/HeroSection';
import { TrustBar } from '@/components/landing/TrustBar';
import { AboutSection } from '@/components/landing/AboutSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { WhyMeSection } from '@/components/landing/WhyMeSection';
import { CtaSection } from '@/components/landing/CtaSection';
import { ContactSection } from '@/components/landing/ContactSection';
import { StickyWhatsApp } from '@/components/landing/StickyWhatsApp';
import { LandingHeader } from '@/components/landing/LandingHeader';
import { LandingFooter } from '@/components/landing/LandingFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <WhyMeSection />
        <CtaSection />
        <ContactSection />
      </main>
      <LandingFooter />
      <StickyWhatsApp />
    </div>
  );
};

export default Index;
