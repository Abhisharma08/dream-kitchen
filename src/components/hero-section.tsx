import Image from "next/image";
import LeadForm from "./lead-form";

export default function HeroSection() {
  return (
    <section id="contact" className="relative bg-secondary/20">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1920x1080.png"
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline tracking-tight">
              Transform Spaces with Stylish Sliding Partition Doors
            </h1>
            <p className="mt-6 text-lg md:text-xl font-body text-gray-300">
              Transform your interiors with elegant, flexible, and space-saving sliding partition doors tailored to your design vision.
            </p>
          </div>
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
