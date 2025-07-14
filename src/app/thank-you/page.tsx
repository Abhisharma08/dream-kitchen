import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';
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
        <>
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>
            </noscript>
            <Suspense fallback={<ThankYouFallback />}>
                <ThankYouContent />
            </Suspense>
        </>
    );
}
