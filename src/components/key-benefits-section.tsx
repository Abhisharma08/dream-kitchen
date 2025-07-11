import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Sun, Volume2, Thermometer, Palette, Recycle } from 'lucide-react';

const benefits = [
  {
    icon: <Sun className="w-10 h-10 text-primary" />,
    title: 'Maximise Natural Light',
    description: 'Transparent glass panels let daylight flood your workspace, reducing lighting energy costs and enhancing employee well-being.',
  },
  {
    icon: <Volume2 className="w-10 h-10 text-primary" />,
    title: 'Superior Acoustic Control',
    description: 'Opt for single-glazed or double-glazed (DGU) partitions to reduce office noise. Ideal for confidential meetings and focused work.',
  },
  {
    icon: <Thermometer className="w-10 h-10 text-primary" />,
    title: 'Energy Efficiency & Condensation-Free',
    description: 'Our DGU setups include insulated air/gas layers that help maintain temperature, cut HVAC costs, and prevent moisture buildup.',
  },
  {
    icon: <Palette className="w-10 h-10 text-primary" />,
    title: 'Stylish & Minimalist Design',
    description: 'Slim aluminium profiles create a crisp, modern aesthetic that complements any office style.',
  },
  {
    icon: <Recycle className="w-10 h-10 text-primary" />,
    title: 'Durable & Sustainable',
    description: 'Premium aluminium frames resist corrosion and are fully recyclable. Clean, maintain, and sustain with ease.',
  },
];

export default function KeyBenefitsSection() {
  return (
    <section id="benefits" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">Key Benefits of Our Partition Systems</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.slice(0, 5).map((benefit, index) => (
            <Card key={index} className="bg-background border-border/20 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-6">
                <div className='flex items-center gap-4'>
                    {benefit.icon}
                    <CardTitle className="font-headline text-xl">{benefit.title}</CardTitle>
                </div>
                <CardDescription className="mt-4 text-base text-muted-foreground pt-4 border-t border-border/20">{benefit.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
