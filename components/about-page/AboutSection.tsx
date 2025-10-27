"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(1787);

  useEffect(() => {
    // Measure content height and set SVG height
    const updateSvgHeight = () => {
      if (timelineRef.current) {
        const contentHeight = timelineRef.current.scrollHeight;
        setSvgHeight(contentHeight - 100); // Subtract some padding
      }
    };

    updateSvgHeight();
    window.addEventListener("resize", updateSvgHeight);

    return () => window.removeEventListener("resize", updateSvgHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !pathRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Start when top of element reaches bottom of viewport
      const startPoint = windowHeight;

      // End later than before: bottom of element reaches center of viewport
      const endPoint = windowHeight / 2;

      const progress =
        (startPoint - elementTop) / (startPoint - endPoint + elementHeight);

      // ✅ Clamp + speed control fix
      const clampedProgress = Math.max(0, Math.min(progress, 1));
      const speedFactor = 0.72;
      const slowedProgress = clampedProgress * speedFactor;

      setScrollProgress(slowedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate ball position along the path
  const getBallPosition = () => {
    if (!pathRef.current) return { x: 145, y: 0 };

    const pathLength = pathRef.current.getTotalLength();
    const point = pathRef.current.getPointAtLength(pathLength * scrollProgress);

    return { x: point.x, y: point.y };
  };

  const ballPosition = getBallPosition();

  return (
    <div className="relative space-y-8 text-center px-[30px]">
      <div className="space-y-4">
        <div
          className="relative w-full before:absolute before:top-0 before:h-px before:bg-border-primary/50
         before:-left-4 before:right-4 md:before:-left-8 md:before:right-8 lg:before:inset-x-0
          after:-left-4 after:right-4 md:after:-left-8 md:after:right-8 lg:after:inset-x-0 
          after:absolute after:bottom-0 after:h-px after:bg-border-primary/50"
        >
          <div className="text-center text-sm font-medium text-indigo-600">
            <span>About</span>
          </div>
        </div>
        <div
          className="relative w-full before:absolute before:top-0 before:h-px before:bg-border-primary/50 
        before:-left-4 before:right-4 md:before:-left-8 md:before:right-8 lg:before:inset-x-0 after:-left-4
         after:right-4 md:after:-left-8 md:after:right-8 lg:after:inset-x-0 after:absolute after:bottom-0 after:h-px after:bg-border-primary/50"
        >
          <h2 className="mx-auto max-w-xl text-balance text-3xl font-medium leading-10 tracking-tighter text-text-primary">
            Here's a quick intro about me and what I love to do
          </h2>
        </div>
      </div>

      {/* Story Timeline */}
      <div className="relative h-fit w-full overflow-hidden" ref={timelineRef}>
        <div className="absolute left-0 top-0 w-full md:left-4 lg:left-[355px] xl:left-[455px]">
          <svg
            className="user-select-none pointer-events-none hidden lg:block"
            width="380"
            height={svgHeight}
            viewBox={`-10 -10 380 ${svgHeight + 20}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMin meet"
          >
            <defs>
              <filter
                id="purpleGlow"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feGaussianBlur stdDeviation="15" result="blur" />
                <feColorMatrix
                  in="blur"
                  type="matrix"
                  values="0 0 0 0 0.423 0 0 0 0 0.278 0 0 0 0 1 0 0 0 0.6 0"
                />
              </filter>
              <mask id="pathMask">
                <path
                  d={`M145 0.49999L145 43C145 51.8365 137.836 59 129 59L19.9999 59C11.1633 59 3.99987 66.1634 3.99987 75L3.99962 ${
                    svgHeight * 0.29
                  }C3.99961 ${svgHeight * 0.29 + 8} 11.163 ${
                    svgHeight * 0.3
                  } 19.9996 ${svgHeight * 0.3}L256 ${svgHeight * 0.3}C264.836 ${
                    svgHeight * 0.3
                  } 272 ${svgHeight * 0.305} 272 ${svgHeight * 0.31}L272 ${
                    svgHeight * 0.465
                  }C272 ${svgHeight * 0.467} 270.314 ${
                    svgHeight * 0.469
                  } 267.314 ${svgHeight * 0.471}L78.6861 ${
                    svgHeight * 0.577
                  }C75.6855 ${svgHeight * 0.578} 71.6158 ${
                    svgHeight * 0.58
                  } 67.3724 ${svgHeight * 0.58}L19.9996 ${
                    svgHeight * 0.58
                  }C11.163 ${svgHeight * 0.58} 3.99959 ${
                    svgHeight * 0.585
                  } 3.99959 ${svgHeight * 0.59}L3.99963 ${
                    svgHeight * 0.825
                  }C3.99963 ${svgHeight * 0.833} 11.1631 ${
                    svgHeight * 0.835
                  } 19.9996 ${svgHeight * 0.835}L256 ${
                    svgHeight * 0.835
                  }C264.836 ${svgHeight * 0.835} 272 ${svgHeight * 0.842} 272 ${
                    svgHeight * 0.845
                  }L272 ${svgHeight * 0.985}C272 ${svgHeight * 0.988} 279.163 ${
                    svgHeight * 0.993
                  } 288 ${svgHeight * 0.993}L380 ${svgHeight * 0.993}`}
                  stroke="white"
                  strokeWidth="8"
                  strokeLinejoin="round"
                  fill="none"
                />
              </mask>
              <filter
                id="filter0_i_395_898"
                x="0"
                y="0.5"
                width="380"
                height={svgHeight}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="0.75" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.32 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_395_898"
                />
              </filter>
            </defs>

            {/* Glowing circle that follows the path */}
            <g mask="url(#pathMask)">
              <circle
                cx={ballPosition.x}
                cy={ballPosition.y}
                r="120"
                fill="#6C47FF"
                filter="url(#purpleGlow)"
                opacity="0.5"
                style={{ transition: "cx 0.1s ease-out, cy 0.1s ease-out" }}
              />
            </g>

            <g filter="url(#filter0_i_395_898)">
              <path
                ref={pathRef}
                d={`M145 0.49999L145 43C145 51.8365 137.836 59 129 59L19.9999 59C11.1633 59 3.99987 66.1634 3.99987 75L3.99962 ${
                  svgHeight * 0.29
                }C3.99961 ${svgHeight * 0.29 + 8} 11.163 ${
                  svgHeight * 0.3
                } 19.9996 ${svgHeight * 0.3}L256 ${svgHeight * 0.3}C264.836 ${
                  svgHeight * 0.3
                } 272 ${svgHeight * 0.305} 272 ${svgHeight * 0.31}L272 ${
                  svgHeight * 0.465
                }C272 ${svgHeight * 0.467} 270.314 ${
                  svgHeight * 0.469
                } 267.314 ${svgHeight * 0.471}L78.6861 ${
                  svgHeight * 0.577
                }C75.6855 ${svgHeight * 0.578} 71.6158 ${
                  svgHeight * 0.58
                } 67.3724 ${svgHeight * 0.58}L19.9996 ${
                  svgHeight * 0.58
                }C11.163 ${svgHeight * 0.58} 3.99959 ${
                  svgHeight * 0.585
                } 3.99959 ${svgHeight * 0.59}L3.99963 ${
                  svgHeight * 0.825
                }C3.99963 ${svgHeight * 0.833} 11.1631 ${
                  svgHeight * 0.835
                } 19.9996 ${svgHeight * 0.835}L256 ${
                  svgHeight * 0.835
                }C264.836 ${svgHeight * 0.835} 272 ${svgHeight * 0.842} 272 ${
                  svgHeight * 0.845
                }L272 ${svgHeight * 0.985}C272 ${svgHeight * 0.988} 279.163 ${
                  svgHeight * 0.993
                } 288 ${svgHeight * 0.993}L380 ${svgHeight * 0.993}`}
                stroke="#D6DADE"
                strokeOpacity="0.24"
                strokeWidth="8"
                strokeLinejoin="round"
              />
            </g>
            <circle
              className="fill-indigo-600"
              cx={ballPosition.x}
              cy={ballPosition.y}
              r="10"
              style={{ transition: "cx 0.1s ease-out, cy 0.1s ease-out" }}
            />
          </svg>
        </div>

        {/* Story Cards */}
        {/* coding origin */}
        <div className="grid grid-cols-1 gap-8 py-12 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-20 xl:py-32">
          <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
            <div className="mb-8 lg:hidden">
              <div className="relative mx-auto w-fit">
                <div className="group inline-block text-center">
                  <div
                    className="rounded-[20px] border border-border-primary p-2"
                    style={{ width: 188, height: 278 }}
                  >
                    <div
                      className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                      style={{
                        boxShadow:
                          "rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset",
                      }}
                    ></div>
                  </div>
                </div>
                <Image
                  className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                  alt="A headshot"
                  src="/avatars/image1.jpg"
                  width={180}
                  height={270}
                />
              </div>
            </div>
            <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-10 tracking-tighter text-text-primary">
              My programming origins
            </h2>
            <p className="mb-6 text-base leading-8 text-text-secondary">
              Sometime in 2019, I watched someone style their HTML using CSS at
              a barbing salon and I was amazed at how simple lines of code could
              transform something plain into something visually appealing. I
              became curious and asked him to explain what he was doing. That
              moment sparked my interest in the world of development I knew then
              that I wanted to learn this “coding” thing too.
            </p>

            <p className="mb-6 text-base leading-8 text-text-secondary">
              I&apos;ve always had a passion for creating and bringing ideas to
              life, so the excitement to start building was immediate. Although
              it took some time before I officially began my learning journey, I
              eventually took my first real step into tech in October 2023 — and
              I haven&apos;t looked back since.
            </p>
          </div>

          <div className="hidden lg:order-1 lg:block">
            <div className="relative mx-auto w-fit">
              <div className="group inline-block text-center">
                <div
                  className="rounded-[20px] border border-border-primary p-2"
                  style={{ width: 188, height: 278 }}
                >
                  <div
                    className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                    style={{
                      boxShadow:
                        "rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset",
                    }}
                  ></div>
                </div>
              </div>
              <Image
                className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                alt="A headshot"
                src="/avatars/image1.jpg"
                width={180}
                height={270}
              />
            </div>
          </div>
        </div>

        {/* Life beyond coding */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:justify-between lg:pl-12 lg:mb-[140px]">
          <div className="flex flex-col items-center text-left lg:items-start">
            <div className="mb-8 lg:hidden">
              <div className="relative mx-auto w-fit">
                <div className="group inline-block text-center">
                  <div
                    className="rounded-[20px] border border-border-primary p-2"
                    style={{ width: 188, height: 278 }}
                  >
                    <div
                      className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                      style={{
                        boxShadow:
                          "rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset",
                      }}
                    ></div>
                  </div>
                </div>
                <Image
                  className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                  alt="Speaking at C3 Conf!"
                  src="/avatars/image2.jpg"
                  width={180}
                  height={270}
                />
              </div>
            </div>
            <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-10 tracking-tighter text-text-primary">
              Life Beyond Code
            </h2>
            <p className="mb-6 text-base leading-8 text-text-secondary">
              outside being a front-end developer, I am also really passionate
              about making music, which I currently also do professionally, I
              enjoy playing basketball among other sports.
            </p>

            <p className="mb-6 text-base leading-8 text-text-secondary">
              I am also big on reading books whenever I get the time to,
              it&apos;s always nice to take a little break sit back and enjoy
              something someone else created.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="relative mx-auto w-fit">
              <div className="group inline-block text-center">
                <div
                  className="rounded-[20px] border border-border-primary p-2"
                  style={{ width: 188, height: 278 }}
                >
                  <div
                    className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                    style={{
                      boxShadow:
                        "rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset",
                    }}
                  ></div>
                </div>
              </div>
              <Image
                className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                alt="Speaking at C3 Conf!"
                src="/avatars/image2.jpg"
                width={180}
                height={270}
              />
            </div>
          </div>
        </div>

        {/* these days */}
        <div className="grid grid-cols-1 gap-8 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between xl:py-40">
          <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
            <div className="mb-8 lg:hidden">
              <div className="relative mx-auto w-fit">
                <div className="group inline-block text-center">
                  <div
                    className="rounded-[20px] border border-border-primary p-2"
                    style={{ width: 188, height: 278 }}
                  >
                    <div
                      className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                      style={{
                        boxShadow:
                          "rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset",
                      }}
                    ></div>
                  </div>
                </div>
                <Image
                  className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                  alt="A headshot"
                  src="/avatars/image1.jpg"
                  width={180}
                  height={270}
                />
              </div>
            </div>
            <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-10 tracking-tighter text-text-primary">
              these Days
            </h2>
            <p className="mb-6 text-base leading-8 text-text-secondary">
              Currently leading a team as a Frontend Engineer at TrueNorth
              Solutions where we are building some pretty awesome stuffs
            </p>
            <p className="mb-6 text-base leading-8 text-text-secondary">
              When I&apos;m not working, you&apos;ll find me building creative
              personal projects, making music in the studio, failing
              spectacularly at playing vidoe games like call of duty warzone or
              hanging out with the family
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="relative mx-auto w-fit">
              <div className="group inline-block text-center">
                <div
                  className="rounded-[20px] border border-border-primary p-2"
                  style={{ width: 188, height: 278 }}
                >
                  <div
                    className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                    style={{
                      boxShadow:
                        "rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset",
                    }}
                  ></div>
                </div>
              </div>
              <Image
                className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                alt="A headshot"
                src="/avatars/image1.jpg"
                width={180}
                height={270}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
