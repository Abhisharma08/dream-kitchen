import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, CheckCircle } from 'lucide-react';

const products = [
  {
    name: 'Modular Kitchens',
    description: 'Stylish, functional kitchens with customised layouts and smart storage, built to suit your daily needs and taste.',
    image: 'https://res.cloudinary.com/ddqqlfsjp/image/upload/v1754024721/beautiful-kitchen-interior-design_1_bspnyy.jpg',
    aiHint: 'Modular Kitchens',
  },
  {
    name: 'Wardrobes & Storage',
    description: 'Sliding, hinged, or walk-in — our wardrobes are built to blend style with efficient space management.',
    image: 'https://res.cloudinary.com/ddqqlfsjp/image/upload/v1754024817/3d-rendering-luxury-scandinavian-wood-walk-closet-with-wardrobe-make-up-table_1_qkliun.jpg',
    aiHint: 'Wardrobes & Storage',
    
  },
  {
    name: 'Living & Dining Spaces',
    description: 'From TV units to wall paneling and dining setups — we design warm, welcoming social spaces for every home.',
    image: 'https://res.cloudinary.com/ddqqlfsjp/image/upload/v1754024916/2_vj6fbk.png',
    aiHint: 'Living & Dining Spaces',
   
  },
   {
    name: 'Bedroom Interiors',
    description: 'Create serene, restful bedrooms with coordinated themes, clever storage, and beautiful finishing touches.',
    image: 'https://res.cloudinary.com/ddqqlfsjp/image/upload/v1754024721/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_1_jq86z4.jpg',
    aiHint: 'Bedroom Interiors',
   
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
          <h2 className="text-3xl font-bold font-body text-primary sm:text-4xl">Our Interior Solutions</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our range of home interior offerings crafted for every room and purpose.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
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
                </div>
                <div className="mt-0 pt-6 border-t border-border/20">
                    <Button asChild className="w-full">
                        <a href="#lead-form">Enquire Now</a>
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
