import { Suspense } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ThankYouContent from '@/components/thank-you-content';

function ThankYouFallback() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow flex items-center justify-center text-center">
                <Loader2 className="w-16 h-16 animate-spin text-primary" />
            </main>
            <Footer />
        </div>
    );
}

export default function ThankYouPage() {
    return (
        <Suspense fallback={<ThankYouFallback />}>
            <ThankYouContent />
        </Suspense>
    );
}
