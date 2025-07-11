"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function StickyEnquireButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    const section = document.getElementById("home");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const toggleVisibility = () => {
      const servicesSection = document.getElementById("benefits");
      if (servicesSection) {
        const { top } = servicesSection.getBoundingClientRect();
        if (top <= window.innerHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4 pt-12 bg-gradient-to-t from-background/90 via-background/60 to-transparent md:hidden transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <Button
        size="lg"
        onClick={handleClick}
        className="w-full shadow-lg animate-glow"
        tabIndex={isVisible ? 0 : -1}
      >
        Get a Free Consultation
      </Button>
    </div>
  );
}
