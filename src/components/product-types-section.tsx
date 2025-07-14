import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, CheckCircle } from 'lucide-react';

const products = [
  {
    name: 'Single-Glazed Partitions',
    description: 'Sleek, transparent, and cost-effective, our single-glazed partitions create bright, open environments without sacrificing style. Ideal for maximising light and space.',
    image: 'https://res.cloudinary.com/ddqqlfsjp/image/upload/v1752499461/WhatsApp_Image_2025-07-14_at_5.46.15_PM_ivbbij.jpg',
    aiHint: 'office partition',
    bestFor: [
      'General office spaces',
      'Open-plan layouts',
      'Areas where light is key',
    ],
  },
  {
    name: 'Double-Glazed (DGU) Partitions',
    description: 'Offering superior acoustic and thermal insulation, DGU partitions are perfect for creating quiet, confidential spaces like meeting rooms and private offices.',
    image: 'https://res.cloudinary.com/ddqqlfsjp/image/upload/v1752499461/WhatsApp_Image_2025-07-14_at_5.46.14_PM_2_ru49cq.jpg',
    aiHint: 'glass wall',
    bestFor: [
      'Meeting & conference rooms',
      'Private executive offices',
      'Noise-sensitive environments',
    ],
  },
  {
    name: 'Sliding Glass Partitions',
    description: 'Maximise flexibility with our elegant sliding partitions. Effortlessly transform large rooms into smaller, functional zones with a smooth, space-saving mechanism.',
    image: 'https://res.cloudinary.com/ddqqlfsjp/image/upload/v1752499461/WhatsApp_Image_2025-07-14_at_5.46.14_PM_1_wmhkuw.jpg',
    aiHint: 'sliding door',
    bestFor: [
      'Flexible workspaces',
      'Coworking and shared areas',
      'Adaptable room division',
    ],
  },
  {
    name: 'Frameless Glass Partitions',
    description: 'For a truly minimalist and high-end aesthetic, our frameless partitions offer uninterrupted views and a seamless, modern finish that elevates any interior.',
    image: 'https://res.cloudinary.com/ddqqlfsjp/image/upload/v1752499461/WhatsApp_Image_2025-07-14_at_5.46.14_PM_ctfedf.jpg',
    aiHint: 'frameless glass',
    bestFor: [
      'Executive suites & boardrooms',
      'Modern, minimalist designs',
      'Retail showrooms & entrances',
    ],
  },
];

export default function ProductTypesSection() {
  return (
    <section id="products" className="py-20 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold font-body text-primary sm:text-4xl">Our Products</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our range of aluminium and glass partition systems, designed for every need.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden bg-background border-border/20 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={product.image}
                    alt={product.name}
                    data-ai-hint={product.aiHint}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <CardTitle className="font-body text-2xl text-primary">{product.name}</CardTitle>
                <p className="mt-2 text-muted-foreground flex-grow">{product.description}</p>
                <div className="mt-6">
                  <h4 className="font-semibold font-body text-foreground">Best For:</h4>
                  <ul className="mt-2 space-y-2">
                    {product.bestFor.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-6 border-t border-border/20">
                    <Button asChild className="w-full">
                        <a href="#home">Enquire Now</a>
                    </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
