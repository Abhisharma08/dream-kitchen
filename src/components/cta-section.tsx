import { Button } from '@/components/ui/button';

export default function CtaSection() {
  return (
    <section className="py-20 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center">
            <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">
            Ready to elevate your workspace with style, privacy, and productivity?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Contact us now for a free project estimate and expert space consultation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="#home">Request a Free Consultation</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <a href="#">Download Product Brochure</a>
            </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
