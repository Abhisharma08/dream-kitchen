import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, CheckCircle } from 'lucide-react';

const products = [
  {
    name: 'Windows',
    description: 'From sliding to casement designs, our uPVC windows combine style with functionality. Enjoy wide-open views, fresh air, and exceptional performance.',
    image: 'https://res.cloudinary.com/ddqqlfsjp/image/upload/v1752499461/WhatsApp_Image_2025-07-14_at_5.46.15_PM_ivbbij.jpg',
    aiHint: 'Windows',
  },
  {
    name: 'Doors',
    description: 'Choose from a variety of uPVC doors that enhance your home’s entrance while ensuring security and energy efficiency. Stylish, sturdy, and weatherproof.',
    image: 'https://res.cloudinary.com/ddqqlfsjp/image/upload/v1752499461/WhatsApp_Image_2025-07-14_at_5.46.14_PM_2_ru49cq.jpg',
    aiHint: 'Doors',
    
  },
  {
    name: 'Accessories',
    description: 'Complete your installation with premium accessories designed to complement and enhance your uPVC door and window systems.',
    image: 'https://res.cloudinary.com/ddqqlfsjp/image/upload/v1752499461/WhatsApp_Image_2025-07-14_at_5.46.14_PM_1_wmhkuw.jpg',
    aiHint: 'Accessories',
   
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
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
