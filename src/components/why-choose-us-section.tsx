import { Gem, Leaf,EarOff, Wrench, Lock, HandCoins, ShieldCheck, HeartPulse, IndianRupee, Award, } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const reasons = [
    {
        icon: <Award className="w-8 h-8 text-primary" />,
        title: 'Best Home Interior Designs in Bhopal',
        description: 'Trusted by hundreds of homeowners for premium, elegant interiors.',
    },
    {
        icon: <Wrench className="w-8 h-8 text-primary" />,
        title: 'Personalised Consultations',
        description: 'We understand your vision and turn it into reality — with 3D designs and mood boards.',
    },
    {
        icon: <IndianRupee className="w-8 h-8 text-primary" />,
        title: 'Transparent Pricing',
        description: 'No hidden charges — just clear estimates and real value.',
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: 'Durable Quality',
        description: 'We use moisture-resistant boards, top-brand fittings, and tested finishes that last.',
    },
    {
        icon: <HeartPulse className="w-8 h-8 text-primary" />,
        title: 'After-Sales Support',
        description: 'Our relationship continues beyond installation, with dedicated service and support.',
    },
   
];

export default function WhyChooseUsSection() {
    return (
        <section id="why-us" className="py-20 sm:py-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-body text-primary sm:text-4xl">Why Choose Dream Kitchens?</h2>
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
