import { Gem, Leaf,EarOff, Wrench, Lock, HandCoins, } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const reasons = [
    {
        icon: <Gem className="w-8 h-8 text-primary" />,
        title: 'Superior Insulation & Energy Efficiency',
        description: 'Keep your home cool in summer and warm in winter. Our uPVC doors and windows provide excellent thermal insulation, helping reduce energy bills and maintain a comfortable indoor temperature year-round.',
    },
    {
        icon: <Wrench className="w-8 h-8 text-primary" />,
        title: 'Low Maintenance & High Durability',
        description: 'Say goodbye to rust, rot, and constant repairs. Our uPVC products are weather-resistant, fade-proof, and require minimal maintenance — built to last through the years with zero hassle.',
    },
    {
        icon: <Lock className="w-8 h-8 text-primary" />,
        title: 'Enhanced Security & Peace of Mind',
        description: 'Strong, solid frames with advanced locking systems provide robust protection for your home, ensuring you and your loved ones feel safe and secure.',
    },
    {
        icon: <EarOff className="w-8 h-8 text-primary" />,
        title: 'Soundproof Living',
        description: 'Enjoy a quieter, more peaceful environment. uPVC frames offer excellent acoustic insulation, keeping outside noise where it belongs — outside.',
    },
    {
        icon: <HandCoins className="w-8 h-8 text-primary" />,
        title: 'Cost-Effective Elegance',
        description: 'Get the perfect blend of performance, design, and affordability. uPVC is a smart alternative to traditional materials, offering long-term value without compromising on aesthetics.',
    },
    {
        icon: <Leaf className="w-8 h-8 text-primary" />,
        title: 'Eco-Friendly & Sustainable',
        description: 'uPVC is not only long-lasting but also environmentally responsible. It is 100% recyclable and helps reduce your carbon footprint by improving energy efficiency, making it a smart choice for a greener future.',
    },
];

export default function WhyChooseUsSection() {
    return (
        <section id="why-us" className="py-20 sm:py-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-body text-primary sm:text-4xl">Why Choose uPVC from Alu Empire?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {reasons.slice(0,6).map((reason) => (
                     <Card key={reason.title} className="text-center border-t-4 border-primary bg-secondary/30">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit mb-4">
                                {reason.icon}
                            </div>
                            <CardTitle className="font-body text-xl">{reason.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{reason.description}</p>
                        </CardContent>
                     </Card>
                   ))}
                </div>
            </div>
        </section>
    )
}
