import { Building, Store, Briefcase, HeartPulse, Utensils } from 'lucide-react';
import { Card, CardHeader, CardTitle } from './ui/card';

const applications = [
  { icon: <Briefcase className="w-8 h-8 text-primary" />, text: 'Corporate Offices & Private Suites' },
  { icon: <Building className="w-8 h-8 text-primary" />, text: 'Conference & Meeting Rooms' },
  { icon: <Store className="w-8 h-8 text-primary" />, text: 'Retail Showrooms & Boutiques' },
  { icon: <HeartPulse className="w-8 h-8 text-primary" />, text: 'Healthcare Facilities & Clinics' },
  { icon: <Utensils className="w-8 h-8 text-primary" />, text: 'Hospitality: Hotels, Cafés & Restaurants' },
];

export default function IdealApplicationsSection() {
  return (
    <section id="applications" className="py-20 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">Ideal Applications</h2>
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
