import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Sun, Volume2, Thermometer, Palette, Recycle, Leaf, HeartPulse, Ratio, Badge, BadgeCheck, Wrench } from 'lucide-react';

const benefits = [
  {
    icon: <BadgeCheck className="w-10 h-10 text-primary" />,
    title: 'Top-Tier Materials',
    description: 'We use premium-grade uPVC to ensure long-lasting performance and finish.',
  },
  {
    icon: <Ratio className="w-10 h-10 text-primary" />,
    title: 'Custom Solutions',
    description: 'Choose from a variety of designs, colors, and configurations to suit your space.',
  },
  {
    icon: <Wrench className="w-10 h-10 text-primary" />,
    title: 'Expert Installation',
    description: 'Fast, professional, and precise fitting by our skilled team.',
  },
  {
    icon: <Leaf className="w-10 h-10 text-primary" />,
    title: 'Eco-Conscious Choice',
    description: 'Our uPVC products are sustainable, recyclable, and energy-efficient.',
  },
  {
    icon: <HeartPulse className="w-10 h-10 text-primary" />,
    title: 'Trusted After-Sales Support',
    description: 'We’re with you every step of the way, even after installation.',
  },
  {
    icon: <Volume2 className="w-10 h-10 text-primary" />,
    title: 'Noise Reduction Advantage',
    description: 'Our uPVC doors and windows offer superior sound insulation, ensuring a quieter, more peaceful indoors.',
  },
];

export default function KeyBenefitsSection() {
  return (
    <section id="benefits" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-body text-primary sm:text-4xl">Why Alu Empire?</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.slice(0, 6).map((benefit, index) => (
            <Card key={index} className="bg-background border-border/20 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-6">
                <div className='flex items-center gap-4'>
                    {benefit.icon}
                    <CardTitle className="font-body text-xl">{benefit.title}</CardTitle>
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
