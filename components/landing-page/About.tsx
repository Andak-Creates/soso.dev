import Image from "next/image";
import Link from "next/link";
import AboutCard from "../ui/AboutCard";
import ConnectionsCard from "../ui/ConnectionsCard";

const About = () => {
  return (
    <section className="relative space-y-10 md:space-y-16 px-[30px]">
      {/* About Section */}
      <div className="space-y-4">
        <div
          className="relative w-full before:absolute before:top-0
           before:h-px before:bg-border-primary/50 before:-left-4 before:right-4
            md:before:-left-8 md:before:right-8 lg:before:inset-x-0 after:-left-4
             after:right-4 md:after:-left-8 md:after:right-8 lg:after:inset-x-0 
             after:absolute after:bottom-0 after:h-px after:bg-border-primary/50"
        >
          <div className="text-center text-sm font-medium text-indigo-600">
            <span>About</span>
          </div>
        </div>
        <div
          className="relative w-full before:absolute before:top-0
           before:h-px before:bg-border-primary/50 before:-left-4 before:right-4
            md:before:-left-8 md:before:right-8 lg:before:inset-x-0 after:-left-4
             after:right-4 md:after:-left-8 md:after:right-8 lg:after:inset-x-0
              after:absolute after:bottom-0 after:h-px after:bg-border-primary/50"
        >
          <h2
            className="mx-auto max-w-lg text-balance text-center text-3xl font-medium 
            leading-10 tracking-tight text-text-primary md:text-4xl"
          >
            Here's what sets me apart and makes me unique
          </h2>
        </div>
      </div>

      <div
        className="relative w-full before:absolute before:top-0 before:h-px
         before:bg-border-primary/50 before:-left-4 before:right-4 md:before:-left-8
          md:before:right-8 lg:before:inset-x-0 after:-left-4 after:right-4 
          md:after:-left-8 md:after:right-8 lg:after:inset-x-0 after:absolute after:bottom-0 
          after:h-px after:bg-border-primary/50"
      >
        <div className="grid grid-cols-1 gap-2 md:grid-cols-12 lg:grid-rows-[14]">
          {/* About Card */}
          <AboutCard />

          {/* Connections Card */}
          <ConnectionsCard />

          {/* Toolbox Card */}
          <div className="md:col-span-7 md:row-start-1 lg:col-span-5 lg:row-span-7">
            <Link href="/toolbox" className="block">
              <div className="group relative flex flex-col rounded-2xl border border-border-primary bg-bg-primary p-6 hover:bg-white hover:text-black overflow-hidden md:h-[304px] lg:h-[300px]">
                <div
                  className="absolute bottom-4 right-4 z-999 flex h-9 w-9 rotate-6 items-center justify-center rounded-full bg-indigo-200 opacity-0 transition-all duration-300 ease-in-out 
                group-hover:translate-y-2 group-hover:rotate-0 group-hover:opacity-100"
                >
                  <svg
                    className="h-6 w-6 text-indigo-600"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.25 15.25V6.75H8.75"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 7L6.75 17.25"
                    />
                  </svg>
                </div>
                <div className="pointer-events-none absolute inset-0 z-30 bg-linear-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
                <div className="absolute inset-y-0 left-0 z-20 w-1/5 bg-linear-to-r from-bg-primary to-transparent group-hover:from-white" />
                <div className="absolute inset-y-0 right-0 z-20 w-1/5 bg-linear-to-l from-bg-primary to-transparent group-hover:from-white" />

                <div className="z-20 text-center">
                  <h2 className="text-base font-semibold">Toolbox</h2>
                  <p className="mt-1 text-[#aaa]">
                    Check out my favorite tools and spots around the web.
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-center gap-3 transition-all duration-500 ease-in-out md:mt-12">
                  <div className="inline-block text-center">
                    <div
                      className="rounded-[20px] border border-border-primary p-2 transition-all duration-500 group-hover:border-indigo-400 delay-200 group-hover:-translate-y-3"
                      style={{ width: "110px", height: "110px" }}
                    >
                      <div
                        className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                        style={{
                          boxShadow:
                            "rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset",
                        }}
                      >
                        <Image
                          className="h-10 w-10 object-cover"
                          alt="figma"
                          src="/tools/figmaLogo.png"
                          width={40}
                          height={40}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="inline-block text-center">
                    <div
                      className="rounded-[20px] border border-border-primary p-2 transition-all duration-500 group-hover:border-indigo-400 delay-100 group-hover:-translate-y-3"
                      style={{ width: "110px", height: "110px" }}
                    >
                      <div
                        className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                        style={{
                          boxShadow:
                            "rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset",
                        }}
                      >
                        <Image
                          className="h-10 w-10 object-cover"
                          alt="git"
                          src="/tools/gitLogo.png"
                          width={40}
                          height={40}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="inline-block text-center">
                    <div
                      className="rounded-[20px] border border-border-primary p-2 
                      transition-all duration-1000 group-hover:border-indigo-400 
                      delay-0 group-hover:-translate-y-3"
                      style={{ width: "130px", height: "130px" }}
                    >
                      <div
                        className="grid h-full place-items-center rounded-xl border-2
                         border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                        style={{
                          boxShadow:
                            "rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset",
                        }}
                      >
                        <Image
                          className="h-10 w-10 object-cover"
                          alt="VSCode"
                          src="/tools/vsCodeLogo.png"
                          width={40}
                          height={40}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="inline-block text-center">
                    <div
                      className="rounded-[20px] border border-border-primary p-2 transition-all duration-500 group-hover:border-indigo-400 delay-100 group-hover:-translate-y-3"
                      style={{ width: "110px", height: "110px" }}
                    >
                      <div
                        className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                        style={{
                          boxShadow:
                            "rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset",
                        }}
                      >
                        <Image
                          className="h-10 w-10 object-cover"
                          alt="github"
                          src="/tools/githubLogo.png"
                          width={40}
                          height={40}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="inline-block text-center">
                    <div
                      className="rounded-[20px] border border-border-primary p-2 transition-all duration-500 group-hover:border-indigo-400 delay-200 group-hover:-translate-y-3"
                      style={{ width: "110px", height: "110px" }}
                    >
                      <div
                        className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                        style={{
                          boxShadow:
                            "rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset",
                        }}
                      >
                        <Image
                          className="h-10 w-10 object-cover"
                          alt="vscode"
                          src="/tools/vsCodeLogo.png"
                          width={40}
                          height={40}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Book a Call Card */}
          <div className="md:col-span-12 lg:col-span-7 lg:row-span-5">
            <a
              href="https://cal.com/soso.fedev/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="group relative flex flex-col rounded-2xl border border-border-primary bg-bg-primary p-6 hover:bg-white hover:text-black overflow-hidden h-[220px]">
                <div className="absolute bottom-4 right-4 z-999 flex h-9 w-9 rotate-6 items-center justify-center rounded-full bg-indigo-200 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-[-8px] group-hover:rotate-0 group-hover:opacity-100">
                  <svg
                    className="h-6 w-6 text-indigo-600"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.25 15.25V6.75H8.75"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 7L6.75 17.25"
                    />
                  </svg>
                </div>
                <div
                  className="pointer-events-none absolute inset-0 z-30 bg-linear-to-tl
                 from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity 
                 duration-300 ease-in-out group-hover:opacity-100 "
                />

                <div className="group grid h-full grid-cols-12 gap-5">
                  <div className="col-span-5 text-balance md:col-span-5">
                    <h2 className="mb-4 text-base font-semibold">
                      Book a call with me
                    </h2>
                    <p className="mb-2 text-[#aaa]">
                      I'd love to chat even if there's no agenda!
                    </p>
                  </div>

                  {/* Calendar Component */}
                  <div className="absolute left-[43%] top-7 transition-all duration-500 ease-out md:-right-14 md:left-auto md:group-hover:-right-12 md:group-hover:top-5">
                    <div className="h-[278px] w-[550px] rounded-[20px] border border-border-primary p-2 transition-colors duration-100 group-hover:border-indigo-400">
                      <div
                        className="h-full rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] p-3"
                        style={{
                          boxShadow:
                            "rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset",
                        }}
                      >
                        <div className="flex items-center space-x-2">
                          <p className="text-sm text-gray-500">
                            <span className="font-medium">October, 2025</span>
                          </p>
                          <span className="h-1 w-1 rounded-full bg-text-tertiary">
                            &nbsp;
                          </span>
                          <p className="text-xs text-text-tertiary text-[#aaa]">
                            30 min call
                          </p>
                        </div>

                        <div className="mt-4 grid grid-cols-7 grid-rows-5 gap-2 px-4 text-black">
                          {/* Day headers */}
                          <div className="col-span-1 row-span-1 flex h-8 w-8 items-center justify-center text-text-tertiary">
                            <span className="font-medium text-xs">SUN</span>
                          </div>
                          <div className="col-span-1 row-span-1 flex h-8 w-8 items-center justify-center text-text-tertiary">
                            <span className="font-medium text-xs">MON</span>
                          </div>
                          <div className="col-span-1 row-span-1 flex h-8 w-8 items-center justify-center text-text-tertiary">
                            <span className="font-medium text-xs">TUE</span>
                          </div>
                          <div className="col-span-1 row-span-1 flex h-8 w-8 items-center justify-center text-text-tertiary">
                            <span className="font-medium text-xs">WED</span>
                          </div>
                          <div className="col-span-1 row-span-1 flex h-8 w-8 items-center justify-center text-text-tertiary">
                            <span className="font-medium text-xs">THU</span>
                          </div>
                          <div className="col-span-1 row-span-1 flex h-8 w-8 items-center justify-center text-text-tertiary">
                            <span className="font-medium text-xs">FRI</span>
                          </div>
                          <div className="col-span-1 row-span-1 flex h-8 w-8 items-center justify-center text-text-tertiary">
                            <span className="font-medium text-xs">SAT</span>
                          </div>

                          {/* Calendar dates */}
                          {[
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                            16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
                            29, 30, 31,
                          ].map((day) => {
                            const availableDays = [7, 11, 12, 17, 23, 30];
                            const isAvailable = availableDays.includes(day);

                            return (
                              <div
                                key={day}
                                className={`col-span-1 row-span-1 flex h-8 w-8 items-center justify-center rounded ${
                                  isAvailable
                                    ? "bg-white/75  hover:bg-white cursor-pointer text-black"
                                    : "text-text-tertiary text-[#aaa]"
                                }`}
                              >
                                <span className="font-medium text-sm ">
                                  {day}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
