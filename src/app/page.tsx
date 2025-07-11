import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import Footer from '@/components/footer';
import AnimatedSection from '@/components/animated-section';
import StickyEnquireButton from '@/components/sticky-enquire-button';
import KeyBenefitsSection from '@/components/key-benefits-section';
import ProductTypesSection from '@/components/product-types-section';
import WhyChooseUsSection from '@/components/why-choose-us-section';
import IdealApplicationsSection from '@/components/ideal-applications-section';
import FaqSection from '@/components/faq-section';
import CtaSection from '@/components/cta-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AnimatedSection>
          <KeyBenefitsSection />
        </AnimatedSection>
        <AnimatedSection>
          <ProductTypesSection />
        </AnimatedSection>
        <AnimatedSection>
          <WhyChooseUsSection />
        </AnimatedSection>
        <AnimatedSection>
          <IdealApplicationsSection />
        </AnimatedSection>
        <AnimatedSection>
          <FaqSection />
        </AnimatedSection>
        <AnimatedSection>
          <CtaSection />
        </AnimatedSection>
      </main>
      <Footer />
      <StickyEnquireButton />
    </div>
  );
}
