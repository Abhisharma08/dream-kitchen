import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Sun, Volume2, Thermometer, Palette, Recycle, Leaf, HeartPulse, Ratio, Badge, BadgeCheck, Wrench, Percent, BookCheck, ShieldCheck, LightbulbIcon, SparkleIcon } from 'lucide-react';

const benefits = [
  {
    icon: <BadgeCheck className="w-10 h-10 text-primary" />,
    title: 'Tailored to Your Taste',
    description: ' Choose from modern, classic, eclectic, or minimalist design languages.',
  },
  {
    icon: <SparkleIcon className="w-10 h-10 text-primary" />,
    title: '20+ Years of Experience',
    description: `We've transformed hundreds of homes with expertise and trust.`,
  },
  {
    icon: <LightbulbIcon className="w-10 h-10 text-primary" />,
    title: 'Full-Home Interior Solutions',
    description: 'From kitchens to bedrooms and wardrobes to TV units — we do it all.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: 'Fast Turnaround with 10-Year Warranty',
    description: 'Quick installations, high durability, and peace of mind built in.',
  },
  {
    icon: <Percent className="w-10 h-10 text-primary" />,
    title: 'Smart Budgeting & EMI Options',
    description: 'Flexible pricing and financing make your dream home accessible.',
  },
  {
    icon: <BookCheck className="w-10 h-10 text-primary" />,
    title: 'Visit or Book Online',
    description: 'Drop by our showroom or start with a free online estimate.',
  },
];

export default function KeyBenefitsSection() {
  return (
    <section id="benefits" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-body text-primary sm:text-4xl">Why Dream Kitchens?</h2>
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
