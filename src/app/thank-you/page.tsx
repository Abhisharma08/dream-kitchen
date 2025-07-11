import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center p-8 max-w-lg mx-auto">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl sm:text-4xl font-bold font-headline text-primary mb-4">
            Thank You!
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your consultation request has been received. Our team will get in touch with you shortly to discuss your project.
          </p>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
