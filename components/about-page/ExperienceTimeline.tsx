"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Job {
  id: number;
  company: string;
  period: string;
  positions: {
    title: string;
    responsibilities: string[];
  }[];
}

const experienceData: Job[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
  const lineRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const rect = contentRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Start when timeline is more visible (30% from top of viewport)
      const startOffset = viewportHeight * 0.5;
      const scrollStart = startOffset - rect.top;

      // Shorter distance = faster animation
      const totalDistance = rect.height * 0.8 + startOffset;

      // Calculate progress (0 to 1)
      const progress = scrollStart / totalDistance;

      setScrollY(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial run
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mt-[100px] mb-[150px] px-[30px]">
      {/* Experience Section Header */}
      <div className="relative space-y-8 text-center">
        <div className="space-y-4">
          <div
            className="relative w-full before:absolute before:top-0 before:h-px
           before:bg-border-primary/50 before:-left-4 before:right-4 md:before:-left-8
            md:before:right-8 lg:before:inset-x-0 after:-left-4 after:right-4
             md:after:-left-8 md:after:right-8 lg:after:inset-x-0 after:absolute
              after:bottom-0 after:h-px after:bg-border-primary/50"
          >
            <div className="text-center text-sm font-medium text-indigo-600 mt-[150px]">
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
          <div
            ref={contentRef}
            className="flex flex-row relative md:px-[30px] border-none md:border-x mt-[50px]"
          >
            {/* Scroll Timeline */}
            <div
              ref={lineRef}
              className="absolute left-0 md:left-[20%] top-0 bottom-0 w-1 rounded-full"
            >
              {/* Blue background line */}
              <div className="absolute inset-0 bg-blue-400 rounded-full" />

              {/* White progress overlay */}
              <div
                className="absolute top-0 left-0 right-0 bg-white rounded-full transition-all duration-100"
                style={{ height: `${scrollY * 100}%` }}
              />

              {/* Scroll Image Position */}
              <div
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-100"
                style={{ top: `${scrollY * 100}%` }}
              >
                <div className="relative h-10 w-10 rounded-full border-2 border-white overflow-hidden shadow-md">
                  <Image
                    src="/avatars/image1.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between w-full ml-20 md:ml-0">
              {experienceData.map((experience: any) => (
                <div
                  key={experience.id}
                  className="flex flex-row md:justify-between w-full mb-15"
                >
                  {/* Company name */}
                  <div className="flex-col text-left hidden md:flex mt-6">
                    <h2 className="text-[20px] font-semibold">
                      {experience.company}
                    </h2>
                    <small className="fadedText">{experience.period}</small>
                  </div>

                  {/* Roles */}
                  <div className="flex flex-col text-left w-full md:w-[70%]">
                    {experience.positions.map(
                      (position: any, index: number) => (
                        <div key={index}>
                          <h2 className="my-6 font-semibold text-[20px]">
                            {position.title}
                          </h2>
                          <p className="fadedText">
                            {position.responsibilities}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
