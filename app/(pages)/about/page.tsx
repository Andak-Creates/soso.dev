"use client";

import AboutSection from "@/components/about-page/AboutSection";
import ExperienceTimeline from "@/components/about-page/ExperienceTimeline";
import DraggableImages from "@/components/ui/DraggableImages";
import { useEffect, useRef, useState } from "react";

function page() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Story timeline scroll progress
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate progress based on element position
        const elementTop = rect.top;
        const elementHeight = rect.height;

        // Start tracking when element enters viewport, end when it leaves
        const start = windowHeight;
        const end = -elementHeight;
        const progress = 1 - (elementTop - end) / (start - end);

        const clampedProgress = Math.max(0, Math.min(1, progress));
        setScrollProgress(clampedProgress);
        console.log(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate ball position along the path

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <main
        className="space-y-12 relative w-full before:absolute before:top-0
       before:h-px before:bg-border-primary/50 before:-left-4 before:right-4
        md:before:-left-8 md:before:right-8 lg:before:inset-x-0 after:-left-4
         after:right-4 md:after:-left-8 md:after:right-8 lg:after:inset-x-0 
         after:absolute after:bottom-0 after:h-px after:bg-border-primary/50"
      >
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-around lg:px-24">
          <div className="order-2 mx-auto max-w-lg lg:order-1 lg:m-0 lg:max-w-3xl lg:pr-12">
            <div className="text-center text-sm font-medium text-indigo-600 lg:text-left">
              <span>Good evening!</span>
            </div>
            <h1
              className="mx-auto max-w-2xl text-balance text-center
             text-4xl font-medium leading-tight tracking-tighter text-text-primary 
             md:text-5xl lg:text-left lg:text-6xl lg:leading-16"
            >
              I'm Kelvin, a creative frontend engineer.
            </h1>
          </div>

          {/* Draggable cards */}
          <DraggableImages />
        </div>
      </main>

      <span className="absolute left-1/2 top-40 -translate-y-1/2 translate-x-1/2">
        <span className="absolute left-1/2 h-px w-full -translate-x-1/2 transform bg-border-primary/50"></span>
      </span>

      {/* About Section */}
      <AboutSection />

      {/* xperience */}
      <ExperienceTimeline />
    </div>
  );
}

export default page;
