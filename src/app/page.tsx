import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import GallerySection from '@/components/gallery-section';
import Footer from '@/components/footer';
import AnimatedSection from '@/components/animated-section';
import CtaSection from '@/components/cta-section';
import StickyEnquireButton from '@/components/sticky-enquire-button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AnimatedSection>
          <ServicesSection />
        </AnimatedSection>
        <AnimatedSection>
          <GallerySection />
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
