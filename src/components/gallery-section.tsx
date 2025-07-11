import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const galleryItems = [
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Single sliding door in a modern apartment',
    hint: 'sliding door',
    title: 'Single Sliding Doors',
    description: 'Modern single-panel solutions for compact spaces and minimalist designs.',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Pocket sliding door disappearing into a wall',
    hint: 'pocket door',
    title: 'Pocket Sliding Doors',
    description: 'Disappearing doors that slide into wall cavities, saving maximum floor space.',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Minimalist ghost door partition',
    hint: 'ghost door',
    title: 'Minimal Ghost Doors',
    description: 'Ultra-slim framed doors for seamless, almost invisible partitions.',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Multi-panel sliding doors in a large room',
    hint: 'glass partition',
    title: 'Multi-Panel Sliding Doors',
    description: 'Configurations for larger openings, offering great flexibility and style.',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Slide and fold internal partitions',
    hint: 'folding door',
    title: 'Slide Fold Internal Partitions',
    description: 'Doors that fold and slide to create versatile openings and adaptable layouts.',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Stylish sliding partition door',
    hint: 'modern partition',
    title: 'Sleek & Stylish Doors',
    description: 'Sleek, stylish, and highly functional sliding partition doors perfect for any interior.',
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">Design Gallery</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Sleek, stylish, and highly functional sliding partition doors perfect for residential and commercial interiors.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  data-ai-hint={item.hint}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-headline font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
