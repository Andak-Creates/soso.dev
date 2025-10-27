"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Job {
  company: string;
  period: string;
  positions: {
    title: string;
    responsibilities: string[];
  }[];
}

const experienceData: Job[] = [
  {
    company: "LogicGate",
    period: "2022 - Present",
    positions: [
      {
        title: "Frontend Developer III",
        responsibilities: [
          "I lead feature development on a team by analyzing requirements, designing solutions, and assist in evolving the frontend chapter of our organization.",
        ],
      },
      {
        title: "Frontend Developer II",
        responsibilities: [
          "I joined LogicGate and immediately took charge of feature development on my team while also assisting other frontend developers in the organization.",
        ],
      },
    ],
  },
  {
    company: "Cognizant",
    period: "2019 - 2021",
    positions: [
      {
        title: "Senior Fullstack Developer",
        responsibilities: [
          "I designed and developed full-stack RESTful microservices using Netflix OSS, Java, Spring Boot, SQL, Angular, React, and Vue.",
          "I led development teams, utilizing extreme programming principles such as agile, test-driven development, and paired programming.",
          "I spearheaded the information architecture and developed a reusable UI component library for healthcare clients.",
          "I led over 650 developers through a monthly enablement process, training them for client work on the Digital Engineering stack.",
        ],
      },
    ],
  },
  {
    company: "projekt202",
    period: "2018 - 2019",
    positions: [
      {
        title: "UI Developer",
        responsibilities: [
          "I assisted in developing a reusable UI component library and worked closely with a multi-million dollar airline client to gather requirements.",
          "My responsibility included developing solutions for enterprise clients worth millions of dollars, using Angular 7 for the frontend.",
        ],
      },
    ],
  },
  {
    company: "Major 4 Apps",
    period: "2018 - 2019",
    positions: [
      {
        title: "Founder & Developer",
        responsibilities: [
          "I developed custom applications for clients, designed, developed, tested, and supported mobile applications on iOS and Android platforms.",
          "My mobile game ranked among the top 200 on the Amazon App Store.",
        ],
      },
    ],
  },
];

export default function ExperienceTimeline() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const elementTop = rect.top;
        const elementHeight = rect.height;

        const start = windowHeight;
        const end = -elementHeight;
        const progress = 1 - (elementTop - end) / (start - end);

        const clampedProgress = Math.max(0, Math.min(1, progress));
        setScrollProgress(clampedProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="my-[100px]">
      {/* Experience Section Header */}
      <div className="relative space-y-8 text-center">
        <div className="space-y-4">
          <div className="relative w-full before:absolute before:top-0 before:h-px before:bg-border-primary/50 before:-left-4 before:right-[-1rem] md:before:-left-8 md:before:right-[-2rem] lg:before:inset-x-0 after:-left-4 after:right-[-1rem] md:after:-left-8 md:after:right-[-2rem] lg:after:inset-x-0 after:absolute after:bottom-0 after:h-px after:bg-border-primary/50">
            <div className="text-center text-sm font-medium text-indigo-600">
              <span>Experience</span>
            </div>
          </div>
          <div
            className="relative w-full before:absolute before:top-0 before:h-px before:bg-border-primary/50
           before:-left-4 before:right-4 md:before:-left-8 md:before:right-8 lg:before:inset-x-0
            after:-left-4 after:right-4 md:after:-left-8 md:after:right-8 lg:after:inset-x-0
             after:absolute after:bottom-0 after:h-px after:bg-border-primary/50"
          >
            <h2
              className="mx-auto max-w-lg text-balance text-3xl font-medium
             leading-10 tracking-tighter text-text-primary"
            >
              My work history and achievements timeline.
            </h2>
          </div>

          {/* Experiences and timeline */}
        </div>
      </div>

      {/* Timeline Container */}
    </div>
  );
}
