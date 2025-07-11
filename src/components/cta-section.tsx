import { Button } from '@/components/ui/button';

export default function CtaSection() {
  return (
    <section id="cta" className="py-20 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">
          Ready to Transform Your Space?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Let's create an interior that combines elegance and functionality. Get in touch with our design experts today.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
