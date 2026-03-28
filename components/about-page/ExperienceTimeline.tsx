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
    company: "Triber",
    period: "2026 - Present",
    positions: [
      {
        title: "Frontend Developer II",
        responsibilities: [
          "I drive frontend feature development and support the growth of the frontend chapter, serving as Lead Frontend Engineer at one of their subsidiaries.",
        ],
      },
      {
        title: "Frontend Developer Intern I",
        responsibilities: [
          "I joined Triber as an intern, collaborating with and assisting frontend developers to build and maintain user-focused web applications.",
        ],
      },
    ],
  },
  {
    id: 2,
    company: "Vwindi",
    period: "2025 - present",
    positions: [
      {
        title: "Founder & developer",
        responsibilities: [
          "Started my own development start-up firm where we teach highend development skills, share educational resources and tips for beginners, and also build mobile and web products for public use. Some of our products are underway and we are looking to make break this year",
        ],
      },
    ],
  },
  {
    id: 3,
    company: "ProCodersNG",
    period: "2024 - 2025",
    positions: [
      {
        title: "Frontend Developer & Instructor",
        responsibilities: [
          "Worked as a Front-end development instructor, teaching students responsive front end development languages & technologies while also assisting in building Projects.",
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
    <div className="mt-[100px] mb-[150px] px-[30px]" data-aos="fade-up">
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
            <div
              className="text-center text-sm font-medium text-indigo-600 mt-[150px]"
              data-aos="zoom-in"
            >
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
              data-aos="fade-up"
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
                    priority
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between w-full ml-20 md:ml-0">
              {experienceData.map((experience) => (
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
                    {experience.positions.map((position, index) => (
                      <div key={index}>
                        <h2 className="my-6 font-semibold text-[20px]">
                          {position.title}
                        </h2>
                        <p className="fadedText">
                          {position.responsibilities}
                        </p>
                      </div>
                    ))}
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
