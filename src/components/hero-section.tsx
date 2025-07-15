import Image from "next/image";
import { Button } from "./ui/button";
import LeadForm from "./lead-form";

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-secondary/20">
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1752499461/WhatsApp_Image_2025-07-14_at_5.43.13_PM_1_gzioxc.jpg"
          alt="Stylish sliding partition door in a modern living room"
          data-ai-hint="modern interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-body tracking-tight">
              <span className="text-primary">Transform</span> Office Spaces with Sleek, Functional <span className="text-primary">Aluminium Glass Partitions</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl font-body text-gray-300">
              Discover premium partition systems designed for modern workspaces — combining style, flexibility, and efficiency. Bring light, privacy, and productivity to life.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <a href="#lead-form">Get a Free Quote</a>
              </Button>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
