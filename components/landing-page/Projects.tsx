import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="relative space-y-10 md:space-y-16 px-[30px] my-[150px]">
      {/* Blog Section */}
      <div className="relative space-y-4 text-balance">
        <div
          className="relative w-full before:absolute 
        before:top-0 before:h-px before:bg-border-primary/50 
        before:-left-4 before:right-4 md:before:-left-8 md:before:right-8 
        lg:before:inset-x-0 after:-left-4 after:right-4 md:after:-left-8
         md:after:right-8 lg:after:inset-x-0 after:absolute after:bottom-0
          after:h-px after:bg-border-primary/50"
        >
          <div className="text-center text-sm font-medium text-indigo-600">
            <span>Projects</span>
          </div>
        </div>
        <div
          className="relative w-full before:absolute before:top-0 before:h-px
         before:bg-border-primary/50 before:-left-4 before:right-4 md:before:-left-8
          md:before:right-8 lg:before:inset-x-0 after:-left-4 after:right-4
           md:after:-left-8 md:after:right-8 lg:after:inset-x-0 after:absolute
            after:bottom-0 after:h-px after:bg-border-primary/50"
        >
          <h2
            className="mx-auto max-w-lg text-center text-3xl font-medium leading-10
           tracking-tighter text-text-primary md:text-4xl"
          >
            A sneak peek of some projects I have worked on && experimented on .
          </h2>
        </div>
      </div>

      <div className="z-10">
        <div
          className="relative w-full before:absolute before:top-0 before:h-px 
        before:bg-border-primary/50 before:-left-4 before:right-4 md:before:-left-8 
        md:before:right-8 lg:before:inset-x-0 after:-left-4 after:right-4 
        md:after:-left-8 md:after:right-8 lg:after:inset-x-0 after:absolute after:bottom-0
         after:h-px after:bg-border-primary/50"
        >
          <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            <li className="flex h-full flex-col rounded-3xl border border-border-primary bg-bg-primary p-2">
              <Link
                className="flex h-full flex-col rounded-2xl"
                href="/blog/the-only-nextjs-favicon-guide-youll-need"
              >
                <div className="relative w-full h-[280px] md:h-[225px]">
                  <Image
                    alt="a ship cruise website"
                    className="rounded-2xl object-cover"
                    src="/projects/cruise-ship.jpeg"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="my-4 flex w-full grow flex-col space-y-4 text-balance px-4">
                  <h2 className="text-lg font-semibold leading-7 tracking-tight text-slate-500">
                    Royal Caribbean • Cruise Ship Website
                  </h2>
                  <p className="grow leading-7 text-text-secondary">
                    An interactive cruise ship website built using Lovable ai as
                    an experimentation to test the ai's capabilities
                  </p>
                </div>
              </Link>
            </li>

            <li className=" flex h-full flex-col rounded-3xl border border-border-primary bg-bg-primary p-2">
              <Link
                className="flex h-full flex-col rounded-2xl"
                href="/blog/introducing-blogfolio-v5"
              >
                <div className="relative w-full h-[280px] md:h-[225px]">
                  <Image
                    alt="Brgest realestate website"
                    className="rounded-2xl object-cover"
                    src="/projects/brgest.jpeg"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="my-4 flex w-full grow flex-col space-y-4 text-balance px-4">
                  <h2 className="text-lg font-semibold leading-7 tracking-tight text-slate-500">
                    Brgest • Realestate Website
                  </h2>
                  <p className="grow leading-7 text-text-secondary">
                    A simple interactive and responsive real-estate website
                    build using HTML, CSS and JavaScript as a class project
                  </p>
                </div>
              </Link>
            </li>

            <li className=" flex h-full flex-col rounded-3xl border border-border-primary bg-bg-primary p-2">
              <Link
                className="flex h-full flex-col rounded-2xl"
                href="/blog/my-evolved-blogfolio-in-2023"
              >
                <div className="relative w-full h-[280px] md:h-[225px]">
                  <Image
                    alt="Glassmorphism template"
                    className="rounded-2xl object-cover"
                    src="/projects/glass-template.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="my-4 flex w-full grow flex-col space-y-4 text-balance px-4">
                  <h2 className="text-lg font-semibold leading-7 tracking-tight text-slate-500">
                    Lorem Glass • A website template
                  </h2>
                  <p className="grow leading-7 text-text-secondary">
                    A simple glassmorphism website template built using HTML,
                    CSS and JavaScript, Ideal for architectural portfolios and
                    design agencies.
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
