import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Ruler, SlidersHorizontal, Gem, ShieldCheck, Maximize, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <Ruler className="w-12 h-12 text-primary" />,
    title: 'Customizable Designs',
    description: 'Tailor-made designs to suit any décor and architectural style.',
  },
  {
    icon: <SlidersHorizontal className="w-12 h-12 text-primary" />,
    title: 'Smooth, Silent Mechanisms',
    description: 'Experience effortless operation with our high-quality sliding systems.',
  },
  {
    icon: <Gem className="w-12 h-12 text-primary" />,
    title: 'Premium Material Options',
    description: 'Choose from a wide range of glass, aluminum, and wood finishes.',
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-primary" />,
    title: 'Enhanced Privacy & Acoustic Insulation',
    description: 'Our doors provide excellent soundproofing and visual privacy.',
  },
  {
    icon: <Maximize className="w-12 h-12 text-primary" />,
    title: 'Space-Saving Systems',
    description: 'Including pocket and ghost door systems to maximize your floor space.',
  },
  {
    icon: <Wrench className="w-12 h-12 text-primary" />,
    title: 'Professional Installation',
    description: 'Expert installation and reliable after-sales support guaranteed.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">Maximize Space, Elevate Style</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our Sliding Partition Door Solutions include:
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="bg-background border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 text-center">
              <CardHeader className="items-center p-6">
                {service.icon}
                <CardTitle className="mt-4 font-headline text-xl">{service.title}</CardTitle>
                <CardDescription className="mt-2 text-base text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
