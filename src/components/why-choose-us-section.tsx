import { Gem, Scissors, Wrench, Leaf, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const reasons = [
    {
        icon: <Gem className="w-8 h-8 text-primary" />,
        title: '1. Premium Quality Materials',
        description: 'High-grade aluminium and glass for long-lasting performance.',
    },
    {
        icon: <Scissors className="w-8 h-8 text-primary" />,
        title: '2. Tailored Customisation',
        description: 'Pick from tinted, frosted, or clear glass, plus frame finishes in matte black, silver, wood-look, and more.',
    },
    {
        icon: <Wrench className="w-8 h-8 text-primary" />,
        title: '3. Quick & Hassle-Free Install',
        description: 'Lightweight modular components deliver fast, on-site assembly with minimal downtime.',
    },
    {
        icon: <Leaf className="w-8 h-8 text-primary" />,
        title: '4. Environmentally Conscious Design',
        description: 'Recyclable materials and energy-saving features align with sustainable building practices.',
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: '5. End-to-End Support',
        description: 'From design and installation to after-sales care, our team ensures seamless delivery and performance.',
    },
];

export default function WhyChooseUsSection() {
    return (
        <section id="why-us" className="py-20 sm:py-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-body text-primary sm:text-4xl">Why Choose Our System?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {reasons.slice(0,5).map((reason) => (
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
