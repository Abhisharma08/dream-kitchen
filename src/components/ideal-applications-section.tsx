import { Building, Briefcase, House, Construction, Fence } from 'lucide-react';
import { Card, CardHeader, CardTitle } from './ui/card';
import Home from '@/app/page';

const applications = [
  { icon: <Building className="w-8 h-8 text-primary" />, text: 'Apartments & Villas' },
  { icon: <House className="w-8 h-8 text-primary" />, text: 'New Home Interiors' },
  { icon: <Construction className="w-8 h-8 text-primary" />, text: 'Renovation Projects' },
  { icon: <Fence className="w-8 h-8 text-primary" />, text: 'Rental Property Upgrades' },
  { icon: <Briefcase className="w-8 h-8 text-primary" />, text: 'Commercial & Office Interiors' },
];

export default function IdealApplicationsSection() {
  return (
    <section id="applications" className="py-20 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-body text-primary sm:text-4xl">Ideal Applications</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {applications.map((app) => (
            <Card key={app.text} className="text-center bg-background hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-fit mb-4">{app.icon}</div>
                <CardTitle className="font-body text-base font-medium">{app.text}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
